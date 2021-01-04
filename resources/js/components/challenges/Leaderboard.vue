<template>
    <div>
        <div class="col-lg-10 offset-lg-1 px-md-2 px-1">

               <div class="col-12 py-0 d-flex flex-row pr-0" style="align-items:center;background:#F3F8FC;" v-for="(user,index) in participants"
                :key="index">
                   <div class="mr-2 d-flex" style="align-items:center;justify-content:center;">
              <div   :style="imageStyleUser(40,user)">
            </div> 
                   </div>
             
   <div class="py-3 d-flex flex-row" style=" border-bottom:1px solid #c5c5c5;width:100%;align-items:center;">
        <div class="col-8 py-0 px-0 d-flex flex-row" style="align-items:center;">
         <span style="font-size:13px;font-family:BodyFont;" class="mr-1">{{user.username}} </span><i class="las la-award" style="font-size:20px;color:#560bad;" ></i> 
        </div>

         <div class="col-4 py-0 px-0 d-flex pt-1 pr-2 flex-row-reverse" style="align-items:center;">
              <div style="font-size:12px;">{{user.stars}}</div>
         <div class="mr-1"> <i class="las la-trophy" style="font-size:20px;color:gray;" ></i> </div>
               
        </div>
       
   </div>
        </div>

        

        </div>
    </div>
</template>
<script>
export default {
     data(){
        return{
          participants:'',
          that:this,

          
        }
    },
    mounted(){

  this.fetchParticipant();

    },
    methods:{

          sortArray: function(arrayValue){
      arrayValue.sort(function(a, b){ 
      
        return new Date(b.stars) - new Date(a.stars); 
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
         
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         
         
          return styleString;
      }
     },
         fetchParticipant:function(){
               axios.get('/fetch-participants/' + this.$route.params.challenge_id)

        .then(
          response=>{
            if(response.status == 200){
             
         
           this.participants = response.data.participants;
            this.participants = this.sortArray(this.participants);

            }else{
               console.log(response.status)
            }
          }
        )
        .catch(error => {
            
          })


         }
       
    },
}
</script>
<style scoped>

</style>