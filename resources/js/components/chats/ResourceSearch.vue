<template>
    <div style="background:transparent;">
   <div class="col-12 py-0 my-0 ">
    <div class="row">
        <div class="col-12 px-1 py-2  fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; align-items:center;">
            <div class=" mr-1 py-0">
              <v-btn icon @click.stop="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class=" py-0 text-center" style="width:100%;">
               <input style="width:100%;heigth:100%;font-size:13px;background:whitesmoke;border-radius:13px;font-family:BodyFont;"  
                  :placeholder="placeholder" class="py-2 px-3" type="search" v-model="searchQuery"> 
            </div>
              
              <div class=" py-0 ml-1 text-right">
                  <v-btn icon  @click="searchSite" :loading="loadingSearch">
                      <v-icon>las la-search</v-icon>
                    </v-btn>
              </div>
          
        </div>



         <!-- edit space form -->
      <div style="background:transparent;font-family:BodyFont; " class="col-12 py-1 my-0 px-1 px-md-2" >
           <template v-if="that.$root.selectedResource.type == 'playlist'">
            <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-1 text-center">Add videos to "{{that.$root.selectedResource.name}}" playlist</div>
           </template>

           <template v-else>
                <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-1 text-center">Add articles to "{{that.$root.selectedResource.name}}" resource</div>
           </template>

      
 
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
         nextPageToken:''
        }
    },
    components:{
     Resource
    },
    mounted(){
    this.$root.componentIsLoading = false;
    this.alterSearch();
    this.$root.showAddButton = false;
    },
    methods:{
        goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

            
       
        },
        loadNextSet:function(shown){

          if(shown && this.searchResult.length > 0){

            this.loadNextResult()

          }

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
        },
        alterSearch(){

             this.placeholder = 'Search ' + this.$root.resourceSearchType
      
        },

        searchSite: function(){
           
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