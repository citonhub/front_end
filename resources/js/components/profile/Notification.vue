<template>
     <div style="background:transparent; font-family:BodyText;">
        <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left px-1" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Notifications</span>
         </div>
         <div class="col-2 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            
         </div>
      </div>
     </div>

      <div class="py-1 my-0" style="position:absolute; top:5%; height:95%;width:100%; left:0; overflow-y:auto; overflow-x:hidden; padding-bottom:100px !important;">
        
       <div class="col-12 py-2 my-0 ">
            <div class="row">
               <v-card tile flat class="col-12 py-1 px-0 my-0" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" 
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  >
                <div>
                 <v-img src="/imgs/img3.jpg" class="d-inline-block" style="height:38px; width:38px; border:1px solid transparent; border-radius:50%;" ></v-img>
               </div>
            
                <div class="d-inline-block ml-2 mt-1">
                 <span  class="d-block titleText"><b>A new post from  Joy Samson</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>Jul 25,2020 at 13:11 pm</b></span>
                   
                </div>

                </div>
                   
                     <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur deleniti porro beatae </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>
              <v-card tile flat class="col-12 py-1 px-0 my-1" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" 
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  >
                <div>
                 <v-img src="/imgs/img3.jpg" class="d-inline-block" style="height:38px; width:38px; border:1px solid transparent; border-radius:50%;" ></v-img>
               </div>
            
                <div class="d-inline-block ml-2 mt-1">
                 <span  class="d-block titleText"><b>Joy Samson created a duel</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>Jul 25,2020 at 13:11 pm</b></span>
                   
                </div>

                </div>
                   
                     <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">Title: Eum aspernatur deleniti porro beatae </div>
                         <div style="font-size:12px; color:#595959;" class="col-12 py-0">Max_Participants: 12 </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>
             <v-card tile flat class="col-12 py-1 px-0 my-1" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" 
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  >
                <div>
                 <v-img src="/imgs/img3.jpg" class="d-inline-block" style="height:38px; width:38px; border:1px solid transparent; border-radius:50%;" ></v-img>
               </div>
            
                <div class="d-inline-block ml-2 mt-1">
                 <span  class="d-block titleText"><b>Joy Samson started a duel</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>Jul 25,2020 at 13:11 pm</b></span>
                   
                </div>

                </div>
                   
                     <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">Title: Eum aspernatur deleniti porro beatae </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>
              <v-card tile flat class="col-12 py-1 px-0 my-1" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" 
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  >
                <div>
                 <v-img src="/imgs/img3.jpg" class="d-inline-block" style="height:38px; width:38px; border:1px solid transparent; border-radius:50%;" ></v-img>
               </div>
            
                <div class="d-inline-block ml-2 mt-1">
                 <span  class="d-block titleText"><b>Joy Samson liked your post</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>Jul 25,2020 at 13:11 pm</b></span>
                   
                </div>

                </div>
                   
                     <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">Eum aspernatur deleniti porro beatae... </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>
             <v-card tile flat class="col-12 py-1 px-0 my-1" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" 
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  >
                <div>
                 <v-img src="/imgs/img3.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
                 <v-img src="/imgs/img1.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
                 <v-img src="/imgs/img2.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
               </div>
            
               

                </div>

                 <div class="d-inline-block my-0 py-0 col-12">
                 <span  class="d-block titleText"><b>Joy Samson and two others pulled your post </b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>Jul 25,2020 at 13:11 pm</b></span>
                   
                </div>
                   
                     <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">Eum aspernatur deleniti porro beatae... </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>

             <v-card tile flat class="col-12 py-1 px-0 my-1" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" 
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  >
                <div>
                 <v-img src="/imgs/img3.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
                 <v-img src="/imgs/img1.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
                 <v-img src="/imgs/img2.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
               </div>
            
               

                </div>

                 <div class="d-inline-block my-0 py-0 col-12">
                 <span  class="d-block titleText"><b>Joy Samson and two others commented on your post </b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>Jul 25,2020 at 13:11 pm</b></span>
                   
                </div>
                   
                     <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">Eum aspernatur deleniti porro beatae... </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>


             <v-card tile flat class="col-12 py-1 px-0 my-1" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" 
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  >
                <div>
                 <v-img src="/imgs/img3.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
                 <v-img src="/imgs/img1.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
                 <v-img src="/imgs/img2.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
               </div>
            
               

                </div>

                 <div class="d-inline-block my-0 py-0 col-12">
                 <span  class="d-block titleText"><b>Joy Samson and two others liked your comment </b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>Jul 25,2020 at 13:11 pm</b></span>
                   
                </div>
                   
                     <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">Eum aspernatur deleniti porro beatae... </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>


             <v-card tile flat class="col-12 py-1 px-0 my-1" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" 
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  >
                <div>
                 <v-img src="/imgs/img3.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
                 <v-img src="/imgs/img1.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
                 <v-img src="/imgs/img2.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
               </div>
            
               

                </div>

                 <div class="d-inline-block my-0 py-0 col-12">
                 <span  class="d-block titleText"><b>Joy Samson and two others replied your comment </b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>Jul 25,2020 at 13:11 pm</b></span>
                   
                </div>
                   
                     <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">Eum aspernatur deleniti porro beatae... </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>


             <v-card tile flat class="col-12 py-1 px-0 my-1" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" 
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  >
                <div>
                 <v-img src="/imgs/img3.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
                 <v-img src="/imgs/img1.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
                 <v-img src="/imgs/img2.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
               </div>
            
               

                </div>

                 <div class="d-inline-block my-0 py-0 col-12">
                 <span  class="d-block titleText"><b>Joy Samson and two others pulled your comment </b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>Jul 25,2020 at 13:11 pm</b></span>
                   
                </div>
                   
                     <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">Eum aspernatur deleniti porro beatae... </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>


              <v-card tile flat class="col-12 py-1 px-0 my-1" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" 
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  >
                <div>
                 <v-img src="/imgs/img3.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
                 <v-img src="/imgs/img1.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
                 <v-img src="/imgs/img2.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
               </div>
            
               

                </div>

                 <div class="d-inline-block my-0 py-0 col-12">
                 <span  class="d-block titleText"><b>Joy Samson and two others liked your project </b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>Jul 25,2020 at 13:11 pm</b></span>
                   
                </div>
                   
                     <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">Eum aspernatur deleniti porro beatae... </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>

              <v-card tile flat class="col-12 py-1 px-0 my-1" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" 
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  >
                <div>
                 <v-img src="/imgs/img3.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
                 <v-img src="/imgs/img1.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
                 <v-img src="/imgs/img2.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
               </div>
            
               

                </div>

                 <div class="d-inline-block my-0 py-0 col-12">
                 <span  class="d-block titleText"><b>Joy Samson and two others commented on your project </b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>Jul 25,2020 at 13:11 pm</b></span>
                   
                </div>
                   
                     <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">Eum aspernatur deleniti porro beatae... </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>

             <v-card tile flat class="col-12 py-1 px-0 my-1" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" 
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  >
                <div>
                 <v-img src="/imgs/img3.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
                 <v-img src="/imgs/img1.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
                 <v-img src="/imgs/img2.jpg" class="d-inline-block" style="height:28px; width:28px; border:1px solid transparent; border-radius:50%;" ></v-img>
               </div>
            
               

                </div>

                 <div class="d-inline-block my-0 py-0 col-12">
                 <span  class="d-block titleText"><b>You have 3 new connetctions </b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>Jul 25,2020 at 13:11 pm</b></span>
                   
                </div>
                   
                    
                   
                </div>
             </v-card>

              <v-card tile flat class="col-12 py-1 px-0 my-1" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" 
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  >
                <div>
                 <v-img src="/imgs/imgproj3.jpeg" class="d-inline-block" style="height:38px; width:38px; border:1px solid transparent; border-radius:50%;" ></v-img>
               </div>
            
                <div class="d-inline-block ml-2 mt-1">
                 <span  class="d-block titleText"><b>29 new messages from CitonHub</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>Jul 25,2020 at 13:11 pm</b></span>
                   
                </div>

                </div>
                   
                  
                   
                </div>
             </v-card>

            </div>
       </div>
        
              
        </div>

       
         </div>
        </div>
     </div>
</template>
<script>



export default {
    data(){
        return{
          
         
        
        }
    },
     components: {
   
  },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       
    },
    methods:{
       goBack() {

        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
       
      
  },
}
</script>
<style>

.titleText{
    font-size:12px; 
    font-family:HeaderText; 
    color:#173236;
}

</style>