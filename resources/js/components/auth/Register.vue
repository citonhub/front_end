<template>


<div style="position:absolute; width:100%; height:100%; ">

   <!-- header component -->
 <headerTab></headerTab>
 <!-- ends -->

 <div style="position:fixed;top:5%;" class="row">
<div style="margin-top:20px; font-family:BodyFont;"  class="col-lg-5 ml-4 mt-6 mr-4">

  <div style="" class="px-5 mt-4 col-10 offset-2">


<blockquote class="fill" style="font-family:BodyFont; font-size:25px; color:black;"> People who are crazy enough to think they can change the world, are the ones who do.</blockquote>
 
 <p class="text-center" style="font-family:HeaderFont;font-size:25px;">
   – Rob Siltanen
 </p>
       </div>

</div>

<div class="col-lg-4 mb-4 sign-form"  style="z-index:2; align-items:center; justify-content:center; height:70%; ">

 

<v-card class="col-12">
  <h4  style=" font-family:HeaderFont">
                 Register
             </h4>
<div style="font-family:BodyFont" class="col-12">
  <v-form class="row my-2 py-2 px-2 " v-model="formstate">

    <div class="col-12  py-2 my-0 px-2">
 <v-text-field
                style="font-size:13px;"
                
                 placeholder="Full Name"
            label="Full Name"
             v-model="name"
            prepend-inner-icon="las la-user"
            :rules="nameRule"
           
             outlined
             type="text"
             color="#3C87CD"
             ></v-text-field>
             </div>

             <div class="col-12  py-2 my-0 px-2">
  <v-text-field
                style="font-size:13px;"
                
                 placeholder="Email Address"
            label="Email Address"
             v-model="email"
            prepend-inner-icon="la la-envelope-open"
            :rules="emailRule"
           
             outlined
             type="email"
             color="#3C87CD"
             ></v-text-field>
             </div>

              <div class="col-12  py-2 my-0 px-2"> 
<v-text-field
                style="font-size:13px;"
                
                 placeholder="Password"
            label="Password"
             v-model="password"
            prepend-inner-icon="las la-lock"
            :rules="passwordRule"
           
             outlined
             type="password"
             color="#3C87CD"
             ></v-text-field>

              </div>

               <div class="col-12  py-2 my-0 px-2"> 
<v-text-field
                style="font-size:13px;"
                
                 placeholder="Confirm Password"
            label="Confirm Password"
             v-model="passwordConfirm"
            prepend-inner-icon="las la-lock"
            :rules="comfirmPasswordRule"
           
             outlined
             type="password"
             color="#3C87CD"
             ></v-text-field>

              </div>

               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn flat :loading="loading" type="submit" medium color="#3AC3A9" style="font-size:13px; font-weight:bolder; color:white;font-family:BodyFont;" 
                  @click.prevent="register">
                 Register
                  </v-btn>
             </div>

  </v-form>
</div>
</v-card>

</div>
 </div>


<!-- sign up form-->




   <!-- bottom component -->
 <bottom></bottom>
 <!-- ends -->

  </div>


</template>
<script>
export default {
     data () {
      return {
        emailExist: false,
          nameRule:[
             v => !!v || 'Name is required',
           v => v.length <= 80 || 'Name must be less than 80 characters'
            ],
            name:'',
            Alert:false,
            passwordConfirm:'',
            alertMsg:'',
            password:'',
            email:'',
             emailRule: [
            v => !!v || 'Email is required',
             v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            comfirmPasswordRule: [
          v => !!v || 'Confirm Password is required',
           v => this.password ==  this.passwordConfirm || 'Password do not match',
            ],
             passwordRule:[
        v => !!v || 'password is required',
           v => v.length >= 8 || 'Password must be more than 8 characters',
            ],
            formstate:false,
            loading: false,
            alertMsg:'',
            emailAlert:false
      }
    },
     mounted(){
      this.$root.showTabs=false;
       this.$root.showHeader = false;
        this.$root.itIsHomePage = true;
       this.checkIfLogin();
    },
    methods:{
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
        this.emailAlert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.emailAlert = false;
     },duration);

    },
    checkemail: function(){
            this.emailExist= false;
           this.$refs.register.validate();
           
           if(this.formstate){

            
              
              this.loading = true;
             axios.post( '/check-if-email-exist',{
                email: this.email,
                  })
          .then(response => {
            
            if (response.status == 200) {
                 
            if(response.data == 'exist'){
                 
               this.loading = false;
              
                 this.emailExist = true;
                 this.showAlert(5000,'Email exists,change email and try again');
            }else{   
                
               
                 this.register();

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
      register: function(){

         this.$root.LocalStore('user_temp_email',[this.email,this.password]);
        
         this.$root.LocalStore('is_forget_password',[false]);
             axios.post( '/register',{
                name: this.name,
                email: this.email,
                password: this.password,
                referral: this.$root.referralUser
                  })
          .then(response => {
            
           if (response.status == 200) { 
                
                if(response.data == 'userNotExist'){
                this.showAlert(5000,'Oops!, referral link seems to be broken');

                 return;
                }
               this.$root.userEmail = this.email;
                this.$root.userPassword = this.password;
              this.$router.push({ path: '/verify' });
            
            }else{
              console.log(response.status);
            }
            
            
          })
          .catch(error => {
            this.showAlert(5000,  '😬 ' +'Failed- ' + error);
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