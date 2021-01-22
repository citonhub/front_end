<template>
    <div data-app="true" class=" application application--light" style="position:fixed;height:100%;background:#F5F5FB; width:100%;">

      

        <!-- top bar -->
        <div class="col-12 py-0 fixed-top" style="position:sticky;width:100%;height:auto;z-index:999999999999999999; ">
         <top-bar></top-bar>
        </div>
     

       <!-- ends -->

       <!-- hub content -->
       
        <div class="col-lg-10 pb-0 offset-lg-1 d-none d-md-block col-12 px-0 d-md-block d-none" style="background:#F5F5FB;z-index:99999999999999; position:absolute; height:auto; top:8%; " >

            <div class="row px-md-4 px-4" style="background:#F5F5FB;z-index:99999999999999;">
              <!-- header -->
            <div class="col-lg-6 px-0 pb-1 " style="border-bottom:1px solid #263238;z-index:99999999999999;" >

               <h3 class="d-none d-md-block">Showcase</h3>

              
            </div>

            <div class="col-lg-6 px-0 pb-1 text-right d-none d-lg-block" style="border-bottom:1px solid #263238;z-index:99999999999999;" >

                <v-btn @click="showAddPost"   small rounded  color="#3C87CD" style="font-size:13px; text-transform:none; font-weight:bolder; color:white;font-family:MediumFont;">
            Share your project <v-icon style="font-size:19px; color:white;">las la-plus</v-icon>
           </v-btn>
            </div>

            

            
         <!-- ends -->
            </div>


            
        </div>





         <!-- floating add button -->

       

     <v-btn @click="showAddPost"  fab color="#3C87CD"  class="d-lg-none d-inline-block" style="z-index:99999999;  position:fixed;  bottom:3%; right:2%; ">

        <v-icon style="font-size:24px; color:white;">las la-plus</v-icon>
         
     </v-btn>


       <!-- ends -->

        
    <!-- post view content -->
    
       
        <div class=" col-12 px-1" style=" position:absolute; height:92%; left:0%; top:8%; overflow-y:auto; overflow-x:hidden; padding-bottom:60px; padding-top:20px; " >

          
               <div class="col-lg-10 offset-lg-1 col-12 py-0 pt-md-5 mt-md-3  d-flex flex-column"  >

                 
                  <div class="row">

                  
                 <template v-if="this.$root.TopBarComponentHub">

                     
                     <template  v-if="this.$root.TopBarComponentHub.query.length > 0">




                        <template v-if="loadingSearchPost">

                           <div  class="col-12 mt-4 text-center">

                    <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

                      </div>

                      </template>

                       <template v-else>

                  

                    <post-view :fromProfile="false" :source="post" :alertComponent="that" v-for="(post,index) in that.$root.postsSearch" :key="index + 'search'" ></post-view>

                      </template>



                     </template>


                     <template v-else>


                        <template v-if="loadingPost">

                           <div  class="col-12 mt-4 text-center">

                    <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

                      </div>

                      </template>

                       <template v-else>


                    <post-view :fromProfile="false" :source="post" :alertComponent="that" v-for="(post,index) in that.$root.posts" :key="index + 'post'" ></post-view>
                      

                      

                      </template>
                       
                     </template>

                   

                 </template>
                     
                  


       
                 </div>
            </div>



        </div>

        <!-- ends -->

       

       <!-- side bar -->


   <v-slide-x-transition>
   <div class="col-12  py-0 px-0" style="position:absolute; width:100%; height:100%; z-index:9999999999999;background: rgba(27, 27, 30, 0.32);" @click="that.$root.showSideBar = false" v-if="that.$root.showSideBar">

   <div style="position:absolute; height:100%; width:70%; left:0;" >

     <div class="col-md-6 col-lg-3 pt-2" style="background:white;height:100%;" @click.stop="that.$root.showSideBar = true">
        <side-bar></side-bar>
     </div>

   </div>

     </div>
   </v-slide-x-transition>

       <!-- ends -->

       <!-- add new projects -->

      <v-slide-x-reverse-transition>

     
   <div class="col-12  py-0 px-0" style="position:fixed; left:0; width:100%; height:100%; z-index:9999999999999;background: rgba(27, 27, 30, 0.32);" @click="closeAddPost" v-if="that.$root.showAddNewPost">

   <div style="position:absolute; height:100%; width:100%; left:0;background:transparent;overflow-y:auto; overflow-x:hidden;"  >
   

      <!-- large and medium screens -->

     <div class="col-lg-4 col-md-6 offset-lg-8 offset-md-6 pt-0 pb-3 scrollerAddProject px-md-2 px-0 " 
     style=" height:100%; top:0%;  position:absolute; background:white;
     border:1px solid white;border-radius:0px;border-radius:0px;  overflow-y:auto;overflow-x:hidden;" @click.stop="that.$root.showAddNewPost = true">

     <!-- header -->
                
    
     <div class="col-12 px-md-2 px-0 py-2 pt-0 fixed-top d-flex flex-row" style="border-top-left-radius:10px; border-top-right-radius:10px; left:0; position:sticky;background:white; top:0%; border-bottom:1px solid #c5c5c5;align-items:center;">
           
             <div class=" col-2 py-0 ">
              <v-btn icon @click.stop="closeAddPost" >
                      <v-icon>mdi mdi-close</v-icon>
                    </v-btn>
            </div>
             <div class="col-8 text-center py-0">
             <span style="font-size:17px; font-family:HeaderFont;" class="d-md-block d-none">Share your project</span>

               <span style="font-size:15px; font-family:HeaderFont;" class="d-md-none d-block">Share your project</span>
          </div>
              
               <div class="px-1 py-0 col-2 text-right ">
             
             </div>
             
          
        </div>
      <!-- ends -->

      <!-- add project page -->
     <div class="col-12 px-3 px-md-1 py-1" >

        <addPage></addPage>

      </div>

      <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:90%; width:100%; align-items:center; justify-content:center;background:white;">

         <img src="/imgs/diary_loading.svg" height="50" >

      </div>
        

      <!-- ends -->
     </div>

     <!-- ends -->


   

   </div>

     </div>
     </v-slide-x-reverse-transition>

     <!-- ends -->



       <!-- view full project -->

       
   <div class="col-12  py-0 px-0" style="position:fixed; left:0; width:100%; height:100%; z-index:9999999999999;background: rgba(27, 27, 30, 0.32);" @click="viewProjectModal = false" v-if="this.$root.showViewPost">

   <div style="position:absolute; height:100%; width:100%; left:0;background:transparent;overflow-y:hidden; overflow-x:hidden;" class="d-flex flex-column"  >
   

      <!-- small,large and medium screens -->

      <!-- close button -->
    
     
      <!-- ends -->

     <div class="col-12 pt-0 pb-0  px-0" 
     style="background:white; height:100%;
     border:1px solid white; overflow-y:auto;overflow-x:hidden;" @click.stop="viewProjectModal = true">

   
      <!-- project view page -->
     <div class="col-12  py-0 pt-0">

       <project-view :post="currentPost"></project-view>

      </div> 

        <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

         <img src="/imgs/diary_loading.svg" height="50" >

      </div>
        

      <!-- ends -->
     </div>

     <!-- ends -->

   </div>

   

     </div>
  
  
    <!-- image cropper -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" v-if="that.$root.showImageCropper">

   <div style="position:absolute; height:90%; top:5%; width:94%; left:3%; align-items:center; justify-content:center;" class="d-flex" >

     <div class=" col-lg-6  pt-2 col-md-8  d-flex flex-column" style="background:white;height:100%;" >

       <div class="text-center d-flex flex-row" style="align-items:center;">
          
          <div class="col-2 px-1 py-1 text-left">
          <v-btn icon @click="closeCropper"><v-icon>mdi mdi-close</v-icon> </v-btn> 
          </div>
         
          <div class="text-center col-8 py-1" style="width:100%;">
            <h6>Crop Image</h6>
          </div>

           <div class="col-2 px-1 py-1">
          
          </div>
       </div>
        <image-cropper-board></image-cropper-board>
     </div>

   </div>

 </div>

 <!-- ends -->


  <!-- share  -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" @click="that.$root.showInvitation = false" v-if="this.$root.showInvitation">

   <div style="position:absolute; height:90%; top:5%; width:94%; left:3%; align-items:center; justify-content:center;" class="d-flex" >

     
       <invitation :infoText="this.$root.infoText"
                                   :extraInfo="this.$root.extraInfo" :fromChat="false" :alertComponent="this.$root.alertComponent"></invitation>
   

   </div>

 </div>


 <!-- ends -->

  <!-- reward alert  -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" v-if="that.$root.showRewardBoard">

   <div style="position:absolute; height:90%; top:5%; width:94%; left:3%; align-items:center; justify-content:center;" class="d-flex" >

     
      <reward></reward>
   

   </div>

 </div>


 <!-- ends -->

  <!-- profile View  -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: #F5F5FB;" v-if="this.$root.showProfileView">

  
      
      <profile-view></profile-view>
   

  

 </div>


 <!-- ends -->
  

     <!-- ends -->
    </div>
