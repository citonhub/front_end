@extends('layouts.home')
@section('title')

    <title>CitonHub</title>

 @endsection
 @section('meta')
 <meta name="description" content="Everything you need to grow a developer community and earn" />
  <meta name="keywords" content="mentor programming,Share codes, build projects,Programming Duels,Developer Community,Citonhub Channels,Citonhub Space,Programming Teams" />
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
    <meta property="og:description" content="Everything you need to grow a developer community and earn" />
    <meta property='twitter:title' content="CitonHub:Everything you need to grow a developer community and earn"/>
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

body{
  background-image:url('/imgs/backgroundHome.png')
}

.messagesBadges{

    color: #ffffff;
    background: #3C87CD;
    font-size: 29px;
    font-family: HeaderFont;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
    height:60px;
    width:60px;
    border-radius:50%;
}


 </style>

 @endsection

 @section('content')


<div id="home" class="py-0 col-12 px-0" style="overflow-x:hidden;">

<!-- Headers -->
<div class="col-12 fixed-top py-2 px-md-4 px-3 px-md-2 "  style="background:rgba(255,255,255,1.0);border-bottom:1px solid #c5c5c5;">
<div class="row">

<!-- Logo -->
 <div class="col-4 text-left d-flex flex-row" style="align-items:center;">

 <img alt="citonhub logo" class="d-lg-block d-none" src="/imgs/logo.png" height="40px">

 <img alt="citonhub logo" class="d-lg-none d-block" src="/imgs/logo.png" height="35px">

 </div>

 <!-- Sign up, register button -->

<div class="col-8 text-right pt-1 px-1 px-md-2" >


 <a href="/dashboard#/login"  class="linkStyle mx-3 d-md-inline-block d-none"  style="color:#000000;"> Login</a>

 <a href="/dashboard#/sign-up" class="homeButton mx-2 px-3 py-2 d-md-inline-block d-none">Sign Up</a>

 <a href="/dashboard#/login"  class="linkStyle mx-3 d-md-none d-inline-block"  style="color:#000000;font-size:14px;"> Login</a>

 <a href="/dashboard#/sign-up" class="homeButton mx-2 px-3 py-2 d-md-none d-inline-block" style="font-size:14px;">Sign Up</a>

 </div>



</div>


</div>

<!--intro section-->

<div class="col-lg-8 offset-lg-2  text-center d-md-block  d-none" style="margin-top:120px;">

   <div class="text-center col-8 offset-2">

   <h2>Everything you need to grow a developer community and earn</h2>



    <p class="px-5 mt-4" style="font-family:BodyFont;font-size:17px;" >Curate content for your community and make money through donations and memberships.</p>
   </div>

</div>

<div class="col-12 text-center mt-5 d-md-block  d-none">
<a href="/dashboard#/channels/create" class="homeButton  px-5 py-3  ">Get started for FREE</a>
</div>


<!--small screens-->


<div class="col-12  text-center d-block d-md-none  " style="margin-top:100px;">

   <div class="text-center ">

   <h5>Everything you need to grow a developer community and earn</h5>

    <p class="px-2 mt-2" style="font-family:BodyFont;font-size:14px;" >Curate content for your community and make money through donations and memberships.</p>
   </div>

</div>

<div class="col-12 text-center mt-5  d-block d-md-none">
<a href="/dashboard#/channels/create" class="homeButton  px-3 py-3  " style="font-size:13px;">Get started for FREE</a>
</div>



<!--intro section ends-->



<!--first features-->

<div class="first-features col-lg-10 offset-lg-1 flex-row  d-md-flex  d-none" style="margin-top:120px;margin-bottom:80px;align-items:center;">
<div class="feature col-md-4 mb-4 d-flex flex-column" style="align-items:center;justify-content:center;">
<img src="imgs/create-content.svg" alt="" height="120px">
  <p class=" mt-2" style="font-family:BodyFont;font-size:16px;">Create a channel</p>
</div>
<div class="feature col-md-4 mb-4 d-flex flex-column" style="align-items:center;justify-content:center;">
<img src="imgs/merge-content.svg" alt="" height="120px">
<p class="mt-2" style="font-family:BodyFont;font-size:16px;">Curate your content</p>
</div>
<div class="feature col-md-4 mb-4 d-flex flex-column" style="align-items:center;justify-content:center;">
<img src="imgs/invite-comm.svg" alt="" height="120px">
<p class="mt-2" style="font-family:BodyFont;font-size:16px;">Invite your community</p></div>
</div>
<!--first features end-->


<!--small screens-->

<div class="first-features col-12 flex-row flex-wrap d-flex  d-md-none" style="margin-top:60px;margin-bottom:20px;align-items:center;">
<div class="feature col-12 mb-4 d-flex flex-column" style="align-items:center;justify-content:center;">
<img src="imgs/create-content.svg" alt="" height="90px">
  <p class=" mt-2" style="font-family:BodyFont;font-size:14px;">Create a channel</p>
