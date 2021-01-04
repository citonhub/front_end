<template>
    <div  style="position:fixed;height:100%;background:#F5F5FB; width:100%;">

        <!-- top bar -->
        <div class="col-12 py-0 fixed-top" style="position:sticky;width:100%;height:auto;z-index:999999999999999999; ">
         <top-bar></top-bar>
        </div>
     

       <!-- ends -->

       <!-- hub content -->
       
        <div class="col-lg-10 offset-lg-1 col-12 px-0 d-md-block d-none" style="background:#F5F5FB; position:absolute; height:92%; top:8%; " >

            <div class="row px-md-4 px-4">
              <!-- header -->
            <div class="col-lg-6 px-0 pb-1 " style="border-bottom:1px solid #263238;z-index:99999999999999;" >

               <h3 class="d-none d-md-block">Hub</h3>

              
            </div>

            <div class="col-lg-6 px-0 pb-1 text-right d-none d-lg-block" style="border-bottom:1px solid #263238;z-index:99999999999999;" >

                <v-btn @click="addProjectModal = true"   small rounded  color="#3C87CD" style="font-size:13px; text-transform:none; font-weight:bolder; color:white;font-family:MediumFont;">
            Post your project <v-icon style="font-size:19px; color:white;">las la-plus</v-icon>
           </v-btn>
            </div>

            

            
         <!-- ends -->
            </div>


            
        </div>


         <!-- floating add button -->

       

     <v-btn @click="addProjectModal = true"  fab color="#3C87CD"  class="d-lg-none d-inline-block" style="z-index:99999999;  position:fixed;  bottom:3%; right:2%; ">

        <v-icon style="font-size:24px; color:white;">las la-plus</v-icon>
         
     </v-btn>


       <!-- ends -->

       
        <div class=" col-12 scroller" style=" position:absolute; height:90%; top:10%; overflow-y:auto; padding-bottom:60px; padding-top:20px; " >

          
               <div class="col-lg-10 offset-lg-1 col-12 py-0 pt-md-5 mt-md-3" >

                   <div class="row">
                      <!-- <div class="col-lg-3 col-md-6 px-0 mb-5 pt-1 pt-md-2 projectBox" style="height:200px;" >
             <div @click="viewProjectModal = true"   style="height:190px; position:absolute; width:94%; left:3%; border:1px solid #c5c5c5;
          border-radius:20px;box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25);background: url(/imgs/background1.jpg);background-size:cover;background-repeat: no-repeat;">

              <div class="pt-3 px-2  pl-3" style=" position:absolute; width:100%; height:35%; left:0; bottom:0%; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px; background: linear-gradient(180deg, rgba(60, 135, 205, 0.0053) 0%, rgba(0, 0, 0, 0.53) 100%);">
                
                 <div class="row">
                  <div class="col-8 py-0 my-0">
                     <span   style="font-family:MediumFont; font-size:13px; color:white;" >Python calculator</span>
    
                  </div>
                   <div class="col-4 py-0 my-0 text-right">

                      <i class="lab la-python" style="font-size:25px; color:white;" ></i>

                     <i class="lab la-html5" style="font-size:25px; color:white;"></i>

                  </div>
                </div>
                 

          </div>

         </div>

          <v-card class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; top:0; border-radius:0px; border-top-left-radius:20px;
          border-top-right-radius:20px;">
            
            <div class="col-12 py-0 my-0 text-left">
                <div class="row py-0 my-0">
                    <div class="col-2 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                        <span  class="d-inline-block"  
                             style="border-radius:50%;height:30px;width:30px;background-color:#c5c5c5;
                             background-repeat: no-repeat; background-image:url(/imgs/img3.jpg);background-size:100%;border:1px solid transparent;"></span>
                    </div>
                   <div class="col-8 py-0 my-0 d-flex" style="align-items:center;">
                       <div> 
                             <span   class="d-inline-block"  style="font-family:MediumFont; font-size:13px;" >Akinola Dray</span>
                       </div>
                     
                   </div>
                   <div class="col-2 text-right py-0 my-0">
                      <v-btn icon><v-icon style="font-size:25px;">las la-ellipsis-v</v-icon></v-btn>
                   </div>
                </div>
            </div>
          </v-card>

          <div class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; top:100%;">
            
             <div class="row">
                  <div class="col-12 py-0 my-0 text-right">
                       
                       <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">231</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-comment" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">32</span>
            </span>
                  </div>   
            </div>

          </div>
          </div> -->


          <div class="col-lg-3 col-md-6 px-0 mb-5 pt-1 pt-md-2 projectBox" style="height:200px;" v-for="post in $root.posts" :key="post.id">
             <div  style="height:190px; position:absolute; width:94%; left:3%; border:1px solid #c5c5c5; background-repeat: no-repeat;
          border-radius:20px;box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25);background: url(/imgs/background3.jpg);background-size:cover;" @click="showProject(post)">

              <div class="pt-3 px-2  pl-3" style=" position:absolute; width:100%; height:35%; left:0; bottom:0%; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px; background: linear-gradient(180deg, rgba(60, 135, 205, 0.0053) 0%, rgba(0, 0, 0, 0.53) 100%);">
                
                 <div class="row">
                  <div class="col-8 py-0 my-0">
                     <span   style="font-family:MediumFont; font-size:13px; color:white;" >{{ post.title }}</span>
    
                  </div>
                   <div class="col-4 py-0 my-0 text-right">

                      <i :class="tag.icon" style="font-size:25px; color:white;" v-for="(tag, i) in post.tags" :key="i"></i>

                  </div>
                </div>
                 

          </div>

         </div>

          <v-card class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; top:0; border-radius:0px; border-top-left-radius:20px;
          border-top-right-radius:20px;">
            
            <div class="col-12 py-0 my-0 text-left">
                <div class="row py-0 my-0">
                    <div class="col-2 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                        <span  class="d-inline-block"  
                             style="border-radius:50%;height:30px;width:30px;background-color:#c5c5c5; background-image:url(/imgs/img3.jpg);background-size:100%;border:1px solid transparent;"></span>
                    </div>
                   <div class="col-8 py-0 my-0 d-flex" style="align-items:center;">
                       <div> 
                             <span   class="d-inline-block"  style="font-family:MediumFont; font-size:13px;" >Akinola Dray</span>
                       </div>
                     
                   </div>
                   <div class="col-2 text-right py-0 my-0">
                      <v-btn icon><v-icon style="font-size:25px;">las la-ellipsis-v</v-icon></v-btn>
                   </div>
                </div>
            </div>
          </v-card>

          <div class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; top:100%;">
            
             <div class="row">
                  <div class="col-12 py-0 my-0 text-right">
                       
                       <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">{{ post.likes }}</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-comment" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">{{ post.comments }}</span>
            </span>
                  </div>   
            </div>

          </div>
          </div>


          <!-- <div class="col-lg-3 col-md-6 px-0 mb-5 pt-1 pt-md-2 projectBox" style="height:200px;">
             <div  style="height:190px; position:absolute; width:94%; left:3%; border:1px solid #c5c5c5;background-repeat: no-repeat;
          border-radius:20px;box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25);background: url(/imgs/background1.jpg);background-size:cover;">

              <div class="pt-3 px-2  pl-3" style=" position:absolute; width:100%; height:35%; left:0; bottom:0%; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px; background: linear-gradient(180deg, rgba(60, 135, 205, 0.0053) 0%, rgba(0, 0, 0, 0.53) 100%);">
                
                 <div class="row">
                  <div class="col-8 py-0 my-0">
                     <span   style="font-family:MediumFont; font-size:13px; color:white;" >Python calculator</span>
    
                  </div>
                   <div class="col-4 py-0 my-0 text-right">

                      <i class="lab la-python" style="font-size:25px; color:white;" ></i>

                     <i class="lab la-html5" style="font-size:25px; color:white;"></i>

                  </div>
                </div>
                 

          </div>

         </div>

          <v-card class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; top:0; border-radius:0px; border-top-left-radius:20px;
          border-top-right-radius:20px;">
            
            <div class="col-12 py-0 my-0 text-left">
                <div class="row py-0 my-0">
                    <div class="col-2 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                        <span  class="d-inline-block"  
                             style="border-radius:50%;height:30px;width:30px;background-color:#c5c5c5; background-image:url(/imgs/img3.jpg);background-size:100%;border:1px solid transparent;"></span>
                    </div>
                   <div class="col-8 py-0 my-0 d-flex" style="align-items:center;">
                       <div> 
                             <span   class="d-inline-block"  style="font-family:MediumFont; font-size:13px;" >Akinola Dray</span>
                       </div>
                     
                   </div>
                   <div class="col-2 text-right py-0 my-0">
                      <v-btn icon><v-icon style="font-size:25px;">las la-ellipsis-v</v-icon></v-btn>
                   </div>
                </div>
            </div>
          </v-card>

          <div class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; top:100%;">
            
             <div class="row">
                  <div class="col-12 py-0 my-0 text-right">
                       
                       <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">231</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-comment" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">32</span>
            </span>
                  </div>   
            </div>

          </div>
          </div>

           -->
                   </div>
            </div>



        </div>

       

       <!-- side bar -->


   <v-slide-x-transition>
   <div class="col-12  py-0 px-0" style="position:absolute; width:100%; height:100%; z-index:9999999999999;background: rgba(27, 27, 30, 0.32);" @click="that.$root.showSideBar = false" v-if="that.$root.showSideBar">

   <div style="position:absolute; height:100%; width:70%; left:0;" >

     <div class="col-md-6 col-lg-3 pt-2" style="background:white;height:100%;" @click.stop="that.$root.showSideBar = true">
        <sidebar></sidebar>
     </div>

   </div>

     </div>
   </v-slide-x-transition>

       <!-- ends -->

       <!-- add new projects -->

      <v-slide-x-reverse-transition>

     
   <div class="col-12  py-0 px-0" style="position:fixed; left:0; width:100%; height:100%; z-index:9999999999999;background: rgba(27, 27, 30, 0.32);" @click="addProjectModal = false" v-if="addProjectModal">

   <div style="position:absolute; height:100%; width:100%; left:0;background:transparent;overflow-y:auto; overflow-x:hidden;"  >
   

      <!-- large and medium screens -->

     <div class="col-lg-4 col-md-6 offset-lg-8 offset-md-6 pt-0 pb-3 scrollerAddProject px-md-2 px-0 " 
     style=" height:100%; top:0%;  position:absolute; background:white;
     border:1px solid white;border-radius:0px;border-radius:0px;  overflow-y:auto;overflow-x:hidden;" @click.stop="addProjectModal = true">

     <!-- header -->
                
    
     <div class="col-12 px-md-2 px-0 py-2 pt-0 fixed-top d-flex flex-row" style="border-top-left-radius:10px; border-top-right-radius:10px; left:0; position:sticky;background:white; top:0%; border-bottom:1px solid #c5c5c5;align-items:center;">
           
             <div class=" col-2 py-0 ">
              <v-btn icon @click.stop="addProjectModal = false" >
                      <v-icon>mdi mdi-close</v-icon>
                    </v-btn>
            </div>
             <div class="col-8 text-center py-0">
             <span style="font-size:17px; font-family:HeaderFont;" class="d-md-block d-none">Post your project</span>

               <span style="font-size:15px; font-family:HeaderFont;" class="d-md-none d-block">Post your project</span>
          </div>
              
               <div class="px-1 py-0 col-2 text-right ">
             
             </div>
             
          
        </div>
      <!-- ends -->

      <!-- add project page -->
      <div class="col-12 px-3 px-md-1 py-1">

        <addPage></addPage>

      </div>
        

      <!-- ends -->
     </div>

     <!-- ends -->


   

   </div>

     </div>
     </v-slide-x-reverse-transition>

     <!-- ends -->



       <!-- view full project -->

       
   <div class="col-12  py-0 px-0" style="position:fixed; left:0; width:100%; height:100%; z-index:9999999999999;background: rgba(27, 27, 30, 0.32);" @click="viewProjectModal = false" v-if="viewProjectModal">

   <div style="position:absolute; height:100%; width:100%; left:0;background:transparent;overflow-y:hidden; overflow-x:hidden;"  >
   

      <!-- small,large and medium screens -->

      <!-- close button -->

       <v-btn icon @click.stop="viewProjectModal = false" color="#ffffff" style="position:absolute;top:1%;right:2%;">
                      <v-icon>mdi mdi-close</v-icon>
                    </v-btn>

      <!-- ends -->

     <div class="col-12 pt-0 pb-3 scrollerViewProject px-md-2 px-0" 
     style="background:white; height:93%; top:7%; 
     border:1px solid white;border-radius:0px;border-top-left-radius:10px;  overflow-y:auto;overflow-x:hidden;" @click.stop="viewProjectModal = true">

   
      <!-- project view page -->
      <div class="col-12  py-2 pt-0">

       <project-view :post="project"></project-view>

      </div>
        

      <!-- ends -->
     </div>

     <!-- ends -->

   </div>

     </div>
  

     <!-- ends -->
    </div>
