<template>

<div class="fixed">

   <div style="position:absolute; width:25%; height:100%;left:0%; border-radius:0px;" class="card my-0 mx-0 py-2 px-2 d-none d-lg-block">
       <div class="col-12 my-0 py-0" >
        <div class="row my-0 py-1 pb-2" style="border-bottom:1px solid #c4c4c4;">
           <div class="col-2 text-left my-0 py-0">
             <v-btn icon  @click.stop="drawer = !drawer"><v-icon>mdi-menu</v-icon></v-btn>
           </div>
           <div class="col-8 text-center my-0 py-0">
               <img src="/imgs/citon.jpg" height="40" width="auto" >
           </div>
            <div class="col-2 my-0 py-0">

           </div>
        </div> 
        <div class="col-12 py-0 my-1 mx-0 px-0">
             <a href="#" class=" d-md-none d-lg-inline d-none" style="border-bottom:3px solid #3E8893;">
                <span class="withlove" style="color:#153402;">Active Courses &nbsp;  &nbsp; &nbsp; &nbsp;</span>
            </a>
        </div>

        <h5 class="text-center py-2 mt-1" style="font-size:14px;" v-if="tutorclasses.length != 0">Tutor Classes</h5>
        <div v-if="tutorclasses.length != 0" class="mb-5">
       <v-row  :class="selectedclassid == course.classid ? 'selectedclass' : 'notselectedclass'" style="" v-for="(course,index) in tutorclasses" :key="index"  @click="openchattutor(course.classid)">
           <div class="col-2 text-center">
           <img :src="'/imgs/course/' + course.image_name + '.' + course.image_extension" height="50" width="50" style="border-radius:50%;" >
           </div>
           <div class="col-10" style="border-bottom:1px solid #c5c5c5;">
             <span class="courseheading">{{course.title}}</span>
            <div class="row my-0 py-0">
              <div class="col-8 text-left my-0 py-0">
              <span class="lastmessage">This is the last message...</span>
              </div>
              <div class="col-4 text-right my-0 py-0">
              <span class="lastmessage">a second ago</span>
              </div>
            </div>
           </div>
        </v-row>
        </div>

       <h5 class="text-center py-2 mt-1" style="font-size:14px;" v-if="tutorclasses.length != 0">Registered Classes</h5>

         

         <v-skeleton-loader
                    type="list-item-avatar-three-line"
                    v-if="allPaidCourses.length == 0"
                    class="col-12  py-2">

           </v-skeleton-loader>
           <v-skeleton-loader
                    type="list-item-avatar-three-line"
                    v-if="allPaidCourses.length == 0"
                    class="col-12  py-2">

           </v-skeleton-loader>
         
        <v-row  :class="selectedclassid == course.classid ? 'selectedclass' : 'notselectedclass'" style="" v-for="(course,index) in allPaidCourses" :key="index"  @click="openchat(course.classid)">
           <div class="col-2 text-center">
           <img :src="'/imgs/course/' + course.image_name + '.' + course.image_extension" height="50" width="50" style="border-radius:50%;" >
           </div>
           <div class="col-10" style="border-bottom:1px solid #c5c5c5;">
             <span class="courseheading">{{course.title}}</span>
            <div class="row my-0 py-0">
              <div class="col-8 text-left my-0 py-0">
              <span class="lastmessage">This is the last message...</span>
              </div>
              <div class="col-4 text-right my-0 py-0">
              <span class="lastmessage">a second ago</span>
              </div>
             
            </div>
             <div class="col-12 text-center my-0 py-1" v-if="course.trial">
                <span v-show="showtrial">
                  <span class="lastmessage">Oops!,free trial is over 😔</span><br>
                   <span class="lastmessage" style="color:black;">
                       <Rave
       
        :amount="5000"
        :isProduction="true"
        :email="usermailcom"
       :reference="reference"
       :raveKey="raveKey"
       :callback="callback"
       :close="close"
       currency="NGN"
       country="NG"
   ></Rave>
                    and see what you have missed 😃</span>
                  
                </span>
              </div>
           </div>
        </v-row>

        
       
        
       </div>
        <div class="col-12 text-center" style="position:absolute; bottom:10px;">
                 <v-pagination
           v-model="paginate"
          :length="paginate_lenght"
          style="font-size:10px !important;"
          
        
          :total-visible="3"
            color="#3E8893"
           ></v-pagination>
              </div>
   </div>

   <!-- for medium -->
  
   <div style="position:absolute; width:100%; height:100%;left:0%; border-radius:0px;" class="card my-0 mx-0 d-lg-none d-md-block d-none " v-if="showchatboard">
       <div class="col-12 my-0 py-0" >
        <div class="row my-0 py-1 pb-2" style="border-bottom:1px solid #c4c4c4;">
           <div class="col-2 text-left my-0 py-0">
             <v-btn icon  @click.stop="drawer = !drawer"><v-icon>mdi-menu</v-icon></v-btn>
           </div>
           <div class="col-8 text-center my-0 py-0">
               <img src="/imgs/citon.jpg" height="40" width="auto" >
           </div>
            <div class="col-2 my-0 py-0">

           </div>
        </div> 
       

 <h5 class="text-center py-2 mt-1" style="font-size:13px;" v-if="tutorclasses.length != 0">Tutor Classes</h5>
        <div v-if="tutorclasses.length != 0" class="mb-5">
       <v-row  :class="selectedclassid == course.classid ? 'selectedclass' : 'notselectedclass'" style="" v-for="(course,index) in tutorclasses" :key="index"  @click="openchattutor(course.classid)">
           <div class="col-2 text-center">
           <img :src="'/imgs/course/' + course.image_name + '.' + course.image_extension" height="50" width="50" style="border-radius:50%;" >
           </div>
           <div class="col-10" style="border-bottom:1px solid #c5c5c5;">
             <span class="courseheading">{{course.title}}</span>
            <div class="row my-0 py-0">
              <div class="col-8 text-left my-0 py-0">
              <span class="lastmessage">This is the last message...</span>
              </div>
              <div class="col-4 text-right my-0 py-0">
              <span class="lastmessage">a second ago</span>
              </div>
            </div>
           </div>
        </v-row>
        </div>

       <h5 class="text-center py-2 mt-1" style="font-size:13px;" v-if="tutorclasses.length != 0">Registered Classes</h5>

      
      
          <v-skeleton-loader
                    type="list-item-avatar-three-line"
                    v-if="allPaidCourses.length == 0"
                    class="col-12  py-2">

           </v-skeleton-loader>
           <v-skeleton-loader
                    type="list-item-avatar-three-line"
                    v-if="allPaidCourses.length == 0"
                    class="col-12  py-2">

           </v-skeleton-loader>
         
        <v-row class=" py-2 px-2" @click="openchat(course.classid)" v-for="(course,index) in allPaidCourses" :key="index">
           <div class="col-2 text-center">
           <img :src="'/imgs/course/' + course.image_name + '.' + course.image_extension" height="50" width="50" style="border-radius:50%;" >
           </div>
           <div class="col-10" style="border-bottom:1px solid #c5c5c5;">
             <span class="courseheading">{{course.title}}</span>
            <div class="row my-0 py-0">
              <div class="col-8 text-left my-0 py-0">
              <span class="lastmessage">This is the last message...</span>
              </div>
              <div class="col-4 text-right my-0 py-0">
              <span class="lastmessage">a second ago</span>
              </div>
            </div>
             <div class="col-12 text-center my-0 py-1" v-if="course.trial">
                <span v-show="showtrial">
                  <span class="lastmessage">Oops!,free trial is over 😔</span><br>
                   <span class="lastmessage" style="color:black;">
                       <Rave
       
        :amount="5000"
        :isProduction="true"
        :email="usermailcom"
       :reference="reference"
       :raveKey="raveKey"
       :callback="callback"
       :close="close"
       currency="NGN"
       country="NG"
   ></Rave>
                    and see what you have missed 😃</span>
                  
                </span>
              </div>
           </div>
        </v-row>





        
        
       </div>
        <div class="col-12 text-center" style="position:absolute; bottom:10px;">
                 <v-pagination
           v-model="paginate"
          :length="paginate_lenght"
          style="font-size:10px !important;"
          
        
          :total-visible="3"
            color="#3E8893"
           ></v-pagination>
              </div>
   </div>


