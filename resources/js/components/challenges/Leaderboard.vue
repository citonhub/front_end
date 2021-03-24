<template>
    <div>
        <div class="col-lg-10 offset-lg-1 px-md-2 px-1">

               <div class="col-12 py-0 d-flex flex-row pr-0" style="align-items:center;background:#F3F8FC;" v-for="(user,index) in this.$root.selectedChallenge.duel_participants"
                :key="index" @click="goToProfile(user)">
                   <div class="mr-2 d-flex" style="align-items:center;justify-content:center;">
              <div   :style="imageStyleUser(40,user)">
            </div> 
                   </div>
             
   <div class="py-3 d-flex flex-row" style=" border-bottom:1px solid #c5c5c5;width:100%;align-items:center;">
        <div class="col-8 py-0 px-0 d-flex flex-row" style="align-items:center;">
         <span style="font-size:13px;font-family:BodyFont;" class="mr-1">{{user.username}} </span>  <img :src="getUserLevel(user.points)" class="mx-1" height="22px"> 
        </div>

         <div class="col-4 py-0 px-0 d-flex pt-1 pr-2 flex-row-reverse" style="align-items:center;">
              <div style="font-size:12px;">{{user.stars}}</div>
         <div class="mr-1"> <i class="las la-trophy" style="font-size:20px;color:gray;" ></i> </div>
               
        </div>
       
   </div>
        </div>

        <div class="col-12 py-5 my-2">

        </div>

        

        </div>
    </div>
</template>
<script>
export default {
     data(){
        return{
          participants:[],
          that:this,

          
        }
    },
    mounted(){

  this.fetchParticipant();

    },
    methods:{

          sortArray: function(arrayValue){
      arrayValue.sort(function(a, b){ 
      
        return b.stars - a.stars 
    }); 

      },
     imageStyleUser:function(dimension,data){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
        
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         let imgLink = data.image_name + '.' + data.image_extension;
         
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/thumbnails/'  + imgLink  +  ');';
         
         
          return styleString;
      }
     },
         fetchParticipant:function(){
               axios.get('/fetch-participants/' + this.$route.params.challenge_id)

        .then(
          response=>{
            if(response.status == 200){
             
         
           this.$root.selectedChallenge.duel_participants = response.data.participants;
            this.$root.selectedChallenge.duel_participants.sort(function(a, b){return b.stars - a.stars})

            }else{
               console.log(response.status)
            }
          }
        )
        .catch(error => {
            
          })


         },
 goToProfile:function(user){

   console.log(user)

       if( this.$root.selectedSpace.type == 'Bot' ) return
        this.$root.selectedUsername = user.username;
         this.$router.push({ path:'/profile-view/' + user.username})
      },
     checkIfAdmin: function(source){

      let userMemberData = this.$root.selectedSpaceMembers.filter((members)=>{

             return (members.user_id == source.user_id)  && members.is_admin;
           });

           if(userMemberData.length != 0){

             return true;

           }else{
              return false
           }


      }
         ,
          getUserLevel: function(points){
let imageUrl = '';
          
  if(points >= 0 && points <= 99){
    imageUrl += '/imgs/steel.svg'

  }
  else if(points >= 100 && points <= 299 ){

   imageUrl +='/imgs/bronze.svg'
  }
   else if(points >= 300 && points <= 599 ){ 
   
imageUrl += '/imgs/silver.svg' 
}
    else if(points >= 600 && points <= 999 ){ 

imageUrl += '/imgs/gold.svg'
   }
 else if(points >= 1000 && points <= 1499 ){ 
   
imageUrl +='/imgs/platinum.svg'
}
  else if(points >= 1500 && points <= 9999 ){ 
      
 imageUrl += '/imgs/diamond.svg'
}

  return imageUrl;

    }
       
    },
}
</script>
<style scoped>

</style>