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

<!--intro section-->

<div class="col-lg-12" style="margin-top:100px;">

<p class="text-center col-lg-12" style="font-family:HeaderFont;font-size:48px;">Everything you need as a developer <br>
to grow your community and earn.</p>



<p class="text-center col-lg-12" style="font-family:BodyFont;font-size:30px;" >Merge your content with your community <br>
and make money.</p>
</div>

<div class="offset-lg-5">
<a href="/dashboard#/sign-up" class="homeButton m1-4 px-5 py-2 d-md-inline-block d-none ">Become a Citon</a>
</div>
<!--intro section ends-->

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
