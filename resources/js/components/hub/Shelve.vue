<!-- Component displaying user library content-->

<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="  col-lg-6 offset-lg-3 py-0 px-0 my-0" style=" border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6; position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
           <!-- button navigating back to the hub tab-->
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">{{this.$root.selectedshelvename}}</span>
         </div>
         <div class="col-2 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            
         </div>
       

           
      </div>
     </div>

       
<div v-if="post_data != null">

  <!-- loop through shelves to display saved posts-->

   <div id="postContainerShelve" 
      class=" my-0 postScroll"
      
      v-if="post_data.length != 0"
      
      style="background:transparent; font-family:BodyText;position:fixed;left:0;  width:100%; height:100% ; overflow-y:auto;overflow-x:hidden; padding-top:50px;padding-bottom:250px;">
<!-- public component imported from public.vue-->
       <public v-for="(post,index) in post_data" :key="index" :index="post.id" :source="post"></public>
      
</div> 


<!-- section cotaining text displayed if shelf contains no post-->
   <div v-if="post_data.length == 0" style="background:transparent; top:6%; font-family:BodyText;position:fixed;left:0; width:100%; height:100% ; overflow-y:auto; overflow-x:hidden; " class="text-center">
       
       <span style="color:gray; font-size:12px;">No post found</span>
   </div>


</div>
     
<div v-else  :style="'background:transparent; font-family:BodyText;position:fixed;left:0; top:6%;  width:100%; height:100%; overflow-y:' + 'hidden' + '; overflow-x:hidden; padding-top:8px;padding-bottom:120px;'">
      <div class="  col-lg-6 offset-lg-3 py-0 my-0">

         <div class="ml-lg-1 row py-0 my-0 px-1">
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


          <div class="ml-lg-1  row py-0 my-0 px-1" >
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

          <div class="ml-lg-1 row py-0 my-0 px-1" >
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

          <div class="ml-lg-1 row py-0 my-0 px-1" >
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

       
         <div class="ml-lg-1 row py-0 my-0 px-1" >
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


        <div class="ml-lg-1 row py-0 my-0 px-1" >
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


         
      </div>
      
    
     
</div>

       
         </div>
       </div>
     </v-app>
</template>
<script>




export default {
    data(){
        return{
          
        myhtml:'<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Veniam atque quod voluptatum dolorum dicta tempore,</p>',
            post_data:this.$root.postShelveData,
       
        }
    },

   components: { 
    
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
            
                axios.get( '/fetch-shelve-post/'+ this.$root.selectedshelveId)
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
<style scoped>
  .postScroll::-webkit-scrollbar {
  width: 6px;
}
 
.postScroll::-webkit-scrollbar-track {
   box-shadow: inset 0 0 6px rgba(111, 181, 195, 0.9);
  border:1px solid transparent;
  border-radius:6px;
}
 
.postScroll::-webkit-scrollbar-thumb {
   background-color: #4ba6b4;
  outline: 1px solid #4ba6b4;
  border:1px solid transparent;
   border-radius:6px;
}
</style>