<template>
    <div class="py-1 px-0">
        <div class="col-12 px-2 py-2  fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; align-items:center;">
            <div class=" mr-1 py-0">
              <v-btn icon @click.stop="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>
            
             <v-form v-model="formstate" class="py-0 text-center px-0" style="width:100%; ">

                  <input style="width:100%;heigth:100%;font-size:13px;background:whitesmoke;border-radius:4px;font-family:BodyFont;"  
                   placeholder="Paste resource URL here" class="py-2 px-3"  @input="getLinkInfo" type="search" :value="searchQuery"> 
              
            </v-form>
            
          
        </div>


       <template v-if="loadingLink">
         <div class="col-12 mt-4 text-center">

               <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

             </div>
       </template>

       <template v-else>
           
           <template  v-if="linkInfo">

             <template v-if="isYoutube">
               <div class="col-12  pb-0 pt-0 px-2 d-flex flex-row mt-1" style=" align-items:center;">
             <resource :show_add_icon="true" :contents="linkInfo" :hideAdd="true" :isFree="true" ></resource>
               </div>
              
             </template>

             <template v-else>

                   <div class="col-12  pb-0 pt-0 px-0 d-flex flex-row mt-1" style=" align-items:center;">
            <div class="col-5 py-1 px-1" style="height:84px;">
              <div :style="'position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(' + linkInfo.image + ');background-repeat: no-repeat; background-size:cover;'" >
               
                 <div style="align-items:center;background:rgba(0, 0, 0,0.1); justify-content:center; cursor:pointer; position:absolute; top:0; left:0; width:100%; height:100%;" class="px-1 py-1 d-flex">
                        <v-icon style="font-size:35px; color:#ffffff;">las la-link</v-icon>
                </div>
              </div>
            </div>  

             <div class="col-7 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

               <div class="pt-3 mb-1" v-html="linkInfo.title" style="font-family:MediumFont;font-size:13px; overflow:hidden; width:100%; text-overflow:ellipsis;  ">
                
               </div>
                <div class="mb-1"  v-html="linkInfo.description"  style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; overflow:hidden; text-overflow:ellipsis; ">
                
               </div>
                <div class="" style="font-family:BodyFont;font-size:12px;color:grey; overflow:hidden; text-overflow:ellipsis;  ">
                {{processURL(linkInfo.base)}}
               </div>
            </div>  

         </div>

             </template>

            

          <div class="col-12 text-center">
           <v-btn rounded small :loading="loading" @click="addToResource" :disabled="!linkInfo || loadingLink" color="#3C87CD" style="font-size:11px; text-transform:none; font-weight:bolder; color:white;font-family: BodyFont;" >Add to {{ that.$root.selectedResource.name }}</v-btn>
         </div>


           </template>
            

       </template>
           
        

      
    </div>
</template>
<script>
  const Resource = () => import(
   /* webpackChunkName: "Resource" */ './Resource.vue'
  );

export default {
     data(){
        return{
          searchQuery:'',
          urlRule:[
                  v =>  this.isURL(v) || "Link should be valid and secure"
            ],
            formstate:false,
         linkInfo:false,
         loading:false,
         loadingLink:false,
         isYoutube:false,
         that:this,
         videoData:[],
        }
    },
    components:{
     Resource
    },
    mounted(){
       this.$root.showAddButton = false;
    },
    methods:{
         goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    
        },
           isURL(str) {

         if(str.length == 0){

           return false;

         }
      let url;

      try {
        url = new URL(str);
      } catch (_) {
        return false;
      }

      return  url.protocol === "https:";
    },
    addToResource:function(){
       
       let itemType ='shared_link';

      let  dataToSend = [this.linkInfo]

        if(this.isYoutube){
        itemType ='youtube_video';

        dataToSend = this.videoData
        }

        
       this.loading = true;
         axios.post( '/add-items-to-resource',{
           resource_id: this.$root.selectedResource.resource_id,
           type: itemType,
           items: dataToSend
         } )
      .then(response => {
      
      if (response.status == 200) {

     
       this.loading = false;
       this.$root.forcereloadResource = true;
        this.$root.chatComponent.showAlert('Added!','Resource URL has been added','success','bottomRight',3000);

         let responseContent = response.data.content;
 
       this.$root.resourcesData = responseContent.concat(this.$root.resourcesData)

       this.saveOrder();
       
         this.goBack();
            
     }
       
     
     })
     .catch(error => {

      this.loading = false;

     }) 

    },
    saveOrder:function(){

         let ResourcesArray = [];

       this.$root.resourcesData.forEach((content)=>{

         ResourcesArray.push(content.id)
   
        });

   

         axios.post( '/save-resources-content-order',{
        resource_id: this.$root.selectedResource.resource_id,
        content: ResourcesArray
      })
      .then(response => {
      
      if (response.status == 200) {

        this.$root.LocalStore('channel_resource_content_' + this.$root.selectedResource.resource_id  + this.$root.username, this.$root.resourcesData);

          this.$root.loadingResourceContent = false;

       
     }
       
     
     })
     .catch(error => {

     this.$root.chatComponent.showAlert('Oops!','Unable to save changes,please try again','error');
      this.$root.loadingResourceContent = false;
       
    
     }) 
        

      },
      getVideoData:function(videoId){
      
       axios.post( '/get-video-data',{
           videoId: videoId
         } )
      .then(response => {
      
      if (response.status == 200) {


         let videoData = [response.data.video_data];

          this.videoData = [response.data.video_data]

          this.isYoutube = true;

          let finalResult = [];

             videoData.forEach((data)=>{
               let resultWrapper = {
                 content: data,
                 type:'youtube_video'
               };
              
              finalResult.push(resultWrapper);

             });

           this.linkInfo = finalResult;

      
            
     }
       
     
     })
     .catch(error => {

        return 'error';

     }) 

      }, 
    processURL:function(link){

       
       

    let psl = require('psl');
     let FullString = link

     function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
      }

       return psl.get(extractHostname(FullString));

    },
    getLinkInfo:function(e){
   
     this.searchQuery = e.target.value;

     this.isYoutube = false;

          
     if(this.isURL(this.searchQuery)){

        let urlDomain = this.processURL(this.searchQuery);

         if(urlDomain == 'youtu.be'){

          
          let videoId = this.searchQuery.substring(17) 

          this.getVideoData(videoId);

          
            return;
         }
     
      this.loadingLink = true
    
            axios.post('/url/metadata',
          {
      
         url: this.searchQuery,
     
          }
          ).then(
      response=>{
        if(response.status==200){
        
         this.linkInfo = response.data;
            
           this.loadingLink = false
        }
      }
    ).catch(err=>{
      console.log(err)
       this.$root.chatComponent.showAlert('Oops!','Unable to fetch URL details','error','bottomRight',3000)
        this.loadingLink = false
    })

     }
         
       
    },
    }
}
</script>
<style scoped>

</style>