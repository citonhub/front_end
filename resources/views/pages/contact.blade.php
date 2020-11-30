@extends('layouts.main')
@section('title')

    <title>CitonHub: Contact Us</title>

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

/*first column*/
.first{
  
  margin-top:40px;
  margin-left:5%;
  color:white;

}

.get{
  font-weight:bold;

}

.first .fill{
  font-size:1rem;
  color:lightgrey;
  margin-bottom:80px;
}


/* second column*/

.second{
  background-color:white;
  margin-left:20%;
  margin-top:40px;

  height:500px;
  border-radius:20px;

}

/* contact*/
.contact{
display:flex;
margin-bottom:20px;
width:52%;
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

 <div>
 
 </div>

 <div style="width:100%;height:550px;background-color:#10273d; margin-top:80px; " class="row">

<div class="col-4  first">
<h1 class="h1 get">Get In Touch</h1>
<p class="fill">Fill the form and our team will get back to you within 24 hours.</p>
<div class="container">

 <div class="contact">
 <i class="las la-phone"></i>
<p class="number">+0123 4567 8910</p>
</div>
<div class="container">
<p class="mail">
mail@citonhub.com
</p></div>
<div class="container">
<p class="adress">102 street 2714 bodija</p></div>

<div class="container"><div class="icons8-twitter"></div></div>
 </div>

 <div class=" contact">
 <i class="las la-envelope-open"></i>
 <p class="mail">mail@citonhub.com</p>
 </div>

 <div class=" contact">
 <i class="las la-map-marker-alt"></i>
 <p class="adress">102 street 2714 bodija</p>
 </div>

 <div class=" socials">
 <div class="circle-border"><i class="lab la-facebook"></i></div>
 <div class="circle-border"><i class="lab la-instagram"></i></div>
 <div class="circle-border"><i class="lab la-twitter"></i></div>
 
 
 
 
 </div>


</div>

<div class="col-4 second">

<form action="
">

<div style="margin-top:30px;" class="form-group">
<label for=""> Your Name</label>

<input type="text" class="form-control">
</div>

<div class="form-group">
<label for="">Mail</label>

<input type="text" class="form-control">
</div>

<div class="form-group">
<label for="">Message</label>

<textarea class="form-control" name="" id="" cols="30" rows="6"></textarea>
</div>

<button class="btn btn-large btn-primary" type="submit">Send Message</button>
</form>
</div>

</div>

<!-- Footer component -->
 @include('shared.footer')
<!-- ends -->


 @endsection
 

 @section('scripts')

 
     
 @endsection


 

 