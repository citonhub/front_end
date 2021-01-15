@extends('layouts.main')
@section('title')

    <title>CitonHub: Contact Us</title>

 @endsection
 @section('meta') 
 <meta name="description" content="Contact CitonHub" />
  <meta name="keywords" content="Share codes, build projects,Programming Duels,Developer Community,Citonhub Channels,Citonhub Space,Programming Teams" />
  <meta name="MobileOptimized" content="width" />
  <meta name="HandheldFriendly" content="true" />
  <meta name="og:image" content="https://citonhub.com/imgs/logo.png"/>
  <!--Metadata for Apple-->
  <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="white">
    <meta name="apple-mobile-web-app-title" content="CitonHub">
    <link rel="apple-touch-icon" href="imagesNew/icons/icon-144x144.png">
    <!--Metadata for Microsoft-->
    <meta name="msapplication-TileImage" content="imagesNew/icons/icon-144x144.png">
    <meta name="msapplication-TileColor" content="#4495a2">
    <meta property="og:description" content="Contact CitonHub" />
    <meta property='twitter:title' content="Contact CitonHub"/>
<meta property='twitter:image' content="https://citonhub.com/imgs/logo.png"/>
<meta name="twitter:card" content="summary_large_image"/>


 @endsection
 @section('css')
 
  <!-- Line awesome icon: -->
  <link rel="stylesheet" type="text/css" href="/css/line-awesome.min.css">
  <!-- ends -->

  
  

<style>

/*first column*/
.first{
  
  margin-top:40px;
  margin-left:5%;
  color:black;
  font-family: BodyFont;

}

.first .get{
  font-weight:bold;
  font-family: HeaderFont;
}

.first .fill{
  font-size:1rem;
  color:#4d4d4d;
  margin-bottom:80px;
}


/* second column*/

.second{
  background-color:white;
  margin-left:20%;
  margin-top:40px;

  height:500px;
  border-radius:20px;
  font-family: BodyFont;
}

/* contact*/
.contact{
display:flex;
margin-bottom:20px;
width:54%;
margin-right:25%;
padding:5px 10px;

}

.contact p{
  margin-left:4%;
  
}


.contact:hover{
 
  border:3px solid #3c87cd;
  border-radius:7px;
}

.contact:active{
  border:3px solid #3c87cd;
}

.contact i{
  font-size:1.5rem;
  color:#3c87cd;
}
/*socials*/

.socials{
margin-top:50px;
display:flex;
justify-content:space-around;
width:50%;

}

.circle-border i{
font-size:1.2rem;
}

.circle-border{
  padding: 8px 10px;
}


.circle-border:hover{
border:1px solid #3c87cd;

border-radius:50%;
background-color:#3c87cd;
}



 </style>


  
 @endsection

 @section('content')


 <div class="mt-5 pt-5">
   
   </div>

   <div class="col-12">

   <div class="row">

<!-- Get in touch text -->
<div class="col-lg-6 text-center d-flex mt-3" style="align-items:center; justify-content:center;">
<div class="d-md-block d-none">


<h1 class="h1 get" style="font-family:HeaderFont; font-size:40px;" >Get In Touch</h1>
<p class="fill" style="font-family:BodyFont; font-size:20px; color:grey;">Fill the form and our team will get back to you within 24 hours.</p>

</div> 

<div class="d-md-none d-block">


<h1 class="h1 get" style="font-family:HeaderFont; font-size:30px;" >Get In Touch</h1>
<p class="fill" style="font-family:BodyFont; font-size:15px; color:grey;">Fill the form and our team will get back to you within 24 hours.</p>

</div> 

</div>

<!-- ends -->


<div class="col-lg-6 text-center mt-5">

<form action="" class="row px-2 " style="font-family:BodyFont;">

 <div class="col-md-8 offset-md-2  px-3 py-3" style="border-radius:14px; border:1px solid #c5c5c5;">
 <div class="form-group text-left">
<label for="" > Your Name</label>

<div class="form-control field" style="display:flex; height:45px;">
<i  style="font-size:1.7rem;color:#3C87CD;"   class="las la-user"></i>
<input style="border:none; outline:none;" type="text" >
</div>
</div>

<div class="form-group text-left" >
<label for="" >E-Mail</label>

<div class="form-control field" style="display:flex; height:45px;">
<i style="font-size:1.7rem;color:#3C87CD;" class="las la-envelope-open"></i>
<input style="border:none; outline:none;" type="text" >
</div>
</div>


<div class="form-group text-left">
<label for="">Message</label>

<textarea class="form-control" name="" id="" cols="30" rows="6" placeholder="Let's hear you out!" ></textarea>
</div>

<div>
<button class="homeButton mx-2 px-5 py-3" style="font-size:13px; ">Send Message</button>
</div>

 </div>

</form>
</div>

<div class="col-12 d-md-block d-none mt-5 pt-5" style="font-family:BodyFont;">

 <div class="row">
   <div class="col-4 text-center">
 
<i class="la la-phone" style="font-size:26px;color:#3C87CD;"></i>
<p class="number">+234 812 635 1468</p>

   </div>
   <div class="col-4 text-center">
   
<i class="la la-envelope-open" style="font-size:26px;color:#3C87CD;"></i>
<p class="mail">admin@citonhub.com</p>

</div>
<div class="col-4 text-center">

<i class="la la-map-marker-alt" style="font-size:26px;color:#3C87CD;"></i>
<p class="adress">Lagos, Nigeria</p>

</div>
 </div>
</div>

<div class="col-12 d-md-none d-block mt-5 pt-5" style="font-family:BodyFont;">
<div class="row ">
   <div class="col-6 text-center">
 
<i class="la la-phone" style="font-size:20px;color:#3C87CD;"></i>
<p class="number" style="font-size:14px;">+234 812 635 1468</p>

   </div>
   <div class="col-6 text-center">
   
<i class="la la-envelope-open" style="font-size:20px;color:#3C87CD;"></i>
<p class="mail" style="font-size:14px;">admin@citonhub.com</p>

</div>
<div class="col-12 text-center">

<i class="la la-map-marker-alt" style="font-size:20px;color:#3C87CD;"></i>
<p class="adress" style="font-size:14px;">Lagos, Nigeria</p>

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


 

 