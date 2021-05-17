<template>
<v-app style="position:absolute; width:100%; height:100%; ">

   <!-- header component -->
 <headerTab></headerTab>
 <!-- ends -->

 <!-- quote -->
  <div class="d-none col-lg-5 text-center  d-lg-flex"  style="z-index:99999999; align-items:center; justify-content:center; position:fixed; height:70%; top:10%;">
    
 
     
<div style="" class="px-5 col-8 offset-2">


<blockquote class="fill" style="font-family:BodyFont; font-size:25px; color:black;">The only impossible journey is the one you never begin.</blockquote>
 
 <p class="text-center" style="font-family:HeaderFont;font-size:25px;">
   - Anthony Robbins
 </p>
       </div>

  </div>




<!-- ends -->

<!-- form goes here -->


 <!-- for for larger screen  -->
       <div class=" col-lg-7 offset-lg-5 px-5  d-none d-lg-flex "  style=" z-index:99999999; align-items:center; justify-content:center; position:fixed; height:70%; top:10%;">
     
<div style="" class="col-7 ">
     
      <v-card class="py-1 pt-2 px-2 row" style="border-radius:10px;">
             <div class="col-2 px-1">
             <span>
               
             </span>
            </div>

            <div class="col-8 px-0 d-flex" style="align-items:center;justify-content:center;">
             <h4  style=" font-family:HeaderFont">
                Verify Your Email
             </h4>
            </div>

            <div class="col-2 text-center">
            
            </div>
            
             <div class="col-12 py-2 text-center ">
              <span  style="font-size:14px; font-family:BodyFont;"  class=" px-4">
              <span>A verification code has been sent to your email. Kindly check your inbox</span>,<span style="color:#3C87CD;"> {{this.$root.userEmail}}</span> 
             </span>
            </div>

            <div class="col-12 text-center py-1" style="font-family:BodyFont;">
              <v-form class="row my-2 py-2 px-2 " ref="verify" v-model="formstate">
              
                

              <div class="col-8 offset-2 py-2 my-0 px-2">
              <v-text-field
                 style="font-size:13px;"
                :placeholder="$t('general.enter_code') + '...'"
            :label="$t('general.verification_code')"
              outlined
            v-model="verifyCode"
            counter="6"
             type="tel"
             color="#3C87CD"
             ></v-text-field>

             </div>

            
        
               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn  :loading="loading" type="submit" medium color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:BodyFont;" 
                 @click.prevent="verify">
                 Verify
                  </v-btn>
             </div>
              
               <div class="col-12 py-1 my-0 mt-2 px-2 text-center">

                <span   style="font-size:13px; font-family:BodyFont; color:#3C87CD;"
                > {{$t('general.mail_received')}} <v-btn color="#3C87CD" x-small  
                style="text-decoration:underline;font-size:13px; font-family:BodyFont; color:#ffffff; text-transform:lowercase;" @click="resendMail" :disabled="!showResend" :loading="loadingResend">{{$t('general.resend')}}</v-btn> <span v-if="timer > 0">  {{timer}} sec</span></span>
                
            </div>
             

          </v-form>
            </div>
        </v-card>

       </div>

  </div>

 <!-- ends -->

 <!-- form for smaller screens -->
  <div class="d-lg-none col-md-8 offset-md-2 px-2 d-block"  style="z-index:9999999;overflow-y:auto; left:0; position:fixed; height:100%; top:0%; ">
    
 
       <div class="col-12 py-1 px-1">

          <a href="/"> <img alt="citonhub logo" class="d-lg-none d-block" src="/imgs/logo.png" height="35px"></a>

        </div>
     
      <v-card class="py-1 px-2 col-12" flat  style="background:transparent;align-items:center; justify-content:center;">
      
      <div class="row">

         <div class="col-12 px-0 py-1 mt-4 my-2 d-flex" style="align-items:center;justify-content:center;">
             <h5  style=" font-family:HeaderFont">
                 Verify Your Email
             </h5>
            </div>

           <div class="col-12 py-2 text-center ">
              <span  style="font-size:13px; font-family:BodyFont;"  class=" px-4">
            <span>A verification code has been sent to your email. Kindly check your inbox</span>,<span style="color:#3C87CD;"> {{this.$root.userEmail}}</span> 
             </span>
            </div>

            <div class="col-12 text-center py-1" style="font-family:BodyFont;">
              <v-form class="row my-1 py-2 px-2 " ref="verify" v-model="formstate">
              
                

           <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                 style="font-size:13px;"
                :placeholder="$t('general.enter_code') + '...'"
            :label="$t('general.verification_code')"
              outlined
            v-model="verifyCode"
            counter="6"
             type="tel"
             color="#3C87CD"
             ></v-text-field>

             </div>

            
        
               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn  :loading="loading" type="submit" small color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:BodyFont;" 
                 @click.prevent="verify">
                 Verify
                  </v-btn>
             </div>


             <div class="col-12 py-1 my-0 mt-2 px-2 text-center">

                <span   style="font-size:12px; font-family:BodyFont; color:#3C87CD;"
                > {{$t('general.mail_received')}} <v-btn color="#3C87CD" x-small  
                style="text-decoration:underline;font-size:13px; font-family:BodyFont; color:#ffffff; text-transform:lowercase;" @click="resendMail" :disabled="!showResend" :loading="loadingResend">{{$t('general.resend')}}</v-btn> <span v-if="timer > 0">  {{timer}} sec</span></span>
                
            </div>

            <!-- qoutes -->
             <div class="col-12 text-center mt-3 d-flex"  style="z-index:999999999; align-items:center; justify-content:center;">



