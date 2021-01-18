<template>
   <div data-app="true" class=" application application--light" style="position:fixed;height:100%;background:#F5F5FB; width:100%;">

         <!-- top bar -->
        <div class="col-12 py-0 fixed-top" style="position:sticky;width:100%;height:auto;z-index:999999999999999999; ">
         <top-bar></top-bar>
        </div>
     

       <!-- ends -->


        <!-- side bar -->


   <v-slide-x-transition>
   <div class="col-12  py-0 px-0" style="position:absolut; width:100%; height:100%; z-index:9999999999999;background: rgba(27, 27, 30, 0.32);" @click="that.$root.showSideBar = false" v-if="that.$root.showSideBar">

   <div style="position:absolute; height:100%; width:70%; left:0;" >

     <div class="col-md-6 col-lg-3 pt-2" style="background:white;height:100%;" @click.stop="that.$root.showSideBar = true">
        <side-bar></side-bar>
     </div>

   </div>

     </div>
   </v-slide-x-transition>

       <!-- ends -->


       <!-- profile edit -->
         

            <v-slide-x-reverse-transition>

     
   <div class="col-12  py-0 px-0" style="position:fixed; left:0; width:100%; height:100%; z-index:9999999999999;background: rgba(27, 27, 30, 0.32);"  @click="goBack" v-if="this.$root.showProfileEditModal">

   <div style="position:absolute; height:100%; width:100%; left:0;background:transparent;overflow-y:auto; overflow-x:hidden;"  >
   

      <!-- large and medium screens -->

     <div class="col-lg-3 col-md-6 offset-lg-9 offset-md-6 pt-0 pb-3 scroller  px-0 " 
     style=" height:100%; top:0%;  position:absolute; background:white;
     border:1px solid white;border-radius:0px;border-radius:0px;  overflow-y:auto;overflow-x:hidden;">

     <!-- header -->
                
    
     <div class="col-12 px-md-1 px-0 py-2 pt-0 fixed-top d-flex flex-row" style=" left:0; position:sticky;background:white; top:0%; border-bottom:1px solid #c5c5c5;align-items:center;">
           
             <div class=" col-2 px-1 py-0 ">
              <v-btn @click.stop="goBack" icon >
                      <v-icon>mdi mdi-close</v-icon>
                    </v-btn>
            </div>
             <div class="col-8 text-center py-0">
             <span style="font-size:17px; font-family:HeaderFont;" class="d-md-block d-none">Edit profile</span>

               <span style="font-size:15px; font-family:HeaderFont;" class="d-md-none d-block">Edit profile</span>
          </div>
              
               <div class="px-1 py-0 col-2 text-right ">
             
             </div>
             
          
        </div>
      <!-- ends -->

      <!-- edit profile page -->
      <div class="col-12 px-3 px-md-1 py-1">

        <edit-profile></edit-profile>

      </div>
        

      <!-- ends -->
     </div>

     <!-- ends -->


   

   </div>

     </div>
     </v-slide-x-reverse-transition>


       <!-- ends -->

       <!-- profile container -->

       <div class=" col-12 scroller" style=" position:fixed; height:90%; top:8%; overflow-y:auto; padding-bottom:60px; overflow-x:hidden;" >

          <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 py-0">


            <div class="row">

                 <template v-if="loadingProfile">

                      <div  class="col-12 mt-4 text-center">

                    <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

                      </div>

                 </template>

                <template v-if="!loadingProfile">

              

                    <div class="d-flex flex-row flex-wrap col-12 pb-2 text-center">

             <div class="d-flex flex-column py-0 pb-1 col-lg-6 offset-lg-3 " style="align-items:center;justify-content:center;">

              

       <div class="mb-2"  
                   :style=" imageStyleUser(150,profileData)"
                 
                      @click="showFullImage(profileData)"
                  ></div>

       
            <span style="font-family:HeaderFont;font-size:16px;">{{userData.name}}</span>
            <span style="font-family:MediumFont;color:grey;font-size:14px;">@{{userData.username}}</span>

             <div class="col-lg-8 col-md-8 py-0 my-0 d-flex" style="align-items:center;justify-content:center;">

              <div class="row">
                
                <div class="col-4 py-0 d-flex"  style="align-items:center;justify-content:center;">
                
                <div class="d-flex flex-column"  style="align-items:center;justify-content:center;">
                      <img :src="pic1" height="40px"> 
                      <span style="font-family:MediumFont;font-size:12px;color:#333333;">{{level}}</span>
                </div>

                </div>

                 <div class="col-4 py-0 d-flex"  style="align-items:center;justify-content:center;">
                      <span class="mx-1" style="font-family:MediumFont;font-size:12px;" >{{xp}} </span><span style="font-size:12px;">XP</span>
                  </div>


                 <div class="col-4  py-0 d-flex "  style="align-items:center;justify-content:center;">

                   <div class="d-flex flex-column"  style="align-items:center;justify-content:center;">
                     <img :src="pic" height="40px"> 
                      <span style="font-family:MediumFont;font-size:12px;color:#333333;">{{nextLevel}}</span>
                </div>
                    
                </div>

                <div class=" col-12 py-1 pt-2 "   >
                     <div class="d-flex flex-column"  style="align-items:center;justify-content:center;">
                     <v-progress-linear height="7px" width="100%" rounded color="#3C87CD" :value="barValue"></v-progress-linear>
                      <span style="font-family:BodyFont;font-size:12px;color:#333333;"><span style="font-family:MediumFont;">{{xpLeft}}</span> XP Points to {{nextLevel}} dev</span>
                </div>
                </div>

              </div>

            </div>

          


             </div>

            
         </div>


         <div class="col-lg-4 py-0 my-0 px-1 d-flex" style="align-items:center;justify-content:center;">

                <div class="col-6 py-0 px-1 d-flex flex-row" style="align-items:center;justify-content:center;">
                         <span style="font-family:MediumFont;font-size:13px;color:#333333;" class="mx-1">{{profileData.following}}</span> <span style="font-size:13px;font-family:BodyFont;">Following</span>
                </div>

              
                <div class="col-6 py-0 px-1 d-flex flex-row" style="align-items:center;justify-content:center;">

                     <span style="font-family:MediumFont;font-size:13px;color:#333333;" class="mx-1">{{profileData.followers}}</span> <span style="font-size:13px;font-family:BodyFont;">Followers</span>

                </div>

            </div>

            <div  class="col-lg-4 py-0 my-lg-1 px-1 d-flex text-center my-2" style="align-items:center;justify-content:center;">
                <div style="font-family:BodyFont;font-size:13px;" class="mt-2" v-html="profileData.about">
              
            </div>
            </div>

            <div  class="col-lg-4 py-0 my-lg-0 px-1 d-flex text-center flex-row my-2" style="align-items:center;justify-content:center;">
              <template v-if="owner">

                 <div class="col-12 py-0 px-1 d-flex flex-row" style="align-items:center;justify-content:center;">
                      <v-btn @click="showEditProfile" small outlined rounded color="#3C87CD" style="font-size:12px; font-weight:bolder;font-family:MediumFont;">
                       <span style="text-transform:capitalize;">Edit profile</span> 
                  </v-btn>
                </div>

              </template>

              <template v-else>

                 <div class="col-6 py-0 px-1 d-flex flex-row" style="align-items:center;justify-content:center;">
                      <v-btn small outlined rounded color="#3C87CD" :loading="loadingChat" @click="chatUser()" style="font-size:12px; font-weight:bolder;font-family:MediumFont;">
                       <span style="text-transform:capitalize;">Chat</span> 
                  </v-btn>
                </div>

                <div class="col-6 py-0 px-1 d-flex flex-row" style="align-items:center;justify-content:center;">
                      
                       <template v-if="profileData.following_user">
                           <v-btn small outlined rounded color="#3C87CD" style="font-size:12px; font-weight:bolder;font-family:MediumFont;">
                       <span style="text-transform:capitalize;">following</span> 
                  </v-btn>

                       </template>
                       <template v-else>

                          <v-btn small rounded color="#3C87CD" :loading="loadingFollowing" @click="followUser()" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
                       <span style="color:white;text-transform:capitalize;">follow</span> 
                  </v-btn>

                       </template>
                    

                </div>

                

              </template>
              


            </div>

             <div class="col-12 px-1 mt-2">

               <h5 style="border-bottom:1px solid #c5c5c5;" class="py-1">Projects</h5>

               <div class="row mt-3">

                  <template v-if="loadingUserProjects">
                 

                  <div  class="col-12 mt-4 text-center">

                    <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

                      </div>
                    
                  </template>

                  <template v-else>

                     

                         <template v-if="userProjects.length > 0">

                           <post-view :alertComponent="that" :fromProfile="true" :post="post" v-for="(post,index) in userProjects" :key="index"></post-view>


                     </template>

                     <template v-else>

                        <div  class="col-12 mt-4 text-center">

                    <span style="font-size:13px;color:grey;font-family:BodyFont;">{{userData.username}} has no project yet</span>
                      </div>

                     </template>

                    
                    
                    
                  
                      

                  </template>

                  

               </div>

             </div>


              </template>

           

            
                </div>

          </div>

                
       


       </div>
       

       <!-- ends -->

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


 <!-- full image view -->


   <div class="py-0 px-0" :style="'position:fixed; width:100%; height:100%; z-index:99999999999999999;background: ' + that.$root.baseImageColor + ';'" v-if="that.$root.showFullImage">

   <div style="position:absolute; height:90%; top:5%; width:100%; left:0%; align-items:center; justify-content:center;" class="d-flex" >

     <div class=" col-lg-6 px-1 pt-2 col-md-8  d-flex flex-column" :style="'height:100%;'" >

          
            <v-btn icon color="#ffffff" @click="closeImage" style="position:absolute;background:#3C87CD;top:4%; left:3%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>

           <!-- image view -->

       <div class="col-12 py-0 my-0 px-0 d-flex scroller" style="position:absolute;  height:100%; left:0%; width:100%; overflow-y:auto; overflow-x:hidden; align-items:center; justify-content:center;">
        
            <img :src="that.$root.baseImageLink" style="height:auto; " width="100%">
         
       </div>
              
   <!-- ends -->

      
       
     </div>

   </div>

 </div>

 <!-- ends -->

 <!-- project view -->


  <div class="col-12  py-0 px-0" style="position:fixed; left:0; width:100%; height:100%; z-index:9999999999999;background: rgba(27, 27, 30, 0.32);"  v-if="this.$root.showViewPost">

   <div style="position:absolute; height:100%; width:100%; left:0;background:transparent;overflow-y:hidden; overflow-x:hidden;" class="d-flex flex-column"  >
   

      <!-- small,large and medium screens -->

      <!-- close button -->
    
     

      <!-- ends -->

   <div class="col-12 pt-0 pb-0  px-0" 
     style="background:white; height:100%;
     border:1px solid white; overflow-y:auto;overflow-x:hidden;">

   
      <!-- project view page -->
      <div class="col-12  py-0 pt-0">

       <project-view ></project-view>

      </div>
        

      <!-- ends -->
     </div>

     <!-- ends -->

   </div>   

     </div>


       <!-- share  -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" @click="that.$root.showInvitation = false" v-if="this.$root.showInvitation">

   <div style="position:absolute; height:90%; top:5%; width:94%; left:3%; align-items:center; justify-content:center;" class="d-flex" >

   

      
      <invitation :infoText="this.$root.infoText"
                                   :extraInfo="this.$root.extraInfo" :fromChat="false" :alertComponent="this.$root.alertComponent"></invitation>
   

   </div>

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
   /* webpackChunkName: "top-bar-profile" */ './TopBar.vue'
  );

