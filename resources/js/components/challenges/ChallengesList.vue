<template>
<div>
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

  <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 px-2  pb-1 pt-0   " v-if="this.$root.TopBarComponentBoard">


      <template v-if="this.$root.TopBarComponentBoard.searchContent.length > 0">

         

            <template v-if="!loadingSearchChallenges">

                 <DynamicScroller
    :items="this.$root.challengeSearchList"
     :keyField="'duel_id'"
    :min-item-size="36"
  
    :buffer="5000"

     style=""
   
    class="col-12 text-center px-0 py-1 pt-md-3"
       
        >

    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem
        :item="item"
        :active="active"
        :size-dependencies="[
         item.description
        ]"
        :data-index="index"
      >

        <challenge :source="item" ></challenge>

          </DynamicScrollerItem>
             </template>
    <template #before>

        <!-- spacer -->
         
           <div class="col-12 mt-5 mt-md-0 d-md-none d-block"> 

           </div>
     <!-- ends -->

  </template>

    <template #after>

        <!-- spacer -->
         
           <div class="col-12 my-5 mt-md-0 "> 

           </div>
     <!-- ends -->

  </template>
                </DynamicScroller>

       </template>
       
       


     <template v-else>
           <!-- spacer -->
         
           <div class="col-12 mt-5 mt-md-0 d-md-none d-block"> 

           </div>
     <!-- ends -->


          <div class="col-12 mt-3 mt-md-4   text-center"> 

                 <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

           </div>
     </template>

          

      </template>

      <template v-else>

               <template v-if="!loadingChallenges">

                 <DynamicScroller
    :items="this.$root.challengesList"
     :keyField="'duel_id'"
    :min-item-size="36"
  
    :buffer="5000"

     style=""
   
    class="col-12 text-center px-0 py-1 pt-md-3"
       
        >

    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem
        :item="item"
        :active="active"
        :size-dependencies="[
         item.description
        ]"
        :data-index="index"
      >

        <challenge :source="item" ></challenge>

          </DynamicScrollerItem>
             </template>
    <template #before>

        <!-- spacer -->
         
           <div class="col-12 mt-5 mt-md-0 d-md-none d-block"> 

           </div>
     <!-- ends -->

  </template>

    <template #after>

        <!-- spacer -->
         
           <div class="col-12 my-5 mt-md-0 "> 

           </div>
     <!-- ends -->

  </template>
                </DynamicScroller>

       </template>
       
       


     <template v-else>
           <!-- spacer -->
         
           <div class="col-12 mt-5 mt-md-0 d-md-none d-block"> 

           </div>
     <!-- ends -->


          <div class="col-12 mt-3 mt-md-4   text-center"> 

                 <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

           </div>
     </template>

      </template>



  </div>

 <!-- ends -->

</div>
  
</template>

<script>

import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
Vue.component('DynamicScroller', DynamicScroller)
Vue.component('DynamicScrollerItem', DynamicScrollerItem)

const Challenge = () => import(
    /* webpackChunkName: "Challenge" */ './Challenge.vue'
  );

 export default {
    data () {
      return {
     
       pending:true,
         loadingChallenges:false,
         loadingSearchChallenges:false,
      }
    },
   mounted(){
      if(!this.$root.isLogged){

            this.$root.checkIfUserIsLoggedIn();
         return;
        }
     this.$root.showTopBar = true;

       this.$root.challengeListComponent = this;

     this.fetchChallenges();
    },
     components:{
     Challenge
     },
    methods:{

      fetchChallenges:function(){

          this.loadingChallenges  = true;

             let storedChallenges = this.$root.getLocalStore('user_challenges_'  + this.$root.username);

            storedChallenges.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      this.$root.challengesList = finalResult;
                    
                   
 
              this.loadingChallenges = false;

              this.checkForNewChallenges();

                 }else{
            
           
       axios.get('/get-challenges')

        .then(
          response=>{
            if(response.status == 200){
             
         
            this.$root.challengesList = response.data.challenges;

            this.$root.LocalStore('user_challenges_' + this.$root.username,response.data.challenges);

            this.loadingChallenges = false;

            }
          }
        )
     .catch(error => {

        this.loadingChallenges = false;
    
     }) 

                 }
            })

      },
      checkForNewChallenges:function(){

          axios.get('/get-challenges')

        .then(
          response=>{
            if(response.status == 200){
             
         
           this.$root.challengesList = response.data.challenges;

            this.$root.LocalStore('user_challenges_' + this.$root.username,response.data.challenges);

          

            }
          }
        )
     .catch(error => {

       
    
     }) 

      },
      
      createChallenge(){
        this.$router.push({path:'/board/challenges/create/new'})
      },
      
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
