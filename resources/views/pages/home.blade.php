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


<div id="home" class="py-0 col-12 px-0" style="background:url('/imgs/backgroundHome.png');background-repeat:no-reapeat;overflow-x:hidden;">

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

<!-- Teach , learn and connect -->

<div class="col-lg-6 offset-lg-3 text-center  d-none d-md-block flex-column " style=" align-items:center; justify-content:center; margin-top:140px;margin-bottom:100px;">

   <div class="px-2 mt-4 " >
     <h1 style="font-family:HeaderFont;" class="mb-3 mt-4">Get organized and be efficient</h1>

     <div class="px-3">
     <p style="font-size:20px;font-family:BodyFont;" class="px-0">CitonHub is an all-in-one platform for developers to grow their communities and earn.</p>
     </div>


     <div class="py-2 px-0 mt-3 col-12 text-center">

      <a href="/dashboard#/sign-up" class="homeButton ml-2 py-3 px-4 d-inline-block ">Get started for FREE</a>

     <!--a href="/dashboard#/login" class="homeButtonOutline mx-3 px-5 py-3">Login</a>-->

     </div>

   
   </div>

  



</div>



<div class="d-md-none d-block  " style="width:100%; margin-top:90px; margin-bottom:40px;">
<div class=" text-center">

<h4 style="font-family:HeaderFont;" class="mb-3 px-3">Get organized and be efficient</h4>

   <p style="font-size:15px;font-family:BodyFont;" class="px-4">CitonHub is an all-in-one platform for developers to grow their communities and earn.</p>




      <div class="mt-4">

      <a href="/dashboard#/sign-up" class="homeButton  px-4 py-2 mx-1" style="font-size:14px;">Get started for FREE</a>


      </div>

     <div class="col-12 pb-0 pt-0 mt-5 text-center">

<a href="https://play.google.com/store/apps/details?id=com.citonhub.app" target="_blank"><img src="/imgs/google_play.png" alt="Citonhub - Android app" style="width: 150px; " /></a>
</div>

  </div>
</div>

<!--ends-->



<!-- wallet section-->
<div class="d-md-block d-none" style="width:100%;height:780px;left:0%; margin-top:10px;" >



    <img alt="" src="/imgs/topbg.png" style="position:absolute;width:100%;height:860px;">

    <div style="position:absolute;width:100%;left:0px;z-index:12;align-items:center; justify-content:center; " class="d-flex flex-column">

    <!-- what you can do -->
<div class="col-12 text-center pt-5">

<h4 style="font-weight:bold; color:white;" class="text-center mb-0 d-md-block d-none" >What can you do?</h4>


</div>

<!-- ends -->


    <div class=" text-center mb-5"  style="height:400px;margin-top:-20px;z-index:;">
<img src="imgs/credit-vector.png" alt="" style="z-index:1; height:100%;">
</div>

<div class="text-center  px-5 mt-2" style="z-index:1;">
<span  style="color:white; font-family:BodyFont; font-size:18px;">Grow your community <br>and earn from  subscriptions, donations, and paid sessions.</span>
</div>

    </div>




</div>

<div class="d-md-none d-block" style="width:100%;height:690px;left:0%; margin-top:30px;" >

    <img alt="" src="/imgs/topbg.png" style="position:absolute;width:100%;height:680px;">

    <div style="position:absolute;width:100%;left:0px;z-index:12;align-items:center; justify-content:center; " class="d-flex flex-column mt-1">

      <!-- what you can do -->
<div class="col-12 text-center pt-5 mt-3">


<h5 style="font-weight:bold;  color:white;" class="text-center mb-0 d-md-none d-block mt-1 px-4" >What can you do?</h5>

</div>

<!-- ends -->


    <div class=" text-center mb-5"  style="height:220px;margin-top:-20px;z-index:;">
<img src="imgs/credit-vector.png" alt="" style="z-index:1; height:100%;">
</div>

<div class="text-center  px-5 mt-2" style="z-index:1;">
<span  style="color:white; font-family:BodyFont; font-size:15px;">Grow your community <br>and earn from  subscriptions, donations, and paid sessions.</span>
</div>

    </div>




</div>


<!--ends-->

<!--collaborate section-->

<div class="d-md-block d-none " style="width:100%;height:500px; margin-top:130px;" >



    <div style="position:absolute;width:100%;left:0px;z-index:12;align-items:center; justify-content:center; margin-top:10px;" class="d-flex flex-column">

    <div class=" text-center mb-2"  style="height:450px;margin-top:-170px;z-index:;">
<img src="imgs/teach_dev_new.svg" alt="" style="z-index:1; height:100%;">
</div>

<div class="text-center  px-5" style="z-index:1;">

<span  style=" font-family:BodyFont; font-size:18px;">Mentor developers in your channel.</span>
</div>

    </div>

</div>


<div class="d-md-none d-block " style="width:100%;height:300px; margin-top:90px;" >



    <div style="position:absolute;width:100%;left:0px;z-index:12;align-items:center; justify-content:center; margin-top:10px;" class="d-flex flex-column">

    <div class=" text-center mb-2"  style="height:300px;margin-top:-170px;z-index:;">
