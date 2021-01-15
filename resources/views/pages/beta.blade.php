@extends('layouts.main')
@section('title')

    <title>CitonHub: Beta Testing</title>

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
 
  <!-- Line awesome icon: -->
  <link rel="stylesheet" type="text/css" href="/css/line-awesome.min.css">
  <!-- ends -->
  

<style>

 </style>
  
 @endsection

 @section('content')

 <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 py-1" >


 <div class="mt-5 pt-5">
   
   </div>
        <div >
            <h2 class="text-center mb-3 mb-lg-3" style="font-family:HeaderFont;">CitonHub Beta Testing</h2>
            <p class="text-center">CitonHub is a platfrom for developers to teach, mentor and connect</p>

            <div class="row justify-content-center m-3 p-md-5">
              <div class="col-md-10 text-center col-sm-12">
                <div class="shadow-sm">
                  <div class="card-body">
                    <form class="form" method="POST" action="http://localhost:8000/api/beta">
                      @csrf()
                      <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email Address" required autofocus name="email">
                      </div>
                      <div class="form-group">
                        <button class="homeButton mx-2 px-3 py-2">Sign Up</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          

           </div>
        </div>

<!-- Footer component -->
@include('shared.footer')
<!-- ends -->
 @endsection

 @section('scripts')

     
 @endsection