<v-navigation-drawer
      v-model="drawer"
     
      absolute
      style="height:100%;"
      temporary
    >
      <div class="text-right">
         <v-btn icon @click.stop="drawer = !drawer"><v-icon>mdi-close</v-icon></v-btn>
      </div>
      <v-list dense>
         
        <v-list-item
          style="border-bottom:1px solid whitesmoke;"
          link
          href="/"
        >
          <v-list-item-avatar color="whitesmoke">
            <v-icon>mdi-home</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item
          style="border-bottom:1px solid whitesmoke;"
          link
          href="/course"
        >
          <v-list-item-avatar color="whitesmoke">
            <v-icon>mdi-view-carousel</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Courses</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item
          style="border-bottom:1px solid whitesmoke;"
          link
          href="/profile"
        >
          <v-list-item-avatar color="whitesmoke">
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <!-- for small -->
  
   <div style="position:absolute; width:100%; height:100%;left:0%; border-radius:0px;" class="card my-0 mx-0 d-md-none d-block " v-if="showchatboard">
       <div class="col-12 my-0 py-0"  style="position:absolute; width:100%; height:100%; left:0%;" >
        <div class="row my-0 py-1 pb-1" style="border-bottom:1px solid #c4c4c4;">
           <div class="col-2 text-left my-0 py-0">
             <v-btn icon  @click.stop="drawer = !drawer"><v-icon>mdi-menu</v-icon></v-btn>
           </div>
           <div class="col-8 text-center my-0 py-0">
               <img src="/imgs/citon.jpg" height="30" width="auto" >
           </div>
            <div class="col-2 my-0 py-0">

           </div>
        </div> 
             <div  style=" overflow-y:scroll; padding-bottom:120px !important; position:absolute; width:100%; height:100%; left:0%;">
                  
                <h5 class="text-center py-1 mt-1" style="font-size:12px;" v-if="tutorclasses.length != 0">Tutor Classes</h5>
        <div v-if="tutorclasses.length != 0" class="mb-2">
      <v-row class=" py-2 px-2 " @click="openchattutor(course.classid)"  v-for="(course,index) in tutorclasses" :key="index">
           <div class="col-2 text-center">
            <img :src="'/imgs/course/' + course.image_name + '.' + course.image_extension" height="40" width="40" style="border-radius:50%;" >
           </div>
           <div class="col-10" style="border-bottom:1px solid #c5c5c5;">
             <span class="courseheading" style="font-size:10px;">{{course.title}}</span>
            <div class="row my-0 py-0">
              <div class="col-6 text-left my-0 py-0">
              <span class="lastmessage" style="font-size:9px;">This is the last mess...</span>
              </div>
              <div class="col-6 text-right my-0 py-0">
              <span class="lastmessage" style="font-size:9px;">a second ago</span>
              </div>
            </div>
            
           </div>
          
        </v-row>
        </div>

       <h5 class="text-center py-1 mt-1" style="font-size:12px;" v-if="tutorclasses.length != 0">Registered Classes</h5>

        
      

          <v-skeleton-loader
                    type="list-item-avatar-three-line"
                    v-if="allPaidCourses.length == 0"
                    class="col-12  py-2">

           </v-skeleton-loader>

           <v-skeleton-loader
                    type="list-item-avatar-three-line"
                    v-if="allPaidCourses.length == 0"
                    class="col-12  py-2">

           </v-skeleton-loader>
         
        <v-row class=" py-2 px-2 " @click="openchat(course.classid)"  v-for="(course,index) in allPaidCourses" :key="index">
           <div class="col-2 text-center">
            <img :src="'/imgs/course/' + course.image_name + '.' + course.image_extension" height="40" width="40" style="border-radius:50%;" >
           </div>
           <div class="col-10" style="border-bottom:1px solid #c5c5c5;">
             <span class="courseheading" style="font-size:10px;">{{course.title}}</span>
            <div class="row my-0 py-0">
              <div class="col-6 text-left my-0 py-0">
              <span class="lastmessage" style="font-size:9px;">This is the last mess...</span>
              </div>
              <div class="col-6 text-right my-0 py-0">
              <span class="lastmessage" style="font-size:9px;">a second ago</span>
              </div>
            </div>
              <div class="col-12 text-center my-0 py-1" v-if="course.trial">
                <span v-show="showtrial">
                  <span class="lastmessage" style="font-size:10px;">Oops!,free trial is over 😔</span><br>
                   <span class="lastmessage" style="color:black;font-size:10px;">
                       <Rave
       
        :amount="5000"
        :isProduction="false"
        :email="usermailcom"
       :reference="reference"
       :raveKey="raveKey"
       :callback="savetransandredirectuser"
       :close="close"
       currency="NGN"
       country="NG"
   ></Rave>
                    and see what you have missed 😃</span>
                  
                </span>
              </div>
           </div>
           
        </v-row>

        
             </div>
         


     
        
       </div>
        <div class="col-12 text-center" style="position:absolute; bottom:10px;">
                 <v-pagination
           v-model="paginate"
          :length="paginate_lenght"
          style="font-size:10px !important;"
          
        
          :total-visible="3"
            color="#3E8893"
           ></v-pagination>
              </div>
   </div>




   
   <!-- for large -->


   <div style="position:absolute; width:75%; height:100%; left:25%; border-radius:0px; background:#F3FFFC;" class=" my-0 mx-0 py-0 px-0 d-none d-lg-block">
     <v-app style="  font-family: BodyText !important; background:#F3FFFC;">
       <div class="col-12 my-0 mx-0 card px-0 py-1" style="position:absolute; top:0%; height:auto; border-radius:0px; background:#3E8893; z-index:1290;">
           <v-row class="px-3">
               <div class="text-right py-0 my-0 px-0 px-2">
                  <v-btn icon><v-icon class="white-text">mdi-arrow-left</v-icon></v-btn>
               </div>
               <div class=" text-right  py-0 my-0 px-2">
                   <img :src="selectedclassimg" height="45" width="45" style="border-radius:50%;" >
               </div>
               <div class="col-9 py-0 my-0  text-center" @click="showclassmembers()">
              <span class="white-text courseheading ">{{selectedclassname}}</span><br>
               <span class="white-text coursenames  " style="cursor:pointer;" v-if="!user_typing"> 
                  <v-icon class="white-text">mdi-account-group</v-icon> {{classmemberslist}}
                  </span>
                  <span class="white-text coursenames  " v-if="user_typing"> 
                  {{typing_user}} is typing...
                  </span>
               </div>
           </v-row>
       </div>

       <div style="position:absolute; top:0%; height:100%; width:100%; border-radius:0px; overflow-y:scroll;padding-bottom:80px !important;padding-top:80px !important;" class="py-2 px-4" id="container">
           <v-skeleton-loader
                    type="list-item-three-line"
                    v-if="messages.length == 0"
                    class="col-5 offset-7 py-3">

                    </v-skeleton-loader>
                     <v-skeleton-loader
                    type="list-item-three-line"
                      v-if="messages.length == 0"
                     class="col-5 offset-7 py-3">

                    </v-skeleton-loader>
                     <v-skeleton-loader
                    type="list-item-three-line"
                      v-if="messages.length == 0"
                    class="col-5 offset-7 py-3">
            </v-skeleton-loader>
            <v-skeleton-loader
                     type="image"
                      v-if="messages.length == 0"
                    class="col-4 offset-8 py-3">
            </v-skeleton-loader>
             <v-skeleton-loader
                    type="list-item-three-line"
                      v-if="messages.length == 0"
                    class="col-5 py-3">
            </v-skeleton-loader>
               <div class="py-1 col-12 text-center">
                <v-card v-if="showloadmore" @click="showmoremsg" class=" py-1 px-2 d-inline-block " style="background:#4FA091; color:whitesmoke;font-size:11px;border-radius:20px;">Load more <v-icon color="#ffffff">mdi-arrow-up</v-icon></v-card>
            </div>
         <div class="col-12"  v-for="(message, index) in messages" v-bind:key="index">
            <span class="text-center my-0 py-0 d-block" v-for="(timedmsg,index) in msgbydate" :key="index">
                <b v-if="timedmsg.msgid == message.id" @click="showmoremsg" class=" py-2 px-2 d-inline-block badge" style="background:#4FA091; color:whitesmoke;font-size:10px;border-radius:7px;">{{checkDaterealtimed(timedmsg.created_date)}}</b>
            </span>
         <v-row v-if="message.user_id != user_id && message.type == 'text'">
           <div class="col-5">
             <v-card class="px-3 py-2 convo">
                        <div>
                            <span class="headChatType2 mymessages" v-html="message.content">
                        </span> 
                        </div>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                          <v-icon  v-if="tutorData == undefined && tutorData.user_id != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="tutorData != undefined"  color="#3E8893" >mdi-shield-account-outline</v-icon> {{message.username}}
                          </div>        
                        </div>
                      </v-card>
           </div>
           <div class="col-7">

           </div>
         </v-row>

         <v-row v-if="message.user_id == user_id && message.type == 'text'">
           <div class="col-7">

           </div>
           <div class="col-5">
             <v-card class="px-3 py-2 convoyou" style="background:#ACF8E9;">
                        <div>
                            <span class="headChatType2 mymessages" v-html="message.content">
                           </span> 
                        </div>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                           <span v-if="message.sentmessageid == undefined">
                              <v-icon  v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon>
                           </span>
                            <span v-if="message.sentmessageid != undefined">
                              <span v-if="message.msgsending == false">
                           <v-icon  v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon>
                              </span>
                              <span v-if="message.msgsending == true">
                           <v-icon  color="#3E8893" >mdi-progress-clock</v-icon>
                              </span>
                           </span>    
                           You
                          </div>        
                        </div>
                      </v-card>
           </div>
           
         </v-row>

         <v-row v-if="message.user_id != user_id && message.type == 'image' && message.user_id != 0">
           <div class="col-5 d-flex justify-start">
             <v-card class="px-3 py-2 convo" style="height:380px; width:350px;">
                        
                        <v-img height="93%" width="100%" :src="'/imgs/class/' + message.content" @click="showfullimagemsg(message.content)">

                        </v-img>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                          <v-icon   v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> {{message.username}}
                          </div>        
                        </div>
                      </v-card>
           </div>
           <div class="col-7">

           </div>
         </v-row>


      <v-row v-if="message.user_id == user_id && message.type == 'image'">
         <div class="col-7">

           </div>
           <div class="col-5  d-flex justify-end">
             <v-card class="px-3 py-2 convoyou " style="height:380px; width:350px; background:#ACF8E9;">
                        
                        <v-img height="93%" width="100%" :src="'/imgs/class/' + message.content" @click="showfullimagemsg(message.content)">

                        </v-img>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                         <v-icon   v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon   v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> You
                          </div>        
                        </div>
                      </v-card>
           </div>
          
         </v-row>

         <!-- THIS IS AN IMAGE PRELOADER -->

         <v-row v-if="message.type == 'image' && message.preloader == true">
         <div class="col-7">

           </div>
           <div class="col-5  d-flex justify-end">
             <v-card class="px-3 py-2 convoyou " style="height:380px; width:350px; background:#ACF8E9;">
              
                        
                        <v-img height="89%" width="100%" :src="message.content" @click="showfullimage(message.content)">

                        </v-img>
               

                        <div class="headChatType text-right my-0 py-0 col-12 ">
                          <div class="row my-0" v-if="!showuploadprogress">
                         <div class="col-6 my-0 py-1 text-left ">
                            <v-btn icon @click="removemessage(message.loaderid)"><v-icon color="#3E8893">mdi-close</v-icon></v-btn>
                          </div>
                          <div class="col-6 text-right my-0 py-1">
                                <v-btn icon @click="sendmessagelg('image',message.loaderid)"><v-icon color="#3E8893">mdi-send</v-icon></v-btn>
                          </div>   
                          </div>
                          <v-progress-linear color="#3E8893" height="10px"  class="my-1 mt-2" striped :value="progressvalue"  v-if="showuploadprogress" rounded>

                          </v-progress-linear>
                              
                        </div>
                        
                      </v-card>
           </div>
          
         </v-row>

          <v-row  v-if="message.user_id == user_id && message.type == 'code'">
         <div class="col-8">

           </div>
           <div class="col-4">
             <v-card class="px-3 py-2 convoyou " style="height:auto; width:100%;   background:#ACF8E9;" @click="showcodelg(message.id)">
                        
                      <div class="row my-0 py-0">
              <div class="col-12  my-0 py-0 pb-1" style="border-bottom:1px solid #c4c4c4;">
                     <v-avatar color="#3E8893" class="mr-2">
                      <v-icon dark>mdi-xml</v-icon>
                     </v-avatar>
                      <span class="editorhead">CitonHub-<b>{{message.code_type}}</b></span>
              </div>
             
             
               </div>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                          <v-icon   v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon   v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> You
                          </div>        
                        </div>
                      </v-card>
           </div>
          
         </v-row>

          <v-row  v-if="message.user_id == user_id && message.type == 'audio'"> 
         <div class="col-8">

           </div>
           <div class="col-4  d-flex justify-end">
             <v-card class="px-3 py-2 convoyou text-center" style="height:auto; width:100%; background:#ACF8E9;">
                        
                     <audio-player :file="'/files/audios/' + message.content" :autoPlay="false"></audio-player>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                          <v-icon   v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon   v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> You
                          </div>        
                        </div>
                      </v-card>
           </div>
          
         </v-row>

          <v-row  v-if="message.user_id != user_id && message.type == 'audio' && message.user_id != 0">
           <div class="col-4 d-flex justify-start">
             <v-card class="px-3 py-2 convo text-center" style="height:auto; width:100%;">
                        
                        <audio-player :file="'/files/audios/' + message.content" :autoPlay="false"></audio-player>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                         <v-icon  v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> {{message.username}}
                          </div>        
                        </div>
                      </v-card>
           </div>
           <div class="col-8">

           </div>
         </v-row>

           <v-row  v-if="message.type == 'audio' && message.preloader == true">
              <div class="col-8">

           </div>
           <div class="col-4 d-flex justify-start">
             <v-card class="px-3 py-2 convo text-center" style="height:auto; width:100%;  background:#ACF8E9;">
                        
                        <audio-player :file="message.content" :autoPlay="false"></audio-player>

                        <div class="headChatType text-right my-0 py-0 col-12 ">
                          <div class="row my-0" v-if="!showuploadprogress">
                         <div class="col-6 my-0 py-1 text-left ">
                            <v-btn icon @click="removemessage(message.loaderid)"><v-icon color="#3E8893">mdi-close</v-icon></v-btn>
                          </div>
                          <div class="col-6 text-right my-0 py-1">
                                <v-btn icon @click="sendmessagelg('audio',message.loaderid)"><v-icon color="#3E8893">mdi-send</v-icon></v-btn>
                         
                          </div>   
                          </div>
                          <v-progress-linear color="#3E8893" height="15px"  class="my-1 mt-3" striped :value="progressvalue"  v-if="showuploadprogress" rounded>

                          </v-progress-linear>
                              
                        </div>
                      </v-card>
           </div>
          
         </v-row>


          <v-row v-if="message.user_id != user_id && message.type == 'code'">
           <div class="col-4">
             <v-card class="px-3 py-2 convo" style="height:auto; width:100%;" @click="showcodelg(message.id)">
               <div class="row my-0 py-0">
              <div class="col-12  my-0 py-0 pb-1" style="border-bottom:1px solid #c4c4c4;">
                     <v-avatar color="#3E8893" class="mr-2">
                      <v-icon dark>mdi-xml</v-icon>
                     </v-avatar>
                      <span class="editorhead">CitonHub-<b>{{message.code_type}}</b></span>
              </div>

              
             
               </div>
                        
                    

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                          <v-icon  v-if="message.tutoruserid != message.user_id" color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> {{message.username}}
                          </div>        
                        </div>
                      </v-card>
           </div>
           <div class="col-8">

           </div>
         </v-row>



         <v-row v-if="message.user_id != user_id && message.type == 'video' && message.user_id != 0">
           <div class="col-5 d-flex justify-start">
             <v-card class="px-3 py-2 convo" style="height:auto; width:100%;">
                        
                     
          <video width="100%" height="300" controls>
  <source :src="'/files/videos/'+ message.content" type="video/mp4">
Your browser does not support the video tag.
</video>
        
         

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                           <v-icon  v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon   v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> {{message.username}}
                          </div>        
                        </div>
                      </v-card>
           </div>
           <div class="col-7">

           </div>
         </v-row>
 


         <!-- THIS IS AN VIDEO PRELOADER -->
          <v-row v-if=" message.type == 'video' && message.preloader == true">
             <div class="col-7">

           </div>
           <div class="col-5 d-flex justify-start">
             <v-card class="px-3 py-2 convo" style="height:auto; width:100%; background:#ACF8E9;">
                        
                     
         <video width="100%" height="300" controls>
  <source :src="message.content" type="video/mp4">
Your browser does not support the video tag.
</video>
        
         

                       <div class="headChatType text-right my-0 py-0 col-12 ">
                          <div class="row my-0" v-if="!showuploadprogress">
                         <div class="col-6 my-0 py-1 text-left ">
                            <v-btn icon @click="removemessage(message.loaderid)"><v-icon color="#3E8893">mdi-close</v-icon></v-btn>
                          </div>
                          <div class="col-6 text-right my-0 py-1">
                                <v-btn icon @click="sendmessagelg('video',message.loaderid)"><v-icon color="#3E8893">mdi-send</v-icon></v-btn>
                         
                          </div>   
                          </div>
                          <v-progress-linear color="#3E8893" height="15px"  class="my-1 mt-3" striped :value="progressvalue"  v-if="showuploadprogress" rounded>

                          </v-progress-linear>
                              
                        </div>

                      </v-card>
           </div>
          
         </v-row>


          <v-row v-if="message.user_id == user_id && message.type == 'video'">
             <div class="col-7">

           </div>
           <div class="col-5 d-flex justify-start">
             <v-card class="px-3 py-2 convo" style="height:auto; width:100%; background:#ACF8E9;">
                        
                     
        <video width="100%" height="300" controls>
  <source :src="'/files/videos/'+ message.content" type="video/mp4">
