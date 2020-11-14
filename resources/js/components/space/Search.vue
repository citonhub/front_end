<template>
   

       <div class="  col-lg-6 offset-lg-3  py-0 px-0 my-0 scrollerStyle" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6; position:fixed;  background:rgba(38, 82, 89,0.4); height:100%; overflow-y:auto; overflow-x:hidden; z-index:9999999999999200;" 
        >
         <div class="row my-0 py-0 px-2">

          
       <div class="col-12 col-lg-4 offset-lg-4 my-1 text-center py-1 fixed-top">
           <div class="py-1 pb-0 px-1" height="auto" style="border-radius:10px;">

               <v-text-field
              style="font-size:13px;"
              class="mb-0"
              v-model="query"
              rounded
               @keydown="triggerSearch"
                :loading="loading"
                @click:append="closeSearch"
              append-icon="mdi-close"
              solo
             placeholder="Search CitonHub" 
             dense
             color="#4495a2"
             ></v-text-field>


           </div>
        
       </div>


       <div class="col-12 col-lg-8 offset-lg-2 my-1  py-1 " style="margin-top:55px !important;" >

         <div class="col-12  py-2" v-if="channelData.length != 0">
           <span style="font-size:13px; color:#ffffff;">Channels</span>
         </div>

            <v-card class="py-1 px-0 mb-1"  color="#ffffff"  v-for="(channel,index) in channelData" :key="index + 'channel'"  @click="showChannel(channel)" >
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
     <v-img  :background-color="channel.background_color" :src="channel.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ channel.image_name +'.' + channel.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-9" style="align-items:center;">
                       <div>
                      <span class="titleText d-block">{{channel.name}}</span>
                         <span class=" d-block" style="font-size:11px;" v-html="shortenContent(channel.description,35)" ></span>
                       </div>
                        
                    </div>
                   
                </div>
             </v-card>


             <div class="col-12  py-2" v-if="botData.length != 0">
           <span style="font-size:13px; color:#ffffff;">Learning Bots</span>
         </div>

            <v-card class="py-1 px-0 mb-1"  color="#ffffff"  v-for="(bot,index) in botData" :key="index + 'bot'"  @click="showBot(bot)" >
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
     <v-img  :background-color="bot.background_color" :src="bot.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ bot.image_name +'.' + bot.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-9" style="align-items:center;">
                       <div>
                      <span class="titleText d-block">{{bot.name}}</span>
                         <span class=" d-block" style="font-size:11px;" v-html="shortenContent(bot.description,35)" ></span>
                       </div>
                        
                    </div>
                   
                </div>
             </v-card>

         <div class="col-12  py-2" v-if="userData.length != 0">
           <span style="font-size:13px; color:#ffffff;"> People</span>
         </div>

           <v-card class="py-2 px-1 mb-1" @click="messageSpace(user)" color="#ffffff" v-for="(user,index) in userData" :key="index + 'user'" :loading="user.loading">
               <div class="row py-0 my-0 px-1">
                
                    <div class="py-0 my-0 d-flex col-12" style="align-items:center;" >
                         <div :style="imageStyle(35,user)" @click="viewUser(user)"
                  class="d-inline-block mr-2" >

                  </div>
                        <div @click="viewUser(user)">
                       <span class=" d-block" style="font-size:13px; color:#26535a;">{{ shortenContent(user.name,23)}} </span>
                         <span class=" d-block" style="font-size:11px; color:#595959;"> @{{user.username}}</span>
                        </div>
                        
                    </div>
                <div class="col-12 py-0 " v-if="user.about != null && user.about != '<p></p>'">
                    <span style="font-size:12px; color:#737373;" v-html="shortenContent(user.about,110)">
                      
                    </span>
                </div>

                   
                </div>
              </v-card>
         
          <div class="col-12  py-2" v-if="projectData.length != 0" >
           <span style="font-size:13px; color:#ffffff;">Projects</span>
         </div>

             <v-card  class="py-1 px-1 mb-1" color="#ffffff" v-for="(project,index) in projectData" :key="index + 'project'" @click="showProject(project)">
            <div class="py-0 my-0 row px-2">
               <div class="col-2 py-1 d-flex" style="align-items:center;justify-content:center;">
                    <span class="documentIcon"><v-icon class="px-1 py-1" color="#3E8893" >mdi-plus-network-outline </v-icon></span>
                </div>
                <div class="col-10 py-1 text-left px-2">
                  
                     <div class="row py-0 my-0">
                         <div class="col-6 py-0 text-left ">
                     <span class="documentTitle" style="color:#2d646c;">{{shortenContent(project.title,23)}}</span>
                    </div>
                <div class="col-6 py-0 text-right">
                       <span class="mybadgenew">@{{project.owner}}</span>
                </div>

                   <div class="col-6 py-1 text-left ">
                    <v-icon color="#3E8893">mdi-star  mdi-18px</v-icon>
                     <span style="font-size:9px; color:#c5c5c5;">{{project.total_stars}}</span>        
                </div>
                <div class="col-6 py-1 text-right">
                     <v-icon color="#3E8893">mdi-comment-text-outline mdi-18px</v-icon>
                     <span style="font-size:9px; color:#c5c5c5;">{{project.comments}}</span>   
                </div>
                     </div>
                </div>
               
              
            </div>
           </v-card>

       </div>

       

     
     </div>
      </div>

      
    
