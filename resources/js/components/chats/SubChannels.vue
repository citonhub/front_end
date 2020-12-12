<template>
  <div style="background:transparent;">
   <div class="col-12 py-1 my-0 ">
    <div class="row">
        <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 py-0">
              <v-btn icon >
                      <v-icon>mdi mdi-close</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-0">
             <span style="font-size:14px; font-family:MediumFont;">Sub Channels</span>
          </div>
              
              <div class="col-2 py-0 mr-1 text-right">
                 <v-btn icon >
                      <v-icon>las la-plus-circle</v-icon>
                    </v-btn>
              </div>
          
        </div>


        <div class="col-12 ">

            <div class="row px-2">
            <v-card flat tile class="col-12 py-2 px-1 messageBox" style="border-bottom:1px solid #cccccc; background:whitesmoke;">
              <div class="row py-0 my-0">
                  <div class="col-2 py-0 my-0">
                    <v-icon >mdi-google-circles-extended mdi-18px</v-icon>
                     
                  </div>
                  <div class="col-8 py-0 my-0 text-center">
                       <span  style="font-size:13px; color:#1e4148; font-family:MediumFont;"> General</span>
                  </div>
                  <div class="py-0 my-0 d-flex col-2" style="align-items:center;" >
                          <span class="messagesBadges d-flex ml-lg-0 ml-0" >5</span>
                    </div>
              </div>
           </v-card>

            <v-card flat tile class="col-12 py-2 px-1 messageBox" style="border-bottom:1px solid #cccccc;">
              <div class="row py-0 my-0">
                  <div class="col-2 py-0 my-0">
                    <v-icon style="font-size:20px;">mdi-pound</v-icon>
                     
                  </div>
                  <div class="col-8 py-0 my-0 text-center">
                       <span  style="font-size:13px; color:#1e4148; font-family:MediumFont;"> Rules</span>
                  </div>
                  <div class="py-0 my-0 d-flex col-2" style="align-items:center;" >
                          <span class="messagesBadges d-flex ml-lg-0 ml-0" >5</span>
                    </div>
              </div>
           </v-card>


           <v-card flat tile class="col-12 py-2 px-1 messageBox" style="border-bottom:1px solid #cccccc;">
              <div class="row py-0 my-0">
                  <div class="col-2 py-0 my-0">
                    <v-icon style="font-size:20px;">mdi-pound</v-icon>
                     
                  </div>
                  <div class="col-8 py-0 my-0 text-center">
                       <span  style="font-size:13px; color:#1e4148; font-family:MediumFont;"> Help</span>
                  </div>
                  <div class="py-0 my-0 d-flex col-2" style="align-items:center;" >
                          
                    </div>
              </div>
           </v-card>

            <v-card flat tile class="col-12 py-2 px-1 messageBox" style="border-bottom:1px solid #cccccc;">
              <div class="row py-0 my-0">
                  <div class="col-2 py-0 my-0">
                    <v-icon style="font-size:20px;">mdi-lock</v-icon>
                     
                  </div>
                  <div class="col-8 py-0 my-0 text-center">
                       <span  style="font-size:13px; color:#1e4148; font-family:MediumFont;"> Masters</span>
                  </div>
                  <div class="py-0 my-0 d-flex col-2" style="align-items:center;" >
                          
                    </div>
              </div>
           </v-card>

            </div>

            

        </div>

    </div>
   </div>

  </div>
   
</template>

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