const EditProfile = () => import(
   /* webpackChunkName: "EditProfile" */ './EditProfile.vue'
  );

const ImageCropperBoard = () => import(
    /* webpackChunkName: "imageCropperBoard" */ '../dashboard/ImageCropper.vue'
  );

  const PostView = () => import(
    /* webpackChunkName: "PostView" */ '../Hub/PostView.vue'
  );

 const ProjectView = () => import(
    /* webpackChunkName: "ProjectView" */ '../Hub/ProjectView.vue'
  );

const SideBar = () => import(
    /* webpackChunkName: "SideBar" */ '../dashboard/sideBar.vue'
  );

const Invitation = () => import(
    /* webpackChunkName: "Invitation" */ '../chats/invitation.vue'
  );

export default {
   props:['fromModal'],
components:{
TopBar,
EditProfile,
ImageCropperBoard,
SideBar,
PostView,
ProjectView,
Invitation
},
  mounted(){
      this.$root.showMobileHub = false;
  
       if(this.$route.params.username){

         this.mainUserName =  this.$route.params.username ;
       
       }else{
         this.mainUserName =  this.$root.selectedUsername ;
       }

        this.fetchProfileContent();

     this.$root.profilePageComponent = this;
    },

    data(){

        return{
             that:this,
        userData:[],
        profileData:[],
        xp:'',
        xpLeft:'',
        barValue:40,
       level:'Newbie',
       nextLevel:'Junior',
       pic:'/imgs/junior.svg',
       pic1:'/imgs/newbie.svg',
       owner:false,
       loadingProfile: false,
       loadingUserProjects: false,
       loadingFollowing:false,
       userProjects:[],
       loadingChat:false,
       mainUserName:''
        }
    },
    methods:{
       followUser:function(){
              this.$root.checkIfUserIsLoggedIn();
              if(this.$root.checkauthroot == 'auth'){
                 this.loadingFollowing = true;
                axios.get( '/connect-user-'+ this.userData.username)
      .then(response => {
      
      if (response.status == 200) {
          
           this.loadingFollowing = false;
          this.profileData.following_user = true;
          this.profileData.followers += 1
          
     }
       
     
     })
     .catch(error => {

         this.loadingFollowing = false;

         this.showAlert('Oops!','Something went wrong','error');
    
     }) 
              }
            
         },
      getUserProjects:function(){

         this.loadingUserProjects = true;

         axios.get('/fetch-user-posts/'+ this.userData.username)
    .then(
  response=>{

    if(response.status == 200){
     
       this.userProjects = response.data.data;
     
        this.loadingUserProjects = false;
    }
  }
   )
   .catch(error => {

          this.showAlert('Oops!','Unable to fetch user projects','error');

     })

         

      },
      showFullImage: function(data){

         if(data.image_name){

            this.$root.baseImageLink =  '/imgs/profile/'  + data.image_name + '.' + data.image_extension;

             this.$root.baseImageColor =  data.background_color;

               this.$router.push({ path:'/full-image-view'})

         }

        

      },
      chatUser:function(){

         this.loadingChat = true;

          axios.post( '/create-space',{
                name: '',
                limit: 2,
                memberId: this.userData.id,
                type: 'Direct'
                  })
          .then(response => {

             if (response.status == 200) {

              

                  let storedChat = this.$root.getLocalStore('user_chat_list'+ this.$root.username);

                   storedChat.then((result)=>{

                       if(result != null ){

                           

                          

                    let finalResult = JSON.parse(result);

                        let userSpace = finalResult.direct_messages.filter((space)=>{
                          return space.space_id == response.data.space.space_id
                        })

                        if(userSpace.length > 0){


                        }else{

                          finalResult.direct_messages.unshift(response.data.space);

                          this.$root.LocalStore('user_chat_list' + this.$root.username,finalResult);

                     let fullList = finalResult.channels.concat(finalResult.direct_messages, finalResult.pet_spaces);

                     
                   this.$root.ChatList = fullList;

                     this.$root.sortChatList();

                        }
                      
                         


                      if(this.fromModal){

                        this.$root.chatComponent.openChat(response.data.space.space_id,true)

                      }else{

                         this.$root.autoOpenChat = true;

                       this.$root.autoOpenChatId = response.data.space.space_id;

                     this.$router.push({ path: '/channels' });


                      }
                     
                  

                    

                 }

                   } )

               
            }

          })
          .catch(error => {
             

               this.loadingChat = false;

              this.showAlert('Oops!','Unable to fetch user projects','error');


          })


        

      },
      closeCropper:function(){
        this.$root.showImageCropper = false;
         window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      },
      showEditProfile:function(){

         this.$router.push({ path:'/profile/edit/'+this.$route.params.username})

      },

      showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
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

       if(type == 'success'){
         iziToast.success(
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

       if(type == 'warning'){

          iziToast.warning(
        { 
       title: title,
        timeout:2000,
       message: message,
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
        timeout:2000,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       

    },


    fetchProfileContent(){
       this.loadingProfile = true;
    axios.get('/fetch-profile-'+ this.mainUserName)
    .then(
  response=>{
    if(response.status==200){
     
      this.userData= response.data.user_data
      this.profileData=response.data.profile
    this.xp=this.profileData.points
    this.calculateLevel();

 
   if(this.mainUserName == this.$root.username){
       // this should be true
          this.owner=true;
         
        }else if(this.mainUserName =! this.$root.username){
          this.owner=false;
        }

      this.loadingProfile = false;

      this.getUserProjects();
   
     
    }
  }
   )
   .catch(error => {

          this.showAlert('Oops!','Something went wrong','error');

     })
},

calculateLevel(){

   
  if(this.xp >= 50 && this.xp <= 99){
this.level='Newbie';
this.nextLevel='Junior';
this.xpLeft=100-this.xp;
this.barValue=(this.xp/100)*100;
this.pic='/imgs/junior.svg'
this.pic1='/imgs/newbie.svg'
  }
  else if(this.xp >= 100 && this.xp <= 999 ){ this.level='Junior';
  this.nextLevel='Intermediate';
  this.xpLeft=1000-this.xp;
  this.barValue=(this.xp/1000)*100
  this.pic='/imgs/intermediate.svg'
this.pic1='/imgs/junior.svg'
  }
   else if(this.xp >= 1000 && this.xp <= 4999 ){ 
     this.level='Intermediate';
  this.nextLevel='Senior';
  this.xpLeft=5000-this.xp;
  this.barValue=(this.xp/5000)*100;
   this.pic='/imgs/senior.svg'
this.pic1='/imgs/intermediate.svg' }
    else if(this.xp >= 5000 && this.xp <= 9999 ){ this.level='Senior';
   this.nextLevel='Expert';
   this.xpLeft=10000-this.xp;
   this.barValue=(this.xp/10000)*100;
   this.pic='/imgs/expert.svg'
this.pic1='/imgs/senior.svg'
   }
 else if(this.xp >= 10000 && this.xp <= 14999 ){ this.level='Expert';
 this.nextLevel='Super Dev';
 this.xpLeft=15000-this.xp;
 this.barValue=(this.xp/15000)*100;
 this.pic='/imgs/super_dev.svg'
this.pic1='/imgs/expert.svg'}
  else if(this.xp >= 15000 && this.xp <= 100000 ){ this.level='Super Dev';
  this.nextLevel='Super';
  this.xpLeft=100000-this.xp;
  this.barValue=(this.xp/100000)*100;
  this.pic='';
  this.pic1='/imgs/super_dev.svg'
}

},

  
  closeImage:function(){
    window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
  },

 close:function(){
    window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
  },

goBack(){
    this.$router.push({
      path:'/profile/'+this.$route.params.username
    });
    this.$root.showProfileEditModal=false
  },

   imageStyleUser:function(dimension,data){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:5px solid #3C87CD;cursor:pointer;";
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
        
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:5px solid #3C87CD;cursor:pointer; ";
         let imgLink = data.image_name + '.' + data.image_extension;
         
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         
         
          return styleString;
      }
     },



    }
}
</script>


<style scoped>
    .scroller::-webkit-scrollbar {
  width: 6px;
  background: transparent;
}


.scroller::-webkit-scrollbar-thumb {
  background-color:   darkgrey;
  outline: 1px solid darkgrey;
}
</style>