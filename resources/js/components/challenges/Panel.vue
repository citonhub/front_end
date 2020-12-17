<template>
    <div>
       
       <!-- large screens -->
        <div style="position:fixed;height:100%;left:0;top:0;z-index:9999999999999999;overflow-y:auto;" class="col-lg-10 offset-lg-2 py-0 px-0">

             <div class="col-lg-10 offset-lg-1 py-1 mb-0 col-md-10 offset-md-1 px-2 d-md-block d-none py-0 px-0"
              style="position:absolute; left:0%; top:10%; height:85%;  background:#ffffff;border:1px solid #c5c5c5; border-radius:6px;">
     
              <!-- top session -->
                 <div style="position:absolute;height:35%;top:0; left:0;width:100%;border-bottom:1px solid #c5c5c5;
                 background-color:#c5c5c5;background-image:url(/imgs/imgproj3.jpeg);background-size: cover; border-top-left-radius:6px;border-top-right-radius:6px;
                    background-repeat: no-repeat; ">

                    <div class="d-flex flex-column" style="position:absolute;height:100%;width:100%;top:0;left:0;background: rgba(27, 27, 30, 0.4);border-top-left-radius:6px;border-top-right-radius:6px;">

                        <div class="d-flex flex-row px-2 pt-2 " style="height:30%;z-index:99999999999999999 !important;">

                            <v-btn   icon class="mr-2 mt-2" style="z-index:9999999999999999 !important;"><v-icon style="font-size:25px;color:#ffffff;">las la-arrow-left</v-icon></v-btn>
                            <div class="d-flex flex-column pt-1">
                               <div style="font-size:18px;font-family:HeaderFont;color:#ffffff;" >Create a gift cards with HTML and CSS</div>  
                                <div style="font-size:14px;font-family:BodyFont;color:#ffffff;" class="pt-1" >Using pure CSS, design the most beautiful card and win </div>  
                            </div>

                        </div>

                         <div class="d-flex px-2 py-2 " style="height:40%;align-items:center;justify-content:center;">

                             <div class="d-flex flex-column text-center">

                                  <div style="font-size:25px;font-family:HeaderFont;color:#ffffff;" >19 : 09 : 23 : 23</div>  
                                  <div style="font-size:14px;font-family:BodyFont;color:#ffffff;" class="pt-1" >Days : Hours : Minutes : Seconds </div>  
                             </div>

                           
                        </div>

                        <div class="d-flex px-2 py-2 " style="height:30%;width:100%;">

                             <div class="d-flex flex-column-reverse text-center" style="height:100%;width:100%;">
                                
                                <div class="d-flex flex-row" style="align-items:center;width:100%;">
                                   
                                   <div class="col-8 py-0 px-0 d-flex flex-row" style="align-items:center;">

                                        <div  class="d-inline-block mx-2 "  
                     style="border-radius:50%;height:40px;width:40px;background-color:#c5c5c5;background-image:url(/imgs/imgproj3.jpeg);background-size: cover;
                    background-repeat: no-repeat; "></div> 
                              <div style="font-size:13px;font-family:BodyFont;color:#ffffff;" >Akinola Dray </div>  

                               <v-icon class="mx-1" style="font-size:8px;color:#ffffff;">mdi-record</v-icon> 

                                <div style="font-size:13px;font-family:BodyFont;color:#ffffff;" class="d-md-block d-none">2331 Participants </div>
                              <div style="font-size:12px;font-family:BodyFont;color:#ffffff;" class="d-md-none d-block"> <v-icon style="font-size:17px;">las la-user-friends</v-icon> 2331 </div>

                                   </div>

                                   <div class="col-4 py-0 px-2 d-flex flex-row-reverse" style="align-items:center;">

                                         <v-btn medium rounded color="#3C87CD" style="font-size:13px; font-weight:bolder; color:white;font-family:MediumFont;">
                                        <span style="color:white;text-transform:capitalize;">Join</span> 
                                   </v-btn>

                                   </div>
                                        

                                </div>


                                 
                             </div>

                           
                        </div>

                    </div>

                 </div>
              <!-- ends -->

              <!-- switch session -->
                 <div style="position:absolute;height:5%;width:100%;top:35%;left:0; overflow-y:hidden; overflow-x:auto;border-bottom:1px solid #c5c5c5;background:whitesmoke;">

                  <div class="col-12 px-0 d-flex flex-row py-0" style="align-items:center; height:100%;border-right:1px solid #c5c5c5;position:absolute; top:0;">
                    
                   <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'description' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('description')">

                        <div style="font-size:14px;font-family:MediumFont;" >Description</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'rules' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('rules')">

                        <div style="font-size:14px;font-family:MediumFont;" >Rules</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'judges' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('judges')" >

                        <div style="font-size:14px;font-family:MediumFont;" >Judges</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar"  :style="selectedTab == 'leaderboard' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('leaderboard')" >

                        <div style="font-size:14px;font-family:MediumFont;" >Leaderboard</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'discussion' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('discussion')">

                        <div style="font-size:14px;font-family:MediumFont;" >Discussion</div>  

                   </div>

                  </div>

                 

                 </div>
                 
                <!-- ends -->

                <!-- content view -->

                  <div style="position:absolute;height:59%;width:100%;top:41%;left:0; overflow-y:auto; overflow-x:hidden;">

                  <div class="col-12 scroller" style="height:95%;position:absolute; top:2%; overflow-y:auto; overflow-x:hidden;">
                        <router-view></router-view>
                  </div>

                 </div>

                  
              <!-- ends -->
              
           </div>

              <!-- smaller screens -->
                <div class="col-lg-10 offset-lg-1 py-1 mb-0 col-md-10 offset-md-1 px-2 d-md-none d-block py-0 px-0"
              style="position:absolute; left:0%; top:0%; height:100%;  background:#ffffff;">

              <!-- close button -->
                 <v-btn icon color="#ffffff" style="position:fixed;background:#3C87CD;top:1%; right:2%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>
                 <!-- ends -->
                <div style="position:absolute;height:250px;top:0; left:0;width:100%;border-bottom:1px solid #c5c5c5;
                 background-color:#c5c5c5;background-image:url(/imgs/imgproj3.jpeg);background-size: cover; border-radius:0px;
                    background-repeat: no-repeat; ">

                

                    <div class="d-flex flex-column" style="position:absolute;height:100%;width:100%;top:0;left:0;background: rgba(27, 27, 30, 0.4);">

                        <div class="d-flex flex-row px-2 pt-2 " style="height:30%;">

                           <div class="d-flex flex-column pt-2 pr-2">
                               <div style="font-size:14px;font-family:HeaderFont;color:#ffffff;" >Create a gift cards with HTML and CSS</div>  
                                <div style="font-size:13px;font-family:BodyFont;color:#ffffff;" class="pt-1" >Using pure CSS, design the most beautiful card and win </div>  
                            </div>

                        </div>

                         <div class="d-flex px-2 py-2 " style="height:40%;align-items:center;justify-content:center;">

                             <div class="d-flex flex-column text-center">

                                  <div style="font-size:22px;font-family:HeaderFont;color:#ffffff;" >19 : 09 : 23 : 23</div>  
                                  <div style="font-size:12px;font-family:BodyFont;color:#ffffff;" class="pt-1" >Days : Hours : Minutes : Seconds </div>  
                             </div>

                           
                        </div>

                        <div class="d-flex px-2 py-2 " style="height:30%;width:100%;">

                             <div class="d-flex flex-column-reverse text-center" style="height:100%;width:100%;">
                                
                                <div class="d-flex flex-row" style="align-items:center;width:100%;">
                                   
                                   <div class="col-12 py-0 px-0 d-flex flex-row" style="align-items:center;">

                                        <div  class="d-inline-block mx-2 "  
                     style="border-radius:50%;height:40px;width:40px;background-color:#c5c5c5;background-image:url(/imgs/imgproj3.jpeg);background-size: cover;
                    background-repeat: no-repeat; "></div> 
                              <div style="font-size:13px;font-family:BodyFont;color:#ffffff;" >Akinola Dray </div>  

                               <v-icon class="mx-1" style="font-size:8px;color:#ffffff;">mdi-record</v-icon> 

                                <div style="font-size:13px;font-family:BodyFont;color:#ffffff;" class="d-md-block d-none">2331 Participants </div>
                              <div style="font-size:12px;font-family:BodyFont;color:#ffffff;" class="d-md-none d-block"> 2331 participants</div>

                                   </div>

                                  
                                        

                                </div>


                                 
                             </div>

                           
                        </div>

                    </div>

                </div>


              <!-- switch session -->
                 <div class="fixed-top" style="position:absolute;height:40px;width:100%; top:250px; left:0%; overflow-y:hidden; overflow-x:auto; white-space: nowrap; border-bottom:1px solid #c5c5c5;background:whitesmoke;">

                  <div class="col-12 px-0 d-flex flex-row py-0" style="align-items:center; height:100%;position:absolute; top:0;">
                    
                   <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'description' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('description')">

                        <div style="font-size:13px;font-family:MediumFont;" >Description</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'rules' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('rules')">

                        <div style="font-size:13px;font-family:MediumFont;" >Rules</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'judges' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('judges')" >

                        <div style="font-size:13px;font-family:MediumFont;" >Judges</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar"  :style="selectedTab == 'leaderboard' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('leaderboard')" >

                        <div style="font-size:13px;font-family:MediumFont;" >Leaderboard</div>  

                   </div>

                    <div class="py-2 px-3 mr-1 sideBar" :style="selectedTab == 'discussion' ? ' border-bottom:4px solid #3C87CD;' : ''" @click.stop="goToPage('discussion')">

                        <div style="font-size:13px;font-family:MediumFont;" >Discussion</div>  

                   </div>

                  </div>

                 

                 </div>
                 
                <!-- ends -->

                 <!-- content view -->

                  <div style="position:absolute;height:500px;width:100%;top:290px;left:0; overflow-y:auto; overflow-x:hidden;background:white;">

                  <div class="col-12 scroller" style="height:100%;position:absolute; top:0%; overflow-y:auto; overflow-x:hidden;">
                        <router-view></router-view>
                  </div>

                 </div>

                  
              <!-- ends -->

               

   
                </div>
            
              <!-- button for smaller screens -->

              <!-- ends -->
                <v-btn v-if="this.$router.currentRoute.path.indexOf('discussion') <= 0" medium fab color="#3C87CD" class="d-lg-none"  style="z-index:99999999;  position:fixed;  bottom:3%; right:3%; ">
 
                <span style="font-family:MediumFont; font-size:12px;color:white; text-transform:capitalize;"> Join </span>
         
                 </v-btn>


              <!-- ends -->


           

        </div>
     <!-- ends -->
       
    </div>
