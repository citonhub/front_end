<template>
 <div class="row px-0" >
      <!-- top bar -->

      <v-card tile class="col-lg-6 offset-lg-3 py-1 py-md-2  d-flex flex-row flex-wrap px-md-2 px-1"
       style="background:white;position:fixed;z-index:99999999;top:0%;">
       
        <div class="col-10 py-0 px-0 d-flex flew-row" >
           <template v-if="this.$root.selectedPost.user">

              <div  @click.stop="goToProfile(that.$root.selectedPost.user.username)"  class="mr-2" :style="imageStyleUser(35,this.$root.selectedPost.user)"
            >
         </div> 
     

           </template>
          
       <div class="d-flex " style="align-items:center;">

             <template v-if="this.$root.selectedPost.user">

           <span style="font-size:14px; font-family:MediumFont;cursor:pointer;" @click.stop="goToProfile(that.$root.selectedPost.user.username)" >
              {{this.$root.selectedPost.user.username}}   <img :src="getUserLevel(that.$root.selectedPost.user.points)" class="mx-1" height="22px">
            </span>
             </template>
               
            
        </div>
        </div>

  
        <div class="col-2 py-0 px-0 text-right">

            <v-btn icon @click.stop="goBack" >
                      <v-icon>mdi mdi-close</v-icon>
                    </v-btn>

        </div>


         <!-- pages loader -->

      <div  class="col-lg-12 py-1 px-0 mb-1" :style=" !$screen.lg || !$screen.md ? 'height:200px;' : 'height:250px;'">



        <template v-if="loadingPost">

            <div  class="col-12 d-flex " style="position:absolute; height:100%; align-items:center; justify-content:center;  background:white;border:1px solid #c5c5c5; border-radius:7px;">
               <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>
               </div>

         </template>

         <template v-if="this.$root.selectedPost.link">

              <template v-if="projectLinkFullContent == ''">

                 <div  class="col-12 d-flex " style="position:absolute; height:100%; align-items:center; justify-content:center;  background:white;border:1px solid #c5c5c5; border-radius:7px;">
               <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>
               </div>

              </template>

              <template v-else>

                    <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" v-if="supportedLink"
         :src="that.$root.selectedPost.project_url" 
   class="col-12 px-0 py-0" style="position:absolute; height:100%;  background:white;border:1px solid #c5c5c5; border-radius:7px;" id="mainIframe" ></iframe>

     <div  class="col-12 d-flex " v-if="!supportedLink" style="position:absolute; height:100%; align-items:center; justify-content:center;  background:whitesmoke;border:1px solid #c5c5c5; border-radius:7px;">
              <div style="font-size:14px;font-family:BodyText;">Oops! This project cannot be opened in an iframe. <a target="_blank" :href="this.$root.selectedPost.project_url">Click here to view project. </a> </div>
               </div>

              </template>

         </template>

         


         <template v-else> 

            <template v-if="pageContent == '' && loadingCode">

               <div  class="col-12 d-flex " style="position:absolute; height:100%; align-items:center; justify-content:center;  background:white;border:1px solid #c5c5c5; border-radius:7px;">
               <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>
               </div>

            </template>

           <template v-if="pageContent != '' && this.$root.selectedPost.project.project.is_web">

            <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" 
         :srcdoc="pageContent" 
   class="col-12  px-0 py-0" style="position:absolute; height:100%;  background:white;border:1px solid #c5c5c5; border-radius:7px;"  ></iframe>


   

           </template>

           <template v-if="pageContent != '' && !this.$root.selectedPost.project.project.is_web">

             <!-- for non-web content -->

          <div style="width:100%;height:100%;position:absolute;left:0%; background:black;border:1px solid #c5c5c5; border-radius:7px;">

    <textarea :value="pageContent"  readonly  class="col-12" style=" font-size:14px;  top:0; height:100%; left:0;   background:black; color:white;"  >
       
    </textarea>

          </div>

             
     <!-- ends -->
       
           </template>

         </template>

     

  
     <v-btn icon color="#ffffff" @click="showFullLoader = true" style="border-radius:0px; border-top-right-radius:7px;position:absolute;background: rgba(27, 27, 30, 0.4); right:0%; z-index:879;" 
           class="d-inline-block  "><v-icon>las la-expand</v-icon></v-btn>
      </div>
      

      <!-- ends -->
       
         
      </v-card>

      
      <!-- ends -->
       
       <div class="px-2 col-12 py-0">


    
      

   <div class="col-lg-6 offset-lg-3 py-2 px-0 mt-2 d-flex flex-column" :style=" !$screen.lg || !$screen.md ? 'margin-top:250px !important;' : 'margin-top:310px !important;'">
        <div class="d-md-block d-none" style="font-size:16px; font-family:MediumFont;">{{ this.$root.selectedPost.title }}</div>
        <div class="d-md-none d-block" style="font-size:14px; font-family:MediumFont;">{{ this.$root.selectedPost.title }}</div>

         <div  style="font-size:13px; font-family:BodyFont;">{{ this.$root.selectedPost.description }}</div>
      </div>


      <div class="col-lg-6 offset-lg-3 py-1 px-0 mt-2 d-flex flex-row" style="align-items:center; border-top:1px solid #c5c5c5;border-bottom:1px solid #c5c5c5;">

        <div class="d-flex flex-row">

          <div>
              <span style="font-size:13px;color:black;font-family:MediumFont;">{{ this.$root.selectedPost.likes }}</span> 
                 <span style="font-size:13px;font-family:BodyFont;" class="mx-1">Likes</span>
          </div>

           <div class="ml-1">
              <span style="font-size:13px;color:black;font-family:MediumFont;">{{ this.$root.selectedPost.comments }}</span> 
                 <span style="font-size:13px;font-family:BodyFont;" class="mx-1">Comments</span>
          </div>

        </div>

         <div class="d-flex flex-row ml-auto">

         

             <v-btn icon @click="sharePost" >
                    
                      <v-icon style="font-size:25px;">mdi mdi-share-variant</v-icon>
                    </v-btn>

        <v-btn icon @click="pinPost" v-if="!this.$root.selectedPost.link">
                      <v-icon style="font-size:25px;color:#3C87CD;" v-if="this.$root.selectedPost.isPinned == 1">lar la-thumbtack</v-icon>
                      <v-icon style="font-size:25px;" v-else>las la-thumbtack</v-icon>
                    </v-btn>
                    
           <v-btn icon @click="likePost" >
                       <i :class="this.$root.selectedPost.isLiked == 1 ? 'las la-heart' : 'lar la-heart'" :style="this.$root.selectedPost.isLiked ? 'font-size:25px; color: #ff6666;' : 'font-size: 25px;'" ></i>
                  </v-btn>

        </div>

      </div>


      <!-- view source -->
         <!-- <div class="col-lg-6 offset-lg-3 px-2 mt-2 " v-if="!this.$root.selectedPost.link">
            <div class="row">

              <div class="col-12 px-0 py-0 text-right">
        <v-btn  @click="goToProject(that.$root.selectedPost.project.project)" 
        color="#3C87CD" outlined rounded  small style="text-transform:none;font-size:12px;font-family:MediumFont;">View source <v-icon class="ml-1">mdi-launch mdi-18px</v-icon></v-btn>
              </div>

            </div>
       
      </div> -->
      <!-- ends -->

    
       </div>


         <!-- comment textarea -->
         <div class="col-lg-6 offset-lg-3 py-0 px-0 " style="font-family:BodyFont;background:white;">
           
           <template v-if="replyCommentIsOn">
                
                <div>
                   <div class="px-2" >

                  <div class=" py-2 px-2  text-left mb-1"  style="background:#3C87CD; border:1px solid transparent; border-radius:8px;" >

                     <div class="col-12 py-1 px-1  text-right">
                  <span class="msgTextReplynew text-left d-block" style="color:white; white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" >
                  {{repliedComment.content}}
                  </span>

              </div>
              </div>
                  <div style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn @click="closeComment" icon><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                </div>
                </div>


           </template>
             
           <div  class="col-12  py-2 my-0 d-flex  px-2 flex-row" style="align-items:center; justify-content:center;" >
            
                  <textarea ref="textBottom"  style="font-size:13px;"  placeholder="Type your comment" class="textarea"   v-model="commentValue"></textarea>

                  <v-btn icon class="mx-md-1" @click="postComment" @keyup.enter="postComment" :loading="sendingComment" ><v-icon>las la-send</v-icon> </v-btn>
           </div>
            
          
        </div>

        
      <!-- ends  -->

       <!-- comment list -->
         <div class="col-lg-6 offset-lg-3 px-0 px-md-3 commentScroller scroller"   style="border-top:1px solid #c5c5c5;background:whitesmoke;
         font-family:BodyFont;height:auto;">
         <div class="row">
           

            <template v-if="loadingPostComments">
              <div class="d-flex col-12" style="position:absolute; overflow-y:hidden;background:whitesmoke; height:250px;left:0%;align-items:center; justify-content:center;">

                  <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

              </div>

            </template>

            <template v-else> 

                
                <template v-if="comments.length == 0">

                   
                    <div class="d-flex col-12" style="position:absolute; background:whitesmoke; overflow-y:hidden; height:250px; left:0%;align-items:center; justify-content:center;">

                <span style="font-size:13px;font-family:BodyFont;">No comment yet, be the first to comment</span>

              </div>


                </template>

                <template v-else>

                     <DynamicScroller
    :items="comments"
     :keyField="'id'"
    :min-item-size="36"
   
    ref="commentScrollerPost"
    :buffer="5000"
   id="commentScrollerPost"
      class="col-12 px-1  " 
       style="position:absolute; overflow-y:auto; top:0%; height:auto;left:0%;background:whitesmoke;"
        >

    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem
        :item="item"
        :active="active"
        :size-dependencies="[
         item.content
        ]"
        :data-index="index"
      >


     
        <comment-post :source="item" :username="that.$root.username" ></comment-post>

          </DynamicScrollerItem>
             </template>

           
            

                </DynamicScroller>

                </template>


            
            </template>
          
          

         </div>
        </div>

      

     
      <!-- ends -->

        <!-- comment textarea -->
       <!--  <div class="col-lg-6 offset-lg-3 py-0 px-0 fixed-bottom" style="z-index:999999999999;font-family:BodyFont;background:white;">
           
           <template v-if="replyCommentIsOn">
                
                <div>
                   <div class="px-2" >

                  <div class=" py-2 px-2  text-left mb-1"  style="background:#3C87CD; border:1px solid transparent; border-radius:8px;" >

                     <div class="col-12 py-1 px-1  text-right">
                  <span class="msgTextReplynew text-left d-block" style="color:white; white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" >
                  {{repliedComment.content}}
                  </span>

              </div>
              </div>
                  <div style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn @click="closeComment" icon><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                </div>
                </div>


           </template>
             
           <v-card tile class="col-12  py-2 my-0 d-flex  px-2 flex-row" style="align-items:center; justify-content:center;" >
            
                  <textarea ref="textBottom"  class="textarea" style="font-size:13px;"  placeholder="Type your comment"    v-model="commentValue"></textarea>

                  <v-btn icon class="mx-md-1" @click="postComment" @keyup.enter="postComment" :loading="sendingComment" ><v-icon>las la-send</v-icon> </v-btn>
           </v-card>
            
          
        </div>-->

        
      <!-- ends  -->

       <!-- full loader -->

       <div v-if="showFullLoader" style="position:fixed;z-index:999999999999999; height:100%;width:100%; top:0; left:0;background:white;">

           <div  class="d-flex flex-column" style="position:absolute;width:100%;height:100%;">

               
        
        <div style="height:100%;" class="col-12 px-0 py-0">

           <div class="col-12 px-1 py-1 pt-0  d-flex flex-row" style="background:white; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 py-0 px-0">
              <v-btn icon @click="showFullLoader = false">
                      <v-icon>mdi mdi-close</v-icon>
                    </v-btn>
            </div>


          
             <div class=" py-0 text-center " style="white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">
             <span style="font-size:14px; font-family:MediumFont;">{{ this.$root.selectedPost.title }}</span>
          </div>

          <div class="ml-auto d-flex flex-row">

            <div class="px-1" v-if="!that.$root.selectedPost.link">
          
                       <v-btn icon   @click="goToProject(that.$root.selectedPost.project.project)"  ><v-icon style="font-size:20px;">las la-laptop-code</v-icon> </v-btn>
                  
          </div>

            <div class="px-1" v-if="that.$root.selectedPost.project.project">
             <template v-if="that.$root.selectedPost.project.project.is_web">
                       <v-btn icon  @click="showFullPage" ><v-icon style="font-size:20px;">mdi mdi-launch</v-icon> </v-btn>
                     </template>
          </div>

          <div class="px-1" v-else>
             <template v-if="that.$root.selectedPost.link">
                       <v-btn icon  @click="showFullPage" ><v-icon style="font-size:20px;">mdi mdi-launch</v-icon> </v-btn>
                     </template>
          </div>
            
          </div>
          


        </div>


           <template v-if="this.$root.selectedPost.link">

            <template v-if="projectLinkFullContent == ''">

                 <div  class="col-12 d-flex " style="position:absolute; height:100%; align-items:center; justify-content:center;  background:white;border:1px solid #c5c5c5; border-radius:7px;">
               <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>
               </div>

              </template>

              <template v-else>

                    <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" v-if="supportedLink"
         :src="that.$root.selectedPost.project_url" 
   class="col-12 px-0 py-0" style="position:absolute; height:100%;  background:white;border:1px solid #c5c5c5;" id="mainIframe" ></iframe>

     <div  class="col-12 d-flex " v-if="!supportedLink" style="position:absolute; height:100%; align-items:center; justify-content:center;  background:whitesmoke;border:1px solid #c5c5c5;">
              <div style="font-size:14px;font-family:BodyText;">Oops! This project cannot be opened in an iframe. <a target="_blank" :href="this.$root.selectedPost.project_url">Click here to view project. </a></div>
               </div>

              </template>


         </template>


       


         <template v-else> 

            <template v-if="pageContent == '' && loadingCode">

               <div  class="col-12 d-flex " style=" height:100%; align-items:center; justify-content:center;  background:white;border:1px solid #c5c5c5; border-radius:7px;">
               <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>
               </div>

            </template>

           <template v-if="pageContent != '' && this.$root.selectedPost.project.project.is_web">

            <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" 
         :srcdoc="pageContent" 
   class="col-12  px-0 py-0" style=" height:100%;  background:white;border:1px solid #c5c5c5; "  ></iframe>


   

           </template>

           <template v-if="pageContent != '' && !this.$root.selectedPost.project.project.is_web">

             <!-- for non-web content -->
  <div style="width:100%;height:100%;position:absolute;left:0%; background:black;border:1px solid #c5c5c5; border-radius:7px;">

                            <textarea :value="pageContent"  readonly class="col-12"  style=" font-size:14px;  top:0; height:100%; left:0; position:absolute;  background:black; color:white;"  >
       
    </textarea>

          </div>
     <!-- ends -->
       
           </template>

         </template>


         

        </div>
             
    

           </div>



      </div>

      <!-- ends -->




 </div>
