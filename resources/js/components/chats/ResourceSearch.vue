<template>
    <div style="background:transparent;">
   <div class="col-12 py-1 my-0 ">
    <div class="row">
        <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; align-items:center;">
            <div class=" mr-1 py-0">
              <v-btn icon @click.stop="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class=" py-0 text-center" style="width:100%;">
               <input style="width:100%;heigth:100%;font-size:13px;background:whitesmoke;border-radius:13px;font-family:BodyFont;"  
                       placeholder="Search Dev.to" class="py-2 px-3" type="search" > 
            </div>
              
              <div class=" py-0 ml-1 text-right">
                  <v-btn icon @click.stop="goBack">
                      <v-icon>las la-search</v-icon>
                    </v-btn>
              </div>
          
        </div>



         <!-- edit space form -->
      <div style="background:transparent;font-family:BodyFont; " class="col-12 py-1 my-0 px-1 px-md-2" >

        <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-1 text-center">Add articles to "javascript" resource</div>
 
      <!-- youtube search display -->
        <template v-if="false">

            <div class="col-12 pb-0 pt-0 px-0 d-flex flex-row" style=" align-items:center;">
            <div class="col-5 py-1 px-1" style="height:92px;">
              <div style="position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(imgs/youtube_video.jpg);background-repeat: no-repeat; background-size:cover;" >
                <div style="background:rgba(0, 0, 0,0.6); cursor:pointer; position:absolute; top:0px; right:0px; border:1px solid black; border-top-right-radius:8px;" class="px-1 py-1">
                      <v-icon style="font-size:18px; color:white;">las la-plus</v-icon>
                </div>
              </div>
            </div>  

             <div class="col-7 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

               <div class="pt-3 mb-1" style="font-family:MediumFont;font-size:13px; overflow:hidden; width:100%; text-overflow:ellipsis;  ">
                 5 Javascript Concept You HAVE TO KNOW
               </div>
                <div class="mb-1" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; overflow:hidden; text-overflow:ellipsis; ">
                  James Q Quick
               </div>
                <div class="" style="font-family:BodyFont;font-size:12px;color:grey; overflow:hidden; text-overflow:ellipsis;  ">
                 204K views
               </div>
            </div>  

         </div>

          <div class="col-12 pb-0 pt-0 px-0 d-flex flex-row" style=" align-items:center;">
            <div class="col-5 py-1 px-1" style="height:92px;">
              <div style="position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(imgs/youtube_video.jpg);background-repeat: no-repeat; background-size:cover;" >
                <div style="background:rgba(0, 0, 0,0.6); cursor:pointer; position:absolute; top:0px; right:0px; border:1px solid black; border-top-right-radius:8px;" class="px-1 py-1">
                      <v-icon style="font-size:18px; color:white;">las la-plus</v-icon>
                </div>
              </div>
            </div>  

             <div class="col-7 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

               <div class="pt-3 mb-1" style="font-family:MediumFont;font-size:13px; overflow:hidden; width:100%; text-overflow:ellipsis;  ">
                 5 Javascript Concept You HAVE TO KNOW
               </div>
                <div class="mb-1" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; overflow:hidden; text-overflow:ellipsis; ">
                  James Q Quick
               </div>
                <div class="" style="font-family:BodyFont;font-size:12px;color:grey; overflow:hidden; text-overflow:ellipsis;  ">
                 204K views
               </div>
            </div>  

         </div>

        </template>
        <!-- ends -->

        <!-- udemy search display  -->
           
         <template v-if="false">
           <div class="col-12 pb-0 pt-0 px-0 d-flex flex-row" style=" align-items:center;">
            <div class="col-5 py-1 px-1" style="height:92px;">
              <div style="position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(imgs/udemy.jpg);background-repeat: no-repeat; background-size:cover;" >
                <div style="background:rgba(0, 0, 0,0.6); cursor:pointer; position:absolute; top:0px; right:0px; border:1px solid black; border-top-right-radius:8px;" class="px-1 py-1">
                      <v-icon style="font-size:18px; color:white;">las la-plus</v-icon>
                </div>
              </div>
            </div>  

             <div class="col-7 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

               <div class="pt-3 mb-1" style="font-family:MediumFont;font-size:13px; overflow:hidden; width:100%; text-overflow:ellipsis;  ">
                 Python for Data science and Machine
               </div>
                <div class="mb-1" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; overflow:hidden; text-overflow:ellipsis; ">
                  Jose Portilla
               </div>
                <div class="" style="font-family:BodyFont;font-size:13px;color:black; overflow:hidden; text-overflow:ellipsis;  ">
                  <span class="mr-2" style="font-family:MediumFont;">$11.99</span> <strike style="color:grey;">$94.99</strike>
               </div>
            </div>  

         </div>


          <div class="col-12 pb-0 pt-0 px-0 d-flex flex-row" style=" align-items:center;">
            <div class="col-5 py-1 px-1" style="height:92px;">
              <div style="position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(imgs/udemy.jpg);background-repeat: no-repeat; background-size:cover;" >
                <div style="background:rgba(0, 0, 0,0.6); cursor:pointer; position:absolute; top:0px; right:0px; border:1px solid black; border-top-right-radius:8px;" class="px-1 py-1">
                      <v-icon style="font-size:18px; color:white;">las la-plus</v-icon>
                </div>
              </div>
            </div>  

             <div class="col-7 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

               <div class="pt-3 mb-1" style="font-family:MediumFont;font-size:13px; overflow:hidden; width:100%; text-overflow:ellipsis;  ">
                 Python for Data science and Machine
               </div>
                <div class="mb-1" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; overflow:hidden; text-overflow:ellipsis; ">
                  Jose Portilla
               </div>
                <div class="" style="font-family:BodyFont;font-size:13px;color:black; overflow:hidden; text-overflow:ellipsis;  ">
                  <span class="mr-2" style="font-family:MediumFont;">$11.99</span> <strike style="color:grey;">$94.99</strike>
               </div>
            </div>  

         </div>
         </template>

        <!-- ends -->

        <!-- Dev.to search display  -->

        <template>

            <div class="col-12  pb-0 pt-0 px-0 d-flex flex-row" style=" align-items:center;">
            <div class="col-5 py-1 px-1" style="height:92px;">
              <div style="position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(imgs/devto.jpg);background-repeat: no-repeat; background-size:cover;" >
                <div style="background:rgba(0, 0, 0,0.6); cursor:pointer; position:absolute; top:0px; right:0px; border:1px solid black; border-top-right-radius:8px;" class="px-1 py-1">
                      <v-icon style="font-size:18px; color:white;">las la-plus</v-icon>
                </div>
              </div>
            </div>  

             <div class="col-7 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

               <div class="pt-3 mb-1" style="font-family:MediumFont;font-size:13px; overflow:hidden; width:100%; text-overflow:ellipsis;  ">
                 CSS Variables: What are they & How to use
               </div>
                <div class="mb-1" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; overflow:hidden; text-overflow:ellipsis; ">
                  Zachary Fetters
               </div>
                <div class="" style="font-family:BodyFont;font-size:12px;color:grey; overflow:hidden; text-overflow:ellipsis;  ">
                 5 min read
               </div>
            </div>  

         </div>


           <div class="col-12  pb-0 pt-0 px-0 d-flex flex-row" style=" align-items:center;">
            <div class="col-5 py-1 px-1" style="height:92px;">
              <div style="position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(imgs/devto.jpg);background-repeat: no-repeat; background-size:cover;" >
                <div style="background:rgba(0, 0, 0,0.6); cursor:pointer; position:absolute; top:0px; right:0px; border:1px solid black; border-top-right-radius:8px;" class="px-1 py-1">
                      <v-icon style="font-size:18px; color:white;">las la-plus</v-icon>
                </div>
              </div>
            </div>  

             <div class="col-7 d-flex flex-column pt-1 my-auto" style="justify-content:center;width:100%;">

               <div class="pt-3 mb-1" style="font-family:MediumFont;font-size:13px; overflow:hidden; width:100%; text-overflow:ellipsis;  ">
                 CSS Variables: What are they & How to use
               </div>
                <div class="mb-1" style="font-family:BodyFont;font-size:12px; white-space: nowrap; color:grey; overflow:hidden; text-overflow:ellipsis; ">
                  Zachary Fetters
               </div>
                <div class="" style="font-family:BodyFont;font-size:12px;color:grey; overflow:hidden; text-overflow:ellipsis;  ">
                 5 min read
               </div>
            </div>  

         </div>

        </template>

        <!-- ends -->

        </div>

       <!-- ends -->

       
        
     

    </div>
   </div>

  </div>
</template>
<script>
export default {
     data(){
        return{
         that: this
        }
    },
    mounted(){
    this.$root.componentIsLoading = false;
    },
    methods:{
        goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

             this.$root.chatComponent.innerSideBarContent = '';
            
            this.$root.chatComponent.innerSideBarContent = '';
       
        },
      
    }
}
</script>
<style scoped>

</style>