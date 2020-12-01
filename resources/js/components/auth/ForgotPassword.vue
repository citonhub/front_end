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
        loading: false,
        Alert:false,
        alertMsg:'',
        formstate:false,
        emailExist:false,
       email:'',
        emailRule: [
            v => !!v || 'Email is required',
             v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
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
        setEmail: function(){
          
          // check if the user email has been lost, if yes.. Load it from the local storage
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

           // check if the user is logged in, if yes.. then redirect

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
   
   checkemail: function(){

      // this check if user mail exists
            this.emailExist= false;
           this.$refs.password.validate();
           
           if(this.formstate){

           this.$root.LocalStore('user_temp_email',[this.email,null]);
              
              this.loading = true;
             axios.post( '/check-if-email-exist',{
                email: this.email,
                from_password: true
                  })
          .then(response => {
            
            if (response.status == 200) {

               // if the request was successful and the eamil exist.. rediect to the verification page
               // else show alert that mail does not exist
                 
            if(response.data == 'exist'){

                 this.$root.userEmail = this.email;
                   this.$root.LocalStore('is_forget_password',[true]);
               
              this.$router.push({ path: '/verify' });
                 
              
            }else{   
                
               
                 this.loading = false;
              
                 this.emailExist = true;
                 this.showAlert(5000,'Can\'t find Email,please try again');

            }  
            }else{
              console.log(response.status);
            }
            
          })
          .catch(error => {
             this.showAlert(5000, '😬 ' + 'Failed- ' + error);
              this.loading = false;
          })
       }
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