Your browser does not support the video tag.
</video>
        
         

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                           <v-icon  v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> you
                          </div>        
                        </div>
                      </v-card>
           </div>
          
         </v-row>

         <v-row v-if="message.user_id == user_id && message.type == 'document'">
         <div class="col-7">

           </div>
           <div class="col-5  d-flex justify-end">
             <v-card class="px-3 py-2 convoyou " style="height:auto; width:320px; background:#ACF8E9;"  @click="downloadfile(message.content)">
                        
                      <div class="row my-0 py-0">
              <div class="col-10  my-0 py-0 pb-1" style="border-bottom:1px solid #c4c4c4;">
                     <v-avatar color="#3E8893" class="mr-2">
                      <v-icon dark>mdi-file-document</v-icon>
                     </v-avatar>
                      <span class="editorhead"><b>{{message.image_name}}</b></span>
              </div>
               <div class="col-2  my-0 py-0 pb-1 text-center" style="border-bottom:1px solid #c4c4c4;">
                     <v-btn icon>
                       <v-icon>mdi-download</v-icon>
                     </v-btn>
              </div>
             
               </div>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                           <v-icon   v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id" color="#3E8893" >mdi-shield-account-outline</v-icon> You
                          </div>        
                        </div>
                      </v-card>
           </div>
          
         </v-row>

           <v-row v-if="message.preloader == true && message.type == 'document'">
         <div class="col-7">

           </div>
           <div class="col-5  d-flex justify-end">
             <v-card class="px-3 py-2 convoyou " style="height:auto; width:320px; background:#ACF8E9;" >
                        
                      <div class="row my-0 py-0">
              <div class="col-12  my-0 py-0 pb-1" style="border-bottom:1px solid #c4c4c4;">
                     <v-avatar color="#3E8893" class="mr-2">
                      <v-icon dark>mdi-file-document</v-icon>
                     </v-avatar>
                      <span class="editorhead"><b>{{message.content}}</b></span>
              </div>
              
             
               </div>

                       <div class="headChatType text-right my-0 py-0 col-12 ">
                          <div class="row my-0" v-if="!showuploadprogress">
                         <div class="col-6 my-0 py-1 text-left ">
                            <v-btn icon @click="removemessage(message.loaderid)"><v-icon color="#3E8893">mdi-close</v-icon></v-btn>
                          </div>
                          <div class="col-6 text-right my-0 py-1">
                                <v-btn icon @click="sendmessagelg('document',message.loaderid)"><v-icon color="#3E8893">mdi-send</v-icon></v-btn>
                         
                          </div>   
                          </div>
                          <v-progress-linear color="#3E8893" height="15px"  class="my-1 mt-3" striped :value="progressvalue"  v-if="showuploadprogress" rounded>

                          </v-progress-linear>
                              
                        </div>
                      </v-card>
           </div>
          
         </v-row>

          <v-row v-if="message.user_id != user_id && message.type == 'document' && message.user_id != 0">
         
           <div class="col-5">
             <v-card class="px-3 py-2 convoyou " style="height:auto; width:320px;"  @click="downloadfile(message.content)">
                        
                      <div class="row my-0 py-0">
              <div class="col-12  my-0 py-0 pb-1" style="border-bottom:1px solid #c4c4c4;">
                     <v-avatar color="#3E8893" class="mr-2">
                      <v-icon dark>mdi-file-document</v-icon>
                     </v-avatar>
                      <span class="editorhead"><b>{{message.image_name}}</b></span>
              </div>
              
             
               </div>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                           <v-icon   v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> {{message.username}}
                          </div>        
                        </div>
                      </v-card>
           </div>
           <div class="col-7">

           </div>
          
         </v-row>

          </div>
       </div>

       <span 
       style="position:absolute; z-index:2000000; top:82%; height:auto; width:auto%;right:1%; border-radius:0px; cursor:pointer; background:#3E8893;box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border:1px solid #3E8893; border-radius:50%;" 
       class="px-2 py-2" @click="codeboard ? codeboard = false : codeboard = true" >
        <v-icon class="white-text">
           mdi-xml
        </v-icon>
       </span>

       

  <div :style=" fuulscreencode ? 'position:fixed;top:0%; width:100%; height:100% !important; left:0%; z-index:13456;background: rgba(23,67,88,0.5); overflow-y:auto;' : 'position:absolute;top:6.5%; width:100%; height:100%; left:0%; background: rgba(23,67,88,0.5); z-index:13456456;overflow-y:auto;'"  v-show="codeboard">
      
    <div class="example my-0 py-0 " style="position:absolute; top:10%; width:90%; height:60% !important; left:5%;">
      <v-btn icon @click="codeboard = false"><v-icon color="#ffffff">mdi-close</v-icon></v-btn>
    <code-box  ref="codeboxlg" :messages="messages" :user_id="user_id" :selected_class_id="selected_class_id" :displaycodebox="displaycodebox" :showcode="showcode"></code-box>
  
  </div>
      
  

  
       </div>
 
    
 



           



 
       </v-app>
        <div 
    :style="displayfull ? 'position:fixed;top:0%; width:100%; height:100% !important; left:0%; z-index:1000000; background: rgba(23,67,88,0.5);' : 'position:absolute;top:6.5%; width:100%; height:93% !important; left:0%; z-index:1000000; background: rgba(23,67,88,0.5);' "
                 v-if="displaycodebox" class="d-none d-lg-flex flex-column">
          <v-btn icon @click="displaycodebox = false; shareready = false"><v-icon color="#ffffff">mdi-close</v-icon></v-btn>
          <div style="width:100%; height:100%; overflow-y:scroll; padding-bottom:120px;" class="text-center">
            <div class="card my-0 mx-0 mx-auto text-center py-2 my-auto" style="width:90%; height:auto; border-bottom-left-radius:0px; border-bottom-right-radius:0px; background:#3E8893;" >
               
                <div class="row my-0 py-0 px-2"> 
                  <div class="col-6 py-0 my-0 pt-1 text-left">
                   <h5 style="font-size:14px;color:white;">CitonHub-: CodeBox</h5>
                 </div>
                 <div class="col-6 py-0 my-0 text-right">
                    <v-btn icon @click="displayfull ? displayfull = false : displayfull = true"> <v-icon class="white-text">mdi-arrow-expand-all</v-icon></v-btn>
                 </div>
                </div>
            </div>
           <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
   :srcdoc="code" 
    style="border: 0; width:90%; height:95%; background:white; " class="mx-auto my-0"></iframe>
     <div class="card my-0 mx-0 mx-auto  col-12 py-1 my-auto" style="width:90%; height:auto; border-top-left-radius:0px; border-top-right-radius:0px; background:#3E8893;" >
                <div class="row my-0 py-0"> 
                  <div class="col-6 py-0 my-0 text-left">
                  <i style="font-size:13px;color:white;">Designed by CitonHub</i>
                 </div>
                 <div class="col-6 py-0 my-0 text-right">
                    <v-btn icon v-if="shareready" tag="a" :href="'whatsapp://send?text=' + 'Guys! check out what i built,https://www.citonhub.com/hub/results-id-'+ newcodepage" data-action="share/whatsapp/share"> <v-icon class="white-text">mdi-whatsapp</v-icon></v-btn>
                    <v-btn icon v-if="shareready" tag="a" :href="'https://twitter.com/intent/tweet?text=' + 'Guys!%20check%20out%20what%20I%20built,&url=https://www.citonhub.com/hub/results-id-'+ newcodepage" class="twitter-share-button">  <v-icon class="white-text">mdi-twitter</v-icon></v-btn>

                     <v-btn color="#ffffff" small :loading="loadingsharebtn" v-if="!shareready" @click="sharecodelg"> Share <v-icon style="color:gray;">mdi-share</v-icon></v-btn>
                 </div>
                </div>
                 

            </div>
            </div>
        </div>

       <div style="position:absolute;top:0%; width:100%; height:100% !important; left:0%; z-index:1000000; background: rgba(23,67,88,0.5);"
                 v-show="displayimage">
          <v-btn icon @click="closedisplayimage"><v-icon color="#ffffff">mdi-close</v-icon></v-btn>
          <div style="width:100%; height:100%; overflow-y:scroll;" class="text-center">
            <img height="auto" width="60%" :src="imagetoview"/>
            </div>
        </div>


        
         <div style="position:absolute;top:0%; width:100%; height:100% !important; left:0%; z-index:1000000; background: rgba(23,67,88,0.5);"
                v-if="closememberboard" >
        
          <div style="width:40%; height:70% !important; left:30%; top:3%; overflow-x:hidden;" class="text-center card">
          
          
            
            
           
            <div class="col-12 my-0 py-0" style="overflow-y:scroll;" > 
              <div class="row pt-1 px-1" style="border-bottom:1px solid #c5c5c5;position:sticky;top:0%; background-color:#3E8893 !important; z-index:3;">
                <div class="col-3 text-left my-0 py-0">
                 <v-btn icon @click="closememberboard ? closememberboard = false : closememberboard = true "><v-icon color="#ffffff">mdi-close</v-icon></v-btn>
             </div>
             <div class="col-6 text-center my-0 py-0 pt-3">
                <h6 style="font-size:13px;color:white;">Members ({{classmembers.length}})</h6>
             </div>
             <div class="col-3 my-0 py-0">

             </div>
              </div>
               
              <div v-for="(member,index) in classmembers" :key="index">
                 <v-row class="px-1 py-1" v-if="member.id != user_id" >
           <div class="col-3 text-center my-0 py-0">
           <img :src="'/imgs/profile/' + member.image_name + '.' + member.image_extension" height="40" width="40" style="border-radius:50%;" v-if="member.image_name != null">
              <img src="/imgs/profileface.svg" height="40" width="40" style="border-radius:50%;" v-if="member.image_name == null">
           </div>
           <div class="col-9 text-left my-0 py-0 pb-1" style="border-bottom:1px solid #c5c5c5;">
             <span class="courseheading" style="font-size:11px;">{{member.username}}</span><br>
              <v-icon  v-if="member.type == 1"  color="#3E8893" >mdi-account-circle</v-icon>  <span v-if="member.type == 1"   class="lastmessage" style="font-size:10px;">Student</span>
             <v-icon  v-if="member.type == 2"   color="#3E8893" >mdi-shield-account-outline</v-icon>  <span   v-if="member.type == 2" class="lastmessage" style="font-size:10px;">Tutor</span>
             
           </div>
        </v-row>
         <v-row class="px-1 py-1"  v-if="member.id == user_id" >
           <div class="col-3 text-center my-0 py-0">
           <img :src="'/imgs/profile/' + member.image_name + '.' + member.image_extension"  height="40" width="40" style="border-radius:50%;"  v-if="member.image_name != null">
            <img src="/imgs/profileface.svg" height="40" width="40" style="border-radius:50%;" v-if="member.image_name == null">
           </div>
           <div class="col-9 text-left my-0 py-0 pb-1" style="border-bottom:1px solid #c5c5c5;">
             <span class="courseheading" style="font-size:11px;">You</span><br>
              <v-icon  v-if="member.type == 1"  color="#3E8893" >mdi-account-circle</v-icon>  <span v-if="member.type == 1"   class="lastmessage" style="font-size:10px;">Student</span>
             <v-icon  v-if="member.type == 2"   color="#3E8893" >mdi-shield-account-outline</v-icon>  <span   v-if="member.type == 2" class="lastmessage" style="font-size:10px;">Tutor</span>
            
           </div>
        </v-row>
              </div>
            
              
            
            </div>
             

            </div>
        </div>
        <board-create :user_id="user_id" :messages="messages" :selected_class_id="selected_class_id"  :focusfield="focusfield" :code="code" ref="boardcreatelg"  :tutoruserid="tutoruserid"></board-create>
   </div>
   

    <!-- for medium -->

   <v-slide-x-reverse-transition>
   <div style="position:absolute; width:100%; height:100%; left:0%; border-radius:0px; background:#F3FFFC;" class=" my-0 mx-0 py-0 px-0 d-none d-md-block d-lg-none"
    v-if="mainboard" 
   >
     <v-app style="  font-family: BodyText !important; background:#F3FFFC;">
       <div class="col-12 my-0 mx-0 card px-0 py-1" style="position:absolute; top:0%; height:auto; border-radius:0px; background:#3E8893; z-index:1290;">
           <v-row class="px-3">
               <div class="text-right py-0 my-0 px-0 px-2">
                  <v-btn icon @click="showclasslist"><v-icon class="white-text">mdi-arrow-left</v-icon></v-btn>
               </div>
               <div class=" text-right  py-0 my-0 px-2">
                   <img :src="selectedclassimg" height="45" width="45" style="border-radius:50%;" >
               </div>
               <div class="col-9 py-0 my-0  text-center" @click="showclassmembers()">
              <span class="white-text courseheading ">{{selectedclassname}}</span><br>
               <span class="white-text coursenames  " style="cursor:pointer;" v-if="!user_typing"> 
                  <v-icon class="white-text">mdi-account-group</v-icon> {{classmemberslistmd}}
                  </span>
                  <span class="white-text coursenames  " v-if="user_typing"> 
                  {{typing_user}} is typing...
                  </span>
               </div>
           </v-row>
       </div>

       <div style="position:absolute; top:0%; height:100%; width:100%; border-radius:0px; overflow-y:scroll;padding-bottom:100px !important;padding-top:90px !important; " class="py-2 px-2" id="containermd">
          <v-skeleton-loader
                    type="list-item-three-line"
                    v-if="messages.length == 0"
                    class="col-5 offset-5 py-3">

                    </v-skeleton-loader>
                     <v-skeleton-loader
                    type="list-item-three-line"
                      v-if="messages.length == 0"
                     class="col-7 offset-5 py-3">

                    </v-skeleton-loader>
                     <v-skeleton-loader
                    type="list-item-three-line"
                      v-if="messages.length == 0"
                    class="col-7 offset-5 py-3">
            </v-skeleton-loader>
            <v-skeleton-loader
                     type="image"
                      v-if="messages.length == 0"
                    class="col-8 offset-4 py-3">
            </v-skeleton-loader>
             <v-skeleton-loader
                    type="list-item-three-line"
                      v-if="messages.length == 0"
                    class="col-7 py-3">
            </v-skeleton-loader>
               <div class="py-1 col-12 text-center">
                <v-card v-if="showloadmore" @click="showmoremsg" class=" py-1 px-2 d-inline-block " style="background:#4FA091; color:whitesmoke;font-size:11px;border-radius:20px;">Load more <v-icon color="#ffffff">mdi-arrow-up</v-icon></v-card>
            </div>
           <div class="col-12"  v-for="(message, index) in messages" v-bind:key="index">
              <span class="text-center my-0 py-0 d-block" v-for="(timedmsg,index) in msgbydate" :key="index">
                <b v-if="timedmsg.msgid == message.id" @click="showmoremsg" class=" py-2 px-2 d-inline-block badge" style="background:#4FA091; color:whitesmoke;font-size:10px;border-radius:7px;">{{checkDaterealtimed(timedmsg.created_date)}}</b>
            </span>
         <v-row v-if="message.user_id != user_id && message.type == 'text'">
           <div class="col-7" >
             <v-card class="px-3 py-2 convo">
                        <div>
                            <span class="headChatType2 mymessages" v-html="message.content">
                         </span> 
                        </div>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                           <v-icon  v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon   v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> {{message.username}}
                          </div>        
                        </div>
                      </v-card>
           </div>
           <div class="col-5">

           </div>
         </v-row>

         <v-row v-if="message.user_id == user_id && message.type == 'text'">
           <div class="col-5">

           </div>
           <div class="col-7">
             <v-card class="px-3 py-2 convoyou" style="background:#ACF8E9;">
                        <div>
                            <span class="headChatType2 mymessages" v-html="message.content">
                          </span> 
                        </div>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                           <span v-if="message.sentmessageid == undefined">
                              <v-icon  v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon>
                           </span>
                            <span v-if="message.sentmessageid != undefined">
                              <span v-if="message.msgsending == false">
                           <v-icon  v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon>
                              </span>
                              <span v-if="message.msgsending == true">
                           <v-icon  color="#3E8893" >mdi-progress-clock</v-icon>
                              </span>
                           </span> You
                          </div>        
                        </div>
                      </v-card>
           </div>
           
         </v-row>

         <v-row v-if="message.user_id != user_id && message.type == 'image' && message.user_id != 0">
           <div class="col-6 d-flex justify-start">
             <v-card class="px-3 py-2 convo" style="height:350px; width:320px;">
                        
                        <v-img height="93%" width="100%" :src="'/imgs/class/' + message.content" @click="showfullimagemsg(message.content)">

                        </v-img>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                          <v-icon   v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> {{message.username}}
                          </div>        
                        </div>
                      </v-card>
           </div>
           <div class="col-6">

           </div>
         </v-row>

        

         <v-row v-if="message.user_id == user_id && message.type == 'image'">
         <div class="col-6">

           </div>
           <div class="col-6  d-flex justify-end">
             <v-card class="px-3 py-2 convoyou " style="height:350px; width:320px; background:#ACF8E9;">
                        
                        <v-img height="93%" width="100%" :src="'/imgs/class/' + message.content" @click="showfullimagemsg(message.content)">

                        </v-img>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                          <v-icon   v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon   v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> You
                          </div>        
                        </div>
                      </v-card>
           </div>
          
         </v-row>

          <!-- THIS IS AN IMAGE PRELOADER -->

         <v-row v-if="message.type == 'image' && message.preloader == true">
         <div class="col-6">

           </div>
           <div class="col-6  d-flex justify-end">
             <v-card class="px-3 py-2 convoyou " style="height:350px; width:320px; background:#ACF8E9;">
              
                        
                        <v-img height="89%" width="100%" :src="message.content" @click="showfullimage(message.content)">

                        </v-img>
               

                       <div class="headChatType text-right my-0 py-0 col-12 ">
                          <div class="row my-0" v-if="!showuploadprogress">
                         <div class="col-6 my-0 py-1 text-left ">
                            <v-btn icon @click="removemessage(message.loaderid)"><v-icon color="#3E8893">mdi-close</v-icon></v-btn>
                          </div>
                          <div class="col-6 text-right my-0 py-1">
                                <v-btn icon @click="sendmessagemd('image',message.loaderid)"><v-icon color="#3E8893">mdi-send</v-icon></v-btn>
                         
                          </div>   
                          </div>
                          <v-progress-linear color="#3E8893" height="15px"  class="my-1 mt-3" striped :value="progressvalue"  v-if="showuploadprogress" rounded>

                          </v-progress-linear>
                              
                        </div>
                        
                      </v-card>
           </div>
          
         </v-row>


          <v-row v-if="message.user_id == user_id && message.type == 'code'">
         <div class="col-6">

           </div>
           <div class="col-6 d-flex justify-end">
             <v-card class="px-3 py-2 convoyou " style="height:auto; width:100%;  background:#ACF8E9;"  @click="showcodemd(message.id)">
                        
                      <div class="row my-0 py-0">
              <div class="col-12  my-0 py-0 pb-1" style="border-bottom:1px solid #c4c4c4;">
                     <v-avatar color="#3E8893" class="mr-2">
                      <v-icon dark>mdi-xml</v-icon>
                     </v-avatar>
                      <span class="editorhead">CitonHub-<b>{{message.code_type}}</b></span>
              </div>

                
             
               </div>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                           <v-icon  v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id" color="#3E8893" >mdi-shield-account-outline</v-icon> You
                          </div>        
                        </div>
                      </v-card>
           </div>
          
         </v-row>

          <v-row v-if="message.user_id == user_id && message.type == 'audio'">
         <div class="col-5">

           </div>
           <div class="col-7  d-flex justify-end">
             <v-card class="px-3 py-2 convoyou text-center" style="height:auto; width:320px; background:#ACF8E9;">
                        
                      <audio-player :file="'/files/audios/' + message.content" :autoPlay="false"></audio-player>
                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                          <v-icon   v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> You
                          </div>        
                        </div>
                      </v-card>
           </div>
          
         </v-row>

          <v-row v-if="message.user_id != user_id && message.type == 'audio' && message.user_id != 0">
           <div class="col-7 d-flex justify-start">
             <v-card class="px-3 py-2 convo text-center" style="height:auto; width:320px;">
                        
                         <audio-player :file="'/files/audios/' + message.content" :autoPlay="false"></audio-player>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                           <v-icon   v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon   v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> {{message.username}}
                          </div>        
                        </div>
                      </v-card>
           </div>
           <div class="col-5">

           </div>
         </v-row>

          <v-row v-if="message.type == 'audio' && message.preloader == true">
            <div class="col-5">

           </div>
           <div class="col-7 d-flex justify-start">
             <v-card class="px-3 py-2 convo text-center" style="height:auto; width:320px;  background:#ACF8E9;">
                        
                         <audio-player :file="message.content" :autoPlay="false"></audio-player>

                        <div class="headChatType text-right my-0 py-0 col-12 ">
                          <div class="row my-0" v-if="!showuploadprogress">
                         <div class="col-6 my-0 py-1 text-left ">
                            <v-btn icon @click="removemessage(message.loaderid)"><v-icon color="#3E8893">mdi-close</v-icon></v-btn>
                          </div>
                          <div class="col-6 text-right my-0 py-1">
                                <v-btn icon @click="sendmessagemd('audio',message.loaderid)"><v-icon color="#3E8893">mdi-send</v-icon></v-btn>
                         
                          </div>   
                          </div>
                          <v-progress-linear color="#3E8893" height="15px"  class="my-1 mt-3" striped :value="progressvalue"  v-if="showuploadprogress" rounded>

                          </v-progress-linear>
                              
                        </div>
                      </v-card>
           </div>
           
         </v-row>


          <v-row v-if="message.user_id != user_id && message.type == 'code'">
           <div class="col-6 d-flex justify-start">
             <v-card class="px-3 py-2 convo" style="height:auto; width:100%; " @click="showcodemd(message.id)">
               <div class="row my-0 py-0">
              <div class="col-12  my-0 py-0 pb-1" style="border-bottom:1px solid #c4c4c4;">
                     <v-avatar color="#3E8893" class="mr-2">
                      <v-icon dark>mdi-xml</v-icon>
                     </v-avatar>
                      <span class="editorhead">CitonHub-<b>{{message.code_type}}</b></span>
              </div>
             
             
               </div>
                        
                    

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                          <v-icon   v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> {{message.username}}
                          </div>        
                        </div>
                      </v-card>
           </div>
           <div class="col-6">

           </div>
         </v-row>

         <v-row v-if="message.user_id != user_id && message.type == 'video' && message.user_id != 0">
           <div class="col-6 d-flex justify-start">
             <v-card class="px-3 py-2 convo" style="height:auto; width:100%;">
                        
                     
         <video width="100%" height="250" controls>
  <source :src="'/files/videos/'+ message.content" type="video/mp4">
