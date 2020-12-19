<template>
     
      <div class="row" style="font-family:BodyFont;background:transparent;">

    <!-- contents  -->
         <div class="col-12 px-md-4 px-3 py-2 pt-0 mt-1 text-left" style="height:auto !important; font-family:BodyFont; background:transparent !important;" >
           
           <v-app class="row">

               <div class="col-12 py-2 my-0 px-2">
                 <div>
                     <span style="font-size:13px;">Profile Image</span>
                 </div>
             
              <v-row>
             <v-col class="col-12 d-flex" style="align-items:center; justify-content:center;" >
                   <v-sheet
              elevation="0"
              height="120"
              width="120"
              :style="'background-image:url('+ this.$root.croppedImage + ');border-radius:50%;cursor:pointer;background-size:contain;'"
              class="py-0 px-0 sheetbackImg mx-auto"
              color="whitesmoke">

               <input type="file" id="settingsimage" ref="settingsimage" 
               style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept="image/x-png,image/jpeg,image/jpg"/>
               <v-sheet
               
              
               elevation="0"
               height="100%"
               width="100%"
               style="border-radius:50%;"
               class="py-auto px-auto d-flex"
               color="rgba(15, 33, 36, 0.3)">
                  
                 <v-icon class="mx-auto white-text">mdi-camera-plus</v-icon>
                
               </v-sheet>
              </v-sheet>

             </v-col>
             </v-row>
             </div> 
              

              <div class="col-12 py-2 my-0 px-2">
    				<v-text-field style="font-size:13px;" dense placeholder="name"  outlined color="#3C87CD" label="Name"></v-text-field>
    			</div>

          <div class="col-12 py-2 my-0 px-2">
    				<v-textarea style="font-size:13px;" dense placeholder="your bio"  outlined color="#3C87CD" label="Bio"></v-textarea>
    			</div>
           
       
        

        
            <!-- add project button -->
             <div class=" text-center col-12 py-1 mt-4 my-0 px-2">
                 <v-btn  medium rounded  color="#3C87CD" style="font-size:12px; font-family:MediumFont;font-weight:bolder; color:white;">
               Save
               </v-btn>
             </div>

             <!-- ends -->



             <!-- ends -->

           </v-app>


           
          
        </div>


     <!-- ends -->


    </div>
    
</template>
<script>
export default {

  methods:{
  
  }
 
}
</script>