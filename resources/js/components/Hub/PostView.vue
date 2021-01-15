<template>

  <div :class="fromProfile ? 'col-lg-4 col-md-6 px-0 mb-5 pt-1 pt-md-2 projectBox' : 'col-lg-3 col-md-6 px-0 mb-5 pt-1 pt-md-2 projectBox'" style="height:200px;" >

             <div :style="imageStyle(190, post)" @click="showProject(post.id, post.post_id)">

              <div class="pt-3 px-2  pl-3" style=" position:absolute; width:100%; height:35%; left:0; bottom:0%; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px; background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%);">
                
                 <div class="row">
                  <div class="col-8 py-0 my-0">
                     <span   style="font-family:MediumFont; font-size:13px; color:white;" >{{ post.title }}</span>
    
                  </div>
                   <div class="col-4 py-0 my-0 text-right">

                      <i :class="tag.icon" style="font-size:25px; color:white;" v-for="(tag, i) in JSON.parse(post.tags)" :key="i"></i>

                  </div>
                </div>
                 

          </div>

         </div>

          <v-card class="py-1 px-1"   style="position:absolute; width:94%; height:auto; left:3%; top:0; border-radius:0px; border-top-left-radius:20px;
          border-top-right-radius:20px;">
            
            <div class="col-12 py-0 my-0 px-1 text-left">
                <div class="row py-0 my-0">
                   
                   <div class="col-10 py-0 my-0 d-flex flex-row" style="align-items:center;">
                      
                         <div  class="mr-1"    @click="goToProfile(post.user.username)"
                           :style="imageStyleUser(30,post.user)"></div>
                       
                             <div   @click="goToProfile(post.user.username)" style="font-family:MediumFont; font-size:13px;" >{{post.user.username}}  <img :src="getUserLevel(post.user.points)" class="mx-1" height="22px"></div>
                     
                     
                   </div>
                   <div class="col-2 text-right py-0 my-0" >
                      <v-btn icon :id="'activatorPost' + post.id" ><v-icon style="font-size:25px;">las la-ellipsis-v</v-icon></v-btn>

                          <!-- more option -->

                   <v-menu
      absolute
      :activator="'#activatorPost' + post.id"
       style="z-index:99999999999999999999;"
      
      right
      offset-y
      
    >
    <more-options :post="post" :alertComponent="alertComponent" :fromProfile="fromProfile"></more-options>
    </v-menu>
                 
                  <!-- ends -->

                   </div>
                </div>
            </div>
          </v-card>

          <div class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; top:100%;">
            
             <div class="row">
                  <div class="col-12 py-0 my-0 text-right">
                       
                       <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">{{ post.likes }}</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-comment" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">{{ post.comments }}</span>
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

export default {
    props:['post','fromProfile','alertComponent'],
    components:{
     MoreOptions
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

      imageStyle: function (width, data) {

        if (data.image_extension == null) {
          let styleString = "height: " + width +  "px; width: 94%;  position:absolute; left: 3%; border: 1px solid #c5c5c5;  background-repeat: no-repeat; border-radius: 20px; box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25); background-size: cover;";
          
          if (data.image_name == null || data.image_name == '0') {
            styleString += 'background-color: white; background-image: url(imgs/background1.jpg);';
          } else {
            
            if (data.image_name == 'default_1') {
              styleString += 'background-color: white; background-image: url(/imgs/background3.jpg);';
            }

            if (data.image_name == 'default_2') {
              styleString += 'background-color: white; background-image: url(/imgs/background1.jpg);';
            }

            if (data.image_name == 'default_3') {
              styleString += 'background-color:white; background-image: url(/imgs/imgproj2.jpeg);';
            }
          }
         
          return styleString;
        } else {
          let styleString = "height: " + width +  "px; width: 94%; left: 3%;  position:absolute; border: 1px solid #c5c5c5;  background-repeat: no-repeat; border-radius: 20px; box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25); background-size: cover;";
          
         let imgLink = data.image_name + '.' + data.image_extension;
          styleString +=' background-color:' + data.background_color   +   ';background-image:url(/imgs/posts/'  + imgLink  +  ');';
         
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