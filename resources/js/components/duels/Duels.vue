<template>
<div>

  
     
     <div class="  col-lg-6 offset-lg-3 py-1 my-0" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;position:absolute; background:white; height:100%; overflow-y:hidden; overflow-x:hidden; ">
        
        <div style="position:fixed; width:100%; left:0; height:5%;" class="col-lg-6 offset-lg-3 py-0 my-0">
          <div class="col-12 d-md-block d-none py-0 my-0">

            <div class="row py-0 my-0">
               <div class="col-3 text-left ">
                  <v-btn small  color="#ffffff" @click="showUserOrgBoard = true" rounded><v-icon color="#3E8893">mdi-account-switch</v-icon></v-btn>
               </div>

               <div class="col-6 text-center ">
                      <span style="font-size:14px; font-family:headerText;" v-if="this.$route.params.orgId == 'user'" >You</span>
                      <span style="font-size:14px; font-family:headerText;" v-else >{{shortenContent(this.$root.selectedOrg.name,25)}}</span>
               </div>

               <div class="col-3 text-right ">
                <v-btn x-small color="#3E8893" @click="showOrgList" style="color:white;">Organizations</v-btn>
               </div>
            </div>

          </div>

          <div class="col-12 d-md-none d-block py-0 my-0 px-1">

            <div class="row py-0 my-0">
               <div class="col-3 text-left px-1">
                  <v-btn small  color="#ffffff" @click="showUserOrgBoard = true" rounded><v-icon color="#3E8893">mdi-account-switch mdi-18px</v-icon></v-btn>
               </div>

               <div class="col-6 text-center px-1">
                      <span style="font-size:13px; font-family:headerText;" v-if="this.$route.params.orgId == 'user'" >You</span>
                      <span style="font-size:13px; font-family:headerText;" v-else >{{shortenContent(this.$root.selectedOrg.name,20)}}</span>
               </div>

               <div class="col-3 text-right px-1">
                <v-btn small color="#3E8893" rounded @click="showOrgList"><v-icon color="#ffffff">mdi-bank mdi-18px</v-icon></v-btn>
               </div>
            </div>

          </div>
        </div>  



        <div style="position:fixed; width:100%; left:0; top:13%; height:25%;" class="col-lg-6 offset-lg-3 py-0 my-0 px-1"> 
       
            
                <div class=" py-2 px-4 d-md-block d-none" style="position:absolute; width:100%; top:2%; left:2%;">
                <span style="font-size:14px; ">Spaces</span> <v-btn icon class="d-inline-block"  style="z-index:235464563;" @click="createSpace()" color="#3E8893"><v-icon>mdi-plus-box </v-icon></v-btn>
                </div>

                 <div class=" py-2 px-2 d-md-none d-block" style="position:absolute; width:100%; top:5%; left:1%;">
                <span style="font-size:13px; ">Spaces</span> <v-btn icon class="d-inline-block"  style="z-index:235464563;"  @click="createSpace()"  color="#3E8893"><v-icon>mdi-plus-box mdi-18px</v-icon></v-btn>
                </div>

                <div class=" px-1  d-md-flex d-none" style="align-items:center; justify-content:center; position:absolute; width:10%; top:62%; left:0;">
                    <v-btn icon small @click="circulateData('channel','decr')"> <v-icon>mdi-chevron-left</v-icon></v-btn>
                </div>

                <div class="d-md-block d-none py-1" style="align-items:center; justify-content:center; position:absolute;  width:80%; height:90%; top:18%; left:10%;">

                  <div v-if="ChannelTeamDataLg != null">

        
                     <div 
        v-for="(spaces,index) in ChannelTeamDataLg" :key="'lg_space'+ index"
    >
        <div class="col-12  d-md-block d-none">

         <div class="row py-0 my-0">

           <div class="col-6 " v-for="(space,index) in spaces" :key="'inner'+index">
             <v-card color="#ffffff" height="60px" @click="showSpace(space)">
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
   <v-img  :background-color="space.background_color" :src="space.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ space.image_name +'.' + space.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-9" style="align-items:center;">
                       <div>
                      <span class="titleTextNew d-block">{{shortenContent(space.name,20)}}</span>
                         <span class=" d-block" style="font-size:12px; color:gray;" v-html="shortenContent(space.description,30)" ></span>
                       </div>
                        
                    </div>
                   
                </div>
             </v-card>
           </div>
          
         

         </div>
             
        </div>

     
        
        
    </div>

       <div v-if="ChannelTeamDataLg[0].length == 0" style="height:100%; width:100%; position:absolute; justify-content:center; align-items:center;" class="d-flex">

         <span style="font-size:13px; color:gray;">No Channel or team created yet</span>
           
       </div>


                  </div>

              <div v-else>
                
                 <div class="col-12  d-md-block d-none">

         <div class="row py-0 my-0">

           <div class="col-6 ">
            <v-skeleton-loader height="60px"  type="image"></v-skeleton-loader>
           </div>

           <div class="col-6 ">
            <v-skeleton-loader height="60px"  type="image"></v-skeleton-loader>
           </div>

           <div class="col-6 ">
            <v-skeleton-loader height="60px"  type="image"></v-skeleton-loader>
           </div>

           <div class="col-6 ">
            <v-skeleton-loader height="60px"  type="image"></v-skeleton-loader>
           </div>
          
         

         </div>
             
        </div>

              </div>

                

              
            </div>

             <div class="d-md-none d-block pt-3 px-2 " v-if="ChannelTeamData != null" style="white-space:nowrap;  overflow-y:hidden; position:absolute; overflow-x:auto; width:90%; height:80%; top:20%; left:5%;">

               
              <div color="#ffffff"  class="d-inline-block mr-1 pr-1  px-0 col-11 "
              v-for="(space,index) in ChannelTeamData " :key="'sm_space'+index">

              <v-card color="#ffffff" height="68px" @click="showSpace(space)"  >
               <div class="col-12 py-2 my-0">

                  <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
