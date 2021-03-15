<template>


<v-app style="position:absolute; width:100%; height:100%; ">

   <!-- header component -->
 <headerTab></headerTab>
 <!-- ends -->

 <!-- quote -->
  <div class="d-none col-lg-5 text-center  d-lg-flex"  style="z-index:99999999; align-items:center; justify-content:center; position:fixed; height:70%; top:10%;">



<div style="" class="px-5 col-8 offset-2">


<blockquote class="fill" style="font-family:BodyFont; font-size:25px; color:black;">People who are crazy enough to think they can change the world, are the ones who do.</blockquote>

 <p class="text-center" style="font-family:HeaderFont;font-size:25px;">
   - Rob Siltanen
 </p>
       </div>

  </div>




<!-- ends -->

<!-- form goes here -->


 <!-- for for larger screen  -->
       <div class=" col-lg-7 offset-lg-5 px-5  d-none d-lg-flex "  style="z-index:99999999; align-items:center; justify-content:center; position:fixed; height:70%; top:10%;">

<div style="" class="col-7 ">

      <v-card class="py-1 pt-2 px-2 row" style="border-radius:10px;">
             <div class="col-2 px-1">
             <span>

             </span>
            </div>

            <div class="col-8 px-0 d-flex" style="align-items:center;justify-content:center;">
             <h4  style=" font-family:HeaderFont">
                 Login
             </h4>
            </div>

            <div class="col-2 text-center">

            </div>


            <div class="col-12 text-center py-1" style="font-family:BodyFont;">
              <v-form class="row my-2 py-2 px-2 " ref="loginform" v-model="formstate">



              <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:13px;"

                 placeholder="Grandmaster"
            label="Email or Username"
             v-model="usernameValue"
            prepend-inner-icon="las la-user"
            :rules="UsernameRule"

             outlined
             type="email"
             color="#3C87CD"
             ></v-text-field>

             </div>

              <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:13px;"
                 placeholder="therepublic"
            :label="$t('general.password')"
              prepend-inner-icon="las la-lock"
             outlined
              v-model="password"

            :rules="passwordRule"
             type="password"
             color="#3C87CD"
             ></v-text-field>

             </div>



               <div class="col-12 py-1 my-0 px-2 text-center">

                  <div class="row">

                   

                      <div class="col-6 py-0">
                  <v-btn  :loading="loading" type="submit" medium color="#3C87CD" style="font-size:13px;text-transform:none; font-weight:bolder; color:white;font-family:BodyFont;"
                  @click.prevent="loginuser">
                 Login
                  </v-btn>
                    </div>

                     <div class="col-6 py-0">
                <v-btn @click.prevent="handleGitHub"  medium color="#fffff" style="font-size:13px; font-weight:bolder;text-transform:none; color:black;font-family:BodyFont;"
                  >
                 Sign In <v-icon class="ml-1">lab la-github</v-icon>
                  </v-btn>
                    </div>

                  </div>
                 
             </div>

              <div class="col-12 py-1 my-0 px-2 text-center">
                 <div class="row">

                   <div class="col-6">
                    <a @click.prevent="showRegister" style="font-size:13px; text-decoration:underline; color:#3C87CD;font-family:BodyFont;" > Create an account</a>
                 </div>

                  <div class="col-6">
                   <a @click.prevent="showForgot" style="font-size:13px; text-decoration:underline; color:#3C87CD;font-family:BodyFont;" >Forgot password?</a>
                 </div>

                 </div>


             </div>

          </v-form>
            </div>
        </v-card>

       </div>

  </div>

 <!-- ends -->

 <!-- form for smaller screens -->
  <div class="d-lg-none col-md-8 offset-md-2 px-2  "  style=" z-index:99999999; overflow-y:auto;  left:0; position:fixed; height:100%; top:0%; ">

        <div class="col-12 py-1 px-1">

          <a href="/"> <img alt="citonhub logo" class="d-lg-none d-block" src="/imgs/logo.png" height="35px"></a>

        </div>


      <v-card class="py-1 px-2 col-12 d-flex" flat style="background:transparent;align-items:center; justify-content:center; ">

         <div class="row">

             <div class="col-12 px-0 py-1 mt-4 mb-0 d-flex" style="align-items:center;justify-content:center;">
             <h5  style=" font-family:HeaderFont">
                 Login
             </h5>
            </div>



            <div class="col-12 text-center py-0" style="font-family:BodyFont;">
              <v-form class="row my-1 py-1 px-2 " ref="loginformSm" v-model="formstate">



              <div class="col-12 py-2 my-0 px-2">
              <v-text-field
               style="font-size:13px;"

                 placeholder="Grandmaster"
            label="Email or Username"
             v-model="usernameValue"
            prepend-inner-icon="las la-user"
            :rules="UsernameRule"

             outlined
             type="email"
             color="#3C87CD"
             ></v-text-field>

             </div>

              <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:13px;"
                 placeholder="therepublic"
            :label="$t('general.password')"
              prepend-inner-icon="las la-lock"
             outlined
              v-model="password"

            :rules="passwordRule"
             type="password"
             color="#3C87CD"
             ></v-text-field>

             </div>







               <div class="col-12 py-1 my-0 px-2 text-center mb-2">
                  <div class="row">

                   

                      <div class="col-6 py-0">
                  <v-btn  :loading="loading" type="submit" medium color="#3C87CD" style="font-size:13px;text-transform:none; font-weight:bolder; color:white;font-family:BodyFont;"
                  @click.prevent="loginuser">
                 Login
                  </v-btn>
                    </div>

                     <div class="col-6 py-0">
                <v-btn @click.prevent="handleGitHub"  medium color="#fffff" style="font-size:13px; font-weight:bolder;text-transform:none; color:black;font-family:BodyFont;"
                  >
                 Sign In <v-icon class="ml-1">lab la-github</v-icon>
                  </v-btn>
                    </div>

                  </div>
             </div>

              <div class="col-12 py-1 my-0 px-2 text-center">
                 <div class="row">

                   <div class="col-6">
                    <a @click.prevent="showRegister" style="font-size:12px; text-decoration:underline; color:#3C87CD;font-family:BodyFont;" > Create an account</a>
                 </div>

                  <div class="col-6">
                   <a @click.prevent="showForgot" style="font-size:12px; text-decoration:underline; color:#3C87CD;font-family:BodyFont;" >Forgot password?</a>
                 </div>

                 </div>


             </div>

    <!-- qoutes -->
             <div class="col-12 text-center mt-3 d-flex"  style="z-index:999999999; align-items:center; justify-content:center;">



