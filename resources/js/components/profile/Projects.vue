<template>
<div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute;z-index:20; background:white; height:100%;">
     <profile-top></profile-top>
<v-app class="scrollerStyle" style="background:white; font-family:BodyText;position:absolute;left:0; width:100%; height:80%; overflow-y:auto; overflow-x:hidden; padding-top:40px;">
      

      <div v-if="projects != null">
      <div v-if="projects.length != 0">
         <div class="col-12 py-1 my-1 text-right px-2" v-for="(project,index) in projects" :key="index" >
              <v-card  class="px-2 py-2" @click="showProject(project)" >
            <div class="py-0 my-0 row px-2">
               <div class="col-2 py-1 d-flex" style="align-items:center;justify-content:center;">
                    <span class="documentIcon"><v-icon class="px-1 py-1" color="#3E8893" >mdi-plus-network-outline </v-icon></span>
                </div>
                <div class="col-10 py-1 text-left px-2">
                    <span class="documentTitle">{{shortenContent(project.title,35)}}</span>
                     <div class="row py-0 my-0">
                   <div class="col-6 py-1 text-left ">
                    <v-icon color="#3E8893">mdi-star  mdi-18px</v-icon>
                     <span style="font-size:9px; color:#a6a6a6;">{{project.total_stars}}</span>        
                </div>
                <div class="col-6 py-1 text-right">
                     <v-icon color="#3E8893">mdi-comment-text-outline mdi-18px</v-icon>
                     <span style="font-size:9px; color:#a6a6a6;">{{project.comments}}</span>   
                </div>
                     </div>
                </div>
               
              
            </div>
         </v-card>
            </div>
     </div> 

   <div v-if="projects.length == 0"  class="text-center col-12 ">
       <span style="color:gray; font-size:12px;">{{ $t('trends.no_projects') }}</span>
   </div>

      </div>

     <div v-else   >
      <div class="col-12 py-0 my-0">

         <div class="row py-0 my-0 px-1">
            
     <div class="col-12 py-1 my-0">
       <v-skeleton-loader
      class="mx-auto "
        height="60px"
      type="image"
    ></v-skeleton-loader>
     </div>
         </div>


       
         </div> 
          <div class="col-12 py-0 my-0">

         <div class="row py-0 my-0 px-1">
            
     <div class="col-12 py-1 my-0">
       <v-skeleton-loader
      class="mx-auto "
        height="60px"
      type="image"
    ></v-skeleton-loader>
     </div>
         </div>


       
         </div> 
          <div class="col-12 py-0 my-0">

         <div class="row py-0 my-0 px-1">
            
     <div class="col-12 py-1 my-0">
       <v-skeleton-loader
      class="mx-auto "
        height="60px"
      type="image"
    ></v-skeleton-loader>
     </div>
         </div>


       
         </div> 
     </div>   

</v-app>    
</div>

</template>
<script>
export default {
     data(){
        return{
         
         projects:null,
          
        }
    },
     components: {
   
  },
    mounted(){
       this.$root.showHeader = true;
      this.fecthProjects();
    },
    methods:{
       goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
      fecthProjects:function(){
       
        axios.get('/fetch-projects-' + this.$route.params.username )
      .then(response => {
      
      if (response.status == 200) {
        
      this.projects = response.data;
       
     }
       
     
     })
     .catch(error => {
       this.projects = [];
     }) 
      },
       shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
        showProject:function(project){
            window.location = '/space#/'  + project.project_slug +'/panel';
     
        },
        
  
  },
}
</script>
<style>
.TitleName{
     font-size: 12px;
     color:rgb(38, 82, 89);
  }
  .projectParagraph{
        font-size: 11px;
     color:#595959;
  }
  .documentIcon{
    background: #dbedf0;
    border:1px solid #dbedf0;
    border-radius:50%;
}
.documentTitle{
  font-size: 12px;
  color: #3E8893;
}

.documentSize{
  font-size: 10px;
  color: #a6a6a6;
}
</style>