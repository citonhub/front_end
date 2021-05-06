<template> 
    
   
    <v-card class="col-lg-4 px-1 py-3 d-flex flex-column col-md-8 " style="align-items:center; justify-content:center;" >
    <div class="col-12 py-1 text-right px-0">
       <v-btn @click="that.$root.showRewardBoard = false" small text style="font-family:BodyFont;font-size:11px;"  >Close</v-btn>
     </div>

      <template v-if="presentLevel == returnFormalLevel()">
        <img  src="/imgs/progress.png" height="190" />
      </template>

      <template v-else>
             <img  :src="newLevelImage" height="150" />
      </template>
 
   
   <div class="pb-3 pt-2 text-center px-md-3 px-2">
        
      <template v-if="presentLevel == returnFormalLevel()">

         <span style="font-size:13px; font-family:MediumFont;">You are progressing!</span> <span style="font-size:13px; font-family:BodyFont;">Your experience points has increased by</span> 
      <span style="font-size:13px; font-family:MediumFont;">{{that.$root.addedPoint}} ,</span> <span style="font-size:13px; font-family:BodyFont;"> You now have</span> <span style="font-size:13px; font-family:MediumFont;">{{ this.$root.authProfile.points }} experience points.</span><span style="font-size:13px; font-family:BodyFont;"> Get more by sharing more of your projects. You have 
          <span style="font-size:13px; font-family:MediumFont;">{{remainingPoints}} experience points</span> remaining 
          to become  </span>  <span style="font-size:13px; font-family:MediumFont;">{{nextLevel}} </span>

      </template>

      <template v-else>

          <span style="font-size:13px; font-family:MediumFont;">Congratulation!</span> <span style="font-size:13px; font-family:BodyFont;">You are now </span> 
      <span style="font-size:13px; font-family:MediumFont;">{{ presentLevel }}</span>. <span style="font-size:13px; font-family:BodyFont;"> You have</span> <span style="font-size:13px; font-family:MediumFont;">{{ this.$root.authProfile.points }} experience points.</span><span style="font-size:13px; font-family:BodyFont;"> Get more by sharing more of your projects. You have 
          <span style="font-size:13px; font-family:MediumFont;">{{remainingPoints}} experience points</span> remaining 
          to become  </span>  <span style="font-size:13px; font-family:MediumFont;">{{nextLevel}} </span>

      </template>
       

   </div>

     <template v-if="presentLevel == 'a Steel citon'">

       <div class="text-center mb-2">
               <v-btn small @click="shareProject" color="#3C87CD" style="color:white;text-transform:normal;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" >Share more projects</v-btn>
      </div>

     </template>

     <template v-else>

        <div class="text-center  d-flex flex-row col-12 px-1">
           <div class="col-6 px-0 py-0 text-center">
            
             <v-btn small @click="makeMentor" color="#3C87CD" style="color:white;text-transform:normal;font-family:BodyFont;font-size:10px;" class="mx-2 d-inline-block" >Become a mentor</v-btn>
             
           </div>

           <div class="col-6 px-0 py-0 text-center">

              <v-btn small @click="shareProject" color="#3C87CD" outlined style="text-transform:normal;font-family:BodyFont;font-size:10px;" class="mx-2 d-inline-block" >Share project</v-btn>

           </div>
              
      </div>

     </template>

   
    

    </v-card>
   
    
    
</template>
<script>
export default {
     data () {
      return {
        that:this,
        nextLevel:'',
         remainingPoints:0,
         presentLevel:'',
         newLevelImage:'',
      
      }
    },
    mounted(){
       this.calculateLevel(this.$root.authProfile.points)
    },
     methods:{
        createChannel:function(){
          this.$root.componentIsLoading = true;

            if(this.$router.currentRoute.path.indexOf('channel') >= 0){

            this.$root.showPointDetailsInfo = false
                 this.$router.push({ path: '/channels/create' });
            }else{

                   this.$root.showCreateChannel = true;


            this.$root.showPointDetailsInfo = false

                   this.$router.push({ path: '/channels' });

            }

      


        },
       returnFormalLevel:function(){
         let point = this.$root.formerPoint;
        if(point >= 50 && point <= 99){

     return 'a Steel citon';
  
  }
  else if(point >= 100 && point <= 299 ){
   
      return 'a Bronze citon';
 
  }
   else if(point >= 300 && point <= 599 ){ 
  
     return 'a Silver citon';

  
    }
    else if(point >= 600 && point <= 999 ){ 

         return 'a Gold citon';

   

   }
 else if(point >= 1000 && point <= 1499 ){ 

      return 'a Platinum citon';

  
  }
  else if(point >= 1500  && point <= 9999 ){ 

     return 'a Diamond citon';
 
}
         
       },
       makeMentor:function(){
         this.$root.showRewardBoard = false;
     this.$root.showPointDetailsInfo = true;
       },
       shareProject:function(){
         this.$root.showRewardBoard = false
     this.$root.componentIsLoading = true;

          this.$router.push({ path:'/hub/new-post'})
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