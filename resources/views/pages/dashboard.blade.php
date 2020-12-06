@extends('layouts.dashboard')
@section('title')

    <title>CitonHub: Dashboard</title>

 @endsection
 @section('meta') 
 <meta name="description" content="A teaching platform for developers. Chat, share codes, live code and build projects in your Space. Create an account or log in to get started." />
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
    <meta property="og:description" content="A teaching platform for developers. Chat, share codes, live code and build projects in your Space. Create an account or log in to get started" />
    <meta property='twitter:title' content="Citonhub:A teaching platform for developers"/>
<meta property='twitter:image' content="https://citonhub.com/imgs/CitonHub.png"/>
<meta name="twitter:card" content="summary_large_image"/>


 @endsection
 @section('css')
 
 <!-- WebRTC default css file -->
  <link rel="stylesheet" type="text/css" href="/css/getHTMLMediaElement.css?v=1.2">

<!-- ends -->

 <!-- Shaka Player ui compiled library default CSS: -->
    <link rel="stylesheet" type="text/css" href="/css/controls.css">
  <!-- ends -->
  
   <!-- Line awesome icon: -->
   <link rel="stylesheet" type="text/css" href="/css/line-awesome.min.css">
  <!-- ends -->

   <!-- font awesome icon: -->
   <link rel="stylesheet" type="text/css" href="/css/all.min.css">
  <!-- ends -->
  


<style>

 </style>
  
 @endsection

 @section('content')
  
  <div id="dashboard">
  <dashboard></dashboard>
  </div>
 
 @endsection

 @section('scripts')

 <!-- WebRTC scripts, third party scripts for real time communications -->
 <script src="{{ asset('js/RTCMultiConnection.min.js') }}"></script>

 <script src="{{ asset('js/getHTMLMediaElement.js?v=0.5') }}"></script>

 <script src="https://cdn.webrtc-experiment.com/hark.js"></script>


  
<!-- ends -->

<!-- Video player and streaming, third-party scripts -->
  <script src="{{ asset('js/shaka-player.compiled.js') }}"></script>

   <script src="{{ asset('js/shaka-player.ui.js') }}"></script>

   <script defer src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"></script>

   <script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>

<!-- ends -->

 <!-- Third-party script for markdown formating -->
  <script src="https://unpkg.com/marked@0.3.6"></script>
<!-- ends -->

<!-- The main compiled script for this page  -->
 <script src="{{ asset('js/dashboard.js?v=0.27') }}"></script>
 <!-- ends -->
     
 @endsection
