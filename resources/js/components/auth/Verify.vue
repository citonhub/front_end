<template>

<div style="position:absolute; width:100%; height:100%; ">

   <!-- header component -->
 <headerTab></headerTab>
 <!-- ends -->

 <!-- Zubs start -->
 <div class="row my-5 py-5">
   <div class="col-md-7"></div>
   <div class="col-md-5 p-5">
     <div class="card shadow">
       <div class="card-body p-5 text-center">
         <h1>Verify Email</h1>
         <small>Enter the 6-digit code sent to your email, user_name</small>
         <form class="mt-3">
           <div class="form-group">
             <input type="number" class="form-control" placeholder="Enter Code...">
           </div>
           <div class="form-group">
             <button class="homeButton px-3 py-2 btn-block mb-2">Next</button>
             <small>Haven't recieved a mail yet? Check your spam or <button class="homeButton px-2 py-1">Resend</button> 11 secs</small>
           </div>
         </form>
       </div>
     </div>
   </div>
 </div>
 <!-- Zubs end -->

   <!-- bottom component -->
 <bottom></bottom>
 <!-- ends -->

  </div>


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

          if(this.$root.userEmail == ''){

             storedEmail.then((result)=>{

                 if(result != null){
                   
                    let finalResult = JSON.parse(result);

                    this.$root.userEmail = finalResult[0];

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