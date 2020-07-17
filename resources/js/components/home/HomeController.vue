<template>
<div style="overflow-y:hidden;">
      <div v-if="this.$root.showCodeEditor">
            <code-viewer></code-viewer>
      </div>
     
     <share v-if="this.$root.showShare"></share>
    
           
     

       <library-shelves v-if="this.$root.showShelves"></library-shelves>

       

        <full-image-viewer  v-if="this.$root.fullImageViewer"></full-image-viewer>
      
     <div class=" col-md-8 offset-md-2  col-lg-4 offset-lg-4  py-0 px-0 my-0" style="position:absolute;z-index:20; background:white; height:100%;" >

        
    
<virtual-list id="postContainer" 

      :data-key="'id'"
      :data-sources="post_data"
      :data-component="itemComponent"
      :keeps="15"

:style="'background:white; font-family:BodyText;position:absolute;left:0; width:100%; height:100%; overflow-y:' + this.$root.scrollHome + '; overflow-x:hidden; padding-top:8px;padding-bottom:120px;'">
   
       
      
     

     
   
     
    
          
</virtual-list> 

 <span style="position:absolute; top:2.5%; right:3%; z-index:12345665786; background:rgba(38, 82, 89,0.7); border:1px solid transparent; border-radius:7px;" class=" px-1 py-1 d-md-none d-inline-block text-center">
          <img src="imgs/coin.svg" height="22" class="d-block">
          <span class="coin">232</span>

     </span>

<span style="position:absolute; top:2.5%; right:5%; z-index:12345665786; background:rgba(38, 82, 89,0.7); border:1px solid transparent; border-radius:7px;" class=" px-1 py-1 d-none d-md-inline-block text-center">
          <img src="imgs/coin.svg" height="22" class="d-block">
          <span class="coin">232</span>

     </span>



 <span style="position:absolute; top:75.5%; right:3%; z-index:12345665786;" class="d-md-none d-inline-block ">
          <v-btn
                color="#35747e"
                small
                @click="newPost"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-pencil-plus mdi-18px</v-icon>
              </v-btn>
     </span>

      <span style="position:absolute; top:86%; right:5%; z-index:12345665786;"  class="d-none d-md-inline-block">
          <v-btn
                color="#35747e"
                small
                @click="newPost"
               
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-pencil-plus mdi-18px</v-icon>
              </v-btn>
     </span>

 
</div>

  
</div>


</template>
<script>

import Public from './Public'
  import VirtualList from 'vue-virtual-scroll-list'

export default {
      data(){
          return{
            scrollHome: 'hidden',
            itemComponent: Public,
            post_data: this.$root.postData
          }
      },
   components: { 
     'virtual-list': VirtualList
      },
     mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = true;
       this.fetchPosts();
       this.scrollToPost();
       
      
       this.$root.disconnectPost(this.$root.postShelveData);
       
      
      
      
    },
    methods:{
      newPost: function(){
         this.$router.push({ path: '/new-post' });
        },
         fetchPosts:function(){
            if(this.$root.postData.length != 0){
                this.post_data = this.$root.postData;

               this.$root.trackPostConnections(this.$root.postData);
               
            }else{
                axios.get('/fetch-post')
      .then(response => {
      
      if (response.status == 200) {
        
        this.post_data = response.data;
        this.$root.postData = response.data;
       
      
        this.$root.trackPostConnections(this.$root.postData);
       
        
        
     }
       
     
     })
     .catch(error => {
    
     }) 
            }
          
        },
       
      scrollToPost: function(){

          if(this.$root.fromView){
               setTimeout(() => {
         
           var container = document.querySelector('#postContainer');
           
        var element =  document.querySelector('#post' + this.$root.PostRefId);
       
        var top = element.offsetTop;
        container.scrollTo(0, top);
        },500)
          }
         
      
   

      }

    }
}
</script>
<style>
.coin{
  font-size: 10px;
  font-weight: bolder;
  color: white;
}
</style>