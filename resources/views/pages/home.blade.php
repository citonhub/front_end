@extends('layouts.home')
@section('title')

    <title>CitonHub</title>

 @endsection
 @section('meta')
 <meta name="description" content="CitonHub is an all-in-one platform for developers to grow their communities and earn." />
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
    <meta property="og:description" content="Join other developers helping each other grow on CitonHub" />
    <meta property='twitter:title' content="CitonHub:An all-in-one platform for developers to mentor, grow their communities, and earn."/>
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
<div class="col-12 fixed-top py-2 px-md-4 px-3 px-md-2 "  style="background:rgba(255,255,255,1.0);">
<div class="row">

<!-- Logo -->
 <div class="col-4 text-left ">

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

<div class="col-lg-12  d-md-block  d-none" style="margin-top:100px;">

<p class="text-center col-lg-12" style="font-family:HeaderFont;font-size:48px;">Everything you need as a developer <br>
to grow your community and earn.</p>



<p class="text-center col-lg-12" style="font-family:BodyFont;font-size:30px;" >Merge your content with your community <br>
and make money.</p>
</div>

<div class="offset-lg-5">
<a href="/dashboard#/sign-up" class="homeButton m1-4 px-5 py-2  ">Become a Citon</a>
</div>


<!--small screens-->
 
<div class="col-lg-12  d-block d-md-none" style="margin-top:100px;">

<p class="text-center col-lg-12" style="font-family:HeaderFont;font-size:24px;">Everything you need as a developer <br>
to grow your community and earn.</p>



<p class="text-center col-lg-12" style="font-family:BodyFont;font-size:20px;" >Merge your content with your community <br>
and make money.</p>
</div>

<div class="offset-4  d-none d-sm-block d-md-none">
<a href="/dashboard#/sign-up" class="homeButton m1-4 px-5 py-2  ">Become a Citon</a>
</div>

<div class="offset-2  d-block d-sm-none">
<a href="/dashboard#/sign-up" class="homeButton m1-4 px-5 py-2  ">Become a Citon</a>
</div>



<!--intro section ends-->


<!--first features-->

<div class="first-features col-lg-12   d-md-flex  d-none" style="margin-top:120px;margin-bottom:80px;border-bottom:3px solid #DFDFDF">
<div class="feature col-lg-3 offset-lg-1 mb-4">
<img src="imgs/create-content.svg" alt="">
<p class="mb-4 mt-2">Create a Channel</p>
</div>
<div class="feature col-lg-3 offset-lg-1 mb-4">
<img src="imgs/merge-content.svg" alt="">
<p class="mt-2">Merge your Content</p>
</div>
<div class="feature col-lg-3 offset-lg-1 mb-4">
<img src="imgs/invite-comm.svg" alt="">
<p class="mt-2">Invite your Community</p></div>
</div>
<!--first features end-->


<!--small screens-->


<!--first features-->

<div class="first-features col-lg-12   d-none d-sm-block d-md-none" style="margin-top:120px;margin-bottom:80px;border-bottom:3px solid #DFDFDF">
<div class="feature col-4 offset-4 mb-4">
<img src="imgs/create-content.svg" alt="">
<p class="mb-4 mt-2">Create a Channel</p>
</div>
<div class="feature col-4 offset-4 mb-4">
<img src="imgs/merge-content.svg" alt="">
<p class="mt-2">Merge your Content</p>
</div>
<div class="feature col-4 offset-4 mb-4">
<img src="imgs/invite-comm.svg" alt="">
<p class="mt-2">Invite your Community</p></div>
</div>
<!--first features end-->


<!--mobile-->

<div class="first-features col-lg-12   d-block d-sm-none" style="margin-top:120px;margin-bottom:80px;border-bottom:3px solid #DFDFDF">
<div class="feature col-8 offset-2 mb-4">
<img src="imgs/create-content.svg" alt="">
<p class="mb-4 mt-2">Create a Channel</p>
</div>
<div class="feature col-8 offset-2 mb-4">
<img src="imgs/merge-content.svg" alt="">
<p class="mt-2">Merge your Content</p>
</div>
<div class="feature col-8 offset-2 mb-4">
<img src="imgs/invite-comm.svg" alt="">
<p class="mt-2">Invite your Community</p></div>
</div>




