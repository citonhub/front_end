<template>
<div class="fixed-layout">
 
     <share v-if="this.$root.showShare"></share>

     <file-upload  :UploadType="this.$root.UploadType"  :UploadMessage="this.$root.UploadMessage" v-if="this.$root.UploadResources"></file-upload>

     <enable-notify v-if="this.$root.shownotificationboard"></enable-notify>

      <on-boarding  :content="this.$root.boardContent"  v-if="this.$root.showBoard" :btnLabel="this.$root.boardBtnLabel"></on-boarding>

   <div style="width:100%; height:auto; overflow-y:hidden; overflow-x:hidden; ">

     
      
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
    overflow-y: hidden;
   
  }
  
</style>
