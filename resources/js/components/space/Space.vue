<template>
<div class="fixed-layout">
 
     <share v-if="this.$root.showShare"></share>

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
    overflow-y: auto;
   
  }
  
</style>
