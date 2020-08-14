<template>
   <v-app  class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0" style="position:absolute; font-family:BodyText; background:transparent; height:100%; overflow-y:auto; overflow-x:hidden; ">
        <div class="row my-0 py-0 px-0">
       <div class="col-12 py-0 morebackground d-flex">
        <v-card class="py-1 px-2 row">
             <div class="col-3 px-1 py-1">
             <span>
                <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
             </span>
            </div>

           <div class="col-12 py-0 text-center">
             <span style="font-family:HeaderText; font-size:14px;"> Welcome home developer 👨‍💻.</span>
            </div>


           <div class="col-12 py-2 text-center ">
              <span class="infoclass px-4">
                 Grow your favourite communities in channels, collaborate and build projects in teams and challenge friends to duels.
             </span>
            </div>
           

            <div class="col-12 text-center py-1" >
              <div class="row my-2 py-0 px-2 ">
               
               <div class="col-6 px-0 d-flex" style="align-items:center;justify-content:center;">
                      <v-btn rounded  small color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" @click="showLogin">Sign In</v-btn>
               </div>

                 <div class="col-6 px-0 d-flex" style="align-items:center;justify-content:center;">
                      <v-btn rounded  small color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" @click="showRegister">Sign Up</v-btn>
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
    },
    methods:{
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
.morebackground{
     position: absolute;
     width:100%; 
     top: 0;
     left: 0;
     height:94%; 
     align-items: center;
     justify-content: center;
     background:rgba(38, 82, 89,0.6);
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