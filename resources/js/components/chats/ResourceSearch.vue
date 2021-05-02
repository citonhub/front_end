<template>
    <div style="background:transparent;">
   <div class="col-12 py-0 my-0 ">
    <div class="row">
        <div class="col-12 px-1 py-2  fixed-top d-flex flex-row flex-wrap" style="position:sticky; background:white; top:0%; align-items:center;">
            <div class="col-12 py-0 px-0 d-flex flex-row">
                 <div class=" mr-1 py-0">
              <v-btn icon @click.stop="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>
            
             <div class=" py-0 text-center" style="width:100%;">
               <template v-if="this.$root.resourceSearchType != 'devto'">
                 <input style="width:100%;heigth:100%;font-size:13px;background:whitesmoke;border-radius:13px;font-family:BodyFont;"  
                  :placeholder="placeholder" class="py-2 px-3" type="search" v-model="searchQuery" autofocus @keyup.enter="searchSite()"> 
               </template>

               <template v-else>
               <div class="col-12 px-0 py-0"  style="height:50px;">
                 <v-text-field
                  class="mb-0"
            placeholder="Search DevTo"
            chips
            outlined
             style="font-size:13px;"
              dense
              @keyup.enter="searchSite()"
             counter="30"
             v-model="searchQuery"
             color="#3C87CD">

                 </v-text-field>
           

               <!-- devto search -->

                  <template v-if="showSuggestion">

                 <v-card style="position:absolute; border-radius:0px; top:95%;  width:100%; max-height:250px;z-index:99999999999999; left:0px; height:auto; overflow-y:auto;"  class="d-flex flex-column px-1 py-2">

                   <v-card @click="selectTag(tag)" tile flat class="px-1 py-2 d-flex flex-row" style="border-bottom:1px solid #c5c5c5;align-items:center;"   v-for="tag in devToTags"  :key="tag.id">
                   
                   <div style="white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">
                        <span style="font-size:13px;font-family:BodyFont;" class="mr-1">{{tag.name}}</span> 
                   </div>

                   </v-card>

                 </v-card>
                  </template>

               <!-- ends -->

               </div>
                    

               </template>
              
            </div>
              
              <div class=" py-0 ml-1 text-right">
                  <v-btn icon  @click="searchSite" :loading="loadingSearch">
                      <v-icon>las la-search</v-icon>
                    </v-btn>
              </div>
            </div>
              <div class="col-12  py-1 d-flex flex-row px-0 mt-1" style="align-items:center; justify-content:center;">

                   <template v-if="that.$root.selectedResource.type == 'playlist'">
            <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-1 text-center">Add videos to "{{that.$root.selectedResource.name}}" playlist</div>
           </template>

           <template v-else>
                <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-1 text-center">Add articles to "{{that.$root.selectedResource.name}}" resource</div>
           </template>

            <v-btn rounded small :loading="loading" :disabled="selectedItems.length == 0" @click="AddItemsToResources()" color="#3C87CD" class="ml-2" style="font-size:11px; text-transform:none; font-weight:bolder; color:white;font-family: BodyFont;" >Add </v-btn>

      
              </div>
          
        </div>



         <!-- edit space form -->
      <div style="background:transparent;font-family:BodyFont; " class="col-12 py-0 my-0 px-1 px-md-2" >
          
 
           <resource :show_add_icon="true" :contents="searchResult" ></resource>


               <!--content loader-->


  <div class="text-center col-lg-12">
    <v-progress-circular
      indeterminate
      color="#3C87CD"
      v-if="loadingNext"
    ></v-progress-circular> 
     
     <div v-observe-visibility="loadNextSet" ></div> 

  
  </div>


                      <!--content loader ends-->


        </div>

       <!-- ends -->

       
        
     

    </div>
   </div>

  </div>
</template>
<script>
import VueObserveVisibility from 'vue-observe-visibility'
  const Resource = () => import(
   /* webpackChunkName: "Resource" */ './Resource.vue'
  );
