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
  display:flex;
  justify-content:center;
  align-items:center;

}


 </style>
  
 @endsection

 @section('content')


<div id="home" class="py-1 col-12 px-0" style="background-image:url('/imgs/backgroundHome.png');background-repeat:no-reapeat;">
   
<!-- Headers -->
<div class="col-12 fixed-top py-3 px-md-4 px-3"  >
<div class="row">

<!-- Logo -->
 <div class="col-4 text-left ">
 
 <img alt="citonhub logo" class="d-lg-block d-none" src="/imgs/logo.png" height="40px">

 <img alt="citonhub logo" class="d-lg-none d-block" src="/imgs/logo.png" height="35px">
 
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
      <div class="row offset-lg-5">

      <a href="/dashboard#/sign-up" class="homeButton ml-2 py-3 col-lg-3 ">Get Started</a>
      
     <!--a href="/dashboard#/login" class="homeButtonOutline mx-3 px-5 py-3">Login</a>-->
      
       
     
      
      </div>
   
     </div>
   </div>

</div>


<div class="d-lg-none d-block  " style="width:100%; margin-top:90px;">
<div class=" text-center">

<h4 style="font-family:HeaderFont;" class="mb-2">Teach, Learn, and connect</h4>
   
   <p style="font-size:20px;" class="px-4">with other developers.</p>

    
      <div class="mt-3">

      <a href="/dashboard#/sign-up" class="homeButton  px-4 py-2 mx-1" style="font-size:13px;">Get Started</a>

     

      
     
       
      </div>

  </div> 
</div>

<!--ends-->
<!-- wallet section-->
<div class="wallet-option d-lg-block d-none " style="width:100%;height:750px;margin-top:150px;">
<img src="imgs/topbg.png" alt="" width="100%" height="100%">
<img src="imgs/credit-vector.png" alt="" style="position:absolute;z-index:1;left:25%;top:340px;">
<p class="text-center"  style="position:absolute;z-index:1;left:38%;top:840px;color:white;">Grow developer communities and earn <br> from paid sessions and paid communities.</p>

</div>

<div class="wallet-option d-lg-none d-md-block d-none col-12 px-0" style="width:100%;height:600px;margin-top:150px;">
<img src="imgs/topbg.png" alt="" width="100%" height="100%">
<img src="imgs/credit-vector.png"  alt="" style="position:absolute;z-index:1;left:22%;top:-150px;">
<p class="text-center"  style="position:absolute;z-index:1;left:38%;top:350px;color:white;">Grow developer communities and earn <br> from paid sessions and paid communities.</p>

</div>

<div class="wallet-option d-lg-none d-md-none d-sm-block d-none col-12 px-0" style="width:100%;height:400px;margin-top:150px;">
<img src="imgs/topbg.png" alt="" width="100%" height="100%">
<img src="imgs/credit-vector.png"  alt="" style="position:absolute;z-index:1;left:22%;top:-150px;width:450px;height:330px;">
<p class="text-center"  style="position:absolute;z-index:1;left:33%;top:200px;color:white;">Grow developer communities and earn <br> from paid sessions and paid communities.</p>

</div>

<div class="wallet-option d-lg-none d-md-none d-sm-none d-block col-12 px-0" style="width:100%;height:450px;margin-top:130px;">
<img src="imgs/topbg.png" alt="" width="100%" height="100%">
<img src="imgs/credit-vector.png"  alt="" style="position:absolute;z-index:1;left:-5%;top:-90px;width:450px;height:330px;">
<p class="text-center"  style="position:absolute;z-index:1;left:13%;top:260px;color:white;">Grow developer communities and earn <br> from paid sessions and paid communities.</p>

</div>

<!--ends-->

<!--collaborate section-->
<div class="collab col-lg-12 d-lg-block d-none py-0">
<img src="imgs/collab.png" class="offset-2"  alt="">

<p class="text-center mt-4" style="font-weight:bold;font-size:1.2rem;">Collaborate with other developers on <br> a variety of projects</p>
</div>


<div class="collab col-12 d-lg-none d-md-block d-none px-0 py-0">
<img src="imgs/collab.png" class="offset-1"  alt="">

<p class="text-center mt-4" style="font-weight:bold;font-size:1.2rem;">Collaborate with other developers on <br> a variety of projects</p>
</div>


<div class="collab col-12 d-lg-none d-md-none d-sm-block d-none  px-0 py-0" style="">
<img src="imgs/collab.png" class="offset-3" style="width:395px;height:198px;" alt="">

<p class="text-center mt-4" style="font-weight:bold;font-size:1.2rem;">Collaborate with other developers on <br> a variety of projects</p>
</div>

