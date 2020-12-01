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
         <h1>Test</h1>
         <form>
           <div class="form-group">
             <input type="text" class="form-control">
           </div>
           <div class="form-group">
             <input type="text" class="form-control">
           </div>
           <div class="form-group">
             <button class="homeButton px-3 py-2 btn-block">Reset Password?</button>
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
        usernameValue:'',
        loading: false,
        Alert:false,
        alertMsg:'',
        formstate:false,
       passwordConfirm:'',
            password:'',
             comfirmPasswordRule: [
          v => !!v || 'Confirm Password is required',
           v => this.password ==  this.passwordConfirm || 'Password do not match',
            ],
             passwordRule:[
        v => !!v || 'password is required',
           v => v.length >= 8 || 'Password must be more than 8 characters',
            ],
      }
    },
     mounted(){
      this.$root.showTabs=false;
       this.$root.showHeader = false;
       this.setEmail();
        this.$root.itIsHomePage = true;
       this.checkIfLogin();
    },
    methods:{
        updatepassword: function(){
          this.loading = true;
         axios.post('/reset-password',{
             password: this.password,
             email:this.$root.userEmail
         }).then(response =>{
              if (response.status == 200) {

                   this.loginuser();

              }else{

                  

              }
         })
         .catch(error => {
            this.showAlert(5000,'Failed- ' + error);
              this.loading = false;
          })
          
      },
       setEmail: function(){
        
         let storedEmail = this.$root.getLocalStore('user_temp_email');
              
              storedEmail.then((result)=>{

                 if(result != null){
                   
                    let finalResult = JSON.parse(result);

                    this.$root.userEmail = finalResult[0];
                    this.$root.userPassword = finalResult[1];

                 }



              });
          
      },
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
   
  loginuser: function(){
            

     this.$store
        .dispatch('login', {
          username: this.$root.userEmail,
          password: this.password
        })
        .then(() => {
          const userInfo = localStorage.getItem('user')
    if (userInfo) {
      const userData = JSON.parse(userInfo)

        this.$root.username = userData.user.username;
        this.$root.user_temp_id = userData.user.id;
        this.$root.returnedToken = userData.token;
    
    }

      this.$root.checkauthroot = 'auth';

      this.$root.fetchUserDetails();
      this.$root.setEcho();
          if(this.$root.frompage == 'space'){
        this.$root.checkUserDevice();

      }
      

      let storedTracker = this.$root.getLocalStore('route_tracker');

      storedTracker.then((result)=>{
        
        if(result != null ){
            let finalResult = JSON.parse(result);
            
       this.$router.push({ path: finalResult[0] });

        this.$root.itIsHomePage = false;
        }else{
          this.checkIfLogin()
           this.$root.itIsHomePage = false;
        }
      })

       


        })
        .catch(err => {
          this.showAlert(5000,  '😬 ' + 'Unable to login, please try again');
              this.loading = false;
        })
  
    
           
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

</style>