<template>
   <v-app  class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0" style="position:absolute; font-family:BodyText; background:transparent; height:100%; overflow-y:auto; overflow-x:hidden; ">
        <div class="row my-0 py-0 px-0">
       <div class="col-12 py-0 morebackground d-flex">
        <v-card class="py-1 px-2 row">
             <div class="col-3 px-1">
             <span>
                
             </span>
            </div>

            <div class="col-6 px-0 d-flex" style="align-items:center;justify-content:center;">
             <span class="login">
                 Set Your Username
             </span>
            </div>

            <div class="col-3 text-center">
            
            </div>
    

            <div class="col-12 text-center py-1">
              <v-form class="row my-2 py-2 px-2 " ref="username"  v-model="formstate">
              
                  <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:12px;"
                 placeholder="Lord_Snow"
            label="Username"
             dense
             :error="usernameExist"
             v-model="usernameValue"
             :rules="UsernameRule"
             counter="15"
             type="text"
             color="#4495a2"
             ></v-text-field>
          
             </div>

             

         
               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn rounded  small color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" :loading="loading" @click="setUsername">Continue</v-btn>
             </div>


           
             

              
               

          </v-form>
            </div>
        </v-card>
     </div>

        </div>

        <v-fade-transition>
              <div  style="position:absolute; width:100%; height:auto: align-items:center;justify-content:center;top:4%; z-index:123453566;"  class="d-flex">
             <v-alert
      v-model="Alert"
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
        usernameValue:'',
        loading: false,
        Alert:false,
        alertMsg:'',
        formstate:false,
        usernameExist:false,
        UsernameRule:[
           v => !!v || 'Username is required',
           v => v.length < 16 || 'Username must be less than 16 characters',
            v => (v.split(' ').length <= 1) || 'no one space allowed'
        ]
      }
    },
     mounted(){
      this.$root.showTabs=false;
       this.$root.showHeader = true;
       this.showVerifiedAlert()
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
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

    },
    showVerifiedAlert:function (){
     this.showAlert(5000,'Welcome your highness, my kingdoom awaits your humble codes.')
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
                 
            if(response.data == 'exist'){
                 
               this.loading = false;
              
                 this.usernameExist = true;
                 this.showAlert(5000,'Username exists,change username and try again');
            }else{   
                
               
                 this.loginuser();

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
    loginuser: function(){
            axios.post('/login',{
                username: this.usernameValue,
                password: this.$root.userPassword
                  })
          .then(response => {
             
            
            
             if (response.status == 204) {
              this.$root.pageloader= true;
             window.location =  this.$root.UrlTrack;
             location.reload();
              
            }
              
            
           
            
          })
          .catch(error => {
            console.log(error);
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