<div class="collab col-12 d-lg-none d-md-none d-sm-none d-block  px-0 py-0" style="">
<img src="imgs/collab.png" class="" style="width:395px;height:198px;" alt="">

<p class="text-center mt-4" style="font-weight:bold;font-size:1.2rem;">Collaborate with other developers on <br> a variety of projects</p>
</div>
<!--ends-->

<!--teach and mentor section-->

<div class="teach d-lg-block d-none" style="width:100%;height:750px;margin-top:150px;">
<img src="imgs/topbg.png" alt="" width="100%" height="100%">

<p class="text-center"  style="position:absolute;z-index:1;left:38%;top:2300px;color:white;font-size:1.2rem;">Teach and mentor upcoming developers </p>
</div>

<div class="teach d-lg-none d-md-block d-none col-12 px-0" style="width:100%;height:600px;margin-top:150px;">
<img src="imgs/topbg.png" alt="" width="100%" height="100%">

<p class="text-center"  style="position:absolute;z-index:1;left:38%;top:350px;color:white;font-size:1.2rem;">Teach and mentor upcoming developers </p>
</div>

<div class="teach d-lg-none d-md-none d-sm-block d-none col-12 px-0" style="width:100%;height:400px;margin-top:150px;">
<img src="imgs/topbg.png" alt="" width="100%" height="100%">

<p class="text-center"  style="position:absolute;z-index:1;left:38%;top:240px;color:white;font-size:1.2rem;">Teach and mentor upcoming developers </p>
</div>


<div class="teach d-lg-none d-md-none d-sm-none d-block col-12 px-0" style="width:100%;height:450px;margin-top:150px;">
<img src="imgs/topbg.png" alt="" width="100%" height="100%">

<p class="text-center"  style="position:absolute;z-index:1;left:5%;top:240px;color:white;font-size:1.2rem;">Teach and mentor upcoming developers </p>
</div>
<!--ends-->

<!--features section-->

<div class="features col-lg-12 px-0 d-lg-block  d-none">

<h2 style="font-weight:bold;" class="text-center" style="color:white;font-size:1rem;">Features</h2>

<div  class="all-features mt-4 col-lg-8 offset-lg-2 d-flex ">

<div class="col-lg-4 ml-4">
<div class="box shadow" style="height:170px;width:170px;">
<img src="/imgs/phone-vector.png" alt=""></div>
<p style="font-weight:bold;margin-left:14%;" class="mt-2">Voice Chat</p>
</div>

<div class="col-lg-4">
<div class="box " style="height:170px;width:170px;margin-left:10%;">
<img src="/imgs/code-vector.png" alt="">
</div>
<p style="font-weight:bold;margin-left:18%;" class="mt-2">Screen sharing</p>
</div>

<div class="col-lg-4 ml-4">
<div class="box" style="height:170px;width:170px;">
<img src="/imgs/live-vector.png" alt="">

</div>
<p style="font-weight:bold;margin-left:18%;" class="mt-2">Live Coding</p>
</div>
</div>

<div  class="all-features mt-4 col-lg-8 offset-lg-2 d-flex ">

<div class="col-lg-4 ml-4">
<div class="box" style="height:170px;width:170px;">
<img src="/imgs/collab-vector.png" alt=""></div>

<p style="font-weight:bold;" class="mt-2">Collaborate on projects.</p>

</div>

<div class="col-lg-4">
<div class="box " style="height:170px;width:170px;margin-left:10%;"></div>

<p style="font-weight:bold;margin-left:16%;" class="mt-2">Projects showcase.</p>
</div>

<div class="col-lg-4 ml-4">
<div class="box" style="height:170px;width:170px;">
<img src="/imgs/document-vector.png" alt=""></div>
<p style="font-weight:bold;margin-right:31%;" class="mt-2 text-center">Document your learning <br> process in diaries</p>
</div>

</div>
</div>
</div>

<!--smaller screens-->


<div class="features d-lg-none  d-md-none d-sm-block d-none px-0">

<h2 style="font-weight:bold;" class="text-center" style="color:white;">Features</h2>

<div  class="all-features mt-4 col-10 offset-1 d-flex ">

<div class="col-4 offset-2">
<div class="box shadow" style="height:170px;width:170px;">
<img src="/imgs/phone-vector.png" alt=""></div>
<p style="font-weight:bold;margin-left:14%;" class="mt-2">Voice Chat</p>
</div>

<div class="col-4">
<div class="box " style="height:170px;width:170px;margin-left:10%;">
<img src="/imgs/code-vector.png" alt="">
</div>
<p style="font-weight:bold;margin-left:18%;" class="mt-2">Screen sharing</p>
</div>
</div>

<div  class="all-features mt-4 col-10 offset-1 d-flex ">

