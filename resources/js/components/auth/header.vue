<template>
   
        <!-- Headers -->
 <div class="col-12 fixed-top d-lg-block d-none py-3 px-md-4 px-3" style=" z-index:999999999999999; background:white;" >
<div class="row">

<!-- Logo -->
 <div class="col-4 text-left" style="z-index:9999999;">
 <a href="/">
<img alt="citonhub logo" class="d-lg-block d-none" src="/imgs/logo.png" height="40px">
 </a>



 </div>

 <!-- Sign up, register button -->
 <div class="col-8 text-right pt-1 d-lg-block d-none" >
 

 <router-link to="/login" class="linkStyle mx-3"  style="color:#000000;"> Login</router-link>
 
 <button @click="showSignUp" class="homeButton mx-2 px-3 py-2">Sign Up</button>

 </div>

 <div class="col-8 text-right pt-1 d-lg-none d-block pr-1" >


 </div>


</div>


    </div>
<!-- ends -->
</template>
<script>
export default {
     methods:{
         showSignUp:function(){
             this.$router.push({ path: '/sign-up' });
         }
     }
}
</script>