@extends('layouts.duels')
@section('title')

    <title>CitonHub:Dashboard</title>

 @endsection
 @section('meta') 
 <meta name="description" content="A teaching platform for developers" />
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
    <meta property="og:description" content="A teaching platform for developers" />
    <meta property='twitter:title' content="Citonhub:Dashboard"/>
<meta property='twitter:image' content="https://citonhub.com/imgs/CitonHub.png"/>
<meta name="twitter:card" content="summary_large_image"/>
 @endsection
 
 @section('css')
  
<style>
   .body{
    background:whitesmoke;
  }
  html,
body {
    overscroll-behavior-y: contain;
}
 </style>
  
 @endsection

 @section('content')
 <!-- this contains all that is shown in the dahsboard tab -->

  <!-- fixed page loader shown while the page script is still loading -->
<div id="dashboard" style="height:100%; width:100%;position:fixed;">
<div  style="z-index:1000000; position:fixed; width:100%; height:auto; top:0;" v-if="pageloader">
  <div class="line"></div>
  <div class="subline inc"></div>
  <div class="subline dec"></div>
</div>
<div style="position:absolute;height:100%; width:100%; align-items:center; top:0; left:0; justify-content:center;z-index:100000;background:white;"  class=" d-flex " v-if="pageloader"> 
      <img src="/imgs/CitonHub.png" height="40" width="40" class="sliderfull">
</div>
<!-- ends -->


 <!-- the header bar of the page -->
<div class="col-lg-10 col-12 offset-lg-1 py-0" style="display:fixed; top:0%;height:auto; background:white; border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;" v-show="showHeader">
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
           
           <v-btn icon color="#3E8893"  @click="showLangOption = true" class="mt-2"  small ><v-icon>mdi-earth </v-icon></v-btn>
       </div>
        
    </div>
</div>
<!-- ends -->

<!-- The dashboard component, this is where all other vue components are pulled in  -->
<dashboard></dashboard>
<!-- ends -->


<!-- This is the language modal, for switching btw languages -->
<div   v-if="showLangOption" @click="showLangOption = false" style="position:fixed;  height:100%; background:rgba(38, 82, 89,0.5); overflow-y:hidden; overflow-x:hidden; left:0%; top:0%; align-items:center; justify-content:center; z-index:99999;" class=" col-lg-6 offset-lg-3 py-2 my-0 px-0 d-flex ">
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

<!-- ends -->

<!-- The large(system view)  rigth side navigator-->
         <div class=" d-none d-md-none d-lg-block mx-2  py-2 "  v-if="!itIsHomePage"
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
         
      

      

        
      <div  color="#ffffff" v-if="isLogged"  @click="logout"  class="col-12 px-2 py-2 card" style="border:1px solid transparent; cursor:pointer; border-radius:10px; position:absolute;bottom:0%;">
           <div class="row py-0">
            <div class="col-3 py-0 d-flex" style="align-items:center; justify-content:center;">
                <v-icon >mdi-logout-variant</v-icon>
            </div>
            <div class="col-9 py-0 d-flex" style="align-items:center;">
               <span style="font-size:14px;  font-weight: bold; color:#595959;">@{{ $t('general.logout') }}</span>
            </div>
           </div>
      </div>
  
    <div  v-else color="#ffffff"  @click="checkIfUserIsLoggedIn('space')"  class="col-12 px-2 py-2 card" style="border:1px solid transparent; cursor:pointer; border-radius:10px; position:absolute;bottom:0%;">
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
<!-- ends -->

<!-- The navigator drawer for medium and small screen devices -->
<v-app class="col-12 px-0 py-0 d-lg-none d-block" style="background:transparent; z-index:10999; font-family:BodyText; position:absolute;" v-if="drawer">
<v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <div class="col-12 py-2 px-2" style="border-bottom:1px solid #c5c5c5;">
           <div class="row py-0 my-0" >
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
</v-app>
<!-- ends -->

<!-- This includes the global navigation tabs, fixed on the left for large screens and fixed to bottom for smaller screens -->
<div v-if="!drawer">
 @include('shared.tabs')
 </div>
<!-- ends -->
</div>
 @endsection


 @section('scripts')

<!-- Third-party script for markdown formating -->
<script src="https://unpkg.com/marked@0.3.6"></script>
<!-- ends -->

 <!-- The main compiled script for this page  -->
<script src="{{ asset('js/dashboard.js?v=2.04') }}"></script>
<!-- ends -->
 @endsection