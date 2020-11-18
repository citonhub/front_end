<template>
  <v-app style="position:absolute; width:100%; height:100%;  z-index:999999999999999;overflow-y:hidden;" class="baseStyle">

    <div class="col-12">

       <div class="row py-0 my-0 px-md-3 px-lg-3" style="overflow-y:hidden;">
         <div class="col-4 text-left py-0 my-0">
          <img src="/imgs/CitonHub.png" height="40" width="auto"/>
         </div>
         <div class="col-8 text-right py-0 pt-2 my-0">
             <v-btn rounded to="/login" medium  outlined type="submit" color="#3E8893" style="font-size:12px; font-weight:bolder; font-family: Headertext;" 
                 >Login</v-btn>

                <v-btn rounded to="/register" medium class="ml-3"  type="submit" color="#3E8893" style="font-size:12px; font-weight:bolder; color:white;font-family: Headertext;" 
                 >Sign up</v-btn>
         </div>

       
       <v-slide-y-reverse-transition> 

          <div class="col-lg-6 d-none d-lg-block text-center py-3 pt-2 my-0 mt-3" v-if="viewType == 'main'">
             <img src="/imgs/homeMain.svg" height="100%" width="auto"/>
         </div>
          
        </v-slide-y-reverse-transition>


        <img style="position:fixed; height:70%; width:60%; right:-2%; bottom:-6%;z-index:2;" class="d-lg-none d-block" src="/imgs/homeMain.svg">
        

        <v-slide-y-reverse-transition>

           <div class="col-lg-6 d-md-block d-none text-center py-2 pt-2 mt-md-5" style="z-index:9999; " v-if="viewType == 'main'">
               <v-carousel
                v-model="model"
               reverse-transition="fade-transition"
      transition="fade-transition"
       
               hide-delimiters>
    <v-carousel-item
      
    >
     <div class="py-2 px-2 d-flex"   style="width:100%; height:100%; border-radius:50px;justify-content:center; align-items:center;" >
       <div>
         <h1 style="color:#26535a;" class="col-md-10 offset-md-1 ">CitonHub helps developer communities teach better</h1>
         <p style="color:#3E8893;font-size:20px;" class="col-md-10 offset-md-1">Save time and stress by automating how you teach code </p>
         <v-btn rounded   class="mt-3"  type="submit" color="#3E8893" style="font-size:12px; font-weight:bolder; color:white;font-family: Headertext;" 
               to="/login"  >Get started</v-btn>
       </div>
     </div>
    </v-carousel-item>

     <v-carousel-item
      
    >
     <div class="py-2 px-2 d-flex"   style="width:100%; height:100%; border-radius:50px;justify-content:center; align-items:center;" >
       <div>
         <h1 style="color:#26535a;" class="col-md-10 offset-md-1">No more combining multiple platforms to teach code</h1>
         <p style="color:#3E8893;font-size:20px;" class="col-md-10 offset-md-1">We help developer communities organize how they teach code, by providing all the features they need in one place</p>
         <v-btn rounded   class="mt-3"  type="submit" color="#3E8893" style="font-size:12px; font-weight:bolder; color:white;font-family: Headertext;" 
              to="/login"   >Get started</v-btn>
       </div>
     </div>
    </v-carousel-item>

    <v-carousel-item
      
    >
     <div class="py-2 px-2 d-flex"   style="width:100%; height:100%; border-radius:50px;justify-content:center; align-items:center;" >
       <div>
         <h1 style="color:#26535a;" class="col-md-10 offset-md-1">Organize coding challenges to help people grow</h1>
         <p style="color:#3E8893;font-size:20px;" class="col-md-10 offset-md-1">Challenges are a great way to improve people , grow their skills and help them become better developers</p>
         <v-btn rounded   class="mt-3"  type="submit" color="#3E8893" style="font-size:12px; font-weight:bolder; color:white;font-family: Headertext;" 
               to="/login"  >Get started</v-btn>
       </div>
     </div>
    </v-carousel-item>

  </v-carousel>

   <div class="col-12 text-center py-0 pt-0 " style="z-index:9999;">
               <v-btn icon @click="model = 0" small :color="model == 0 ? '#3E8893' : '#6fb8c3'"><v-icon>mdi-circle mdi-18px</v-icon></v-btn>

                 <v-btn icon  @click="model = 1" small :color="model == 1 ? '#3E8893' : '#6fb8c3'"><v-icon>mdi-circle mdi-18px</v-icon></v-btn>

                  <v-btn icon  @click="model = 2" small :color="model == 2 ? '#3E8893' : '#6fb8c3'"><v-icon>mdi-circle mdi-18px</v-icon></v-btn>
                
         </div>
         </div>

        </v-slide-y-reverse-transition>
        


  

 

   <v-slide-y-reverse-transition>

     <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2  text-center py-1 pt-2 my-0 mt-2 d-flex" style="position:fixed; justify-content:center; align-items:center; height:70%; top:7%; left:0%;  z-index:23;" v-if="viewType == 'gettingStarted'">
            
            <div >
   <div>

     <h4 style="color:#26535a;" class="col-md-10 offset-md-1">How to get started</h4>

  </div>
  <v-stepper
    v-model="howTo"
    vertical
    color="#3E8893"
  >
    <v-stepper-step
      :complete="howTo > 1"
      step="1"
       color="#3E8893"
    >
     Create an organization
      <small>Go to your dashboard and create an organization</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card
        color="#edf6f7"
        class="mb-3 px-1 py-1  d-md-block d-none"
        height="200px"
      >
      <img width="100%" height="100%" src="/imgs/organization.png">
      </v-card>
      <v-btn
        color="#3E8893"
        rounded
        class="my-1"
        style="color:#ffffff;"
        @click="howTo = 2"
      >
        Continue
      </v-btn>
    
    </v-stepper-content>

    <v-stepper-step
      :complete="howTo > 2"
      step="2"
       color="#3E8893"
    >
      Add channels, teaching bots or coding challenges
     
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card
        color="#edf6f7"
        class="mb-3 px-1 py-1  d-md-block d-none"
        height="200px"
      >
       <img width="100%" height="100%" src="/imgs/addChannels.png">
      </v-card>
      <v-btn
        color="#3E8893"
         rounded
          class="my-1"
        style="color:#ffffff;z-index:99999999;"
        @click="howTo = 3"
      >
        Continue
      </v-btn>
      
    </v-stepper-content>

    <v-stepper-step
      :complete="howTo > 3"
      step="3"
       color="#3E8893"
    >
     Invite your members
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card
        color="#edf6f7"
        class="mb-3 px-1 py-1  d-md-block d-none"
        height="200px"
      >
       <img width="100%" height="100%" src="/imgs/share.png">
      </v-card>
      <v-btn
        color="#3E8893"
         rounded
         to="/login"
          class="my-1"
        style="color:#ffffff;z-index:99999999;"
       
      >
        Get started
      </v-btn>
      
    </v-stepper-content>

  </v-stepper>
            </div>
           
         </div>
     
   </v-slide-y-reverse-transition>
 

