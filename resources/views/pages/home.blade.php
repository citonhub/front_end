@extends('layouts.home')
@section('title')

    <title>CitonHub:Home</title>

 @endsection
 @section('meta') 
 <meta name="description" content="Teach, mentor, and connect with other developers" />
  <meta name="keywords" content="Teach programming,Share codes, build projects,Programming Duels,Developer Community,Citonhub Channels,Citonhub Space,Programming Teams" />
  <meta name="MobileOptimized" content="width" />
  <meta name="HandheldFriendly" content="true" />
  <meta name="og:image" content="https://citonhub.com/imgs/logo.png"/>
  <!--Metadata for Apple-->
  <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="white">
    <meta name="apple-mobile-web-app-title" content="CitonHub">
    <link rel="apple-touch-icon" href="images/icons/msapplication_icon_144x144.png">
    <!--Metadata for Microsoft-->
    <meta name="msapplication-TileImage" content="images/icons/msapplication_icon_144x144.png">
    <meta name="msapplication-TileColor" content="#3C87CD">
    <meta property="og:description" content="Teach, mentor, and connect with other developers" />
    <meta property='twitter:title' content="CitonHub:Teach, mentor, and connect with other developers"/>
<meta property='twitter:image' content="https://citonhub.com/imgs/logo.png"/>
<meta name="twitter:card" content="summary_large_image"/>


 @endsection
 @section('css')
 
  <!-- Line awesome icon: -->
  <link rel="stylesheet" type="text/css" href="/css/line-awesome.min.css">
  <!-- ends -->
  

 <style>

 </style>
  
 @endsection

 @section('content')
<div id="home">

 <!-- Headers -->
 <div class="col-12 fixed-top py-3 px-md-4 px-3" >
<div class="row">

<!-- Logo -->
 <div class="col-4 text-left">
 
 <img alt="citonhub logo" class="d-lg-block d-none" src="/imgs/logo.png" height="40px">

 <img alt="citonhub logo" class="d-lg-none d-block" src="/imgs/logo.png" height="35px">
 </div>

 <!-- Sign up, register button -->
 <div class="col-8 text-right pt-1 d-lg-block d-none" >
 <a href="https://blog.citonhub.com"  target="_blank" class="linkStyle mx-3 " style="color:#000000;">Blog</a>

 <a href="/dashboard#/login"  class="linkStyle mx-3"  style="color:#000000;"> Login</a>
 
 <a href="/dashboard#/sign-up" class="homeButton mx-2 px-3 py-2">Sign Up</a>

 </div>

 <div class="col-8 text-right pt-1 d-lg-none d-block pr-1" >


 </div>


</div>
</div>
<!-- ends -->

<!-- Teach , learn and connect -->

<div class="col-lg-6  d-none d-lg-flex flex-column" style="position:fixed; align-items:center; justify-content:center;  height:75%; top:8%; z-index:20;">
   
   <div class="px-5 " style="width:80%;">
     <h1 style="font-family:HeaderFont;" class="mb-3">Teach, mentor, and connect with other developers</h1>
   
     <p style="font-size:20px;color:grey;">Join other developers helping each other grow on CitonHub.</p>

     <div class="py-2 px-0 mt-3 col-12">
      <div class="row">

      <a href="/dashboard#/sign-up" class="homeButton mx-3 px-5 py-3">Sign Up</a>
      
      <a href="/dashboard#/login" class="homeButtonOutline mx-3 px-5 py-3">Login</a>
      
       
     
      
      </div>
   
     </div>
   </div>

</div>

<div class="d-lg-none d-block col-12 " style="position:fixed; left:0%; height:60%; top:13%; z-index:80;">
<div class=" text-center">

<h5 style="font-family:HeaderFont;" class="mb-2">Teach, mentor, and connect with other developers</h5>
   
   <p style="font-size:15px;color:grey;" class="px-4">Join other developers helping each other grow on CitonHub.</p>

    
      <div class="mt-3">

      <a href="/dashboard#/sign-up" class="homeButton  px-4 py-2 mx-1" style="font-size:13px;">Sign Up</a>

      <a href="/dashboard#/login" class="homeButtonOutline  px-4 py-2 mx-1" style="font-size:13px;">Login</a>

      
     
       
      </div>

  </div> 
</div>

<!-- ends -->


