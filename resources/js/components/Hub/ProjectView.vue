<template>
 <div class="row px-2">
      <!-- top bar -->

      <div class="col-lg-6 offset-lg-3 py-2 fixed-top d-flex flex-row px-1"
       style="position:sticky;background:white;z-index:99999999;border-bottom:1px solid #c5c5c5;top:0%;">
       
        <div class="col-6 py-0 px-0 d-flex flew-row">
           <div    class="mr-2"
      style="border-radius:50%;height:40px;width:40px;background-color:#c5c5c5;background-image:url(/imgs/imgproj3.jpeg);background-size: cover;
      background-repeat: no-repeat; border:3px solid #3C87CD;">
     </div> 

       <div class="d-flex " style="align-items:center;">

           <span style="font-size:14px; font-family:BodyFont;">
              JsBuddy
            </span>
               <i class="las la-award" style="font-size:25px;color:#90BE6D;" ></i> 
            
        </div>
        </div>

  
        <div class="col-6 py-0 px-0 text-right">

             <v-btn icon >
                      <v-icon style="font-size:25px;">las la-thumbtack</v-icon>
                    </v-btn>
            <span style="font-size:12px;color:grey;">234</span>

          <v-btn icon >
                       <i class="lar la-heart" style="font-size:25px;" ></i> 
                    </v-btn>
             <span style="font-size:12px;color:grey;">{{ post.likes / 1000 }}K</span>
        </div>
       
         
      </div>

      
      <!-- ends -->

      <div class="col-lg-6 offset-lg-3 mt-2 px-0 text-center">
        <span class="d-md-block d-none" style="font-size:17px; font-family:MediumFont;">{{ post.title }}</span>
        <span class="d-md-none d-block" style="font-size:14px; font-family:MediumFont;">{{ post.title }}</span>
      </div>

      <!-- pages loader -->

      <div  class="col-lg-6 offset-lg-3 py-2 px-0 pt-1 mt-1" style="height:450px;">
        <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" 
   src="https://8l1y3mn8rl.csb.app" 
   class="col-12 " style="position:absolute; height:100%;  background:white;border:1px solid #c5c5c5; border-radius:7px;"  ></iframe>

     <v-btn icon color="#ffffff" style="border-radius:0px; border-top-right-radius:7px;position:absolute;background: rgba(27, 27, 30, 0.4); right:0%; z-index:879;" 
           class="d-inline-block  "><v-icon>las la-expand</v-icon></v-btn>
      </div>
      

      <!-- ends -->
      

      <!-- view source -->
         <div class="col-lg-6 offset-lg-3 px-2 mt-3 text-right">
        <v-btn v-if="post.project" color="#3C87CD" small style="text-transform:none;color:white;font-size:12px;font-family:BodyFont;">View source {{ post.project }}<v-icon class="ml-1">mdi-launch mdi-18px</v-icon></v-btn>
      </div>
      <!-- ends -->


       <!-- descriptions -->
         <div class="col-lg-6 offset-lg-3 px-2 mt-3 text-left">
          <p style="font-size:14px;font-family:BodyFont;">
             {{ post.description }}
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
  
                  <textarea ref="textBottom"  style="font-size:13px;"  placeholder="please,be nice"   ></textarea>

                  <v-btn icon class="mx-md-1"><v-icon>las la-send</v-icon> </v-btn>
           </div>
            
          </div>
        </div>
      <!-- ends  -->

       <!-- full loader -->

       <div v-if="false" style="position:fixed;z-index:999999999999999; height:100%;width:100%; top:0; left:0;background:white;">
        <div class="col-12 px-1 py-1 pt-0  d-flex flex-row" style="position:absolute;background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 py-0">
              <v-btn icon >
                      <v-icon>mdi mdi-close</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-0 text-center">
             <span style="font-size:17px; font-family:MediumFont;">{{ post.title }}</span>
          </div>
              
              
          
        </div>

         <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" 
   src="https://www.citonhub.com/run-panel/645703307" 
    style="position:absolute; height:92%; top:8%; background:white;width:100%;border:1px solid #c5c5c5;"  ></iframe>
      </div>

      <!-- ends -->

     

 </div>
</template>
<script>
export default {
    props: [
      'post'
    ]
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