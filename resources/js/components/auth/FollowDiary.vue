<template>
      <v-card class="col-lg-5  py-0 col-md-8 px-0" style="height:90%;overflow-y:hidden;overflow-x:hidden;" >

      <div class="text-center col-12 py-1 py-md-2 pt-2 fixed-top" style="position:sticky;background:whitesmoke;">

           <h5 class="text-center d-md-block d-none">Follow diaries of your interest</h5>

            <h6 class=" text-center d-block d-md-none">Follow diaries of your interest</h6>
          
      </div>

       <template v-if="!loading">

            <div style="position:absolute;width:100%; height:96%;overflow-y:auto;overflow-x:hidden; padding-bottom:100px;" class="scroller">

            <div   v-for="(diary,index) in this.diaries" :key="index" class="col-12 px-1 pl-2 d-flex flex-row py-1" style="align-items:center; height:auto; justify-content:center;">
    <div  class=" mr-2 py-3" 
                     :style="imageStyle(45,diary)"></div> 

                     <div class="px-0 py-3" style="width:85%;border-bottom:1px solid #e6e6e6;">

                     <div class="d-flex flex-row flex-wrap" style="align-items:center;">
                                   
                                       <div class="px-0 py-0 my-0 col-12" style="white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">
                                               <span  style="font-size:14px; font-family:BodyFont;">{{diary.name}}</span>
                                           
                                       </div>

                                         <div class=" d-flex flex-row " style="align-items:center;width:100%;">
                                   
                                       <div class=" px-0 py-0 my-0 pr-1  " style="width:100%;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;font-size:13px; color:grey; font-family:BodyFont;">
                                            
                                               <span>{{ diary.description }}</span>
                                           
                                             
                                       </div>
                                        <div class=" px-1 py-0  ml-auto " >
                                          
                                           <v-btn   v-if="diary.following == true" x-small :disabled="true"   rounded style="text-transform:capitalize;font-family:BodyFont;font-size:12px;" class="mx-2 d-inline-block" >following</v-btn>
                                           
                                           

                                                 <v-btn v-else  x-small outlined @click="followDiary(diary)"  color="#3C87CD" rounded style="text-transform:capitalize;font-family:BodyFont;font-size:12px;" class="mx-2 d-inline-block" >follow</v-btn>

                                          
                                              
                                       </div>
                                    
                                 </div> 
                                       
                                   
                                 </div>

                     </div>
      </div>
   

   

      </div>

       </template>

   <template v-else> 

         <div class="d-flex"  style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

                         <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>

                               </div>

   </template>
     

    
   

   
 

   <div class="text-center py-1 py-md-2 col-12 fixed-bottom" style="position:absolute;background:whitesmoke;">

        <div class="row">

            

            

            <div class="col-12 py-1 text-right">
                 <v-btn small text @click="skip()"  style="text-transform:normal;font-family:BodyFont;font-size:11px;"  class="mx-2 d-inline-block" >Skip</v-btn>

                  <v-btn small @click="addDairies" :loading="loadingButton" color="#3C87CD" style="color:white;text-transform:normal;font-family:BodyFont;font-size:11px;" :disabled="selectedDiaries.length < 3" class="mx-2 d-inline-block" >Done</v-btn>

            </div>

        </div>
   </div>
             

    

    </v-card>
</template>

<script>
export default {
    mounted(){
   this.getInterests()
   this.$root.followDiariesLoaded = true;
    },
    data(){

        return{ 
            diaries:[],
            that:this,
            loading:false,
            selectedDiaries:[],
            loadingButton:false
            }
       
    },
    methods:{
        openChatList(){
            this.$router.push({
path:'/channels'
            })
        },
        skip:function(){
            this.$root.chatComponent.suggestionsContent = 'notification'; 
          this.updateUserProfile()
        },
        canProceed:function(){

            if(this.diaries.length == 0){

                 return true

            }

            let followedDiary = this.diaries.filter((diary)=>{
                  return diary.following == true
            });

            if(followedDiary.length >= 3){
                  return false
            }else{
                return true
            }

        },
        updateUserProfile:function(){

             this.$root.authProfile.suggested_diary = true;

              axios.post('/update-diary-suggestions').then(
        response =>{
        if(response.status==200){
     
    
     

       }else{
       
       
         }
        }
      )
              
        },
        addDairies: function(){

             this.updateUserProfile();
             
             this.loadingButton = true;
             this.selectedDiaries.forEach(diary => {

                   setTimeout(() => {
                         this.checkDiary(diary);
                   }, 1000);
                  
                 
             });

             this.$root.chatComponent.suggestionsContent = 'notification';
       
        },
        followDiary:function(diary){

              diary.following = true
              this.selectedDiaries.push(diary.bot_id);

               this.diaries.map((eachdiary)=>{
                   if(diary.bot_id == eachdiary.bot_id){

                       eachdiary.following = true;

                   }
               });
        },
         checkDiary:function(botId){

      
       axios.get('/check-diary/'+  botId)
          .then(response => {
             
            
            

            if(response.status == 200){
               

            
              
              let space = response.data.space;

                let storedChat = this.$root.getLocalStore('user_chat_list'+ this.$root.username);

                   storedChat.then((result)=>{

                       if(result != null ){

                           

                          

                    let finalResult = JSON.parse(result);

                        let userSpace = finalResult.pet_spaces.filter((space)=>{
                          return space.space_id == response.data.space.space_id
                        })

                        if(userSpace.length > 0){


                        }else{

                          finalResult.pet_spaces.unshift(response.data.space);

                          this.$root.LocalStore('user_chat_list' + this.$root.username,finalResult);

                     let fullList = finalResult.channels.concat(finalResult.direct_messages, finalResult.pet_spaces);

                     
                   this.$root.ChatList = fullList;

                     this.$root.sortChatList();

                        }

                       
                      
                   
                      

                 }

                   } )

              
                
             
            }
              
            
           
            
          })
          .catch(error => {
               this.$root.chatComponent.showAlert('Oops!','Something went wrong, please try again','error')
             
            
          })
    
    },
        imageStyle:function(dimension,data){
      

      if(data.background_color == null){
        let styleString = "border-radius:10px;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
        
              styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
        
         
         return styleString;
      }else{
        let styleString = "border-radius:10px;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         let imgLink = data.image_name + '.' + data.image_extension;
         
              styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/thumbnails/'  + imgLink  +  ');';
        
         
          return styleString;
      }

      

    },
      getInterests(){
          this.loading = true;
      axios.post('/save-user-interest').then(
        response =>{
        if(response.status==200){
     
      this.diaries = response.data.suggested_diaries
         
         this.diaries.map((diary)=>{
          diary.following = false;
         })

      this.diaries.sort(function(a, b){return b.followers - a.followers})

       this.loading = false;
     

       }else{
       
           this.$root.chatComponent.showAlert('Oops!','Something went wrong, please try again','error')

         }
        }
      )
    },
      
    }
}
</script>
<style scoped>
.scroller::-webkit-scrollbar {
  width: 5px;
}


.scroller::-webkit-scrollbar-thumb {
  background-color: #3C87CD;
  outline: 1px solid #3C87CD;
}
</style>