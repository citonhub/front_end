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
  
       <div class="mb-3 px-2" style="font-size:13px;font-family:BodyFont;">
                      
                      
                     Hey <span style="font-family:MediumFont; text-transform:capitalize;">{{that.$root.authProfile.name}}</span>, welcome to CitonHub! <br> <br>
                     
                     We believe we can improve the way <span style="font-family:MediumFont;">developers mentor and get mentored</span> on the internet. Join us,



                      <div class="col-12 py-1 px-1 mt-3">
                         <div class="row">

                             <div class="col-6 py-1 px-1 text-center">
                       <v-btn small  @click="findMentor" color="#3C87CD" style="color:white;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Find a mentor</v-btn>
                           </div>

                           <div class="col-6 py-1 px-1 text-center">
                       <v-btn small  @click="BecomeMentor" color="#3C87CD" outlined style="font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Become a mentor</v-btn>
                           </div>

                         </div>
                        
                     </div>

                    </div>

  

    

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
       
      }
    },
    mounted(){
      
    },
     methods:{
       
       BecomeMentor:function(){
         this.$root.showMentorInfo = false
    this.$root.showPointDetailsInfo = true

    },
      findMentor:function(){

      },
         calculateLevel(point){
   this.nextLevel = '';

     this.remainingPoints = 0;
   
  if(point >= 50 && point <= 99){

   this.nextLevel='a Bronze developer';
   this.remainingPoints =100-point;
   this.presentLevel = 'a Steel developer';
    this.newLevelImage = '/imgs/steel.svg';

  }
  else if(point >= 100 && point <= 299 ){
   
   this.nextLevel='a Silver developer';

    this.remainingPoints=300-point;

     this.presentLevel = 'a Bronze developer';

       this.newLevelImage = '/imgs/bronze.svg';
 
  }
   else if(point >= 300 && point <= 599 ){ 
  
  this.nextLevel='a Gold developer';

   this.remainingPoints= 600-point;

    this.presentLevel = 'a Silver developer';

      this.newLevelImage = '/imgs/silver.svg';

    }
    else if(point >= 600 && point <= 999 ){ 

   this.nextLevel='a Platinum developer';

     this.remainingPoints=1000-point;

     this.presentLevel = 'a Gold developer';
       this.newLevelImage = '/imgs/gold.svg';

   }
 else if(point >= 1000 && point <= 1499 ){ 
 this.nextLevel='a Diamond developer';

 this.remainingPoints=1500 - point;

   this.presentLevel = 'a Platinum developer';
     this.newLevelImage = '/imgs/platinum.svg';
  
  }
  else if(point >= 1500  && point <= 9999 ){ 
  this.nextLevel='a Diamond developer';

  this.remainingPoints= 10000 - point;

   this.presentLevel = 'a Diamond developer';

     this.newLevelImage = '/imgs/diamond.svg';
 
}

 return [this.nextLevel,this.remainingPoints];

},
     }
}
</script>
<style scoped>

</style>