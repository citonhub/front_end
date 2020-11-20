@extends('layouts.link')
@section('title')

    <title>{{$pageTitle}}</title>

 @endsection

 @section('meta') 
 <meta name="description" content="{!! $pageDescription !!}" />
  <meta name="keywords" content="Programming Duels,Developer Community,Citonhub Channels,Citonhub Space,Programming Teams" />
  <meta name="MobileOptimized" content="width" />
  <meta name="HandheldFriendly" content="true" />

   <!--Metadata for Apple-->
   <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="white">
    <meta name="apple-mobile-web-app-title" content="CitonHub">
    <link rel="apple-touch-icon" href="imagesNew/icons/icon-144x144.png">
    <!--Metadata for Microsoft-->
    <meta name="msapplication-TileImage" content="imagesNew/icons/icon-144x144.png">
    <meta name="msapplication-TileColor" content="#4495a2">

    <meta name="twitter:card" content="summary_large_image"/>
  <meta name="og:image" content="https://www.citonhub.com/imgs/{{$imagePath}}"/>
  <meta property="og:description" content="{!! $pageDescription !!}" />


    <meta property='twitter:title' content="{!! $pageTitle !!}"/>
<meta property='twitter:image' content="https://www.citonhub.com/imgs/{{$imagePath}}"/>

 @endsection


 @section('css')
  
<style>

 </style>
  
 @endsection

 @section('content')
<div id="home">
<div  style="z-index:1000000; position:fixed; width:100%; height:auto; top:0;">
  <div class="line"></div>
  <div class="subline inc"></div>
  <div class="subline dec"></div>
</div>
<div style="position:fixed;height:100%; width:100%; align-items:center; justify-content:center;z-index:100000;background:white;"  class="sliderfull d-flex "> 
      <img src="/imgs/CitonHub.png" height="50" width="50" >
</div>


</div>
 @endsection

 @section('scripts')

 <script type="text/javascript">
        function redirectPage() {
           window.location =  '{{$pageLink}}' + '/{{ $referral }}';
        }
        window.onload = redirectPage;
    </script>

 
     
 @endsection
