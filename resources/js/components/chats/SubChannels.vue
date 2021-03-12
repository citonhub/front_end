<template>
  <div style="background:transparent;">
   <div class="col-12 py-1 my-0 ">
    <div class="row">
        <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 py-0 px-1">
              <v-btn icon @click.stop="close">
                      <v-icon>mdi mdi-close</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-0 px-0 text-center">
             <span style="font-size:14px; font-family:MediumFont;">Sub Channels</span>
          </div>
              
              <div class="col-2 py-0 mr-1 px-1 text-right">
                 <v-btn icon @click.stop="addSubChannel" v-if="checkIfisOwner()"  >
                      <v-icon>las la-plus-circle</v-icon>
                    </v-btn>
              </div>
          
        </div>


        <div class="col-12 ">

          <div class="col-12 text-center" v-if="this.$root.subSpaces == null">

            <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>

          </div>

          <template v-if="this.$root.subSpaces != null">


           <div class="col-12 d-flex flex-column text-center" v-if="this.$root.subSpaces.length == 0">

           <div style="font-size:13px; color:gray;"> No sub channels yet</div>  

            <div class="mt-2">
              <v-btn small rounded color="#3C87CD" v-if="checkIfisOwner()"  @click.stop="addSubChannel"  style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
            <span style="color:white;text-transform:none;">Add</span> 
           </v-btn>
            </div>
               
              

          </div>

            <div class="row px-2" v-if="this.$root.subSpaces.length > 0">
            <v-card flat tile class="col-12 py-2 px-1 messageBox" style="border-bottom:1px solid #cccccc;"  @click.stop="gotoGeneral"
             v-if="that.$root.selectedSpace.type == 'SubSpace'">
              <div class="row py-0 my-0">
                  <div class="col-2 py-0 my-0">
                    <v-icon >mdi-google-circles-extended mdi-18px</v-icon>
                     
                  </div>
                  <div class="col-8 py-0 my-0 text-center">
                       <span  style="font-size:13px; color:#1e4148; font-family:MediumFont;"> General</span>
                  </div>
                  <div class="py-0 my-0 d-flex col-2" style="align-items:center;" >
                        
                    </div>
              </div>
           </v-card>

            <v-card flat tile class="col-12 py-2 px-1 messageBox" style="border-bottom:1px solid #cccccc;" v-for="(space,index) in this.$root.subSpaces" @click.stop="selectSubSpace(space)"
            :key="index">
              <div class="row py-0 my-0">
                  <div class="col-2 py-0 my-0">
                    <v-icon style="font-size:20px;" v-if="space.type == 'Public'" >mdi-pound</v-icon>
                     
                   <v-icon style="font-size:20px;" v-if="space.type == 'Private'" >mdi-lock</v-icon>
                     
                  </div>
                  <div class="col-8 py-0 my-0 text-center">
                       <span  style="font-size:13px; color:#1e4148; font-family:MediumFont;"> {{space.space_info.name}}</span>
                  </div>
                  <div class="py-0 my-0 d-flex col-2" style="align-items:center;" >
                          <span  v-if="space.unread > 0" class="messagesBadges d-flex ml-lg-0 ml-0" >{{space.unread}}</span>
                    </div>
              </div>
           </v-card>

            </div>

          </template>


            

        </div>

    </div>
   </div>

  </div>
   