</template>
<script>
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
Vue.component('DynamicScroller', DynamicScroller)
Vue.component('DynamicScrollerItem', DynamicScrollerItem)

import VueScreen from 'vue-screen'
Vue.use(VueScreen, 'bootstrap')


 const CommentPost = () => import(
    /* webpackChunkName: "CommentPost" */ './comment.vue'
  );
export default {
  data () {
    return {
      post: '',
      is_reply: false,
      commentValue: '',
      commentRules: [
        v => !!v || 'Body is required',
        v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character'
      ],
      id: this.$root.currentPost,
      loadingPost:false,
      that: this,
       pageContent:'',
       loadingCode: false,
      showFullLoader:false,
       selectedLangId:'',
       comments:[],
       loadingPostComments:false,
       sendingComment:false,
       replyCommentIsOn: false,
       repliedComment:[],
       panelData:[],
       projectLinkFullContent:'',
       supportedLink:true,
    }
  },
  components:{
   CommentPost
  },
  mounted () {

      this.$root.componentIsLoading = false;
    this.$root.selectedPost = [];
       this.fetchPost();
       this.$root.projectViewComponent = this;

        this.$root.autoOpenPost = false;
  },
  methods:{
    monitorLink:function(){

         axios.post( '/run-project-link',
         {
           project_url: this.$root.selectedPost.project_url
         })
      .then(response => {

      if (response.status == 200) {

      

        if(response.data.status == 'allowed'){
          
           this.supportedLink = true;
           this.projectLinkFullContent = 'working';
        }else{
          this.supportedLink = false;
           this.projectLinkFullContent = 'false';
        }
     }


     })
     .catch(error => {

          this.showAlert('Oops!','Unable to load page content','error');

            this.supportedLink = false;
           this.projectLinkFullContent = 'false';

     })

    },
     showFullPage:function(){

        if(this.$root.selectedPost.project.project){

           if(this.$root.selectedPost.project.project.is_web){


           window.open('/run-panel/' + this.$root.selectedPost.project.project.panel_id , '_blank');

        }


        }

       
        if(this.$root.selectedPost.link){

           window.open(this.$root.selectedPost.project_url , '_blank');
          
        }

       

     },
     showReplyAction: function(comment){
           this.replyCommentIsOn = true;
            this.repliedComment = comment;
            this.is_reply = true;
     },
     closeComment:function(){

        this.replyCommentIsOn = false;
            this.repliedComment = [];
             this.is_reply = false;

     },
      goBack() {
        // this.viewProjectModal = false;
        this.$root.showViewPost = false;

         if( this.$root.fromProfile){

              this.$router.push({ path:'/profile-view/' + this.$root.fromProfileUsername})

               this.$root.fromProfile = false;
         }
         else{
         

              this.$router.push({ path:'/hub'})
         }
       
        },
     goToProfile:function(username){
        this.$root.selectedUsername = username;
         this.$router.push({ path:'/profile-view/' + username})
      },
     fetchComments:function(postId){

        this.loadingPostComments = true;
         axios.get( '/comments/' + postId)
      .then(response => {
      
      if (response.status == 200) {
        
           
         this.comments = response.data.data;

          this.comments.map((eachcomment)=>{
            
                eachcomment.tagged =false;
             
           })

       
        
        this.loadingPostComments = false;

     

        
     }
       
     
     })
     .catch(error => {
      this.loadingPostComments = false;
     }) 
       
        
     },
     scrollToComment:function(comment){

           let commentData = this.comments.filter((eachcomment)=>{
             return comment.id == eachcomment.id;
           })
           
            if(commentData.length > 0){

               let fullComment = commentData[0];
                
                let commentIndex = this.comments.indexOf(fullComment);

               

                this.$refs.commentScrollerPost.scrollToItem(commentIndex);

                  this.comments.map((eachcomment)=>{
             if( comment.id == eachcomment.id)
             {
                eachcomment.tagged = true;
             }
           })


           setTimeout(() => {

              this.comments.map((eachcomment)=>{
             if( comment.id == eachcomment.id)
             {
                eachcomment.tagged =false;
             }
           })
             
           }, 2000);

            }

         
            
           


     },
 
    goToProject:function(project){
      this.$root.componentIsLoading = true;
        this.$root.viewFromPost = true;
        this.$root.showViewPost = false;
        this.$root.showProfileView = false;
       this.$router.push({ path: '/board/projects/panel/' + project.project_slug });

    },
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
      likeComment:function(comment){
          
          if(comment.liked_by_user){
          return;
        }

         axios.post( '/like-hub-post-comment',{
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
      scrollToBottom:function(){


       this.$refs.commentScrollerPost.scrollToBottom();
          

      },
     shortenContent: function(content,limit){

             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
     postComment () {
      if (this.commentValue != '') {

         this.sendingComment = true;

         let hub_post_comment_id=''
         
          if(this.is_reply){

              hub_post_comment_id = this.repliedComment.id

          }
          let formData = new FormData();
        formData.append('post_id', this.$root.selectedPost.id);
        formData.append('comment', this.commentValue);
        formData.append('is_reply', this.is_reply);
        formData.append('hub_post_comment_id',hub_post_comment_id);

        axios.post('/comment-hub-post', formData)
          .then((response) => {
            if (response.status == 201) {


               let Newcomment = response.data.data;

                Newcomment.tagged = false;

                
                this.comments.unshift(Newcomment);

              

                this.closeComment();

                  setTimeout(() => {

           this.scrollToBottom();
           
         }, 500);

               this.sendingComment = false;

                 this.commentValue = '';

             this.$root.posts.map((post)=>{
                  if(post.id == this.$root.selectedPost.id){
    
                     post.comments += 1;
    
                  }
           });
              
            }
          })
          .catch(error => {

             this.showAlert('Oops!', 'Something went wrong,please try again','error');
    
            }) 
      } else {
        this.showAlert('Oops!', 'Comment Cannot be empty','error');
      }


     },

     likePost(){

         if(this.$root.selectedPost.isLiked) return;

           this.$root.selectedPost.likes += 1;

         this.$root.posts.map((post)=>{
                  if(post.id == this.$root.selectedPost.id){
    
                     post.likes += 1;
    
                  }
           });

      let formData = new FormData();
      formData.append('post_id', this.$root.selectedPost.id)

         axios.post('/like-hub-post', formData)
      .then((response) => {
        if (response.status == 204) {
          if (response.data == "liked") {
            this.$root.selectedPost.isLiked = 1
          }
        } else {
          if (response.data == "Post Liked Already") {
            this.showAlert('Oops!', response.data,'error');
          } else if (response.data == "liked") {
            this.$root.selectedPost.isLiked = 1
          }
        }

      

     
      })


     },
     sharePost:function(){
          
          this.$root.shareLink =  'https://link.citonhub.com/post/'+ this.$root.selectedPost.post_id;

          this.$root.shareText = 'Check out this project on Citonhub';
          
          this.$root.infoText = 'Share this project with others';

          this.$root.alertComponent =  this;

         

          this.$root.showInvitation = true;
     },

     pinPost(){
         if(this.$root.selectedPost.isPinned) return;

          this.$root.selectedPost.pinned += 1;

        let formData = new FormData();
        formData.append('post_id', this.$root.selectedPost.id)

         axios.post('/pin-hub-post', formData)
      .then((response) => {
        if (response.status == 201) {
          if (response.data == "pinned") {
            this.$root.selectedPost.isPinned = 1
          }
        } else {
          if (response.data == "Post Pinned Already") {
            this.showAlert('Oops!', response.data,'error');
          } else if (response.data == "pinned") {
            this.$root.selectedPost.isPinned = 1
          }
        }

        
      })

     },

     showPage: function(){
          this.pageContent = '';
          this.loadingCode = true;
         
          this.selecetedPanelId = this.$root.selectedPost.project.project.panel_id;

            if(this.$root.selectedPost.project.project.is_web){

               this.loadPageContent(this.selecetedPanelId);

            }else{
                  
                 let status =  this.$root.checkCodeForInput(this.$root.selectedPost.project.project_files.code_files[0].content,this.panelData.panel_language);

                if(status == 'present'){
                  return;
                } 


              this.pageContent = 'sending to sandbox...';

              this.runCodeOnSandbox(null);
            }

        },
         loadPageContent: function(panelId){
         axios.get( '/run-panel/' + panelId)
      .then(response => {

      if (response.status == 200) {

        this.loadingCode = false;
       this.pageContent = response.data;



     }


     })
     .catch(error => {

          this.showAlert('Oops!','Unable to load page content','error');

     })
     },
       showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
       timeout:2000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'success'){
         iziToast.success(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
        timeout:2000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'warning'){

          iziToast.warning(
        { 
       title: title,
       message: message,
        timeout:2000,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'error'){
         iziToast.error(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
        timeout:2000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       

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
    checkResponse:function(token){

        let _this = this;

      
                axios.post( '/check-for-submission',{
               token: token,
                langId: _this.selectedLangId
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

            

              if(response.data[0].status.description == 'Accepted'){

                 

                  _this.pageContent =  response.data[0].stdout;

                  
                 


              }else if(response.data[0].status.description == 'In Queue'){

                 _this.pageContent = 'In Queue...';

                   _this.checkResponse(response.data[0].token);

              }else if(response.data[0].status.description == 'Processing'){

                 _this.pageContent = 'Processing...';

                   _this.checkResponse(response.data[0].token);

              }else{

                 _this.pageContent = response.data[0].stdout +  '\n Error: \n'  + response.data[0].stderr + ' \n' + response.data[0].compile_output + 
                 '\n' + response.data[0].error;
               

              }


              if(_this.$root.codeBoxOpened == false){
                
              }

              

       

         
               _this.recheckCodeBox = true;

          }

          
            
          })
          .catch(error => {

             
             
               _this.pageContent = 'An issue occured,unable to run on sandbox...';

               
             
          })


        

      },
      runCodeOnSandbox: function(codeContent){

          axios.post( '/run-code-on-sandbox-project',{
                panel_id: this.selecetedPanelId,
                code_content: codeContent
                  })
          .then(response => {
             
          
          if(response.status == 200){

          
             let token = response.data[0][0].token;

        
              if(response.data[0][0].status.description == 'Accepted'){

                  this.pageContent =  response.data[0][0].stdout ;

                
                

              }else if(response.data[0][0].status.description == 'In Queue'){

                 this.pageContent = 'In Queue...';
                 this.checkResponse(token,response.data[1]);

              }else if(response.data[0][0].status.description == 'Processing'){

                 this.pageContent = 'Processing...';

                 this.checkResponse(token,response.data[1]);

              }else{

                

                this.pageContent =  response.data[0].stdout +  '\n Error: \n'  + response.data[0].stderr + ' \n' + response.data[0].compile_output + 
                 '\n' + response.data[0].error;

              }


          }
            
          })
          .catch(error => {

            
             
               this.pageContent = 'An issue occured,unable to run on sandbox...';

                
              
          })

          
      },
    fetchPost:function(){
                    

      let currentPostid = '';

       if(this.$route.params.post_id){
         currentPostid = this.$route.params.post_id;
       }else{
          currentPostid = this.$root.currentPost;
       }

     

       this.loadingPost  = true;

             let storedPostData = this.$root.getLocalStore('post_data_new_' +   currentPostid + this.$root.username);

            storedPostData.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);

                  
                     
                      this.$root.selectedPost = finalResult;

                             

                       this.panelData = this.$root.selectedPost.project.project_panel;
                      
                        this.fetchComments(this.$root.selectedPost.id)

                      
                 
                   this.loadingPost  = false;
                     
               this.updatePost();



                  if(!this.$root.selectedPost.link){

                         this.showPage();

                       }else{
                         this.monitorLink();
                       }

                

                 }else{

                       
                 
           
            axios.get( '/fetch-post/' +  currentPostid)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('post_data_new_' +   currentPostid + this.$root.username,response.data.data);
        
           this.$root.selectedPost = response.data.data;
          
           if(!this.$root.selectedPost.link){

                         this.showPage();

                       }else{
                         this.monitorLink();
                       }

                       this.panelData = this.$root.selectedPost.project.project_panel;

                    

                        this.fetchComments(this.$root.selectedPost.id)

         this.loadingPost = false;
       
     }
       
     
     })
     .catch(error => {

        this.loadingPost = false;
    
     }) 

                 }
            })

    },
    updatePost:function(){

       axios.get( '/fetch-post/' + this.$route.params.post_id)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('post_data_new_' +  this.$route.params.post_id + this.$root.username,response.data.data);
        
           this.$root.selectedPost = response.data.data;
     }
       
     
     })
     .catch(error => {

    
     }) 

    },
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
   
   
  }
}
</script>
<style scoped>

.textarea {
    font-size:13px; 
    background:whitesmoke;
    width:100%; 
    height: 45px;
    max-height: 75px;
    padding: 6px 6px;
    resize:none; 
    overflow-x: hidden;
     overflow-y: auto;
  
    border-radius:2px;
}

.msgTextReplynew{
  font-size: 13px;
  color: #4d4d4d;
}
.scroller::-webkit-scrollbar-thumb {
  background-color: #3C87CD;
  outline: 1px solid #3C87CD;
}
.scroller::-webkit-scrollbar {
  width: 5px;
}
</style>