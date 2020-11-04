<template>

<v-app  class="  col-lg-6 offset-lg-3 py-0 my-0 px-0" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;  position:absolute; font-family:BodyText; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
        <div class="row my-0 py-0 px-0">

           <div  style=" top:5%; z-index:1000000;"  class="text-center fixed-top col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0"> 
            
        <h4 style="color:#26535a;">{{ $t('general.verify_your_email') }}</h4>
            
                
     </div>

         
       <div class="col-12 col-lg-8 offset-lg-2 py-3 morebackground4 d-flex" >
          
           <v-card class="py-1 px-2 row">
             <div class="col-1 px-1">
             <span>
                
             </span>
            </div>

            <div class="col-10 px-0 d-flex" style="align-items:center;justify-content:center;">
              <h5 style="color:#26535a;">
                {{ $t('general.verify_email') }}
             </h5>
            </div>

            <div class="col-1 text-center">
            
            </div>

             <div class="col-12 py-2 text-center ">
              <span class="infoclass px-4">
               {{ $t('general.enter_digit') }},<span style="color:#4494a2;"> {{this.$root.userEmail}}</span> 
             </span>
            </div>
           

            <div class="col-12 text-center py-1">
              <v-form class="row my-2 py-2 px-2 ">
              
                  <div class="col-8 offset-2 py-2 my-0 px-2">
              <v-text-field
                style="font-size:14px;"
                 :placeholder="$t('general.enter_code') + '...'"
            :label="$t('general.verification_code')"
            outlined
            counter="6"
            v-model="verifyCode"
             dense
             type="tel"
             color="#4495a2"
             ></v-text-field>
          
             </div>

             

         
               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn rounded  small color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" :loading="loading" @click="verify">{{$t('general.next')}} </v-btn>
             </div>


              <div class="col-12 py-1 my-0 px-2 text-center">

                <span class="forgot1" > {{$t('general.mail_received')}} <v-btn color="#3E8893" x-small  
                style="text-decoration:underline; font-family:HeaderText; color:#ffffff; text-transform:lowercase;" @click="resendMail" :disabled="!showResend" :loading="loadingResend">{{$t('general.resend')}}</v-btn> <span v-if="timer > 0">  {{timer}} sec</span></span>
                
            </div>


           
             

              
               

          </v-form>
            </div>
        </v-card>
     </div>

     <div  style=" height:50%; bottom:-35%;  z-index:1000000;"  class=" fixed-bottom col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0"> 
  
       <img src="/imgs/CitonHub.png"  width="100%" height="100%">
     </div>
         

        </div>
         <v-fade-transition>
              <div  style="position:absolute; width:100%; height:auto: align-items:center;justify-content:center;top:4%; z-index:123453566;"  class="d-flex">
             <v-alert
      v-model="Alert"
      dismissible
      close-icon="mdi-delete"
      color="#3E8893"
       width="auto"
       style="font-size:13px;"
       height="auto"
      border="left"
     
      elevation="2"
      colored-border
     
    >
      {{alertMsg}}
    </v-alert>
        </div>
        </v-fade-transition>
     </v-app>

  
</template>
<script>
export default {
     data () {
      return {
        verifyCode:'',
        loading: false,
        Alert:false,
        alertMsg:'',
        loadingResend:false,
        timer:30,
        showResend:false,
      }
    },
     mounted(){
      this.$root.showTabs=false;
       this.$root.showHeader = false;
       this.setEmail();
    },
    methods:{
      setEmail: function(){
        
         let storedEmail = this.$root.getLocalStore('user_temp_email');
              
              storedEmail.then((result)=>{

                 if(result != null){
                   
                    let finalResult = JSON.parse(result);

                    this.$root.userEmail = finalResult[0];

                 }



              });

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
    showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

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
              this.showAlert(5000,'Mail Sent');


            
            }
            
          })
          .catch(error => {
            this.showAlert(5000,'Failed- ' + error);
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
               
               if(response.data == 'verified'){

                  let storedTracker = this.$root.getLocalStore('is_forget_password');

      storedTracker.then((result)=>{
        
        if(result != null ){
            let finalResult = JSON.parse(result);
            
           if(finalResult[0]){

             this.$router.push({ path: '/reset-password' });

           }else{

             this.$router.push({ path: '/set-username' });

           }
        }
      })

                 
               }else{
                 this.loading = false; 
               this.showAlert(5000,'Verification code is incorrect,please try again');
               }
            
            }else{
              console.log(response.status);
            }
            
            
          })
          .catch(error => {
            this.showAlert(5000,'Failed- ' + error);
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