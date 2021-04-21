<template>
<div class="py-1">
    <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 px-1 py-0">
              <v-btn icon @click.stop="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-0 text-center" style="white-space: nowrap; overflow:hidden; text-overflow:ellipsis; ">
             <span style="font-size:14px; font-family:MediumFont;">My Videos</span>
            </div>
              
              <div class="col-2 py-0 mr-1 text-right">
                 
              </div>
          
        </div>
    
        <div style="background:transparent;font-family:BodyFont; " class="col-12 py-1 my-0 px-1 px-md-2" >

      
 
           <resource :show_add_icon="false"></resource>
        </div>

       <!-- ends -->

       
        
     
</div>    
</template>
<script>
  const Resource = () => import(
   /* webpackChunkName: "Resource" */ './Resource.vue'
  );
export default {
    components:{
      Resource
    },
    mounted(){
      this.fetchResourceContent();
    },
    methods:{
               goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

             this.$root.chatComponent.innerSideBarContent = '';
            
            this.$root.chatComponent.innerSideBarContent = '';
       
        },
      fetchResourceContent:function(){
            axios.get( '/fetch-resource/' + this.$ro   )
      .then(response => {
      
      if (response.status == 200) {
    
      console.log(response.data.resources);

       if(response.data.resources.length == 0){

         setTimeout(() => {
           this.fetchResourceContent();
         }, 4000);
         
       }
       
     }
       
     
     })
     .catch(error => {

      
    
     }) 
      }
    }
}
</script>
<style scoped>

</style>