export default {
  
     data(){
        return{
         that: this,
         placeholder:'',
         searchQuery:'',
         searchResult:[],
         loadingSearch:false,
         loadingNext:false,
         devToTags:[],
         nextPageToken:'',
         showSuggestion:false,
         selectedItems:[],
         allTagStore:[],
         queryContent:'',
         devToPageCount:1,
         loading:false,
        }
    },
    components:{
     Resource
    },
    mounted(){
    this.$root.componentIsLoading = false;
     
    this.alterSearch();
   // this.fetchDevToTags();
    this.$root.showAddButton = false;
    this.$root.resourcesSearchComponent = this;
  
       
      
    },
    methods:{
      selectTag:function(tag){

        this.showSuggestion = true;
           if(this.searchQuery.length == 0){

              this.searchQuery = [];

           }
        this.searchQuery = tag.name;
         this.showSuggestion = false;
      },
      AddItemsToResources:function(){

          let itemType = ''

           if(this.$root.resourceSearchType == 'devto'){

             itemType = 'devto_article'

           }

           if(this.$root.resourceSearchType == 'youtube'){

             itemType = 'youtube_video'

           }

          this.loading = true;
         axios.post( '/add-items-to-resource',{
           resource_id: this.$root.selectedResource.resource_id,
           type: itemType,
           items: this.selectedItems
         } )
      .then(response => {
      
      if (response.status == 200) {

     
       this.loading = false;

       this.$root.forcereloadResource = true;

         if(this.$root.selectedResource.type== 'playlist'){
 this.$root.chatComponent.showAlert('Added!','video added to playlist','success','bottomRight',3000);
       } else{
         this.$root.chatComponent.showAlert('Added!','resource has been added','success','bottomRight',3000);
       }

       this.goBack();
            
     }
       
     
     })
     .catch(error => {

      this.loading = false;

     }) 

      },     
      searchTags:function(e){


      if(e.key != 'Backspace'){
          if(e.keyCode == 13){
           
            this.showSuggestion = false;
            this.queryContent = ''
            this.devToTags = this.allTagStore;
             

          }else{

             if(e.key.length == 1){
                  this.queryContent += e.key;
                    this.showSuggestion = true;
             }
            
          }
       
      }else{
         
        this.queryContent = this.queryContent.slice(0, -1)
      }
      

           let searchResult = this.allTagStore.filter((tag)=>{

          let nameValue = '';

           nameValue = tag.name.toLowerCase();

         
      return nameValue.includes(this.queryContent.toLowerCase());

       

                
       });

      

      this.devToTags = searchResult;
      },
        goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

            
       
        },
        loadNextSet:function(shown){

          if(shown && this.searchResult.length > 0){

            this.loadNextResult()

          }

        },
        fetchDevToTags:function(){


                axios.get('/devto-tags')
      .then(response => {
      
      if (response.status == 200) {
      
        this.devToTags = response.data.tags;
        this.allTagStore = response.data.tags;
       
     }
       
     
     })
     .catch(error => {
     
    
     }) 

           
        },
        loadNextResult:function(){

           if(this.loadingNext) return
          this.loadingNext = true;
           if(this.$root.resourceSearchType == 'youtube'){

    
                axios.get( `/search-youtube/${this.searchQuery}/${this.nextPageToken}` )
      .then(response => {
      
      if (response.status == 200) {

         let searchResult = response.data.result;
           this.nextPageToken =  response.data.nextPageToken

           let finalResult = [];

             searchResult.forEach((data)=>{
               let resultWrapper = {
                 content: data,
                 type:'youtube_video'
               };
              
              finalResult.push(resultWrapper);

             });

           this.searchResult = this.searchResult.concat(finalResult);

          
       
       this.loadingNext = false;
            
     }
       
     
     })
     .catch(error => {
       this.loadingNext = false;
       
    
     }) 

           }

            if(this.$root.resourceSearchType == 'devto'){

               if(this.searchQuery == '') return;

              let lowerCased = this.searchQuery.toLowerCase();
         
             let searchStringArray = lowerCased.split(" ");

        

              this.devToPageCount++
    
                axios.get( `/search-devto/${JSON.stringify(searchStringArray)}/${this.devToPageCount}` )
      .then(response => {
      
      if (response.status == 200) {

         let searchResult = response.data.articles;

        
           let finalResult = [];

             searchResult.forEach((data)=>{
               let resultWrapper = {
                 content: data,
                 type:'devto_article'
               };
              
              finalResult.push(resultWrapper);

             });

         this.searchResult = this.searchResult.concat(finalResult);

          
       
       this.loadingNext = false;
            
     }
       
     
     })
     .catch(error => {
       this.loadingNext = false;
       
    
     }) 

           }

           
        },
        alterSearch(){

             this.placeholder = 'Search ' + this.$root.resourceSearchType

             if(this.$root.resourceSearchType == 'youtube' || this.$root.resourceSearchType == 'devto'){
                this.searchQuery = this.$root.selectedResource.name;

               this.searchSite();

             }

              
      
        },

        searchSite: function(){

           this.searchResult = [];
           
     this.loadingSearch = true;
           if(this.$root.resourceSearchType == 'youtube'){

    
                axios.get( `/search-youtube/${this.searchQuery}` )
      .then(response => {
      
      if (response.status == 200) {

         let searchResult = response.data.result;
            this.nextPageToken =  response.data.nextPageToken

           let finalResult = [];

             searchResult.forEach((data)=>{
               let resultWrapper = {
                 content: data,
                 type:'youtube_video'
               };
              
              finalResult.push(resultWrapper);

             });

           this.searchResult = finalResult;

          
       
       this.loadingSearch = false;
            
     }
       
     
     })
     .catch(error => {
       this.loadingSearch = false;
       
    
     }) 

           }


           if(this.$root.resourceSearchType == 'devto'){

              if(this.searchQuery == '') return;


            let lowerCased = this.searchQuery.toLowerCase();

             let searchStringArray = lowerCased.split(" ");

               this.devToPageCount = 1;
    
                axios.get( `/search-devto/${JSON.stringify(searchStringArray)}` )
      .then(response => {
      
      if (response.status == 200) {

         let searchResult = response.data.articles;

          

           // this.nextPageToken =  response.data.nextPageToken

           let finalResult = [];

             searchResult.forEach((data)=>{
               let resultWrapper = {
                 content: data,
                 type:'devto_article'
               };
              
              finalResult.push(resultWrapper);

             });

          this.searchResult = finalResult;

          
       
       this.loadingSearch = false;
            
     }
       
     
     })
     .catch(error => {
       this.loadingSearch = false;
       
    
     }) 

           }

           if(this.$root.resourceSearchType == 'udemy'){

              if(this.$root.resourceSearchType=='udemy'){

                axios.get( `/search-udemy/${this.searchQuery}` )
      .then(response => {
      
      if (response.status == 200) {

          console.log(response.data)
            this.loadingSearch = false;

            
       }
       
         })
       .catch(error => {

         this.loadingSearch = false;
    
        }) 

           }

        }
        }
    }
}
</script>
<style scoped>

</style>