</template>
<script>
export default {
     data () {
      return {
        selectedTab:''
      }
    },
    mounted(){
      this.setPage();
    },
    methods:{
        setPage:function(){

             if(this.$router.currentRoute.path.indexOf('description') >= 0){
                
               this.selectedTab = 'description';
             

            }

            if(this.$router.currentRoute.path.indexOf('rules') >= 0){
                
               this.selectedTab = 'rules';
               

              
            }

            if(this.$router.currentRoute.path.indexOf('judges') >= 0){
                
               this.selectedTab = 'judges';

                

              
            }

            if(this.$router.currentRoute.path.indexOf('leaderboard') >= 0){
                
               this.selectedTab = 'leaderboard';

                

              
            }

             if(this.$router.currentRoute.path.indexOf('discussion') >= 0){
                
               this.selectedTab = 'discussion';

                

              
            }



        },
        goToPage:function(page){

          
             this.$router.push({ path: '/board/challenges/panel/' + page });

               this.selectedTab = page;
              
        
        },
        
    } 
}
</script>
<style scoped>
.sideBar:hover{
     
      border-bottom:4px solid #3C87CD !important;
      cursor: pointer;
  }

  .scroller::-webkit-scrollbar {
  width: 6px;
}


.scroller::-webkit-scrollbar-thumb {
  background-color: #3C87CD;
  outline: 1px solid #3C87CD;
}
</style>