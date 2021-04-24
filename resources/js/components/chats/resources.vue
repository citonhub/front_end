<template>
  <div class="py-1 px-0">

       <div class="navigate px-2 py-1 mt-3 mb-3 " style="height:50px;" >
   

  
<v-text-field  
 placeholder="Upload a resource"
  outlined style="height:70%;" 
   color="#3C87CD"
   required 
   v-model="resourceName"
   @keyup.enter="createResources()"
   >
   
   </v-text-field>

  
     </div>

       <div class="d-flex flex-row flex-wrap col-12 py-1 px-1 px-md-2">
    

       <v-card flat class="d-flex flex-row px-1  mb-2 col-12 " v-for="(resource,index) in resources" :key="index" @click="showContent" style="background: rgba(125, 179, 229, 0.4);">
              <div class="mr-2 ">
                 <v-icon color="#000000" class="ml-2">las la-folder</v-icon>
              </div>

              <div>
              <span  style="font-family:BodyFont;color:black;font-size:13px;">{{resource.name}}</span>
              </div>

              <div class="ml-auto px-2">
               <span class="d-flex flex-row"
                style="font-family:BodyFont;align-items:center; justify-content:center; color:black;font-size:13px; background:white; height:26px; width:26px; border:1px solid #ffffff;border-radius:50%;">12</span>
              </div>

        </v-card>     

       </div>

  

  </div>
</template>

<script>
export default {
data(){
    return{
         resources:[],
    resourceName:''
    }
   
},
mounted(){
this.fetchResources();
},
methods:{

  fetchResources:function(){
      axios.get(`/fetch-resource/${this.$root.selectedSpace.space_id}/resource`)
      .then(
        response=>{
          if(response.status==200){
            console.log(response.data)
            this.resources=response.data.resources
          }
        }
      )
    },
 showContent:function(){

  
           this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/resource_content/sample' });

     
     
     }
  ,
  createResources:function(){
    axios.post('/create-resource',
    {
      
space_id: this.$root.selectedSpace.space_id,
name: this.resourceName,
type:'resource'


    }
    )
  }
}
}
</script>

<style>

</style>