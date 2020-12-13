<template>
<div > 

   <div class="col-lg-10 offset-lg-1 py-1 col-md-10 offset-md-1 px-2 d-md-block d-none fixed-top" style="position:sticky; background:#F5F5FB;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5>Projects</h5>
        </div>
         <div class="col-6  py-0 my-0 text-right">
           <v-btn small rounded @click="addProject" color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;">
             <v-icon style="font-size:20px;">las la-plus</v-icon> <span>Add</span> 
           </v-btn>
        </div>
      </div>
   </div>

   <div class=" px-0 col-12 py-1 d-md-none d-block fixed-top" style="position:sticky; background:#F5F5FB;">
  

     <div class="row">
        <div class="col-6 py-0 my-0">
           <h6 style="font-size:17px;">Projects</h6>
        </div>
         <div class="col-6 mb-1 py-0 my-0 text-right">
           <v-btn small rounded color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;">
             <v-icon style="font-size:20px;">las la-plus</v-icon>
           </v-btn>
        </div>
      </div>
   </div>

 <!-- project list view -->

  <div class="col-lg-10 offset-lg-1 py-1 col-md-10 offset-md-1 px-2 ">

      <div class="row text-center ">
          <div class="col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2" style="height:200px;">
             <div  style="height:185px; position:absolute; width:94%; left:3%; border:1px solid #c5c5c5;
          border-radius:20px;box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25);background: url(/imgs/background3.jpg);background-size:cover;">

           <div class="py-2 px-2 text-right" style="height:auto; position:absolute; bottom:16%; width:auto; 
           right:0%;  border:1px solid transparent; border-top-left-radius:8px; align-items:center; justify-content:center;background: rgba(27, 27, 30, 0.4);">
             <div>
            <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">231</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-comment" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">32</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-thumbtack" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">200</span>
            </span>
             
             </div>
           
         </div>
         </div>

          <v-card class="py-2 px-2" style="position:absolute; width:94%; height:auto; left:3%; bottom:0; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px;">
            
            <div class="col-12 py-0 my-0 text-left">
                <div class="row py-0 my-0">
                   <div class="col-10 py-0 my-0 d-flex" style="align-items:center;">
                      <div style="font-family:MediumFont; font-size:13px;" >Project title 1</div>
                   </div>
                   <div class="col-2 text-right py-0 my-0">
                       <i class="lab la-python" style="font-size:25px;"></i>
                   </div>
                </div>
            </div>
          </v-card>

          

          </div>

          <div class="col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2" style="height:200px;">
             <div  style="height:185px; position:absolute; width:94%; left:3%; border:1px solid #c5c5c5;
          border-radius:20px;box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25);background: url(/imgs/background1.jpg);background-size:cover;">

           <div class="py-2 px-2 text-right" style="height:auto; position:absolute; bottom:16%; width:auto; 
           right:0%;  border:1px solid transparent; border-top-left-radius:8px; align-items:center; justify-content:center;background: rgba(27, 27, 30, 0.4);">
             <div>
            <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">231</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-comment" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">32</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-thumbtack" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">200</span>
            </span>
             
             </div>
           
         </div>
         </div>

          <v-card class="py-2 px-2" style="position:absolute; width:94%; height:auto; left:3%; bottom:0; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px;">
            
            <div class="col-12 py-0 my-0 text-left">
                <div class="row py-0 my-0">
                   <div class="col-10 py-0 my-0 d-flex" style="align-items:center;">
                      <div style="font-family:MediumFont; font-size:13px;" >Project title 1</div>
                   </div>
                   <div class="col-2 text-right py-0 my-0">
                       <i class="lab la-python" style="font-size:25px;"></i>
                   </div>
                </div>
            </div>
          </v-card>

          

          </div>


          <div class="col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2" style="height:200px;">
             <div  style="height:185px; position:absolute; width:94%; left:3%; border:1px solid #c5c5c5;
          border-radius:20px;box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25);background: url(/imgs/background3.jpg);background-size:cover;">

           <div class="py-2 px-2 text-right" style="height:auto; position:absolute; bottom:16%; width:auto; 
           right:0%;  border:1px solid transparent; border-top-left-radius:8px; align-items:center; justify-content:center;background: rgba(27, 27, 30, 0.4);">
             <div>
            <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">231</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-comment" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">32</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-thumbtack" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">200</span>
            </span>
             
             </div>
           
         </div>
         </div>

          <v-card class="py-2 px-2" style="position:absolute; width:94%; height:auto; left:3%; bottom:0; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px;">
            
            <div class="col-12 py-0 my-0 text-left">
                <div class="row py-0 my-0">
                   <div class="col-10 py-0 my-0 d-flex" style="align-items:center;">
                      <div style="font-family:MediumFont; font-size:13px;" >Project title 1</div>
                   </div>
                   <div class="col-2 text-right py-0 my-0">
                       <i class="lab la-python" style="font-size:25px;"></i>
                   </div>
                </div>
            </div>
          </v-card>

          

          </div>


           <div class="col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2" style="height:200px;">
             <div  style="height:185px; position:absolute; width:94%; left:3%; border:1px solid #c5c5c5;
          border-radius:20px;box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25);background: url(/imgs/background1.jpg);background-size:cover;">

           <div class="py-2 px-2 text-right" style="height:auto; position:absolute; bottom:16%; width:auto; 
           right:0%;  border:1px solid transparent; border-top-left-radius:8px; align-items:center; justify-content:center;background: rgba(27, 27, 30, 0.4);">
             <div>
            <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">231</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-comment" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">32</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-thumbtack" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">200</span>
            </span>
             
             </div>
           
         </div>
         </div>

          <v-card class="py-2 px-2" style="position:absolute; width:94%; height:auto; left:3%; bottom:0; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px;">
            
            <div class="col-12 py-0 my-0 text-left">
                <div class="row py-0 my-0">
                   <div class="col-10 py-0 my-0 d-flex" style="align-items:center;">
                      <div style="font-family:MediumFont; font-size:13px;" >Project title 1</div>
                   </div>
                   <div class="col-2 text-right py-0 my-0">
                       <i class="lab la-python" style="font-size:25px;"></i>
                   </div>
                </div>
            </div>
          </v-card>

          

          </div>

           <div class="col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2" style="height:200px;">
             <div  style="height:185px; position:absolute; width:94%; left:3%; border:1px solid #c5c5c5;
          border-radius:20px;box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25);background: url(/imgs/background3.jpg);background-size:cover;">

           <div class="py-2 px-2 text-right" style="height:auto; position:absolute; bottom:16%; width:auto; 
           right:0%;  border:1px solid transparent; border-top-left-radius:8px; align-items:center; justify-content:center;background: rgba(27, 27, 30, 0.4);">
             <div>
            <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">231</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-comment" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">32</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-thumbtack" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">200</span>
            </span>
             
             </div>
           
         </div>
         </div>

          <v-card class="py-2 px-2" style="position:absolute; width:94%; height:auto; left:3%; bottom:0; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px;">
            
            <div class="col-12 py-0 my-0 text-left">
                <div class="row py-0 my-0">
                   <div class="col-10 py-0 my-0 d-flex" style="align-items:center;">
                      <div style="font-family:MediumFont; font-size:13px;" >Project title 1</div>
                   </div>
                   <div class="col-2 text-right py-0 my-0">
                       <i class="lab la-python" style="font-size:25px;"></i>
                   </div>
                </div>
            </div>
          </v-card>

          

          </div>

           <div class="col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2" style="height:200px;">
             <div  style="height:185px; position:absolute; width:94%; left:3%; border:1px solid #c5c5c5;
          border-radius:20px;box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25);background: url(/imgs/background1.jpg);background-size:cover;">

           <div class="py-2 px-2 text-right" style="height:auto; position:absolute; bottom:16%; width:auto; 
           right:0%;  border:1px solid transparent; border-top-left-radius:8px; align-items:center; justify-content:center;background: rgba(27, 27, 30, 0.4);">
             <div>
            <span class="d-inline-block mx-1" >
                <i class="lar la-heart" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">231</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-comment" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">32</span>
            </span>

             <span class="d-inline-block mx-1" >
                <i class="las la-thumbtack" style="font-size:20px;color:white;" ></i> 
                <span style="font-family:MediumFont; font-size:12px; color:white;">200</span>
            </span>
             
             </div>
           
         </div>
         </div>

          <v-card class="py-2 px-2" style="position:absolute; width:94%; height:auto; left:3%; bottom:0; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px;">
            
            <div class="col-12 py-0 my-0 text-left">
                <div class="row py-0 my-0">
                   <div class="col-10 py-0 my-0 d-flex" style="align-items:center;">
                      <div style="font-family:MediumFont; font-size:13px;" >Project title 1</div>
                   </div>
                   <div class="col-2 text-right py-0 my-0">
                       <i class="lab la-python" style="font-size:25px;"></i>
                   </div>
                </div>
            </div>
          </v-card>

          

          </div>
        
     
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
    methods:{
      addProject:function(){
             this.$router.push({ path: '/board/projects/add' });
      }
    }
  }
</script>
<style scoped>



</style>
