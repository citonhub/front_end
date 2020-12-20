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
             <h4  style=" font-family:HeaderFont">
                 Enter Your Email
             </h4>
            </div>

            <div class="col-2 text-center">
            
            </div>
           

            <div class="col-12 text-center py-1" style="font-family:BodyFont;">
              <v-form class="row my-2 py-2 px-2 " ref="password" v-model="formstate">
              
                
              <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:13px;"
                label="Email"
                outlined
             v-model="email"
            :rules="emailRule"
            prepend-inner-icon="las la-envelope"
             :error="emailExist"
             type="email"
             color="#3C87CD"
             ></v-text-field>

             </div>

            
        
               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn  :loading="loading" type="submit" medium color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:BodyFont;" 
                 @click.prevent="checkemail">
                 Verify
                  </v-btn>
             </div>

             

          </v-form>
            </div>
        </v-card>

       </div>

  </div>

 <!-- ends -->

 <!-- form for smaller screens -->
  <div class="d-lg-none col-md-8 offset-md-2 px-2  d-flex"  style="overflow-y:auto; align-items:center; justify-content:center; left:0; position:fixed; height:90%; top:10%; ">
    
 
    
     
      <v-card class="py-1 px-2 row" flat style="background:transparent;">
             
            <div class="col-12 px-0 py-1 mt-4 my-2 d-flex" style="align-items:center;justify-content:center;">
             <h5  style=" font-family:HeaderFont">
                   Enter Your Email
             </h5>
            </div>



            <div class="col-12 text-center py-1" style="font-family:BodyFont;">
              <v-form class="row my-1 py-2 px-2 " ref="password" v-model="formstate">
              
                

           <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:12px;"
                label="Email"
             v-model="email"
             outlined
            :rules="emailRule"
            prepend-inner-icon="las la-envelope"
             :error="emailExist"
             type="email"
             color="#3C87CD"
             ></v-text-field>

             </div>

            
        
               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn  :loading="loading" type="submit" small color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:BodyFont;" 
                 @click.prevent="checkemail">
                 Verify
                  </v-btn>
             </div>

               <!-- qoutes -->
             <div class="col-12 text-center mt-3 d-flex"  style="z-index:999999999; align-items:center; justify-content:center;">



<div  class="px-5">


<blockquote class="fill" style="font-family:BodyFont; font-size:16px; color:black;">Knowing is not enough; we must apply. Wishing is not enough; we must do.</blockquote>

 <p class="text-center" style="font-family:HeaderFont;font-size:16px;">
   - Rob Siltanen
 </p>
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
     
     //  this.setEmail();
       
      // this.checkIfLogin();
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