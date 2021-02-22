<template>
<div>
 
    <div class="col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top" style="position:sticky; background:#F5F5FB; z-index:999999999999; border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5>Discover diaries</h5>
        </div>
         <div class="col-6  py-0 my-0 text-right">
           <v-btn small    @click="goToDiaryList()" rounded color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
            <span style="color:white;text-transform:none;">My diaries</span> 
           </v-btn>
        </div>
      </div>
   </div>

  <!-- fab for smaller screen -->

    <v-btn medium  @click="goToDiaryList()" rounded  color="#3C87CD"  class="d-md-none d-inline-block" style="z-index:99999999;  position:fixed;  bottom:3%; right:3%; ">

       <span class="mr-1" style="font-size:12px;color:white;text-transform:none;font-family:MediumFont;">My diaries</span> 

     </v-btn>

<!-- ends -->
    <!--pets list view -->

  <div class="col-lg-10 offset-lg-1 py-0 pb-2 px-2 ">

        <div class="row ">

            <!-- spacer -->
         
           <div class="col-12 mt-5 mt-md-0 d-md-none d-block"> 

           </div>
     <!-- ends -->

      <template v-if="this.$root.TopBarComponentBoard">


        <!-- search area  -->

        <template  v-if="this.$root.TopBarComponentBoard.searchContent.length > 0">

            <template v-if="loadingSearchDairy">

             <div class="col-12 mt-4 text-center">

               <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

             </div>

       </template>
   

     <template v-else>

           <div class="col-lg-4 col-md-6 px-2 mb-1 py-1 pt-0 mt-md-2" v-for="diary in this.$root.diaryBankSearchList" :key="diary.id+ 'search'">
          
       <v-card  class="py-0 px-2 pl-1"  style="border-radius:7px;" >
            
            <div class=" py-0 my-0 d-flex flex-row" style="width:100%;align-items:center; height:auto; justify-content:center;">
                 <div  class=" mr-2 py-3" 
                     :style="imageStyle(45,diary)"></div> 

                     <div class="px-0 py-3" style="width:85%;">

                     <div class="d-flex flex-row flex-wrap" style="align-items:center;">
                                   
                                       <div class="px-0 py-0 my-0 col-12 d-flex flex-row" style="align-items:center;">
                                               <div  style="font-size:14px; font-family:BodyFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">{{diary.name}}</div>

                                               <div class="d-flex flex-row ml-auto" style="align-items:center;">
                                                
                                                <span style="font-size:10px;" class="mr-1">
                                                  {{diary.views}}
                                                </span>
                                                   <v-icon style="font-size:19px;">las la-eye</v-icon>

                                                   <span style="font-size:10px;"  class="mx-1">
                                                   {{diary.followers}}
                                                </span>

                                                    <v-icon style="font-size:19px;">las la-user-friends</v-icon>

                                               </div>
                                           
                                       </div>

                                         <div class=" d-flex flex-row " style="align-items:center;width:100%;">
                                   
                                       <div class=" px-0 py-0 my-0 pr-1  " style="width:100%;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;font-size:13px; color:grey; font-family:BodyFont;">
                                            
                                               <span>{{ diary.description }}</span>
                                           
                                             
                                       </div>
                                        <div class=" px-1 py-1  ml-auto " >
                                          
                                            <v-btn v-if="diary.following == true" @click="viewDiary(diary)" x-small outlined  color="#3C87CD" rounded style="text-transform:capitalize;font-family:BodyFont;font-size:12px;" class="ml-1 d-inline-block" >following</v-btn>

                                                 <v-btn v-else @click="viewDiary(diary)" x-small outlined  color="#3C87CD" rounded style="text-transform:capitalize;font-family:BodyFont;font-size:12px;" class="ml-1 d-inline-block" >follow</v-btn>

                                          
                                              
                                       </div>
                                    
                                 </div> 
                                       
                                   
                                 </div>

                     </div>

                
            </div>
          </v-card>

          
          

          </div>


     </template>

         



        </template>


        <!-- ends -->

         <template v-else>

              <template v-if="loadingDiary">

             <div class="col-12 mt-4 text-center">

               <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

             </div>

       </template>

       <template v-else>

          <template v-if="this.$root.diaryBankList.length == 0">

              
       <div class="col-md-6 offset-md-3 px-md-4 py-1 px-2 mt-3 mt-md-5 text-center d-flex flex-column ">

     


         <div class="mb-3 px-3" style="font-size:13px;color:black;font-family:BodyFont;">
                    Document <span style="font-family:MediumFont;">how you learn </span> , <span style="font-family:MediumFont;">what you learn</span> and <span style="font-family:MediumFont;">share them with others</span>. You can help others improve, by sharing what you know!
                    </div>

                     <div>
                          <v-btn small color="#3C87CD" style="color:white;text-transform:none;font-family:BodyFont;font-size:11px;" @click="createDiary" class="mx-2 d-inline-block" rounded>Create a diary</v-btn>
                     </div>


    

    </div>

          </template>

          <template v-else>

              <div class="col-lg-4 col-md-6 px-2 mb-1 py-1 pt-0 mt-md-2" v-for="diary in this.$root.diaryBankList" :key="diary.id">
          
          <v-card  class="py-0 px-2 pl-1"  style="border-radius:7px;" >
            
            <div class=" py-0 my-0 d-flex flex-row" style="width:100%;align-items:center; height:auto; justify-content:center;">
                 <div  class=" mr-2 py-3" 
                     :style="imageStyle(45,diary)"></div> 

                     <div class="px-0 py-3" style="width:85%;">

                     <div class="d-flex flex-row flex-wrap" style="align-items:center;">
                                   
                                       <div class="px-0 py-0 my-0 col-12 d-flex flex-row" style="align-items:center;">
                                               <div  style="font-size:14px; font-family:BodyFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">{{diary.name}}</div>

                                               <div class="d-flex flex-row ml-auto" style="align-items:center;">
                                                
                                                <span style="font-size:10px;" class="mr-1">
                                                  {{diary.views}}
                                                </span>
                                                   <v-icon style="font-size:19px;">las la-eye</v-icon>

                                                   <span style="font-size:10px;"  class="mx-1">
                                                   {{diary.followers}}
                                                </span>

                                                    <v-icon style="font-size:19px;">las la-user-friends</v-icon>

                                               </div>
                                           
                                       </div>

                                         <div class=" d-flex flex-row " style="align-items:center;width:100%;">
                                   
                                       <div class=" px-0 py-0 my-0 pr-1  " style="width:100%;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;font-size:13px; color:grey; font-family:BodyFont;">
                                            
                                               <span>{{ diary.description }}</span>
                                           
                                             
                                       </div>
                                        <div class=" px-1 py-1  ml-auto " >
                                          
                                          
                                           
                                               <v-btn v-if="diary.following == true" @click="viewDiary(diary)" x-small outlined  color="#3C87CD" rounded style="text-transform:capitalize;font-family:BodyFont;font-size:12px;" class="ml-1 d-inline-block" >following</v-btn>

                                                 <v-btn v-else @click="viewDiary(diary)" x-small outlined  color="#3C87CD" rounded style="text-transform:capitalize;font-family:BodyFont;font-size:12px;" class="ml-1 d-inline-block" >follow</v-btn>

                                          
                                              
                                       </div>
                                    
                                 </div> 
                                       
                                   
                                 </div>

                     </div>

                
            </div>
          </v-card>

          

          </div>

          </template>

          

       </template>

         </template>


       

         


      </template>

     
          <!-- spacer -->

          <div class="col-12 py-5 my-5">

          </div>

          <!-- ends -->

        
      </div>

  </div>

 <!-- ends -->

