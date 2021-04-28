<template>
  <div class="py-1 px-0">

       <div class=" px-1 px-md-2 py-1  " >
   
      <v-card flat class="d-flex flex-row px-1 py-1 col-12 " style="background: rgba(125, 179, 229, 0.4); align-items:center;">
              <div class="mr-2 ">
                 <v-icon color="#000000" class="ml-2">las la-play-circle</v-icon>
              </div>

              <div style="width:100%;">
               <input  v-model="resourceName"
              @keyup.enter="createResources()"
              style="border:1px solid white; width:100%; border-radius:2px; font-family:BodyFont; font-size:13px; background:white;"  placeholder="Create a resource" class="py-2 px-2" >
              </div>

              <div class="ml-auto px-2">
                <v-btn :loading="saving" icon style="background:white;" small  @click="createResources()">
                   <v-icon style="font-size:24px;">
                     las la-arrow-right
                   </v-icon>
                </v-btn>
              </div>

        </v-card>

  
     </div>

       <div class="d-flex flex-row flex-wrap col-12 py-1 px-1 px-md-2">
    

       <v-card flat class="d-flex flex-row px-1  mb-2 col-12 " v-for="(resource,index) in resources" :key="index" @click="showContent(resource)" style="background: rgba(125, 179, 229, 0.4);">
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

        <div class="col-12 text-center">

          <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-1 text-center">Create resource from your DevTo article</div>

    </div>
     

      <div class="col-12 text-center">
            <v-btn  rounded medium outlined style="font-family:BodyFont;font-size:13px; text-transform:none;" color="#000000">
               <img  src="/imgs/devto.png" height="27px" class="px-2" >

               <span>Connect DevTo</span>
            </v-btn>
      </div>

  

  </div>
</template>

<script>
export default {
data(){
    return{
         resources:[],
          loading:false,
         saving:false,
    resourceName:''
    }
   
},
mounted(){
this.fetchResources();
  this.$root.showYoutubePlayer = false;
        this.$root.showYoutubePlayerSm = false;
        this.$root.showAddButton = false;
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
 showContent:function(resource){
     
     this.$root.selectedResource = resource;
          
           this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/resource_content/' + resource.resource_id });

     this.$root.resourceContentType='resources'
     
     }
  ,
  createResources:function(){
     if(this.resourceName.length == 0) return;

      this.saving = true;
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