Your browser does not support the video tag.
</video>
        
         

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                          <v-icon  v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id" color="#3E8893" >mdi-shield-account-outline</v-icon> Sola
                          </div>        
                        </div>
                      </v-card>
           </div>
           <div class="col-6">

           </div>
         </v-row>

           <!-- THIS IS AN VIDEO PRELOADER -->
          <v-row v-if=" message.type == 'video' && message.preloader == true">
             <div class="col-6">

           </div>
           <div class="col-6 d-flex justify-start">
             <v-card class="px-3 py-2 convo" style="height:auto; width:100%; background:#ACF8E9;">
                        
                     
          <video width="100%" height="250" controls>
  <source :src="message.content" type="video/mp4">
Your browser does not support the video tag.
</video>
        
         

                       <div class="headChatType text-right my-0 py-0 col-12 ">
                          <div class="row my-0" v-if="!showuploadprogress">
                         <div class="col-6 my-0 py-1 text-left ">
                            <v-btn icon @click="removemessage(message.loaderid)"><v-icon color="#3E8893">mdi-close</v-icon></v-btn>
                          </div>
                          <div class="col-6 text-right my-0 py-1">
                                <v-btn icon @click="sendmessagemd('video',message.loaderid)"><v-icon color="#3E8893">mdi-send</v-icon></v-btn>
                         
                          </div>   
                          </div>
                          <v-progress-linear color="#3E8893" height="15px"  class="my-1 mt-3" striped :value="progressvalue"  v-if="showuploadprogress" rounded>

                          </v-progress-linear>
                              
                        </div>
                        
                      </v-card>
           </div>
          
         </v-row>

           <v-row v-if="message.user_id == user_id && message.type == 'video'">
               <div class="col-6">

           </div>
           <div class="col-6 d-flex justify-start">
             <v-card class="px-3 py-2 convo" style="height:auto; width:100%;  background:#ACF8E9;">
                        
                     
       <video width="100%" height="250" controls>
  <source :src="'/files/videos/'+ message.content" type="video/mp4">
