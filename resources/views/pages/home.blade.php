@extends('layouts.main')
@section('title')

    <title>CitonHub:Hub</title>

 @endsection
 @section('meta') 
 <meta name="description" content="Citonhub is a community of developers where they interact,learn and build." />
  <meta name="keywords" content="Programming Duels,Developer Community,Citonhub Channels,Programming Teams" />
  <meta name="MobileOptimized" content="width" />
  <meta name="HandheldFriendly" content="true" />
  <meta name="og:image" content="https://citonhub.com/imgs/CitonHub.png"/>
 @endsection
 @section('css')
  
 <link rel="stylesheet" type="text/css" href="/css/controls.css">

<style>
 .body{
    background:#edf6f7;
  }
  html,
body {
    overscroll-behavior-y: contain;
    overflow-y:auto;
}
 </style>
  
 @endsection

 @section('content')
<div id="home" style="height:100%; width:100%;position:fixed;">

<div style="position:absolute;height:100%; width:100%; align-items:center; top:0; left:0; justify-content:center;z-index:100000;background:white;"  class=" d-flex " v-if="pageloader"> 
      <img src="/imgs/CitonHub.png" height="40" width="40" class="sliderfull">
</div>

<div  style="z-index:1000000; position:fixed; width:100%; height:auto; top:0;" v-if="pageloader">
  <div class="line"></div>
  <div class="subline inc"></div>
  <div class="subline dec"></div>
</div>



<div class="col-lg-8 col-12 offset-lg-2 py-0" style="display:fixed; top:0%;height:auto; background:white;" v-show="showHeader">
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
           
           <v-btn icon color="#3E8893"  class="mt-2"  small style="border:2px solid #3E8893; border-radius:50%;"><v-icon>mdi-translate mdi-18px</v-icon></v-btn>
       </div>
        
        
    </div>
</div>



<home></home>

<div class=" d-none d-md-none d-lg-block mx-2  py-2" 
 style="border-radius:7px; height:80%; position:fixed; width:15%;top:10%; right:16.60%; background:white; border:1px solid #b7dbe1;" >

  
      
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
         <v-card tile flat  class="col-12 px-2 py-2" style="border-bottom:1px solid #d9d9d9;"  @click="showNavLink('account_settings')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-account-cog-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">Account Settings</span>
            </div>
           </div>
         </v-card>
         <v-card tile flat  class="col-12 px-2 py-2" style="border-bottom:1px solid #d9d9d9;"  @click="showNavLink('privacy')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-account-tie-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">Privacy</span>
            </div>
           </div>
         </v-card>
         <v-card tile flat  class="col-12 px-2 py-2" style="border-bottom:1px solid #d9d9d9;"  @click="showNavLink('help')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-comment-question-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">Help</span>
            </div>
           </div>
         </v-card>
         
      

      

         @if(Auth::check())
      <v-card tile flat  @click="logout"  class="col-12 px-2 py-2" style="border-top:1px solid #d9d9d9; border-bottom-left-radius:7px; border-bottom-right-radius:7px; position:absolute;bottom:0%;">
           <div class="row py-0" >
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-logout-variant</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">Logout</span>
            </div>
           </div>
      </v-card>
    @else
    <v-card tile flat  @click="checkIfUserIsLoggedIn('home')"  class="col-12 px-2 py-2" style="border-top:1px solid #d9d9d9; border-bottom-left-radius:7px; border-bottom-right-radius:7px; position:absolute;bottom:0%;">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-login-variant</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">Login</span>
            </div>
           </div>
      </v-card>
    @endif

</div>


<v-app class="col-12 px-0 py-0 d-lg-none d-block" style="background:transparent; z-index:10999; font-family:BodyText; position:absolute;" v-if="drawer">
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
          @if(Auth::check())
          <div class="row py-0" @click="showNavLink('profile')">
           <div class="col-12 py-0 my-0">
           <div style="font-size:13px; font-family:HeaderText;" >@{{ authProfile.name }}</div>
           <div style="font-size:11px; color:#4d4d4d;" >@{{  '@' + authProfile.username }}</div>
           </div>
          </div>
          @else
          <div class="row py-0">
           <div class="col-12 py-0 my-0">
           <div style="font-size:13px; font-family:HeaderText;" >Name</div>
           <div style="font-size:11px; color:#4d4d4d;" >@username</div>
           </div>
          </div>
          @endif
           
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
         <v-card tile flat  class="col-12 px-2 py-2" style="border-bottom:1px solid #d9d9d9;" @click="showNavLink('duel_list')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-layers</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">Duel List</span>
            </div>
           </div>
         </v-card>
         <v-card tile flat  class="col-12 px-2 py-2" style="border-bottom:1px solid #d9d9d9;" @click="showNavLink('account_settings')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-account-cog-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">Account Settings</span>
            </div>
           </div>
         </v-card>
         <v-card tile flat  class="col-12 px-2 py-2" style="border-bottom:1px solid #d9d9d9;" @click="showNavLink('privacy')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-account-tie-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">Privacy</span>
            </div>
           </div>
         </v-card>
         <v-card tile flat  class="col-12 px-2 py-2" style="border-bottom:1px solid #d9d9d9;"  @click="showNavLink('help')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-comment-question-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">Help</span>
            </div>
           </div>
         </v-card>
         
       </div>

      </div>

      @if(Auth::check())
      <v-card tile flat  class="col-12 px-2 py-2" style="border-top:1px solid #d9d9d9; position:absolute;bottom:0%;" @click="logout">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-logout-variant</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">Logout</span>
            </div>
           </div>
      </v-card>
    @else
    <v-card tile flat  class="col-12 px-2 py-2" style="border-top:1px solid #d9d9d9; position:absolute;bottom:0%;" @click="checkIfUserIsLoggedIn('home')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon color="#3E8893">mdi-login-variant</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:12px; color:#333333;">Login</span>
            </div>
           </div>
      </v-card>
    @endif

     

      <v-list dense>

       
      </v-list>
    </v-navigation-drawer>
</v-app>

<form id="logout-form" action="/logout" method="POST" style="display: none;">
@csrf
                                              </form>
<div v-if="!drawer">
 @include('shared.tabs')
 </div>
</div>
 @endsection

 @section('scripts')


 <script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
  
  <script src="{{ asset('js/shaka-player.compiled.js') }}"></script>

   <!-- Shaka Player ui compiled library: -->
   <script src="{{ asset('js/shaka-player.ui.js') }}"></script>

   <!-- Chromecast SDK  -->
   <script defer src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"></script>

 <script src="{{ asset('js/home.js?v=0.84') }}"></script>
     
 @endsection
