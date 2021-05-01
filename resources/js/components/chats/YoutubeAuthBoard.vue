<template>
     <div class="px-2 py-2 col-12"  @click.stop="preventClose">
           
              <v-card class="col-lg-4 offset-lg-4 py-1  col-md-8 offset-md-2">
                  <div class="col-12 px-1 text-left">
                      <v-btn icon @click="goBack"> <v-icon>las la-arrow-left </v-icon> </v-btn>
                  </div>

                  <div class="col-12 py-0 text-center">
                        <h5>Sign in to Youtube</h5>
                  </div> 

                  <div class="col-12 text-center">
                       <v-icon style="font-size:55px; color:#FF0000;">mdi mdi-youtube</v-icon>
                  </div> 

                  <div class="col-12 py-1 d-flex flex-row" style="align-items:center;">
                    <div class="mr-2">
                         <v-icon color="#3C87CD">las la-play-circle</v-icon>
                    </div>

                    <div>
                    <div style="font-family:BodyFont;font-size:13px;" >Import your Youtube videos</div>
                    </div>
                  </div>

                   <div class="col-12 py-1 d-flex flex-row" style="align-items:center;">
                    <div class="mr-2">
                         <v-icon color="#3C87CD">las la-youtube</v-icon>
                    </div>

                    <div>
                    <div style="font-family:BodyFont;font-size:13px;" >Subscribe to new channels</div>
                    </div>
                  </div>


                  <div class="col-12 py-1 d-flex flex-row" style="align-items:center;">
                    <div class="mr-2">
                         <v-icon color="#3C87CD">las la-thumbs-up</v-icon>
                    </div>

                    <div>
                    <div style="font-family:BodyFont;font-size:13px;" >Like and dislike videos</div>
                    </div>
                  </div>


                  <div class="col-12 my-2">
                        <v-btn block medium text rounded :loading="loading" @click="handleYouTubeAuth" style="background:#3C87CD;font-family:MediumFont; color:white; font-size:14px; text-transform:none;">Sign In</v-btn>
                  </div>


              </v-card>
     </div>
</template>
<script>
export default {

     data(){
        return{
         that: this,
        loading:false
        }
    },
    methods:{
      preventClose:function(){

      },
       goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

            
       
        },
         handleYouTubeAuth:function(){
             this.loading = true
          
           var strWindowFeatures = "location=yes,height=770,width=720,scrollbars=yes,status=yes";
        var URL = 'https://api.beta.citonhub.com/initiate-google-auth/' + this.$root.username;

        var win = window.open(URL, "_blank", strWindowFeatures);
        this.checkYoutubeStatus();

      },
      checkYoutubeStatus:function(){
            axios.get('/get-youtube-status')
      .then(response => {
      
      if (response.status == 200) {

         
        let status = response.data.youtube_connected;

        if(status){
          this.goBack();
            this.$root.youtube_connected = true;
        }else{
            setTimeout(() => {
                 this.checkYoutubeStatus();
            }, 3000);
        }
            
     }
       
     
     })
     .catch(error => {
       
        setTimeout(() => {
                 this.checkYoutubeStatus();
            }, 2000);
       
    
     }) 

      }
    }
}
</script>
<style scoped>

</style>