<v-img  :background-color="space.background_color" :src="space.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ space.image_name +'.' + space.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-9" style="align-items:center;">
                       <div>
                      <span class="titleTextNew d-block">{{shortenContent(space.name,20)}}</span>
                         <span class=" d-block" style="font-size:12px; color:gray;" v-html="shortenContent(space.description,25)"  ></span>
                       </div>
                        
                    </div>
                   
                </div>

               </div>
               
             </v-card>

               </div>
             

             <div v-if="ChannelTeamData.length == 0" style="height:70%; width:100%; position:absolute; justify-content:center; align-items:center;" class="d-flex">

         <span style="font-size:13px; color:gray;">No Channel or team created yet</span>
           
       </div>
              

             </div>

             <div class="d-md-none d-block pt-3 px-2 " v-else style="white-space:nowrap;  position:absolute; overflow-x:auto; width:90%; height:80%; top:20%; left:5%;">
                 <div color="#ffffff"  class="d-inline-block mr-1 pr-1  px-0 col-11 "  >

              <v-skeleton-loader height="68px"  type="image"></v-skeleton-loader>

             
               </div>

               <div color="#ffffff"  class="d-inline-block mr-1 pr-1  px-0 col-11 "  >

              <v-skeleton-loader height="68px"  type="image"></v-skeleton-loader>

             
               </div>
             </div>

             <div class=" px-1  d-md-flex d-none" style="align-items:center; justify-content:center; position:absolute;  width:10%; top:62%; right:0;">
                    <v-btn icon small @click="circulateData('channel','incr')"> <v-icon>mdi-chevron-right</v-icon></v-btn>
                </div>
        </div>

      <div style="position:fixed; width:100%; left:0; top:37%; height:25%;" class="col-lg-6 offset-lg-3 py-0 my-0 px-1"> 
       
            
                <div class=" py-2 px-4 d-md-block d-none" style="position:absolute; width:100%; top:2%; left:2%;">
                <span style="font-size:14px; ">Teaching Bots</span> <v-btn icon class="d-inline-block"  style="z-index:235464563;" @click="gotToBotCreate" color="#3E8893"><v-icon>mdi-plus-box </v-icon></v-btn>
                </div>

                 <div class=" py-2 px-2 d-md-none d-block" style="position:absolute; width:100%; top:5%; left:1%;">
                <span style="font-size:13px; ">Teaching Bots</span> <v-btn icon class="d-inline-block"  style="z-index:235464563;"  @click="gotToBotCreate"  color="#3E8893"><v-icon>mdi-plus-box mdi-18px</v-icon></v-btn>
                </div>

                <div class=" px-1  d-md-flex d-none" style="align-items:center; justify-content:center; position:absolute; width:10%; top:62%; left:0;">
                    <v-btn icon small @click="circulateData('bots','decr')"> <v-icon>mdi-chevron-left</v-icon></v-btn>
                </div>

                <div class="d-md-block d-none py-1" style="align-items:center; justify-content:center; position:absolute;  width:80%; height:90%; top:18%; left:10%;">

                  <div v-if="botDataLg != null">

        
                     <div 
        v-for="(botArray,index) in botDataLg" :key="'lg_bot'+ index"
    >
        <div class="col-12  d-md-block d-none">

         <div class="row py-0 my-0">

           <div class="col-6 " v-for="(bot,index) in botArray" :key="'inner'+index">
             <v-card color="#ffffff" height="60px" @click="gotToBot(bot)">
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
   <v-img  :background-color="bot.background_color" :src="bot.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ bot.image_name +'.' + bot.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-9" style="align-items:center;">
                       <div>
                      <span class="titleTextNew d-block">{{shortenContent(bot.name,20)}}</span>
                         <span class=" d-block" style="font-size:12px; color:gray;" v-html="shortenContent(bot.description,30)" ></span>
                       </div>
                        
                    </div>
                   
                </div>
             </v-card>
           </div>
          
         

         </div>
             
        </div>

     
        
        
    </div>

       <div v-if="botDataLg[0].length == 0" style="height:100%; width:100%; position:absolute; justify-content:center; align-items:center;" class="d-flex">

         <span style="font-size:13px; color:gray;">No teaching bot created yet</span>
           
       </div>


                  </div>

              <div v-else>
                
                 <div class="col-12  d-md-block d-none">

         <div class="row py-0 my-0">

           <div class="col-6 ">
            <v-skeleton-loader height="60px"  type="image"></v-skeleton-loader>
           </div>

           <div class="col-6 ">
            <v-skeleton-loader height="60px"  type="image"></v-skeleton-loader>
           </div>

           <div class="col-6 ">
            <v-skeleton-loader height="60px"  type="image"></v-skeleton-loader>
           </div>

           <div class="col-6 ">
            <v-skeleton-loader height="60px"  type="image"></v-skeleton-loader>
           </div>
          
         

         </div>
             
        </div>

              </div>

                

              
            </div>

             <div class="d-md-none d-block pt-3 px-2 " v-if="botData != null" style="white-space:nowrap; overflow-y:hidden;  position:absolute; overflow-x:auto; width:90%; height:80%; top:20%; left:5%;">

               
              <div color="#ffffff"  class="d-inline-block mr-1 pr-1  px-0 col-11 "
              v-for="(bot,index) in botData " :key="'sm_bot'+index">

              <v-card color="#ffffff" height="68px" @click="gotToBot(bot)"  >
               <div class="col-12 py-2 my-0">

                  <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
