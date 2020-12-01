<template>


<div style="position:absolute; width:100%; height:100%; ">

   <!-- header component -->
 <headerTab></headerTab>
 <!-- ends -->

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
         password:'',
        loading: false,
        Alert:false,
        alertMsg:'',
        errorState: false,
        formstate:false,
        passwordRule:[
        v => !!v || 'password is required',
           v => v.length >= 8 || 'Password must be more than 8 characters',
        ],
         UsernameRule:[
           v => !!v || 'Username is required',
           v => v.length < 16 || 'Username must be less than 16 characters'
        ]
      }
    },
     mounted(){
     
      // this.checkIfLogin();
    },
    methods:{
       showRegister: function(){
            this.$router.push({ path: '/register' });
        },
        showForgot: function(){
            this.$router.push({ path: '/forgot-password' });
        },
      checkIfLogin:function(){

         // check if user is logged in , if yes redirect

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

      // this log in the user, save the user details and token on the browser. 
      // it is manage using VueX (vue state management system)
            this.errorState = false;
      if(this.$refs.loginform.validate()){
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
          const userInfo = localStorage.getItem('user')
    if (userInfo) {
      const userData = JSON.parse(userInfo)

        this.$root.username = userData.user.username;
        this.$root.user_temp_id = userData.user.id;
        this.$root.returnedToken = userData.token;
    
    }

      this.$root.checkauthroot = 'auth';

      if(this.$root.frompage == 'space'){
        this.$root.checkUserDevice();

      }

      this.$root.fetchUserDetails();
       this.$root.setEcho();
       

      let storedTracker = this.$root.getLocalStore('route_tracker');

      storedTracker.then((result)=>{
        this.$root.connectToChannel();
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
          this.showAlert(5000,  '😬 ' + 'Unable to login, please check your login details');
              this.loading = false;
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