<template>
<div style="overflow-y:hidden;">
      
      
     <div class=" col-md-8 offset-md-2  col-lg-4 offset-lg-4  py-0 px-0 my-0" style="position:absolute;z-index:20; background:white; height:100%;" >

      



          <div id="postContainer" 
      v-if="post_data.length != 0"
    
       class="postScroll"
    
    :style="'background:transparent; font-family:BodyText;position:fixed;left:0; width:100%; height:100%;overflow-y:' + 'auto' + '; overflow-x:hidden; padding-top:8px;padding-bottom:120px;'">
        
     <public v-for="(post,index) in post_data" :key="index" :index="post.id" :source="post"></public>
         
    </div> 

<div v-else  :style="'background:transparent; font-family:BodyText;position:fixed;left:0; width:100%; height:100%; overflow-y:' + 'auto' + '; overflow-x:hidden; padding-top:8px;padding-bottom:120px;'">
      <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0">

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

      <span style="position:absolute; top:83%; right:5%; z-index:12345665786;"  class="d-none d-md-inline-block">
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



export default {
      data(){
          return{
            scrollHome: 'hidden',
            post_data: this.$root.postData
          }
      },
   components: { 
   
      },
     mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = true;
       this.fetchPosts();
       this.scrollToPost();
       
         if(this.$root.postShelveData != null){
     this.$root.disconnectPost(this.$root.postShelveData);
         }
      
      
      
   
      
      
      
      
    },
    methods:{
      activateBot:function(){
         this.$root.selectedPage  = this.$root.userPageTrack.filter((page)=>{
            return page.page_name == 'public';
          });
         
          if(this.$root.selectedPage.length != 0){
               
              if(this.$root.selectedPage[0].status == 0){
                 this.$root.showBoard = true;
         this.$root.boardContent = 'Hello';
         this.$root.boardBtnLabel = 'Okay Got It';

              }
               
          }
        
         
      },
        trackUser: function(){
      

         axios.get('/fetch-profile-'+ this.$root.username)
   .then(response => {
   
   if (response.status == 200) {

        this.$root.userPageTrack = response.data[2];

        this.activateBot();
  }
    
  
  })
  .catch(error => {
 
  }) 

      
   },
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
<style scoped>

.coin{
  font-size: 10px;
  font-weight: bolder;
  color: white;
}

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