</div>
<div class="feature col-12 mb-4 d-flex flex-column" style="align-items:center;justify-content:center;">
<img src="imgs/merge-content.svg" alt="" height="90px">
<p class="mt-2" style="font-family:BodyFont;font-size:14px;">Curate your content</p>
</div>
<div class="feature col-12 mb-4 d-flex flex-column" style="align-items:center;justify-content:center;">
<img src="imgs/invite-comm.svg" alt="" height="90px">
<p class="mt-2" style="font-family:BodyFont;font-size:14px;">Invite your community</p></div>
</div>


<div class="col-12" style="border-bottom:2px solid #c5c5c5">

</div>


<!--reasons section-->

<div class="reasons col-lg-8 offset-lg-2 flex-row  d-md-flex  d-none" style="margin-top:80px;margin-bottom:90px;">

<div class="col-md-6">
<h4 style="font-family:HeaderFont;">What?</h4>
<p style="font-family:BodyFont;font-size:15px;" >Citonhub is a free platform for developers to curate resources from YouTube and DevTo and merge with their communities.</p>
</div>
<div class="col-md-6">
<h4 style="font-family:HeaderFont;">Why?</h4>

<p style="font-family:BodyFont;font-size:15px;" >There is an overwhelming amount of content on the internet but little direction especially for developers just starting out 
in a specific stack. We are solving this by helping developers easily curate resources that helped their learning and merge them with their communities. Curated resources give direction
to people just starting out and community gives support. </p>
</div>



</div>




<!--small screens-->

<div class="reasons col-12 flex-row  d-md-none d-flex flex-wrap" style="margin-top:30px;margin-bottom:20px;">

<div class="col-12 mb-4">
<h5 style="font-family:HeaderFont;">What?</h5>
<p style="font-family:BodyFont;font-size:14px;" >Citonhub is a free platform for developers to curate resources from YouTube and DevTo and merge with their communities.</p>
</div>
<div class="col-12 mb-4">
<h5 style="font-family:HeaderFont;">Why?</h5>

<p style="font-family:BodyFont;font-size:14px;" >There is an overwhelming amount of content on the internet but little direction especially for developers just starting out 
in a specific stack. We are solving this by helping developers easily curate resources that helped their learning and merge them with their communities. Curated resources give direction
to people just starting out and community gives support.</p>
</div>




</div>

<div class="col-12" style="border-bottom:2px solid #c5c5c5">

</div>

<!--reasons section ends-->


<!--connection section-->

<div class="col-lg-8 offset-lg-2 flex-row  d-md-flex  d-none" style="margin-top:80px;margin-bottom:90px;" >

<div class="col-md-6 mt-4 d-flex flex-column" style="justify-content:center;">



<img class="mt-2" src="/imgs/youtube_image2.svg" height="320px" width="90%"/>

<h4 style="font-family:HeaderFont;" class="mt-4">Connect your YouTube
Channel</h4>

<p style="font-family:BodyFont;font-size:15px;" class="mt-3 ">When you create a channel on Citonhub, you can link your YouTube channel so that when you publish a video on YouTube, it is automatically updated on Citonhub and your audience would
have access to it. Your audience can like and subscribe to your channel directly on CitonHub.</p>
</div>


<div class="col-md-6 mt-4">

<img class="mt-2 mb-5" src="/imgs/earn_online.svg" height="280px" width="100%" />

<h4 style="font-family:HeaderFont;" class="mt-4">Earn directly from your
audience</h4>

<p style="font-family:BodyFont;font-size:15px;" class="mt-3 ">We are bridging the wide gap between content and community on Citonhub. Your audience
can directly donate or subscribe to your private community where they can access your curated contents.</p>
</div>

</div>



<!--small screens-->
<div class="col-12 flex-row  d-md-none  d-flex flex-wrap" style="margin-top:30px;margin-bottom:30px;" >

<div class="col-12 mt-4 d-flex flex-column" style="justify-content:center;">



<img class="mt-2" src="/imgs/youtube_image2.svg" height="250px" width="100%"/>

<h5 style="font-family:HeaderFont;" class="mt-4">Connect your YouTube
Channel</h5>

<p style="font-family:BodyFont;font-size:14px;" class="mt-3 ">When you create a channel on Citonhub, you can link your YouTube channel so that when you publish a video on YouTube, it is automatically updated on Citonhub and your audience would
have access to it. Your audience can like and subscribe to your channel directly on CitonHub.</p>
</div>


<div class="col-12 mt-4">

<img class="mt-2" src="/imgs/earn_online.svg" height="200px" width="100%"/>

<h5 style="font-family:HeaderFont;" class="mt-4">Earn directly from your
audience</h5>

<p style="font-family:BodyFont;font-size:14px;" class="mt-3 ">We are bridging the wide gap between content and community on Citonhub. Your audience
can directly donate or subscribe to your private community where they can access your curated contents.</p>
</div>

</div>




<div class="col-12" style="border-bottom:2px solid #c5c5c5">

</div>



<!--connection section ends-->


<!--extra fearures-->