<div  class="px-5 mt-5">


<blockquote class="fill" style="font-family:BodyFont; font-size:16px; color:black;">The only impossible journey is the one you never begin.</blockquote>

 <p class="text-center" style="font-family:HeaderFont;font-size:16px;">
  - Anthony Robbins
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

import '../../bootstraps/globalPackage'

import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

export default {
     data () {
      return {
        verifyCode:'',
        loading: false,
        Alert:false,
        alertMsg:'',
        loadingResend:false,
        formstate:false,
        timer:30,
        showResend:false,
      }
    },
     mounted(){
     
       this.setEmail();
    },
    methods:{
      setEmail: function(){
        
         let storedEmail = this.$root.getLocalStore('user_temp_email');

          if(this.$root.userEmail == ''){
                this.$root.fromVerifyPage = true;
            

              this.$router.push({ path: '/login' });

              return;

             storedEmail.then((result)=>{

                 if(result != null){
                   
                    let finalResult = JSON.parse(result);
 
                    if(this.$root.userEmail == ''){
                         this.$root.userEmail = finalResult[0];
                     }
                    this.$root.userPassword = finalResult[1];

                 }



              });


          }
              
             
          let interval = null;
          
         interval = setInterval(()=>{
            
             
             if(this.timer == 0){
                this.showResend = true;
               clearInterval(interval);

             }else{
               this.timer--
             }

             
              
          },1000)

          
          
      },
       viewPost: function(){
            this.$router.push({ path: '/post' });
        },
        library: function(){
            this.$router.push({ path: '/library' });
        },
        goBack: function(){
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
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
    resendMail: function(){
    
     this.loadingResend = true;
     axios.post( '/resend-email',{
                email: this.$root.userEmail
                  })
          .then(response => {
            
           if (response.status == 200) {
               
              this.loadingResend = false;
              this.showResend = false;
              this.timer = 30;
              this.setEmail();
               this.showAlert('Sent!','Mail has been re-sent','success')


            
            }
            
          })
          .catch(error => {
            this.showAlert('Oops!','Something went wrong, please try again.','error')
              this.loading = false;
          })
    },
   verify:function(){
       this.loading = true;
     axios.post( '/verify-user-email',{
                email: this.$root.userEmail,
                code: this.verifyCode
                  })
          .then(response => {
            
           if (response.status == 200) {
               
               if(response.data.status == 'verified'){

                  let storedTracker = this.$root.getLocalStore('is_forget_password');

      storedTracker.then((result)=>{
        
        if(result != null ){
            let finalResult = JSON.parse(result);
            
           if(finalResult[0]){

             this.$root.LocalStore('is_forget_password',[false]);

             this.$router.push({ path: '/reset-password' });
              
           }else{

             this.$router.push({ path: '/set-username' });

           }
        }
      })

                 
               }else{
                 this.loading = false; 
              this.showAlert('Oops!','Wrong code, give it another shot.','error')
               }
            
            }else{
              console.log(response.status);
            }
            
            
          })
          .catch(error => {
            this.showAlert('Oops!','Something went wrong, please try again.','error')
              this.loading = false;
          })
   }
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

 .forgot1{
     cursor: pointer;
    
     color: #4494a2;
     font-size:12px;
 }

</style>