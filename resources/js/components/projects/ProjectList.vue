<template>
<div> 

  <!-- spacer -->
    <div class=" mt-1 col-12 d-md-none d-block" style="background:#F5F5FB;">

    </div>
  <!-- ends -->

   <div class="col-lg-10 offset-lg-1 py-1 pt-2 px-2 d-md-block d-none fixed-top" style="position:sticky; top:0%; background:#F5F5FB; border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5>Projects</h5>
        </div>
         <div class="col-6  py-0 my-0 text-right">
           <v-btn small rounded @click="addProject" color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
             <v-icon style="font-size:20px;">las la-plus</v-icon> <span style="text-transform:none;">Create a project</span> 
           </v-btn>
        </div>
      </div>
   </div>

   <!-- fab for smaller screen -->

    <v-btn  fab color="#3C87CD" @click="addProject"  class="d-md-none d-inline-block" style="z-index:99999999;  position:fixed;  bottom:3%; right:3%; ">

        <v-icon style="font-size:24px; color:white;">las la-plus</v-icon>

     </v-btn>

<!-- ends -->

 <!-- project list view -->

     <template v-if="this.$root.TopBarComponent">

         <!-- search session -->
           
          <template  v-if="this.$root.TopBarComponent.searchContent.length > 0">


               <div class="col-md-10 offset-md-1 py-1 px-2 ">
              
               <div class="row text-center ">

                    <!-- spacer -->
         
           <div class="col-12 mt-3 mt-md-0 d-md-none d-block"> 

           </div>
     <!-- ends -->

               <project :project="project" v-for="(project,index) in this.$root.projectSearchList" :key="index + 'search'"></project>

               </div>

            </div>


            


          </template>

          <!-- ends -->

         
         <template v-else>

             <template v-if="loadingProject">
            <div class="col-md-10 offset-md-1 py-1 px-2 ">
              
               <div class="row text-center ">

                    <!-- spacer -->
         
           <div class="col-12 mt-3 mt-md-0 d-md-none d-block"> 

           </div>
     <!-- ends -->

      <div  class="col-12 mt-4 text-center">

           <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

      </div>

            

               </div>

            </div>
            
        </template>
    

      <template v-if="!loadingProject">
              

  <div class="col-md-10 offset-md-1 py-1 px-2 ">

      <div class="row text-center ">

       <!-- spacer -->
         
           <div class="col-12 mt-3 mt-md-0 d-md-none d-block"> 

           </div>
     <!-- ends -->


        <project :project="project" v-for="(project,index) in this.$root.projectList.user_projects" :key="index + 'personal'"></project>

      </div>

  </div>
     
     <template v-if="this.$root.projectList.contributor_projects">

        <div class="col-md-10 offset-md-1 py-1 px-2 mt-4 mb-2" v-if="this.$root.projectList.contributor_projects.length > 0">

       <h6>Contributions</h6>

    </div>

     </template>
   

    <div class="col-md-10 offset-md-1 py-1 px-2 ">

      <div class="row text-center">


           <project  :project="project" v-for="(project,index) in this.$root.projectList.contributor_projects" :key="index + 'contribution'"></project>


      </div>

    </div>
 
 <template v-if="this.$root.projectList.pinned_projects">
    <div class="col-md-10 offset-md-1 py-1 px-2 mt-4 mb-2" v-if="this.$root.projectList.pinned_projects.length > 0">

       <h6>Pinned</h6>

    </div>
 </template>
     

     <div class="col-md-10 offset-md-1 py-1 px-2 ">

      <div class="row text-center">


           <project  :project="project" v-for="(project,index) in this.$root.projectList.pinned_projects" :key="index + 'pinned'"></project>

      

      </div>


     

    </div>
    
     </template>

         </template>
         

     </template>
      
      
     <!-- spacer -->

     <div class="py-5 my-5">

     </div>
 
     <!-- ends -->

 <!-- ends -->

</div>

</template>

<script>

import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

const Project = () => import(
    /* webpackChunkName: "EachProject" */ './Project.vue'
  );

 export default {
    data () {
      return {
          loadingProject:false,
         
      }
    },
    components:{
       Project
     
    },
    mounted(){
     this.$root.showTopBar = true;
     this.$root.projectListComponent = this;
     this.fetchProjects();
    },
    methods:{
     
      fetchProjects:function(){

          this.loadingProject  = true;

             let storedProjects = this.$root.getLocalStore('user_projects_'  + this.$root.username);

            storedProjects.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      this.$root.projectList = finalResult;
                    
                   
 
                 this.loadingProject = false;

               this.checkForNewProjects();

                 }else{
            
           
            axios.get( '/fetch-user-projects')
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_projects_' + this.$root.username,response.data);
        
     
         this.$root.projectList = response.data;
      
     
         this.loadingProject = false;
       
     }
       
     
     })
     .catch(error => {

          this.showAlert('Oops!','Something went wrong','error');

        this.loadingProject = false;
    
     }) 

                 }
            })


      },
      checkForNewProjects:function(){

           axios.get( '/fetch-user-projects')
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_projects_' + this.$root.username,response.data);
        
     
         this.$root.projectList = response.data;
        
       
     }
       
     
     })
     .catch(error => {

      
    
     }) 

      },
      showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
       position: 'bottomRight',
       timeout:2000,
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'success'){
         iziToast.success(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
         timeout:2000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'warning'){

          iziToast.warning(
        { 
       title: title,
       message: message,
         timeout:2000,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'error'){
         iziToast.error(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
       position: 'bottomRight',
         timeout:2000,
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       

    },
      addProject:function(){
             this.$router.push({ path: '/board/projects/add' });
      }
    }
  }
</script>
<style scoped>



</style>