<!-- bottom text -->
<div class="col-12 d-lg-block d-none" style="position:fixed; right:0%; height:auto; bottom:3%; z-index:83;">
   
  
  <div class="row">
     <div class="col-4 pl-4 pt-2 text-center">

     <span  class="linkStyle mx-2"  style="color:#ffffff;"> &copy; CitonHub 2020</span>
       
     </div>

      <div class="col-4 pl-4 py-2 text-center">

      <a href="https://twitter.com/citonhub" target="_blank" class="linkStyle mx-2"  style="color:#ffffff;"><i style="font-size:35px;" class="lab la-twitter"></i></a>

     <a href="https://www.youtube.com/channel/UCODtu7pKNlZiIZM9-ZByC4g" target="_blank" class="linkStyle mx-2 "  style="color:#ffffff;"><i style="font-size:35px;" class="lab la-youtube"></i></a>
       
     </div>

     <div class="col-4 text-center pt-2">
    
    


     <a href="/contact-us" class="linkStyle mx-3"  style="color:#ffffff;"> Contact Us</a>

     <a href="/terms-of-use" class="linkStyle mx-3"  style="color:#ffffff;"> Terms of Use</a>

     <a href="/privacy-policy" class="linkStyle mx-3"  style="color:#ffffff;"> Privacy Policy</a>

     </div>
  </div>
  

</div>

<div class="col-12 d-lg-none d-block text-left" style="position:fixed; right:0%; height:auto; bottom:1%; z-index:83;">
   
   <div class="row">
    <!-- layer 1 -->
      <div class="col-6">

      
      
      </div>
      <div class="col-6">
      <a href="https://blog.citonhub.com" target="_blank" class="linkStyle mx-1"  style="color:#ffffff; font-size:13px;"> Blog</a>
      </div>

   <!-- ends -->

    <!-- layer 2 -->
    <div class="col-6">
      
      </div>
      <div class="col-6">
      <a href="/contact-us" class="linkStyle mx-1"  style="color:#ffffff;font-size:13px;"> Contact Us</a>
      </div>

   <!-- ends -->

    <!-- layer 3 -->
    <div class="col-6">

    <a href="https://twitter.com/citonhub" target="_blank" class="linkStyle mx-1 "  style="color:#ffffff;"><i style="font-size:20px;" class="lab la-twitter"></i></a>

    <a href="https://www.youtube.com/channel/UCODtu7pKNlZiIZM9-ZByC4g" target="_blank" class="linkStyle mx-1 "  style="color:#ffffff;"><i style="font-size:20px;" class="lab la-youtube"></i></a>
      </div>
      <div class="col-6">
      <a href="/terms-of-use" class="linkStyle mx-1"  style="color:#ffffff;font-size:13px;"> Terms of Use</a>
      </div>

   <!-- ends -->

    <!-- layer 4 -->
    <div class="col-6">
      <span class="linkStyle mx-1"  style="color:#ffffff;font-size:13px;">&copy; CitonHub 2020</span>
      </div>
      <div class="col-6">
      <a href="/privacy-policy" class="linkStyle mx-1"  style="color:#ffffff;font-size:13px;"> Privacy Policy</a>
      </div>

   <!-- ends -->
   </div>
  
  

</div>
<!-- ends -->

<!-- programmer illustration -->
<div class="col-lg-6 d-lg-block d-none" style="position:fixed; right:0%; height:60%; top:20%; z-index:80;">
   
  
   <img src="imgs/homemain.png" height="100%" width="80%">
  

</div>

<div class="col-lg-6 d-lg-none d-block text-center" style="position:fixed; right:0%; left:0%; height:58%; bottom:0%; z-index:70;">
   
  
   <img src="imgs/homemain.png" height="70%" width="80%">
  

</div>
<!-- ends -->


<!-- bottom background image -->
<div style="position:fixed;width:100%; height:26%; bottom:0; z-index:20;" class="d-lg-block d-none">
<img src="imgs/bottomLg.png" height="100%" width="100%">
</div>

<div  style="position:fixed;width:100%; height:20%; bottom:0; z-index:20;" class="d-lg-none d-block">
<img src="imgs/bottomSm.png" height="100%" width="100%">
</div>
<!-- ends -->

<!-- Main background image -->
<div style="position:fixed;width:100%; height:100%;opacity: 0.5;" class="d-lg-block d-none">
<img src="imgs/backgroundHome.png" height="100%" width="100%">
</div>

<div style="position:fixed;width:100%; height:100%; left:-425px; top:-5px; opacity: 0.5;" class="d-lg-none d-block">
<img src="imgs/backgroundHome.png" height="817px" width="1226px">
</div>
<!-- ends -->

</div>




 @endsection

 @section('scripts')

<!-- The main compiled script for this page  -->
<script src="{{ asset('js/app.js?v=0.10') }}"></script>
 <!-- ends -->
 @endsection
