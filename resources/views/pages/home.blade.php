@extends('layouts.main')
@section('title')

    <title>CitonHub:Hub</title>

 @endsection
 @section('meta') 
 <meta name="description" content="A teaching platform for developers" />
  <meta name="keywords" content="Programming Duels,Developer Community,Citonhub Channels,Programming Teams" />
  <meta name="MobileOptimized" content="width" />
  <meta name="HandheldFriendly" content="true" />
  <meta name="og:image" content="https://citonhub.com/imgs/CitonHub.png"/>
  <meta property="og:description" content="Citonhub is a teaching platform for developers. Automate how you teach code" />
  <meta property='twitter:title' content="Citonhub:Hub."/>
<meta property='twitter:image' content="https://citonhub.com/imgs/CitonHub.png"/>
<meta name="twitter:card" content="summary_large_image"/>
 @endsection
 @section('css')
  
  
 <link rel="stylesheet" type="text/css" href="/css/controls.css">

<style>
 .body{
  background:whitesmoke;
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



<div class="col-lg-10  col-12 offset-lg-1 py-0" style=" border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6; display:fixed; top:0%;height:auto; background:white;  " v-show="showHeader">
    <div class="row">
    <div class="col-4 d-flex  py-1" style="border-bottom:1px solid #e6e6e6;  align-items:center; ">
    <div>
    <div  v-if="authProfile != undefined" :style="imageStyle(46,authProfile)"  
                class="pl-3 d-none d-md-block addBorder">

                  </div>

                 

                  <div  v-if="authProfile != undefined" :style="imageStyle(35,authProfile)"   @click="showNavigator"
                class="pl-3 d-block d-md-none   addBorder">

                  </div>
    </div>
      </div>
        <div style="text-align:center; border-bottom:1px solid #e6e6e6; align-items:center; justify-content:center;" class=" col-4 d-flex py-1" >
            <a href="/" class="d-none d-md-block"><img src="{{asset('imgs/CitonHub.png')}}" height="40" width="auto"/></a>
            <a href="/"  class="d-block d-md-none"><img src="{{asset('imgs/CitonHub.png')}}" height="25" width="auto"/></a>
        </div>
        
        <div style="text-align:right; border-bottom:1px solid #e6e6e6; " class="col-4 pr-2 py-0 text-right">
           
           <v-btn icon color="#3E8893"  class="mt-2"  small ><v-icon>mdi-earth </v-icon></v-btn>
       </div>
        
        
    </div>
</div>



<home></home>

<div class=" d-none d-md-none d-lg-block mx-2  py-2 " v-if="!itIsHomePage"
 style="border-radius:7px; height:80%; position:fixed; width:15%;top:10%; right:8.30%; background:transparent; border:1px solid transparent;" >

  
      
         <div  color="#ffffff"  class="col-12 px-2 py-2 mb-2 card" style="border:1px solid transparent; border-radius:10px;cursor:pointer; "  @click="showNavLink('library')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon >mdi-inbox-full-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:14px;  font-weight: bold; color:#595959;">My Library</span>
            </div>
           </div>
         </div>
         <div  color="#ffffff" class="col-12 px-2 py-2 mb-2 card"  style="border:1px solid transparent; border-radius:10px;cursor:pointer;"  @click="showNavLink('account_settings')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon >mdi-account-cog-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:14px;  font-weight: bold; color:#595959;">@{{ $t('general.Account_Setting') }}</span>
            </div>
           </div>
         </div>
         <div  color="#ffffff" class="col-12 px-2 py-2 mb-2 card" style="border:1px solid transparent; border-radius:10px;cursor:pointer;"  @click="showNavLink('privacy')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon>mdi-account-tie-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:14px; font-weight: bold; color:#595959;">@{{ $t('general.Privacy') }}</span>
            </div>
           </div>
         </div>
         <div  color="#ffffff" class="col-12 px-2 py-2 mb-2 card" style="border:1px solid transparent; border-radius:10px;cursor:pointer;"  @click="showNavLink('help')">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon>mdi-comment-question-outline</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:14px; font-weight: bold; color:#595959;">@{{ $t('general.Help') }}</span>
            </div>
           </div>
         </div>
         
      

      

        
      <div  color="#ffffff" v-if="isLogged"  @click="logout"  class="col-12 px-2 py-2 card" style="border:1px solid transparent;cursor:pointer; border-radius:10px; position:absolute;bottom:0%;">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon >mdi-logout-variant</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:14px;  font-weight: bold; color:#595959;">@{{ $t('general.logout') }}</span>
            </div>
           </div>
      </div>
  
    <div  v-else color="#ffffff"  @click="checkIfUserIsLoggedIn('space')"  class="col-12 px-2 py-2 card" style="border:1px solid transparent;cursor:pointer; border-radius:10px; position:absolute;bottom:0%;">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon >mdi-login-variant</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:14px; font-weight: bold; color:#595959;">@{{ $t('general.login') }}</span>
            </div>
           </div>
      </div>
  

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

   <script src="https://unpkg.com/marked@0.3.6"></script>

 <script src="{{ asset('js/home.js?v=1.08') }}"></script>
     
 @endsection
