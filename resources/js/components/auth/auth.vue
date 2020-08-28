<template>
   <v-app  class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0" style="position:absolute; font-family:BodyText; background:transparent; height:100%; overflow-y:auto; overflow-x:hidden; ">
        <div class="row my-0 py-0 px-0">
       <div class="col-12 py-3 morebackground2">
        <v-card class="py-3 px-2 row mx-auto d-flex" color="#81c1ca" style="height:98%;align-items:center;justify-content:center;">
         
           <div >

               <div class="col-12 py-0 text-center mb-4">
             <span style="font-family:HeaderText; font-size:15px; color:#173236;"> Welcome home developer 👨‍💻.</span>
            </div>
     
        
            
           <v-alert class="col-12 py-2 text-left mb-2 "   color="#3E8893" colored-border  border="left">
              <span class="infoclass " style="font-weight:bolder; ">
                Chat, share, and run codes in your Space.
             </span>
            </v-alert>


             <v-alert class="col-12 py-2 text-left mb-2" color="#3E8893" colored-border  border="left">
              <span class="infoclass " style="font-weight:bolder;">
               Set up simple and advanced projects without setting up a server.
             </span>
            </v-alert>

             <v-alert class="col-12 py-2 text-left mb-2" color="#3E8893" colored-border  border="left">
              <span class="infoclass " style="font-weight:bolder;">
               Build your own coding community in channels.
             </span>
            </v-alert>


            <v-alert class="col-12 py-2 text-left mb-2" color="#3E8893" colored-border  border="left">
              <span class="infoclass " style="font-weight:bolder;">
              Challenge friends to duels.
             </span>
            </v-alert>
           

            <div class="col-12 text-center py-1" >
              <div class="row my-2 py-0 px-2 ">
               
               <div class="col-6 px-0 d-flex" style="align-items:center;justify-content:center;">
                      <v-btn rounded  small color="#3E8893" style="font-size:11px; font-weight:bolder; text-transform:capitalize; color:white;font-family: Headertext;" @click="showLogin">Sign In</v-btn>
               </div>

                 <div class="col-6 px-0 d-flex" style="align-items:center;justify-content:center;">
                      <v-btn rounded  small color="#3E8893" style="font-size:11px; font-weight:bolder; text-transform:capitalize; color:white;font-family: Headertext;" @click="showRegister">Sign Up</v-btn>
               </div>
                
              </div>
            </div>


           </div>
          
            
        </v-card>
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
       this.$root.showHeader = true;
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
.morebackground2{
     position: absolute;
     width:100%; 
     top: 0;
     left: 0;
     height:94%; 
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