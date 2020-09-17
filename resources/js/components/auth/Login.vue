<template>

<v-app  class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0" style="position:absolute; font-family:BodyText; background:transparent; height:100%; overflow-y:auto; overflow-x:hidden; ">
        <div class="row my-0 py-0 px-0">

           <div  style=" top:5%; z-index:1000000;"  class="text-center fixed-top col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0"> 
            
        <h4 style="color:#26535a;">Login to CitonHub</h4>
            
                
     </div>

         
       <div class="col-12 py-3 morebackground4 d-flex" >
          
           <v-card class="py-1 px-2 row">
             <div class="col-3 px-1">
             <span>
                <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
             </span>
            </div>

            <div class="col-6 px-0 d-flex" style="align-items:center;justify-content:center;">
             <h5 style="color:#26535a;">
                Sign In
             </h5>
            </div>

            <div class="col-3 text-center">
            
            </div>
           

            <div class="col-12 text-center py-1">
              <v-form class="row my-2 py-2 px-2 " ref="loginform" v-model="formstate">
              
                  <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:12px;"
                 placeholder="JsRoland"
            label="Email or Username"
             dense
            
             :error="errorState"
             
             v-model="usernameValue"
             color="#4495a2"
             ></v-text-field>

             </div>

              <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:12px;"
                  placeholder="Javascript"
            label="Password"
             dense
             :error="errorState"
             counter="20"
             :rules="passwordRule"
             v-model="password"
             type="password"
             color="#4495a2"
             ></v-text-field>

             </div>

         
               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn rounded  small  type="submit" color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" :loading="loading" 
                  @click.prevent="loginuser">Login</v-btn>
             </div>


           <div class="col-12 px-0 py-0 pt-2 d-flex" style="align-items:center;justify-content:center;">
              <div class="row py-0 my-0">

                 <div class="col-6 text-center py-0 my-0" @click="showRegister">
                   <span class="forgot" style="cursor:pointer;" >
                  Create an account
               </span>
                 </div>
                 
                <div class="col-6 text-center py-0 my-0">
                  
                   <span class="forgot"  style="cursor:pointer;">
               Forgot password
             </span>
                </div>

                

              </div>
            
            </div>
             

              
               

          </v-form>
            </div>
        </v-card>
     </div>

     <div  style=" height:50%; bottom:-35%;  z-index:1000000;"  class=" fixed-bottom col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0"> 
  
       <img src="/imgs/CitonHub.png"  width="100%" height="100%">
     </div>
         

        </div>

     </v-app>

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
      this.$root.showTabs=false;
       this.$root.showHeader = false;
       this.checkIfLogin();
    },
    methods:{
       showRegister: function(){
            this.$router.push({ path: '/register' });
        },
      checkIfLogin:function(){

          if(this.$root.checkauthroot == 'auth' && this.$root.frompage == 'space'){
             this.$router.push({ path: '/space' });
          } 

           if(this.$root.checkauthroot == 'auth' && this.$root.frompage == 'trends'){
             this.$router.push({ path: '/trends' });
          } 

           if(this.$root.checkauthroot == 'auth' && this.$root.frompage == 'profile'){
             this.$router.push({ path: '/profile' });
          } 

           if(this.$root.checkauthroot == 'auth' && this.$root.frompage == 'duels'){
             this.$router.push({ path: '/duel' });
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
    loginuser: function(){
            this.errorState = false;
      if( this.$refs.loginform.validate()){
          this.loading = true;
         axios.post('/login',{
                username: this.usernameValue,
                password: this.password
                  })
          .then(response => {
             

             if(response.status == 200){

               this.$root.userEmail = this.usernameValue;
                this.$root.userPassword = this.password;
              this.$router.push({ path: '/verify' });

               }
            
            
             if (response.status == 204) {

              this.pageloader= true;
             
            window.location =  this.$root.UrlTrack;
            
             location.reload();
            
            }
              
            
           
            
          })
          .catch(error => {
             this.errorState = true;
           this.showAlert(5000,  '😬 ' + 'Unable to login, please check your login details');
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