<!--reasons section-->

<div class="reasons col-lg-12 d-md-flex d-none"  style="border-bottom:3px solid #DFDFDF;">

<div class="col-lg-5 offset-lg-1">
<h4 style="font-family:HeaderFont;">What?</h4>
<p style="font-family:BodyFont;font-size:15px;" class="col-lg-10 px-0">Citonhub is a free developer community platform that lets you create a channel and also allows
you import your contents from YouTube/Udemy/devto.</p>
</div>
<div class="col-lg-5 offset-lg-1 mb-4">
<h4 style="font-family:HeaderFont;">Why?</h4>

<p style="font-family:BodyFont;font-size:15px;" class="col-lg-10 px-0">This helps you engage your community at the same time boosting your audience retention. You
can also earn from donations and memberships. If you don't create contents, you can curate a
playlist of resources that helped you along your coding journey and share with your friends.</p>
</div>


</div>

<!--small screens-->

<div class="reasons col-lg-12 d-md-none d-block"  style="border-bottom:3px solid #DFDFDF;">

<div class="col-lg-5 offset-lg-1">
<h4 style="font-family:HeaderFont;" class="text-center">What?</h4>
<p style="font-family:BodyFont;font-size:15px;"  class="col-lg-10 px-0 text-center">Citonhub is a free developer community platform that lets you create a channel and also allows
you import your contents from YouTube/Udemy/devto.</p>
</div>
<div class="col-lg-5 offset-lg-1 mb-4">
<h4 style="font-family:HeaderFont;"  class="text-center">Why?</h4>

<p style="font-family:BodyFont;font-size:15px;" class="col-lg-10 px-0 text-center">This helps you engage your community at the same time boosting your audience retention. You
can also earn from donations and memberships. If you don't create contents, you can curate a
playlist of resources that helped you along your coding journey and share with your friends.</p>
</div>

</div>

<!--reasons section ends-->


<!--connection section-->

<div class="col-lg-12 d-md-flex d-none" style="border-bottom:3px solid #DFDFDF;">

<div class="col-lg-5 offset-lg-1 mt-4">

<div class="col-lg-10 mt-2" style="border:2px solid black;height:120px;"></div>

<h4 style="font-family:HeaderFont;" class="mt-4">Connect your YouTube
Channel.</h4>

<p style="font-family:BodyFont;font-size:15px;" class="mt-3 col-lg-10">When you create a channel on Citonhub, you can link your YouTube channel so that when you publish a video on YouTube, you can directly update it on Citonhub and your audience would
have access to it</p>
</div>


<div class="col-lg-5 offset-lg-1 mt-4">

<div class="col-lg-10 mt-2" style="border:2px solid black;height:120px;"></div>

<h4 style="font-family:HeaderFont;" class="mt-4">Earn directly from your
audience.</h4>

<p style="font-family:BodyFont;font-size:15px;" class="mt-3 col-lg-10">We are bridging the wide gap between Content and community on Citonhub. Your audience
can directly donate or subscribe to your private community where they can access your curated
contents.</p>
</div>



</div>


<!--small screens-->


<div class="col-lg-12 d-md-none d-block" style="border-bottom:3px solid #DFDFDF;">

<div class="col-lg-5 offset-lg-1 mt-4">

<div class="col-lg-10 mt-2" style="border:2px solid black;height:120px;"></div>

<h4 style="font-family:HeaderFont;" class="mt-4 text-center">Connect your YouTube
Channel.</h4>

<p style="font-family:BodyFont;font-size:15px;" class="mt-3 col-lg-10 text-center">When you create a channel on Citonhub, you can link your YouTube channel so that when you publish a video on YouTube, you can directly update it on Citonhub and your audience would
have access to it</p>
</div>


<div class="col-lg-5 offset-lg-1 mt-4">

<div class="col-lg-10 mt-2" style="border:2px solid black;height:120px;"></div>

<h4 style="font-family:HeaderFont;" class="mt-4 text-center">Earn directly from your
audience.</h4>

<p style="font-family:BodyFont;font-size:15px;" class="mt-3 col-lg-10 text-center">We are bridging the wide gap between Content and community on Citonhub. Your audience
can directly donate or subscribe to your private community where they can access your curated
contents.</p>
</div>



