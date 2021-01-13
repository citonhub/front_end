<template>
    <div>
        <!-- chat area -->
        <div class="col-lg-10 offset-lg-1 scroller px-md-2 px-1 py-1 " 
      style="background:#E1F0FC;position:absolute;height:100%;top:0%;left:0;border:1px solid #E1F0FC;overflow-y:auto; overflow-x:hidden; " >

               <div class="row">


                     <div class="col-12 py-2 px-1"  v-for="(comment,index) in comments" :key="index" >

                 
           
            <div elevation-1 class="col-11 py-0 " v-if="comment.username != that.$root.username">
           <div class="row">
             <div class="col-lg-9 col-md-10 py-1  d-flex flex-row">
                  <div  :style="imageStyleUser(30,comment)"
                      ></div>

                  <v-card elevation-1 class="py-1 px-2 ml-2" style="max-width:80%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-left-radius:0px;">
                   
                    <div class="text-left my-0 py-0 d-flex flex-row">
                         <span style="font-size:13px;font-weight:bold; ">{{comment.username}}</span>

                          <span style="font-size:11px; " class="ml-auto">{{checkDatereal(comment.created_at)}}</span> 

                  </div>
                    
                      <span style="font-size:13px;" v-html="comment.content"></span>
                      
                  </v-card> 
             </div>
             <div style="padding-left:45px;align-items:center;" class="col-12 py-0 d-flex">
                <span class="d-inline-block mx-1" >
                
                 <v-btn icon class="d-inline-block"  v-if="comment.liked_by_user">
                   <i class="las la-heart" style="font-size:20px;color:#3C87CD;" ></i> </v-btn>

                 <v-btn icon class="d-inline-block"  v-else @click="likeComment(comment)">
                    <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> </v-btn> 
               
                <span style="font-family:BodyFont; font-size:12px; color:#000000;">{{comment.likes}}</span>
                </span>
             </div>
           </div>
        </div>

            <div elevation-1 class="col-11 py-0 offset-1" v-if="comment.username == that.$root.username">
           <div class="row">
             <div class="col-lg-9 col-md-10 py-1 offset-lg-3 offset-md-2 d-flex flex-row-reverse">
                  <div  :style="imageStyleUser(30,comment)"
                      ></div>

                  <v-card elevation-1 class="py-1 px-2 mr-2" style="max-width:80%;  border:1px solid transparent; min-width:150px;background:#3C87CD; border-radius:7px; border-bottom-right-radius:0px;">
                      <span style="color:white;font-size:13px;" v-html="comment.content"></span>
                       
                  <!-- time -->
                  <div class="text-right">
                         <span style="color:white;font-size:11px; ">{{checkDatereal(comment.created_at)}}</span>
                  </div>
                  <!-- ends -->
                  </v-card> 

                 
             </div>
             <div style="padding-right:45px;" class="col-12 text-right py-0">
                <span class="d-inline-block mx-1" >
                  <v-btn icon class="d-inline-block"  v-if="comment.liked_by_user">
                   <i class="las la-heart" style="font-size:20px;color:#3C87CD;" ></i> </v-btn>

                 <v-btn icon class="d-inline-block"  v-else @click="likeComment(comment)">
                    <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> </v-btn>  
                <span style="font-family:BodyFont; font-size:12px; color:#000000;">{{comment.likes}}</span>
                </span>
             </div>
           </div>
        </div>


        
                </div>

                  <div class="my-5 py-5 col-12">

                </div>
       
                  
            

               </div>
               
            
                   

        </div>
            <!--  textarea -->
         <div class="fixed-bottom col-lg-10 py-1 d-md-block d-none offset-lg-1" style="font-family:BodyFont;position:absolute;background:white; ">
         
      
           <div class=" py-1 my-0 d-flex  px-md-2 px-1 flex-row" style="width:100%;align-items:center; justify-content:center;">
              
                  <textarea ref="textBottom"  style="font-size:13px;height:50px;"  placeholder="Type here..."  v-model="contentInWord"   ></textarea>

                  <v-btn icon class="mx-md-1" @click="saveComment" :loading="loading"><v-icon>las la-send</v-icon> </v-btn>
           </div>
            
        
        </div>

         <div class="fixed-bottom d-md-none d-block " style="font-family:BodyFont;position:fixed; width:100%; background:white;">
         
      
           <div class=" py-1 my-0 d-flex  px-md-2 px-1 flex-row" style="width:100%;align-items:center; justify-content:center;">
              
                  <textarea ref="textBottom"  style="font-size:13px;height:45px;"  placeholder="Type here..." v-model="contentInWord"   ></textarea>

                  <v-btn icon class="mx-md-1"  @click="saveComment" :loading="loading"><v-icon>las la-send</v-icon> </v-btn>
           </div>
            
        
        </div>
      <!-- ends  -->
        <!-- ends -->

        

    </div>
</template>
<script>
export default {
     data(){
        return{
          that:this,
          loading:false,
          contentInWord:'',
          comments:[]

        }
    },
    mounted:function(){
      this.fetchComments();
    },
    methods:{
       fetchComments(){
          axios.get('/fetch-challenge-comments/' + this.$route.params.challenge_id)

        .then(
          response=>{
            if(response.status == 200){
             
         
           this.comments = response.data.comments;
            
            }else{
               console.log(response.status)
            }
          }
        )
        .catch(error => {
            
          })
       },
        saveComment:function(){
       this.loading = true;
     axios.post('/save-challenge-comment',{
      'duel_id':this.$route.params.challenge_id,
       'content': this.contentInWord,
       'is_reply': this.$root.is_reply_comment,
       'replied_comment_id': this.$root.replyCommentId
     })
      .then(response => {

      if (response.status == 200) {

         this.$root.replyCommentId = 0;
         this.$root.is_reply_comment = false;
          this.contentInWord ='';

          this.comments.unshift(response.data.comment)

          
this.loading = false;

     }


     })
     .catch(error => {
          
   this.loading = false;
     })
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
     likeComment:function(comment){
          
          if(comment.liked_by_user){
          return;
        }

         axios.post( '/save-liked-challenge-comment',{
            "comment_id": comment.id
          })
      .then(response => {
      
      if (response.status == 200) {
        
           
       

         this.comments.map((eachcomment)=> {
            if(eachcomment.id ==  comment.id){
                eachcomment.liked_by_user = true;
              eachcomment.likes = parseInt(eachcomment.likes)  + 1;
            }
         });
        
        
     }
       
     
     })
     .catch(error => {
    
     }) 

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

       
    },
}
</script>
<style scoped>
textarea {
    font-size:13px; 
    background:white;
    width:100%; 
    height: 60px;
    max-height: 75px;
    padding: 6px 6px;
    resize:none; 
    overflow-x: hidden;
    border-radius:7px;
     overflow-y: auto;
    border:1px solid #e6e6e6; 
    border-radius:2px;
}

.scroller::-webkit-scrollbar-thumb {
  background-color: #3C87CD;
  outline: 1px solid #3C87CD;
}
.scroller::-webkit-scrollbar {
  width: 5px;
}
</style>