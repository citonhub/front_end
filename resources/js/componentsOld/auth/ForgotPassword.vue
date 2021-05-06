<template>

<v-app style="position:absolute; width:100%; height:100%;  z-index:999999999999999;" class="baseStyle">

    <div class="col-12">

       <div class="row py-0 my-0 px-md-3 px-lg-3">
          <!-- top bar -->
         <div class="col-4 text-left py-0 my-0">
          <img src="/imgs/CitonHub.png" height="40" width="auto"/>
         </div>
         <div class="col-8 text-right py-0 pt-2 my-0">
             <v-btn rounded  medium to="/login"  outlined type="submit" color="#3E8893" style="font-size:12px; font-weight:bolder; font-family: Headertext; z-index:898566897;" 
                 >Login</v-btn>

                <v-btn rounded to="/register" medium class="ml-3"  type="submit" color="#3E8893" style="font-size:12px; font-weight:bolder; color:white;font-family: Headertext;z-index:898566897;" 
                 >Sign up</v-btn>
         </div>
         <!-- ends -->


          <div  style=" top:10%; z-index:1000000;"  class="text-center d-lg-block d-none fixed-top col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0"> 
            
        <h4 style="color:#26535a;">Forgot Password</h4>
            
                
     </div>


 <!-- forgot password main component -->
       <div class="col-md-6 offset-md-3 col-lg-4 offset-lg-4  text-center py-0 pt-0 d-flex " style="z-index:9999; top:8%; height:80%; left:0; position:fixed;  align-items:center; justify-content:center;">

          
             
              <v-card class="py-1 px-2 row" style="border-radius:20px;">
             <div class="col-1 px-1">
             <span>
                
             </span>
            </div>

            <div class="col-10 px-0 d-flex" style="align-items:center;justify-content:center;">
            
              <h5  style="color:#26535a;">
              Enter Your Email
             </h5>
            </div>

            <div class="col-1 text-center">
            
            </div>
    

            <div class="col-12 text-center py-1">
              <v-form class="row my-2 py-2 px-2 " ref="password"  v-model="formstate">
              
                  <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:12px;"
                
                 placeholder="jamesroland@email.com"
            label="E-mail"
             v-model="email"
            :rules="emailRule"
             :error="emailExist"
             dense
             type="email"
             color="#4495a2"
             ></v-text-field>
          
             </div>

               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn rounded  type="submit" small color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" :loading="loading" @click.prevent="checkemail">Verify</v-btn>
             </div>

          </v-form>
            </div>
        </v-card>
            
       </div>

       </div>

    </div>
<!-- ends -->

   <!-- bottom component -->
 <bottom></bottom>
 <!-- ends -->

<!-- alert -->
       <v-fade-transition>
              <div  style="position:fixed; height:auto: align-items:center; left:0; justify-content:center;bottom:15%; z-index:9999999123453566;"   class="d-flex col-md-8 offset-md-2  col-lg-6 offset-lg-3">
             <v-alert
      v-model="Alert"
  
     
      color="#3E8893"
       width="auto"
       class="py-1 px-2"
       rounded
       style="font-size:13px;background:#ffffff; color:#3E8893; border-radius:20px; border:2px solid #3E8893;"
       height="auto"
    
       elevation-10
    
     
     
    >
     {{alertMsg}}
    </v-alert>
        </div>
        </v-fade-transition>

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