<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-0 px-0 my-0 scrollerStyle" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
             <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">{{ $t('duels.page_loader') }}</span>
         </div>
         <div class="col-2 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; "  >
               <v-btn icon @click="showFullPage" class="sliderfullBtn" v-if="duelPanelIsWeb" ><v-icon color="#3E8893">mdi-launch mdi-18px</v-icon></v-btn> 
         </div>
      </div>
     </div>

     

       <v-app class="col-12 py-0 my-0" v-if="pageContent == ''">
      <div 
       
    style="border: 0; height:91%; top:7%; position:fixed;left:0; align-items:center; justify-content:center;" class="col-md-8 offset-md-2 px-5 col-lg-4 offset-lg-4 px-1 py-0 d-flex" >
         <v-progress-linear indeterminate color="#3E8893" rounded ></v-progress-linear>
       </div>
    </v-app>

     <div class="col-12 py-1 my-0 px-0" v-else>
          
             <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" v-if="duelPanelIsWeb"
   :srcdoc="pageContent" 
    style="border: 0; height:91%; position:fixed;left:0;" class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 px-1 py-0" ></iframe>

<textarea  readonly v-else v-model="pageContent"  style="border: 0; height:91%; position:fixed;left:0; top:6%; font-size:14px; border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;" class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 px-3 py-3" >
</textarea>
        </div>

         </div>
       </div>

       

     </v-app>
</template>
<script>


export default {
    data(){
        return{
          pageContent : '',
          recheckCodeBox:true,
          duelPanelIsWeb: false,
          
        }
    },
    components: {
   
  },
   mounted(){
      this.$root.showTabs= false;
       this.$root.showHeader = false;
       this.initiateLoader();
       this.trackUser();
       this.$root.pageLoaderOpened = true;
     
        
    },
    methods:{

   showFullPage:function(){

          window.open('/run-panel/' + this.$root.CodeFilesData[1].panel_id, '_blank');
      },
       activateBot:function(){
         this.$root.selectedPage  = this.$root.userPageTrack.filter((page)=>{
            return page.page_name == 'duel_page_loader';
          });
         
          if(this.$root.selectedPage.length != 0){
               
              if(this.$root.selectedPage[0].status == 0){
                 this.$root.showBoard = true;
         this.$root.boardContent = 'Weldone '+ this.$root.username + '😇, you can always view the output of your codes here';
         this.$root.boardBtnLabel = 'Okay,Got It';

              }
               
          }
        
         
      },
        trackUser: function(){
      

         axios.get( '/fetch-profile-'+ this.$root.username)
   .then(response => {
   
   if (response.status == 200) {

        this.$root.userPageTrack = response.data[2];

        this.activateBot();
  }
    
  
  })
  .catch(error => {
 
  }) 

      
   },
       
   
       goBack() {
          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
      initiateLoader: function(){

          this.duelPanelIsWeb = this.$root.CodeFilesData[5]

          

         if(this.duelPanelIsWeb){
 
         this.loadPageContent();


         }else{
    
    this.runCodeOnSandbox();

         }

      },
    
     loadPageContent: function(){
         axios.get( '/run-panel/' + this.$root.CodeFilesData[1].panel_id)
      .then(response => {
      
      if (response.status == 200) {
        
        
       this.pageContent = response.data;
         
        

     }
       
     
     })
     .catch(error => {
    
     }) 
     },
      runCodeOnSandbox: function(){

          axios.post( '/run-code-on-sandbox-project',{
                panel_id: this.$root.CodeFilesData[1].panel_id,
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

             let token = response.data[0][0].token;

        
              if(response.data[0][0].status.description == 'Accepted'){

                  this.pageContent =  response.data[0][0].stdout ;

                
                

              }else if(response.data[0][0].status.description == 'In Queue'){

                 this.pageContent = 'In Queue...';
                 this.checkResponse(token,response.data[1]);

              }else if(response.data[0][0].status.description == 'Processing'){

                 this.pageContent = 'Processing...';

                 this.checkResponse(token,response.data[1]);

              }else{

                

                this.pageContent =  response.data[0][0].stdout + '\n Error: \n' + response.data[0][0].stderr ;

              }

              

           
             

                

              

             

          }
            
          })
          .catch(error => {

            
             
               this.pageContent = 'An issue occured,unable to run on sandbox...';

                
              
          })

          
      },
       checkResponse:function(token,langId){

         let _this = this;

        let interval = setInterval(check,1000);


        function check(){

           
             if(_this.recheckCodeBox){

               _this.recheckCodeBox = false;

                axios.post( '/check-for-submission',{
               token: token,
                langId: langId
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

            

              if(response.data[0].status.description == 'Accepted'){

                 

                  _this.pageContent =  response.data[0].stdout;

                  
                 clearInterval(interval);


              }else if(response.data[0].status.description == 'In Queue'){

                 _this.pageContent = 'In Queue...';

              }else if(response.data[0].status.description == 'Processing'){

                 _this.pageContent = 'Processing...';

              }else{

                 _this.pageContent =  response.data[0].stdout +  '\n Error: \n'  + response.data[0].stderr ;

                 clearInterval(interval);

              }


             if(_this.$root.pageLoaderOpened == false){

             clearInterval(interval);

             }

              

        

         
               _this.recheckCodeBox = true;

          }

          
            
          })
          .catch(error => {

             
             
               _this.pageContent = 'An issue occured,unable to run on sandbox...';

                
               clearInterval(interval);
              
          })

             }

          

        }

        

      },
   
    }
   
}
</script>
<style>
.shelfText{
    font-size: 12px;
    color: #265259;
}
</style>