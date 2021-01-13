<template>
    <div>
       
       <!-- large screens -->
        <div style="position:fixed;height:88%;left:0;top:10%;z-index:9999999999999999;overflow-y:auto;" class="col-lg-10 offset-lg-2 py-0 px-0">

             <div class="col-lg-10 offset-lg-1 py-1 mb-0 col-md-10 offset-md-1 px-2 d-md-block d-none py-0 px-0"
              style="position:absolute; left:0%; top:0%; height:98%; background:#ffffff;border:1px solid #c5c5c5; border-radius:6px;">
     
              <!-- top session -->
              <template v-if="this.$root.selectedChallenge != []">
              <div :style="imageStyle('35%',this.$root.selectedChallenge,'large')" >

                    <div class="d-flex flex-column" style="position:absolute;height:100%;width:100%;top:0;left:0;background: rgba(27, 27, 30, 0.5);border-top-left-radius:6px;border-top-right-radius:6px;">

                        <div class="d-flex flex-row px-2 pt-2 " style="height:30%;z-index:99999999999999999 !important;">

                            <v-btn @click="goBack"   icon class="mr-2 mt-2" style="z-index:9999999999999999 !important;"><v-icon style="font-size:25px;color:#ffffff;">las la-arrow-left</v-icon></v-btn>
                            <div class="d-flex flex-column pt-1">
                               <div style="font-size:18px;font-family:HeaderFont;color:#ffffff;" >{{this.$root.selectedChallenge.title}} <v-btn @click="editChallenge" v-if="this.$root.username == this.$root.selectedChallenge.username" icon> <v-icon color="#ffffff">las la-edit</v-icon> </v-btn></div>  
                                <div style="font-size:14px;font-family:BodyFont;color:#ffffff;" class="pt-1" >{{this.$root.selectedChallenge.summary}} </div>  
                            </div>

                        </div>

                         <div class="d-flex px-2 py-2 " style="height:40%;align-items:center;justify-content:center;">

                             <div class="d-flex flex-column text-center">

                                  <div style="font-size:25px;font-family:HeaderFont;color:#ffffff;" >{{ TimerValue }}</div>  
                                  <div style="font-size:14px;font-family:BodyFont;color:#ffffff;" class="pt-1" >Days : Hours : Minutes : Seconds </div>  
                             </div>

                           
                        </div>

                        <div class="d-flex px-2 py-2 " style="height:30%;width:100%;">

                             <div class="d-flex flex-column-reverse text-center" style="height:100%;width:100%;">
                                
                                <div class="d-flex flex-row" style="align-items:center;width:100%;">
                                   
                                   <div class="col-8 py-0 px-0 d-flex flex-row" style="align-items:center;">

                                        <div  class="d-inline-block mx-2 " v-if="this.$root.selectedChallenge.owner_profile" :style="imageStyleUser(40,this.$root.selectedChallenge.owner_profile)"></div> 
                              <div style="font-size:13px;font-family:BodyFont;color:#ffffff;" >{{this.$root.selectedChallenge.username}} </div>  

                               <v-icon class="mx-1" style="font-size:8px;color:#ffffff;">mdi-record</v-icon> 
                                       
                                       <div style="font-size:13px;font-family:BodyFont;color:#ffffff;" class="d-md-block d-none">  {{checkDuelStatus(this.$root.selectedChallenge)}} </div>
                                  
                                <v-icon class="mx-1" style="font-size:8px;color:#ffffff;">mdi-record</v-icon> 

                                <div style="font-size:14px;font-family:BodyFont;color:#ffffff;" class="d-md-block d-none">  <v-icon style="font-size:20px;" color="#ffffff">las la-user-friends</v-icon> {{this.$root.selectedChallenge.current_participant}} </div>
                             
                                  

                              
                                   </div>

                                   <div class="col-4 py-0 px-2 d-flex flex-row-reverse" style="align-items:center;">

                                      <v-btn class="ml-1"  @click="shareChallenge"  outlined medium rounded color="#3C87CD" style="font-size:13px; font-weight:bolder; background:white;font-family:MediumFont;">
                                      <span style="text-transform:capitalize;">Share</span>   <v-icon class="ml-r" style="font-size:18px;" >mdi mdi-share-variant</v-icon> 
                                   </v-btn>

                                         <v-btn :loading="loadingStater"  @click="startChallenge" v-if="this.$root.username == this.$root.selectedChallenge.username && checkDuelStatus(this.$root.selectedChallenge) == 'Pending'" medium rounded color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:MediumFont;">
                                        <span style="color:white;text-transform:capitalize;">Start</span> 
                                   </v-btn>

                                    <v-btn  @click="goToPanel" class="mx-1" v-if="this.$root.selectedChallenge.user_participating"  medium rounded color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:MediumFont;">
                                        <span style="color:white;text-transform:capitalize;">Panel</span> 
                                   </v-btn>

                                   <v-btn @click="createProject" :loading="loadingJoinAction" class="mx-1"  v-if="!this.$root.selectedChallenge.user_participating && !this.$root.selectedChallenge.participant_reached && knowDuelStatus(this.$root.selectedChallenge)"  medium rounded color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:MediumFont;">
                                        <span style="color:white;text-transform:capitalize;">Join</span> 
                                   </v-btn>

                                    <v-btn @click="showResults('vote')" class="mx-1"  v-if="!this.$root.selectedChallenge.user_participating  && checkDuelStatus(this.$root.selectedChallenge) == 'Ended'"  medium rounded color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:MediumFont;">
                                        <span style="color:white;text-transform:capitalize;">Vote</span> 
                                   </v-btn>

                                     <v-btn  v-if="this.$root.username == this.$root.selectedChallenge.username && checkDuelStatus(this.$root.selectedChallenge) == 'Ended' && this.$root.selectedChallenge.voting == null" medium rounded color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:MediumFont;">
                                        <span style="color:white;text-transform:capitalize;">End voting</span> 
                                   </v-btn>

                                    <v-btn @click="showResults('view')" class="mx-1"  v-if="checkDuelStatus(this.$root.selectedChallenge) == 'Ended'"  medium rounded color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:MediumFont;">
                                        <span style="color:white;text-transform:capitalize;">Results</span> 
                                   </v-btn>

                                   </div>
                                        

                                </div>


                                 
                             </div>

                           
                        </div>

                    </div>

                 </div>
              </template>
                
              <!-- ends -->

              <!-- switch session -->
                 <div style="position:absolute;height:46px;width:100%;top:35%;left:0; overflow-y:hidden; overflow-x:auto;border-bottom:1px solid #c5c5c5;background:whitesmoke;">

                  <div class="col-12 px-0 d-flex flex-row py-0" style="align-items:center; height:100%;border-right:1px solid #c5c5c5;position:absolute; top:0;">
                    
                   <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'description' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('description')">

                        <div style="font-size:14px;font-family:MediumFont;" >Description</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'rules' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('rules')">

                        <div style="font-size:14px;font-family:MediumFont;" >Rules</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'judges' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('judges')" >

                        <div style="font-size:14px;font-family:MediumFont;" >Judges</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar"  :style="selectedTab == 'leaderboard' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('leaderboard')" >

                        <div style="font-size:14px;font-family:MediumFont;" >Leaderboard</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'discussion' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('discussion')">

                        <div style="font-size:14px;font-family:MediumFont;" >Discussion</div>  

                   </div>

                  </div>

                 

                 </div>
                 
                <!-- ends -->

                <!-- content view -->

                  <div style="position:absolute;height:59%;width:100%;top:41%;left:0; overflow-y:auto; overflow-x:hidden;">

                  <div class="col-12 scroller" style="height:100%;position:absolute; top:0%; overflow-y:auto; overflow-x:hidden;">
                        <router-view></router-view>
                  </div>

                 </div>

                  
              <!-- ends -->
              
           </div>


        

            

        </div>





          <!-- smaller screens -->
                <div class="col-lg-10 offset-lg-1 py-1 mb-0 col-md-10 offset-md-1 px-2 d-md-none d-block py-0 px-0"
              style="position:fixed; z-index:9999999999999; left:0%; top:0%; height:100%;  background:#ffffff;">

              <!-- close button -->
                 <v-btn @click="goBack" icon color="#ffffff" style="position:fixed;background:#3C87CD;top:1%; right:2%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>
                 <!-- ends -->

                  <template v-if="this.$root.selectedChallenge != []">


                <div :style="imageStyle('250px',this.$root.selectedChallenge,'small')" >

                

                    <div class="d-flex flex-column" style="position:absolute;height:100%;width:100%;top:0;left:0;background: rgba(27, 27, 30, 0.5);">

                        <div class="d-flex flex-row px-2 pt-2 " style="height:30%;">

                           <div class="d-flex flex-column pt-2 pr-2" >
                               <div style="font-size:14px;font-family:HeaderFont;color:#ffffff; align-items:center;"  class="d-flex flex-row"><div> {{this.$root.selectedChallenge.title}}</div> <v-icon @click="editChallenge" v-if="this.$root.username == this.$root.selectedChallenge.username" color="#ffffff" class="mx-1" style="font-size:20px;">las la-edit</v-icon> </div>  
                                <div style="font-size:13px;font-family:BodyFont;color:#ffffff;" class="pt-1" >{{this.$root.selectedChallenge.summary}} </div>  
                            </div>

                        </div>

                         <div class="d-flex px-2 py-2 " style="height:40%;align-items:center;justify-content:center;">

                             <div class="d-flex flex-column text-center">

                                  <div style="font-size:22px;font-family:HeaderFont;color:#ffffff;" >{{ TimerValue }}</div>  
                                  <div style="font-size:12px;font-family:BodyFont;color:#ffffff;" class="pt-1" >Days : Hours : Minutes : Seconds </div>  
                             </div>

                           
                        </div>

                        <div class="d-flex px-2 py-2 " style="height:30%;width:100%;">

                             <div class="d-flex flex-column-reverse text-center" style="height:100%;width:100%;">
                                
                                <div class="d-flex flex-row" style="align-items:center;width:100%;">
                                   
                                   <div class="col-12 py-0 px-0 d-flex flex-row" style="align-items:center;">

                                     
                                        <div  class="d-inline-block mx-2 "   v-if="this.$root.selectedChallenge.owner_profile"
                              :style="imageStyleUser(40,this.$root.selectedChallenge.owner_profile)"></div> 


                              <div style="font-size:13px;font-family:BodyFont;color:#ffffff;" >{{this.$root.selectedChallenge.username}} </div>  

                               <v-icon class="mx-1" style="font-size:8px;color:#ffffff;">mdi-record</v-icon> 

                                   <div style="font-size:12px;font-family:BodyFont;color:#ffffff;">  {{checkDuelStatus(this.$root.selectedChallenge)}} </div>
                                  
                                <v-icon class="mx-1" style="font-size:8px;color:#ffffff;">mdi-record</v-icon> 

                            
                              <div style="font-size:13px;font-family:BodyFont;color:#ffffff;" class="d-md-none d-block"> <v-icon style="font-size:16px;" color="#ffffff">las la-user-friends</v-icon> {{this.$root.selectedChallenge.current_participant}}</div>

                                   </div>

                                  
                                        

                                </div>


                                 
                             </div>

                           
                        </div>

                    </div>

                </div>

                  </template>


              <!-- switch session -->
                 <div class="fixed-top" style="position:absolute;height:40px;width:100%; top:250px; left:0%; overflow-y:hidden; overflow-x:auto; white-space: nowrap; border-bottom:1px solid #c5c5c5;background:whitesmoke;">

                  <div class="col-12 px-0 d-flex flex-row py-0" style="align-items:center; height:100%;position:absolute; top:0;">
                    
                   <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'description' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('description')">

                        <div style="font-size:13px;font-family:MediumFont;" >Description</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'rules' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('rules')">

                        <div style="font-size:13px;font-family:MediumFont;" >Rules</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'judges' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('judges')" >

                        <div style="font-size:13px;font-family:MediumFont;" >Judges</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar"  :style="selectedTab == 'leaderboard' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('leaderboard')" >

                        <div style="font-size:13px;font-family:MediumFont;" >Leaderboard</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'discussion' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('discussion')">

                        <div style="font-size:13px;font-family:MediumFont;" >Discussion</div>  

                   </div>

                  </div>

                 

                 </div>
                 
                <!-- ends -->

                 <!-- content view -->

                  <div style="position:absolute;height:500px;width:100%;top:290px;left:0; overflow-y:auto; overflow-x:hidden;background:white;">

                  <div class="col-12 scroller" style="height:100%;position:absolute; top:0%; overflow-y:auto; overflow-x:hidden;">
                        <router-view></router-view>
                  </div>

                 </div>

                  
              <!-- ends -->

               

   
                </div>




       

            
              <!-- button for smaller screens -->

              <!-- ends -->


               <div  class="d-lg-none d-flex flex-row-reverse" v-if="this.$router.currentRoute.path.indexOf('discussion') <= 0 && this.$router.currentRoute.path.indexOf('results') <= 0"  style="z-index:9999999999; overflow-x:auto; width:100%; position:fixed;  bottom:2%; right:3%; ">
                  <v-btn class="ml-1" @click="shareChallenge" outlined medium rounded color="#3C87CD" style="font-size:13px; font-weight:bolder; background:white;font-family:MediumFont;">
                                     <v-icon class="ml-r" style="font-size:18px;" >mdi mdi-share-variant</v-icon> 
                                   </v-btn>
                   <v-btn :loading="loadingStater"  @click="startChallenge" v-if="this.$root.username == this.$root.selectedChallenge.username && checkDuelStatus(this.$root.selectedChallenge) == 'Pending'" medium rounded color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:MediumFont;">
                                        <span style="color:white;text-transform:capitalize;">Start</span> 
                                   </v-btn>

                                    <v-btn @click="goToPanel" class="mx-1" v-if="this.$root.selectedChallenge.user_participating"  medium rounded color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:MediumFont;">
                                        <span style="color:white;text-transform:capitalize;">Panel</span> 
                                   </v-btn>

                                   <v-btn  @click="createProject" :loading="loadingJoinAction" class="mx-1"  v-if="!this.$root.selectedChallenge.user_participating && !this.$root.selectedChallenge.participant_reached && knowDuelStatus(this.$root.selectedChallenge)"  medium rounded color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:MediumFont;">
                                        <span style="color:white;text-transform:capitalize;">Join</span> 
                                   </v-btn>

                          <v-btn  class="mx-1"  @click="showResults('vote')" v-if="!this.$root.selectedChallenge.user_participating  && checkDuelStatus(this.$root.selectedChallenge) == 'Ended'"  medium rounded color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:MediumFont;">
                                        <span style="color:white;text-transform:capitalize;">Vote</span> 
                                   </v-btn>

                                     <v-btn  v-if="this.$root.username == this.$root.selectedChallenge.username && checkDuelStatus(this.$root.selectedChallenge) == 'Ended' && this.$root.selectedChallenge.voting == null" medium rounded color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:MediumFont;">
                                        <span style="color:white;text-transform:capitalize;">End voting</span> 
                                   </v-btn>

                                    <v-btn  class="mx-1"  @click="showResults('view')" v-if="checkDuelStatus(this.$root.selectedChallenge) == 'Ended'"  medium rounded color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:MediumFont;">
                                        <span style="color:white;text-transform:capitalize;">Results</span> 
                                   </v-btn>

               </div>

              
             


              <!-- ends -->

             


           
     <!-- ends -->
       
    </div>
