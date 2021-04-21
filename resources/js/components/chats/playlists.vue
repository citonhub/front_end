<template>
  <div class="py-1 px-0">
    

   <div class="d-flex flex-row flex-wrap col-12 py-1 px-1 px-md-2">
 
    <template v-if="showPlaylist">
         <v-card flat class="d-flex flex-row px-1  mb-2 col-12" v-for="(video,index) in videos" :key="index" @click="showContent" style="background: rgba(125, 179, 229, 0.4);">
              <div class="mr-2 ">
                 <v-icon color="#000000" class="ml-2">las la-play-circle</v-icon>
              </div>

              <div>
              <span  style="font-family:BodyFont;color:black;font-size:13px;">{{video}}</span>
              </div>

              <div class="ml-auto px-2">
               <span class="d-flex flex-row"
                style="font-family:BodyFont;align-items:center; justify-content:center; color:black;font-size:13px; background:white; height:26px; width:26px; border:1px solid #ffffff;border-radius:50%;">12</span>
              </div>

        </v-card>
    </template>

    <div class="col-12 text-center">

          <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-1 text-center">Import playlist from your YouTube channel</div>

    </div>
     

      <div class="col-12 text-center">
            <v-btn @click="handleYouTubeAuth" round medium outlined style="color:#FF0000; font-family:BodyFont;font-size:13px; text-transform:none;border-radius:18px;" color="#FF0000">
               <v-icon class="px-2" style="font-size:35px; color:#FF0000;">mdi mdi-youtube</v-icon> 

               <span>Sign In</span>
            </v-btn>
      </div>
      

   </div>

  </div>
</template>

<script>
export default {
data(){
    return{
         videos:[
        'Vue Routes',
        'Props',
        'Data Binding',
        'Components',

    ]
    }
},
 methods:{
      showContent:function(){
           this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/resource_content' });
      },
      handleYouTubeAuth:function(){
          
           var strWindowFeatures = "location=yes,height=770,width=720,scrollbars=yes,status=yes";
        var URL = 'https://api.beta.citonhub.com/initiate-google-auth/' + this.$root.username;

        var win = window.open(URL, "_blank", strWindowFeatures);

        setTimeout(() => {
             
        }, 4000);
      }
    }
}
</script>

<style>

</style>