<div class="col-4 offset-2">
<div class="box" style="height:170px;width:170px;">
<img src="/imgs/live-vector.png" alt="">

</div>
<p style="font-weight:bold;margin-left:18%;" class="mt-2">Live Coding</p>
</div>




<div class="col-4 ml-4">
<div class="box" style="height:170px;width:170px;">
<img src="/imgs/collab-vector.png" alt=""></div>

<p style="font-weight:bold;" class="mt-2">Collaborate on projects.</p>

</div>
</div>

<div  class="all-features mt-4 col-10 offset-1 d-flex ">
<div class="col-4 offset-2">
<div class="box " style="height:170px;width:170px;"></div>

<p style="font-weight:bold;margin-left:16%;" class="mt-2">Projects showcase.</p>
</div>

<div class="col-4 ml-4">
<div class="box" style="height:170px;width:170px;">
<img src="/imgs/document-vector.png" alt=""></div>
<p style="font-weight:bold;margin-right:31%;" class="mt-2 text-center">Document your learning <br> process in diaries</p>
</div>
</div>
</div>

<div class="features d-lg-none  d-md-none d-sm-none d-block px-0">

<h2 style="font-weight:bold;" class="text-center" style="color:white;">Features</h2>

<div  class="all-features mt-4 col-12 d-flex ">

<div class="col-4 ">
<div class="box shadow" style="height:170px;width:150px;">
<img src="/imgs/phone-vector.png" alt=""></div>
<p style="font-weight:bold;margin-left:5%;" class="mt-2">Voice Chat</p>
</div>

<div class="col-4" style="margin-left:18%;">
<div class="box " style="height:170px;width:150px;margin-left:10%;">
<img src="/imgs/code-vector.png" alt="">
</div>
<p style="font-weight:bold;margin-left:7%;" class="mt-2">Screen sharing</p>
</div>
</div>

<div  class="all-features mt-4 col-12 d-flex ">

<div class="col-4 ">
<div class="box" style="height:170px;width:150px;">
<img src="/imgs/live-vector.png" alt="">

</div>
<p style="font-weight:bold;margin-left:5%;" class="mt-2">Live Coding</p>
</div>




<div class="col-4 " style="margin-left:20%;">
<div class="box" style="height:170px;width:150px;">
<img src="/imgs/collab-vector.png" alt=""></div>

<p style="font-weight:bold;" class="mt-2">Collaborate on projects.</p>

</div>
</div>

<div  class="all-features mt-4 col-12 d-flex ">
<div class="col-4 ">
<div class="box " style="height:170px;width:150px;"></div>

<p style="font-weight:bold;margin-left:5%;" class="mt-2">Projects showcase.</p>
</div>

<div class="col-4 " style="margin-left:20%;">
<div class="box" style="height:170px;width:150px;">
<img src="/imgs/document-vector.png" alt=""></div>
<p style="font-weight:bold;margin-right:31%;" class="mt-2 text-center">Document your learning <br> process in diaries</p>
</div>
</div>
</div>
<!--ends-->

<!--footer begins-->

<footer class="col-lg-12 px-0 col-12 py-1" style="height:250px;background: #3C87CD;color:white;">

<div class="foot-nav col-lg-12 d-flex" style=>

<p class="ml-4" style="margin-top:220px;" >&copy; CitonHub 2021</p>

<img src="imgs/twitter-bird.png" style="height: 17px;width: 21.25px;margin-top:220px;" class="offset-5 d-lg-block d-none" alt="">
<img src="imgs/instagram-home.png"  style="height: 17px;width:17px;margin-top:220px;" class="ml-2 d-lg-block d-none" alt="">

<img src="imgs/twitter-bird.png" style="height: 17px;width: 21.25px;margin-top:220px;" class="ml-4 d-lg-none d-block " alt="">
<img src="imgs/instagram-home.png"  style="height: 17px;width:17px;margin-top:220px;" class="ml-2 d-lg-none d-block" alt="">

<ul style="list-style:none;color:white;margin-top:220px;" class="d-lg-flex d-none">
<li>Contact Us</li>
<li class="ml-4">Terms of Use</li>
<li class="ml-4">Privacy Policy</li>
</ul>

<ul style="list-style:none;color:white;margin-top:140px;" class="d-lg-none d-block">
<li class="ml-2">Contact Us</li>
<li class="ml-2 mt-1">Terms of Use</li>
<li class="ml-2 mt-1">Privacy Policy</li>
</ul>
</div>
</footer>

<!--ends-->



</div>
 @endsection

 @section('scripts')

<!-- The main compiled script for this page  -->
<script src="{{ asset('js/app.js?v=0.11') }}"></script>
 <!-- ends -->
 @endsection
