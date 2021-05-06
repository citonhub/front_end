<template> 
    
   
    <v-card class="col-lg-4  py-3 d-flex flex-column col-md-8 px-1 application application--light" data-app="true" style="align-items:center; justify-content:center;" >

          <div class="d-flex flex-row py-0 col-12 ">
          
           <div class="col-8 py-1 text-left px-1">
    
     </div>
       <div class="col-4 py-1 text-right px-0">
       <v-btn @click="that.$root.showMentorInfo = false" x-small text style="font-family:BodyFont;font-size:11px;"  >Close</v-btn>
     </div>

          </div>
        
        <img  src="/imgs/teach_dev_new.svg" height="160" />

         <template v-if="that.$root.fromCreateAChannel">


            <div class="mb-3 px-md-3 px-2 " style="font-size:13px;font-family:BodyFont;">
                      
                      
                     Hey <span style="font-family:MediumFont; text-transform:capitalize;">{{that.$root.authProfile.name}}</span>, <br> <br>
                     
                     To create a channel, you have to be at least a <span style="font-family:MediumFont;">Bronze citon</span>. <br>

                        <!-- position icon -->
                         <div class="col-12  my-0 d-flex py-3" style="align-items:center;justify-content:center;">

              <div class="row">
                
                <div class="col-4 py-0 d-flex"  style="align-items:center;justify-content:center;">
                
                <div class="d-flex flex-column"  style="align-items:center;justify-content:center;">
                      <img :src="pic1" height="30px"> 
                      <span style="font-family:MediumFont;font-size:12px;">{{level}}</span>
                </div>

                </div>

                 <div class="col-4 py-0 d-flex"  style="align-items:center;justify-content:center;">
                      <span class="mx-1" style="font-family:MediumFont;font-size:12px;" >{{this.$root.authProfile.points}} </span><span style="font-size:12px;">XP</span>
                  </div>


                 <div class="col-4  py-0 d-flex "  style="align-items:center;justify-content:center;">

                   <div class="d-flex flex-column"  style="align-items:center;justify-content:center;">
                     <img :src="pic" height="30px"> 
                      <span style="font-family:MediumFont;font-size:12px;">{{nextLevel}}</span>
                </div>
                    
                </div>

                <div class=" col-12 py-1 pt-2 "   >
                     <div class="d-flex flex-column"  style="align-items:center;justify-content:center;">
                     <v-progress-linear height="7px" width="100%" rounded color="#3C87CD" :value="barValue"></v-progress-linear>
                      <span style="font-family:BodyFont;font-size:12px;"><span style="font-family:MediumFont;">{{xpLeft}}</span> XP Points to {{nextLevel}} citon</span>
                </div>
                </div>

              </div>

            </div>
                       <!-- ends -->
                     
                     Get more experience points by 
                      <span style="font-family:MediumFont;">sharing your works</span> with the community or 
                     by sharing what you know in  <span style="font-family:MediumFont;">your diaries</span>.





                      <div class="col-12 py-1 px-2 mt-3">
                         <div class="row">

                             <div class="col-6 py-1 px-1 text-center">
                       <v-btn small  @click="shareProject" color="#3C87CD" style="color:white;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Share your work</v-btn>
                           </div>

                           <div class="col-6 py-1 px-1 text-center">
                      <v-btn small  @click="viewDiary" color="#3C87CD" outlined style="font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Start a diary</v-btn>
                           </div>

                         </div>
                        
                     </div>

                    </div>

         </template>
         <template v-else>

            <div class="mb-3 px-md-3 px-2" style="font-size:13px;font-family:BodyFont;">
                      
                      
                     Hey <span style="font-family:MediumFont; text-transform:capitalize;">{{that.$root.authProfile.name}}</span>, welcome to CitonHub! <br> <br>
                     
                     Channel is where you mentor, engage your community, and earn from <span style="font-family:MediumFont;">donations, subscriptions or paid sessions</span>. <br><br>

                    
                      To create a channel, you have to be at least a <span style="font-family:MediumFont;">Bronze citon</span>.<br>

                         <!-- position icon -->
                         <div class="col-12  my-0 d-flex py-3" style="align-items:center;justify-content:center;">

              <div class="row">
                
                <div class="col-4 py-0 d-flex"  style="align-items:center;justify-content:center;">
                
                <div class="d-flex flex-column"  style="align-items:center;justify-content:center;">
                      <img :src="pic1" height="30px"> 
                      <span style="font-family:MediumFont;font-size:12px;">{{level}}</span>
                </div>

                </div>

                 <div class="col-4 py-0 d-flex"  style="align-items:center;justify-content:center;">
                      <span class="mx-1" style="font-family:MediumFont;font-size:12px;" >{{this.$root.authProfile.points}} </span><span style="font-size:12px;">XP</span>
                  </div>


                 <div class="col-4  py-0 d-flex "  style="align-items:center;justify-content:center;">

                   <div class="d-flex flex-column"  style="align-items:center;justify-content:center;">
                     <img :src="pic" height="30px"> 
                      <span style="font-family:MediumFont;font-size:12px;">{{nextLevel}}</span>
                </div>
                    
                </div>

                <div class=" col-12 py-1 pt-2 "   >
                     <div class="d-flex flex-column"  style="align-items:center;justify-content:center;">
                     <v-progress-linear height="7px" width="100%" rounded color="#3C87CD" :value="barValue"></v-progress-linear>
                      <span style="font-family:BodyFont;font-size:12px;"><span style="font-family:MediumFont;">{{xpLeft}}</span> XP Points to {{nextLevel}} citon</span>
                </div>
                </div>

              </div>

            </div>
                       <!-- ends -->
                      
                      Get more experience points by 
                      <span style="font-family:MediumFont;">sharing your works</span> with the community or 
                     by sharing what you know in  <span style="font-family:MediumFont;">your diaries</span>.



                      <div class="col-12 py-1 px-1 mt-3">
                         <div class="row">

                             <div class="col-6 py-1 px-1 text-center">
                       <v-btn small  @click="shareProject" color="#3C87CD" style="color:white;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Share your works</v-btn>
                           </div>

                           <div class="col-6 py-1 px-1 text-center">
                       <v-btn small  @click="viewDiary" color="#3C87CD" outlined style="font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Start a diary</v-btn>
                           </div>

                         </div>
                        
                     </div>


                    </div>

         </template>
  
      

  

    

    </v-card>
   
    
    