<!-- small screen -->
 <v-slide-y-reverse-transition> 

       <div class="d-md-none  text-center py-0 pt-0 d-flex" v-if="viewType == 'main'" style="z-index:9999; top:10%; height:70%; position:fixed; width:100%; align-items:center; justify-content:center;">

            <div>

               <v-carousel
                v-model="model"
               reverse-transition="fade-transition"
      transition="fade-transition"
       
               hide-delimiters>
    <v-carousel-item
      
    >
     <div class="py-0 px-2 d-flex"   style="width:100%; height:100%; justify-content:center; align-items:center;" >
       <div>
         <h3 style="color:#26535a;" class="col-10 offset-1 ">CitonHub helps developer communities teach better</h3>
         <p style="color:#3E8893;font-size:15px;" class="col-10 offset-1">Save time and stress by automating how you teach code </p>
         <v-btn rounded  small  class="mt-2"  type="submit" color="#3E8893" style="font-size:12px; font-weight:bolder; color:white;font-family: Headertext;" 
                to="/login" >Get started</v-btn>
       </div>
     </div>
    </v-carousel-item>

     <v-carousel-item
      
    >
     <div class="py-2 px-2 d-flex"   style="width:100%; height:100%; justify-content:center; align-items:center;" >
       <div>
         <h3 style="color:#26535a;" class="col-10 offset-1">No more combining multiple platforms to teach code</h3>
         <p style="color:#3E8893;font-size:15px;" class="col-10 offset-1">We help developer communities organize how they teach code, by providing all the features they need in one place</p>
         <v-btn rounded small  class="mt-2"  type="submit" color="#3E8893" style="font-size:12px; font-weight:bolder; color:white;font-family: Headertext;" 
              to="/login"   >Get started</v-btn>
       </div>
     </div>
    </v-carousel-item>

    <v-carousel-item
      
    >
     <div class="py-2 px-2 d-flex"   style="width:100%; height:100%; border-radius:50px;justify-content:center; align-items:center;" >
       <div>
         <h3 style="color:#26535a;" class="col-10 offset-1">Organize coding challenges to help people grow</h3>
         <p style="color:#3E8893;font-size:15px;" class="col-10 offset-1">Challenges are a great way to improve people , grow their skills and help them become better developers</p>
         <v-btn rounded   class="mt-2"  small type="submit" color="#3E8893" style="font-size:12px; font-weight:bolder; color:white;font-family: Headertext;" 
                to="/login" >Get started</v-btn>
       </div>
     </div>
    </v-carousel-item>

  </v-carousel>


              
            </div>
              
  
         </div>

 </v-slide-y-reverse-transition>
 </div>

    </div>

  

    <div class="col-lg-10 offset-lg-1  d-md-block d-none" style="position:fixed; height:auto;  left:0%; bottom:0%; z-index:26;">

      <div class="row">
         <div class="col-md-4 text-center">
   
     <a href="https://blog.citonhub.com/a-new-way-to-teach-a-million-people-how-to-code-1"><span style="color:rgb(174,221,228); font-size:14px;" class="mx-2"> About</span></a> 

     <a href="https://blog.citonhub.com"><span style="color:rgb(174,221,228); font-size:14px;" class="mx-2"> Blog</span></a> 

      <a href="#"><span style="color:rgb(174,221,228); font-size:14px;" class="mx-2"> Terms of Use</span></a> 

       <a href="#"><span style="color:rgb(174,221,228); font-size:14px;" class="mx-2">Privacy Policy</span></a>

        

         </div>

         <div class="col-md-4 text-center "> 
         <v-btn fab outlined small color="rgb(174,221,228)" class="mx-1" tag="a" href="https://mobile.twitter.com/citonhub" ><v-icon>mdi-twitter</v-icon></v-btn>

           <v-btn fab outlined small color="rgb(174,221,228)"  class="mx-1" tag="a" href="https://www.youtube.com/channel/UCODtu7pKNlZiIZM9-ZByC4g" ><v-icon>mdi-youtube</v-icon></v-btn>

            <v-btn fab outlined small color="rgb(174,221,228)"  class="mx-1" tag="a" href="https://www.linkedin.com/company/citonhub/" ><v-icon>mdi-linkedin</v-icon></v-btn>
         </div>

         <div class="col-md-4 text-center"> 
          <span style="color:rgb(174,221,228); font-size:13px;" class="mx-2" >Copyright &copy; 2020 CitonHub</span>
         </div>

         
       
      </div>

    </div>

    <div class="col-12  d-md-none d-block" style="position:fixed; height:auto;  left:0%; bottom:0%; z-index:26;">

      <div class="row">
        

         <div class="col-6 text-center pb-1 pt-0 my-0"> 
         <v-btn fab outlined x-small color="rgb(174,221,228)" class="mx-1" tag="a" href="https://mobile.twitter.com/citonhub" ><v-icon>mdi-twitter</v-icon></v-btn>

           <v-btn fab outlined x-small color="rgb(174,221,228)"  class="mx-1" tag="a" href="https://www.youtube.com/channel/UCODtu7pKNlZiIZM9-ZByC4g" ><v-icon>mdi-youtube</v-icon></v-btn>

            <v-btn fab outlined x-small color="rgb(174,221,228)"  class="mx-1"  tag="a" href="https://www.linkedin.com/company/citonhub/" ><v-icon>mdi-linkedin</v-icon></v-btn>
         </div>

         <div class="col-6 text-center pb-1 pt-0 my-0"> 
          <span style="color:rgb(174,221,228); font-size:11px;"  >Copyright &copy; 2020 CitonHub</span>
         </div>

          <div class="col-12 py-0 my-0 text-center">
   
     <a href="https://blog.citonhub.com/a-new-way-to-teach-a-million-people-how-to-code-1"><span style="color:rgb(174,221,228); font-size:11px;" class="mx-1"> About</span></a> 

     <a href="https://blog.citonhub.com"><span style="color:rgb(174,221,228); font-size:11px;" class="mx-1"> Blog</span></a> 

      <a href="#"><span style="color:rgb(174,221,228); font-size:11px;" class="mx-1"> Terms of Use</span></a> 

       <a href="#"><span style="color:rgb(174,221,228); font-size:11px;" class="mx-1">Privacy Policy</span></a>

        

         </div>

         
       
      </div>

    </div>
   

   <span style="position:fixed; height:auto; width:auto; right:3%; bottom:5%; z-index:25;" class="d-lg-block d-none">
     <v-btn fab style="background:#ffffff; border:2px solid #3E8893;" class="sliderfullBtn" @click="viewType = 'gettingStarted'"  v-if="viewType == 'main'">
       <v-icon color="#26535a" >mdi-arrow-down</v-icon>
     </v-btn>

      <v-btn fab style="background:#ffffff; border:2px solid #3E8893;" class="sliderfullBtn" @click="viewType = 'main'"  v-else>
       <v-icon color="#26535a" >mdi-arrow-up</v-icon>
     </v-btn>
   </span>

 
  <span style="position:fixed; height:auto; width:auto; right:3%; bottom:18%; z-index:9999999999;" class="d-lg-none d-block">
     <v-btn fab medium style="background:#ffffff; border:2px solid #3E8893;" class="sliderfullBtn" @click="viewType = 'gettingStarted'"  v-if="viewType == 'main'">
       <v-icon color="#26535a" >mdi-arrow-down</v-icon>
     </v-btn>

      <v-btn fab medium style="background:#ffffff; border:2px solid #3E8893;" class="sliderfullBtn" @click="viewType = 'main'"  v-else>
       <v-icon color="#26535a" >mdi-arrow-up</v-icon>
     </v-btn>
   </span>


    <img style="position:fixed; height:35%; width:25%; left:-8%; bottom:-5%; z-index:23;" class="d-lg-block d-none" src="/imgs/side2.png">


  



     <img style="position:fixed; height:40%; width:15%; right:-2%; bottom:-12%;z-index:23;" class="d-lg-block d-none" src="/imgs/side1.png">

    

      <img style="position:fixed; height:40%; width:100%;  bottom:0%;"  class="d-md-block d-none" src="/imgs/bottom.png">

      <img style="position:fixed; height:50%; width:100%;  bottom:0%;"  class="d-md-none d-block" src="/imgs/bottom.png">

  </v-app>
