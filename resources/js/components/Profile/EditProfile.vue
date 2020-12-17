<template>
    <v-app>
<div style="margin-top:50px;" class="col-12">
   <div  class="col-lg-8 offset-lg-3 offset-md-1 col-md-10 py-1 my-0 px-2">
             <span style="font-size:1.8rem;">Profile Image</span>
            <br>

               <v-sheet
              elevation="0"
              height="100"
              width="120"
              :style="'background-image:url('+ imageUrl + ');cursor:pointer;border-radius:50%;background-size:contain;'"
              class="py-0  px-0 mt-2 sheetbackImg "
              color="whitesmoke">

               <input type="file" id="settingsimage" ref="settingsimage" 
                @change="crophandler" style="opacity:0;width:100%; height:10px; overflow:hidden; position:absolute; z-index:10;"
                 accept="image/x-png,image/jpeg,image/jpg"/>
               <v-sheet
               
              
               elevation="0"
               height="100%"
               width="100%"
               style="border-radius:10px;background:#c5c5c5;"
               class="py-auto px-auto d-flex"
               >
                  
                 <v-icon class="mx-auto white-text">mdi-camera-plus</v-icon>
                
               </v-sheet>
              </v-sheet>
              </div>  

              <div class="col-lg-6 offset-lg-3  py-2 my-0 px-2">

              <v-text-field
                 style="font-size:13px;"
                 outlined
              label="Name"
            
          
            placeholder="Full Name"
           
             prepend-inner-icon="las la-user"
            
             color="#3C87CD">
             </v-text-field>   
             </div>


               <div class="col-lg-6 offset-lg-3  py-2 my-0 px-2">

              <v-textarea
                 style="font-size:13px;"
                 outlined
              label="Description"
            
          
            placeholder="Describe Yourself"
           
            clearable

            
            
             color="#3C87CD">
             </v-textarea>   
             </div>
</div>


    </v-app>
</template>




<script>
export default {
    
}
</script>