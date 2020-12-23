<template>
    <div class="row px-1">
       <div class="col-12 px-1 d-flex flex-row py-0 messageBox" style="align-items:center; justify-content:center; background:whitesmoke;" @click="openChat" >
           
                   <div  class=" mr-2 py-3" 
                     style="border-radius:50%;height:40px;width:40px;background-color:#c5c5c5;background-image:url(/imgs/imgproj3.jpeg);background-size: cover;
                    background-repeat: no-repeat; border:1px solid transparent;"></div> 
                     <div class="px-0 py-3" style="width:85%;border-bottom:1px solid #e6e6e6;" >
                                 <div class="pr-1">
                                    <div class="row py-0 my-0 px-0">
                                       <div class="col-8 py-0 my-0 ">
                                               <span style="font-size:14px; font-family:BodyFont;">Channel Name 1</span>
                                       </div>
                                        <div class="col-4 py-0 my-0  text-right">
                                             <span  style="font-size:11px; font-family:BodyFont;color:gray; margin-right:0px;" >2:12 PM</span>  
                                       </div>
                                    </div>
                                 </div>

                                <div class=" ">
                                    <div class="row py-0 my-0 px-0">
                                       <div class="col-10 py-0 my-0  ">
                                             <div style="font-size:13px; color:grey; font-family:BodyFont;">adekunle:great i would love to see you </div>
                                       </div>
                                        <div class="col-2  py-0 my-0 text-right">
                                              <span class="messagesBadges d-flex ml-lg-0 ml-md-5 ml-0" >5</span>
                                       </div>
                                    </div>
                                 </div>          
                     </div>      
       </div>


        <div class="col-12 px-1 d-flex flex-row py-0 messageBox" style="align-items:center; justify-content:center;" >
           
                   <div  class=" mr-2 py-3" 
                     style="border-radius:50%;height:40px;width:40px;background-color:#c5c5c5;background-image:url(/imgs/imgproj3.jpeg);background-size: cover;
                   background-repeat: no-repeat; border:1px solid transparent;"></div> 
                     <div class="px-0 py-3" style="width:85%;border-bottom:1px solid #e6e6e6;" >
                                 <div class="pr-1">
                                    <div class="row py-0 my-0 px-0">
                                       <div class="col-8 py-0 my-0 ">
                                               <span style="font-size:14px; font-family:BodyFont;">Channel Name 1</span>
                                       </div>
                                        <div class="col-4 py-0 my-0  text-right">
                                             <span  style="font-size:11px; font-family:BodyFont;color:gray; margin-right:0px;" >2:12 PM</span>  
                                       </div>
                                    </div>
                                 </div>

                                <div class=" ">
                                    <div class="row py-0 my-0 px-0">
                                       <div class="col-10 py-0 my-0 ">
                                             <div style="font-size:13px; color:grey; font-family:BodyFont;">adekunle:great i would love to see you</div>
                                       </div>
                                        <div class="col-2 py-0 my-0  text-right">
                                              <span class="messagesBadges d-flex ml-lg-0 ml-md-5 ml-0" >5</span>
                                       </div>
                                    </div>
                                 </div>          
                     </div>      
       </div>

       
    </div>
</template>
<script>
export default {
    methods:{
       openChat:function(){
             
            this.$router.push({ path: '/channels/space_id/content' });

           this.$root.chatComponent.chatIsOpen = true;

       }
    }
}
</script>
<style scoped>
.messagesBadges{
    
    color: #ffffff;
    background: #3C87CD;
    font-size: 11px;
    font-family: BodyFont;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
    height:20px;
    width:20px;
    border-radius:50%;
}
.messageBox:hover{
    background:whitesmoke;
    cursor: pointer;
}
</style>