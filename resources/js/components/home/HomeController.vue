<template>
<div style="overflow-y:hidden;">
      
      
     <div class=" col-md-8 offset-md-2  col-lg-4 offset-lg-4  py-0 px-0 my-0" style="position:absolute;z-index:20; background:white; height:100%;" >

      



          <div id="postContainer" 
      v-if="this.$root.postData.length != 0"
      v-on:scroll="handlePushPost()"
       class="postScroll"
    
    :style="'background:transparent; font-family:BodyText;position:fixed;left:0; width:100%; height:100%;overflow-y:' + scrollValue + '; overflow-x:hidden; padding-top:8px;padding-bottom:120px;'">
        

         <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 my-0 py-1 text-center" v-if="postisLoading && loadingFromTop">

        <v-progress-circular indeterminate color="#35747e"></v-progress-circular>

      </div>


     <public v-for="(post,index) in this.$root.postData" :key="index" :index="post.id" :source="post"></public>

      <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 my-0 py-1 text-center"  v-if="postisLoading && loadingFromBottom">

        <v-progress-circular indeterminate color="#35747e"></v-progress-circular>

      </div>
         
    </div> 

<div v-else class="postScroll" :style="'background:transparent; font-family:BodyText;position:fixed;left:0; width:100%; height:100%; overflow-y:' + scrollValue + '; overflow-x:hidden; padding-top:8px;padding-bottom:120px;'">
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
       this.scrollToPost();
       
        this.$root.codeFromPostView = false;
        
         if(this.$root.postShelveData != null){
     this.$root.disconnectPost(this.$root.postShelveData);
         }

      
    },
    methods:{
    
       handlePushPost: function(){

       
           

        var container = document.querySelector('#postContainer');

         let scrollPosition = container.scrollTop;

          let containerScrollHeigthFixed = container.scrollHeight;

         this.scrollPosition = containerScrollHeigthFixed - scrollPosition;

        
       
        
        if(scrollPosition <= 5 && this.$root.postStoreTop.length != 0){

          
         
           

           
             
               this.newPostLoading = true;
         
          
        

           let loadingArray = [];


           if(this.$root.postStoreTop.length < this.postPerLoad){
             
              loadingArray = new Array(this.$root.postStoreTop.length);



           }else{
             
               loadingArray = new Array(this.postPerLoad);

           }
            
          
             
             for (let index = 0; index < loadingArray.length; index++) {
               
                 let arrayPoppedLoader =  this.$root.postStoreTop.pop();
                  
                  this.$root.postData.unshift(arrayPoppedLoader);
             }
             
                
                

               let NumberToRemove = 0;

              if(this.$root.postData.length < this.$root.postInitialLimit){
                  NumberToRemove = this.postPerLoad; 
              }
              if(this.$root.postData.length > this.$root.postInitialLimit){
                 NumberToRemove = this.$root.postData.length - this.$root.postInitialLimit;
              }

            
             let NumberArray =  new Array(NumberToRemove);

             for (let index = 0; index < NumberArray.length; index++) {
               
                 let arrayPopped =  this.$root.postData.pop();
                  
                  this.$root.postStoreBottom.unshift(arrayPopped);
             }

             var elementId = this.$root.postData[29].id;
                  
                    var element =  document.querySelector('#post' + elementId);
            
          

                if(element){

                

                  var top =  containerScrollHeigthFixed - (element.offsetTop + 600) ;

                }

                 

              if(this.$root.postStoreTop.length < this.postPerLoad){

                 container.scrollTop = top;

              }

            

            

          
          
         
                    
               

              

 
        }

         

     let containerScrollHeigth = container.scrollHeight;
         
        
            if(scrollPosition == 0){

              if(this.$root.postStoreTop.length == 0){

                this.loadNewPosts('top');

             }

          }
           
        if((scrollPosition > (containerScrollHeigth - 1000)) && this.$root.postStoreBottom.length != 0 ){
         
         

           

             let NumberArrayBottom = [];


           if( this.$root.postStoreBottom.length < this.postPerLoad){
             
              NumberArrayBottom = new Array( this.$root.postStoreBottom.length);



           }else{
             
               NumberArrayBottom = new Array(this.postPerLoad);

           }

             for (let index = 0; index < NumberArrayBottom.length; index++) {
               
                 let arrayPopped =  this.$root.postStoreBottom.shift();
                  
                  this.$root.postData.push(arrayPopped);
             }


              

             for (let index = 0; index < NumberArrayBottom.length; index++) {
               
                 let arrayPoppedTop =  this.$root.postData.shift();
                  
                  this.$root.postStoreTop.push(arrayPoppedTop);
             }

              let loadingArray = 0;


         if(this.$root.postStoreBottom.length < this.postPerLoad){
             
              loadingArray = this.$root.postStoreBottom.length;

               



           }else{
             
             

                  var elementId = this.$root.postData[6].id;
                  
                    var element =  document.querySelector('#post' + elementId);
            
          

                if(element){

                  var top = element.offsetTop;

                }

               

           }
 
             container.scrollTop = top;

              
              }
          
          if(scrollPosition > (containerScrollHeigth - 1000)){

              if(this.$root.postStoreBottom.length == 0){

                this.loadNewPosts('bottom');

             }

          }
        
        },
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
        postLoader: function(){

           if(this.$root.postData.length != 0){
              

             

               
               
            }else{
               
                axios.get('/fetch-post')
      .then(response => {
      
      if (response.status == 200) {
        
       
      
   

         this.$root.postData = this.handleResults(response.data[0]);

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
            axios.get('/fetch-post?page=' + nextPage )
      .then(response => {
      
      if (response.status == 200) {
        
       
      
        if(response.data[0].length != 0){

           if(position == 'top'){

              
             let fullPostData = this.$root.allPostArray;

               let returnedData = response.data[0];

              
                 this.$root.allPostArray = returnedData.concat(fullPostData);

                 let firstDataSet = returnedData.slice(0,19);

                 let remainingDataSet = returnedData.slice(20,returnedData.length);

                 this.$root.PostRefId = this.$root.postData[0].id;

                

                this.$root.postData =  firstDataSet.concat(this.$root.postData);

                this.$root.postStoreTop =  remainingDataSet;

                
                
            
          
                     var container = document.querySelector('#postContainer'); 

                      let containerScrollHeigthFixed = container.scrollHeight;

                      
                  var elementId = this.$root.postData[20].id;
                  
                    var element =  document.querySelector('#post' + elementId);
            
          

                if(element){

                

                  var top =  containerScrollHeigthFixed - (element.offsetTop + 1300) ;

                }

                  

                   container.scrollTop = top;

                



                
             

             

             


           }

            if(position == 'bottom'){

              

               let fullPostData = this.$root.allPostArray;

               let returnedData = response.data[0];
              
                 this.$root.allPostArray = fullPostData.concat(returnedData);

                 let firstDataSet = returnedData.slice(0,19);

                 let remainingDataSet = returnedData.slice(20,returnedData.length);


               this.$root.postData.concat(firstDataSet);

                this.$root.postStoreBottom =  remainingDataSet;
                
             
                var elementId = this.$root.postData[6].id;

                 var container = document.querySelector('#postContainer'); 
                  
                    var element =  document.querySelector('#post' + elementId);
            
          

                if(element){

                  var top = element.offsetTop;

                }


                container.scrollTop = top;

             
              

              


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
         handleResults(postArray){


          this.$root.allPostArray = postArray;
          
          let PostLenght = postArray.length;

         
             let startCount = PostLenght - this.$root.postInitialLimit;

             if(startCount <= 0){
               startCount = 0;
             }

             
  
          let sliedPost = this.$root.allPostArray.slice(0,this.$root.postInitialLimit);

         
         this.$root.postStoreBottom = this.$root.allPostArray.slice(startCount,PostLenght);

         var finalPosts = sliedPost;

         
         
         return finalPosts;
          
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