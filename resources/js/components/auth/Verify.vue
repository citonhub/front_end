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
                 Verify Your Email
             </span>
            </div>

            <div class="col-3 text-center">
            
            </div>

             <div class="col-12 py-2 text-center ">
              <span class="infoclass px-4">
                Enter the 6-digit code sent to your email,<span style="color:#4494a2;"> {{this.$root.userEmail}}</span> 
             </span>
            </div>
           

            <div class="col-12 text-center py-1">
              <v-form class="row my-2 py-2 px-2 ">
              
                  <div class="col-8 offset-2 py-2 my-0 px-2">
              <v-text-field
                style="font-size:14px;"
                 placeholder="enter code..."
            label="Verification Code"
            outlined
            counter="6"
            v-model="verifyCode"
             dense
             type="tel"
             color="#4495a2"
             ></v-text-field>
          
             </div>

             

         
               <div class="col-12 py-1 my-0 px-2 text-center">
                  <v-btn rounded  small color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" :loading="loading" @click="verify">Next</v-btn>
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
        verifyCode:'',
        loading: false,
        Alert:false,
        alertMsg:'',
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
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.emailAlert = false;
     },duration);

    },
   verify:function(){
       this.loading = true;
     axios.post('/verify-user-email',{
                email: this.$root.userEmail,
                code: this.verifyCode
                  })
          .then(response => {
            
           if (response.status == 200) {
               
               if(response.data == 'verified'){
                 this.$router.push({ path: '/set-username' });
               }else{
                 this.loading = false; 
               this.showAlert(5000,'Verification code is incorrect, try again');
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