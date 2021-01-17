<template>

<v-app style="position:absolute; width:100%; height:100%; ">

   <!-- header component -->
 <headerTab></headerTab>
 <!-- ends -->


<!-- quote -->
  <div class="d-none col-lg-5 text-center  d-lg-flex"  style="z-index:99999999; align-items:center; justify-content:center; position:fixed; height:70%; top:10%;">
    
 
     
<div style="" class="px-5 col-8 offset-2">


<blockquote class="fill" style="font-family:BodyFont; font-size:25px; color:black;">Knowing is not enough; we must apply. Wishing is not enough; we must do.</blockquote>
 
 <p class="text-center" style="font-family:HeaderFont;font-size:25px;">
   - Rob Siltanen
 </p>
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
             <h5  style=" font-family:HeaderFont">
                 Set your username
             </h5>
            </div>

            <div class="col-2 text-center">
            
            </div>
           

            <div class="col-12 text-center py-1" style="font-family:BodyFont;">
              <v-form class="row my-2 py-2 px-2 " ref="username" v-model="formstate">
              
                
              <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:13px;"
                label="Username"
                outlined
             v-model="usernameValue"
            persistent-hint
            :rules="UsernameRule"
                counter="15"
            hint="What do you want us to call you?"
             :error="usernameExist"
            prepend-inner-icon="las la-user"
             color="#3C87CD"
             ></v-text-field>

             </div>

            
        
               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn  :loading="loading" type="submit" medium color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:BodyFont;" 
                 @click.prevent="setUsername">
                 Set
                  </v-btn>
             </div>

             

          </v-form>
            </div>
        </v-card>

       </div>

  </div>

 <!-- ends -->

 <!-- form for smaller screens -->
  <div class="d-lg-none col-md-8 offset-md-2 px-2  "  style="z-index:99999999;overflow-y:auto; left:0; position:fixed; height:100%; top:0%; ">
    
 
        <div class="col-12 py-1 px-1">

          <a href="/"> <img alt="citonhub logo" class="d-lg-none d-block" src="/imgs/logo.png" height="35px"></a>

        </div>
     
      
      <v-card class="py-1 px-2 col-12 mt-5" flat style="background:transparent;align-items:center; justify-content:center;">
              
              <div class="row">

                 <div class="col-12 px-0 py-0 mt-4 my-0 d-flex" style="align-items:center;justify-content:center;">
             <h5  style=" font-family:HeaderFont">
                 Set your username
             </h5>
            </div>

            <div class="col-12 text-center py-1" style="font-family:BodyFont;">
              <v-form class="row my-1 py-1 px-2 " ref="username" v-model="formstate">
              
           <div class="col-12 py-1 my-0 px-2">
              <v-text-field
                  style="font-size:12px;"
                label="Username"
                outlined
                :rules="UsernameRule"
                  counter="15"
             v-model="usernameValue"
            persistent-hint
             prepend-inner-icon="las la-user"
            hint="What do you want us to call you?"
             :error="usernameExist"
             color="#3C87CD"
             ></v-text-field>

             </div>

            
        
               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn  :loading="loading" type="submit" small color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:BodyFont;" 
                 @click.prevent="setUsername">
                 Set
                  </v-btn>
             </div>


              <!-- qoutes -->
             <div class="col-12 text-center mt-3 d-flex"  style="z-index:999999999; align-items:center; justify-content:center;">



<div  class="px-5 mt-5">


<blockquote class="fill" style="font-family:BodyFont; font-size:16px; color:black;">Knowing is not enough; we must apply. Wishing is not enough; we must do.</blockquote>

 <p class="text-center" style="font-family:HeaderFont;font-size:16px;">
   - Rob Siltanen
 </p>
       </div>

</div>

 <!-- ends -->


             
          </v-form>
            </div>

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

import '../../bootstraps/globalPackage'

import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
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
           v => !!v || 'Oh!, you miss this.',
           v => v.length < 16 || 'Username must be less than 16 characters',
            v => (v.split(' ').length <= 1) || 'Oops!,no space allowed'
        ]
      }
    },
     mounted(){
    
      this.setEmail();
     this.showVerifiedAlert();
    
    },
    methods:{
      showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
        { 
       title: title,
         timeout: 5000,
       message: message,
       zindex:'9999999999',
       position: 'bottomRigh  t',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'success'){
         iziToast.success(
        { 
       title: title,
       message: message,
         timeout: 5000,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'warning'){

          iziToast.warning(
        { 
       title: title,
         timeout: 5000,
       message: message,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'error'){
         iziToast.error(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
       position: 'bottomRight',
         timeout: 5000,
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       

    },
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

        
        if(this.$root.isLogged){
            this.$router.push({ path: '/hub' });
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
   
    showVerifiedAlert:function (){
     this.showAlert('Nice!','Email verified','success')
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
                 
            if(response.data.status == 'exist'){
                 
               this.loading = false;
              
                 this.usernameExist = true;
               
               
                    this.showAlert('Oops!','Username exists, try again','error')
            }else{   
                
               
                 this.loginuser();

            }  
            }else{
              console.log(response.status);
            }
            
          })
          .catch(error => {
             this.showAlert('Oops!','Something went wrong, please try again.','error')
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

      this.$root.checkUserDevice();

      this.$root.checkauthroot = 'auth';

     
      this.$root.fetchUserDetails();
       this.$root.setEcho();


      let storedTracker = this.$root.getLocalStore('route_tracker');

      storedTracker.then((result)=>{
        this.$root.connectToChannel();
        if(result != null ){
            let finalResult = JSON.parse(result);
       this.$router.push({ path: finalResult[0] });
       

        }else{
          
          this.checkIfLogin()

          

        }


      })


        })
        .catch(err => {
          this.loading = false;
          this.showAlert('Oops!','Wrong details, give it another shot.','error')
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