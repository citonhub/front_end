<template>
   <v-app  class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0" style="position:absolute; font-family:BodyText; background:transparent; height:100%; overflow-y:auto; overflow-x:hidden; ">
        <div class="row my-0 py-0 px-0">
       <div class="col-12 py-0 morebackground d-flex">
        <v-card class="py-1 px-2 row">
             <div class="col-3 px-1">
             <span>
                <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
             </span>
            </div>

            <div class="col-6 px-0 d-flex" style="align-items:center;justify-content:center;">
             <span class="login">
                 Join CitonHub
             </span>
            </div>

            <div class="col-3 text-center">
            
            </div>
           

            <div class="col-12 text-center py-1">
              <v-form class="row my-2 py-2 px-2 " ref="register" v-model="formstate">
              
                  <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:12px;"
                 placeholder="name..."
            label="Name"
            counter="20"
            hint="What your parents called you"
            v-model="name"
            :rules="nameRule"
             dense
             color="#4495a2"
             ></v-text-field>

             </div>

              <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:12px;"
                hint="Just let it be valid"
                 placeholder="email..."
            label="Email"
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
                 placeholder="password..."
            label="Password"
             dense
             hint="Don't tell anyone, not even your mum."
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
                 placeholder="confirm password..."
            label="Confirm Password"
             dense
             counter="20"
              v-model="passwordConfirm"
            :rules="comfirmPasswordRule"
             type="password"
             color="#4495a2"
             ></v-text-field>

             </div>
         
         
              
           
              

         
               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn rounded :loading="loading" small color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" 
                  @click="checkemail">
                  Sign up
                  </v-btn>
             </div>


           
             

              
               

          </v-form>
            </div>
        </v-card>
     </div>

        </div>
        <v-fade-transition>
              <div  style="position:absolute; width:100%; height:auto: align-items:center;justify-content:center;top:4%; z-index:123453566;"  class="d-flex">
             <v-alert
      v-model="emailAlert"
      dismissible
      close-icon="mdi-delete"
      color="#3E8893"
       width="auto"
       style="font-size:13px;"
       height="auto"
      border="left"
     
      elevation="2"
      colored-border
     
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
        emailExist: false,
          nameRule:[
             v => !!v || 'Name is required',
           v => v.length <= 20 || 'Name must be less than 20 characters'
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
       this.$root.showHeader = true;
    },
    methods:{
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

    }, checkemail: function(){
            this.emailExist= false;
           this.$refs.register.validate();
           
           if(this.formstate){
              this.loading = true;
             axios.post('/check-if-email-exist',{
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
             this.showAlert(5000,'Failed- ' + error);
              this.loading = false;
          })
       }
        },
      register: function(){
             axios.post('/register',{
                name: this.name,
                email: this.email,
                password: this.password,
                referral: this.$root.referralUser
                  })
          .then(response => {
            
           if (response.status == 200) { 
                
                if(response.data == 'userNotExist'){
                this.showAlert(5000,'oops, referral link seems to be broken');

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
            this.showAlert(5000,'Failed- ' + error);
              this.loading = false;
          })

        },
    }
}
</script>
<style>
.morebackground{
     position: absolute;
     width:100%; 
     top: 0;
     left: 0;
     height:94%; 
     align-items: center;
     justify-content: center;
     background:rgba(38, 82, 89,0.6);
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