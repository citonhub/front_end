<template>
<div style="background:transparent; font-family:BodyFont;">

     <!-- shows when page content is loading -->

       
      <div 
        v-if="pageContent == ''"
    style="border: 0; height:80%; top:5%; position:absolute;left:0; z-index:99999999999; align-items:center; justify-content:center;" class=" px-5 col-lg-4 offset-lg-4 px-1 py-0 d-flex" >
         <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>
       </div>
    
  <!-- ends -->

   <!-- page content view -->
   
          <!-- for HTML contents -->
            
     <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" v-if="that.$root.projectData.project.is_web"
  :srcdoc="pageContent" 
   class="col-12 mt-0  px-0 py-0" style=" position:absolute; height:100%; left:0; top:0;  background:white;border:1px solid #c5c5c5; border-radius:0px;"  ></iframe>
       <!-- ends -->
    <!-- for non-web content -->
   <textarea  readonly v-else v-model="pageContent"  class="col-12 mt-0 mt-md-1" style=" font-size:14px; position:absolute; top:0; height:100%; left:0;  background:white;border:1px solid #c5c5c5; border-radius:0px;"  >
       
    </textarea>

     <!-- ends -->
       

   <!-- ends -->

    <!-- show code panel buttons -->

     <v-btn medium fab color="#3C87CD"  @click="showPanel" class="d-lg-inline-block d-none" style="z-index:99999999;  position:absolute;  bottom:3%; right:3%; ">

        <v-icon style="font-size:25px; color:white;">las la-code</v-icon>
         
     </v-btn>

     <v-btn  fab color="#3C87CD"  @click="showPanel" class="d-lg-none d-inline-block" style="z-index:99999999;  position:fixed;  bottom:3%; right:3%; ">

        <v-icon style="font-size:24px; color:white;">las la-code</v-icon>
         
     </v-btn>

       

    <!-- ends -->

   
</div>
  
</template>

<script>
 export default {
    data(){
        return{
           Alert:false,
           that:this,
          alertMsg:'',
          pageContent:'', 
         saveLoading:false,
          projectData:[],
          rating:0,
          UserStar:[],
          userLoggedIn:false,
          recheckCodeBox:true
        }
    },
    components: {
   
  },
   mounted(){
     this.runCode();
     
    },
    methods:{
       showShare:function(){
           this.$root.shareText = 'Check out this project on CitonHub';
           this.$root.shareLink = 'https://www.citonhub.com/link/project/' + this.$route.params.project_slug + '/user' ; 
            this.$root.showShare = true;
        },
      showFullPage:function(){

          window.open('/run-panel/' + this.projectData.panel_id, '_blank');
      },
     
        
       showLogin: function(){
         this.$root.checkIfUserIsLoggedIn('space');
       },
        checkLogin: function(){
       if(this.$root.user_temp_id == 0){
         this.userLoggedIn = false;
       }else{
         this.userLoggedIn = true;
       }
    },
    showComments:function(){
   this.$router.push({ path: '/' + this.$route.params.project_slug +   '/comments' });
    },
    showPanel:function(){
       this.$router.push({ path: '/board/projects/panel/'+ this.$route.params.project_slug + '/editor'});
    },
        showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

      },
         shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
       goBack() {
          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        runCode: function(){

        
          if(this.$root.projectData.project.is_web == 1){

           this.loadPageContent();

        }else{

           this.pageContent = 'sending to sandbox...';

              this.runCodeOnSandbox();
          
        }

        },
         checkResponse:function(token){

        let _this = this;

      
                axios.post( '/check-for-submission',{
               token: token,
                langId: _this.selectedLangId
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

            

              if(response.data[0].status.description == 'Accepted'){

                 

                  _this.pageContent =  response.data[0].stdout;

                  
                 


              }else if(response.data[0].status.description == 'In Queue'){

                 _this.pageContent = 'In Queue...';

                   _this.checkResponse(response.data[0].token);

              }else if(response.data[0].status.description == 'Processing'){

                 _this.pageContent = 'Processing...';

                   _this.checkResponse(response.data[0].token);

              }else{

                 _this.pageContent =  response.data[0].stdout +  '\n Error: \n'  + response.data[0].stderr ;

               

              }


              if(_this.$root.codeBoxOpened == false){
                
              }

              

       

         
               _this.recheckCodeBox = true;

          }

          
            
          })
          .catch(error => {

             
             
               _this.pageContent = 'An issue occured,unable to run on sandbox...';

               
             
          })


        

      },
      runCodeOnSandbox: function(){

          axios.post( '/run-code-on-sandbox-project',{
                panel_id: this.$root.projectData.project_panel.panel_id,
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
       
     loadPageContent: function(){
         axios.get( '/run-panel/' + this.$root.projectData.project_panel.panel_id)
      .then(response => {
      
      if (response.status == 200) {
        
        
       this.pageContent = response.data;
         
        

     }
       
     
     })
     .catch(error => {
    
     }) 
     }
   
    }
   
}
</script>
<style >
 
  
</style>
