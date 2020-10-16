<template>

<v-app  class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-0 my-0 px-0" style=" border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;position:absolute; font-family:BodyText; background:transparent; height:100%; overflow-y:auto; overflow-x:hidden; ">
        <div class="row my-0 py-0 px-0">

           <div  style=" top:5%; z-index:1000000;"  class="text-center fixed-top col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0"> 
            
        <h4 style="color:#26535a;">{{ $t('general.create_an_account') }}</h4>
            
                
     </div>

         
       <div class="col-12 col-lg-8 offset-lg-2  py-3 morebackground4 d-flex" >
          
          <v-card class="py-1 px-2 row">
             <div class="col-2 px-1">
             <span>
                <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
             </span>
            </div>

            <div class="col-8 px-0 d-flex" style="align-items:center;justify-content:center;">
             <h5  style="color:#26535a;">
                 {{ $t('general.join_citonhub') }}
             </h5>
            </div>

            <div class="col-2 text-center">
            
            </div>
           

            <div class="col-12 text-center py-1">
              <v-form class="row my-2 py-2 px-2 " ref="register" v-model="formstate">
              
                  <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:12px;"
                 placeholder="James Roland"
            :label="$t('general.Name')"
            counter="80"
            v-model="name"
            :rules="nameRule"
             dense
             color="#4495a2"
             ></v-text-field>

             </div>

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
                  <v-btn rounded :loading="loading" type="submit" small color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" 
                  @click.prevent="checkemail">
                  {{ $t('general.sign_up') }}
                  </v-btn>
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
        emailExist: false,
          nameRule:[
             v => !!v || 'Name is required',
           v => v.length <= 80 || 'Name must be less than 80 characters'
            ],
            name:'',
            passwordConfirm:'',
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