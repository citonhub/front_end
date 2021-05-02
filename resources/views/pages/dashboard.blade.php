@extends('layouts.dashboard')
@section('title')

    <title>CitonHub</title>

 @endsection
 @section('meta') 
 <meta name="description" content="CitonHub dashboard" />
  <meta name="keywords" content="Share codes, build projects,Programming Duels,Developer Community,Citonhub Channels,Citonhub Space,Programming Teams" />
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
    <meta property="og:description" content="CitonHub dashboard" />
    <meta property='twitter:title' content="CitonHub dashboard"/>
<meta property='twitter:image' content="https://citonhub.com/imgs/logo.png"/>
<meta name="twitter:card" content="summary_large_image"/>


 @endsection
 @section('css')
 
 <!-- WebRTC default css file -->
  <link rel="stylesheet" type="text/css" href="/css/getHTMLMediaElement.css?v=1.23">

<!-- ends -->

 <!-- Shaka Player ui compiled library default CSS: -->
    <link rel="stylesheet" type="text/css" href="/css/controls.css">
  <!-- ends -->
  
   <!-- Line awesome icon: -->
   <link rel="stylesheet" type="text/css" href="/css/line-awesome.min.css">
  <!-- ends -->

   <!-- font awesome icon: -->
   <link rel="stylesheet" type="text/css" href="/css/materialdesignicons.min.css">
  <!-- ends -->
  


<style>

 </style>
  
 @endsection

 @section('content')
  
  <div id="dashboard">
  <div style="position:fixed;height:100%; width:100%; align-items:center; justify-content:center;z-index:100000;background:white;" v-if="pageLoaderView"  class="sliderfull d-flex "> 
      <img src="/imgs/diary_loading.svg" height="50" >
</div>
  <dashboard></dashboard>
  </div>
 
 @endsection

 @section('scripts')

 <!-- WebRTC scripts, third party scripts for real time communications -->
 <script defer src="{{ asset('js/RTCMultiConnection.min.js') }}"></script>

 <script defer src="{{ asset('js/getHTMLMediaElement.js?v=0.51') }}"></script>

 <script defer src="https://cdn.webrtc-experiment.com/hark.js"></script>

<!-- ends -->

<!-- Video player and streaming, third-party scripts -->


  <script  defer src="{{ asset('js/shaka-player.compiled.js') }}"></script>

   <script defer src="{{ asset('js/shaka-player.ui.js') }}"></script>

   <script defer src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"></script>

   <script defer src="https://webrtc.github.io/adapter/adapter-latest.js"></script>

<!-- ends -->

 <!-- Third-party script for markdwn formating -->
  <script defer src="https://unpkg.com/marked@0.3.6"></script>
<!-- ends -->

<!-- The main compiled script for this page  -->
 <script src="{{ asset('js/dashboard.js?v=7.31') }}"></script>
 <!-- ends -->
     
 @endsection
