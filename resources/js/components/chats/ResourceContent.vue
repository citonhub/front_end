<template>
<div class="py-1">
    <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
           
           
           
            <div class=" mr-1 col-2 px-1 py-0">
              <v-btn icon @click.stop="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>

            
          
             <div class="col-8 py-0 text-center" style="white-space: nowrap; overflow:hidden; text-overflow:ellipsis; ">
             <span style="font-size:14px; font-family:MediumFont;">{{title}}</span>
            </div>
              
             <div class="col-2 py-0 px-1 mx-0 mt-1">
                  <v-btn icon @click="goToSearch">
                      <v-icon>las la-search</v-icon>
                    </v-btn>
              </div> 


        </div>
    
        <div style="background:transparent;font-family:BodyFont; " class="col-12 py-1 my-0 px-1 px-md-2" >

      
 
           <resource :contents="resources" :show_add_icon="false"></resource>
        </div>

       <!-- ends -->

       
        
     
</div>    
</template>
<script>
  const Resource = () => import(
   /* webpackChunkName: "Resource" */ './Resource.vue'
  );
export default {
    data(){
    return{
        resources:[],
        title:''
    }
   
},
    components:{
      Resource
    },
    mounted(){
      this.fetchResourceContent();
      this.setType();
    },
    methods:{
               goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

             this.$root.chatComponent.innerSideBarContent = '';
            
            this.$root.chatComponent.innerSideBarContent = '';
       
        },
      fetchResourceContent:function(){
            axios.get( '/fetch-resource-content/' + this.$route.params.resource_id   )
      .then(response => {
      
      if (response.status == 200) {
    
      console.log(response.data.contents);

        this.resources = response.data.contents;

       if(response.data.contents.length == 0){

         setTimeout(() => {
           this.fetchResourceContent();
         }, 4000);
         
       }
       
     }
       
     
     })
     .catch(error => {

      
    
     }) 
      },
      setType:function(){
if(this.$root.resourceContentType=='resources'){
this.title='My Articles'
}else if(this.$root.resourceContentType=='videos'){
this.title='My Videos'
}
      },
      goToSearch: function(){
 this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/resource_search' });
      }
    }
}
</script>
<style scoped>

</style>