</template>
<script>

  import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'



export default {
     data () {
      return {
        selectedTab:'',
        currentChallenge:'',
        loadingChallenge: false,
        TimerValue:'00 : 00 : 00 : 00',
         countDownDate:'',
         loadingStater:false,
         loadingJoinAction:false,
         languageIcon:[
               {
                  name:'Web app NodeJs',
                  icon:'lab la-node-js',
                  border_color:'#263238',
                  background:'#ffffff',
                  id: 'NodeJs',
               
               },
               {
                  name:'Web app PHP',
                  icon:'lab la-php',
                   border_color:'#263238',
                  background:'#ffffff',
                   id:'PHP'
               
               },
               {
                  name:'JavaScript',
                  icon:'lab la-js-square',
                   border_color:'#263238',
                  background:'#ffffff',
                  id:26
               
               },
               {
                  name:'PHP',
                  icon:'lab la-php',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 35,
               
               },
               {
                  name:'Python 3.81',
                  icon:'lab la-python',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 39,
               
               },
               {
                  name:'Python for ML(3.7.7)',
                  icon:'lab la-python',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 100,
               
               },
               {
                  name:'C',
                  icon:'mdi mdi-language-c',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 4,
               
               },
               {
                  name:'C++',
                  icon:'mdi mdi-language-cpp',
                   border_color:'#263238',
                  background:'#ffffff',
                  id:11,
               
               },
               {
                  name:'Java',
                  icon:'lab la-java',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 25,
               
               },
               {
                  name:'C#',
                  icon:'mdi mdi-language-csharp',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 13,
               
               },
               {
                  name:'Erlang',
                  icon:'lab la-erlang',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 18,
               
               },
               {
                  name:'Kotlin',
                  icon:'mdi mdi-language-kotlin',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 27,
               
               },
               {
                  name:'Fortran',
                  icon:'mdi mdi-language-fortran',
                   border_color:'#263238',
                  background:'#ffffff',
                  id:21,
               
               },
               {
                  name:'Perl',
                  icon:'las la-code',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 34,
               
               },
               {
                  name:'R',
                  icon:'mdi mdi-language-r',
                   border_color:'#263238',
                  background:'#ffffff',
                   id:40,
               
               },
               {
                  name:'Ruby',
                  icon:'mdi mdi-language-ruby',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 41,
               
               },
               {
                  name:'Go',
                  icon:'mdi mdi-language-go',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 22,
               
               },
               {
                  name:'Hashkell',
                  icon:'mdi mdi-language-haskell',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 24,
               
               },
               {
                  name:'Lua',
                  icon:'mdi mdi-language-lua',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 28,
               
               },
               {
                  name:'Pascal',
                  icon:'las la-code',
                   border_color:'#263238',
                  background:'#ffffff',
                   id:33,
               
               },
               {
                  name:'TypeScript',
                  icon:'mdi mdi-language-typescript',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 46,
               
               },
               {
                  name:'Rust',
                  icon:'las la-code',
                   border_color:'#263238',
                  background:'#ffffff',
                   id:42,
               
               },
               {
                  name:'Swift',
                  icon:'lab la-swift',
                   border_color:'#263238',
                  background:'#ffffff',
                  id:45,
               
               },
                {
                  name:'Scala',
                  icon:'las la-code',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 43,
               
               },

            ],
            selectLangValue:[],
      }
    },

    mounted(){
      this.setPage();
      this.$root.challengePanelComponent = this;
      this.$root.selectedChallenge = [];
      this.fetchChallenge();
    },
    methods:{
       shareChallenge:function(){

          this.$root.shareLink =  'https://www.citonhub.com/link/challenge/'+ this.$route.params.challenge_id;

          this.$root.shareText = 'Check out this challenge on Citonhub';
          
          this.$root.infoText = 'Let others know about this challenge';

          this.$root.alertComponent = this;

          this.$root.showInvitation = true;

           

       },
       goToPanel:function(){

           let projectSlug = this.$root.selectedChallenge.participant_data.project_slug;

            this.$root.panelFromChallenges = true;

            this.$router.push({ path: '/board/projects/panel/' + projectSlug });

       },
       showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
        { 
       title: title,
       timeout:2000,
       message: message,
       zindex:'9999999999',
       position: 'bottomRigh  t',
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
         timeout:2000,
       message: message,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'question'){

       }
     


    },
    editChallenge(){
        this.$router.push({path:'/board/challenges/create/edit'})
      },
       showResults:function(type){

            this.$router.push({ path: '/board/challenges/panel/' + this.$route.params.challenge_id + '/results/' + type  });

       },
       joinChallenge:function(project){
         axios.post( '/join-challenge',{
           duel_id: this.$route.params.challenge_id,
           project_slug: project.project_slug,
           panel_id: project.panel_id
         })
      .then(response => {
      
      if (response.status == 200) {
        
      

           this.loadingJoinAction = false;

         this.$root.selectedChallenge.user_participating = true;

         this.$root.selectedChallenge.participant_data = response.data.participant;
         
             this.$root.LocalStore('challenge_data_' +  this.$route.params.challenge_id + this.$root.username,this.$root.selectedChallenge);

               let storedProjects = this.$root.getLocalStore('user_projects_'  + this.$root.username);

                storedProjects.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      this.$root.projectList = finalResult;
                      
                      this.$root.projectList.user_projects.unshift(project);

                        this.$root.LocalStore('user_projects_' + this.$root.username,this.$root.projectList);

                 }
            })

             this.loadingJoinAction = false;

             this.$router.push({ path: '/board/projects/panel/' + project.project_slug });

          
    

          

     }
       
     
     })
     .catch(error => {
    
     }) 


       },
       updateChallenge: function(){
          axios.get( '/fetch-challenge-data/' + this.$route.params.challenge_id)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('challenge_data_' +  this.$route.params.challenge_id + this.$root.username,response.data[0]);
        
     
         this.$root.selectedChallenge = response.data[0];


      
       
     }
       
     
     })
     .catch(error => {

       
    
     }) 

       }, 
       createProject(){

           this.loadingJoinAction = true;

           let language = this.languageIcon.filter((app)=>{
              return app.id == this.$root.selectedChallenge.duel_language_array;
           })

            this.selectLangValue = language[0];

           axios.post( '/create-project',{
                app_type: 'Multiple-pages',
                title:  this.$root.selectedChallenge.title,
              panel_language: this.selectLangValue.id,
                language_name: this.selectLangValue.name.toUpperCase()
                  })
             .then(response => {
             
            
            
             if (response.status == 200) {
              
               
               this.joinChallenge(response.data.project)
            
            }
              
            
           
            
          })
          .catch(error => {
              this.loadingJoinAction = false;
          })

          

       },
       startChallenge:function(){
       
       this.loadingStater = true;
             axios.post( '/start-challenge',{
                
                duelId:this.$route.params.challenge_id
                
                  })
          .then(response => {
            
           if (response.status == 200) {

             

               this.reloadChallenge();
              
              
                

            }else{
             
            }
            
            
          })
          .catch(error => {
           
          })


       },
       reloadChallenge:function(){
       axios.get( '/fetch-challenge-data/' + this.$route.params.challenge_id)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('challenge_data_' +  this.$route.params.challenge_id + this.$root.username,response.data[0]);
        
     
         this.$root.selectedChallenge = response.data[0];

           this.countDownDate = new Date(this.$root.selectedChallenge.duel_terminal_time).getTime();
            
            var  status = this.checkDuelStatus(this.$root.selectedChallenge);

          this.countDownDate = new Date(this.$root.selectedChallenge.duel_terminal_time).getTime();

           if(status == 'Active'){
              
             this.countDownDate = new Date(this.$root.selectedChallenge.duel_terminal_time).getTime();

           }
           
             this.countDownTimer();

                    
                   

         
     
         this.loadingStater= false;
       
     }
       
     
     })
     .catch(error => {

      
    
     }) 
       },
       fetchChallenge:function(){


           this.loadingChallenge  = true;

             let storedProjectData = this.$root.getLocalStore('challenge_data_' +  this.$route.params.challenge_id + this.$root.username);

            storedProjectData.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      this.$root.selectedChallenge = finalResult;

                       this.countDownDate = new Date(this.$root.selectedChallenge.duel_terminal_time).getTime();
            
            var  status = this.checkDuelStatus(this.$root.selectedChallenge);

          this.countDownDate = new Date(this.$root.selectedChallenge.duel_terminal_time).getTime();

           if(status == 'Active'){
              
             this.countDownDate = new Date(this.$root.selectedChallenge.duel_terminal_time).getTime();

           }
           
             this.countDownTimer();

                    
                   
 
                  this.loadingChallenge = false;
                
                 

               this.updateChallenge();

                 }else{
            
           
            axios.get( '/fetch-challenge-data/' + this.$route.params.challenge_id)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('challenge_data_' +  this.$route.params.challenge_id + this.$root.username,response.data[0]);
        
     
         this.$root.selectedChallenge = response.data[0];


           this.countDownDate = new Date(this.$root.selectedChallenge.duel_terminal_time).getTime();
            
            var  status = this.checkDuelStatus(this.$root.selectedChallenge);

          this.countDownDate = new Date(this.$root.selectedChallenge.duel_terminal_time).getTime();

           if(status == 'Active'){
              
             this.countDownDate = new Date(this.$root.selectedChallenge.duel_terminal_time).getTime();

           }
           
             this.countDownTimer();

                    
                   

         
     
         this.loadingChallenge = false;
       
     }
       
     
     })
     .catch(error => {

        this.loadingChallenge = false;
    
     }) 

                 }
            })

       },knowDuelStatus: function(duel){
           
           let result = this.checkDuelStatus(duel);

           if(result == 'Active' || result == 'Pending'){
                 return true;
           }else{
             return false;
           }
      },

        setPage:function(){

             if(this.$router.currentRoute.path.indexOf('description') >= 0){
                
               this.selectedTab = 'description';
             

            }

            if(this.$router.currentRoute.path.indexOf('rules') >= 0){
                
               this.selectedTab = 'rules';
               

              
            }

            if(this.$router.currentRoute.path.indexOf('judges') >= 0){
                
               this.selectedTab = 'judges';

                

              
            }

            if(this.$router.currentRoute.path.indexOf('leaderboard') >= 0){
                
               this.selectedTab = 'leaderboard';

                

              
            }

             if(this.$router.currentRoute.path.indexOf('discussion') >= 0){
                
               this.selectedTab = 'discussion';

                

              
            }



        },
          countDownTimer: function(){
           let _this = this;
          
          
          var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
        
        

  // Find the distance between now and the count down date
  var distance = _this.countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

     if(days <= 9){
         days = '0' + days
     }

     if(hours <= 9){
        hours = '0' + hours
     }

     if(minutes <= 9){
        minutes = '0' + minutes 
     }

     if(seconds <= 9){
         seconds = '0' + seconds
     }
  _this.TimerValue = days + " : " + hours + " : "
  + minutes + " : " + seconds ;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    _this.TimerValue = "00 : 00 : 00 : 00";
  }
}, 1000);
       },
        goToPage:function(page){

          
             this.$router.push({ path: '/board/challenges/panel/' +  this.$route.params.challenge_id + '/' + page });

               this.selectedTab = page;
              
        
        },

        goBack(){
  this.$router.push({ path: '/board/challenges/list'  });
        },
      imageStyleUser:function(dimension,data){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
        
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         let imgLink = data.image_name + '.' + data.image_extension;
         
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         
         
          return styleString;
      }
     },

        imageStyle: function(height,data,type){

           let styleString = ''

         if(data.background_color == null){
             if(type == 'large'){

                   styleString = "position:absolute;height:"+ height + ";top:0; left:0;width:100%;border-bottom:1px solid #c5c5c5; background-size: cover; border-top-left-radius:6px;border-top-right-radius:6px;background-repeat: no-repeat;";

             }else{
                   styleString = "position:absolute;height:" + height +  ";top:0; left:0;width:100%;border-bottom:1px solid #c5c5c5;background-size: cover; border-radius:0px;background-repeat: no-repeat;";
             }
      
         if(data.image_name == null || data.image_name == '0'){
              styleString += 'background-color:#ffffff; background-image:url(imgs/background1.jpg);';
         }else{
            
            if(data.image_name == 'default_1'){

               styleString += 'background-color:#ffffff; background-image:url(/imgs/background3.jpg);';

            }

            if(data.image_name == 'default_2'){

               styleString += 'background-color:#ffffff; background-image:url(/imgs/background1.jpg);';

            }

              if(data.image_name == 'default_3'){

               styleString += 'background-color:#ffffff; background-image:url(/imgs/imgproj2.jpeg);';

            }
          
         }
         
         return styleString;
       }else{
           if(type == 'large'){

                   styleString = "position:absolute;height:"+ height + ";top:0; left:0;width:100%;border-bottom:1px solid #c5c5c5; background-size: cover; border-top-left-radius:6px;border-top-right-radius:6px;background-repeat: no-repeat;";

             }else{
                   styleString = "position:absolute;height:" + height +  ";top:0; left:0;width:100%;border-bottom:1px solid #c5c5c5;background-size: cover; border-radius:0px;background-repeat: no-repeat;";
             }

         let imgLink = data.image_name + '.' + data.image_extension;
        
        styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/challenges/'  + imgLink  +  ');';
         
          return styleString;

      }
      },

       checkDuelStatus:function(duel){
      
      if(duel.started == 0){
         return 'Pending'
      }
             
          let now  = moment();
           let terminalDateToMoment = moment(duel.duel_terminal_time);
          
          let differenceInSeconds = terminalDateToMoment.diff(now,'seconds');

            
          if(differenceInSeconds <= 0){
             return 'Ended';
          }else{
             
            return 'Active'
          }
          
       },

      
        
    },
 
    
}
</script>
<style scoped>
.sideBar:hover{
     
      border-bottom:4px solid #3C87CD !important;
      cursor: pointer;
  }

  .scroller::-webkit-scrollbar {
  width: 6px;
}


.scroller::-webkit-scrollbar-thumb {
  background-color: #3C87CD;
  outline: 1px solid #3C87CD;
}
</style>