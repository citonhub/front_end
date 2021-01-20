<template>
         <div class="col-12 py-2 px-1" :style="source.tagged ? 'background:rgba(60, 135, 205, 0.32)' :''" >

                 
           
            <div elevation-1 class="col-11 py-0 " v-if="source.username != username">
           <div class="row">
             <div class="col-lg-9 col-md-10 py-1  d-flex flex-row">
                  <div  :style="imageStyleUser(30,source)" @click.stop="that.$root.projectViewComponent.goToProfile(source.username)"
                      ></div>

                  <v-card elevation-1 class="py-1 px-2 ml-2" flat style="max-width:80%;  border:1px solid transparent;  min-width:190px;background:#E1F0FC; border-radius:7px; border-bottom-left-radius:0px;">
                   
                    <div class="text-left my-0 py-0 d-flex flex-row">
                         <span style="font-size:13px;font-weight:bold; " @click.stop="that.$root.projectViewComponent.goToProfile(source.username)" >{{source.username}}</span>

                          <span style="font-size:11px; " class="ml-auto">{{checkDatereal(source.created_at)}}</span> 

                  </div>
                   <div @click.stop="scrollToComment(source.replied_comment)" class="d-flex flex-column py-2 px-1" style="border-left:3px solid #3C87CD; background:#d6e6f5;border-radius:0px;" v-if="source.is_reply">
                       <div style="font-size:13px; white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">{{ source.replied_comment.comment  }}</div>
                   </div>
                    
                      <span style="font-size:13px;" v-html="source.content"></span>
                      
                  </v-card> 
             </div>
             <div style="padding-left:45px;align-items:center;" class="col-12 py-0 d-flex">
                <span class="d-inline-block mx-1" >
                
                 <v-btn icon class="d-inline-block"  v-if="source.liked_by_user">
                   <i class="las la-heart" style="font-size:20px;color:#ff6666;" ></i> </v-btn>

                 <v-btn icon class="d-inline-block"  v-else @click="that.$root.projectViewComponent.likeComment(source)">
                    <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> </v-btn> 
               
                <span style="font-family:BodyFont; font-size:12px; color:#000000;">{{source.likes}}</span>
                </span>
                  <span class="d-inline-block mx-1">
  <v-btn @click="that.$root.projectViewComponent.showReplyAction(source)" icon class="d-inline-block">
        <i class="las la-reply" style="font-size:20px;" ></i> </v-btn>

                </span>
             </div>
           </div>
        </div>

            <div elevation-1 class="col-11 py-0 offset-1" v-if="source.username == that.$root.username">
           <div class="row">
             <div class="col-lg-9 col-md-10 py-1 offset-lg-3 offset-md-2 d-flex flex-row-reverse">
                  

                  <v-card elevation-1 flat class="py-1 px-2 mr-2" style="max-width:80%;  border:1px solid transparent; min-width:190px;background:#3C87CD; border-radius:7px; border-bottom-right-radius:0px;">
                     
                      <div @click.stop="that.$root.projectViewComponent.scrollToComment(source.replied_comment)" class="d-flex flex-column py-2 px-1" style="border-left:3px solid #E1F0FC; border-radius:0px; background:#d6e6f5;" v-if="source.is_reply == 1">
                       <div style="font-size:13px; white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">{{ source.replied_comment.comment  }}</div>
                   </div>
                      <span style="color:white;font-size:13px;" v-html="source.content"></span>
                       
                  <!-- time -->
                  <div class="text-right">
                         <span style="color:white;font-size:11px; ">{{checkDatereal(source.created_at)}}</span>
                  </div>
                  <!-- ends -->
                  </v-card> 

                 
             </div>
             <div  class="col-12 text-right py-0">
                <span class="d-inline-block mx-1" >
                  <v-btn icon class="d-inline-block"  v-if="source.liked_by_user">
                   <i class="las la-heart" style="font-size:20px;color:#ff6666;" ></i> </v-btn>

                 <v-btn icon class="d-inline-block"  v-else @click="that.$root.projectViewComponent.likeComment(source)">
                    <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> </v-btn>  
                <span style="font-family:BodyFont; font-size:12px; color:#000000;">{{source.likes}}</span>
                </span>

                <span class="d-inline-block mx-1">
  <v-btn @click="that.$root.projectViewComponent.showReplyAction(source)" icon class="d-inline-block">
        <i class="las la-reply" style="font-size:20px;" ></i> </v-btn>

                </span>

                
             </div>

              
           </div>
        </div>


        
                </div>

</template>
<script>
export default {
    props:['source','username'],
     data () {
      return {
       that:this
      }
    },
    methods:{
        imageStyleUser:function(dimension,data){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer;";
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer; ";
         let imgLink = data.image_name + '.' + data.image_extension;
         
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         
         
          return styleString;
      }
     },
         
   checkDatereal: function(date){

            var realTimeHour = moment(date).add(1,'hours');

            var aWeekAgo = moment().subtract(7,'days');

            if (moment(realTimeHour) >= aWeekAgo) {
              return moment(realTimeHour).format("h:mm a");
            }else{
               return moment(realTimeHour).format("h:mm a");
            }
      },
    }
}
</script>
<style scoped>

</style>