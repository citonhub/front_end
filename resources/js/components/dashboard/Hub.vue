<template>
<div class="fixed-layout">
 

   <div style="width:100%; height:auto; overflow-y:hidden; overflow-x:hidden; ">
     
     <file-upload  :UploadType="this.$root.UploadType"  :UploadMessage="this.$root.UploadMessage" v-if="this.$root.UploadResources"></file-upload>
      <share v-if="this.$root.showShare"></share>
       <image-editor v-if="this.$root.showImageEditor"></image-editor>
      
      <router-view></router-view>
   
      

    
      
     
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
    overflow-y: auto;
   
  }
  
</style>
