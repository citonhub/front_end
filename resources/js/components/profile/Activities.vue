<template>
<div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute;z-index:20; background:white; height:100%;">
       
     <profile-top></profile-top>


      <virtual-list 
     
      :data-key="'id'"
      v-if="post_data.length != 0"
      :data-sources="post_data"
      :data-component="itemComponent"
      :keeps="15"

      style="background:white; font-family:BodyText;position:absolute;left:0;width:100%; height:80%; overflow-y:auto; overflow-x:hidden; padding-top:40px !important;padding-bottom:140px !important;">
      
</virtual-list> 

   <div v-else   style="background:white; font-family:BodyText;position:absolute;left:0;width:100%; height:80%; overflow-y:auto; overflow-x:hidden; padding-top:40px !important;padding-bottom:140px !important;" >
      <div class="col-12 py-0 my-0">

         <div class="row py-0 my-0 px-1">
          <div  class="col-6 py-0 my-0 px-0">
          <v-skeleton-loader
        type="list-item-avatar-two-line"
          ></v-skeleton-loader>
          </div>       
     <div class="col-12 py-1 my-0">
       <v-skeleton-loader
      class="mx-auto "
        height="60px"
      type="image"
    ></v-skeleton-loader>
     </div>
         </div>


          <div class="row py-0 my-0 px-1" >
          <div  class="col-6 py-0 my-0 px-0">
          <v-skeleton-loader
        type="list-item-avatar-two-line"
          ></v-skeleton-loader>
          </div>       
     <div class="col-12 py-1 my-0">
       <v-skeleton-loader
      class="mx-auto "
        height="60px"
      type="image"
    ></v-skeleton-loader>
     </div>
         </div>

          <div class="row py-0 my-0 px-1" >
          <div  class="col-6 py-0 my-0 px-0">
          <v-skeleton-loader
        type="list-item-avatar-two-line"
          ></v-skeleton-loader>
          </div>       
     <div class="col-12 py-1 my-0">
       <v-skeleton-loader
      class="mx-auto "
        height="60px"
      type="image"
    ></v-skeleton-loader>
     </div>
         </div>

          <div class="row py-0 my-0 px-1" >
        
        
          </div>
         
      </div>
      
    
     
</div>

</div>

</template>
<script>

import Public from './Public'
  import VirtualList from 'vue-virtual-scroll-list'

export default {
    data(){
          return{
           
            itemComponent: Public,
            post_data: this.$root.postData
          }
      },
       components: { 
     'virtual-list': VirtualList
      },
      mounted(){
      this.fetchPosts();
       this.scrollToPost();
       this.$root.checkIfUserIsLoggedIn('profile');
      },
      methods:{
             
        fetchPosts:function(){
            if(this.$root.postData.length != 0){
                this.post_data = this.$root.postData;

               this.$root.trackPostConnections(this.$root.postData);
               
            }else{
                axios.get('/fetch-activities-'+ this.$route.params.username)
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
         
      
   

      },
      }
}
</script>
<style>

</style>