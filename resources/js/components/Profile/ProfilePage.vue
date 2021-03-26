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

   <div style="position:absolute; height:100%; width:60%; left:0;" >

     <div class="col-md-6 col-lg-3 pt-2 px-0" style="background:white;height:100%;" @click.stop="that.$root.showSideBar = true">
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

       <div class=" col-12 scroller" style=" position:fixed; height:91%; top:8%; overflow-y:auto; padding-bottom:60px; overflow-x:hidden;" >

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

                  <div class="col-6 py-0 px-1 d-flex flex-row" style="align-items:center;justify-content:center;">
                      <v-btn small outlined rounded color="#3C87CD"  @click="copyLink()" style="font-size:12px; font-weight:bolder;font-family:MediumFont;">
                       <span style="text-transform:capitalize;">Profile link</span> 
                  </v-btn>
                </div>

                 <div class="col-6 py-0 px-1 d-flex flex-row" style="align-items:center;justify-content:center;">
                      <v-btn @click="showEditProfile" small  rounded color="#3C87CD" style="font-size:12px; color:white; font-weight:bolder;font-family:MediumFont;">
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

               <template v-if="profileData.is_mentor">

                  <div class="col-12 px-0 d-flex flex-row py-0 mt-2" style="align-items:center; border-bottom:1px solid #c5c5c5; overflow-x:auto; white-space: nowrap;">
                    
                   <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'projects' ? ' border-bottom:4px solid #3C87CD;' : ''" @click="handleSelectedTab('projects')" >

                        <div style="font-size:14px;font-family:MediumFont;" class="d-md-block d-none" >Projects</div>  
                          <div style="font-size:13px;font-family:MediumFont;" class="d-md-none d-block" >Projects</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'channels' ? ' border-bottom:4px solid #3C87CD;' : ''"   @click="handleSelectedTab('channels')">

                        
                             <div style="font-size:14px;font-family:MediumFont;" class="d-md-block d-none" >Channels</div>  
                          <div style="font-size:13px;font-family:MediumFont;" class="d-md-none d-block" >Channels</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'diaries' ? ' border-bottom:4px solid #3C87CD;' : ''"  @click="handleSelectedTab('diaries')" >

                             <div style="font-size:14px;font-family:MediumFont;" class="d-md-block d-none" >Diaries</div>  
                          <div style="font-size:13px;font-family:MediumFont;" class="d-md-none d-block" >Diaries</div>  

                   </div>

                    <!-- <div class="py-2 px-3 mr-1 sideBar"  :style="selectedTab == 'top_mentees' ? ' border-bottom:4px solid #3C87CD;' : ''"  @click="handleSelectedTab('mentees')">

                             <div style="font-size:14px;font-family:MediumFont;" class="d-md-block d-none" >Top mentees</div>  
                          <div style="font-size:13px;font-family:MediumFont;" class="d-md-none d-block" >Top mentees</div>  

                   </div> -->

                  </div>


               </template>

               <template v-else>
                <h5 style="border-bottom:1px solid #c5c5c5;" class="py-1">Projects</h5>
               </template>

           

                

               <div class="row mt-3">

                      <template v-if="loadingUserProjects">
                 

                  <div  class="col-12 mt-4 text-center">

                    <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

                      </div>
                    
                  </template>

                  <template v-else>
                  

                  <template v-if="selectedTab == 'channels'">

                     <template v-if="userChannel.length > 0">

               
                        <div class="col-lg-4 col-md-6 px-2 mb-2 pt-1 pt-md-2" v-for="(channel,index) in userChannel" :key="index + 'channel'"
          >
        
          <v-card class="py-3 px-2 d-flex flex-column" style="align-items:center; justify-content:center;">
            
            <div class=" py-0 my-0 text-center">

                  <div :style="channelStyle(90,channel)">
                    </div> 
                
            </div>

              <div class=" py-0 my-0 text-center mt-2">

                 
                    <div style="font-size:13px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" >{{channel.name}}</div>
                
            </div>

             <div class=" py-0 my-0 px-2 text-center" style="height:60px;text-overflow: ellipsis; overflow-y:hidden;">

                  <div style="font-size:13px;font-family:BodyFont; color:grey; " >{{channel.description}}</div>
                 
                
            </div>

              <div class=" py-0 my-0 text-center mt-2">
               
                <v-chip 
               outlined
              color="#3C87CD"
              dense
              class="mx-2"
              style="font-size:12px; font-family:BodyFont;"
              small
            >
             
         {{channel.members}} <span v-if="channel.members > 1">&nbsp; members</span> <span v-else >&nbsp; member</span> 
            </v-chip>
              
                 
            </div>

             <div class="col-12 py-0 mt-3 px-1 text-center">
                       <v-btn small   @click="viewChannel(channel)"  color="#3C87CD"  style="font-family:BodyFont;font-size:12px;color:white;text-transform:none;" class="mx-2 d-inline-block" >View channel</v-btn>
                        </div>

          </v-card>

          

          </div>

                     </template>

                        <template v-else> 

                   <div  class="col-12 mt-4 text-center">

                    <span style="font-size:13px;color:grey;font-family:BodyFont;" v-if="userData.username != that.$root.username">{{userData.username}} has no channel yet</span>

                     <span style="font-size:13px;color:grey;font-family:BodyFont;" v-else>You have no channel yet. Channel is where you mentor and earn from donation, subscriptions and paid sessions</span>
                      </div>

                       <div  class="col-12 mt-2 text-center" v-if="userData.username == that.$root.username"> 
                   
                    <v-btn small color="#3C87CD" style="color:white;text-transform:none;font-family:BodyFont;font-size:11px;" @click="createChannel" class="mx-2 d-inline-block" rounded>Create a Channel</v-btn>
                    
                      </div>

             </template>

                  </template>

 
                  <template v-if="selectedTab == 'diaries'">

                       <template v-if="userDiaries.length > 0">


                          <div class="col-lg-4 col-md-6 px-2 mb-1 py-2 pt-0 mt-md-2" v-for="diary in userDiaries" :key="diary.id+ 'diary'">
          
       <v-card  class="py-0 px-2 pl-1"  style="border-radius:7px;" >
            
            <div class=" py-0 my-0 d-flex flex-row" style="width:100%;align-items:center; height:auto; justify-content:center;">
                 <div  class=" mr-2 py-3" 
                     :style="imageStyleDiary(45,diary)"></div> 

                     <div class="px-0 py-3" style="width:85%;">

                     <div class="d-flex flex-row flex-wrap" style="align-items:center;">
                                   
                                       <div class="px-0 py-0 my-0 col-12 d-flex flex-row" style="align-items:center;">
                                               <div  style="font-size:14px; font-family:BodyFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">{{diary.name}}</div>

                                               <div class="d-flex flex-row ml-auto" style="align-items:center;">
                                                
                                                <span style="font-size:10px;" class="mr-1">
                                                  {{diary.views}}
                                                </span>
                                                   <v-icon style="font-size:19px;">las la-eye</v-icon>

                                                   <span style="font-size:10px;"  class="mx-1">
                                                   {{diary.followers}}
                                                </span>

                                                    <v-icon style="font-size:19px;">las la-user-friends</v-icon>

                                               </div>
                                           
                                       </div>

                                         <div class=" d-flex flex-row " style="align-items:center;width:100%;">
                                   
                                       <div class=" px-0 py-0 my-0 pr-1  " style="width:100%;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;font-size:13px; color:grey; font-family:BodyFont;">
                                            
                                               <span>{{ diary.description }}</span>
                                           
                                             
                                       </div>
                                        <div class=" px-1 py-1  ml-auto " >
                                          
                                            <v-btn v-if="diary.following == true" @click="viewDiary(diary)" x-small outlined  color="#3C87CD" rounded style="text-transform:capitalize;font-family:BodyFont;font-size:12px;" class="ml-1 d-inline-block" >following</v-btn>

                                                 <v-btn v-else @click="viewDiary(diary)" x-small outlined  color="#3C87CD" rounded style="text-transform:capitalize;font-family:BodyFont;font-size:12px;" class="ml-1 d-inline-block" >follow</v-btn>

                                          
                                              
                                       </div>
                                    
                                 </div> 
                                       
                                   
                                 </div>

                     </div>

                
            </div>
          </v-card>

          
          

          </div>

           
                       </template>
           

                     
                  <template v-else> 

                   <div  class="col-12 mt-4 text-center">

                    <span style="font-size:13px;color:grey;font-family:BodyFont;" v-if="userData.username != that.$root.username">{{userData.username}} has no diary yet</span>

                     <span style="font-size:13px;color:grey;font-family:BodyFont;" v-else>You have no diary yet. Diary is where you share what you know in the way you want.</span>
                      </div>

                       <div  class="col-12 mt-2 text-center" v-if="userData.username == that.$root.username"> 
                   
                    <v-btn small color="#3C87CD" style="color:white;text-transform:none;font-family:BodyFont;font-size:11px;" @click="createDiary" class="mx-2 d-inline-block" rounded>Create a diary</v-btn>
                    
                      </div>

             </template>



                  </template>


                 <template v-if="selectedTab == 'projects'">

                       <template v-if="userProjects.length > 0">

                           

                           <post-view :alertComponent="that" :username="userData.username" :fromProfile="true" :source="post" v-for="(post,index) in userProjects" :key="index"></post-view>


                     </template>

                     <template v-else>

                        <div  class="col-12 mt-4 text-center">

                    <span style="font-size:13px;color:grey;font-family:BodyFont;" v-if="userData.username != that.$root.username">{{userData.username}} has no project yet</span>

                     <span style="font-size:13px;color:grey;font-family:BodyFont;" v-else>You have no project yet. Share your projects and get more experience points (XP)</span>
                      </div>

                       <div  class="col-12 mt-2 text-center" v-if="userData.username == that.$root.username"> 
                   
                    <v-btn small color="#3C87CD" style="color:white;text-transform:none;font-family:BodyFont;font-size:11px;" @click="showAddPost" class="mx-2 d-inline-block" rounded>Share a project</v-btn>
                    
                      </div>

                     </template>

 

                  <template >

                     

                      

                  </template>


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

       <project-view></project-view>

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
       userDiaries:[],
       userChannel:[],
       loadingChat:false,
       mainUserName:'',
       selectedTab:'projects'
        }
    },
    methods:{
       channelStyle: function(dimension,data){

        
      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
        
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         let imgLink = data.image_name + '.' + data.image_extension;
         
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/thumbnails/'  + imgLink  +  ');';
         
         
          return styleString;
      }
      },
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
         createChannel:function(){

           this.$root.showProfileView = false;

             this.$root.componentIsLoading = true;

            if(this.$router.currentRoute.path.indexOf('channel') >= 0){

            this.$root.showPointDetailsInfo = false
                 this.$router.push({ path: '/channels/create' });
            }else{

                   this.$root.showCreateChannel = true;


            this.$root.showPointDetailsInfo = false

                   this.$router.push({ path: '/channels' });

            }

      

         },
         createDiary:function(){
             this.$root.showProfileView = false;
           this.$router.push({ path:'/board/diary/create-diary/new'})
         },
         handleSelectedTab: function(tabname){

           
   
         if(tabname == 'projects'){

            this.getUserProjects(tabname);



         }

          if(tabname == 'channels'){

            this.getUserChannel(tabname);

            

         }

          if(tabname == 'diaries'){

            this.getUserDiaries(tabname);

          
         }
            

         },
          getUserChannel:function(tabname){

         this.$root.routeIsLoading = true;

         axios.get('/fetch-user-channels/'+ this.userData.username)
    .then(
  response=>{

    if(response.status == 200){
     
       this.userChannel = response.data.channels;
         this.selectedTab = tabname;
     
       this.$root.routeIsLoading = false;
    }
  }
   )
   .catch(error => {

          this.showAlert('Oops!','Unable to fetch user channels','error');

     })

         

      },
      viewChannel:function(channel){

         this.$root.autoOpenChat = true;

                       this.$root.autoOpenChatId = channel.space_id;

                     this.$router.push({ path: '/channels' });

      },
      getUserDiaries:function(tabname){

         this.$root.routeIsLoading = true;

         axios.get('/fetch-user-diaries/'+ this.userData.username)
    .then(
  response=>{

    if(response.status == 200){
     
       this.userDiaries = response.data.diaries;

         this.selectedTab = tabname;
     
        this.$root.routeIsLoading = false;
    }
  }
   )
   .catch(error => {

          this.showAlert('Oops!','Unable to fetch user diaries','error');

     })

         

      },
       imageStyleDiary: function(size,data){

        if(data.background_color == null){
        let styleString = "height:" + size + "px;width:" + size +"px;background-size:cover;border-radius:3px;background-repeat: no-repeat;border:1px solid #c5c5c5; ";
         if(data.image_name == null || data.image_name == '0'){
              styleString += 'background-color:whitesmoke; background-image:url(imgs/background1.jpg);';
         }else{
            if(data.image_name == 'default_1'){

               styleString += 'background-color:whitesmoke; background-image:url(/imgs/background3.jpg);';

            }

            if(data.image_name == 'default_2'){

               styleString += 'background-color:whitesmoke; background-image:url(/imgs/background1.jpg);';

            }

              if(data.image_name == 'default_3'){

               styleString += 'background-color:whitesmoke; background-image:url(/imgs/imgproj2.jpeg);';

            }
          
         }
         
         return styleString;
       }else{
         let styleString = "height:" + size + "px;width:" + size +"px;background-size:cover;border-radius:3px;background-repeat: no-repeat; border:1px solid #c5c5c5;";
         let imgLink = data.image_name + '.' + data.image_extension;
        
        styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/thumbnails/'  + imgLink  +  ');';
         
          return styleString;


      }
      },
      getUserProjects:function(tabname){

         this.loadingUserProjects = true;

         axios.get('/fetch-user-posts/'+ this.userData.username)
    .then(
  response=>{

    if(response.status == 200){
     
       this.userProjects = response.data.data;
     
       this.selectedTab = tabname;
        this.loadingUserProjects = false;
    }
  }
   )
   .catch(error => {

          this.showAlert('Oops!','Unable to fetch user projects','error');

     })

         

      },
         showAddPost: function() {

         this.$root.componentIsLoading = true;

         this.$root.autoOpenAddPost = true;

          this.$router.push({ path:'/hub'})

      },
      showFullImage: function(data){

         if(data.image_name){

            this.$root.baseImageLink =  '/imgs/profile/'  + data.image_name + '.' + data.image_extension;

             this.$root.baseImageColor =  data.background_color;

               this.$router.push({ path:'/full-image-view'})

         }

        

      },
        copyLink () { 

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

      copyToClipboard('https://link.citonhub.com/profile/' + this.$root.username );

        this.showAlert('Copied!','Copied to clipboard','success');
         
        
        },
      chatUser:function(){

       

        if(!this.$root.isLogged){

           this.$root.checkIfUserIsLoggedIn();
          return;
        }

           this.$root.showProfileView = false;

         this.loadingChat = true;

          axios.post( '/create-space',{
                name: '',
                limit: 2,
                memberId: this.userData.id,
                type: 'Direct'
                  })
          .then(response => {

             if (response.status == 200) {

              

                  let storedChat = this.$root.getLocalStore('user_chat_list_new_'+ this.$root.username);

                   storedChat.then((result)=>{

                       if(result != null ){

                           

                          

                    let finalResult = JSON.parse(result);

                        let userSpace = finalResult.direct_messages.filter((space)=>{
                          return space.space_id == response.data.space.space_id
                        })

                        if(userSpace.length > 0){


                        }else{

                          finalResult.direct_messages.unshift(response.data.space);

                          this.$root.LocalStore('user_chat_list_new_' + this.$root.username,finalResult);

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

              this.showAlert('Oops!','Something went wrong,please try again','error');


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

           this.$root.initialPushMangerReg();
         
        }else if(this.mainUserName =! this.$root.username){
          this.owner=false;
        }

      this.loadingProfile = false;

      this.getUserProjects('projects');
   
     
    }
  }
   )
   .catch(error => {

          this.showAlert('Oops!','Something went wrong','error');

     })
},

calculateLevel(){

   
  if(this.xp >= 50 && this.xp <= 99){
this.level='Steel';
this.nextLevel='Bronze';
this.xpLeft=100-this.xp;
this.barValue=(this.xp/100)*100;
this.pic='/imgs/bronze.svg'
this.pic1='/imgs/steel.svg'
  }
  else if(this.xp >= 100 && this.xp <= 299 ){ this.level='Bronze';
  this.nextLevel='Silver';
  this.xpLeft=300-this.xp;
  this.barValue=(this.xp/300)*100
  this.pic='/imgs/silver.svg'
this.pic1='/imgs/bronze.svg'
  }
   else if(this.xp >= 300 && this.xp <= 599 ){ 
     this.level='Silver';
  this.nextLevel='Gold';
  this.xpLeft=600-this.xp;
  this.barValue=(this.xp/600)*100;
   this.pic='/imgs/gold.svg'
this.pic1='/imgs/silver.svg' }
    else if(this.xp >= 600 && this.xp <= 999 ){ this.level='Gold';
   this.nextLevel='Platinum';
   this.xpLeft=1000-this.xp;
   this.barValue=(this.xp/1000)*100;
   this.pic='/imgs/platinum.svg'
this.pic1='/imgs/gold.svg'
   }
 else if(this.xp >= 1000 && this.xp <= 1499 ){ this.level='Platinum';
 this.nextLevel='Diamond';
 this.xpLeft=1500-this.xp;
 this.barValue=(this.xp/1500)*100;
 this.pic='/imgs/diamond.svg'
this.pic1='/imgs/platinum.svg'}
  else if(this.xp >= 1500 && this.xp <= 9999 ){ this.level='Platinum';
  this.nextLevel='Diamond';
  this.xpLeft=10000-this.xp;
  this.barValue=(this.xp/10000)*100;
 this.pic='/imgs/diamond.svg'
this.pic1='/imgs/platinum.svg'
}

},

  
  closeImage:function(){
    window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    this.$root.showFullImage = false;
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
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        
         
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
.sideBar:hover{
     
      border-bottom:4px solid #3C87CD !important;
      cursor: pointer;
  }

    .scroller::-webkit-scrollbar {
  width: 6px;
  background: transparent;
}


.scroller::-webkit-scrollbar-thumb {
  background-color:   darkgrey;
  outline: 1px solid darkgrey;
}
</style>