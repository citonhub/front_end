@extends('layouts.space')
@section('title')

    <title>CitonHub</title>

 @endsection
 @section('meta') 
 <meta name="description" content="A messaging platform for developer communities. Chat, share codes, live code and build projects in your Space. Create an account or log in to get started." />
  <meta name="keywords" content="Share codes, build projects,Programming Duels,Developer Community,Citonhub Channels,Citonhub Space,Programming Teams" />
  <meta name="MobileOptimized" content="width" />
  <meta name="HandheldFriendly" content="true" />
  <meta name="og:image" content="https://citonhub.com/imgs/CitonHub.png"/>
  <!--Metadata for Apple-->
  <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="white">
    <meta name="apple-mobile-web-app-title" content="CitonHub">
    <link rel="apple-touch-icon" href="imagesNew/icons/icon-144x144.png">
    <!--Metadata for Microsoft-->
    <meta name="msapplication-TileImage" content="imagesNew/icons/icon-144x144.png">
    <meta name="msapplication-TileColor" content="#4495a2">
 @endsection
 @section('css')
  <!-- Shaka Player ui compiled library default CSS: -->

  <link rel="stylesheet" type="text/css" href="/css/getHTMLMediaElement.css?v=1.2">
    <link rel="stylesheet" type="text/css" href="/css/controls.css">


<style>
.body{
    background:#ffffff;
  }

html,
body {
    overscroll-behavior-y: contain;
}
 </style>
  
 @endsection

 @section('content')
<div id="space" style="height:100%; width:100%;position:fixed;">
<div  style="z-index:1000000; position:fixed; width:100%; height:auto; top:0;" v-if="pageloader">
  <div class="line"></div>
  <div class="subline inc"></div>
  <div class="subline dec"></div>
</div>
<div style="position:absolute;height:100%; width:100%; align-items:center; top:0; left:0; justify-content:center;z-index:100000;background:white;"  class=" d-flex " v-if="pageloader"> 
      <div class="text-center">
      <img src="/imgs/CitonHub.png" height="40" width="40" class="sliderfull d-block">
     
      </div>

     
</div>


    
      <img src="/imgs/background1.png"  style="position:absolute;height:50%; width:100%; align-items:center; bottom:0%; left:0;"  >

      <img src="/imgs/top.png"  style="position:absolute;height:17%; width:20%; align-items:center; top:0%; right:0;"  >
     
     



            
<div class="col-lg-10 col-12 offset-lg-1 py-0" style="display:fixed; top:0%;height:auto; background:white; border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6; " v-show="showHeader"> 
    <div class="row">
    <div class="col-4 d-flex  py-1" style="border-bottom:1px solid #e6e6e6;  align-items:center; ">
    <div>
    <div  v-if="authProfile != undefined" :style="imageStyle(46,authProfile)"   @click="showNavigator"
                class="pl-3 d-none d-md-block addBorder">

                  </div>

                  <div  v-if="authProfile != undefined" :style="imageStyle(35,authProfile)"   @click="showNavigator"
                  class="pl-3 d-block d-md-none addBorder">

                  </div>
    </div>
      </div>
        <div style="text-align:center; border-bottom:1px solid #e6e6e6; align-items:center; justify-content:center;" class=" col-4 d-flex py-1" >
            <a href="/" class="d-none d-md-block"><img src="{{asset('imgs/CitonHub.png')}}" height="40" width="auto"/></a>
            <a href="/"  class="d-block d-md-none"><img src="{{asset('imgs/CitonHub.png')}}" height="25" width="auto"/></a>
        </div>
        
        <div style="text-align:right; border-bottom:1px solid #e6e6e6; " class="col-4 pr-2 py-0 text-right">
           
            <v-btn icon color="#3E8893"  @click="showLangOption = true" class="mt-2"  small style="border:2px solid #3E8893; border-radius:50%;"><v-icon>mdi-translate mdi-18px</v-icon></v-btn>
        </div>
        
    </div>
