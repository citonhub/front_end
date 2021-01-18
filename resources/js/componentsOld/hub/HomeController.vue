<template>
<div style="overflow-y:hidden;">
      
      
     <div class="   col-lg-6 offset-lg-3  py-0 px-0 my-0" style=" border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6; position:absolute;z-index:20; background:white; height:100%;" >
   <DynamicScroller
    :items="this.$root.postData"
     v-if="this.$root.postData.length != 0"
    :min-item-size="54"
    ref="postScrollCont"
    :buffer="1500"
    id="postContainer" 
      :style="'background:transparent; font-family:BodyText;position:fixed;left:0; width:100%; height:100%;overflow-y:' + scrollValue + '; overflow-x:hidden; padding-top:8px;padding-bottom:120px;'"
    class="scroller postScroll"
  >

    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem
        :item="item"
        
        :active="active"
        :size-dependencies="[
          item.content,
        ]"
        :data-index="index"
      >
        <public  :index="item.id" :source="item"></public>
      </DynamicScrollerItem>
    </template>

     <template #after>
     <div  class="col-md-4 offset-md-4  col-lg-2 offset-lg-5 col-4 offset-4 my-0 py-1 text-center"  >

         <v-progress-linear indeterminate color="#3E8893" v-if="postisLoading && loadingFromBottom" rounded height="6" ></v-progress-linear>

         <v-btn text small @click="loadNewPosts('bottom')" v-else><span style="font-size:13px; text-transform:lowercase; color:#3E8893;">Load more.. </span></v-btn>

      </div>
  </template>
  </DynamicScroller> 

<div v-else class="postScroll" :style="'background:transparent; font-family:BodyText;position:fixed;left:0; width:100%; height:100%; overflow-y:' + scrollValue + '; overflow-x:hidden; padding-top:8px;padding-bottom:120px;'">
      <div class="  col-lg-4 offset-lg-4 py-0 my-0">

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
            post_data: this.$root.postData,
            containerScrollPosition:0,
             scrollPosition:0,
            startPosition:0,
            newPostLoading:false,
            postPerLoad:20,
            scrollValue:'auto',
            postInitialLimit:30,
            postisLoading:false,
            loadingFromBottom:false,
            stopPostFetch:false,
            loadingFromTop: false,
          }
      },
   components: { 
   
      },
     mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = true;
       this.postLoader();
       
       
        this.$root.codeFromPostView = false;
        
         if(this.$root.postShelveData != null){
     this.$root.disconnectPost(this.$root.postShelveData);
         }

         this.$root.showPostModal = false;
     this.$root.showPostViewModal = false;
     

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
      

         axios.get( '/fetch-profile-'+ this.$root.username)
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
        postLoader: function(){

           if(this.$root.postData.length != 0){
              

             

               
               
            }else{
               
                axios.get( '/fetch-post')
      .then(response => {
      
      if (response.status == 200) {
        
       
      
   

         this.$root.postData = response.data[0];

          this.$root.postCurrentPage = response.data[1];

        this.$root.trackPostConnections(this.$root.postData);
         
       
        
        
     }
       
     
     })
     .catch(error => {
    
     }) 
             

            }

        },
        loadNewPosts: function(position){
          
           if(this.stopPostFetch) return;
            if(this.postisLoading) return;

           this.postisLoading = true;

            if(position == 'top'){

               this.loadingFromTop = true;

            }

            if(position == 'bottom'){
               
               this.loadingFromBottom = true;
            }
            let nextPage = parseInt(this.$root.postCurrentPage)  + 1
            axios.get( '/fetch-post?page=' + nextPage )
      .then(response => {
      
      if (response.status == 200) {
        
       
      
        if(response.data[0].length != 0){

          
            if(position == 'bottom'){

              

              
               let returnedData = response.data[0];
              
               
             this.$root.postData =  this.$root.postData.concat(returnedData);

              

           }

            this.$root.trackPostConnections(response.data[0]);

            this.$root.postCurrentPage++;
        }else{
       this.stopPostFetch = true;
     }

        this.loadingFromTop = false;
        this.loadingFromBottom = false;
        this.postisLoading = false;
        
     }
       
     
     })
     .catch(error => {
    
     }) 

        },
        
     

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