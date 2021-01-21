<template> 
    
   
    <v-card class="col-lg-4  py-3 d-flex flex-column col-md-8 " style="align-items:center; justify-content:center;" >

    <img  src="/imgs/congrat.gif" height="140" />
   
   <div class="py-3 text-center">

        <span style="font-size:13px; font-family:MediumFont;">Congratulations!</span> <span style="font-size:13px; font-family:BodyFont;">You received </span> 
      <span style="font-size:13px; font-family:MediumFont;">4 experience points.</span> <span style="font-size:13px; font-family:BodyFont;"> Get more point by sharing your project for people to review. You have 
          <span style="font-size:13px; font-family:MediumFont;">{{remainingPoints}} experience points</span> left 
          to become a </span>  <span style="font-size:13px; font-family:MediumFont;">{{nextLevel}} dev</span>

   </div>

   <div class="text-center">
               <v-btn small @click="that.$root.showRewardBoard = false" color="#3C87CD" style="color:white;text-transform:normal;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" >Got it!</v-btn>
   </div>
    

    </v-card>
   
    
    
</template>
<script>
export default {
     data () {
      return {
        that:this,
        nextLevel:'',
         remainingPoints:0
      
      }
    },
    mounted(){
       this.calculateLevel(this.$root.authProfile.points)
    },
     methods:{
         calculateLevel(point){
    
     this.nextLevel = '';

     this.remainingPoints = 0;
   
  if(point >= 50 && point <= 99){

   this.nextLevel='Junior';
   this.remainingPoints =100-point;

  }
  else if(point >= 100 && point <= 999 ){
   
   this.nextLevel='Intermediate';

    this.remainingPoints=1000-point;
 
  }
   else if(point >= 1000 && point <= 4999 ){ 
  
  this.nextLevel='Senior';

   this.remainingPoints=5000-point;
    }
    else if(point >= 5000 && point <= 9999 ){ 

   this.nextLevel='Expert';

     this.remainingPoints=10000-point;

   }
 else if(point >= 10000 && point <= 14999 ){ 
 this.nextLevel='Super ';

 this.remainingPoints=15000-point;
  
  }
  else if(point >= 15000 && point <= 100000 ){ 
  this.nextLevel='Super';

  this.remainingPoints=100000-point;
 
}

 return [this.nextLevel,this.remainingPoints];

},
     }
}
</script>
<style scoped>

</style>