<template>
<div>

   <!-- spacer -->
    <div class="my-lg-2 mt-md-1 mb-md-2 mt-4 mb-4 col-12" style="background:#F5F5FB;">

    </div>
  <!-- ends -->
 
    <div class="col-lg-10 offset-lg-1 py-1 mb-0  pt-3 px-2 d-md-block d-none fixed-top" style="position:sticky;top:-1%; background:#F5F5FB; border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5>Challenges</h5>
        </div>
         <div class="col-6  py-0 my-0 text-right">
           <v-btn @click="createChallenge" small rounded color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
             <v-icon style="font-size:20px;">las la-plus</v-icon> <span style="color:white;text-transform:none;">Create a challenge</span> 
           </v-btn>
        </div>
      </div>
   </div>

   <!-- fab for smaller screen -->

    <v-btn  @click="createChallenge"   fab color="#3C87CD"  class="d-lg-none d-inline-block" style="z-index:99999999;  position:fixed;  bottom:3%; right:3%; ">

        <v-icon style="font-size:24px; color:white;">las la-plus</v-icon>

     </v-btn>

<!-- ends -->

    <!-- project list view -->

  <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1  pb-1 pt-0   ">

        <div class="row text-center px-1 mt-2">

              <v-card @click="startChallenge(box)" class="col-12 py-0 px-md-0 px-1 d-flex mb-2 flex-row " style="border-radius:10px;" v-for="(box,index) in challenges" :key="index">
                 
                 <div     class="mx-2 py-3 d-md-block d-none"> 

                   <div
                    style="border-radius:10px;height:100%;width:70px;background-color:#c5c5c5;background-image:url(/imgs/background1.jpg);background-size: cover;
                    background-repeat: no-repeat; ">
                    </div> 

                 </div>

                  <div     class="mx-1 py-2 d-block d-md-none"> 

                   <div
                    style="border-radius:10px;height:50px;width:50px;background-color:#c5c5c5;background-image:url(/imgs/background1.jpg);background-size: cover;
                    background-repeat: no-repeat; ">
                    </div> 

                 </div>
        
        <div class="text-left d-flex flex-column py-md-3 py-2" style="overflow-x:hidden; width:100%;">
          <!-- large screen -->
          <div style="font-size:14px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1 d-md-block d-none">{{box.title}}</div>
          <div style="font-size:12px;font-family:BodyFont; white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1  d-md-block d-none">{{box.description}}</div>
          <!-- ends -->
          <!-- smaller screen -->
               <div style="font-size:13px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1  d-md-none d-block">{{box.title}}</div>
          <div style="font-size:11px;font-family:BodyFont; white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1  d-md-none d-block">{{box.description}}</div>
          <!-- ends -->
          <div class="d-flex flex-row pr-2" style="align-items:center;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">
             <div style="font-size:12px;font-family:BodyFont;">{{box.languages}} </div> <v-icon class="mx-1" style="font-size:12px;">mdi-record</v-icon> 
             <div style="font-size:12px;font-family:BodyFont;" v-if="pending">Pending</div> <v-icon class="mx-1" style="font-size:12px;">mdi-record</v-icon> 
             <div style="font-size:12px;font-family:BodyFont;" class="d-md-block d-none">2331 Participants </div>
             <div style="font-size:12px;font-family:BodyFont;" class="d-md-none d-block"> <v-icon style="font-size:17px;">las la-user-friends</v-icon> 2331 </div>
        
          </div>

        </div>
               
              <div>

         </div>

              </v-card>

     
        
      </div>

  </div>

 <!-- ends -->

</div>
  
</template>

<script>

import moment from 'moment'
moment().format()

 export default {
    data () {
      return {
       challenges:[],
       pending:true,
       selected:{}
      }
    },

    created(){
       

     
     
       
        axios.get('/get-challenges')

        .then(
          response=>{
            if(response.status == 200){
              console.log('fetched!');
             
         
           this.challenges= response.data.challenges;
            }else{
               console.log(response.status)
            }
          }
        )


      
    
    },
   mounted(){
     this.$root.showTopBar = true;
    },

    methods:{

      createChallenge(){
        this.$router.push({path:'/board/challenges/create'})
      },
      startChallenge(box){

        this.$root.selectedChallenge=box;
      
    this.$router.push({path:'/board/challenges/panel/description'})
       
     
      },

    setDuration(box){
      moment.duration(box.duration, 'hours');
    
    }
    }

  
  }
</script>
<style scoped>
 span{

   color: #3C87CD;
   font-weight: bold;
line-height:21px;
 }

 .challengeBox{
   background:transparent !important;
   cursor: pointer;
 }

 .challengeBox:hover{
   background:transparent !important;
   cursor: pointer;
 }
  
</style>
