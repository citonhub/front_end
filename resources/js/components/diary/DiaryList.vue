<template>
<div>
 
    <div class="col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top" style="position:sticky; background:#F5F5FB; border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5>Diary</h5>
        </div>
         <div class="col-6  py-0 my-0 text-right">
           <v-btn small rounded color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
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

            <div @click="getDiaryContent(diary)" class="col-lg-4 col-md-6 px-2 mb-1 py-1 pt-0 mt-md-2" v-for="diary in Diaries" :key="diary.id">
          
          <v-card class="py-2 px-1"  style="border-radius:10px;" >
            
            <div class="col-12 py-0 my-0 d-flex flex-row">
                 <div     class="mr-2 py-2"> 

                   <div
                    style="border-radius:50%;height:50px;width:50px;background-color:#c5c5c5;background-image:url(/imgs/background1.jpg);background-size: cover;
                    background-repeat: no-repeat; ">
                    </div> 

                 </div>

                  <div class="text-left d-flex  py-1" style="overflow-x:hidden; width:100%;align-items:center;">
               <div style="font-size:13px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1">{{diary.name}}</div>
              
                </div>

                 <div class=" d-flex flex-row-reverse ml-1" style="overflow-x:hidden;align-items:center;width:100%;">

                   <div class="d-flex flex-column" style="align-items:center; justify-content:center;">

                   <div> <v-icon style="font-size:22px;" class="pr-1">las la-user-friends</v-icon></div>

                     <div style="font-size:12px;font-family:BodyFont;" > {{diary.users}} </div>

                   </div>
                  
                </div>
            </div>
          </v-card>

          

          </div>

           

         
          

      
        
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

      ]
      }
     
    },

     methods:{
        createDiary(){
          
          this.$router.push({ path:'/board/diary/create-diary'})
        },

        getDiaryContent(diary){
          axios.get('/get-diary-data-'+diary.bot_id ).then(
            response=>{
              if(response.status==200){
this.$router.push({path:'/board/diary/board/' + diary.bot_id+ '/content'})
              }
            }
          )
        }
      },
      mounted(){
     this.$root.showTopBar = true;

     axios.get('/get-user-diary')
     .then(
       response=>{
         if(response.status==200){
           this.Diaries=response.data.user_diary
           console.log(this.Diaries)
         }
       }
     )
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
