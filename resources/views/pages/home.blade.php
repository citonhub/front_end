@extends('layouts.main')
@section('title')

    <title>CitonHub:Home</title>

 @endsection
 @section('meta') 
 <meta name="description" content="Citonhub is a community of developers where they interact,learn and build." />
  <meta name="keywords" content="Programming Duels,Developer Community,Citonhub Channels,Citonhub Space,Programming Teams" />
  <meta name="MobileOptimized" content="width" />
  <meta name="HandheldFriendly" content="true" />
  <meta name="og:image" content="https://citonhub.com/imgs/CitonHub.png"/>
 @endsection
 @section('css')
  
<style>
 .body{
    background:#edf6f7;
  }
 </style>
  
 @endsection

 @section('content')
<div id="home">
<div  style="z-index:1000000; position:fixed; width:100%; height:auto; top:0;" v-if="pageloader">
  <div class="line"></div>
  <div class="subline inc"></div>
  <div class="subline dec"></div>
</div>
<div style="position:fixed;height:100%; width:100%; align-items:center; justify-content:center;z-index:100000;background:white;"  class="sliderfull d-flex " v-if="pageloader"> 
      <img src="/imgs/CitonHub.png" height="50" width="50" >
</div>

<div class="col-lg-8 col-12 offset-lg-2 py-0" style="display:fixed; top:4%;height:auto; background:white;" v-show="showHeader">
    <div class="row">
    <div class="col-4 d-flex  py-1" style="border-bottom:1px solid #e6e6e6;  align-items:center; ">
    <div>
    <div  v-if="authProfile != undefined" :style="imageStyle(46,authProfile)"  
                class="pl-3 d-none d-md-block">

                  </div>

                  <div  v-if="authProfile != undefined" :style="imageStyle(35,authProfile)"  
                  class="pl-3 d-block d-md-none">

                  </div>
    </div>
      </div>
        <div style="text-align:center; border-bottom:1px solid #e6e6e6; align-items:center; justify-content:center;" class=" col-4 d-flex py-1" >
            <a href="/" class="d-none d-md-block"><img src="{{asset('imgs/CitonHub.png')}}" height="40" width="auto"/></a>
            <a href="/"  class="d-block d-md-none"><img src="{{asset('imgs/CitonHub.png')}}" height="25" width="auto"/></a>
        </div>
        
        <div style="text-align:right; border-bottom:1px solid #e6e6e6; align-items:center; " class="col-4 px-1 text-right py-1">
           <v-btn icon class="d-none d-md-inline-block" @click="showLibrary"><v-icon color="#3E8893">mdi-inbox-full-outline</v-icon></v-btn>
            <v-btn icon class="d-inline-block d-md-none" @click="showLibrary"><v-icon color="#3E8893">mdi-inbox-full-outline</v-icon></v-btn>
            
        </div>
        
    </div>
</div>



<home></home>

 @include('shared.tabs')
</div>
 @endsection

 @section('scripts')

 <script src="{{ asset('js/home.js?v=0.55') }}"></script>
     
 @endsection
