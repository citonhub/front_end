<template>
<div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute;z-index:20; background:white; height:100%;">
       
     <profile-top></profile-top>

<div v-if="allChannels != null">


    
       <div  class="scrollerStyle"  style="background:white; font-family:BodyText;position:absolute;left:0;width:100%; height:80%; overflow-y:auto; overflow-x:hidden; padding-top:40px !important;padding-bottom:140px !important;" v-if="allChannels != null">
          
           <v-card @click="showChannel(space)" tile flat class="col-12 py-1 px-0 my-0"  color="#ffffff" style="border-bottom:1px solid #5fb0b9;" v-for="(space,index) in allChannels"
                      :key="index">
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                          <v-img  :background-color="space.background_color" :src="space.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ space.image_name +'.' + space.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-5" style="align-items:center;">
                       <div>
                      <span class="titleText d-block">{{space.name}}</span>
                         <span class=" d-block" style="font-size:11px;">{{ space.members }} Members</span>
                       </div>
                        
                    </div>
                    <div class="py-0 my-0 d-flex col-4" style="align-items:center; justify-content:center;">
                          
                    </div>
                </div>
             </v-card>

             <div v-if="allChannels.length == 0" class="text-center col-12">
           <span style="color:gray; font-size:12px;">No Channel found</span>
                </div>  
             <div class="col-12 py-5 my-5">

                

             </div>

          </div>
        

 <div v-if="allChannels.length == 0"  style="background:white; font-family:BodyText;position:absolute;left:0;width:100%; height:80%; overflow-y:auto; overflow-x:hidden; padding-top:40px !important;padding-bottom:140px !important;" class="text-center">
       <span style="color:gray; font-size:12px;">No Channel found</span>
   </div>

</div>

   <v-app v-else   style="background:white; font-family:BodyText;position:absolute;left:0;width:100%; height:80%; overflow-y:auto; overflow-x:hidden; padding-top:40px !important;padding-bottom:140px !important;" >
      <div class="col-12 py-0 px-1 my-0">

          <div class="col-12 py-0 my-0 px-1">
   
           <div class="row py-0 my-0 px-1">
            
          <div class="col-12 py-1 my-0">
           <v-skeleton-loader
          class=" "
           
          type="list-item-avatar"
          ></v-skeleton-loader>
          </div>

          

         </div>


            </div>

              <div class="col-12 py-0 my-0 px-1">
   
           <div class="row py-0 my-0 px-1">
            
          <div class="col-12 py-1 my-0">
           <v-skeleton-loader
          class=" "
           
          type="list-item-avatar"
          ></v-skeleton-loader>
          </div>

          

         </div>


            </div>

              <div class="col-12 py-0 my-0 px-1">
   
           <div class="row py-0 my-0 px-1">
            
          <div class="col-12 py-1 my-0">
           <v-skeleton-loader
          class=" "
           
          type="list-item-avatar"
          ></v-skeleton-loader>
          </div>

          

         </div>


            </div>

          <div class="row py-0 my-0 px-1" >
        
        
          </div>
         
      </div>
      
    
     
</v-app>

</div>

</template>
<script>


export default {
    data(){
          return{
           
           allChannels:null
          }
      },
       components: { 
     
      },
      mounted(){
      this.fetchUserChannel();
        this.$root.showHeader = true;
      
      },
      methods:{
          sortArray: function(arrayValue){
      arrayValue.sort(function(a, b){ 
      
        return new Date(b.members) - new Date(a.members); 
    }); 

    },
         showChannel:function(space){
         this.$root.pageloader = true;
        window.location = '/#/space/' + space.space_id + '/channel/content/user';
      },
        fetchUserChannel:function(){
           
                axios.get('/fetch-user-channels-'+ this.$route.params.username)
      .then(response => {
      
      if (response.status == 200) {
        
      this.allChannels= response.data;
        this.sortArray(this.allChannels);
        
        
     }
       
     
     })
     .catch(error => {
    
     }) 
            
          
        },
  
      }
}
</script>
<style>
.titleText{
    font-size:13px; 
    font-family:HeaderText; 
    color:#173236;
}
.avatarImg{
  border-radius:50%;
  border: 3px solid #3E8893;
}
.messagesBadges{
    
    color: #ffffff;
    background: #3e868e;
    font-size: 11px;
    font-family: HeaderText;
    font-weight: bolder;
    border:2px solid #3e868e;
    border-radius:50%;
}
 .coin{
  font-size: 10px;
  font-weight: bolder;
  font-family:HeaderText;
  color: white;
}
.mybadgenew{
     font-size:10px;
     color:#2d646c;
     font-family:HeaderText; 
     border:1px solid #2d646c; 
     border-radius:10px; 
     padding: 2px 4px;
     background:#ffffff;
     font-weight: bolder;
 } 
</style>