</template>
<script>
import '../../bootstraps/globalPackage'


  import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'



 const TopBar = () => import(
    /* webpackChunkName: "top-bar" */ './TopBar.vue'
  );

const addPage = () => import(/*webpackChunkName: "addPage"*/ './AddProjectPage.vue')

 const ProjectView = () => import(
    /* webpackChunkName: "ProjectView" */ './ProjectView.vue'
  );
const ImageCropperBoard = () => import(
    /* webpackChunkName: "imageCropperBoard" */ './ImageCropper.vue'
  );
  
const Invitation = () => import(
    /* webpackChunkName: "Invitation" */ '../chats/invitation.vue'
  );

  const SideBar = () => import(
    /* webpackChunkName: "SideBar" */ '../dashboard/sideBar.vue'
  );

  const PostView = () => import(
    /* webpackChunkName: "PostView" */ './PostView.vue'
  );

   const ProfileView = () => import(
    /* webpackChunkName: "ProfileView" */ '../Profile/ProfilePage.vue'
  );

  const Reward = () => import(
    /* webpackChunkName: "Reward" */ '../dashboard/reward.vue'
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
        currentPost: this.$root.currentPost,
        project: {},
        loadingPost:false,
        loadingSearchPost:false,
      }
    },
    components: {
        TopBar,
      addPage,
      ProjectView,
      ImageCropperBoard,
      SideBar,
      PostView,
      Invitation,
      ProfileView,
      Reward
    },
    mounted(){
       
        if(!this.$root.isLogged){

            this.$root.checkIfUserIsLoggedIn();
         return;
        }
     
       
      this.fetchPost();

      this.setPath();

       this.$root.hubComponents = this;

        if(this.$route.params.post_id != undefined){

           this.$root.showViewPost = true;

        }
    },

    methods: {

       setPath:function(){

         
          if(this.$root.autoOpenPost){

             this.$router.push({ path: '/hub/post/' + this.$root.autoOpenPostId });

          }

       },
     
       fetchPost:function(){

          this.loadingPost = true;

         axios.get( '/fetch-posts')
      .then(response => {
      
      if (response.status == 200) {

       
        
           this.$root.posts = response.data.data;
          
        

         this.loadingPost = false;
       
     }
       
     
     })
     .catch(error => {

        this.loadingPost = false;
         this.showAlert('Oops!','Unable to fetch posts,please try again','error')
    
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
         timeout: 5000,
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
         timeout: 5000,
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
       zindex:'9999999999',
         timeout: 5000,
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
         timeout: 5000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'question'){

       }
     


    },



      goBack() {
        // this.viewProjectModal = false;
        this.$root.showViewPost = false;
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        closeCropper:function(){

           this.$root.showImageCropper = false;
           this.$root.imagepath = '';

           window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')


        },

      showAddPost: function() {

         this.$root.componentIsLoading = true;

          this.$router.push({ path:'/hub/new-post'})

      },
       imageStyleUser:function(dimension,data){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         let imgLink = data.image_name + '.' + data.image_extension;
         
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         
         
          return styleString;
      }
     },

     

      closeAddPost:function(){
     this.$root.showAddNewPost = false;
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      },

    getUserLevel: function(points){
let imageUrl = '';
          
  if(points >= 0 && points <= 99){
    imageUrl += '/imgs/newbie.svg'

  }
  else if(points >= 100 && points <= 999 ){

   imageUrl +='/imgs/junior.svg'
  }
   else if(points >= 1000 && points <= 4999 ){ 
   
imageUrl += '/imgs/intermediate.svg' 
}
    else if(points >= 5000 && points <= 9999 ){ 

imageUrl += '/imgs/senior.svg'
   }
 else if(points >= 10000 && points <= 14999 ){ 
   
imageUrl +='/imgs/expert.svg'
}
  else if(points >= 15000 && points <= 100000 ){ 
      
 imageUrl += '/imgs/super_dev.svg'
}

  return imageUrl;

    }
    },

  
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