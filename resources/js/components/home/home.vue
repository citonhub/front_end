<template>
<div class="fixed-layout">
 

   <div style="width:100%; height:auto; overflow-y:hidden; overflow-x:hidden; ">
      
     
       <div style="z-index:9999938859;"  v-if="this.$root.showCodeEditor"  >

            <code-editor></code-editor>

        </div>
     
     <share v-if="this.$root.showShare"></share>

     

      <on-boarding  :content="this.$root.boardContent"  v-if="this.$root.showBoard" :btnLabel="this.$root.boardBtnLabel"></on-boarding>
    
           
     

       <library-shelves v-if="this.$root.showShelves"></library-shelves>

        
        <div style="z-index:9999938859;"  v-if="this.$root.fullImageViewer"  >

           <full-image-viewer ></full-image-viewer>

        </div>

       

        <div v-if="this.$root.showPostModal && this.$root.postViewType == 'full'" style="z-index:999938859;">
            <post></post>
      </div>

       <div v-if="this.$root.showPostModal  && this.$root.postViewType == 'comment'" style="z-index:999938859;">
            <post-comment-view></post-comment-view>
      </div>
        
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
