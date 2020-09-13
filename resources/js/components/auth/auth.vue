<template>
   <v-app  class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0" style="position:absolute; font-family:BodyText; background:transparent; height:100%; overflow-y:auto; overflow-x:hidden; ">
        <div class="row my-0 py-0 px-0">

           <div  style=" top:5%; z-index:1000000;"  class="text-center fixed-top col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0"> 
            
        <h4 style="color:#26535a;">Welcome to CitonHub</h4>
            
                
     </div>

         
       <div class="col-12 py-3 morebackground4 d-flex" >
          
           <div>

              <v-carousel
    cycle
      class=" px-1"
      
    hide-delimiters
   
  >

  <v-carousel-item
     
    >
        <div class="col-12 text-center">

          <img src="/imgs/dev_community_back.svg"  width="100%" height="300px">
             
        </div>
         <div class="col-12 text-center">

          <span style="color:#26535a; font-size:14px; font-family:HeaderText;">A platform for growing developer communities</span>
             
        </div>
        <div class="col-12 text-center mt-2">

          <v-btn rounded color="#3E8893" @click="showLogin"><span style="color:white;font-size:13px;font-family:HeaderText;">Get Started</span></v-btn>
             
        </div>
        
    </v-carousel-item>

    <v-carousel-item
     
    >
        <div class="col-12 text-center">

          <img src="/imgs/chat_share_run.svg"  width="100%" height="300px">
             
        </div>
         <div class="col-12 text-center">

          <span style="color:#26535a; font-size:14px; font-family:HeaderText;">Chat, share and run codes, live code in your Space</span>
             
        </div>
        <div class="col-12 text-center mt-2">

          <v-btn rounded color="#3E8893" @click="showLogin"><span style="color:white;font-size:13px;font-family:HeaderText;">Set up Your Space</span></v-btn>
             
        </div>
        
    </v-carousel-item>
     <v-carousel-item
     
    >
        <div class="col-12 text-center">

          <img src="/imgs/build_projects.svg"  width="100%" height="300px">
             
        </div>

        <div class="col-12 text-center">

          <span style="color:#26535a; font-size:14px; font-family:HeaderText;">Build awesome projects without setting up a server</span>
             
        </div>

         <div class="col-12 text-center mt-2">

          <v-btn rounded color="#3E8893" @click="showLogin" ><span style="color:white;font-size:13px;font-family:HeaderText;">Build Projects</span></v-btn>
             
        </div>
        
    </v-carousel-item>
     <v-carousel-item
     
    >
        <div class="col-12 text-center">

          <img src="/imgs/duel_challenge.svg"  width="100%" height="300px">
             
        </div>

         <div class="col-12 text-center">

          <span style="color:#26535a; font-size:14px; font-family:HeaderText;">Challenge your friends to coding duels</span>
             
        </div>

        <div class="col-12 text-center mt-2">

          <v-btn rounded color="#3E8893"  @click="showLogin"><span style="color:white;font-size:13px;font-family:HeaderText;">Start a duel</span></v-btn>
             
        </div>
        
    </v-carousel-item>
  </v-carousel>

           </div>
     </div>

     <div  style=" height:50%; bottom:-35%;  z-index:1000000;"  class=" fixed-bottom col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0"> 
        
              
       <img src="/imgs/CitonHub.png"  width="100%" height="100%">
     </div>

     <div class="text-center fixed-bottom col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0" style=" z-index:10000000; bottom:2%;" >

           <a style="font-size:11px; color:white; font-family:HeaderText;" href="http://www.freepik.com" target="_blank"><i>Images by Freepik</i></a>

        </div>
         

        </div>

     </v-app>
</template>
<script>
export default {
     data () {
      return {
        model: 0,
        myhtml:'<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Veniam atque quod voluptatum dolorum dicta tempore,</p>',
        slidedots: [0,1,2]
      }
    },
     mounted(){
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

           if(this.$root.checkauthroot == 'auth' && this.$root.frompage == 'trends'){
             this.$router.push({ path: '/trends' });
          } 

           if(this.$root.checkauthroot == 'auth' && this.$root.frompage == 'profile'){
             this.$router.push({ path: '/profile' });
          } 

           if(this.$root.checkauthroot == 'auth' && this.$root.frompage == 'duels'){
             this.$router.push({ path: '/duel' });
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
.morebackground4{
     position: absolute;
     width:100%; 
     top: 0;
     left: 0;
     height:100%; 
     align-items: center;
     justify-content: center;
     background:#ffffff;
     z-index:100000;
 }
 .login{
     color: #1e4248;
     font-size:13px;
 }

 .forgot{
     cursor: pointer;
     text-decoration: underline;
     color: #4494a2;
     font-size:12px;
 }
 .infoclass{
     color: #1e4248;
     font-size:13px;
 }
 .welcome{
   color: white;
    background: #3c8290;
    border:1px solid #3c8290;
    border-radius:5px;
     font-size:13px;
     font-weight: bolder;
     text-transform: uppercase;  
 }
</style>