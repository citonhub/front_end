<template>

  <div :class="fromProfile ? 'col-lg-4 col-md-6 px-0 mb-5  pt-1 pt-md-2 projectBox' : 'col-lg-3 mb-5  col-md-6 px-0 pt-1 pt-md-2 projectBox'" style="height:212px;" >

             <image-loader  :post="source" 
              >

            
         </image-loader>

          <v-card class="py-1 px-1"   style="position:absolute; width:94%; height:auto; left:3%; top:0; border-radius:0px; border-top-left-radius:20px;
          border-top-right-radius:20px;">
            
            <div class="col-12 py-0 my-0 px-1 text-left">
                <div class="row py-0 my-0">
                   
                   <div class="col-10 py-0 my-0 d-flex flex-row" style="align-items:center;">
                      
                         <div  class="mr-1"    @click="goToProfile(source.user.username)"
                           :style="imageStyleUser(30,source.user)"></div>
                       
                             <div   @click="goToProfile(source.user.username)" style="font-family:MediumFont; font-size:13px;" >{{source.user.username}}  <img :src="getUserLevel(source.user.points)" class="mx-1" height="22px"></div>
                     
                     
                   </div>
                   <div class="col-2 text-right py-0 my-0" >
                      <v-btn icon :id="'activatorPost' + source.id" ><v-icon style="font-size:25px;">las la-ellipsis-v</v-icon></v-btn>

                          <!-- more option -->

                   <v-menu
      absolute
      :activator="'#activatorPost' + source.id"
       style="z-index:99999999999999999999;"
      
      right
      offset-y
      
    >
    <more-options :post="source" :alertComponent="alertComponent" :fromProfile="fromProfile"></more-options>
    </v-menu>
                 
                  <!-- ends -->

                   </div>
                </div>
            </div>
          </v-card>

          <div class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; top:97%;">
            
             <div class="row">
                  <div class="col-12 py-0 my-0 text-right">
                       
                       <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">{{ source.likes }}</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-comment" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">{{ source.comments }}</span>
            </span>
                  </div>   
            </div>

          </div>
          </div>
    
</template>
<script>
  const MoreOptions = () => import(
    /* webpackChunkName: "MoreOptionsPost" */ './MoreOptions.vue'
  );

    const ImageLoader = () => import(
    /* webpackChunkName: "ImageLoader" */ '../dashboard/ImageLoader.vue'
  );

export default {
   data(){
        return{      
            externalUrl: '',
        backgroundColor:'',
        additionalStyle:'',
        externalClass:'',
        }
    },  
    props:['source','fromProfile','alertComponent','username'],
    components:{
     MoreOptions,
     ImageLoader
    },
    mounted(){

     

    },
     methods:{
      
          imageStyleUser:function(dimension,data){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer;";
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
        
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer; ";
         let imgLink = data.image_name + '.' + data.image_extension;
         
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         
         
          return styleString;
      }
     },

    
       getUserLevel: function(points){
let imageUrl = '';
          
  if(points >= 0 && points <= 99){
    imageUrl += '/imgs/newbie.svg'

  }
  else if(points >= 100 && points <= 999 ){

   imageUrl +='/imgs/junior.svg'
  }
   else if(points >= 1000 && points <= 4999 ){ 
   
imageUrl += '/imgs/intermediate.svg' 
}
    else if(points >= 5000 && points <= 9999 ){ 

imageUrl += '/imgs/senior.svg'
   }
 else if(points >= 10000 && points <= 14999 ){ 
   
imageUrl +='/imgs/expert.svg'
}
  else if(points >= 15000 && points <= 100000 ){ 
      
 imageUrl += '/imgs/super_dev.svg'
}

  return imageUrl;

    },
     showProject (id, postId) {

      
        this.$root.fromProfile = this.fromProfile;
        this.$root.fromProfileUsername = this.username
        this.$router.push({ path: `/hub/post/${postId}` })
        this.$root.currentPost = id

       
        // this.project = project;
        
      },
      goToProfile:function(username){
        this.$root.selectedUsername = username;
         this.$router.push({ path:'/profile-view/' + username})
      }

     }
}
</script>
<style scoped>
.projectBox{
  cursor: pointer;
}
</style>