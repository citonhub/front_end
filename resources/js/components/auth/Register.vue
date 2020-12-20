<template>

 <!-- changed the div to v-app so the vuetify componenets can work well -->
<v-app style="position:absolute; width:100%; height:100%; ">

   <!-- header component -->
 <headerTab></headerTab>
 <!-- ends -->

 <!-- quote -->

 <!-- use d-lg-flex to displsy flex for larger and d-none to hide for smaller screens 
   the col-lg-5 is use to give the div a width.. the div is fixed itself and given an height 70% of the screen
   all the content in the div is centralized using flexbox -->
  <div class="d-none col-lg-5 text-center  d-lg-flex"  style="z-index:99999999; align-items:center; justify-content:center; position:fixed; height:70%; top:10%;">
    
 
     
<div style="" class="px-5 col-8 offset-2">


<blockquote class="fill" style="font-family:BodyFont; font-size:25px; color:black;">Act as if what you do makes a difference. It does.</blockquote>
 
 <p class="text-center" style="font-family:HeaderFont;font-size:25px;">
   - William James
 </p>
       </div>

  </div>

<!-- this is for small screen, the same is done just like above.. but it fixed to the bottom instead.. using the bottom:1%;  in the style-->


<!-- ends -->

<!-- form goes here -->


 <!-- for for larger screen  -->

 <!-- this is displayed only for larger screens.. It is fixed and given a height of 70% of the screen.. the content in it is centralize using flexbox
   the col-lg-7 is use to give it a width and the offset-lg-5 is use to push it to the rigth i.e skiping the first 5 columns..
   this will prevent it from overlaping with the quote above -->
       <div class=" col-lg-7 offset-lg-5 px-5  d-none d-lg-flex "  style="z-index:9999999999; align-items:center; justify-content:center; position:fixed; height:70%; top:9%;">
     
<div style="" class="col-7 ">
     
      <v-card class="py-1 pt-2 px-2 row" style="border-radius:10px;">
             <div class="col-2 px-1">
             <span>
               
             </span>
            </div>

            <div class="col-8 px-0 d-flex" style="align-items:center;justify-content:center;">
             <h4  style=" font-family:HeaderFont">
                Create Your Account
             </h4>
            </div>

            <div class="col-2 text-center">
            
            </div>
            
            

            <div class="col-12 text-center py-1" style="font-family:BodyFont;">
              <v-form class="row my-2 py-2 px-2 " ref="verify" v-model="formstate">
              
                
 <div class="col-12 py-1 my-0 px-2">
              <v-text-field
                 style="font-size:13px;"
                 placeholder="name"
            label="Your Name"
            counter="80"
            v-model="name"
            outlined
             prepend-inner-icon="las la-user"
            :rules="nameRule"
             color="#3C87CD"
             ></v-text-field>

             </div>

              <div class="col-12 py-1 my-0 px-2">
              <v-text-field
                style="font-size:13px;"
                
                 placeholder="example@email.com"
            label="Email"
             v-model="email"
              prepend-inner-icon="las la-envelope"
          
            :rules="emailRule"
             :error="emailExist"
             outlined
             type="email"
             color="#3C87CD"
             ></v-text-field>

             </div>

             <div class="col-12 py-1 my-0 px-2">
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

             
        
               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn  :loading="loading" type="submit" medium color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:BodyFont;" 
                 @click.prevent="checkemail">
                 Sign Up
                  </v-btn>
             </div>

              <div class="col-12 py-1 my-0  px-2 text-center">

                <span   style="font-size:13px; font-family:BodyFont; color:gray;"
                > By click on sign up, you agree with our <a href="/terms-of-use">terms of use </a>and <a href="/privacy-policy">privacy policy</a>.
                </span>
                
            </div>

              <div class="col-12 py-1 my-0 mt-1 px-2 text-center">

                <span   style="font-size:13px; font-family:BodyFont; color:gray;"
                >Do you have an account? <router-link  style="font-size:13px; font-family:BodyFont; color:#3C87CD;" to="/login">LOGIN</router-link>.
                </span>
                
            </div>
               
               
              
             

          </v-form>
            </div>
        </v-card>

       </div>

  </div>

 <!-- ends -->

 <!-- form for smaller screens -->
 <!-- for smaller and medium screen..  -->
  <div class="d-lg-none col-md-8 offset-md-2 px-2  d-flex"  style=" overflow-y:auto; align-items:center; justify-content:center; left:0; position:fixed; height:90%; top:10%; ">
    
 
    
     
      <v-card class="py-1 px-2 row" flat style="background:transparent;">
             
            <div class="col-12 px-0 py-1  my-0 mt-4 d-flex" style="align-items:center;justify-content:center;">
             <h5  style=" font-family:HeaderFont">
                 Create Your Account
             </h5>
            </div>



            <div class="col-12 text-center py-1" style="font-family:BodyFont;">
              <v-form class="row my-1 py-2 px-2 " ref="verify" v-model="formstate">
              
                

           <div class="col-12 py-0 my-0 px-2">
              <v-text-field
                 style="font-size:12px;"
                 placeholder="name"
            label="Your Name"
            counter="80"
            v-model="name"
            
            outlined
             prepend-inner-icon="las la-user"
            :rules="nameRule"
             color="#3C87CD"
             ></v-text-field>

             </div>

              <div class="col-12 py-0 my-0 px-2">
              <v-text-field
                style="font-size:12px;"
                
                 placeholder="example@email.com"
            label="Email"
             v-model="email"
              prepend-inner-icon="las la-envelope"
           
            :rules="emailRule"
             :error="emailExist"
             outlined
             type="email"
             color="#3C87CD"
             ></v-text-field>

             </div>

             <div class="col-12 py-0 my-0 px-2">
              <v-text-field
                 style="font-size:12px;"
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


               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn  :loading="loading" type="submit" small color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:BodyFont;" 
                 @click.prevent="checkemail">
                 Sign Up
                  </v-btn>
             </div>

             <div class="col-12 py-0 my-0  px-2 text-center">

                <span   style="font-size:12px; font-family:BodyFont; color:gray;"
                > By click on sign up, you agree with our <a href="/terms-of-use">terms of use </a>and <a href="/privacy-policy">privacy policy</a>.
                </span>
                
            </div>

            <div class="col-12 py-1 my-0  px-2 text-center">

                <span   style="font-size:12px; font-family:BodyFont; color:gray;"
                >Have an account already?<router-link  style="font-size:12px; font-family:BodyFont; color:#3C87CD;" to="/login">LOGIN</router-link>.
                </span>
                
            </div>


           
            


             
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
            prependIconText:'las la-eye',
           passwordState:'password',
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