Your browser does not support the video tag.
</video>
        
         

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                           <v-icon   v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> You
                          </div>        
                        </div>
                      </v-card>
           </div>
         
         </v-row>

         <v-row v-if="message.user_id == user_id && message.type == 'document'">
         <div class="col-5">

           </div>
           <div class="col-7  d-flex justify-end">
             <v-card class="px-3 py-2 convoyou " style="height:auto; width:320px; background:#ACF8E9;"  @click="downloadfile(message.content)">
                        
                      <div class="row my-0 py-0">
              <div class="col-10  my-0 py-0 pb-1" style="border-bottom:1px solid #c4c4c4;">
                     <v-avatar color="#3E8893" class="mr-2">
                      <v-icon dark>mdi-file-document</v-icon>
                     </v-avatar>
                      <span class="editorhead"><b>{{ message.image_name }}</b></span>
              </div>
              
             
               </div>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                           <v-icon  v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon   v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> You
                          </div>        
                        </div>
                      </v-card>
           </div>
          
         </v-row>


          <v-row v-if="message.preloader == true && message.type == 'document'">
         <div class="col-5">

           </div>
           <div class="col-7  d-flex justify-end">
             <v-card class="px-3 py-2 convoyou " style="height:auto; width:320px; background:#ACF8E9;" >
                        
                      <div class="row my-0 py-0">
              <div class="col-12  my-0 py-0 pb-1" style="border-bottom:1px solid #c4c4c4;">
                     <v-avatar color="#3E8893" class="mr-2">
                      <v-icon dark>mdi-file-document</v-icon>
                     </v-avatar>
                      <span class="editorhead"><b>{{ message.content }}</b></span>
              </div>
              
             
               </div>

                       <div class="headChatType text-right my-0 py-0 col-12 ">
                          <div class="row my-0" v-if="!showuploadprogress">
                         <div class="col-6 my-0 py-1 text-left ">
                            <v-btn icon @click="removemessage(message.loaderid)"><v-icon color="#3E8893">mdi-close</v-icon></v-btn>
                          </div>
                          <div class="col-6 text-right my-0 py-1">
                                <v-btn icon @click="sendmessagemd('document',message.loaderid)"><v-icon color="#3E8893">mdi-send</v-icon></v-btn>
                         
                          </div>   
                          </div>
                          <v-progress-linear color="#3E8893" height="15px"  class="my-1 mt-3" striped :value="progressvalue"  v-if="showuploadprogress" rounded>

                          </v-progress-linear>
                              
                        </div>
                      </v-card>
           </div>
          
         </v-row>

          <v-row v-if="message.user_id != user_id && message.type == 'document' && message.user_id != 0">
         
           <div class="col-7  ">
             <v-card class="px-3 py-2 convoyou " style="height:auto; width:320px;"  @click="downloadfile(message.content)" >
                        
                      <div class="row my-0 py-0">
              <div class="col-12  my-0 py-0 pb-1" style="border-bottom:1px solid #c4c4c4;">
                     <v-avatar color="#3E8893" class="mr-2">
                      <v-icon dark>mdi-file-document</v-icon>
                     </v-avatar>
                      <span class="editorhead"><b>{{ message.image_name }}</b></span>
              </div>
                
             
               </div>

                        <div class="headChatType text-right pt-0 row my-0 py-0">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                          <v-icon  v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> {{message.username}}
                          </div>        
                        </div>
                      </v-card>
           </div>
           <div class="col-5">

           </div>
          
         </v-row>
           </div>

       </div>

       <span 
       style="position:absolute; z-index:10000; top:85%; height:auto; width:auto%;right:1%; border-radius:0px; cursor:pointer; background:#3E8893;box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border:1px solid #3E8893; border-radius:50%;" 
       class="px-2 py-2" @click="codeboard ? codeboard = false : codeboard = true" >
        <v-icon class="white-text">
           mdi-xml
        </v-icon>
       </span>

     

  <div 
  
  :style=" fuulscreencode ? 'position:fixed;top:0%; width:100%; height:100% !important; left:0%;z-index:13456;' : 'position:fixed;top:0%; width:100%; height:100% !important; left:0%;'"  v-show="codeboard">
      
    <div class="example my-0 py-2 card" style="border-radius:0px; background: rgba(23,67,88,0.5);">
     <div class="ml-2">
        <v-btn icon @click="codeboard ? codeboard = false : codeboard = true" ><v-icon class="white-text">mdi-close</v-icon></v-btn>
     </div>
    <code-box ref="codeboxmd" :messages="messages" :user_id="user_id" :selected_class_id="selected_class_id" :displaycodebox="displaycodebox" :showcode="showcode"></code-box>
  
  </div>
      
  

  
       </div>
   
        



           



    
     </v-app>
      <div style="position:absolute;top:0%; width:100%; height:100% !important; left:0%; z-index:1000000; background: rgba(23,67,88,0.5);"
                 v-if="displaycodebox" class="d-none d-lg-none d-md-flex flex-column">
          <v-btn icon  @click="displaycodebox = false; shareready = false"><v-icon color="#ffffff">mdi-close</v-icon></v-btn>
          <div style="width:100%; height:100%; overflow-y:scroll;" class="text-center">
            <div class="card my-0 mx-0 mx-auto text-center py-2 my-auto" style="width:90%; height:auto; border-bottom-left-radius:0px; border-bottom-right-radius:0px; background:#3E8893;" >
                 <h5 style="font-size:14px;color:white;">CitonHub-: CodeBox</h5>
            </div>
           <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
   :srcdoc="code" 
    style="border: 0; width:90%; height:80%; background:white; " class="mx-auto my-0"></iframe>
     <div class="card my-0 mx-0 mx-auto  col-12 py-1 my-auto" style="width:90%; height:auto; border-top-left-radius:0px; border-top-right-radius:0px; background:#3E8893;" >
                <div class="row my-0 py-0"> 
                  <div class="col-6 py-0 my-0 text-left">
                  <i style="font-size:13px;color:white;">Designed by CitonHub</i>
                 </div>
                 <div class="col-6 py-0 my-0 text-right">
                       <v-btn icon v-if="shareready" tag="a" :href="'whatsapp://send?text=' + 'Guys! check out what i built,https://www.citonhub.com/hub/results-id-'+ newcodepage" data-action="share/whatsapp/share"> <v-icon class="white-text">mdi-whatsapp</v-icon></v-btn>
                    <v-btn icon v-if="shareready" tag="a" :href="'https://twitter.com/intent/tweet?text=' + 'Guys!%20check%20out%20what%20I%20built,&url=https://www.citonhub.com/hub/results-id-'+ newcodepage" class="twitter-share-button">  <v-icon class="white-text">mdi-twitter</v-icon></v-btn>

                     <v-btn color="#ffffff" :loading="loadingsharebtn" small v-if="!shareready" @click="sharecodemd"> Share <v-icon style="color:gray;">mdi-share</v-icon></v-btn>
                 </div>
                </div>
                 

            </div>
            </div>
        </div>




      <div style="position:absolute;top:0%; width:100%; height:100% !important; left:0%; z-index:1000000; background: rgba(23,67,88,0.5);"
                 v-show="displayimage" >
          <v-btn icon @click="closedisplayimage"><v-icon color="#ffffff">mdi-close</v-icon></v-btn>
          <div style="width:100%; height:100%; overflow-y:scroll;" class="text-center">
            <img height="auto" width="60%" :src="imagetoview"/>
            </div>
        </div>


        
         <div style="position:absolute;top:0%; width:100%; height:100% !important; left:0%; z-index:1000000; background: rgba(23,67,88,0.5);"
                v-if="closememberboard" >
        
          <div style="width:60%; height:60% !important; left:20%; top:3%; overflow-x:hidden;" class="text-center card">
          
          
            
            
           
            <div class="col-12 my-0 py-0" style="overflow-y:scroll;" > 
              <div class="row pt-1 px-1" style="border-bottom:1px solid #c5c5c5;position:sticky;top:0%; background-color:#3E8893 !important; z-index:3;">
                <div class="col-3 text-left my-0 py-0">
                 <v-btn icon @click="closememberboard ? closememberboard = false : closememberboard = true "><v-icon color="#ffffff">mdi-close</v-icon></v-btn>
             </div>
             <div class="col-6 text-center my-0 py-0 pt-3">
                <h6 style="font-size:13px;color:white;">Members ({{classmembers.length}})</h6>
             </div>
             <div class="col-3 my-0 py-0">

             </div>
              </div>
               
              <div v-for="(member,index) in classmembers" :key="index">
                 <v-row class="px-1 py-1" v-if="member.id != user_id" >
           <div class="col-3 text-center my-0 py-0">
           <img :src="'/imgs/profile/' + member.image_name + '.' + member.image_extension" height="40" width="40" style="border-radius:50%;" v-if="member.image_name != null">
              <img src="/imgs/profileface.svg" height="40" width="40" style="border-radius:50%;" v-if="member.image_name == null">
           </div>
           <div class="col-9 text-left my-0 py-0 pb-1" style="border-bottom:1px solid #c5c5c5;">
             <span class="courseheading" style="font-size:11px;">{{member.username}}</span><br>
              <v-icon  v-if="member.type == 1"  color="#3E8893" >mdi-account-circle</v-icon>  <span v-if="member.type == 1"   class="lastmessage" style="font-size:10px;">Student</span>
             <v-icon  v-if="member.type == 2"   color="#3E8893" >mdi-shield-account-outline</v-icon>  <span   v-if="member.type == 2" class="lastmessage" style="font-size:10px;">Tutor</span>
             
           </div>
        </v-row>
         <v-row class="px-1 py-1"  v-if="member.id == user_id" >
           <div class="col-3 text-center my-0 py-0">
           <img :src="'/imgs/profile/' + member.image_name + '.' + member.image_extension"  height="40" width="40" style="border-radius:50%;"  v-if="member.image_name != null">
            <img src="/imgs/profileface.svg" height="40" width="40" style="border-radius:50%;" v-if="member.image_name == null">
           </div>
           <div class="col-9 text-left my-0 py-0 pb-1" style="border-bottom:1px solid #c5c5c5;">
             <span class="courseheading" style="font-size:11px;">You</span><br>
              <v-icon  v-if="member.type == 1"  color="#3E8893" >mdi-account-circle</v-icon>  <span v-if="member.type == 1"   class="lastmessage" style="font-size:10px;">Student</span>
             <v-icon  v-if="member.type == 2"   color="#3E8893" >mdi-shield-account-outline</v-icon>  <span   v-if="member.type == 2" class="lastmessage" style="font-size:10px;">Tutor</span>
            
           </div>
        </v-row>
              </div>
            
              
            
            </div>
             

            </div>
        </div>
        
       <board-create :user_id="user_id" :messages="messages" :focusfield="focusfield" :selected_class_id="selected_class_id" :code="code" ref="boardcreatemd"  :tutoruserid="tutoruserid"></board-create>
   </div>
   </v-slide-x-reverse-transition>





    <!-- for small -->

   <v-slide-x-reverse-transition>
   <div style="position:fixed; width:100%; height:100%; left:0%; border-radius:0px; background:#F3FFFC;" class=" my-0 mx-0 py-0 px-0 d-md-none d-block"
    v-if="mainboard" 
   >
     <v-app style="  font-family: BodyText !important; background:#F3FFFC;">
       <div class="col-12 my-0 mx-0 card px-0 py-0" style="position:absolute; top:0%; height:auto; border-radius:0px; background:#3E8893; z-index:1290;">
           <v-row class="">
               <div class="text-left my-0 pt-2 col-4">
                  <v-btn icon  @click="showclasslist"><v-icon class="white-text">mdi-arrow-left</v-icon></v-btn>
                   <img :src="selectedclassimg" height="34" width="34" style="border-radius:50%;" >
               </div>
          
               <div class="col-8 my-0 py-0 pt-1 text-left" @click="showclassmembers()">
              <span class="white-text courseheading " style="font-size:10px;">{{selectedclassnamesm}}</span><br>
              
                   <span class="white-text coursenames  " style="cursor:pointer; font-size:10px;" v-if="!user_typing"> 
                  <v-icon class="white-text" style="font-size:20px;"> mdi-account-group</v-icon> {{classmemberslistsm}}
                  </span>
                  <span class="white-text coursenames  "  style="cursor:pointer; font-size:10px;" v-if="user_typing"> 
                  {{typing_user}} is typing...
                  </span>
               </div>
           </v-row>
       </div>

       <div style="position:absolute; top:0%; height:100%; width:100%; border-radius:0px; overflow-y:scroll; padding-bottom:100px !important; padding-top:90px !important;" class="py-2 px-2" id="containersm">
           <v-skeleton-loader
                    type="list-item-three-line"
                    v-if="messages.length == 0"
                    class="col-11 offset-1 py-1">

                    </v-skeleton-loader>
                   
            <v-skeleton-loader
                     type="image"
                      v-if="messages.length == 0"
                      height="200px"
                    class="col-8 offset-4 py-1">
            </v-skeleton-loader>
             <v-skeleton-loader
                    type="list-item-three-line"
                      v-if="messages.length == 0"
                    class="col-11 py-1">
            </v-skeleton-loader>
            <div class="py-1 col-12 text-center">
                <v-card v-if="showloadmore" @click="showmoremsg" class=" py-1 px-2 d-inline-block " style="background:#4FA091; color:whitesmoke;font-size:11px;border-radius:20px;">Load more <v-icon color="#ffffff">mdi-arrow-up</v-icon></v-card>
            </div>
           <div class="col-12"  v-for="(message, index) in messages" v-bind:key="index">
              <span class="text-center my-0 py-0 d-block" v-for="(timedmsg,index) in msgbydate" :key="index">
                <b v-if="timedmsg.msgid == message.id" @click="showmoremsg" class=" py-2 px-2 d-inline-block badge" style="background:#4FA091; color:whitesmoke;font-size:9px;border-radius:7px;">{{checkDaterealtimed(timedmsg.created_date)}}</b>
            </span>
         <v-row v-if="message.user_id != user_id && message.type == 'text'">
           <div class="col-10">
             <v-card class="px-2 py-1 convo">
                       
                            <span class="headChatType2 mymessages" style="font-size:10px;" v-html="message.content">
                        </span> 
                      

                        <div class="headChatType text-right pt-0 row my-0 py-0 " >
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="" style="font-size:10px;">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                           <v-icon   v-if="message.tutoruserid != message.user_id"   color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon   v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon><span style="font-size:10px;">{{message.username}}</span> 
                          </div>        
                        </div>
                      </v-card>
           </div>
           <div class="col-2">

           </div>
         </v-row>

         <v-row v-if="message.user_id == user_id && message.type == 'text'">
           <div class="col-2">

           </div>
           <div class="col-10">
             <v-card class="px-2 py-1 convoyou" style="background:#ACF8E9;">
                        <div>
                            <span class="headChatType2 mymessages"  style="font-size:10px;" v-html="message.content">
                        </span> 
                        </div>

                        <div class="headChatType text-right pt-0 row my-0 py-0" >
                          <div class="col-8 text-left my-0 py-0 pt-1">
                               <span class=""  style="font-size:10px;">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-4 text-right my-0 py-0 pt-1"  style="font-size:10px;">
                               
                        
                           <span v-if="message.sentmessageid == undefined">
                              <v-icon  v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon>
                           </span>
                            <span v-if="message.sentmessageid != undefined">
                              <span v-if="message.msgsending == false">
                           <v-icon  v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon>
                              </span>
                              <span v-if="message.msgsending == true">
                           <v-icon  color="#3E8893" >mdi-progress-clock</v-icon>
                              </span>
                           </span><span style="font-size:10px;">You</span> 
                          </div>        
                        </div>
                      </v-card>
           </div>
           
         </v-row>

         <v-row v-if="message.user_id != user_id && message.type == 'image' && message.user_id != 0">
           <div class="col-10 d-flex justify-start">
             <v-card class="px-2 py-1 convo" style="height:210px; width:100%;">
                        
                        <v-img height="87%" width="100%" :src="'/imgs/class/' + message.content" @click="showfullimagemsg(message.content)">

                        </v-img>

                        <div class="headChatType text-right pt-0 row my-0 py-0"  style="font-size:10px;">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class=""  style="font-size:10px;">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1 "  style="font-size:10px;">
                               
                           <v-icon   v-if="message.tutoruserid != message.user_id"   color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon   v-if="message.tutoruserid == message.user_id" color="#3E8893" >mdi-shield-account-outline</v-icon> <span style="font-size:10px;">{{message.username}}</span> 
                          </div>        
                        </div>
                      </v-card>
           </div>
           <div class="col-2">

           </div>
          
         </v-row>

        
       
      <v-row  v-if="message.user_id == user_id && message.type == 'image'">
         <div class="col-2">

           </div>
           <div class="col-10  d-flex justify-end">
             <v-card class="px-2 py-1 convoyou "  style="height:210px; width:100%;background:#ACF8E9;">
                        
                        <v-img height="87%" width="100%" :src="'/imgs/class/' + message.content" @click="showfullimagemsg(message.content)">

                        </v-img>

                        <div class="headChatType text-right pt-0 row my-0 py-0"  style="font-size:10px;">
                          <div class="col-8 text-left my-0 py-0 pt-1">
                               <span class="" style="font-size:10px;">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-4 text-right my-0 py-0 pt-1" style="font-size:10px;">
                               
                           <v-icon   v-if="message.tutoruserid != message.user_id"   color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id" color="#3E8893" >mdi-shield-account-outline</v-icon> <span style="font-size:10px;">You</span> 
                          </div>        
                        </div>
                      </v-card>
           </div>
          
         </v-row>

           <v-row   v-if="message.type == 'image' && message.preloader == true">
         <div class="col-2">

           </div>
           <div class="col-10  d-flex justify-end">
             <v-card class="px-2 py-1 convoyou "  style="height:210px; width:100%;background:#ACF8E9;">
                        
                        <v-img height="82%" width="100%" :src="message.content" @click="showfullimage(message.content)">

                        </v-img>

                       <div class="headChatType text-right my-0 py-0 col-12 ">
                          <div class="row my-0" v-if="!showuploadprogress">
                         <div class="col-6 my-0 py-1 text-left ">
                            <v-btn icon @click="removemessage(message.loaderid)"><v-icon color="#3E8893">mdi-close</v-icon></v-btn>
                          </div>
                          <div class="col-6 text-right my-0 py-1">
                                <v-btn icon @click="sendmessage('image',message.loaderid)"><v-icon color="#3E8893">mdi-send</v-icon></v-btn>
                         
                          </div>   
                          </div>
                          <v-progress-linear color="#3E8893" height="10px"  class="my-1 mt-2" striped :value="progressvalue"  v-if="showuploadprogress" rounded>

                          </v-progress-linear>
                              
                        </div>
                      </v-card>
           </div>
          
         </v-row>

          <v-row v-if="message.user_id == user_id && message.type == 'code'">
         <div class="col-1">

           </div>
           <div class="col-11  d-flex justify-end">
             <v-card class="px-3 py-1 convoyou " style="height:auto; width:320px; background:#ACF8E9;"  @click="showcode(message.id)">
                        
                      <div class="row my-0 py-0" style="border-bottom:1px solid #c4c4c4; font-size:10px;">
              <div class="col-12  my-0 py-0 pb-1" >
                     <v-avatar color="#3E8893" class="mr-2">
                      <v-icon dark>mdi-xml</v-icon>
                     </v-avatar>
                      <span class="editorhead" style="font-size:10px;">CitonHub-<b>{{message.code_type}}</b></span>
              </div>
             
               </div>

                        <div class="headChatType text-right pt-0 row my-0 py-0"  style="font-size:10px;">
                          <div class="col-8 text-left my-0 py-0 pt-1">
                               <span class="" style="font-size:10px;">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-4 text-right my-0 py-0 pt-1 " style="font-size:10px;">
                               
                          <v-icon   v-if="message.tutoruserid != message.user_id"   color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon   v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> <span style="font-size:10px;">You</span> 
                          </div>        
                        </div>
                      </v-card>
           </div>
          
         </v-row>

          <v-row v-if="message.user_id == user_id && message.type == 'audio'">
         <div class="col-1">

           </div>
           <div class="col-11  d-flex justify-end">
             <v-card class="px-2 py-1 convoyou text-center" style="height:auto; width:320px; background:#ACF8E9;">
                        
                   
                    <audio-player :file="'/files/audios/' + message.content" :autoPlay="false"></audio-player>

                        <div class="headChatType text-right pt-0 row my-0 py-0" style="font-size:10px;">
                          <div class="col-8 text-left my-0 py-0 pt-1">
                               <span class=""  style="font-size:10px;">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-4 text-right my-0 py-0 pt-1"  style="font-size:10px;">
                               
                          <v-icon  v-if="message.tutoruserid != message.user_id"   color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon>  <span style="font-size:10px;">You</span> 
                          </div>        
                        </div>
                      </v-card>
           </div>
          
         </v-row>
 
         <v-row v-if=" message.type == 'audio' && message.preloader == true">
           <div class="col-1">

           </div>
           <div class="col-11 d-flex justify-start">
             <v-card class="px-1 py-1 convo text-center" style="height:auto; width:320px; background:#ACF8E9;">
                        
                     
                   <audio-player :file="message.content" :autoPlay="false"></audio-player>

                        <div class="headChatType text-right my-0 py-0 col-12 ">
                          <div class="row my-0" v-if="!showuploadprogress">
                         <div class="col-6 my-0 py-1 text-left ">
                            <v-btn icon @click="removemessage(message.loaderid)"><v-icon color="#3E8893">mdi-close</v-icon></v-btn>
                          </div>
                          <div class="col-6 text-right my-0 py-1">
                                <v-btn icon @click="sendmessage('audio',message.loaderid)"><v-icon color="#3E8893">mdi-send</v-icon></v-btn>
                         
                          </div>   
                          </div>
                          <v-progress-linear color="#3E8893" height="10px"  class="my-1 mt-3" striped :value="progressvalue"  v-if="showuploadprogress" rounded>

                          </v-progress-linear>
                              
                        </div>
                      </v-card>
           </div>
           
         </v-row>

          <v-row v-if="message.user_id != user_id && message.type == 'audio'  && message.user_id != 0">
           <div class="col-11 d-flex justify-start">
             <v-card class="px-1 py-1 convo text-center" style="height:auto; width:320px;">
                        
                     
                   <audio-player :file="'/files/audios/' + message.content" :autoPlay="false"></audio-player>

                        <div class="headChatType text-right pt-0 row my-0 py-0" style="font-size:10px;">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class=""  style="font-size:10px;">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1"  style="font-size:10px;">
                               
                          <v-icon  v-if="message.tutoruserid != message.user_id"   color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> <span style="font-size:10px;">{{message.username}}</span> 
                          </div>        
                        </div>
                      </v-card>
           </div>
           <div class="col-1">

           </div>
         </v-row>


          <v-row v-if="message.user_id != user_id && message.type == 'code'">
           <div class="col-11 d-flex justify-start">
             <v-card class="px-3 py-1 convo" style="height:auto; width:100%;" @click="showcode(message.id)">
               <div class="row my-0 py-0">
              <div class="col-12  my-0 py-0 pb-1" style="border-bottom:1px solid #c4c4c4;">
                     <v-avatar color="#3E8893" class="mr-2">
                      <v-icon dark>mdi-xml</v-icon>
                     </v-avatar>
                      <span class="editorhead" style="font-size:10px;">CitonHub-<b>{{ message.code_type }}</b></span>
              </div>
             
               </div>
                        
                    

                        <div class="headChatType text-right pt-0 row my-0 py-0" style="font-size:10px;">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class=""  style="font-size:10px;"> {{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1"  style="font-size:10px;">
                               
                          <v-icon   v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon   v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> <span style="font-size:10px;">{{message.username}}</span> 
                          </div>        
                        </div>
                      </v-card>
           </div>
           <div class="col-1">

           </div>
         </v-row>

         <v-row v-if="message.user_id != user_id && message.type == 'video' && message.user_id != 0">
           <div class="col-12 d-flex justify-start">
             <v-card class="px-2 py-1 convo" style="height:auto; width:100%;">
                        
         <video width="100%" height="170" controls>
  <source :src="'/files/videos/'+ message.content" type="video/mp4">
Your browser does not support the video tag.
</video>
        
         

                        <div class="headChatType text-right pt-0 row my-0 py-0" style="font-size:10px;">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class="">a second ago</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1">
                               
                          <v-icon   v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> <span style="font-size:10px;">{{message.username}}</span> 
                          </div>        
                        </div>
                      </v-card>
           </div>
           
         </v-row>



           <!-- THIS IS AN VIDEO PRELOADER -->
          <v-row v-if=" message.type == 'video' && message.preloader == true">
             <div class="col-2">

             </div>
           <div class="col-10 d-flex justify-start">
             <v-card class="px-2 py-1 convo" style="height:auto; width:100%; background:#ACF8E9;">
                        
                     
         <video width="100%" height="170" controls>
  <source :src=" message.content" type="video/mp4">
Your browser does not support the video tag.
</video>
        
         

                       <div class="headChatType text-right my-0 py-0 col-12 ">
                          <div class="row my-0" v-if="!showuploadprogress">
                         <div class="col-6 my-0 py-1 text-left ">
                            <v-btn icon @click="removemessage(message.loaderid)"><v-icon color="#3E8893">mdi-close</v-icon></v-btn>
                          </div>
                          <div class="col-6 text-right my-0 py-1">
                                <v-btn icon @click="sendmessage('video',message.loaderid)"><v-icon color="#3E8893">mdi-send</v-icon></v-btn>
                         
                          </div>   
                          </div>
                          <v-progress-linear color="#3E8893" height="10px"  class="my-1 mt-3" striped :value="progressvalue"  v-if="showuploadprogress" rounded>

                          </v-progress-linear>
                              
                        </div>
                        
                      </v-card>
           </div>
          
         </v-row>


          <v-row v-if="message.user_id == user_id && message.type == 'video'">
           <div class="col-12 d-flex justify-start">
             <v-card class="px-2 py-1 convo" style="height:auto; width:100%; background:#ACF8E9;">
                        
        <video width="100%" height="170" controls>
  <source :src="'/files/videos/'+ message.content" type="video/mp4">
Your browser does not support the video tag.
</video>
        
         

                        <div class="headChatType text-right pt-0 row my-0 py-0" style="font-size:10px;">
                          <div class="col-8 text-left my-0 py-0 pt-1">
                               <span class="">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-4 text-right my-0 py-0 pt-1">
                               
                            <v-icon  v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon   v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> <span style="font-size:10px;">You</span> 
                          </div>        
                        </div>
                      </v-card>
           </div>
           
         </v-row>

         <v-row v-if="message.user_id == user_id && message.type == 'document'">
         <div class="col-1">

           </div>
           <div class="col-11  d-flex justify-end">
             <v-card class="px-3 py-1 convoyou " style="height:auto; width:320px; background:#ACF8E9;" @click="downloadfile(message.content)" >
                        
                      <div class="row my-0 py-0">
              <div class="col-12  my-0 py-0 pb-1" style="border-bottom:1px solid #c4c4c4;">
                     <v-avatar color="#3E8893" class="mr-2">
                      <v-icon dark>mdi-file-document</v-icon>
                     </v-avatar>
                      <span class="editorhead" style="font-size:10px;"><b>{{message.image_name}}</b></span>
                     
              </div>
              
             
               </div>

                        <div class="headChatType text-right pt-0 row my-0 py-0" style="font-size:10px;">
                          <div class="col-8 text-left my-0 py-0 pt-1">
                               <span class=""  style="font-size:10px;">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-4 text-right my-0 py-0 pt-1"  style="font-size:10px;">
                               
                            <v-icon   v-if="message.tutoruserid != message.user_id"   color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon  v-if="message.tutoruserid == message.user_id"  color="#3E8893" >mdi-shield-account-outline</v-icon> <span style="font-size:10px;">You</span> 
                          </div>        
                        </div>
                      </v-card>
           </div>
          
         </v-row>
            <v-row  v-if=" message.type == 'document' && message.preloader == true">
         <div class="col-1">

           </div>
           <div class="col-11  d-flex justify-end">
             <v-card class="px-3 py-1 convoyou " style="height:auto; width:320px; background:#ACF8E9;"  >
                        
                      <div class="row my-0 py-0">
              <div class="col-12  my-0 py-0 pb-1" style="border-bottom:1px solid #c4c4c4;">
                     <v-avatar color="#3E8893" class="mr-2">
                      <v-icon dark>mdi-file-document</v-icon>
                     </v-avatar>
                      <span class="editorhead" style="font-size:10px;"><b>{{message.content}}</b></span>
                     
              </div>
              
             
               </div>

                        <div class="headChatType text-right my-0 py-0 col-12 ">
                          <div class="row my-0" v-if="!showuploadprogress">
                         <div class="col-6 my-0 py-1 text-left ">
                            <v-btn icon @click="removemessage(message.loaderid)"><v-icon color="#3E8893">mdi-close</v-icon></v-btn>
                          </div>
                          <div class="col-6 text-right my-0 py-1">
                                <v-btn icon @click="sendmessage('document',message.loaderid)"><v-icon color="#3E8893">mdi-send</v-icon></v-btn>
                         
                          </div>   
                          </div>
                          <v-progress-linear color="#3E8893" height="10px"  class="my-1 mt-3" striped :value="progressvalue"  v-if="showuploadprogress" rounded>

                          </v-progress-linear>
                              
                        </div>
                      </v-card>
           </div>
          
         </v-row>
         
         <v-row v-if="message.user_id != user_id && message.type == 'document' && message.user_id != 0">
        
           <div class="col-11  d-flex justify-end">
             <v-card class="px-3 py-1 convoyou " style="height:auto; width:320px;"  @click="downloadfile(message.content)">
                        
                      <div class="row my-0 py-0">
              <div class="col-12  my-0 py-0 pb-1" style="border-bottom:1px solid #c4c4c4;">
                     <v-avatar color="#3E8893" class="mr-2">
                      <v-icon dark>mdi-file-document</v-icon>
                     </v-avatar>
                      <span class="editorhead" style="font-size:10px;"><b>{{message.image_name}}</b></span>
                     
              </div>
              
             
               </div>

                        <div class="headChatType text-right pt-0 row my-0 py-0" style="font-size:10px;">
                          <div class="col-6 text-left my-0 py-0 pt-1">
                               <span class=""  style="font-size:10px;">{{checkDatereal(message.created_at)}}</span>
                          </div>
                          <div class="col-6 text-right my-0 py-0 pt-1"  style="font-size:10px;">
                               
                           <v-icon  v-if="message.tutoruserid != message.user_id"  color="#3E8893" >mdi-account-circle</v-icon>
                           <v-icon   v-if="message.tutoruserid == message.user_id" color="#3E8893" >mdi-shield-account-outline</v-icon> <span style="font-size:10px;">{{message.username}}</span> 
                          </div>        
                        </div>
                      </v-card>
           </div>
            <div class="col-1">

           </div>
          
         </v-row>

         
           </div>
         <v-row style="margin-top:100px;"> 

         </v-row>
       </div>

       <span 
       :style="focusfield ?  'position:absolute; z-index:1000; top:75%; height:auto; width:auto%;right:1%; border-radius:0px; cursor:pointer; background:#3E8893;box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border:1px solid #3E8893; border-radius:50%;' : 'position:absolute; z-index:1000; top:82%; height:auto; width:auto%;right:1%; border-radius:0px; cursor:pointer; background:#3E8893;box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border:1px solid #3E8893; border-radius:50%;'" 
       class="px-2 py-2" @click="codeboard ? codeboard = false : codeboard = true" >
        <v-icon class="white-text">
           mdi-xml
        </v-icon>
       </span>


  <div 
  :style=" fuulscreencode ? 'position:fixed;top:0%; width:100%; height:100% !important; left:0%;z-index:13456;' : 'position:fixed;top:0%; width:100%; height:100% !important; left:0%;z-index:13456;'" v-show="codeboard">
      
    <div class="example my-0 py-1 card " style="border-radius:0px;background: rgba(23,67,88,0.5); overflow-y:scroll; ">
     <div class="ml-2 my-0 py-0" >
        <v-btn icon @click="codeboard ? codeboard = false : codeboard = true" ><v-icon class="white-text">mdi-close</v-icon></v-btn>
     </div>
    <code-box ref="codebox" :messages="messages" :user_id="user_id" :selected_class_id="selected_class_id" :displaycodebox="displaycodebox" :showcode="showcode" ></code-box>
     

  </div>

      
  

  
       </div>
 
    
         

           



           



        
       
       </v-app>
        <div style="position:absolute;top:0%; width:100%; height:100% !important; left:0%; z-index:1000000; background: rgba(23,67,88,0.5);"
                 v-if="displaycodebox" class="d-md-none d-flex flex-column">
          <v-btn icon @click="displaycodebox = false; shareready = false"><v-icon color="#ffffff">mdi-close</v-icon></v-btn>
          <div style="width:100%; height:100%; overflow-y:scroll;padding-bottom:60px;" class="text-center">
            <div class="card my-0 mx-0 mx-auto text-center py-1 my-auto" style="width:96%; height:auto; border-bottom-left-radius:0px; border-bottom-right-radius:0px; background:#3E8893;" >
                 <h5 style="font-size:12px;color:white;">CitonHub-: CodeBox</h5>
            </div>
           <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
   :srcdoc="code" 
    style="border: 0; width:96%; height:95%; background:white; " class="mx-auto my-0"></iframe>
     <div class="card my-0 mx-0 mx-auto  col-12 py-1 my-auto" style="width:96%; height:auto; border-top-left-radius:0px; border-top-right-radius:0px; background:#3E8893;" >
                <div class="row my-0 py-0"> 
                  <div class="col-6 py-0 my-0 text-left">
                  <i style="font-size:10px;color:white;">Designed by CitonHub</i>
                 </div>
                 <div class="col-6 py-0 my-0 text-right">
                       <v-btn icon v-if="shareready" tag="a" :href="'whatsapp://send?text=' + 'Guys! check out what i built,https://www.citonhub.com/hub/results-id-'+ newcodepage" data-action="share/whatsapp/share"> <v-icon class="white-text">mdi-whatsapp</v-icon></v-btn>
                    <v-btn icon v-if="shareready" tag="a" :href="'https://twitter.com/intent/tweet?text=' + 'Guys!%20check%20out%20what%20I%20built,&url=https://www.citonhub.com/hub/results-id-'+ newcodepage" class="twitter-share-button">  <v-icon class="white-text">mdi-twitter</v-icon></v-btn>

                     <v-btn color="#ffffff" :loading="loadingsharebtn" small v-if="!shareready" @click="sharecode"> Share <v-icon style="color:gray;">mdi-share</v-icon></v-btn>
                 </div>
                </div>
                 

            </div>
            </div>
        </div>
        <div style="position:absolute;top:0%; width:100%; height:100% !important; left:0%; z-index:1000000; background: rgba(23,67,88,0.5);"
                 v-show="displayimage" >
          <v-btn icon @click="closedisplayimage"><v-icon color="#ffffff">mdi-close</v-icon></v-btn>
          <div style="width:100%; height:100%; overflow-y:scroll;" class="text-center">
            <img height="auto" width="96%" :src="imagetoview"/>
            </div>
        </div>

         <div style="position:absolute;top:0%; width:100%; height:100% !important; left:0%; z-index:1000000; background: rgba(23,67,88,0.5);"
                v-show="closememberboard" >
        
          <div style="width:96%; height:80% !important; left:2%; top:3%;overflow-x:hidden;" class="text-center card">
          
          
            
            
           
            <div class="col-12 my-0 py-0" style="overflow-y:scroll;" > 
              <div class="row pt-1 px-1" style="border-bottom:1px solid #c5c5c5;position:sticky;top:0%; background-color:#3E8893 !important; z-index:3;">
                <div class="col-3 text-left my-0 py-0">
                 <v-btn icon @click="closememberboard ? closememberboard = false : closememberboard = true "><v-icon color="#ffffff">mdi-close</v-icon></v-btn>
             </div>
             <div class="col-6 text-center my-0 py-0 pt-3">
                <h6 style="font-size:13px;color:white;">Members ({{classmembers.length}})</h6>
             </div>
             <div class="col-3 my-0 py-0">

             </div>
              </div>
               
              <div v-for="(member,index) in classmembers" :key="index">
                 <v-row class="px-1 py-1" v-if="member.id != user_id" >
           <div class="col-3 text-center my-0 py-0">
           <img :src="'/imgs/profile/' + member.image_name + '.' + member.image_extension" height="40" width="40" style="border-radius:50%;" v-if="member.image_name != null">
              <img src="/imgs/profileface.svg" height="40" width="40" style="border-radius:50%;" v-if="member.image_name == null">
           </div>
           <div class="col-9 text-left my-0 py-0 pb-1" style="border-bottom:1px solid #c5c5c5;">
             <span class="courseheading" style="font-size:11px;">{{member.username}}</span><br>
              <v-icon  v-if="member.type == 1"  color="#3E8893" >mdi-account-circle</v-icon>  <span v-if="member.type == 1"   class="lastmessage" style="font-size:10px;">Student</span>
             <v-icon  v-if="member.type == 2"   color="#3E8893" >mdi-shield-account-outline</v-icon>  <span   v-if="member.type == 2" class="lastmessage" style="font-size:10px;">Tutor</span>
             
           </div>
        </v-row>
         <v-row class="px-1 py-1"  v-if="member.id == user_id" >
           <div class="col-3 text-center my-0 py-0">
           <img :src="'/imgs/profile/' + member.image_name + '.' + member.image_extension"  height="40" width="40" style="border-radius:50%;"  v-if="member.image_name != null">
            <img src="/imgs/profileface.svg" height="40" width="40" style="border-radius:50%;" v-if="member.image_name == null">
           </div>
           <div class="col-9 text-left my-0 py-0 pb-1" style="border-bottom:1px solid #c5c5c5;">
             <span class="courseheading" style="font-size:11px;">You</span><br>
              <v-icon  v-if="member.type == 1"  color="#3E8893" >mdi-account-circle</v-icon>  <span v-if="member.type == 1"   class="lastmessage" style="font-size:10px;">Student</span>
             <v-icon  v-if="member.type == 2"   color="#3E8893" >mdi-shield-account-outline</v-icon>  <span   v-if="member.type == 2" class="lastmessage" style="font-size:10px;">Tutor</span>
            
           </div>
        </v-row>
              </div>
            
              
            
            </div>
             

            </div>
        </div>

       <board-create :user_id="user_id" :messages="messages" :selected_class_id="selected_class_id" :focusfield="focusfield" :code="code" ref="boardcreate" :tutoruserid="tutoruserid"></board-create>
   </div>
   </v-slide-x-reverse-transition>
</div>   
</template>
<script>




import Rave from "./RavePayment.vue";

export default {
  props:['user_id_root','usermail'],
   
    data(){
      return {
          paginate:1,
         paginate_lenght:2,
         selectedclassid:0,
        mediaRecorder: null,
          focusfield:false,
        drawer: null,
        showuploadprogress: false,
        allPaidCourses:[],
        showchatboard:true,
        autoplay: false,
        newcodepage:[],
        mainboard: false,
        classmemberslist:'class members...',
          classmemberslistsm:'class members...',
            classmemberslistmd:'class members...',
            initialmsglength:40,
            moremsglength:30,
        typing_user:'',
        tutorData:[],
        msgcount:0,
        user_typing:false,
        allmesagesdata:[],
        currentmsgposition:0,
        classmembers:[],
        closememberboard:false,
        showtrial:false,
        raveKey: "FLWPUBK-ea9a4693d8c3caabf78dafe50beccf96-X",
        displayfull:false,
        audioBlob:'',
        audioUrl:'',
        displaycodebox:false,
        tutoruserid:0,
         filerecord:'',
         audiocontent:'',
         fuulscreencode:false,
         progressvalue:0,
         loadingsharebtn:false,
         showrecorder:false,
         audioChunks:[],
         shareready:false,
         showloadmore:false,
         msgbydate:[],
         selected_class_id:'',
         showshare: true,
         showsend: false,
         selectedclassname:'Select a class',
         selectedclassnamesm:'',
         tutorclasses:[],
         selectedclassimg:'/imgs/showimg.jpg',
         msgtext:'',
         selectedclass:[],
         name: 'Example-editor',
         language:'HTML',
         file: '/audio/example.mp3',
          color: null,
          displayimage:false,
          showstart:true,
          showstop: false,
          messages:[],
          code:'',
          imagetoview:'',
         codeboard: false,
         press:'press',
         headers:{},
         shareboardshow:false,
         recorder:false,
         
      }
    },
    components: {
         Rave
    },
    mounted() {
      this.fetchAllPaidCourses(0);
      this.fetchtutorclasses();
    },
    computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror
    },
    user_id:{
           get: function() {
              
                return this.user_id_root;
            },
            set: function(value) {
                this.$emit('listchange', value)
            }
    },
     usermailcom:{
           get: function() {
              
                return this.usermail
            },
            set: function(value) {
                this.$emit('listchange2', value)
            }
     },
     reference:function(){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( let i=0; i < 10; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      }
   },
    methods:{
      detectTyping: function(){
         if(this.msgtext.length != 0){
           this.showshare = false;
           this.showsend = true;
         }else{
            this.showsend = false;
           this.showshare = true;
         }
      },
      shareboard: function(){
        this.shareboardshow = true;
      },
      closeboard: function(){
        this.shareboardshow = false;
      },
     
      audioFinish () {
				this.msgs.push('The audio finished.')
			},
       
      onResult: function(data){
       console.log('The blob data:', data);
      console.log('Downloadable audio', window.URL.createObjectURL(data));
    },
    expandcode: function(){
    this.$root.expandcode();
  },
    startrecord: function(){
      this.showstart= false;
      this.showstop = true;
      this.audioUrl = '';
      this.audioChunks = [];
      navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
       this.mediaRecorder = new MediaRecorder(stream)
      this.mediaRecorder.start();

     this.audioChunks = [];

    this.mediaRecorder.addEventListener("dataavailable", event => {
      this.audioChunks.push(event.data);
    });

    this.mediaRecorder.addEventListener("stop", () => {
      this.audioBlob = new Blob(this.audioChunks);
      this.audioUrl = URL.createObjectURL(this.audioBlob);
    });

  });
    },
    stoprecord: function(){
        this.showstop = false;
        this.showstart = true;
        this.mediaRecorder.stop();
        
        this.showrecorder= true;
    },
    hiderecorder: function(){
      this.showrecorder = false;
    },
    showcode: function(messageid){
        var thismessage = this.messages.filter((message)=>{
         return  message.id == messageid;
        });

        thismessage  = thismessage[0];
       this.$refs.codebox.code = thismessage.content;
     
       
              
          
            
              
              this.$refs.codebox.code = thismessage.content;
               
                 this.$refs.codebox.cmOption.mode = thismessage.code_type;

                  if(thismessage.code_type == 'text/html'){
               this.$refs.codebox.language = 'HTML' ;
                 }
                  if(thismessage.code_type == 'application/x-httpd-php'){
               this.$refs.codebox.language = 'PHP' ;
                 }
                  if(thismessage.code_type == 'text/javascript'){
               this.$refs.codebox.language = 'JAVASCRIPT' ;
                 }
                  if(thismessage.code_type == 'text/x-vue'){
               this.$refs.codebox.language = 'VUEJS' ;
                 }
                  if(thismessage.code_type == 'text/x-python'){
               this.$refs.codebox.language = 'PYTHON' ;
                 }
                  if(thismessage.code_type == 'text/x-sql'){
               this.$refs.codebox.language = 'SQL' ;
                 }
                  if(thismessage.code_type == 'text/css'){
               this.$refs.codebox.language = 'CSS' ;
                 }
        
            
              
                       
         
              
            
      

   this.codeboard = true;
    },
     showcodemd: function(messageid){
        var thismessage = this.messages.filter((message)=>{
         return  message.id == messageid;
        });

        thismessage  = thismessage[0];
       this.$refs.codeboxmd.code = thismessage.content;
     
       
              
          
            
              
              this.$refs.codeboxmd.code = thismessage.content;
               
                 this.$refs.codeboxmd.cmOption.mode = thismessage.code_type;

                  if(thismessage.code_type == 'text/html'){
               this.$refs.codeboxmd.language = 'HTML' ;
                 }
                  if(thismessage.code_type == 'application/x-httpd-php'){
               this.$refs.codeboxmd.language = 'PHP' ;
                 }
                  if(thismessage.code_type == 'text/javascript'){
               this.$refs.codeboxmd.language = 'JAVASCRIPT' ;
                 }
                  if(thismessage.code_type == 'text/x-vue'){
               this.$refs.codeboxmd.language = 'VUEJS' ;
                 }
                  if(thismessage.code_type == 'text/x-python'){
               this.$refs.codeboxmd.language = 'PYTHON' ;
                 }
                  if(thismessage.code_type == 'text/x-sql'){
               this.$refs.codeboxmd.language = 'SQL' ;
                 }
                  if(thismessage.code_type == 'text/css'){
               this.$refs.codeboxmd.language = 'CSS' ;
                 }
        
            
              
                       
         
              
            
      

   this.codeboard = true;
    },
     showcodelg: function(messageid){
        var thismessage = this.messages.filter((message)=>{
         return  message.id == messageid;
        });

        thismessage  = thismessage[0];
       this.$refs.codeboxlg.code = thismessage.content;
     
       
              
          
            
              
              this.$refs.codeboxlg.code = thismessage.content;
               
                 this.$refs.codeboxlg.cmOption.mode = thismessage.code_type;

                  if(thismessage.code_type == 'text/html'){
               this.$refs.codeboxlg.language = 'HTML' ;
                 }
                  if(thismessage.code_type == 'application/x-httpd-php'){
               this.$refs.codeboxlg.language = 'PHP' ;
                 }
                  if(thismessage.code_type == 'text/javascript'){
               this.$refs.codeboxlg.language = 'JAVASCRIPT' ;
                 }
                  if(thismessage.code_type == 'text/x-vue'){
               this.$refs.codeboxlg.language = 'VUEJS' ;
                 }
                  if(thismessage.code_type == 'text/x-python'){
               this.$refs.codeboxlg.language = 'PYTHON' ;
                 }
                  if(thismessage.code_type == 'text/x-sql'){
               this.$refs.codeboxlg.language = 'SQL' ;
                 }
                  if(thismessage.code_type == 'text/css'){
               this.$refs.codeboxlg.language = 'CSS' ;
                 }
        
            
              
                       
         
              
            
      

   this.codeboard = true;
    },
    openchat: function(classid){
      this.tutorDetails();
       this.selectedclassid = classid;
       var selectedclass = this.allPaidCourses.filter((classdetails)=>{
           return classdetails.classid == classid
          });
        this.selectedclass= selectedclass[0];
       
      if(selectedclass[0].trial){
        this.showtrial = true;
        return;
      }
      this.$root.leaveclass(this.selected_class_id);
      this.messages =[];
     
      this.selected_class_id = classid;
       this.$root.joinclass(classid);
     this.fetchclassmembers(this.selected_class_id);
      this.showchatboard = false;
      if(classid != 0){
      var selectedclass = this.allPaidCourses.filter((classdetails)=>{
           return classdetails.classid == classid
          });
          
       this.selectedclassname = selectedclass[0].title;
       this.selectedclassnamesm = selectedclass[0].title.slice(0,70);
     
       this.selectedclassimg = 'imgs/course/' + selectedclass[0].image_name + '.' + selectedclass[0].image_extension;
      }else{
          this.selectedclassname = "Demo Class";
           this.selectedclassnamesm = "Demo Class";
       this.selectedclassimg = "/imgs/showimg.jpg";
      }
    

      this.allMessages(this.selectedclassid);
      
     
                this.mainboard = true;

            this.$root.scrollboard();
    },
     openchattutor: function(classid){
      this.tutorDetails();
      this.$root.joinclass(classid);
      this.messages =[];
      this.selectedclassid = classid;
      this.selected_class_id = classid;
     this.fetchclassmembers(this.selected_class_id);
      this.showchatboard = false;
      if(classid != 0){
      var selectedclass = this.tutorclasses.filter((classdetails)=>{
           return classdetails.classid == classid
          });
          
       this.selectedclassname = selectedclass[0].title;
       this.selectedclassnamesm = selectedclass[0].title.slice(0,70);
     
       this.selectedclassimg = 'imgs/course/' + selectedclass[0].image_name + '.' + selectedclass[0].image_extension;
      }else{
          this.selectedclassname = "Demo Class";
           this.selectedclassnamesm = "Demo Class";
       this.selectedclassimg = "/imgs/showimg.jpg";
      }
    

      this.allMessages(this.selectedclassid);
      
     
                this.mainboard = true;

            this.$root.scrollboard();
    },
    showclasslist: function(){
       this.mainboard = false;
       this.$root.leaveclass(this.selected_class_id);
        this.showchatboard = true;
    },
    fetchAllPaidCourses: function(classid){
           axios.get('/get-all-paid-classes')
          .then(response => {
              
          
             if (response.status == 200) {
              
              this.allPaidCourses = response.data;
                this.openchat(classid);
                       
            }
              
            
          })
          .catch(error => {
            console.log(error);
          })
        
      },
      allMessages: function(selectedclass){
           axios.get('/get-all-messages-' + selectedclass)
          .then(response => {
              
          
             if (response.status == 200) {
              
              this.allmesagesdata = response.data;

               let timedmessagearray = [];

                 for (let index = 0; index < this.allmesagesdata.length; index++) {
                   var timedmsg = {
                     'created_date': this.allmesagesdata[index].created_at,
                     'msgid': this.allmesagesdata[index].id
                   };
                   
                   timedmessagearray.push(timedmsg);
                     
                 }
                
                 var filtertimedmessagearray = [];
                for (let index = 0; index < timedmessagearray.length; index++) {
                  var checkifexist = [];
                 checkifexist = filtertimedmessagearray.filter((timedmsg)=>{
                    return moment(timedmsg.created_date).format('l')  == moment(timedmessagearray[index].created_date).format('l');
                 })
                 
                  
                 if(checkifexist.length < 1){
                     filtertimedmessagearray.push(timedmessagearray[index])
                 }
                  
                }


               this.msgbydate = filtertimedmessagearray;

              if(response.data.length <= this.initialmsglength){
               
                 this.messages = response.data;
                 
            }else{
              
               this.msgcount = this.allmesagesdata.length;

              
                
               let firstmsgset= this.allmesagesdata.slice(this.msgcount - this.initialmsglength,this.msgcount);

              

                this.messages = firstmsgset;

                this.currentmsgposition = this.msgcount - this.initialmsglength - 1;

               this.showloadmore = true;
            
            }
            
             }
            
          })
          .catch(error => {
            console.log(error);
          })
        
      },
      showmoremsg: function(){
        let msgdiff = this.currentmsgposition - this.initialmsglength;
        var startposition = 0;
        if(msgdiff < 0){
            startposition = 0;
            this.showloadmore = false;
        }else{
          startposition = msgdiff;
          
        }
         let moremsgs = this.allmesagesdata.slice(startposition, this.currentmsgposition);

          let newgeneratedmsg = [...moremsgs, ...this.messages];

         this.messages = newgeneratedmsg;

         this.currentmsgposition = startposition - 1;
       
      },
      showfullimage:function(imageurl){
        this.displayimage = true;
        this.imagetoview = imageurl;
      },
      showfullimagemsg: function(imageurl){
        this.displayimage = true;
        this.imagetoview = '/imgs/class/' + imageurl;
      },
      closedisplayimage:function(){
        this.displayimage = false;
      },
      removemessage:function(preloaderid){
        let messages = this.messages.filter((message)=>{
          return  message.loaderid != preloaderid
        });
          
        this.messages = messages;
      },
       checkDatereal: function(date){

            var realTimeHour = moment(date).add(1,'hours');

            var aWeekAgo = moment().subtract(7,'days');

            if (moment(realTimeHour) >= aWeekAgo) {
              return moment(realTimeHour).format("h:mm a");
            }else{
               return moment(realTimeHour).format("h:mm a");
            }
      },
      checkDaterealtimed: function(date){

            var realTimeHour = moment(date).format('l');

          
               
            if(moment(new Date).format('l') == realTimeHour){
                 return 'Today';
            }
             if(moment(new Date).subtract(1,'days').format('l') == realTimeHour){
                 return 'Yesterday';
            }
           
               return moment(realTimeHour).format("MMMM Do");
           
      },
      sendmessage: function(type,preloaderid){

        
            this.showuploadprogress = true;
           let formData = new FormData();

           if(type == 'image'){
              formData.append('image',this.$refs.boardcreate.uploadfile);
           }
           if(type == 'audio'){
              formData.append('audio',this.$refs.boardcreate.uploadfile);
           }
            if(type == 'video'){
              formData.append('video',this.$refs.boardcreate.uploadfile);
           }
           if(type == 'document'){
              formData.append('document',this.$refs.boardcreate.uploadfile);
             formData.append('file_name',this.$refs.boardcreate.filename);
           }
            



           
            formData.append('activemembers',this.$root.users);
          formData.append('classid',this.selected_class_id);
          formData.append('type',type);

             axios.post('/save-message',formData,
           {
             headers:{
              'Content-Type':'multipart/form-data'
             },
             onUploadProgress: function(progressEvent){
             this.progressvalue = parseInt(Math.round(
               (progressEvent.loaded / progressEvent.total) * 100
             ))
           }.bind(this)
           })
          .then(response => {
             
            
              this.showuploadprogress = false;
            
             if (response.status == 200) {
               
            
              this.removemessage(preloaderid);
                this.$root.scrollboard();
            
            }
            
            
           
            
          })
          .catch(error => {
            
               
            
             console.log('an error occured');
             this.showuploadprogress = false;
            
          
              
           
          });
       
      },

       sendmessagemd: function(type,preloaderid){

        
            this.showuploadprogress = true;
           let formData = new FormData();

           if(type == 'image'){
              formData.append('image',this.$refs.boardcreatemd.uploadfile);
           }
           if(type == 'audio'){
              formData.append('audio',this.$refs.boardcreatemd.uploadfile);
           }
            if(type == 'video'){
              formData.append('video',this.$refs.boardcreatemd.uploadfile);
           }
           if(type == 'document'){
              formData.append('document',this.$refs.boardcreatemd.uploadfile);
             formData.append('file_name',this.$refs.boardcreatemd.filename);
           }
            



           
        
          formData.append('classid',this.selected_class_id);
          formData.append('type',type);

             axios.post('/save-message',formData,
           {
             headers:{
              'Content-Type':'multipart/form-data'
             },
             onUploadProgress: function(progressEvent){
             this.progressvalue = parseInt(Math.round(
               (progressEvent.loaded / progressEvent.total) * 100
             ))
           }.bind(this)
           })
          .then(response => {
             
            
              this.showuploadprogress = false;
            
             if (response.status == 200) {
               
            
              this.removemessage(preloaderid);
                this.$root.scrollboard();
            
            }
            
            
           
            
          })
          .catch(error => {
            
               
            
             console.log('an error occured');
             this.showuploadprogress = false;
            
          
              
           
          });
       
      },
       sendmessagelg: function(type,preloaderid){

        
            this.showuploadprogress = true;
           let formData = new FormData();

           if(type == 'image'){
              formData.append('image',this.$refs.boardcreatelg.uploadfile);
           }
           if(type == 'audio'){
              formData.append('audio',this.$refs.boardcreatelg.uploadfile);
           }
            if(type == 'video'){
              formData.append('video',this.$refs.boardcreatelg.uploadfile);
           }
           if(type == 'document'){
              formData.append('document',this.$refs.boardcreatelg.uploadfile);
             formData.append('file_name',this.$refs.boardcreatelg.filename);
           }
            



           
        
          formData.append('classid',this.selected_class_id);
          formData.append('type',type);

             axios.post('/save-message',formData,
           {
             headers:{
              'Content-Type':'multipart/form-data'
             },
             onUploadProgress: function(progressEvent){
             this.progressvalue = parseInt(Math.round(
               (progressEvent.loaded / progressEvent.total) * 100
             ))
           }.bind(this)
           })
          .then(response => {
             
            
              this.showuploadprogress = false;
            
             if (response.status == 200) {
               
            
              this.removemessage(preloaderid);
                this.$root.scrollboard();
            
            }
            
            
           
            
          })
          .catch(error => {
            
               
            
             console.log('an error occured');
             this.showuploadprogress = false;
            
          
              
           
          });
       
      },
      sharecode:function(){
         this.loadingsharebtn = true;
         axios.post('/savecode',{
                content: this.$refs.codebox.code,
                type: this.$refs.codebox.language
                  })
          .then(response => {
            
           if (response.status == 201) {
              console.log(response.data);
               this.loadingsharebtn = false;
              this.shareready = true;
              this.newcodepage = response.data.pageid;

            
            }else{
              console.log(response.status);
            }
            
            
          })
          .catch(error => {
            console.log(error);
          })
      },
       sharecodemd:function(){
         this.loadingsharebtn = true;
         axios.post('/savecode',{
                content: this.$refs.codeboxmd.code,
                type: this.$refs.codeboxmd.language
                  })
          .then(response => {
            
           if (response.status == 201) {
              console.log(response.data);
               this.loadingsharebtn = false;
              this.shareready = true;
              this.newcodepage = response.data.pageid;

            
            }else{
              console.log(response.status);
            }
            
            
          })
          .catch(error => {
            console.log(error);
          })
      },
       sharecodelg:function(){
         this.loadingsharebtn = true;
         axios.post('/savecode',{
                content: this.$refs.codeboxlg.code,
                type: this.$refs.codeboxlg.language
                  })
          .then(response => {
            
           if (response.status == 201) {
              console.log(response.data);
               this.loadingsharebtn = false;
              this.shareready = true;
              this.newcodepage = response.data.pageid;

            
            }else{
              console.log(response.status);
            }
            
            
          })
          .catch(error => {
            console.log(error);
          })
      },
      tutorDetails: function(){
           axios.get('/tutor-details')
          .then(response => {
              
            
            
             if (response.status == 200) {
              
              this.tutoruserid = response.data.data[0].user_id;
            
             
              
             
            }
              
            
          })
          .catch(error => {
            console.log(error);
          })
        },
        showclassmembers: function(){
              this.closememberboard = true;
        },
        fetchclassmembers:function(classid){
         axios.get('/class-members-'+ classid)
          .then(response => {
              
            
            
             if (response.status == 200) {
              
              this.classmembers = response.data;
                
             var membersstring = '';
              for (let index = 0; index < this.classmembers.length; index++) {
                
                 membersstring += this.classmembers[index].username + ' ';
              }

               this.classmemberslist = membersstring.slice(0,100) + '...';
               this.classmemberslistmd = membersstring.slice(0,70) + '...';
               this.classmemberslistsm = membersstring.slice(0,20) + '...';
            
             
              
             
            }
              
            
          })
          .catch(error => {
            console.log(error);
          })
        },
        fetchtutorclasses:function(){
         axios.get('/all-class-tutor')
          .then(response => {
              
            
            
             if (response.status == 200) {
              
              this.tutorclasses = response.data;
           
             
              
             
            }
              
            
          })
          .catch(error => {
            console.log(error);
          })
        },
        downloadfile:function(filelink){
              window.location.href="/hub/class/files/" + filelink;
        },
         callback: function(response){

          this.savetransandredirectuser(response);
       
      },
       savetransandredirectuser:function(response){
        
           axios.post('/save-payment-details',{
                amount: 5000,
                status: response.data.data.status,
                reference: response.data.data.txRef,
                paymentid: this.selectedclass.payment_id,
                 trial: false,
                 fromhub: true
                  })
          .then(response => {
             
                 
            
             if (response.status == 200) {
                 
               this.allPaidCourses = [];
                this.fetchAllPaidCourses(this.selected_class_id);
              
            
            }
              
            
           
            
          })
          .catch(error => {
            console.log(error);
          })
      },
        close: function(){
          console.log("Payment closed")
      },
      emptyfield: function(){
        this.$refs.boardcreate.msgtext = '';
      
        this.$refs.boardcreate.showsend = false;
        this.$refs.boardcreate.showshare = true; 

         this.$refs.boardcreatemd.msgtext = '';
      
        this.$refs.boardcreatemd.showsend = false;
        this.$refs.boardcreatemd.showshare = true; 

         this.$refs.boardcreatelg.msgtext = '';
      
        this.$refs.boardcreatelg.showsend = false;
        this.$refs.boardcreatelg.showshare = true; 
      }
   
   
    }
}
</script>
<style lang="scss" scoped>
.fixed{
    position: fixed;
    width: 100%;
    height: 100%;

}
.courseheading{
    font-weight: bold;
    font-size: 12px;
    color: #153402;
}
.editorhead{
    
    font-size: 12px;
    color: grey;
}
.coursenames{
    font-size: 11px;
}
.lastmessage{
    font-size: 10px;
    color: #868686;
}
.notselectedclass:hover{
   background-color: whitesmoke !important;
  
}
.selectedclass{
   background-color: whitesmoke !important;
   cursor: pointer;
   border-right:3px solid #3E8893;
}
.notselectedclass{
   background-color: white !important;
   cursor: pointer;
   
}

.mymessages p {
  padding-top:10px;
  padding-bottom:10px;
}
.shareitem:hover{
  background:whitesmoke !important;
  cursor:pointer;
}
 .example {
   display: block;
    height: 100%;
     
    .codemirror,
    .pre {
      width: 100%;
      max-height:100% !important;
      margin: 0;
       display: block;
      padding: 1rem;
      font-size: 11px;
      line-height: 1.6;
      word-break: break-all;
      word-wrap: break-word;
      overflow: auto;
    }

   

    
  }
  .headChatType{
     font-weight:bolder;
      font-size:11px;
      color:#868686;
}
.headChatType2{
     font-weight:bolder;
      font-size:13px;
      color:#514E4E;
}


</style>