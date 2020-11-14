<template>

<v-app style="position:absolute; width:100%; height:100%;  z-index:999999999999999;" class="baseStyle">

    <div class="col-12">

       <div class="row py-0 my-0 px-md-3 px-lg-3">
         <div class="col-4 text-left py-0 my-0">
          <img src="/imgs/CitonHub.png" height="40" width="auto"/>
         </div>
         <div class="col-8 text-right py-0 pt-2 my-0">
             <v-btn rounded to="/login" medium  outlined type="submit" color="#3E8893" style="font-size:12px; font-weight:bolder; font-family: Headertext;" 
                 >Login</v-btn>

                <v-btn rounded  to="/register" medium class="ml-3"  type="submit" color="#3E8893" style="font-size:12px; font-weight:bolder; color:white;font-family: Headertext;" 
                 >Sign up</v-btn>
         </div>


          <div  style=" top:10%; z-index:1000000;"  class="text-center d-lg-block d-none fixed-top col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0"> 
            
     <h4 style="color:#26535a;">{{ $t('general.verify_your_email') }}</h4>
            
                
     </div>



       <div class="col-md-6 offset-md-3 col-lg-4 offset-lg-4  text-center py-0 pt-0 d-flex " style="z-index:9999; top:8%; height:80%; left:0; position:fixed;  align-items:center; justify-content:center;">

          
             
               <v-card class="py-1 px-2 row" style="border-radius:20px;">
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
              <span class="infoclass px-4" style="font-size:13px;">
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

    <img style="position:fixed; height:35%; width:25%; left:-8%; bottom:-5%; z-index:23;" class="d-lg-block d-none" src="/imgs/side2.png">


  



     <img style="position:fixed; height:40%; width:15%; right:-2%; bottom:-12%;z-index:23;" class="d-lg-block d-none" src="/imgs/side1.png">

    

      <img style="position:fixed; height:40%; width:100%;  bottom:0%;"  class="d-md-block d-none" src="/imgs/bottom.png">

      <img style="position:fixed; height:50%; width:100%;  bottom:0%;"  class="d-md-none d-block" src="/imgs/bottom.png">


       <v-fade-transition>
              <div  style="position:fixed; height:auto: align-items:center; left:0; justify-content:center;bottom:15%; z-index:9999999123453566;"   class="d-flex col-md-8 offset-md-2  col-lg-6 offset-lg-3">
             <v-alert
      v-model="Alert"
  
     
      color="#3E8893"
       width="auto"
       class="py-1 px-2"
       rounded
       style="font-size:13px;background:#ffffff; color:#3E8893; border-radius:20px; border:2px solid #3E8893;"
       height="auto"
    
       elevation-10
    
     
     
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
       this.$root.itIsHomePage = true;
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
.baseStyle{
 background: rgb(174,221,228) !important;
background: linear-gradient(90deg, rgba(174,221,228,1) 3%, rgba(255,255,255,1) 88%) !important;
}
</style>