<img src="imgs/teach_dev_new.svg" alt="" style="z-index:1; height:100%;">
</div>

<div class="text-center  px-5" style="z-index:1;">

<span  style=" font-family:BodyFont; font-size:15px;">Mentor developers in your channel.</span>
</div>

    </div>




</div>

<!--ends-->

<!--teach and mentor section-->

<div class="d-md-block d-none " style="width:100%;height:700px; margin-top:-90px;" >

    <img alt="" src="/imgs/topbg.png" style="position:absolute;width:100%;height:780px;">

    <div style="position:absolute;width:100%;left:0px;z-index:12;align-items:center; justify-content:center; " class="d-flex flex-column">

    <div class=" text-center mb-2"  style="height:400px;margin-top:30px;z-index:;">
<img src="imgs/collaboration.png" alt="" style="z-index:1; height:100%;">
</div>

<div class="text-center  px-5" style="z-index:1;">
<span  style="font-family:BodyFont; font-size:18px;color:white;">Collaborate and guide other <br> developers on projects in over 25 programming languages.</span>
</div>

    </div>




</div>

<div class="d-md-none d-block " style="width:100%;height:590px; margin-top:-50px;" >

    <img alt="" src="/imgs/topbg.png" style="position:absolute;width:100%;height:590px;">

    <div style="position:absolute;width:100%;left:0px;z-index:12;align-items:center; justify-content:center; " class="d-flex flex-column">

    <div class=" text-center mb-2"  style="height:300px;margin-top:30px;z-index:;">
<img src="imgs/collaboration.png" alt="" style="z-index:1; height:100%;">
</div>

<div class="text-center  px-5" style="z-index:1;">
<span  style="font-family:BodyFont; font-size:15px;color:white;">Collaborate and guide other <br> developers on projects in over 25 programming languages.</span>
</div>

    </div>




</div>


<!--ends-->

<!--collaborate section-->

<div class="d-md-block d-none " style="width:100%;height:400px; margin-top:80px;" >

<h3 style="font-weight:bold;" class="text-center mb-5 d-md-block d-none" >How it works</h3>


   <div class="col-lg-10 offset-lg-1 col-md-12  d-flex flex-row flex-wrap">

     <div class="col-md-4 d-flex flex-column">

       <div class="py-2 px-2 d-flex mb-4 flex-row" style="align-items:center;justify-content:center;">
          <span class="messagesBadges d-flex">
            1
          </span>
       </div>

       <div class="text-center " style="z-index:1;">

       <h4 style="font-weight:bold;" class="text-center  d-md-block d-none" >Create your channel</h4>
       <div  style="font-family:BodyFont; font-size:16px;">Set your channel name and add a description.</div>
      </div>

     </div>
     <div class="col-md-4">
     <div class="py-2 px-2 d-flex mb-4 flex-row" style="align-items:center;justify-content:center;">
          <span class="messagesBadges d-flex">
            2
          </span>
       </div>
       <div class="text-center " style="z-index:1;">

<h4 style="font-weight:bold;" class="text-center  d-md-block d-none" >Add payment plan</h4>
<div  style="font-family:BodyFont; font-size:16px;">Enable support, subscriptions or one-time payment plan.</div>
</div>
     </div>

     <div class="col-md-4">
     <div class="py-2 px-2 d-flex flex-row mb-4" style="align-items:center;justify-content:center;">
          <span class="messagesBadges d-flex">
            3
          </span>
       </div>
       <div class="text-center " style="z-index:1;">

<h4 style="font-weight:bold;" class="text-center  d-md-block d-none" >Invite people to your channel</h4>
<div  style="font-family:BodyFont; font-size:16px;">Share out your channel link and start growing your community.</div>
</div>
     </div>

   </div>


</div>


<div class="d-md-none d-block " style="width:100%;height:650px; " >

<h5 style="font-weight:bold;" class="text-center mb-2 d-md-none d-block px-4" >How it works</h5>

<div class="col-lg-10 offset-lg-1 col-md-10 offset-md-1 d-flex flex-row flex-wrap">

<div class="col-md-4 d-flex flex-column mt-2">

  <div class="py-2 px-2 d-flex mb-4 flex-row" style="align-items:center;justify-content:center;">
     <span class="messagesBadges d-flex">
       1
     </span>
  </div>

  <div class="text-center " style="z-index:1;">

  <h6 style="font-weight:bold;" class="text-center " >Create your channel</h6>
  <div  style="font-family:BodyFont; font-size:14px;">Set your channel name and add a description.</div>
 </div>

</div>
<div class="col-md-4 mt-2" >
<div class="py-2 px-2 d-flex mb-4 flex-row" style="align-items:center;justify-content:center;">
     <span class="messagesBadges d-flex">
       2
     </span>
  </div>
  <div class="text-center " style="z-index:1;">

