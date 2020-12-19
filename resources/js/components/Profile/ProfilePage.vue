<template>
   <div  style="position:fixed;height:100%;background:#F5F5FB; width:100%;">

         <!-- top bar -->
        <div class="col-12 py-0 fixed-top" style="position:sticky;width:100%;height:auto;z-index:999999999999999999; ">
         <top-bar></top-bar>
        </div>
     

       <!-- ends -->


        <!-- side bar -->


   <v-slide-x-transition>
   <div class="col-12  py-0 px-0" style="position:absolut; width:100%; height:100%; z-index:9999999999999;background: rgba(27, 27, 30, 0.32);" @click="that.$root.showSideBar = false" v-if="that.$root.showSideBar">

   <div style="position:absolute; height:100%; width:70%; left:0;" >

     <div class="col-md-6 col-lg-3 pt-2" style="background:white;height:100%;" @click.stop="that.$root.showSideBar = true">
        <sidebar></sidebar>
     </div>

   </div>

     </div>
   </v-slide-x-transition>

       <!-- ends -->


       <!-- profile edit -->
         

            <v-slide-x-reverse-transition>

     
   <div class="col-12  py-0 px-0" style="position:fixed; left:0; width:100%; height:100%; z-index:9999999999999;background: rgba(27, 27, 30, 0.32);" v-if="false">

   <div style="position:absolute; height:100%; width:100%; left:0;background:transparent;overflow-y:auto; overflow-x:hidden;"  >
   

      <!-- large and medium screens -->

     <div class="col-lg-3 col-md-6 offset-lg-9 offset-md-6 pt-0 pb-3 scrollerAddProject px-md-2 px-0 " 
     style=" height:100%; top:0%;  position:absolute; background:white;
     border:1px solid white;border-radius:0px;border-radius:0px;  overflow-y:auto;overflow-x:hidden;">

     <!-- header -->
                
    
     <div class="col-12 px-md-2 px-0 py-2 pt-0 fixed-top d-flex flex-row" style="border-top-left-radius:10px; border-top-right-radius:10px; left:0; position:sticky;background:white; top:0%; border-bottom:1px solid #c5c5c5;align-items:center;">
           
             <div class=" col-2 py-0 ">
              <v-btn icon >
                      <v-icon>mdi mdi-close</v-icon>
                    </v-btn>
            </div>
             <div class="col-8 text-center py-0">
             <span style="font-size:17px; font-family:HeaderFont;" class="d-md-block d-none">Edit profile</span>

               <span style="font-size:15px; font-family:HeaderFont;" class="d-md-none d-block">Edit profile</span>
          </div>
              
               <div class="px-1 py-0 col-2 text-right ">
             
             </div>
             
          
        </div>
      <!-- ends -->

      <!-- edit profile page -->
      <div class="col-12 px-3 px-md-1 py-1">

        <edit-profile></edit-profile>

      </div>
        

      <!-- ends -->
     </div>

     <!-- ends -->


   

   </div>

     </div>
     </v-slide-x-reverse-transition>


       <!-- ends -->

       <!-- profile container -->

       <div class=" col-12 scroller" style=" position:fixed; height:90%; top:8%; overflow-y:auto; padding-bottom:60px; overflow-x:hidden;" >

          <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 py-0">


            <div class="row">

                    <div class="d-flex flex-row flex-wrap col-12 pb-2 text-center">

             <div class="d-flex flex-column py-0 pb-1 col-lg-6 offset-lg-3 " style="align-items:center;justify-content:center;">

                   <div    class="mb-2"
         style="border-radius:50%;height:150px;width:150px;background-color:#c5c5c5;background-image:url(/imgs/img3.jpg);background-size: cover;
         background-repeat: no-repeat; border:5px solid #3C87CD;">
       </div> 

       
            <span style="font-family:HeaderFont;font-size:16px;">Akinola Ayomide</span>
            <span style="font-family:MediumFont;color:grey;font-size:14px;">@dray</span>

             <div class="col-lg-8 col-md-8 py-0 my-0 d-flex" style="align-items:center;justify-content:center;">

              <div class="row">
                
                <div class="col-6 py-0 d-flex"  style="align-items:center;justify-content:center;">
                
                <div class="d-flex flex-column"  style="align-items:center;justify-content:center;">
                      <img src="/imgs/newbie.svg" height="40px"> 
                      <span style="font-family:MediumFont;font-size:12px;color:#333333;">Newbie</span>
                </div>
                 

                </div>

                 <div class="col-6  py-0 d-flex "  style="align-items:center;justify-content:center;">

                   <div class="d-flex flex-column"  style="align-items:center;justify-content:center;">
                     <img src="/imgs/junior.svg" height="40px"> 
                      <span style="font-family:MediumFont;font-size:12px;color:#333333;">Junior</span>
                </div>
                    
                </div>

                <div class=" col-12 py-1 pt-2 "   >
                     <div class="d-flex flex-column"  style="align-items:center;justify-content:center;">
                     <v-progress-linear height="7px" width="100%" rounded color="#3C87CD" value="80"></v-progress-linear>
                      <span style="font-family:BodyFont;font-size:12px;color:#333333;"><span style="font-family:MediumFont;">234</span> XP Points to Junior dev</span>
                </div>
                </div>

              </div>

            </div>

          


             </div>

            
         </div>


         <div class="col-lg-4 py-0 my-0 px-1 d-flex" style="align-items:center;justify-content:center;">

                <div class="col-6 py-0 px-1 d-flex flex-row" style="align-items:center;justify-content:center;">
                         <span style="font-family:MediumFont;font-size:13px;color:#333333;" class="mx-1">234</span> <span style="font-size:13px;font-family:BodyFont;">Following</span>
                </div>

                <div class="col-6 py-0 px-1 d-flex flex-row" style="align-items:center;justify-content:center;">

                     <span style="font-family:MediumFont;font-size:13px;color:#333333;" class="mx-1">25k</span> <span style="font-size:13px;font-family:BodyFont;">Followers</span>

                </div>

            </div>

            <div  class="col-lg-4 py-0 my-lg-1 px-1 d-flex text-center my-2" style="align-items:center;justify-content:center;">
                <div style="font-family:BodyFont;font-size:13px;" class="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptatibus voluptate ea eum iste quam odio, reprehenderit, animi aliquid eligendi
            </div>
            </div>

            <div  class="col-lg-4 py-0 my-lg-0 px-1 d-flex text-center flex-row my-2" style="align-items:center;justify-content:center;">

               <div class="col-6 py-0 px-1 d-flex flex-row" style="align-items:center;justify-content:center;">
                      <v-btn small outlined rounded color="#3C87CD" style="font-size:12px; font-weight:bolder;font-family:MediumFont;">
                       <span style="text-transform:capitalize;">Chat</span> 
                  </v-btn>
                </div>

                <div class="col-6 py-0 px-1 d-flex flex-row" style="align-items:center;justify-content:center;">

                     <v-btn small rounded color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
                       <span style="color:white;text-transform:capitalize;">follow</span> 
                  </v-btn>

                </div>

                


            </div>

             <div class="col-12 px-1 mt-2">

               <h5 style="border-bottom:1px solid #c5c5c5;" class="py-1">Projects</h5>

               <div class="row mt-3">

                   <div class="col-lg-4 col-md-6 px-0 mb-5 pt-1 pt-md-2 projectBox" style="height:200px;" >
             <div   style="height:190px; position:absolute; width:94%; left:3%; border:1px solid #c5c5c5;
          border-radius:20px;box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25);background: url(/imgs/background1.jpg);background-size:cover;">

              <div class="pt-3 px-2  pl-3" style=" position:absolute; width:100%; height:35%; left:0; bottom:0%; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px; background: linear-gradient(180deg, rgba(60, 135, 205, 0.0053) 0%, rgba(0, 0, 0, 0.53) 100%);">
                
                 <div class="row">
                  <div class="col-8 py-0 my-0">
                     <span   style="font-family:MediumFont; font-size:13px; color:white;" >Python calculator</span>
    
                  </div>
                   <div class="col-4 py-0 my-0 text-right">

                      <i class="lab la-python" style="font-size:25px; color:white;" ></i>

                     <i class="lab la-html5" style="font-size:25px; color:white;"></i>

                  </div>
                </div>
                 

          </div>

         </div>

          <v-card class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; top:0; border-radius:0px; border-top-left-radius:20px;
          border-top-right-radius:20px;">
            
            <div class="col-12 py-0 my-0 text-left">
                <div class="row py-0 my-0">
                    <div class="col-2 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                        <span  class="d-inline-block"  
                             style="border-radius:50%;height:30px;width:30px;background-color:#c5c5c5; background-image:url(/imgs/img3.jpg);background-size:100%;border:1px solid transparent;"></span>
                    </div>
                   <div class="col-8 py-0 my-0 d-flex" style="align-items:center;">
                       <div> 
                             <span   class="d-inline-block"  style="font-family:MediumFont; font-size:13px;" >Akinola Dray</span>
                       </div>
                     
                   </div>
                   <div class="col-2 text-right py-0 my-0">
                      <v-btn icon><v-icon style="font-size:25px;">las la-ellipsis-v</v-icon></v-btn>
                   </div>
                </div>
            </div>
          </v-card>

          <div class="py-1 px-2" style="position:absolute; width:94%; height:auto; left:3%; top:100%;">
            
             <div class="row">
                  <div class="col-12 py-0 my-0 text-right">
                       
                       <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">231</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-comment" style="font-size:20px;color:#3C87CD;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:#000000;">32</span>
            </span>
                  </div>   
            </div>

          </div>
          </div>

               </div>

             </div>

           

            
                </div>

          </div>

                
       


       </div>
       

       <!-- ends -->



   </div>
</template>

<script>
const TopBar = () => import(
   /* webpackChunkName: "top-bar-profile?v=0.13" */ './TopBar.vue'
  );

const EditProfile = () => import(
   /* webpackChunkName: "EditProfile?v=0.14" */ './EditProfile.vue'
  );
export default {

components:{
TopBar,
EditProfile
},

    data(){

        return{
             that:this,
        projects:[
           {id:1, type: 'Ecommerce Website'},
            { id:2, type:'Social media website'}
        ]
        }
    }
}
</script>


<style scoped>
    .scroller::-webkit-scrollbar {
  width: 6px;
  background: transparent;
}


.scroller::-webkit-scrollbar-thumb {
  background-color:   darkgrey;
  outline: 1px solid darkgrey;
}
</style>