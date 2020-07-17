<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">{{this.$root.selectedshelvename}}</span>
         </div>
         <div class="col-2 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            
         </div>
       

           
      </div>
     </div>

       

        <virtual-list id="postContainerShelve" 
      class="py-1 my-0"
      :data-key="'id'"
      :data-sources="post_data"
      :data-component="itemComponent"
      :keeps="15"

      style="position:absolute;top:7%; height:93%;width:100%; left:0; overflow-y:auto; overflow-x:hidden; ">
   
       
      
     

     
   
     
    
          
</virtual-list> 

       
         </div>
       </div>
     </v-app>
</template>
<script>

import ShelveContent from './ShelveContent'
import VirtualList from 'vue-virtual-scroll-list'

export default {
    data(){
        return{
          
        myhtml:'<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Veniam atque quod voluptatum dolorum dicta tempore,</p>',
         itemComponent: ShelveContent,
            post_data:this.$root.postShelveData,
       
        }
    },

   components: { 
     'virtual-list': VirtualList
      },
   
   mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       this.fetchPosts();
       this.$root.postShelveData = [];
       this.scrollToPost();
       this.$root.disconnectPost(this.$root.postData);
    },
    methods:{
        showHome: function(){
      this.$router.push({ path: '/' });
   },
    fetchPosts:function(){
            
                axios.get('/fetch-shelve-post/'+ this.$root.selectedshelveId)
      .then(response => {
       
      if (response.status == 200) {
        
        this.post_data = response.data;
        this.$root.postShelveData = response.data;
        
        this.$root.trackPostConnections(this.$root.postShelveData);
        
        this.$root.allChannel = [];
        
     }
       
     
     })
     .catch(error => {
    
     }) 
            
          
        },
      scrollToPost: function(){

          if(this.$root.fromView){
               setTimeout(() => {
         
           var container = document.querySelector('#postContainerShelve');
           
        var element =  document.querySelector('#postShelve' + this.$root.PostRefId);
       
        var top = element.offsetTop;
        container.scrollTo(0, top);
        },500)
          }
         
      
   

      },
  
    goBack() {
          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
    },
   
}
</script>
<style>

</style>