</template>
<script>


export default {
    data(){
        return{
           Alert:false,
        alertMsg:'',
        preventClose:true,
        query:'',
        loadingMessage:false,
        projectData:[],
        userData:[],
        channelData:[],
        loading:false,
        searchRules:[
           v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character'
        ],
        botData:[]
       
        }
    },
    components: {
   
  },
   mounted(){
       
    },
    methods:{
     closeSearch: function(){

        this.$root.showSearchControl = false;
          window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        
     },
     preventCloseCtl:function(){
          
     },
      showProject:function(project){
        
         this.$root.fromChatList = true;
           this.$router.push({ path: '/' + project.project_slug +'/panel' });

            this.$root.showSearchControl = false;

      },
      showBot:function(bot){

         this.$router.push({ path: '/bot-engine/' + bot.bot_id + '/user' });
         
          this.$root.showSearchControl = false;


      },
      showChannel:function(space){
      
      if(this.$root.TrackLastSubSpace.length != 0 && space.space_id == this.$root.TrackLastSubSpace[0]){
                 
                  this.$router.push({ path: '/space/'  +  this.$root.TrackLastSubSpace[1]  +  '/channel/content' + '/user' });

                     return;

             }else{

               

                this.$root.selectedSpace = space;

                this.$router.push({ path: '/space/'  +  space.space_id  +  '/channel/content' + '/user' });

             }
       this.$root.showSearchControl = false;

      },
     triggerSearch:function(){

        if(this.query.length <= 2){
       
       this.channelData = [];

      this.userData = [];

      this.projectData = [];

      this.botData = [];
           return;

        }
     setTimeout(()=>{
         
         this.fetchData();
       },500);
     },
     
      fetchData: function(){
         if(this.query.length <= 2) return;

          if(this.loading) return;

           this.loading = true;
           axios.get('/global-search/' + this.query  )
      .then(response => {
      
      if (response.status == 200) {
        
      this.channelData = response.data[0];

      this.userData = response.data[1];

      this.projectData = response.data[2];

       this.botData = response.data[3];
        
      this.loading = false;
       
      }
       
     
     })
     .catch(error => {
       this.loading = false;
     }) 

        },
    messageSpace: function(user){


       

          
        if(user.direct_present){
         
         this.$root.Messages = null;
        this.$root.selectedSpace = [];

        this.$root.forceListReload = true;
      
     

       if(this.$root.TrackLastSubSpace.length != 0 && user.space_id == this.$root.TrackLastSubSpace[0]){
                 
                  this.$router.push({ path: '/space/'  +  this.$root.TrackLastSubSpace[1]  +  '/channel/content' + '/user' });

                     return;

             }else{

               

                this.$root.selectedSpace = space;

                this.$router.push({ path: '/space/'  +  user.space_id  +  '/channel/content' + '/user' });

             }
         
          this.$root.showUserInfo = false;

          this.$root.showSearchControl = false;


          return;
      
        }
        if(user.loading){
            return;
        }

         user.loading = true;
           
          axios.post( '/create-space',{
                name: '',
                limit: 2,
                memberId: user.tempId,
                type: 'Direct'
                  })
          .then(response => {
             
             if (response.status == 200) {

               this.$root.Messages = null;
        this.$root.selectedSpace = [];


         this.$root.showUserInfo = false;

         if(this.$root.ChatList.length != 0){
           this.$root.ChatList[4].unshift(response.data);
           
            this.$root.LocalStore('ChatListNew' + this.$root.username,this.$root.ChatList);
        this.$root.forceListReload = true;
         }
       
          if(this.$root.TrackLastSubSpace.length != 0 && response.data.space_id == this.$root.TrackLastSubSpace[0]){
                 
                  this.$router.push({ path: '/space/'  +  this.$root.TrackLastSubSpace[1]  +  '/channel/content' + '/user' });

                     return;

             }else{
               

                this.$root.selectedSpace = response.data;

                this.$router.push({ path: '/space/'  +  response.data.space_id  +  '/channel/content' + '/user' });

             }

             
              this.$root.showSearchControl = false;
                         
            }

          })
          .catch(error => {
              

               user.loading = false;

             
          })

       

      },
         shortenContent: function(content,limit){
            if(content){

              if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }

            }
               
        },
        imageStyle:function(dimension,user){
      

      if(user.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         styleString += 'background-color:#ffffff; background-image:url(imgs/usernew.png);';
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;";
         let imgLink = user.image_name + '.' + user.image_extension;
          styleString += 'background-color:'+ user.background_color + '; background-image:url(imgs/profile/'  + imgLink  +  ');';
          return styleString;
      }
       
         }
     
      
    },
   
}
</script>
<style>
.titleTextNew{
    font-size:13px; 
    font-family:HeaderText; 
    color:#35747e;
}

.avatarImg{
  border-radius:50%;
  border: 3px solid #3E8893;
}
.documentIcon{
    background: #dbedf0;
    border:1px solid #dbedf0;
    border-radius:50%;
}
.documentTitle{
  font-size: 12px;
  color: #2d646c;
}

.documentSize{
  font-size: 10px;
  color: #a6a6a6;
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