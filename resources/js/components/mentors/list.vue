<template>
<div>
 
    <div class="col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top" style="position:sticky; background:#F5F5FB; z-index:999999999999; border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5>:eaderboard</h5>
        </div>
         <div class="col-6  py-0 my-0 text-right">
              
         
                       
        </div>
      </div>
   </div>



    <!--notifications list view -->

  <div class="col-lg-10 offset-lg-1  py-0 pb-2 px-2 ">

        <div class="row ">

            <!-- spacer -->
         
           <div class="col-12 mt-5 mt-md-0 d-md-none d-block"> 

           </div>
     <!-- ends -->


        <template v-if="loading">


       <div  class="col-12 mt-4 text-center">

           <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

      </div>

        </template>

        <template v-else>



           <template v-if="mentors.length  == 0">

                <div  class="col-12 mt-md-4 text-center  mt-1 px-md-2 px-1">

          <div class="mb-3 px-3" style="font-size:13px;color:grey;font-family:BodyFont;">
                   
                    No users found

                    </div>

             </div>

           </template>

           <template v-else>
               
              
       <div class="col-lg-3 col-md-4 px-2 mb-2 pt-1 pt-md-2"  v-for="(mentor,index) in mentors" :key="index"
          >
        
          <v-card class="py-3 px-2 d-flex flex-column" style="align-items:center; justify-content:center;">
            
            <div class=" py-0 my-0 text-center">

                  <div :style="imageStyle(90,mentor)">
                    </div> 
                
            </div>

              <div class=" py-0 my-0 text-center mt-2">

                  <div style="font-size:14px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1 d-md-block d-none">{{mentor.name}} <img :src="getUserLevel(mentor.points)" class="mx-1" height="19px"></div>
                    <div style="font-size:13px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1  d-md-none d-block">{{mentor.name}} <img :src="getUserLevel(mentor.points)" class="mx-1" height="19px"></div>
                
            </div>

             <div class=" py-0 my-0 text-center">

                  <div style="font-size:13px;font-family:MediumFont;white-space: nowrap; overflow:hidden; color:grey; text-overflow: ellipsis;" class="pb-1 d-md-block d-none">{{mentor.points}} XP</div>
                    <div style="font-size:12px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;color:grey; " class="pb-1  d-md-none d-block">{{mentor.points}} XP</div>
                
            </div>

            

                <div class="col-12 py-0 mt-3 px-1 text-center">
                       <v-btn small  @click="showProfile(mentor.username)"  color="#3C87CD"  style="font-family:BodyFont;color:white;font-size:12px;text-transform:none;" class="mx-2 d-inline-block" >View profile</v-btn>
                           </div>

          </v-card>

          

          </div>

            <!--content loader-->


  <div class="text-center col-lg-12">
    <v-progress-circular
      indeterminate
      color="#3C87CD"
      style=" margin: 1rem;"
      v-if="loadingNext"
    ></v-progress-circular> 
     
     <div v-observe-visibility="loadNextSet" ></div> 

  
  </div>


                      <!--content loader ends-->

           </template>
         

        </template>
             
             
           

           

          <!-- spacer -->

          <div class="col-12 py-5 my-5">
          </div>

          <!-- ends -->

           

         
          

      
        
      </div>

  </div>




 <!-- ends -->

</div>
  
</template>

<script>

  const PointInfoBoard = () => import(
   /* webpackChunkName: "PointInfoBoard" */ '../chats/PointInfoBoard.vue'
  );

import VueObserveVisibility from 'vue-observe-visibility'

 export default {
    data () {
      return {
         mentors:[],
         loading:false,
         currentPage:1,
         newPage:1,
         newData:'',
         that:this,
           dataHasFinished:false,
       loadingNext:false
      }
     
    },
      components:{
     PointInfoBoard
    },
     mounted(){
     this.$root.showTopBar = true;

      this.$root.MentorPageComponent = this;
     
     this.getMentors();
  
    },

     methods:{
         showProfile:function(username){
             this.$root.selectedUsername = username;
         this.$router.push({ path:'/profile/' + username})
         },
         getMentors:function(){

                this.loading = true;

         axios.get( '/fetch-mentors' +'?page=' + this.currentPage)
      .then(response => {
      
      if (response.status == 200) {

       
        
           this.mentors = response.data.mentors;
          
        

         this.loading = false;
       
     }
       
     
     })
     .catch(error => {

        this.loading = false;
         this.showAlert('Oops!','Unable to fetch mentors,please try again','error')
    
     }) 


         },
  loadNextSet(shown){
 
   if(this.dataHasFinished) return;
        
if(shown){
    this.loadingNext = true;

  this.newPage+=1

console.log(this.newPage)

axios.get( '/fetch-mentors' + '?page=' + this.newPage )

.then(

response => {
      
      if (response.status == 200) {




       
        this.newData=response.data.mentors

          if(response.data.mentors.length == 0){
             this.dataHasFinished = true;
          }

    
this.mentors=  this.mentors.concat(this.newData)
       
    this.loadingNext = false;

 
       
     }
}

)

}





       }
         ,
             getUserLevel: function(points){
let imageUrl = '';
          
  if(points >= 0 && points <= 99){
    imageUrl += '/imgs/steel.svg'

  }
  else if(points >= 100 && points <= 199 ){

   imageUrl +='/imgs/bronze.svg'
  }
   else if(points >= 200 && points <= 299 ){ 
   
imageUrl += '/imgs/silver.svg' 
}
    else if(points >= 300 && points <= 399 ){ 

imageUrl += '/imgs/gold.svg'
   }
 else if(points >= 400 && points <= 499 ){ 
   
imageUrl +='/imgs/platinum.svg'
}
  else if(points >= 500 && points <= 599 ){ 
      
 imageUrl += '/imgs/diamond.svg'
}

  return imageUrl;

    },
      BecomeMentor:function(){

        this.$root.fromMentorPage = true;

       
    this.$root.showPointDetailsInfo = true

    },
         handleLanguageList:function(fullArray){

              if(fullArray.length <= 3){

                   return fullArray;

              }else{
         
             let firstThree = fullArray.slice(0,3);

              firstThree.push('...');


              return firstThree;

              }

         },
            showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
       position: 'bottomRight',
         timeout: 2000,
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
         timeout: 2000,
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
       zindex:'9999999999',
         timeout: 2000,
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
         timeout: 2000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'question'){

       }
     


    },
      imageStyle: function(dimension,data){

        
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
      
      },
     
  }
</script>
<style scoped>


  
</style>