<div  class="px-5">


<blockquote class="fill" style="font-family:BodyFont; font-size:16px; color:black;">People who are crazy enough to think they can change the world, are the ones who do.</blockquote>

 <p class="text-center" style="font-family:HeaderFont;font-size:16px;">
   - Rob Siltanen
 </p>
       </div>

</div>

 <!-- ends -->

          </v-form>
            </div>

         </div>

          
        </v-card>





</div>
<!-- ends -->

<!-- ends -->

   <!-- bottom component -->
 <bottom></bottom>
 <!-- ends -->

  </v-app>



</template>
<script>
// alert

import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'


export default {
     data () {
      return {
         usernameValue:'',
         password:'',
        loading: false,
        Alert:false,
        alertMsg:'',
        errorState: false,
        formstate:false,
        passwordRule:[
        v => !!v || 'Oh! you missed this.',
           v => v.length >= 8 || 'Password must be more than 8 characters',
        ],
         UsernameRule:[
           v => !!v || 'Oh! you missed this.'
        ]
      }
    },
     mounted(){

       this.checkIfLogin();

       if(this.$root.fromVerifyPage){
          this.showAlert('Hey!','Please login with your email and password','info')
       }
    },
    methods:{
       showRegister: function(){

          if(this.$route.params.referral){
                 this.$router.push({ path: '/sign-up/' + this.$route.params.referral });
         }else{
              
                  this.$router.push({ path: '/sign-up' });
         }

          
        },
        showForgot: function(){
            this.$router.push({ path: '/forgot-password' });
        },
        
      checkIfLogin:function(){

       
        if(this.$root.isLogged){
            this.$router.push({ path: '/channels' });
        }

       },

         handleGitHub:function(){
         this.$root.auth_device_id =  "device_" + Math.random().toString(36).slice(2);
    var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
     let referralUser = null;

        var URL = null;

         if(this.$route.params.referral){
               referralUser = this.$route.params.referral;
                 URL = "https://api.citonhub.com/auth/redirect/" +   this.$root.auth_device_id + '/' + referralUser;
         }else{
              
                 URL = "https://api.citonhub.com/auth/redirect/" +   this.$root.auth_device_id;
         }
 
        var win = window.open(URL, "_blank", strWindowFeatures);
      },
  showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
        { 
       title: title,
         timeout: 5000,
       message: message,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'success'){
         iziToast.success(
        { 
       title: title,
       message: message,
         timeout: 5000,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'warning'){

          iziToast.warning(
        { 
       title: title,
         timeout: 5000,
       message: message,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'error'){
         iziToast.error(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
       position: 'bottomRight',
         timeout: 5000,
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       

    },
    loginuser: function(){

      // this log in the user, save the user details and token on the browser.
      // it is manage using VueX (vue state management system)
            this.errorState = false;
      if(this.formstate){
          this.loading = true;
     this.$root.userPassword = this.password;
     this.$root.userEmail = this.usernameValue;
      this.$root.LocalStore('user_temp_email',[this.usernameValue,this.password]);
     this.$store
        .dispatch('login', {
          username: this.usernameValue,
          password: this.password
        })
        .then(() => {
          const userInfo = localStorage.getItem('user_new')
    if (userInfo) {
      const userData = JSON.parse(userInfo)

        this.$root.username = userData.user.username;
        this.$root.user_temp_id = userData.user.id;
        this.$root.returnedToken = userData.token;

    }

      this.$root.checkUserDevice();

      this.$root.checkauthroot = 'auth';

     
      this.$root.fetchUserDetails();
       this.$root.setEcho();


      let storedTracker = this.$root.getLocalStore('route_tracker_new');

      storedTracker.then((result)=>{
        this.$root.connectToChannel();
        if(result != null ){
            let finalResult = JSON.parse(result);
       this.$router.push({ path: finalResult[0] });
       

        }else{
          
          this.checkIfLogin()

          

        }


      })


        })
        .catch(err => {
          this.loading = false;
           
             if(err.response.status == 404){
              this.$router.push({ path: '/verify' });

             return;
             }
           
          this.showAlert('Oops!','Wrong details, give it another shot.','error')
        })

      }

        },
    }
}
</script>
<style scoped>

  .baseStyle{
    background: transparent !important;
  }
</style>