<div class="col-lg-8 offset-lg-2 flex-row  d-md-flex flex-wrap  d-none" style="margin-top:80px;margin-bottom:50px;"  >

  <div class="col-12 text-center px-5">
  <h4 class="text-center " style="font-family:HeaderFont;" >Features to help you grow a thriving community</h4>
  </div>
   
   <div class="col-12 py-3">
   
   </div>

  <div class="first-features col-md-4 d-flex flex-column mb-4" style="align-items:center; justify-content:center;" >
<img src="imgs/messaging.png" alt=""  height="120px">
<p class=" mt-2" style="font-family:BodyFont;font-size:16px;">Messaging</p>
</div>

<div class="first-features col-md-4 d-flex flex-column mb-4" style="align-items:center; justify-content:center;" >
<img src="imgs/voice-call.svg" alt=""  height="120px">
<p class=" mt-2" style="font-family:BodyFont;font-size:16px;">Voice chat</p>
</div>


<div class="first-features col-md-4 d-flex flex-column mb-4" style="align-items:center; justify-content:center;" >
<img src="imgs/share-screen.svg" alt=""  height="120px">
<p class=" mt-2" style="font-family:BodyFont;font-size:16px;">Share share</p>
</div>

<div class="col-md-2">

</div>

<div class="first-features col-md-4 d-flex flex-column mb-4" style="align-items:center; justify-content:center;" >
<img src="imgs/code-live.svg" alt=""  height="120px">
<p class=" mt-2" style="font-family:BodyFont;font-size:16px;">Live code</p>
</div>


<div class="first-features col-md-4 d-flex flex-column mb-4" style="align-items:center; justify-content:center;" >
<img src="imgs/collab2.svg" alt=""  height="120px">
<p class=" mt-2" style="font-family:BodyFont;font-size:16px;">Build and collaborate on projects</p>
</div>


<div class="col-md-2">

</div>

<div class="first-features col-md-12 d-flex flex-column mb-4" style="align-items:center; justify-content:center;" >
<img src="imgs/challenge.svg" alt=""  height="120px">
<p class=" mt-2" style="font-family:BodyFont;font-size:16px;">Organize coding challenges</p>
</div>

</div>

<!--small screens-->
<div class="col-lg-8 offset-lg-2 flex-row  d-md-none flex-wrap  d-flex" style="margin-top:30px;margin-bottom:30px;"  >

  <div class="col-12 text-center px-3">
  <h5 class="text-center " style="font-family:HeaderFont;" >Features to help you grow a thriving community</h5>
  </div>
   
   <div class="col-12 py-3">
   
   </div>

  <div class="first-features col-12 d-flex flex-column mb-3" style="align-items:center; justify-content:center;" >
<img src="imgs/messaging.png" alt=""  height="90px">
<p class=" mt-2" style="font-family:BodyFont;font-size:14px;">Messaging</p>
</div>

<div class="first-features col-12 d-flex flex-column mb-3" style="align-items:center; justify-content:center;" >
<img src="imgs/voice-call.svg" alt=""  height="90px">
<p class=" mt-2" style="font-family:BodyFont;font-size:14px;">Voice chat</p>
</div>


<div class="first-features col-12 d-flex flex-column mb-3" style="align-items:center; justify-content:center;" >
<img src="imgs/share-screen.svg" alt=""  height="90px">
<p class=" mt-2" style="font-family:BodyFont;font-size:14px;">Share share</p>
</div>


<div class="first-features col-12 d-flex flex-column mb-3" style="align-items:center; justify-content:center;" >
<img src="imgs/code-live.svg" alt=""  height="90px">
<p class=" mt-2" style="font-family:BodyFont;font-size:14px;">Live code</p>
</div>


<div class="first-features col-12 d-flex flex-column mb-3" style="align-items:center; justify-content:center;" >
<img src="imgs/collab2.svg" alt=""  height="90px">
<p class=" mt-2" style="font-family:BodyFont;font-size:14px;">Build and collaborate on projects</p>
</div>


<div class="first-features col-12 d-flex flex-column mb-3" style="align-items:center; justify-content:center;" >
<img src="imgs/challenge.svg" alt=""  height="90px">
<p class=" mt-2" style="font-family:BodyFont;font-size:14px;">Organize coding challenges</p>
</div>

</div>


<!--extra features end-->



</div>


<div class="col-12 text-center mt-5  d-block d-md-none">
<a href="/dashboard#/channels/create" class="homeButton  px-3 py-3  " style="font-size:13px;">Get started for FREE</a>
</div>

<div class="col-12 text-center mt-0 d-md-block  d-none">
<a href="/dashboard#/channels/create" class="homeButton  px-5 py-3  ">Get started for FREE</a>
</div>

<div class="col-12 pb-0 pt-0 mt-5  d-block d-md-none text-center">

<a href="https://play.google.com/store/apps/details?id=com.citonhub.app" target="_blank"><img src="/imgs/google_play.png" alt="Citonhub - Android app" style="width: 150px; " /></a>
</div>

<!-- ends -->


<!-- Footer component -->
@include('shared.footer')
<!-- ends -->




</div>
 @endsection

 @section('scripts')

<!-- The main compiled script for this page  -->
<script src="{{ asset('js/app.js?v=0.11') }}"></script>
 <!-- ends -->
 @endsection
