<template>

<v-app style="position:absolute; width:100%; height:100%; ">

   <!-- header component -->
 <headerTab></headerTab>
 <!-- ends -->

 <!-- quote -->
  <div class="d-none col-lg-5 text-center  d-lg-flex"  style="z-index:99999999; align-items:center; justify-content:center; position:fixed; height:70%; top:10%;">
    
 
     
<div style="" class="px-5 col-8 offset-2">


<blockquote class="fill" style="font-family:BodyFont; font-size:25px; color:black;">Its a new day and a new chance to try again.</blockquote>
 
 
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
                 Reset password
             </h4>
            </div>

            <div class="col-2 text-center">
            
            </div>
           

            <div class="col-12 text-center py-1" style="font-family:BodyFont;">
              <v-form class="row my-2 py-2 px-2 " ref="password" v-model="formstate">
              
                

              <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                 style="font-size:13px;"
                 placeholder="password"
            :label="$t('general.password')"
              outlined
              v-model="password"
              @click:append="switchTxtView()"	
              
               prepend-inner-icon="las la-lock"
               :append-icon="prependIconText"
            :rules="passwordRule"
             :type="passwordState"
             color="#3C87CD"
             ></v-text-field>

             </div>

              <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:13px;"
                placeholder="confirm password"
            v-model="passwordConfirm"
            :rules="comfirmPasswordRule"
              prepend-inner-icon="las la-lock"
             outlined
             type="password"
             color="#3C87CD"
             ></v-text-field>

             </div>

            
        
               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn  :loading="loading" type="submit" medium color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:BodyFont;" 
                 @click.prevent="updatepassword">
                 Reset
                  </v-btn>
             </div>

             

          </v-form>
            </div>
        </v-card>

       </div>

  </div>

 <!-- ends -->

 <!-- form for smaller screens -->
  <div class="d-lg-none col-md-8 offset-md-2 px-2  d-flex"  style="overflow-y:auto;z-index:99999999999; align-items:center; justify-content:center; left:0; position:fixed; height:90%; top:10%;">
    
 
    
     
      <v-card class="py-1 px-2 row" flat style="background:transparent;">
             
            <div class="col-12 px-0 py-1 my-2 d-flex" style="align-items:center;justify-content:center;">
             <h5  style=" font-family:HeaderFont">
                  Reset password
             </h5>
            </div>



            <div class="col-12 text-center py-1" style="font-family:BodyFont;">
              <v-form class="row my-1 py-2 px-2 " ref="password" v-model="formstate">
              
                

            <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                 style="font-size:13px;"
                 placeholder="password"
            :label="$t('general.password')"
              outlined
              v-model="password"
              @click:append="switchTxtView()"	
              
               prepend-inner-icon="las la-lock"
               :append-icon="prependIconText"
            :rules="passwordRule"
             :type="passwordState"
             color="#3C87CD"
             ></v-text-field>

             </div>

              <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:13px;"
                placeholder="confirm password"
            v-model="passwordConfirm"
            :rules="comfirmPasswordRule"
              prepend-inner-icon="las la-lock"
             outlined
             type="password"
             color="#3C87CD"
             ></v-text-field>

             </div>

            
        
               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn  :loading="loading" type="submit" small color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:BodyFont;" 
                 @click.prevent="updatepassword">
                 Reset
                  </v-btn>
             </div>

               <!-- qoutes -->
             <div class="col-12 text-center mt-3 d-flex"  style="z-index:999999999; align-items:center; justify-content:center;">



<div  class="px-5">


<blockquote class="fill" style="font-family:BodyFont; font-size:16px; color:black;">Its a new day and a new chance to try again.</blockquote>

       </div>

</div>

 <!-- ends -->


             
          </v-form>
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
export default {
     data () {
      return {
        usernameValue:'',
        loading: false,
        Alert:false,
        alertMsg:'',
        prependIconText:'las la-eye',
        formstate:false,
        passwordState:'password',
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
     
     //  this.setEmail();
       
      // this.checkIfLogin();
    },
    methods:{
      switchTxtView:function(){
      
         if(this.passwordState == 'password'){

             this.passwordState = 'text';

             this.prependIconText = 'las la-eye-slash'

           
         }else{
            this.passwordState = 'password';

             this.prependIconText = 'las la-eye'
         }
     

      },
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