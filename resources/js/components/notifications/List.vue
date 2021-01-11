<template>
<div>
 
    <div class="col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top" style="position:sticky; background:#F5F5FB; z-index:999999999999; border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5>Notifications</h5>
        </div>
         <div class="col-6  py-0 my-0 text-right">
          
        </div>
      </div>
   </div>


    <!--notifications list view -->

  <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 py-0 pb-2 px-2 ">

        <div class="row ">

            <!-- spacer -->
         
           <div class="col-12 mt-5 mt-md-0 d-md-none d-block"> 

           </div>
     <!-- ends -->
             
             <div class="col-12 d-flex flex-row px-0" style="align-items:center;border-bottom:1px solid #c5c5c5;">
                <div class="mx-2" >
                    <div :style="imageStyle(40,['data'],'8px')">

                    </div>
                </div>
                <div class="pr-2">
                    <span style="font-family:MediumFont;font-size:13px;">David Adebola and 23 others</span> <span style="font-family:BodyFont;font-size:13px;"> liked your project,</span> <span  style="font-family:MediumFont;font-size:13px;">Music player</span>
                     <span class="mx-1" style="font-family:BodyFont;font-size:12px; color:grey;">12:34 PM</span>
                </div>
             </div>
           

            <div class="col-12 d-flex flex-row px-0" style="align-items:center;border-bottom:1px solid #c5c5c5;">
                <div class="mx-2" >
                    <div :style="imageStyle(40,['data'],'8px')">

                    </div>
                </div>
                <div class="pr-2">
                    <span style="font-family:MediumFont;font-size:13px;">Jude Prince and 14 others</span> <span style="font-family:BodyFont;font-size:13px;"> liked your pinned,</span> <span  style="font-family:MediumFont;font-size:13px;">Music player</span>
                     <span class="mx-1" style="font-family:BodyFont;font-size:12px; color:grey;">2:34 PM</span>
                </div>
             </div>

              <div class="col-12 d-flex flex-row px-0" style="align-items:center;border-bottom:1px solid #c5c5c5;">
                <div class="mx-2" >
                    <div :style="imageStyle(40,['data'],'8px')">

                    </div>
                </div>
                <div class="pr-2">
                    <span style="font-family:MediumFont;font-size:13px;">John Haskell and 114 others</span> <span style="font-family:BodyFont;font-size:13px;"> commented your pinned,</span> <span  style="font-family:MediumFont;font-size:13px;">Music player</span>
                     <span class="mx-1" style="font-family:BodyFont;font-size:12px; color:grey;">2:30 PM</span>
                </div>
             </div>

               <div class="col-12 d-flex flex-row px-0" style="align-items:center;border-bottom:1px solid #c5c5c5;">
                <div class="mx-2" >
                    <div :style="imageStyle(35,['data'],'50%')">

                    </div>
                </div>
                <div class="pr-2">
                    <span style="font-family:MediumFont;font-size:13px;">Michell and 4 others</span> <span style="font-family:BodyFont;font-size:13px;"> are now following you</span> 
                     <span class="mx-1" style="font-family:BodyFont;font-size:12px; color:grey;">12:30 AM</span>
                </div>
             </div>

               <div class="col-12 d-flex flex-row px-0" style="align-items:center;border-bottom:1px solid #c5c5c5;">
                <div class="mx-2" >
                    <div :style="imageStyle(35,['data'],'50%')">

                    </div>
                </div>
                <div class="pr-2">
                    <span style="font-family:MediumFont;font-size:13px;">Adenike</span> <span style="font-family:BodyFont;font-size:13px;"> is inviting you to join </span><span  style="font-family:MediumFont;font-size:13px;">Js Interns</span>
                     <v-btn x-small color="#3C87CD" style="color:white;text-transform:normal;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Accept</v-btn>
                      <v-btn x-small color="#3C87CD" outlined style="text-transform:normal;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Decline</v-btn>
                     <span class="mx-1" style="font-family:BodyFont;font-size:12px; color:grey;">12:30 AM</span>
                </div>
             </div>
           

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
 export default {
    data () {
      return {
     
      }
     
    },
     mounted(){
     this.$root.showTopBar = true;

  
    },

     methods:{

          imageStyle: function(size,data,radius){

         if(data.background_color == null){
        let styleString = "height:" + size + "px;width:" + size +"px;background-size:cover;border-radius:" + radius + ";background-repeat: no-repeat; ";
         if(data.image_name == null || data.image_name == '0'){
              styleString += 'background-color:whitesmoke; background-image:url(imgs/background1.jpg);';
         }else{
            if(data.image_name == 'default_1'){

               styleString += 'background-color:whitesmoke; background-image:url(/imgs/background3.jpg);';

            }

            if(data.image_name == 'default_2'){

               styleString += 'background-color:whitesmoke; background-image:url(/imgs/background1.jpg);';

            }

              if(data.image_name == 'default_3'){

               styleString += 'background-color:whitesmoke; background-image:url(/imgs/imgproj2.jpeg);';

            }
          
         }
         
         return styleString;
       }else{
        let styleString = "height:" + size + "px;width:" + size +"px;background-size:cover;border-radius:" + radius + ";background-repeat: no-repeat; ";
         let imgLink = data.image_name + '.' + data.image_extension;
        
        styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/'  + imgLink  +  ');';
         
          return styleString;

      }
      },
        
      
      },
     
  }
</script>
<style scoped>


  
</style>
