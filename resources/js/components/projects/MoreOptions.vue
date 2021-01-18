<template>
     <v-card class="py-0 px-0" style="width:200px;">

                                      <div class="col-12 px-0 py-1 d-flex flex-column">

                                           <v-card tile flat class="px-2 py-2 d-flex flex-row" @click="copyWebLink" v-if="this.$root.projectData.project.is_web" style="align-items:center;" >

                                            <v-icon class="mr-1">las la-link</v-icon>

                                            <span style="font-family:BodyFont;font-size:13px;color:grey;">Web App URL</span>

                                         </v-card>
                                          <v-card tile flat class="px-2 py-2 d-flex flex-row" @click="shareProject" style="align-items:center;">

                                            <v-icon class="mr-1">mdi mdi-share-variant</v-icon>

                                            <span style="font-family:BodyFont;font-size:13px;color:grey;">Share</span>

                                         </v-card>
                                        
                                          <v-card tile flat class="px-2 py-2 d-flex flex-row" @click="gotToSettings" style="align-items:center;" >

                                            <v-icon class="mr-1">las la-cog</v-icon>

                                            <span style="font-family:BodyFont;font-size:13px;color:grey;">Settings</span>

                                         </v-card>

                                          <v-card tile flat class="px-2 py-2 d-flex flex-row" :loading="loadingDelete" v-if="this.$root.projectData.project.user_id == this.$root.user_temp_id" style="align-items:center;" @click.stop="deleteProject">

                                            <v-icon class="mr-1">las la-trash</v-icon>

                                            <span style="font-family:BodyFont;font-size:13px;color:grey;">Delete</span>

                                         </v-card>


                                      </div>

                                      

                                   </v-card>
</template>
<script>
export default {
    data () {
      return {
      loadingDelete:false
      }
    },
    methods:{
     copyWebLink:function(){
          const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

      copyToClipboard('https://www.citonhub.com/run-panel/' + this.$root.projectData.project_panel.panel_id);

        this.$root.projectPanelComponent.showAlert('Copied!','Copied to clipboard','success');
     },
      shareProject:function(){
          
          this.$root.shareLink =  'https://www.citonhub.com/link/project/'+ this.$route.params.project_slug;

          this.$root.shareText = 'Check out this project on Citonhub';
          
          this.$root.infoText = 'Share your project with others';

          this.$root.alertComponent =  this.$root.projectPanelComponent;

          this.$root.showInvitation = true;
    },
     checkIfOwner:function(){

         var member = this.$root.ProjectMembers.filter((member)=>{
             return member.user_id == this.$root.user_temp_id;
         });

           if(member.length == 0){
            
            return false;
         }else{
           return true;
         }
        
      },
   
     deleteProject:function(){

         if( this.loadingDelete) return

           this.loadingDelete = true;

          axios.post( '/delete-project',{
                project_slug: this.$route.params.project_slug
                  })
             .then(response => {
             
            
            
             if (response.status == 200) {

             let remainingProjects =    this.$root.projectList.user_projects.filter((project)=>{
                return project.project_slug != this.$route.params.project_slug;
             })

              this.$root.projectList.user_projects = remainingProjects;
               

                this.$root.LocalStore('user_projects_' + this.$root.username,this.$root.projectList);
    
            }
              
              this.$router.push({ path: '/board/projects/list' });
           
            
          })
          .catch(error => {
               this.loadingDelete = false;
             this.$root.projectPanelComponent.showAlert('Oops!','Unable to delete project','error');
              
          })

        },
    gotToSettings:function(){
   
        this.$root.projectPanelComponent.showSideBar = false

         this.$router.push({ path: '/board/projects/panel/'+  this.$route.params.project_slug +'/set-panel' });
        
    }
    },
   
    
}
</script>
<style scoped>

</style>