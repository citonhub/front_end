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
    <link rel="apple-touch-icon" href="images/icons/logo_msapplication-icon-144x144.png">
    <!--Metadata for Microsoft-->
    <meta name="msapplication-TileImage" content="images/icons/logo_msapplication-icon-144x144.png">
    <meta name="msapplication-TileColor" content="#3C87CD">
    <meta property="og:description" content="Join other developers helping each other grow on CitonHub" />
    <meta property='twitter:title' content="CitonHub:Teach, mentor, and connect with other developers"/>
<meta property='twitter:image' content="https://citonhub.com/imgs/logo.png"/>
<meta name="twitter:card" content="summary_large_image"/>


 @endsection
 @section('css')
 
  <!-- Line awesome icon: -->
  <link rel="stylesheet" type="text/css" href="/css/line-awesome.min.css">
  <!-- ends -->
  

 <style>
.box{
  background: #3C87CD;

}
 </style>
  
 @endsection

 @section('content')


<div id="home" class="py-1" style="background-image:url('/imgs/backgroundHome.png');background-repeat:no-reapeat;">
   
<!-- Headers -->
<div class="col-12 fixed-top py-3 px-md-4 px-3"  >
<div class="row">

<!-- Logo -->
 <div class="col-4 text-left d-flex">
 
 <img alt="citonhub logo" class="d-lg-block d-none" src="/imgs/logo.png" height="40px">

 <img alt="citonhub logo" class="d-lg-none d-block" src="/imgs/logo.png" height="35px">
 <a href="https://blog.citonhub.com"  target="_blank" class="linkStyle mx-3 mt-2" style="color:#000000;">Blog</a>
 </div>

 <!-- Sign up, register button -->
 <div class="col-8 text-right pt-1 d-lg-block d-none" >


 <a href="/dashboard#/login"  class="linkStyle mx-3"  style="color:#000000;"> Login</a>
 
 <a href="/dashboard#/sign-up" class="homeButton mx-2 px-3 py-2">Sign Up</a>

 </div>

 

</div>


</div>

<!-- Teach , learn and connect -->

<div class="col-lg-12 text-center  d-none d-lg-block flex-column " style=" align-items:center; justify-content:center; margin-top:140px;margin-bottom:100px;">
   
   <div class="px-5 mt-4 " style="width:100%;">
     <h1 style="font-family:HeaderFont;" class="mb-3 mt-4">Teach, Learn, and connect</h1>
   
     <p style="font-size:20px;">with other developers.</p>

     <div class="py-2 px-0 mt-3 col-12">
      <div class="row offset-5">

      <a href="/dashboard#/sign-up" class="homeButton mx-3 px-5 py-3 ">Get Started</a>
      
     <!--a href="/dashboard#/login" class="homeButtonOutline mx-3 px-5 py-3">Login</a>-->
      
       
     
      
      </div>
   
     </div>
   </div>

</div>
<!-- wallet section-->
<div class="wallet-option " style="width:100%;height:750px;margin-top:150px;">
<img src="imgs/topbg.png" alt="" width="100%" height="100%">
<img src="imgs/credit-vector.png" alt="" style="position:absolute;z-index:1;left:25%;top:340px;">
<p class="text-center"  style="position:absolute;z-index:1;left:38%;top:840px;color:white;">Grow developer communities and earn <br> from paid sessions and paid communities.</p>
</div>
<!--ends-->

<!--collaborate section-->
<div class="collab col-lg-12 py-0">
<img src="imgs/collab.png" class="offset-2"  alt="">

<p class="text-center mt-4" style="font-weight:bold;font-size:1.2rem;">Collaborate with other developers on <br> a variety of projects</p>
</div>


<!--ends-->

<!--teach and mentor section-->

<div class="teach" style="width:100%;height:750px;margin-top:150px;">
<img src="imgs/topbg.png" alt="" width="100%" height="100%">

<p class="text-center"  style="position:absolute;z-index:1;left:38%;top:2300px;color:white;font-size:1.2rem;">Teach and mentor upcoming developers </p>
</div>

<!--ends-->

<!--features section-->

<div class="features col-lg-12 px-0">

<h2 style="font-weight:bold;" class="text-center">Features</h2>

<div  class="all-features mt-4 col-lg-8 offset-lg-2 d-flex ">

<div class="col-lg-4 ml-4">
<div class="box shadow" style="height:170px;width:170px;"></div>
</div>

<div class="col-lg-4">
<div class="box " style="height:170px;width:170px;margin-left:10%;"></div>
</div>

<div class="col-lg-4 ml-4">
<div class="box" style="height:170px;width:170px;"></div>
</div>
</div>

<div  class="all-features mt-4 col-lg-8 offset-lg-2 d-flex ">

<div class="col-lg-4 ml-4">
<div class="box" style="height:170px;width:170px;"></div>
</div>

<div class="col-lg-4">
<div class="box " style="height:170px;width:170px;margin-left:10%;"></div>
</div>

<div class="col-lg-4 ml-4">
<div class="box" style="height:170px;width:170px;"></div>
</div>
</div>
</div>

<!--ends-->

<p class="mt-4">gggg</p>

</div>
 @endsection

 @section('scripts')

<!-- The main compiled script for this page  -->
<script src="{{ asset('js/app.js?v=0.11') }}"></script>
 <!-- ends -->
 @endsection