</template>
<script>
import '../../bootstraps/globalPackage'

 const TopBar = () => import(
    /* webpackChunkName: "top-bar" */ './TopBar.vue'
  );

const addPage = () => import(/*webpackChunkName: "addPage"*/ './AddProjectPage.vue')

 const ProjectView = () => import(
    /* webpackChunkName: "ProjectView" */ './ProjectView.vue'
  );

export default {
     data () {
      return {
        that:this,
        absolute: true,
        opacity: 0.4,
        overlay: false,
        zIndex: 1,
        addProjectModal:false,
        viewProjectModal:false,
        posts: [],
        project: {}
      }
    },
    components: {
        TopBar,
      addPage,
      ProjectView
    },

    methods: {
      showProject (project) {
        this.project = project;
        this.viewProjectModal = true;
      }
    },

    mounted () {
      axios.get('/fetch-posts')
        .then((response) => {
          if (response.status == 200) {
            this.$root.posts = response.data.data
          }
        })
    }
}
</script>
<style scoped>
.scroller::-webkit-scrollbar {
  width: 6px;
}

 
.scroller::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.scrollerAddProject::-webkit-scrollbar {
  width: 6px;
}


.scrollerAddProject::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  outline: 1px solid slategrey;
}

.scrollerViewProject::-webkit-scrollbar {
  width: 6px;
}


.scrollerViewProject::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  outline: 1px solid slategrey;
}
.projectBox{
  cursor: pointer;
}
</style>