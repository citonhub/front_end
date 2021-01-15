<template>
<div>
 
    <div class="col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top" style="position:sticky; background:#F5F5FB; z-index:999999999999; border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5>Diary</h5>
        </div>
         <div class="col-6  py-0 my-0 text-right">
           <v-btn small  @click="createDiary" rounded color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
             <v-icon     style="font-size:20px;">las la-plus</v-icon> <span style="color:white;text-transform:none;">Create a diary</span> 
           </v-btn>
        </div>
      </div>
   </div>

  <!-- fab for smaller screen -->

    <v-btn @click="createDiary"  fab color="#3C87CD"  class="d-md-none d-inline-block" style="z-index:99999999;  position:fixed;  bottom:3%; right:3%; ">

        <v-icon style="font-size:24px; color:white;">las la-plus</v-icon>

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



           <div class="col-lg-4 col-md-6 px-2 mb-1 py-1 pt-0 mt-md-2" v-for="diary in this.$root.diarySearchList" :key="diary.id+ 'search'">
          
          <v-card @click="getDiaryContent(diary)"  class="py-2 px-1"  style="border-radius:7px;" >
            
            <div class="col-12 py-0 my-0 d-flex flex-row">
                 <div     class="mr-2 py-2"> 

                   <div :style="imageStyle(45,diary)"
                   >
                    </div> 

                 </div>

                  <div class="text-left d-flex  py-1" style="overflow-x:hidden; width:100%;align-items:center;">
               <div style="font-size:13px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1">{{diary.name}}</div>
              
                </div>

                 <div class=" d-flex flex-row-reverse ml-1" style="overflow-x:hidden;align-items:center;width:100%;">

                   <div class="d-flex flex-row" style="align-items:center; justify-content:center;">

                   <div> <v-icon style="font-size:22px;" class="pr-1">las la-user-friends</v-icon></div>

                     <div style="font-size:12px;font-family:BodyFont;" > {{diary.users}} </div>

                   </div>
                  
                </div>
            </div>
          </v-card>

          

          </div>




        </template>


        <!-- ends -->

         <template v-else>

              <template v-if="loadingDiary">

             <div class="col-12 mt-4 text-center">

               <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

             </div>

       </template>

       <template v-else>

            <div class="col-lg-4 col-md-6 px-2 mb-1 py-1 pt-0 mt-md-2" v-for="diary in this.$root.diaryList" :key="diary.id">
          
          <v-card @click="getDiaryContent(diary)"  class="py-2 px-1"  style="border-radius:7px;" >
            
            <div class="col-12 py-0 my-0 d-flex flex-row">
                 <div     class="mr-2 py-2"> 

                   <div :style="imageStyle(45,diary)"
                   >
                    </div> 

                 </div>

                  <div class="text-left d-flex  py-1" style="overflow-x:hidden; width:100%;align-items:center;">
               <div style="font-size:13px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1">{{diary.name}}</div>
              
                </div>

                 <div class=" d-flex flex-row-reverse ml-1" style="overflow-x:hidden;align-items:center;width:100%;">

                   <div class="d-flex flex-row" style="align-items:center; justify-content:center;">

                   <div> <v-icon style="font-size:22px;" class="pr-1">las la-user-friends</v-icon></div>

                     <div style="font-size:12px;font-family:BodyFont;" > {{diary.users}} </div>

                   </div>
                  
                </div>
            </div>
          </v-card>

          

          </div>

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

    this.fetchUserDiary();
    },

     methods:{
        createDiary(){
          
          this.$router.push({ path:'/board/diary/create-diary'})
        },

        getDiaryContent(diary){
           this.$router.push({path:'/board/diary/board/' + diary.bot_id+ '/content'})
        },
        imageStyle: function(size,data){

         if(data.background_color == null){
        let styleString = "height:" + size + "px;width:" + size +"px;background-size:cover;border-radius:50%;background-repeat: no-repeat; ";
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
         let styleString = "height:" + size + "px;width:" + size +"px;background-size:cover;border-radius:50%;background-repeat: no-repeat; ";
         let imgLink = data.image_name + '.' + data.image_extension;
        
        styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/'  + imgLink  +  ');';
         
          return styleString;

      }
      },
      checkForNewDiary:function(){

          axios.get( '/get-user-diary')
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_diary_' + this.$root.username,response.data.user_diary);
        
     
         this.$root.diaryList = response.data.user_diary;
      
     
     
     }
       
     
     })
     .catch(error => {

       
     }) 


      },
        fetchUserDiary: function(){

           this.loadingDiary  = true;

             let storedDiary = this.$root.getLocalStore('user_diary_'  + this.$root.username);

            storedDiary.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      this.$root.diaryList = finalResult;
                    
                   
 
                 this.loadingDiary = false;

              this.checkForNewDiary();

                 }else{
            
           
            axios.get( '/get-user-diary')
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_diary_' + this.$root.username,response.data.user_diary);
        
     
         this.$root.diaryList = response.data.user_diary;
      
     
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
