<template>
       <div style="position:absolute; height:92%; width:100%; overflow-y:auto;left:0;top:8%;" class="scrollerStyle"> 

         <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-1 py-0 my-0 text-left px-0" >
           <v-btn icon color="#3E8893" @click="goBack"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
         </div>
         
         <router-link v-if="this.$root.selectedSpace.type != 'Channel'" :to="'/space/' + this.$route.params.spaceId + '/channel/projects'" class="col-5 py-0 my-0 d-flex" style="border-bottom:2px solid #c9e4e8; align-items:center;justify-content:center;">
          <span  style="font-size:12px; color:#3E8893; font-weight:bolder;font-family:HeaderText;">Projects</span>
         </router-link>
         <router-link v-if="this.$root.selectedSpace.type != 'Channel'" :to="'/space/' + this.$route.params.spaceId + '/channel/resources'" class="col-5 py-0 my-0 d-flex" style="border-bottom:2px solid #3E8893; align-items:center;justify-content:center;">
          <span  style="font-size:12px; color:#3E8893; font-weight:bolder;font-family:HeaderText;">Media</span>
         </router-link>

         <div  v-if="this.$root.selectedSpace.type == 'Channel'" :to="'/space/' + this.$route.params.spaceId + '/channel/resources'" class="col-10 py-0 my-0 d-flex" style="border-bottom:2px solid #3E8893; align-items:center;justify-content:center;">
          <span  style="font-size:12px; color:#3E8893; font-weight:bolder;font-family:HeaderText;">Media</span>
         </div>
         <div class="col-1 py-0 my-0 text-right px-0"  >
          
         </div>
         </div>
         </div>

         <div class="col-12 py-0 my-0" >
         <div class="row my-0 py-0">
         

            <div class="col-lg-10 offset-lg-1 col-md-10 offset-md-1 py-1 my-1 text-right px-2" v-for="(document,index) in resources" :key="index">
              <v-card  class="px-2 py-2" >
            <div class="py-0 my-0 row px-1">
               <div class="col-2 py-0 my-0 d-flex" style="align-items:center; justify-content:center;">
                   <span class="documentIcon" v-if="document.type == 'audio'"><v-icon class="px-1 py-1" color="#3E8893" >mdi-music mdi-18px</v-icon></span>
                  <span class="documentIcon" v-if="document.type == 'file'"><v-icon class="px-1 py-1" color="#3E8893" >mdi-file mdi-18px</v-icon></span>
                  <span class="documentIcon"  v-if="document.type == 'video'"><v-icon class="px-1 py-1" color="#3E8893" >mdi-video mdi-18px</v-icon></span>
                     
               </div>
               <div class="col-7 py-1 my-0 text-left" style="align-items:center;">

                  <span class="documentTitle" v-if="document.type == 'audio'">{{document.audio.display_name}}</span>
                  <span class="documentTitle" v-if="document.type == 'file'">{{document.file.display_name}}</span>
                  <span class="documentTitle"  v-if="document.type == 'video'">{{document.video.display_name}}</span>
               </div>
               <div class="col-3 py-0 my-0 d-flex" style="align-items:center; justify-content:center;">
                 <v-btn icon  v-if="document.type == 'audio'"><v-icon color="#3E8893"  >mdi-cloud-download </v-icon></v-btn>
                  <v-btn icon  v-if="document.type == 'file'"><v-icon color="#3E8893"  >mdi-cloud-download </v-icon></v-btn>
                  <v-btn icon  v-if="document.type == 'video'"><v-icon color="#3E8893"  >mdi-cloud-download </v-icon></v-btn>
               </div>
            </div>
         </v-card>
            </div>

           
        
         </div>
         </div>


       </div>
</template>
<script>
export default {
     data(){
        return{
        
          resources:[],
        }
    },
     components: {
   
  },
    mounted(){
      this.fetchMessages();
       this.fetchResources();
    },
    methods:{
       goBack() {
        this.$router.push({ path: '/space/' + this.$route.params.spaceId +'/channel/content' + '/user' });
        },
       fetchMessages: function(){
          
           axios.get('/fetch-space-messages-' + this.$route.params.spaceId )
      .then(response => {
      
      if (response.status == 200) {
        
     
       this.$root.selectedSpace = response.data[1]
       
     }
       
     
     })
     .catch(error => {
    
     }) 

        },
       fetchResources: function(){
          
           axios.get('/fetch-space-resources-' + this.$route.params.spaceId )
      .then(response => {
      
      if (response.status == 200) {
        
       this.resources = response.data;
       
     }
       
     
     })
     .catch(error => {
    
     }) 

        },
  
  },
}
</script>
<style>
.documentIcon{
    background: #dbedf0;
    border:1px solid #dbedf0;
    border-radius:50%;
}
.documentTitle{
  font-size: 12px;
  color: #3E8893;
}

.documentSize{
  font-size: 10px;
  color: #a6a6a6;
}
body{
  overscroll-behavior-y: none;
}
</style>