</template>
<script>
export default {
    data(){
        return{
          
         that:this,
         loadingSubSpace:false,
        subSpaces:null,
       
        }
    },
   mounted(){
     this.$root.componentIsLoading = false;
     this.fetchSubSpaces();
    
   },
  methods:{
     gotoGeneral: function(){

          let spaceId = this.$root.selectedSpace.general_spaceId;

               this.$root.chatComponent.chatInnerSideBar= false;
               this.$root.chatComponent.chatIsOpen = false;
                this.$root.chatComponent.innerSideBarContent = '';

            this.$router.push({ path: '/channels/' + spaceId +'/content' });
              
              this.$root.chatComponent.fetchMessages(spaceId);
              this.$root.chatComponent.messageIsDone = false;
           this.$root.chatComponent.chatIsOpen = true;
          

        },
        selectSubSpace: function(subSpace){

               this.$root.chatComponent.chatInnerSideBar= false;
             
                this.$root.chatComponent.innerSideBarContent = '';


                  let storedMsg = this.$root.getLocalStore('full_space_' + subSpace.space_id + this.$root.username);


                    storedMsg.then((result)=>{


                      

                        if(result != null){

                          

                        this.$router.push({ path: '/channels/' + subSpace.space_id +'/content' });
              
              this.$root.chatComponent.fetchMessages(subSpace.space_id);
              this.$root.chatComponent.messageIsDone = false;
           this.$root.chatComponent.chatIsOpen = true;


                        }else{
                      
                    
                          
                            this.$root.fromSupportDirectlink = false;

                            this.$root.showProcessorFromChat = false;
                          
                           this.$router.push({ path: '/channels/' + subSpace.space_id  +'/payment' });
                             

                         
                        }
                    })


           

            
           
              
          

        },
     fetchSubSpaces: function(){
           
           this.loadingSubSpace  = true;

             let storedSubChat = this.$root.getLocalStore('sub_channels_' + this.$root.selectedSpace.general_spaceId  + this.$root.username);

            storedSubChat.then((result)=>{
                
                 if(result != null ){



                     if(this.$root.subSpaces.length == 0){

                        let finalResult = JSON.parse(result);
                     
                      finalResult = finalResult.sub_channels;
                     if(this.checkIfisOwner()){

               this.$root.subSpaces =  finalResult;



           }else{

             this.$root.subSpaces = finalResult.filter((space)=>{

               return space.type == 'Public' || (space.type == 'Private' && space.is_member == true);

             });
           }

                     }

                   

                    this.checkForUnread();

                        this.sortList();
 
                  this.loadingSubSpace = false;

              this.checkForNewSubSpace();

                 }else{
            
           
            axios.get( '/fetch-sub-spaces-' + this.$root.selectedSpace.general_spaceId + '-' + this.$root.userDeviceId )
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('sub_channels_' + this.$root.selectedSpace.general_spaceId  + this.$root.username,response.data);
        
     
                   let finalResult = response.data.sub_channels;
        if(this.checkIfisOwner()){

               this.$root.subSpaces =  finalResult;

           }else{
            
             this.$root.subSpaces = finalResult.filter((space)=>{

               return space.type == 'Public' || (space.type == 'Private' && space.is_member == true);

             });
           }

             this.sortList();
     
         this.loadingSubSpace = false;

            
     }
       
     
     })
     .catch(error => {

        this.loadingSubSpace = false;
    
     }) 

                 }
            })

         
       
        },
        checkForNewSubSpace:function(){

               axios.get( '/fetch-sub-spaces-' + this.$root.selectedSpace.general_spaceId + '-' + this.$root.userDeviceId )
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('sub_channels_' + this.$root.selectedSpace.general_spaceId  + this.$root.username,response.data);
        
            
                   let finalResult = response.data.sub_channels;

                    let newsubSpace = finalResult.forEach((data)=>{

                       let subspaceData =  this.$root.subSpaces.filter((eachSubSpace)=>{
                      return  eachSubSpace.space_id == data.space_id
                       });

                      if(subspaceData.length > 0){

                         return false

                      }else{
                       this.$root.subSpaces.push(data);
                      }

                    });

           
              
               
     
              this.sortList();

               this.checkForUnread();
     
     }
       
     
     })
     .catch(error => {

      
    
     }) 


        },
        checkForUnread:function(){

            this.$root.subSpaces.map((space)=>{

               let unreadStoredMsg = this.$root.getLocalStore('unread_messages_' + space.space_id +  this.$root.username);
  
          unreadStoredMsg.then((result)=>{
  
            if(result != null){
  
              let finalResultUnread = JSON.parse(result);
          
                 

              space.unread = finalResultUnread.length;
  
            }else{
               space.unread = 0;
            }

          });

            })

        },
        sortList:function(){
                  this.$root.sortArray(this.$root.subSpaces);
        },
        checkIfisOwner: function(){

           let userMemberData = this.$root.selectedSpaceMembers.filter((members)=>{
   
             return members.user_id == this.$root.user_temp_id;
           });

           if(userMemberData.length != 0){

             return userMemberData[0].is_admin;

           }else{
              return false
           }
         
       },
    close:function(){
             window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        this.$root.chatComponent.chatInnerSideBar = false;
   },  
   addSubChannel:function(){

       this.$root.componentIsLoading = true;

       this.$root.chatComponent.innerSideBarContent = '';
           
            this.$root.chatComponent.innerSideBarContent = 'add_sub_channel';
                
           
           this.$router.push({ path: '/channels/space_id/add_sub_channel' });

     
   }
  }
}
</script>
<style scoped>
.messagesBadges{
    
    color: #ffffff;
    background: #5cb85c;
    font-size: 11px;
    font-family: BodyFont;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
    height:20px;
    width:20px;
    border-radius:50%;
}
.messageBox:hover{
    background:whitesmoke;
    cursor: pointer;
}
</style>