@extends('layouts.home')
@section('title')

    <title>{{$pageTitle}}</title>

 @endsection

 @section('meta') 
 <meta name="description" content="{!! $pageDescription !!}" />
  <meta name="keywords" content="Teach programming,Share codes, build projects,Programming Duels,Developer Community,Citonhub Channels,Citonhub Space,Programming Teams" />
  <meta name="MobileOptimized" content="width" />
  <meta name="HandheldFriendly" content="true" />

   <!--Metadata for Apple-->
   <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="white">
    <meta name="apple-mobile-web-app-title" content="CitonHub">
    <link rel="apple-touch-icon" href="images/icons/msapplication_icon_144x144.png">
    <!--Metadata for Microsoft-->
    <meta name="msapplication-TileImage" content="images/icons/msapplication_icon_144x144.png">
    <meta name="msapplication-TileColor" content="#3C87CD">

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




</div>
 @endsection

 @section('scripts')

 <script type="text/javascript">
        function closePage() {
           window.close();
        }
        window.onload = closePage;
    </script>

 
     
 @endsection