</template>
<script>
export default {
  props:['alertComponent'],
     data () {
      return {
        that:this,
        nextLevel:'',
        presentLevel:'',
         remainingPoints:0,
         loadingmakeMentor:false,
         languages:[],
            level:'',
      xpLeft:0,
      barValue:0,
      pic:'',
       pic1:''
       
      }
    },
    mounted(){
       this.calculateLevel(this.$root.authProfile.points);

        this.calculateLevelNew(this.$root.authProfile.points)
    },
     methods:{
             calculateLevelNew:function(point){

  if(point >= 50 && point <= 99){
this.level='Steel';
this.nextLevel='Bronze';
this.xpLeft=100-point;
this.barValue=(point/100)*100;
this.pic='/imgs/bronze.svg'
this.pic1='/imgs/steel.svg'
  }
  else if(point >= 100 && point <= 299 ){ this.level='Bronze';
  this.nextLevel='Silver';
  this.xpLeft=300-point;
  this.barValue=(point/300)*100
  this.pic='/imgs/silver.svg'
this.pic1='/imgs/bronze.svg'
  }
   else if(point >= 300 && point <= 599 ){ 
     this.level='Silver';
  this.nextLevel='Gold';
  this.xpLeft=600-point;
  this.barValue=(point/600)*100;
   this.pic='/imgs/gold.svg'
this.pic1='/imgs/silver.svg' }
    else if(point >= 600 && point <= 999 ){ this.level='Gold';
   this.nextLevel='Platinum';
   this.xpLeft=1000-point;
   this.barValue=(point/1000)*100;
   this.pic='/imgs/platinum.svg'
this.pic1='/imgs/gold.svg'
   }
 else if(point >= 1000 && point <= 1499 ){ this.level='Platinum';
 this.nextLevel='Diamond';
 this.xpLeft=1500-point;
 this.barValue=(point/1500)*100;
 this.pic='/imgs/diamond.svg'
this.pic1='/imgs/platinum.svg'}
  else if(point >= 1500 && point <= 9999 ){ this.level='Platinum';
  this.nextLevel='Diamond';
  this.xpLeft=10000-point;
  this.barValue=(point/10000)*100;
 this.pic='/imgs/diamond.svg'
this.pic1='/imgs/platinum.svg'
}

},
  
         shareProject:function(){
          
          this.$root.showMentorInfo = false
       this.$root.componentIsLoading = true;

         this.$root.autoOpenAddPost = true;

          this.$router.push({ path:'/hub'})

    },
     
       BecomeMentor:function(){
         this.$root.showMentorInfo = false
    this.$root.showPointDetailsInfo = true

    },
    viewDiary:function(){
          this.$root.showMentorInfo = false
    this.$router.push({ path: '/board/diary/list' });
    },
      findMentor:function(){

      },
         calculateLevel(point){
   this.nextLevel = '';

     this.remainingPoints = 0;
   
  if(point >= 50 && point <= 99){

   this.nextLevel='a Bronze citon';
   this.remainingPoints =100-point;
   this.presentLevel = 'a Steel citon';
    this.newLevelImage = '/imgs/steel.svg';

  }
  else if(point >= 100 && point <= 299 ){
   
   this.nextLevel='a Silver citon';

    this.remainingPoints=300-point;

     this.presentLevel = 'a Bronze citon';

       this.newLevelImage = '/imgs/bronze.svg';
 
  }
   else if(point >= 300 && point <= 599 ){ 
  
  this.nextLevel='a Gold citon';

   this.remainingPoints= 600-point;

    this.presentLevel = 'a Silver citon';

      this.newLevelImage = '/imgs/silver.svg';

    }
    else if(point >= 600 && point <= 999 ){ 

   this.nextLevel='a Platinum citon';

     this.remainingPoints=1000-point;

     this.presentLevel = 'a Gold citon';
       this.newLevelImage = '/imgs/gold.svg';

   }
 else if(point >= 1000 && point <= 1499 ){ 
 this.nextLevel='a Diamond citon';

 this.remainingPoints=1500 - point;

   this.presentLevel = 'a Platinum citon';
     this.newLevelImage = '/imgs/platinum.svg';
  
  }
  else if(point >= 1500  && point <= 9999 ){ 
  this.nextLevel='a Diamond citon';

  this.remainingPoints= 10000 - point;

   this.presentLevel = 'a Diamond citon';

     this.newLevelImage = '/imgs/diamond.svg';
 
}

 return [this.nextLevel,this.remainingPoints];

},
     }
}
</script>
<style scoped>

</style>