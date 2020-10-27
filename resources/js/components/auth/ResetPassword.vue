<template>
<v-app  class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-0 my-0 px-0" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6; position:absolute; font-family:BodyText; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
        <div class="row my-0 py-0 px-0">

           <div  style=" top:5%; z-index:1000000;"  class="text-center fixed-top col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0"> 
            
        <h4 style="color:#26535a;">Reset Password</h4>
            
                
     </div>

         
       <div class="col-12 col-lg-8 offset-lg-2 py-3 morebackground4 d-flex" >
          
          <v-card class="py-1 px-2 row">
             <div class="col-1 px-1">
             <span>
                
             </span>
            </div>

            <div class="col-10 px-0 d-flex" style="align-items:center;justify-content:center;">
            
              <h5  style="color:#26535a;">
              Enter New Password
             </h5>
            </div>

            <div class="col-1 text-center">
            
            </div>
    

            <div class="col-12 text-center py-1">
              <v-form class="row my-2 py-2 px-2 " ref="password"  v-model="formstate">
              
                  <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:12px;"
                 placeholder="Javascript"
            :label="$t('general.password')"
             dense
             
              v-model="password"
             
              counter="20"
            :rules="passwordRule"
             type="password"
             color="#4495a2"
             ></v-text-field>

             </div>

              <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:12px;"
                 placeholder="Javascript"
                 :label="$t('general.confirm_password')"
             dense
             counter="20"
              v-model="passwordConfirm"
            :rules="comfirmPasswordRule"
             type="password"
             color="#4495a2"
             ></v-text-field>

             </div>
             

         
               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn rounded  type="submit" small color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" :loading="loading" @click.prevent="updatepassword">Reset</v-btn>
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
              <div  style="position:fixed; height:auto: left:0; align-items:center;justify-content:center;bottom:15%; z-index:9999999123453566;"   class="d-flex col-md-8 offset-md-2  col-lg-6 offset-lg-3">
             <v-alert
      v-model="Alert"
  
     
      color="#3E8893"
       width="auto"
       class="py-1 px-2"
       rounded
       style="font-size:13px;background:#3E8893; color:white; border-radius:20px;"
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
             this.$router.push({ path: '/duel' });
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
        }else{
          this.checkIfLogin()
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