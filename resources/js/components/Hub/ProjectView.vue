<template>
 <div class="row px-2">
      <!-- top bar -->

      <div class="col-lg-6 offset-lg-3 py-1 fixed-top d-flex flex-row px-1"
       style="position:sticky;background:white;z-index:99999999;border-bottom:1px solid #c5c5c5;top:0%;">
       
        <div class="col-6 py-0 px-0 d-flex flew-row" >
           <template v-if="this.$root.selectedPost.user">

              <div    class="mr-2" :style="imageStyleUser(35,this.$root.selectedPost.user)"
            >
     </div> 
     

           </template>
          
       <div class="d-flex " style="align-items:center;">

             <template v-if="this.$root.selectedPost.user">

           <span style="font-size:14px; font-family:MediumFont;">
              {{this.$root.selectedPost.user.username}}   <img :src="getUserLevel(this.$root.selectedPost.user.points)" class="mx-1" height="22px">
            </span>
             </template>
               
            
        </div>
        </div>

  
        <div class="col-6 py-0 px-0 text-right">

             <v-btn icon @click="pinPost">
                      <v-icon style="font-size:25px;" v-if="this.$root.selectedPost.isPinned == 1">lar la-thumbtack</v-icon>
                      <v-icon style="font-size:25px;" v-else>las la-thumbtack</v-icon>
                    </v-btn>
            <span style="font-size:12px;color:grey;">{{ this.$root.selectedPost.pinned }}</span>

          <v-btn icon >
                       <i :class="this.$root.selectedPost.isLiked == 1 ? 'las la-heart' : 'lar la-heart'" :style="this.$root.selectedPost.isLiked ? 'font-size:25px; color: red;' : 'font-size: 25px;'" @click="likePost"></i>
                    </v-btn>
             <span style="font-size:12px;color:grey;">{{ this.$root.selectedPost.likes }}</span>
        </div>
       
         
      </div>

      
      <!-- ends -->

      <div class="col-lg-6 offset-lg-3 mt-2 px-0 text-center">
        <span class="d-md-block d-none" style="font-size:17px; font-family:MediumFont;">{{ this.$root.selectedPost.title }}</span>
        <span class="d-md-none d-block" style="font-size:14px; font-family:MediumFont;">{{ this.$root.selectedPost.title }}</span>
      </div>

      <!-- pages loader -->

      <div  class="col-lg-6 offset-lg-3 py-2 px-0 pt-1 mt-1" style="height:450px;">

         <template v-if="this.$root.selectedPost.link">

              <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" 
         :src="this.$root.selectedPost.project_url" 
   class="col-12 px-0 py-0" style="position:absolute; height:100%;  background:white;border:1px solid #c5c5c5; border-radius:7px;"  ></iframe>

         </template>


         <template v-else> 

            <template v-if="pageContent == '' && loadingCode">

               <div  class="col-12 d-flex " style="position:absolute; height:100%; align-items:center; justify-content:center;  background:white;border:1px solid #c5c5c5; border-radius:7px;">
               <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>
               </div>

            </template>

           <template v-if="pageContent != '' && this.$root.selectedPost.project.is_web">

            <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" 
         :srcdoc="pageContent" 
   class="col-12  px-0 py-0" style="position:absolute; height:100%;  background:white;border:1px solid #c5c5c5; border-radius:7px;"  ></iframe>

           </template>

           <template v-if="pageContent != '' && !this.$root.selectedPost.project.is_web">

             <!-- for non-web content -->
   <textarea  readonly class="col-12" style=" font-size:14px;position:absolute; height:100%;  background:white;border:1px solid #c5c5c5; border-radius:7px;"  >
       
    </textarea>

     <!-- ends -->
       
           </template>

         </template>

     

  
     <v-btn icon color="#ffffff" @click="showFullLoader = true" style="border-radius:0px; border-top-right-radius:7px;position:absolute;background: rgba(27, 27, 30, 0.4); right:0%; z-index:879;" 
           class="d-inline-block  "><v-icon>las la-expand</v-icon></v-btn>
      </div>
      

      <!-- ends -->
      

      <!-- view source -->
         <div class="col-lg-6 offset-lg-3 px-2 mt-3 text-right">
        <v-btn v-if="this.$root.selectedPost.project" color="#3C87CD" small style="text-transform:none;color:white;font-size:12px;font-family:BodyFont;">View source <v-icon class="ml-1">mdi-launch mdi-18px</v-icon></v-btn>
      </div>
      <!-- ends -->


       <!-- descriptions -->
         <div class="col-lg-6 offset-lg-3 px-2 mt-3 text-left">
          <p style="font-size:14px;font-family:BodyFont;">
             {{ this.$root.selectedPost.description }}
          </p>
      </div>
      <!-- ends -->



       <!-- comments -->
         <div class="col-lg-6 offset-lg-3 px-1 mt-1 " style="border-bottom:1px solid #c5c5c5;">
         <div style="font-size:16px; font-family:MediumFont;">Comments</div>
      </div>
      <!-- ends -->

       <!-- comment list -->
         <div class="col-lg-6 offset-lg-3 px-2 px-md-3 scroller" style="background:#E1F0FC;font-family:BodyFont;min-height:200px;max-height:500px;overflow-y:auto;overflow-x:hidden;">
         <div class="row">
           
            <div elevation-1 class="col-11 py-0 mt-2">
           <div class="row">
             <div class="col-lg-9 col-md-10   d-flex flex-row">
                  <div
                     style="border-radius:50%;height:30px;width:30px;background-color:#c5c5c5;background-image:url(/imgs/img2.jpg);background-size: cover;
                           background-repeat: no-repeat; border:1px solid transparent;"></div>

                  <v-card elevation-1 class="py-1 px-2 ml-2" style="max-width:80%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-left-radius:0px;">

                    <div class="d-flex" style="align-items:center;">
                         <span style="font-size:13px;font-weight:bold; " class="mr-1">Bisola23</span>  <i class="las la-award" style="font-size:20px;color:#ef476f;" ></i> 
                  </div>
                      <span style="font-size:13px;">Lorem ipsum dolor sit amet consectetur </span>
                       <div class="text-right">
                         <span style="font-size:11px; color:grey;">3:14 PM</span>
                  </div>
                  </v-card> 
             </div>
             <div style="padding-left:45px;align-items:center;" class="col-12 py-0 d-flex">
                <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">231</span>
                </span>
             </div>
           </div>
        </div>

            <div elevation-1 class="col-11 py-0 offset-1">
           <div class="row">
             <div class="col-lg-9 col-md-10  offset-lg-3 offset-md-2 d-flex flex-row-reverse">
                  <div
                     style="border-radius:50%;height:30px;width:30px;background-color:#c5c5c5;background-image:url(/imgs/img3.jpg);background-size: cover;
  background-repeat: no-repeat; ;border:1px solid transparent;"></div>

                  <v-card elevation-1 class="py-1 px-2 mr-2" style="max-width:80%;  border:1px solid transparent; min-width:150px;background:#3C87CD; border-radius:7px; border-bottom-right-radius:0px;">
                      <span style="color:white;font-size:13px;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                       
                  <!-- time -->
                  <div class="text-right">
                         <span style="color:white;font-size:11px; ">3:14 PM</span>
                  </div>
                  <!-- ends -->
                  </v-card> 

                 
             </div>
             <div style="padding-right:45px;" class="col-12 text-right py-0">
                <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">231</span>
                </span>
             </div>
           </div>
        </div>

         </div>
        </div>
      <!-- ends -->

        <!-- comment textarea -->
         <div class="col-lg-6 offset-lg-3 px-2 py-1" style="z-index:999999999999;background:white;font-family:BodyFont;">
         
          <div class="row px-md-3 py-0">
           <div class="col-12 py-1 my-0 d-flex px-md-2 px-2 flex-row" style="align-items:center; justify-content:center;">
               <v-btn icon class="mx-md-1"><v-icon>las la-grin</v-icon> </v-btn>
  
                  <textarea ref="textBottom"  style="font-size:13px;"  placeholder="please,be nice"   :rules="commentRules" v-model="commentValue"></textarea>

                  <v-btn icon class="mx-md-1" @click="postComment" @keyup.enter="postComment"><v-icon>las la-send</v-icon> </v-btn>
           </div>
            
          </div>
        </div>
      <!-- ends  -->

       <!-- full loader -->

       <div v-if="showFullLoader" style="position:fixed;z-index:999999999999999; height:100%;width:100%; top:0; left:0;background:white;">

           <div  class="d-flex flex-column" style="position:absolute;width:100%;height:100%;">

               
        
        <div style="height:100%;" class="col-12 px-0 py-0">

           <div class="col-12 px-1 py-1 pt-0  d-flex flex-row" style="background:white; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 py-0 px-0">
              <v-btn icon @click="showFullLoader = false">
                      <v-icon>mdi mdi-close</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-0 text-center">
             <span style="font-size:14px; font-family:MediumFont;">{{ this.$root.selectedPost.title }}</span>
          </div>

        </div>


           <template v-if="this.$root.selectedPost.link">

              <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" 
         :src="this.$root.selectedPost.project_url" 
   class="col-12 px-0 py-0" style=" height:100%;  background:white;border:1px solid #c5c5c5; "  ></iframe>

         </template>


         <template v-else> 

            <template v-if="pageContent == '' && loadingCode">

               <div  class="col-12 d-flex " style=" height:100%; align-items:center; justify-content:center;  background:white;border:1px solid #c5c5c5; border-radius:7px;">
               <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>
               </div>

            </template>

           <template v-if="pageContent != '' && this.$root.selectedPost.project.is_web">

            <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" 
         :srcdoc="pageContent" 
   class="col-12  px-0 py-0" style=" height:100%;  background:white;border:1px solid #c5c5c5; "  ></iframe>

           </template>

           <template v-if="pageContent != '' && !this.$root.selectedPost.project.is_web">

             <!-- for non-web content -->
   <textarea  readonly class="col-12" style=" font-size:14px; height:100%;  background:white;border:1px solid #c5c5c5; "  >
       
    </textarea>

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
    }
  },

  mounted () {
       this.fetchPost();
  },
  methods:{
     postComment () {
      if (this.commentValue != '') {
          let formData = new FormData();
        formData.append('post_id', this.$root.selectedPost.id);
        formData.append('comment', this.comment);
        formData.append('is_reply', this.is_reply);

        axios.post('/comment-hub-post', formData)
          .then((response) => {
            if (response.status == 201) {
              console.log(response);
            }
          })
      } else {
        this.showAlert('Oops!', 'Comment Cannot be empty','error');
      }
     },

     likePost(){
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

     pinPost(){
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
         
          this.selecetedPanelId = this.$root.selectedPost.project.panel_id;

            if(this.$root.selectedPost.project.is_web){

               this.loadPageContent(this.selecetedPanelId);

            }else{

                     this.runCodeOnSandbox();
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
       timeout:5000,
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
        timeout:5000,
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
        timeout:5000,
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
        timeout:5000,
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

                 _this.pageContent =  response.data[0].stdout +  '\n Error: \n'  + response.data[0].stderr ;

               

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
      runCodeOnSandbox: function(){

          axios.post( '/run-code-on-sandbox-project',{
                panel_id: this.selecetedPanelId,
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

                

                this.pageContent =  response.data[0][0].stdout + '\n Error: \n' + response.data[0][0].stderr ;

              }


          }
            
          })
          .catch(error => {

            
             
               this.pageContent = 'An issue occured,unable to run on sandbox...';

                
              
          })

          
      },
    fetchPost:function(){


       this.loadingPost  = true;

             let storedPostData = this.$root.getLocalStore('post_data_' +  this.$route.params.post_id + this.$root.username);

            storedPostData.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      this.$root.selectedPost = finalResult;

                       if(!this.$root.selectedPost.link){

                         this.showPage();

                       }
                 
                   this.loadingPost  = false;
              // this.updatePost();

                 }else{
            
           
            axios.get( '/fetch-post/' + this.$route.params.post_id)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('post_data_' +  this.$route.params.post_id + this.$root.username,response.data.data);
        
           this.$root.selectedPost = response.data.data;
          
           if(!this.$root.selectedPost.link){

                         this.showPage();

                       }

         this.loadingPost = false;
       
     }
       
     
     })
     .catch(error => {

        this.loadingPost = false;
    
     }) 

                 }
            })

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

    }
   
   
  }
}
</script>
<style scoped>

textarea {
    font-size:13px; 
    background:whitesmoke;
    width:100%; 
    height: 60px;
    max-height: 75px;
    padding: 6px 6px;
    resize:none; 
    overflow-x: hidden;
     overflow-y: auto;
    border:1px solid #e6e6e6; 
    border-radius:2px;
}

.scroller::-webkit-scrollbar-thumb {
  background-color: #3C87CD;
  outline: 1px solid #3C87CD;
}
.scrollerinfo::-webkit-scrollbar {
  width: 6px;
}
</style>