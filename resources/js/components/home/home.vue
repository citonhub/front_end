<template>
<div class="fixed-layout">
 

   <div style="width:100%; height:auto; overflow-y:hidden; overflow-x:hidden; ">
      
      <div v-if="this.$root.showCodeEditor">
            <code-viewer></code-viewer>
      </div>
     
     <share v-if="this.$root.showShare"></share>

      <on-boarding  :content="this.$root.boardContent"  v-if="this.$root.showBoard" :btnLabel="this.$root.boardBtnLabel"></on-boarding>
    
           
     

       <library-shelves v-if="this.$root.showShelves"></library-shelves>

       

        <full-image-viewer  v-if="this.$root.fullImageViewer"></full-image-viewer>
        
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