</div>
  
</template>

<script>
 export default {
    data () {
      return {
      Diaries:[

      ],
      loadingDiary:false,
      loadingSearchDairy:false
      }
     
    },
     mounted(){
     this.$root.showTopBar = true;
      this.$root.diaryBankComponent = this;
    this.fetchDiaryBank();
    },

     methods:{
         goToDiaryList:function(){
         this.$router.push({ path:'/board/diary/list'})
         },
       
       viewDiary:function(diary){
      
      if(this.$root.sideBarComponent){

        this.$root.sideBarComponent.selectedTab = 'channels';

      }

       this.$root.comingFromDiaryBank = true;
        this.$root.autoOpenDiary = true;
        this.$root.tempDiaryId = diary.bot_id;
         this.$router.push({ path: '/channels' });

     },
        getDiaryContent(diary){
           this.$router.push({path:'/board/diary/board/' + diary.bot_id+ '/content'})
        },
        imageStyle: function(size,data){

         if(data.background_color == null){
        let styleString = "height:" + size + "px;width:" + size +"px;background-size:cover;border-radius:3px;background-repeat: no-repeat;border:1px solid #c5c5c5; ";
         if(data.image_name == null || data.image_name == '0'){
              styleString += 'background-color:whitesmoke; background-image:url(imgs/background1.jpg);';
         }else{
            if(data.image_name == 'default_1'){

               styleString += 'background-color:whitesmoke; background-image:url(/imgs/background3.jpg);';

            }

            if(data.image_name == 'default_2'){

               styleString += 'background-color:whitesmoke; background-image:url(/imgs/background1.jpg);';

            }

              if(data.image_name == 'default_3'){

               styleString += 'background-color:whitesmoke; background-image:url(/imgs/imgproj2.jpeg);';

            }
          
         }
         
         return styleString;
       }else{
         let styleString = "height:" + size + "px;width:" + size +"px;background-size:cover;border-radius:3px;background-repeat: no-repeat; border:1px solid #c5c5c5;";
         let imgLink = data.image_name + '.' + data.image_extension;
        
        styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/thumbnails/'  + imgLink  +  ');';
         
          return styleString;

      }
      },
      checkForNewDiary:function(){

          axios.get( '/get-diary-bank')
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_diary_bank_' + this.$root.username,response.data.diaries);
        
     
         this.$root.diaryBankList = response.data.diaries;
           this.$root.diaryBankList.sort(function(a, b){return b.followers - a.followers});
      
     
     
     }
       
     
     })
     .catch(error => {

       
     }) 


      },
        fetchDiaryBank: function(){

           this.loadingDiary  = true;

             let storedDiary = this.$root.getLocalStore('user_diary_bank_'  + this.$root.username);

            storedDiary.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      this.$root.diaryBankList = finalResult;

                        this.$root.diaryBankList.sort(function(a, b){return b.followers - a.followers});
                    
                   
 
                 this.loadingDiary = false;

              this.checkForNewDiary();

                 }else{
            
           
            axios.get( '/get-diary-bank')
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_diary_bank_' + this.$root.username,response.data.diaries);
        
     
         this.$root.diaryBankList = response.data.diaries;
         
         this.$root.diaryBankList.sort(function(a, b){return b.followers - a.followers});
     
         this.loadingDiary = false;
       
     }
       
     
     })
     .catch(error => {

        this.loadingDiary = false;
    
     }) 

                 }
            })


        
        }
      },
     
  }
</script>
<style scoped>


 .challengeBox{
   background:#ffffff !important;
   cursor: pointer;
 }

 .challengeBox:hover{
   background:transparent !important;
   cursor: pointer;
 }
  
</style>
