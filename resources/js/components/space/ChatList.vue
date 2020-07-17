<template>

 
 <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:hidden; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


   
     
      <div style="overflow-y:auto; overflow-x:hidden;position:absolute;left:0; width:100%; height:100%;">
           <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-4 py-0 my-0 text-left px-1" style="border-bottom:2px solid #3E8893;">
           <v-btn icon color="#3E8893" @click="createChannel"><v-icon>mdi-plus-circle-outline</v-icon></v-btn>
         </div>

          <div class="col-4 py-0 my-0 d-flex px-1" style="border-bottom:2px solid #3E8893; align-items:center;justify-content:center;">
           
         </div>

         <div class="col-4 py-0 my-0 text-right px-1"  style="border-bottom:2px solid #3E8893;">
            <v-btn icon color="#3E8893"><v-icon>mdi-card-search-outline</v-icon></v-btn>
         </div>
      </div>
     </div>

      <div class="col-12 py-0 my-0" >
         <div class="row my-0 py-0 px-2 ">

             <v-card tile flat class="col-12 py-1 px-0 my-1" @click="showSpace(personalSpace)" color="#ffffff" style="border-bottom:1px solid #5fb0b9;">
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                          <v-img  :background-color="personalSpace.background_color" :src="personalSpace.image_name == null ? 'imgs/user.svg' : '/imgs/space/'+ personalSpace.image_name +'.' + personalSpace.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-7" style="align-items:center;">
                         <span class="titleText">{{personalSpace.name}}</span>
                    </div>
                    <div class="py-0 my-0 d-flex col-2" style="align-items:center;">
                        
                    </div>
                </div>
             </v-card>
            
             <div class="col-12 py-0 px-0 my-1 mb-2" @click="showChannel ? showChannel = false : showChannel = true" >
                 
                
                     <div class="py-2 my-0 d-flex col-12" style="align-items:center;justify-content:center;background:#c9e4e8;">
                         <span  style="font-size:12px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">Channels</span>
                    </div>
                
            
             </div>
              <v-slide-y-transition>

              
              <div class="col-12 py-1 my-0 mx-0" v-if="showChannel">
                 <div class="row my-0 my-0 px-0">
                    <v-card tile flat class="col-12 py-1 px-0 my-0" @click="showSpace(space)" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" v-for="(space,index) in channelSpace"
                      :key="index">
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                          <v-img  :background-color="space.background_color" :src="space.image_name == null ? 'imgs/channel.svg' : '/imgs/space/'+ space.image_name +'.' + space.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-7" style="align-items:center;">
                         <span class="titleText">{{space.name}}</span>
                    </div>
                    <div class="py-0 my-0 d-flex col-2" style="align-items:center;">
                          <span class="messagesBadges" v-if="space.unread != 0"><span style="padding:2px;">{{ space.unread }}</span></span>
                    </div>
                </div>
             </v-card>
                 </div>
              </div>
             </v-slide-y-transition>



               <div class="col-12 py-0 px-0 my-1 mb-2" @click="showTeams ? showTeams = false : showTeams = true" >
                  <div class="py-2 my-0 d-flex col-12" style="align-items:center;justify-content:center; background:#c9e4e8;">
                         <span  style="font-size:12px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">Teams</span>
                    </div>
             </div>
             <v-slide-y-transition>
              <div class="col-12 py-1 my-0 mx-0"   v-if="showTeams">
                 <div class="row my-0 my-0 px-0">
                    <v-card tile flat class="col-12 py-1 px-0 my-0" @click="showSpace(space)" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" v-for="(space,index) in teamSpace"
                      :key="index">
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                          <v-img  :background-color="space.background_color" :src="space.image_name == null ? 'imgs/channel.svg' : '/imgs/space/'+ space.image_name +'.' + space.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-7" style="align-items:center;">
                         <span class="titleText">{{space.name}}</span>
                    </div>
                    <div class="py-0 my-0 d-flex col-2" style="align-items:center;">
                         <span class="messagesBadges" v-if="space.unread != 0"><span style="padding:2px;">{{ space.unread }}</span></span>
                    </div>
                </div>
             </v-card>
                 </div>
              </div>
              </v-slide-y-transition>

               <div class="col-12 py-0 px-0 my-1 mb-2" @click="showDirect ? showDirect = false : showDirect = true" >
                  <div class="py-2 my-0 d-flex col-12" style="align-items:center;justify-content:center;background:#c9e4e8;">
                         <span  style="font-size:12px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">Direct Messages</span>
                    </div>
             </div>
             <v-slide-y-transition>
              <div class="col-12 py-1 my-0 mx-0"   v-if="showDirect">
                 <div class="row my-0 my-0 px-0">
                    
              
                 </div>
              </div>
              </v-slide-y-transition>
              
               
              
             <div class="my-5 py-5 col-12" style="padding-top:120px !important;">

             </div>
            
         </div>

         
      </div>
         </div>

       <span style="position:absolute; top:76%; right:3%;z-index:134500045;"  class="d-md-none d-inline-block">
          <v-btn
                color="#35747e"
                small
                @click="createProject"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-plus-network-outline</v-icon>
              </v-btn>
     </span>

      <span style="position:absolute; top:84%; right:3%;z-index:134500045;"  class="d-none d-md-inline-block">
          <v-btn
                color="#35747e"
                small
                @click="createProject"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-plus-network-outline</v-icon>
              </v-btn>
     </span>
         </div>
 </div>
  

</template>
<script>
export default {
     data () {
      return {
       showmore:false,
       showTeams:true,
       showDirect:true,
       personalSpace:[],
       teamSpace:[],
       channelSpace:[],
       showChannel:true,
      }
    },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = true;
       this.$root.channel = null;
       this.$root.Messages = [];
       Echo.leave('space.' + this.$root.selectedSpace.space_id);
       this.fetchChatList();
    },
    methods:{
       showSpace:function(space){
          this.$root.selectedSpace = space;

          space.unread = 0;
          
         this.$router.push({ path: '/space/'  +  space.space_id  +  '/channel' });
       },
       createChannel:function(){
           this.$router.push({ path: '/space/create' });
       },
       createProject:function(){
           this.$router.push({ path: '/space/create-project' });
       },
       fetchChatList: function(){
         if(this.$root.ChatList.length != 0){

        this.personalSpace = this.$root.ChatList[0];
        this.teamSpace = this.$root.ChatList[1];
        this.channelSpace = this.$root.ChatList[2];
          
        this.$root.SpaceWithoutChannel = this.$root.ChatList;
    
         }else{
           
             axios.get('/fetch-user-spaces')
      .then(response => {
      
      if (response.status == 200) {
        
        this.personalSpace = response.data[0];
        this.teamSpace = response.data[1];
        this.channelSpace = response.data[2];
          
        this.$root.SpaceWithoutChannel = response.data;
         this.$root.ChatList = response.data;
         
       

     }
       
     
     })
     .catch(error => {
    
     }) 
         }
         
       }
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
</style>