<v-img  :background-color="bot.background_color" :src="bot.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ bot.image_name +'.' + bot.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-9" style="align-items:center;">
                       <div>
                      <span class="titleTextNew d-block">{{shortenContent(bot.name,20)}}</span>
                         <span class=" d-block" style="font-size:12px; color:gray;" v-html="shortenContent(bot.description,25)"  ></span>
                       </div>
                        
                    </div>
                   
                </div>

               </div>
               
             </v-card>

               </div>
             

             <div v-if="botData.length == 0" style="height:70%; width:100%; position:absolute; justify-content:center; align-items:center;" class="d-flex">

         <span style="font-size:13px; color:gray;">No teaching bot created yet</span>
           
       </div>
              

             </div>

             <div class="d-md-none d-block pt-3 px-2 " v-else style="white-space:nowrap;  position:absolute; overflow-x:auto; width:90%; height:80%; top:20%; left:5%;">
                 <div color="#ffffff"  class="d-inline-block mr-1 pr-1  px-0 col-11 "  >

              <v-skeleton-loader height="68px"  type="image"></v-skeleton-loader>

             
               </div>

               <div color="#ffffff"  class="d-inline-block mr-1 pr-1  px-0 col-11 "  >

              <v-skeleton-loader height="68px"  type="image"></v-skeleton-loader>

             
               </div>
             </div>

             <div class=" px-1  d-md-flex d-none" style="align-items:center; justify-content:center; position:absolute;  width:10%; top:62%; right:0;">
                    <v-btn icon small @click="circulateData('bots','incr')"> <v-icon>mdi-chevron-right</v-icon></v-btn>
                </div>
        </div>
        
     
     <div style="position:fixed; width:100%; left:0; top:61%; height:25%;" class="col-lg-6 offset-lg-3 py-0 my-0">
         <div class=" py-2 px-4 d-md-block d-none" style="position:absolute; width:100%; top:2%; left:2%;">
                <span style="font-size:14px; ">Coding Challenges</span> <v-btn icon class="d-inline-block"  style="z-index:235464563;" @click="gotToChallengeCreate" color="#3E8893"><v-icon>mdi-plus-box </v-icon></v-btn>

                 
                </div>

             <div class=" py-2 px-2 d-md-none d-block" style="position:absolute; width:100%; top:4%; left:1%;">
                <span style="font-size:13px; ">Coding Challenges</span> <v-btn icon class="d-inline-block"  style="z-index:235464563;"  @click="gotToChallengeCreate" color="#3E8893"><v-icon>mdi-plus-box mdi-18px</v-icon></v-btn>
                </div>

                <div class=" px-1  d-md-flex d-none" style="align-items:center; justify-content:center; position:absolute; width:10%; top:70%; left:0;">
                    <v-btn icon small @click="circulateData('challenges','decr')"> <v-icon>mdi-chevron-left</v-icon></v-btn>
                </div>
                

                <div class="d-md-block d-none py-1" style="align-items:center; justify-content:center; position:absolute;  width:80%; height:90%; top:18%; left:10%;">

                  <div v-if="challengesDataLg != null">


                     <div
       v-for="(challengeArray,index) in challengesDataLg" :key="'lg_challenge'+ index"
    >
        <div class="col-12  d-md-block d-none">

         <div class="row py-0 my-0">

            <div class="col-6 "   v-for="(challenge,index) in challengeArray" :key="'inner_challenge'+ index">
            <each-duel :source="challenge"></each-duel>
           </div>

           

         </div>
             
        </div>

     
        
        
    </div>

     <div v-if="challengesDataLg[0].length == 0" style="height:100%; width:100%; position:absolute; justify-content:center; align-items:center;" class="d-flex">

         <span style="font-size:13px; color:gray;">No challenges created yet</span>
           
       </div>



                  </div>

                  <div v-else>
                
                 <div class="col-12  d-md-block d-none">

         <div class="row py-0 my-0">

           <div class="col-6 ">
            <v-skeleton-loader height="60px"  type="image"></v-skeleton-loader>
           </div>

           <div class="col-6 ">
            <v-skeleton-loader height="60px"  type="image"></v-skeleton-loader>
           </div>

           <div class="col-6 ">
            <v-skeleton-loader height="60px"  type="image"></v-skeleton-loader>
           </div>

           <div class="col-6 ">
            <v-skeleton-loader height="60px"  type="image"></v-skeleton-loader>
           </div>
          
         

         </div>
             
        </div>

              </div>

                

              
            </div>

             <div class="d-md-none d-block pt-3 px-2 " v-if="challengesData != null" style="white-space:nowrap;  overflow-y:hidden; position:absolute; overflow-x:auto; width:90%; height:80%; top:20%; left:5%;">
              
              <div color="#ffffff"  class="d-inline-block mr-1 pr-1  px-0 col-11 "
               v-for="(challenge,index) in challengesData" :key="'sm_challenge'+index">
                <each-duel :source="challenge"></each-duel>
               
             </div>


             <div v-if="challengesData.length == 0" style="height:70%; width:100%; position:absolute; justify-content:center; align-items:center;" class="d-flex">

         <span style="font-size:13px; color:gray;">No challenges created yet</span>
           
       </div>

             
             </div>

             <div class="d-md-none d-block pt-3 px-2 " v-else style="white-space:nowrap;  position:absolute; overflow-x:auto; width:90%; height:80%; top:20%; left:5%;">

               <div color="#ffffff"  class="d-inline-block mr-1 pr-1  px-0 col-11 "  >

              <v-skeleton-loader height="68px"  type="image"></v-skeleton-loader>

             
               </div>

               <div color="#ffffff"  class="d-inline-block mr-1 pr-1  px-0 col-11 "  >

              <v-skeleton-loader height="68px"  type="image"></v-skeleton-loader>

             
               </div>

             </div>

             <div class=" px-1  d-md-flex d-none" style="align-items:center; justify-content:center; position:absolute;  width:10%; top:70%; right:0;">
                    <v-btn icon small @click="circulateData('challenges','incr')"> <v-icon>mdi-chevron-right</v-icon></v-btn>
                </div>
        </div>  

         
     
         <div   v-if="showUserOrgBoard"  @click="showUserOrgBoard = false" style="position:fixed;  height:100%; background:rgba(38, 82, 89,0.5); overflow-y:hidden; overflow-x:hidden; left:0%; top:0%; align-items:center; justify-content:center; z-index:99999;" class="  col-lg-6 offset-lg-3 py-2 my-0 px-0 d-flex ">
           <div @click.stop="showUserOrgBoard = true"  style="position:absolute; height:auto; width:90%; bottom:45%; left:5%; overflow-y:hidden; overflow-x:hidden; " class="mx-auto pb-2">

             <v-card style="border-radius:10px;"
       height="auto"
      
       class="py-2 px-1 col-12 col-lg-8 offset-lg-2 " >

           
             <v-card tile :color="that.$route.params.orgId == 'user' ? '#b7dbe1': '#ffffff'" flat class="text-center py-2" style="border-radius:0px;" @click.stop="selectOrg('user')" >
        <span style="font-size:13px;  color:#173236; font-family:headerText;">You</span>
            </v-card>
             <v-card tile :color="that.$route.params.orgId == org.org_id ? '#b7dbe1': '#ffffff'" flat class="text-center py-2" @click.stop="selectOrg(org.org_id)" style="border-top:1px solid #c5c5c5;border-radius:0px;" v-for="(org,index) in organizations" :key="index">
        <span style="font-size:13px;  color:#173236; font-family:headerText;">{{org.name}}</span>
            </v-card>

            
            

             </v-card>

           </div>
         </div>

    
      
     </div> 

     
    
    
     
          
