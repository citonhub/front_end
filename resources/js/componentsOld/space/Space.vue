<template>
<div class="fixed-layout">


   <!-- other modal component -->
     <share v-if="this.$root.showShare"></share>

     <file-upload  :UploadType="this.$root.UploadType"  :UploadMessage="this.$root.UploadMessage" v-if="this.$root.UploadResources"></file-upload>

     <enable-notify v-if="this.$root.shownotificationboard"></enable-notify>

    <!-- ends -->

   <div style="width:100%; height:auto; overflow-y:hidden; overflow-x:hidden; ">

     <!-- entry point for vue-router -->
      
      <router-view></router-view>

     <!-- ends -->
   </div>

</div>
  
</template>

<script>
 export default {
    data () {
      return {
       
      }
    },
  }
</script>
<style >
  .fixed-layout{
    position: fixed;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
   
  }
  
</style>
