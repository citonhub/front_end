<template> 
    
   
    <v-card class="col-lg-4  py-3 d-flex flex-column col-md-8 " style="align-items:center; justify-content:center;" >

    <img  src="/imgs/notify.gif" height="140" />
   
   <div class="py-3 text-center">

        <span style="font-size:13px; font-family:MediumFont;">Turn on notification for this device to receive updates on your activities on CitonHub </span> 

   </div>

   <div class="text-center col-12">

        <div class="row">

            <div class="col-6 text-center">

                  <v-btn small @click="enableNoficication" color="#3C87CD" style="color:white;text-transform:normal;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" >Turn on</v-btn>

            </div>

             <div class="col-6 text-center">
         <v-btn small @click="that.$root.showUserNotification = false" style="text-transform:normal;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" >close</v-btn>
            </div>

        </div>
             
   </div>
    

    </v-card>
   
    
    
</template>
<script>
export default {
     data () {
      return {
        that:this,
      
      
      }
    },
    mounted(){
      
    },
     methods:{
       enableNoficication:function(){

            this.$root.askPermission();
            this.$root.showUserNotification = false

       }
     }
}
</script>
<style scoped>

</style>