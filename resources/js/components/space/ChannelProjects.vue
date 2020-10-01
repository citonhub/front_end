<template>
       <div style="position:absolute; height:100%; width:100%; overflow-y:auto;left:0;top:0%;" class="scrollerStyle"> 

         <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white; padding-top:45px !important;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-1 py-0 my-0 text-left px-1" style="border-bottom:2px solid #3E8893;" >
           <v-btn icon color="#3E8893" @click="goBack"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
         </div>
         
         <div class="col-10 py-0 my-0 d-flex" style="border-bottom:2px solid #3E8893; align-items:center;justify-content:center;">
          <span  style="font-size:12px; color:#3E8893; font-weight:bolder;font-family:HeaderText;">Projects</span>
         </div>
        
         <div class="col-1 py-0 my-0 text-right px-1"  style="border-bottom:2px solid #3E8893;" >
          
         </div>
         </div>
         </div>

         <div class="col-12 py-0 my-0" >
         <div class="row my-0 py-0" v-if="projects.length != 0">
         

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

         <div class="row my-0 py-0 text-center" v-else>
            <div class="col-12 text-center">

              <span style="color:gray; font-size:12px; font-family:BodyText;"  class="d-block">No projects yet</span>

            </div>
                   
         </div>
         </div>


       </div>
</template>
<script>
export default {
     data(){
        return{
        
          projects:[],
        }
    },
     components: {
   
  },
    mounted(){
      this.fetchMessages();
      Echo.leave('space.' + this.$root.selectedSpace.space_id);

       this.fetchProjects();
        if(this.$root.projectData.length != 0){
              
              this.$root.localChannel = [];
             Echo.leave('panel.' + this.$root.projectData.project_slug);

            this.$root.projectData = [];

          }
    },
    methods:{
       goBack() {
        this.$router.push({ path: '/space/' + this.$route.params.spaceId +'/channel/content'  + '/user'});
        },
        showProject:function(project){
      this.$router.push({ path: '/' + project.project_slug +'/panel' });
        },
       fetchMessages: function(){
          
           axios.get('/fetch-space-messages-' + this.$route.params.spaceId )
      .then(response => {
      
      if (response.status == 200) {
        
     
       this.$root.selectedSpace = response.data[1]
       
     }
       
     
     })
     .catch(error => {
    
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
       fetchProjects: function(){
          
           axios.get('/fetch-space-projects-' + this.$route.params.spaceId )
      .then(response => {
      
      if (response.status == 200) {
        
       this.projects = response.data;
       
     }
       
     
     })
     .catch(error => {
    
     }) 

        },
  
  },
}
</script>
<style>
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