</template>
<script>
export default {
     data () {
      return {
        model: 0,
       howTo:1,
        slidedots: [0,1,2],
        viewType:'main'
      }
    },
     mounted(){
       this.$root.itIsHomePage = true;
      this.$root.showTabs=false;
       this.$root.showHeader = false;
        this.$root.redirectRoot = this.$route.params.frompage; 
        this.checkIfLogin();
    },
    methods:{
       checkIfLogin:function(){

          if(this.$root.checkauthroot == 'auth' && this.$root.frompage == 'space'){
             this.$router.push({ path: '/space' });
          } 

          if(this.$root.checkauthroot == 'auth' && this.$root.frompage == 'hub'){
             this.$router.push({ path: '/hub' });
          } 

           if(this.$root.checkauthroot == 'auth' && this.$root.frompage == 'profile'){
             this.$router.push({ path: '/profile' });
          } 

           if(this.$root.checkauthroot == 'auth' && this.$root.frompage == 'duels'){
             this.$router.push({ path: '/panel' });
          } 

       },
       showLogin: function(){
            this.$router.push({ path: '/login' });
        },
        showRegister: function(){
            this.$router.push({ path: '/register' });
        },
        goBack: function(){
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
   },
    }
}
</script>
<style>
.baseStyle{
 background: rgb(174,221,228) !important;
background: linear-gradient(90deg, rgba(174,221,228,1) 3%, rgba(255,255,255,1) 88%) !important;
}
</style>