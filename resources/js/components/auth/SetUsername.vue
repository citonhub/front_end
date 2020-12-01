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
        usernameExist:false,
        UsernameRule:[
           v => !!v || 'Username is required',
           v => v.length < 16 || 'Username must be less than 16 characters',
            v => (v.split(' ').length <= 1) || 'no one space allowed'
        ]
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
        
         let storedEmail = this.$root.getLocalStore('user_temp_email');
  
          if(this.$root.userEmail == ''){

             storedEmail.then((result)=>{

                 if(result != null){
                   
                    let finalResult = JSON.parse(result);

                    this.$root.userEmail = finalResult[0];
                    this.$root.userPassword = finalResult[1];

                 }



              });

          }
              
             
          
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
    showVerifiedAlert:function (){
     this.showAlert(5000,'Welcome your highness 🤴 👸 , my kingdoom awaits your awesome codes 🥰.')
    },
    setUsername: function(){
       this.usernameExist= false;
           this.$refs.username.validate();
           
           if(this.formstate){
              this.loading = true;
             axios.post('/check-if-username-exist',{
                email: this.$root.userEmail,
                username: this.usernameValue
                  })
          .then(response => {
            
            if (response.status == 200) {
                 
            if(response.data == 'exist'){
                 
               this.loading = false;
              
                 this.usernameExist = true;
                 this.showAlert(5000,'Username exists. please, change username and try again');
            }else{   
                
               
                 this.loginuser();

            }  
            }else{
              console.log(response.status);
            }
            
          })
          .catch(error => {
             this.showAlert(5000,'Failed- ' + '😬 ' + error );
              this.loading = false;
          })
       }
    },
     loginuser: function(){
            

     this.$store
        .dispatch('login', {
          username: this.usernameValue,
          password: this.$root.userPassword
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
          this.showAlert(5000,  '😬 ' + 'Unable to login, please check your login details');
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