<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
             <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Page Loader</span>
         </div>
         <div class="col-2 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; " >
             
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
          
             <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
   :srcdoc="pageContent" 
    style="border: 0; height:91%; position:fixed;left:0;" class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 px-1 py-0" ></iframe>

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
        }
    },
    components: {
   
  },
   mounted(){
      this.$root.showTabs= false;
       this.$root.showHeader = false;
       this.loadPageContent();
       this.trackUser();
    },
    methods:{

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
      

         axios.get('/fetch-profile-'+ this.$root.username)
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
    
     loadPageContent: function(){
         axios.get('/run-panel/' + this.$root.CodeFilesData[1].panel_id)
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
<style>
.shelfText{
    font-size: 12px;
    color: #265259;
}
</style>