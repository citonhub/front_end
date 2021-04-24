<template>
    <div style="background:transparent;">
   <div class="col-12 py-1 my-0 ">
    <div class="row">
        <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; align-items:center;">
            <div class=" mr-1 py-0">
              <v-btn icon @click.stop="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class=" py-0 text-center" style="width:100%;">
               <input style="width:100%;heigth:100%;font-size:13px;background:whitesmoke;border-radius:13px;font-family:BodyFont;"  
                  @input="searchSite"     :placeholder="placeholder" class="py-2 px-3" type="search" v-model="searchQuery"> 
            </div>
              
              <div class=" py-0 ml-1 text-right">
                  <v-btn icon @click.stop="goBack">
                      <v-icon>las la-search</v-icon>
                    </v-btn>
              </div>
          
        </div>



         <!-- edit space form -->
      <div style="background:transparent;font-family:BodyFont; " class="col-12 py-1 my-0 px-1 px-md-2" >

        <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-1 text-center">Add articles to "javascript" resource</div>
 
           <resource :show_add_icon="true"></resource>
        </div>

       <!-- ends -->

       
        
     

    </div>
   </div>

  </div>
</template>
<script>
  const Resource = () => import(
   /* webpackChunkName: "Resource" */ './Resource.vue'
  );
export default {
  
     data(){
        return{
         that: this,
         placeholder:'',
         searchQuery:''
        }
    },
    components:{
     Resource
    },
    mounted(){
    this.$root.componentIsLoading = false;
    this.alterSearch();
    },
    methods:{
        goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

             this.$root.chatComponent.innerSideBarContent = '';
            
            this.$root.chatComponent.innerSideBarContent = '';
       
        },

        alterSearch(){
          if(this.$root.resourceSearchType=='youtube'){
this.placeholder="Search youtube"


          }
          else if (this.$root.resourceSearchType=='udemy'){
            this.placeholder="Search Udemy"
          }
        },

        searchSite: function(){
if(this.$root.resourceSearchType=='youtube'){
axios.get(`/search-youtube/${this.searchQuery}`)
} else if(this.$root.resourceSearchType=='udemy'){
  axios.get(`/search-udemy/${this.searchQuery}`)
}
        }
      
    }
}
</script>
<style scoped>

</style>