</div>
 

<space></space>


<div   v-if="showLangOption" @click="showLangOption = false" style="position:fixed;  height:100%; background:rgba(38, 82, 89,0.5); overflow-y:hidden; overflow-x:hidden; left:0%; top:0%; align-items:center; justify-content:center; z-index:99999;" class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-2 my-0 px-0 d-flex ">
           <div  @click.stop="showLangOption = true" style="position:absolute; height:auto; width:90%; bottom:50%; left:5%; overflow-y:hidden; overflow-x:hidden; " class="mx-auto pb-2">

             <v-card style="border-radius:10px;"
       height="auto"
      
       class="py-2 px-1" >

            <v-card tile flat class="text-center py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;" @click="changeLocale('en')">

            <span style="font-size:13px;">@{{ $t('general.english') }}</span>

            </v-card>

             <v-card tile flat class="text-center py-2" style="border-radius:0px;"  @click="changeLocale('fr')">

             <span style="font-size:13px;">@{{ $t('general.french') }}</span>

            </v-card>
            
             </v-card>

           </div>
         </div>



<div class=" d-none d-md-none d-lg-block mx-2  py-2" 
 style="border-radius:7px; height:80%; position:fixed; width:15%;top:10%; right:8.30%; background:#ffffff; border:1px solid #c5c5c5;" >

  
      
         <v-card tile flat color="#ffffff"  class="col-12 px-2 py-2" style="border-bottom:1px solid #c5c5c5;"  @click="showNavLink('library')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon >mdi-inbox-full-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:14px;  font-weight: bold; color:#595959;">My Library</span>
            </div>
           </div>
         </v-card>
         <v-card tile flat color="#ffffff" class="col-12 px-2 py-2" style="border-bottom:1px solid #c5c5c5;"  @click="showNavLink('account_settings')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon >mdi-account-cog-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:14px;  font-weight: bold; color:#595959;">@{{ $t('general.Account_Setting') }}</span>
            </div>
           </div>
         </v-card>
         <v-card tile flat color="#ffffff" class="col-12 px-2 py-2" style="border-bottom:1px solid #c5c5c5;"  @click="showNavLink('privacy')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon>mdi-account-tie-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:14px; font-weight: bold; color:#595959;">@{{ $t('general.Privacy') }}</span>
            </div>
           </div>
         </v-card>
         <v-card tile flat color="#ffffff" class="col-12 px-2 py-2" style="border-bottom:1px solid #c5c5c5;"  @click="showNavLink('help')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon>mdi-comment-question-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:14px; font-weight: bold; color:#595959;">@{{ $t('general.Help') }}</span>
            </div>
           </div>
         </v-card>
         
      

      

        
      <v-card tile flat color="#ffffff" v-if="isLogged"  @click="logout"  class="col-12 px-2 py-2" style="border-top:1px solid #c5c5c5; border-bottom-left-radius:7px; border-bottom-right-radius:7px; position:absolute;bottom:0%;">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon >mdi-logout-variant</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:14px;  font-weight: bold; color:#595959;">@{{ $t('general.logout') }}</span>
            </div>
           </div>
      </v-card>
  
    <v-card  v-else tile flat color="#ffffff"  @click="checkIfUserIsLoggedIn('space')"  class="col-12 px-2 py-2" style="border-top:1px solid #c5c5c5; border-bottom-left-radius:7px; border-bottom-right-radius:7px; position:absolute;bottom:0%;">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon >mdi-login-variant</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:14px; font-weight: bold; color:#595959;">@{{ $t('general.login') }}</span>
            </div>
           </div>
      </v-card>
  

</div>


