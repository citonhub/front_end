<!-- main hub file containing where all components used are btought in-->

<template>
<div class="fixed-layout">
 

   <div style="width:100%; height:auto; overflow-y:hidden; overflow-x:hidden; ">
      
     
       <div style="z-index:9999938859;"  v-if="this.$root.showCodeEditor"  >

<!-- code editor component brought into hub-->
            <code-editor></code-editor>


        </div>
     
     <share v-if="this.$root.showShare"></share>

     
       <library-shelves v-if="this.$root.showShelves"></library-shelves>

        
        <div style="z-index:9999938859;"  v-if="this.$root.fullImageViewer"  >
          <!-- image viewer component brought into hub-->

           <full-image-viewer ></full-image-viewer>

        </div>

         <div style="z-index:99999388599;"  v-if="this.$root.showCreatepost"  >

           <new-post ></new-post>

        </div>

       

        <div v-if="this.$root.showPostModal " style="z-index:999938859;">
            <post></post>
      </div>

       <div v-if="this.$root.showPostViewModal " style="z-index:999938859;">
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