</div>
     
</template>
<script>


export default {
     data () {
      return {
       showmore:false,
       duels:this.$root.duels,
       botData:null,
       challengesData:null,
       ChannelTeamData:null,
       botDataLg:null,
       challengesDataLg:null,
       ChannelTeamDataLg:null,
       botScroller:1,
       challengeScroller:1,
       TeamScroller:1,
       botCountLength:0,
       challengeCountLength:0,
       channelCountLength:0,
       returnedChannel:[],
       returnedBot:[],
       returnedChallenges:[],
       organizations:[],
       that:this,
       showUserOrgBoard:false
      
         
      }
    },
     components: { 
    
      },
      
    mounted(){

      this.$root.checkIfUserIsLoggedIn('duels')
      this.$root.showTabs=true;
       this.$root.showHeader = true;
         this.$root.isBotLink = false;
       this.getPanelFullData();
      
    },
    methods:{
      createSpace:function(){
           this.$router.push({ path: '/panel/space/create' });
       },
      selectOrg: function(orgId){

         if(orgId == this.$route.params.orgId) return;

          this.botData = null 
       this.challengesData = null
       this.botDataLg = null;
       this.challengesDataLg = null;

       this.ChannelTeamDataLg = null;
       this.ChannelTeamData = null;

       this.$route.params.orgId = orgId;
      
       this.getPanelFullData();

       this.showUserOrgBoard = false;

       if(this.$router.currentRoute.path.indexOf('new') >= 0){
              this.$router.push({ path: '/panel/main/' + this.$root.orgIdRoot });
            }else{
                 this.$router.push({ path: '/panel/main/new/' + this.$root.orgIdRoot });
            }

       

      },
       showSpace:function(space){
         this.$root.pageloader = true;
        window.location = '/#/space/' + space.space_id + '/channel/content/user';
      },
      fetchUserOrg:function(){

         axios.get('get-user-organizations')
          .then(response => {
             
            
            

            if(response.status == 200){

            
               this.organizations = response.data;

               
             
            }
              
            
           
            
          })
          .catch(error => {
              console.log(error)
            
          })

      },
       gotToBot:function(bot){
              
              if(bot.user_id == this.$root.user_temp_id){
                 this.$root.selectedBot = bot;
          this.$router.push({ path: '/panel/bot/setup/' + bot.bot_id });
              }else{
                window.location = '/space#/bot-engine/' + bot.bot_id + '/user';
              }
          

       },
       circulateData: function(type,action){

           function paginate(array, page_size, page_number) {
             return array.slice((page_number - 1) * page_size, page_number * page_size);
           }
         
         if(type == 'bots'){
              
              if(this.botScroller >= this.botCountLength){
                 this.botScroller = 1;
              }else{

                 if(action == 'incr'){
               this.botScroller += 1;
              

             }else{
                  if( this.botScroller <= 0){
                this.botScroller = 1;
                 }else{
                   this.botScroller -= 1;
                 }
             }

              }
             
              this.botDataLg = [paginate(this.botData,4,this.botScroller)];

              

         }


          if(type == 'challenges'){
              
              if(this.challengeScroller >= this.challengeCountLength){
                 this.challengeScroller = 1;
              }else{

                 if(action == 'incr'){
               this.challengeScroller += 1;
              

             }else{
                 if( this.challengeScroller <= 0){
                this.challengeScroller = 1;
                 }else{
                   this.challengeScroller -= 1;
                 }
                
             }

              }
             

              this.challengesDataLg = [paginate(this.challengesData,4,this.challengeScroller)];

         }

         if(type == 'channel'){
              
              if(this.TeamScroller >= this.channelCountLength){
                 this.TeamScroller = 1;
              }else{

                 if(action == 'incr'){
               this.TeamScroller += 1;
              

             }else{
                 if( this.TeamScroller <= 0){
                this.TeamScroller = 1;
                 }else{
                   this.TeamScroller -= 1;
                 }
                
             }

              }
             

              this.ChannelTeamDataLg = [paginate(this.ChannelTeamData,4,this.TeamScroller)];

         }

        
       
       },
       
       handleData:function(data){

          this.botData = data.bots;
             this.challengesData = data.challenges;

              this.ChannelTeamData = data.channels.concat(data.teams);

                
               this.returnedChannel =  this.splitData(this.ChannelTeamData);

               this.channelCountLength =  this.returnedChannel[1];

               this.ChannelTeamDataLg = [this.returnedChannel[0][0]];
              
              this.returnedBot = this.splitData(data.bots);
              this.botDataLg = [this.returnedBot[0][0]];

              this.botCountLength = this.returnedBot[1];

             this.returnedChallenges = this.splitData(data.challenges);

             this.challengesDataLg = [this.returnedChallenges[0][0]];

              this.challengeCountLength = this.returnedChallenges[1];

       },
      splitData: function(data){
         if(data.length <= 4){
           return [[data],0];
         }else{

            function paginate(array, page_size, page_number) {
             return array.slice((page_number - 1) * page_size, page_number * page_size);
           }
            
            let arrayFullLength = data.length;

            let countLength = 0;

             let finalArray = [];

             if(arrayFullLength % 4 == 0){

                
                 countLength = arrayFullLength / 4;

                 let ArrayCounter = Array(countLength);

                 for (let index = 0; index < ArrayCounter.length; index++) {
                     let normalizedIndex = index + 1;
                     finalArray.push(paginate(data,4,normalizedIndex));
                 }

             }else{
                
                let remainder = arrayFullLength % 4;

                countLength = (arrayFullLength - remainder) / 4;

                  let ArrayCounter = Array(countLength);

                 for (let index = 0; index < ArrayCounter.length; index++) {
                     let normalizedIndex = index + 1;
                     finalArray.push(paginate(data,4,normalizedIndex));
                 }
               
                finalArray.push(paginate(data,remainder,ArrayCounter + 1));
               countLength += 1;
             }

             return [finalArray,countLength];
            

             
         }
      },
      shortenContent: function(content,limit){
             if(content != null){

                if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }

             }
             
        },
   getPanelFullData:function(){
          let orgId = this.$route.params.orgId

           

           this.$root.orgIdRoot = this.$route.params.orgId;

       axios.get('get-panel-data/'+ orgId)
          .then(response => {
             
            
            

            if(response.status == 200){

               this.fetchUserOrg();

             this.handleData(response.data);

             this.$root.selectedOrg = response.data.organization;
     
            }
              
            
           
            
          })
          .catch(error => {
              console.log(error)
            
          })

   }, 
    gotToBotCreate:function(){
        this.$router.push({ path: '/panel/bot/create' });
    },
    gotToChallengeCreate:function(){
        this.$router.push({ path: '/panel/challenge/create' });
    },
    showOrgList:function(){
        this.$router.push({ path: '/panel/organizations' });
    }
      
    }
}
</script>
<style scoped>
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
  .statusnew{
    font-size:10px;
      color:#173236;
     border:2px solid #dbedf0; 
     border-radius:9px; 
     padding: 2px 4px;
     background:#dbedf0;
     font-weight: bolder;
 }
</style>