<h6 style="font-weight:bold;" class="text-center " >Add payment plan</h6>
<div  style="font-family:BodyFont; font-size:14px;">Enable support, subscriptions or one-time payment plan.</div>
</div>
</div>

<div class="col-md-4 mt-2">
<div class="py-2 px-2 d-flex flex-row mb-4" style="align-items:center;justify-content:center;">
     <span class="messagesBadges d-flex">
       3
     </span>
  </div>
  <div class="text-center " style="z-index:1;">

<h6 style="font-weight:bold;" class="text-center" >Invite people to your channel</h6>
<div  style="font-family:BodyFont; font-size:14px;">Share out your channel link and start engaging your community.</div>
</div>
</div>

</div>


</div>

<!--ends-->

<!--features section-->

<div class="features col-lg-12 px-0 mt-md-4">

<h3 style="font-weight:bold;" class="text-center mb-2 d-md-block d-none" >Features</h3>

<h5 style="font-weight:bold;" class="text-center mb-2 d-md-none d-block px-4" >Features</h5>

<div  class=" mt-5 col-lg-8 offset-lg-2 d-flex flex-row flex-wrap"  style="align-items:center;justify-content:center;">

<div class="col-md-6 col-lg-4 d-flex flex-column mt-2" style="align-items:center;justify-content:center;border-radius:7px;">

<div class="box" style="height:170px;width:170px; background:;border-radius:7px;" >
<i class="las la-comments" style="font-size:55px; color:white;"></i>
</div>

<p style="font-weight:bold;font-family:BodyFont;" class="mt-2 d-md-block d-none text-center">Chat</p>

<p style="font-weight:bold;font-family:BodyFont;font-size:15px;" class="mt-2 d-md-none d-block text-center">Chat</p>
</div>

<div class="col-md-6 col-lg-4 d-flex flex-column mt-2" style="align-items:center;justify-content:center;">

<div class="box d-flex flex-row" style="height:170px;width:170px;align-items:center;justify-content:center;border-radius:7px;" >
      <i class="las la-phone" style="font-size:55px; color:white;"></i>
</div>

<p style="font-weight:bold;font-family:BodyFont;" class="mt-2 d-md-block d-none">Voice Chat</p>

<p style="font-weight:bold;font-family:BodyFont;font-size:15px;" class="mt-2 d-md-none d-block">Voice Chat</p>

</div>


<div class="col-md-6 col-lg-4 d-flex flex-column mt-2" style="align-items:center;justify-content:center;border-radius:7px;">

<div class="box" style="height:170px;width:170px; background:; border-radius:7px;" >
<i class="las la-laptop-code" style="font-size:55px; color:white;"></i>
</div>


<p style="font-weight:bold;font-family:BodyFont;" class="mt-2 d-md-block d-none">Screen sharing</p>

<p style="font-weight:bold;font-family:BodyFont;font-size:15px;" class="mt-2 d-md-none d-block">Screen sharing</p>
</div>


<div class="col-md-6 col-lg-4 d-flex flex-column mt-2" style="align-items:center;justify-content:center;border-radius:7px;">

<div class="box" style="height:170px;width:170px; background:;border-radius:7px;" >
<i class="las la-terminal" style="font-size:55px; color:white;"></i>
</div>

<p style="font-weight:bold;font-family:BodyFont;" class="mt-2 d-md-block d-none">Live coding</p>

<p style="font-weight:bold;font-family:BodyFont;font-size:15px;" class="mt-2 d-md-none d-block">Live coding</p>

</div>


<div class="col-md-6 col-lg-4 d-flex flex-column mt-2" style="align-items:center;justify-content:center;border-radius:7px;">

<div class="box" style="height:170px;width:170px; background:;border-radius:7px;" >
<i class="las la-user-friends" style="font-size:55px; color:white;"></i>
</div>

<p style="font-weight:bold;font-family:BodyFont;" class="mt-2 d-md-block d-none">Collaborate on projects</p>

<p style="font-weight:bold;font-family:BodyFont;font-size:15px;" class="mt-2 d-md-none d-block">Collaborate on projects</p>

</div>

<div class="col-md-6 col-lg-4 d-flex flex-column mt-2" style="align-items:center;justify-content:center;border-radius:7px;">

<div class="box" style="height:170px;width:170px; background:;border-radius:7px;" >
<i class="las la-trophy" style="font-size:55px; color:white;"></i>
</div>

<p style="font-weight:bold;font-family:BodyFont;" class="mt-2 d-md-block d-none">Organize challenges</p>

<p style="font-weight:bold;font-family:BodyFont;font-size:15px;" class="mt-2 d-md-none d-block">Organize challenges</p>
</div>



</div>
</div>

<!--smaller screens-->

<!--ends-->

<!-- get started -->
<div class="col-12 text-center py-3 pt-5">

<a href="/dashboard#/sign-up" class="homeButton ml-2 py-3 px-4 d-md-inline-block d-none">Get started for FREE</a>

<a href="/dashboard#/sign-up" class="homeButton  px-4 py-2 mx-1 d-md-none d-inline-block" style="font-size:14px;">Get started for FREE</a>

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
