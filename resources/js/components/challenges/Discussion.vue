<template>
    <div>
        <!-- chat area -->
        <div class="col-lg-10 offset-lg-1 scroller px-md-2 px-1" 
      style="background:#E1F0FC;position:absolute;height:100%;top:0%;left:0;border-radius:7px;border:1px solid #E1F0FC;overflow-y:auto; overflow-x:hidden;" >
            
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

         <!--  textarea -->
         <div class="col-lg-10 offset-lg-1 py-0 fixed-bottom" style="position:absolute;left:0;z-index:999999999999font-family:BodyFont;">
         
      
           <div class=" py-1 my-0 d-flex  px-md-2 px-1 flex-row" style="width:100%;align-items:center; justify-content:center;">
               <v-btn icon class="mx-md-1"><v-icon>las la-grin</v-icon> </v-btn>
  
                  <textarea ref="textBottom"  style="font-size:13px;"  placeholder="Type here..."   ></textarea>

                  <v-btn icon class="mx-md-1"><v-icon>las la-send</v-icon> </v-btn>
           </div>
            
        
        </div>
      <!-- ends  -->

    </div>
</template>
<script>
export default {
    
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
.scrollerinfo::-webkit-scrollbar {
  width: 6px;
}
</style>