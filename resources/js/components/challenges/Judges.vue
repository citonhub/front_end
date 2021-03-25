<template>
    <div>
        <div class="col-lg-10 offset-lg-1 px-md-2 px-1">
               

                <div class="d-flex" v-if="this.$root.selectedChallenge.judges == 'everyone'" style="align-items:center; justify-content:center; position:absolute; height:100%;width:100%;left:0%;">

                    <span style="font-size:14px;">Everyone can Judge</span>

               </div>


             
          <template v-else>

              
                <div class="col-12 py-0 d-flex flex-row pr-0" @click="goToProfile(user.username)" style="align-items:center;background:#F3F8FC;" v-for="(user,index) in this.$root.selectedChallenge.selected_judges"
                :key="index">
                   <div class="mr-2 d-flex" style="align-items:center;justify-content:center;">
              <div   :style="imageStyleUser(40,user)">
            </div> 
                   </div>
             
   <div class="py-3 d-flex flex-row" style=" border-bottom:1px solid #c5c5c5;width:100%;align-items:center;">
        <div class="col-12 py-0 px-0 d-flex flex-row" style="align-items:center;">
         <span style="font-size:13px;font-family:BodyFont;" class="mr-1">{{user.name}} @{{user.username}}</span>  
        </div>

       
       
   </div>
        </div>
      

          </template>

           
               

        </div>
    </div>
</template>
<script>
export default {
     data(){
        return{
          judges:''
          
        }
    },
    methods:{
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
     goToProfile:function(username){
          this.$root.selectedUsername = username;
         this.$router.push({ path:'/profile/' + username})
     }
    },
}
</script>
<style scoped>

</style>