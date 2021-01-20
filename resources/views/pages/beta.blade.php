@extends('layouts.main')
@section('title')

    <title>CitonHub: Beta Testing</title>

 @endsection
 @section('meta') 
 <meta name="description" content="Teach, mentor, and connect with other developers" />
  <meta name="keywords" content="Teach programming,Share codes, build projects,Programming Duels,Developer Community,Citonhub Channels,Citonhub Space,Programming Teams" />
  <meta name="MobileOptimized" content="width" />
  <meta name="HandheldFriendly" content="true" />
  <meta name="og:image" content="https://citonhub.com/imgs/logo.png"/>
  <!--Metadata for Apple-->
  <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="white">
    <meta name="apple-mobile-web-app-title" content="CitonHub">
    <link rel="apple-touch-icon" href="images/icons/msapplication_icon_144x144.png">
    <!--Metadata for Microsoft-->
    <meta name="msapplication-TileImage" content="images/icons/msapplication_icon_144x144.png">
    <meta name="msapplication-TileColor" content="#3C87CD">
    <meta property="og:description" content="Teach, mentor, and connect with other developers" />
    <meta property='twitter:title' content="CitonHub:Beta testing"/>
<meta property='twitter:image' content="https://citonhub.com/imgs/logo.png"/>
<meta name="twitter:card" content="summary_large_image"/>



 @endsection
 @section('css')
 
  <!-- Line awesome icon: -->
  <link rel="stylesheet" type="text/css" href="/css/line-awesome.min.css">
  <!-- ends -->
  

<style>
 .background{
   background-color:#c5c5c5;
   background-image:url('/imgs/beta_background.jpg');
   background-repeat: no-repeat;
   background-size:cover;

 }
 </style>
  
 @endsection

 @section('content')


<div style="position:fixed;height:100%;width:100%;overflow-y:auto;" id="app" class="background">

<div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 py-1" >
    
    <div class="col-12 pt-5">
    </div>

<div class="mt-5 pt-5">
 
 </div>
      <div class="card pt-3" style="background: rgba(225, 225, 225, 0.5);">
          <h3 class="text-center mb-3 mb-lg-3" style="font-family:HeaderFont;">CitonHub Beta Testing</h3>
          <p class="text-center" style="font-family:BodyFont;">CitonHub is a platfrom for developers to teach, mentor and connect</p>

          <div class="row justify-content-center p-md-3 px-1">
            <div class="col-md-10 text-center col-sm-12 px-1">
              <div >
                <div class="card-body">
                  <form class="form" method="POST" action="/beta">
                    <h6 style="" class="mb-3 text-left">Sign Up as a beta tester</h6>

                    @csrf()
                    <div class="form-group">
                      <input v-model="email" type="email" class="form-control" placeholder="Email Address" required autofocus name="email">
                    </div>
                    <div class="form-group">
                      <button type="submit" v-on:click.prevent="sendBetaMail()" class="homeButton mx-2 px-3 py-2" :disabled="loading ? 'disabled' : false ">
                       
                       <span  v-if="loading">Sending...</span>
                       <span v-else>Sign up</span>
                    
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div id="info_session" style="display:none;">

            <div v-if="sent == 'yes'" class="bg-success py-2 px-2 text-center" style="font-family:BodyFont;font-size:14px;color:white;border:1px solid transparent;border-radius:7px;">
                   We have sent you a mail! Thank you for signing up.
            </div>

            <div v-if="sent == 'error'" class="bg-danger py-2 px-2 text-center" style="font-family:BodyFont;font-size:14px;color:white;border:1px solid transparent;border-radius:7px;">
                   Oops!, something went wrong, please try again.
            </div>
            
            </div>

            
          </div>

        

         </div>
      </div>

</div>



 @endsection

 @section('scripts')

 <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>

 <script>

axios.defaults.baseURL = 'https://api.citonhub.com/api'

 var app = new Vue({
  el: '#app',
  data: {
    loading:false,
    sent:'no',
    email:'',
  },
  methods:{
    sendBetaMail: function(){

       if(this.email == '') return;

       let infoSession = document.querySelector('#info_session');

      
       infoSession.style.display = 'block';
      

      this.loading = true;

     

        axios.post( '/send-beta-mail',{
          email: this.email
        })
      .then(response => {
      
      if (response.status == 200) {

       
        
       this.sent = 'yes';

         this.loading = false;

         this.feedback = '';
       
     }
       
     
     })
     .catch(error => {

      this.sent = 'error';

        this.loading = false;
       
    
     }) 

    }
  }
})
 </script>
     
 @endsection
