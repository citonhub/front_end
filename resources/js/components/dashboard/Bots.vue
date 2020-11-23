<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div id="mainScroller" class="  col-lg-6 offset-lg-3 py-0 px-0 my-0 scrollerStyle" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

      <!-- top bar -->
        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-3 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-6 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
             <span v-if="this.$root.selectedBot.length != 0" style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">{{this.$root.selectedBot.name}}</span>
         </div>
         <div class="col-3 py-1 my-0  text-right"  style="border-bottom:2px solid #4495a2; " >
            <v-btn rounded x-small color="#3E8893" style="font-size:10px; font-weight:bolder; color:white;font-family: Headertext;" @click="showShareOptions"><span class="py-1 px-1">share</span></v-btn> 
         </div>
      </div>
     </div>
     <!-- ends -->

   <!-- bot main component -->
      <div class="col-12 py-1 my-0 " >
            <div class="row my-1 mt-0 py-1 px-2 ">

               <div class="col-12 py-0 pb-2 px-2 my-0 text-left">

         <v-btn x-small rounded color="#3E8893" @click="trainBot" :loading="loadingTrain" style="color:white;">Train bot</v-btn>

        </div>
          
        <div class="col-12 py-1 px-2 my-0">

          <!-- pulls in the bot content generator component -->

       <content-generator></content-generator>         
         <!-- ends -->
        </div>

        <div class="col-12 py-0 px-1 my-2 mt-3">

          <!-- pulls in the bot content component -->

          <bot-contents></bot-contents>
        
        <!-- ends -->

        </div>
          </div>
        </div>
<!-- ends -->


         </div>
       </div>

       

      
     </v-app>
</template>
<script>


export default {
    data(){
        return{
          loadingTrain:false
        }
    },
    components: {
   
  },
   mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
      
    },
    methods:{
       imageStyle:function(dimension,user){
      

      if(user == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         styleString += 'background-color:#ffffff; background-image:url(imgs/usernew.png);';
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;";
         let imgLink = user.image_name + '.' + user.image_extension;
          styleString += 'background-color:'+ user.background_color + '; background-image:url(imgs/profile/'  + imgLink  +  ');';
          return styleString;
      }

      

     },
   
   goBack() {
          
         this.$router.push({ path: '/panel/main/' +  this.$root.orgIdRoot });
        },
        showShareOptions:function(){

           this.$root.shareText  = 'Checkout this teaching bot on CitonHub.';
         this.$root.shareLink = 'https://www.citonhub.com/link/bot/'+ this.$route.params.botId + '/' + this.$root.username;

         this.$root.showShare = true;

         this.$root.isBotLink = true;

        },
     trainBot: function(){

         this.loadingTrain = true;

        axios.get('train-bot-'+ this.$route.params.botId)
          .then(response => {
             
  
            if(response.status == 200){
         this.loadingTrain = false;
            console.log(response.data)

            }
  
          })
          .catch(error => {

             this.loadingTrain = false;
              console.log(error)
            
          })
     }
   
    },
   
}
</script>
<style>
 .titleTextNew{
    font-size:13px; 
    font-family:HeaderText; 
    color:#35747e;
}

.avatarImg{
  border-radius:50%;
  border: 3px solid #3E8893;
}
</style>