</div>







<!--connection section ends-->


<!--extra fearures-->

<div class="col-lg-12 mt-4 d-md-block d-none">
<h4 class="text-center col-lg-4 offset-lg-4" style="font-family:HeaderFont;" >Features to help you grow your community</h4>

<div class="first-features col-lg-12 d-flex " style="margin-top:120px;">
<div class="feature col-lg-3 offset-lg-1 mb-4">
<img src="imgs/voice-call.svg" alt="">
<p class="mb-4 mt-2 ml-4">Voice Chat</p>
</div>
<div class="feature col-lg-3 offset-lg-1 mb-4">
<img src="imgs/share-screen.svg" alt="">
<p class="mb-4 mt-2 ml-4">Share Screen</p>
</div>
<div class="feature col-lg-3 offset-lg-1 mb-4">
<img src="imgs/code-live.svg" alt="">
<p class="mt-2 ml-4">Live Code</p></div>
</div>



<div class=" col-lg-12 d-flex " style="margin-bottom:80px;">

<div class="feature col-lg-3 offset-lg-3 mb-4" >
<img src="imgs/collab2.svg" alt="">
<p class="mt-2">Collaborate on Projects</p>
</div>
<div class="feature col-lg-3 offset-lg-1 mb-4">
<img src="imgs/challenge.svg" alt="">
<p class="mt-2">Organize Challenges</p></div>
</div>

</div>

<!--small screens-->


<div class="col-lg-12 mt-4 d-md-none d-sm-block d-none">
<h4 class="text-center col-lg-4 offset-lg-4" style="font-family:HeaderFont;" >Features to help you grow your community</h4>

<div class="first-features col-lg-12 d-block " style="margin-top:120px;">
<div class="feature col-4 offset-4 mb-4">
<img src="imgs/voice-call.svg" alt="">
<p class="mb-4 mt-2 ml-4">Voice Chat</p>
</div>
<div class="feature col-4 offset-4 mb-4">
<img src="imgs/share-screen.svg" alt="">
<p class="mb-4 mt-2 ml-4">Share Screen</p>
</div>
<div class="feature col-4 offset-4 mb-4">
<img src="imgs/code-live.svg" alt="">
<p class="mt-2 ml-4">Live Code</p></div>
</div>



<div class=" col-lg-12 d-block " style="margin-bottom:80px;">

<div class="feature col-4 offset-4 mb-4" >
<img src="imgs/collab2.svg" alt="">
<p class="mt-2 col-12 ml-3">Collaborate on Projects</p>
</div>
<div class="feature col-4 offset-4 mb-4">
<img src="imgs/challenge.svg" alt="">
<p class="mt-2 col-12 ml-3">Organize Challenges</p></div>
</div>

</div>


<!--mobile-->


<div class="col-lg-12 mt-4 d-sm-none d-block">
<h4 class="text-center col-lg-4 offset-lg-4" style="font-family:HeaderFont;" >Features to help you grow your community</h4>

<div class="first-features col-lg-12 d-block " style="margin-top:40px;">
<div class="feature col-8 offset-2 mb-4">
<img src="imgs/voice-call.svg" alt="">
<p class="mb-4 mt-2 ml-4">Voice Chat</p>
</div>
<div class="feature col-8 offset-2 mb-4">
<img src="imgs/share-screen.svg" alt="">
<p class="mb-4 mt-2 ml-4">Share Screen</p>
</div>
<div class="feature col-8 offset-2 mb-4">
<img src="imgs/code-live.svg" alt="">
<p class="mt-2 ml-4">Live Code</p></div>
</div>



<div class=" col-lg-12 d-block " style="margin-bottom:80px;">

<div class="feature col-8 offset-2 mb-4" >
<img src="imgs/collab2.svg" alt="">
<p class="mt-2 col-12 ml-3">Collaborate on Projects</p>
</div>
<div class="feature col-8 offset-2 mb-4">
<img src="imgs/challenge.svg" alt="">
<p class="mt-2 col-12 ml-3">Organize Challenges</p></div>
</div>

</div>

<!--extra features end-->



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