<div class="col-12 px-0 py-0 d-lg-none d-block" style="background:transparent; z-index:1999; font-family:BodyText; bottom:0;" v-if="drawer">
 <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      
    >
      <div class="col-12 py-2 px-2" style="border-bottom:1px solid #c5c5c5;">
           <div class="row py-0 my-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
            <div>
    <div  v-if="authProfile != undefined" :style="imageStyle(46,authProfile)"  
                class="pl-3 d-none d-md-block">

                  </div>

                  <div  v-if="authProfile != undefined" :style="imageStyle(35,authProfile)"  
                  class="pl-3 d-block d-md-none">

                  </div>
    </div>
            </div>

          <div class="col-9 py-0 d-flex px-1" style="align-items:center;" >
          
          <div class="row py-0" @click="showNavLink('profile')" v-if="isLogged">
           <div class="col-12 py-0 my-0">
           <div style="font-size:13px; font-family:HeaderText;" >@{{ authProfile.name }}</div>
           <div style="font-size:11px; color:#4d4d4d;" >@{{  '@' + authProfile.username }}</div>
           </div>
          </div>
         
          <div class="row py-0"  v-else>
           <div class="col-12 py-0 my-0">
           <div style="font-size:13px; font-family:HeaderText;" >Name</div>
           <div style="font-size:11px; color:#4d4d4d;" >@username</div>
           </div>
          </div>
         
           
          </div>
          
           </div>   
      </div>

      <div class="col-12 py-3 px-0">
       <div class="row py-0 my-0" >
        
         <v-card tile flat  class="col-12 px-2 py-2" style="border-bottom:1px solid #d9d9d9;" @click="showNavLink('library')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-inbox-full-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">My Library</span>
            </div>
           </div>
         </v-card>
         <v-card tile flat  class="col-12 px-2 py-2" style="border-bottom:1px solid #d9d9d9;" @click="showNavLink('account_settings')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-account-cog-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">@{{ $t('general.Account_Setting') }}</span>
            </div>
           </div>
         </v-card>
         <v-card tile flat  class="col-12 px-2 py-2" style="border-bottom:1px solid #d9d9d9;" @click="showNavLink('privacy')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-account-tie-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">@{{ $t('general.Privacy') }}</span>
            </div>
           </div>
         </v-card>
         <v-card tile flat  class="col-12 px-2 py-2" style="border-bottom:1px solid #d9d9d9;"  @click="showNavLink('help')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-comment-question-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">@{{ $t('general.Help') }}</span>
            </div>
           </div>
         </v-card>
         
       </div>

      </div>

    
      <v-card tile flat v-if="isLogged" class="col-12 px-2 py-2" style="border-top:1px solid #d9d9d9; position:absolute;bottom:0%;" @click="logout">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-logout-variant</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">@{{ $t('general.logout') }}</span>
            </div>
           </div>
      </v-card>
   
    <v-card  v-else tile flat  class="col-12 px-2 py-2" style="border-top:1px solid #d9d9d9; position:absolute;bottom:0%;" @click="checkIfUserIsLoggedIn('space')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-login-variant</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">@{{ $t('general.login') }}</span>
            </div>
           </div>
      </v-card>
   

     

     
    </v-navigation-drawer>
</div>

<form id="logout-form" action="/logout" method="POST" style="display: none;">
@csrf
                                              </form>

 <div v-if="!drawer">
 @include('shared.tabs')
 </div>


</div>
 @endsection

 @section('scripts')

 
 <script src="{{ asset('js/RTCMultiConnection.min.js') }}"></script>



 <script src="{{ asset('js/getHTMLMediaElement.js?v=0.5') }}"></script>



 <script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
  
  <script src="{{ asset('js/shaka-player.compiled.js') }}"></script>

   <!-- Shaka Player ui compiled library: -->
   <script src="{{ asset('js/shaka-player.ui.js') }}"></script>

   <!-- Chromecast SDK  -->
   <script defer src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"></script>

   <script src="https://cdn.webrtc-experiment.com/hark.js"></script>

   <script src="https://unpkg.com/marked@0.3.6"></script>

 <script src="{{ asset('js/space.js?v=5.45') }}"></script>
 
     
 @endsection
