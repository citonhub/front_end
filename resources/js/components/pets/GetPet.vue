<template>
    <v-app style="background:transparent;font-family:BodyFont;" class="px-0">

       <div class="col-lg-10 offset-lg-1 py-1 col-md-10 offset-md-1 px-2 d-md-block d-none fixed-top" style="position:sticky;z-index:9999999999;background:#F5F5FB;border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5> <v-btn icon><v-icon>las la-arrow-left</v-icon></v-btn> Get a pet</h5>
        </div>

         <div class="col-6 py-0 my-0 text-right">
             <v-btn  small rounded  color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:BodyFont;">
             Done
           </v-btn>
        </div>
         
      </div>
   </div>

   <div class=" px-0 col-12 py-1 pb-0 d-md-none d-block fixed-top" style="position:sticky; background:#F5F5FB;border-bottom:1px solid #c5c5c5;">
     <div class="row py-0">
        <div class="col-8 py-0 my-0">
           <h6 style="font-size:17px;"><v-btn  icon><v-icon>las la-arrow-left</v-icon></v-btn>Get a pet</h6>
        </div>
         <div class="col-4 py-0 my-0 text-right">
          <v-btn small rounded  color="#3C87CD" style="font-size:12px; font-weight:bolder; text-transform:none; color:white;font-family:BodyFont;">
             Done
           </v-btn>
        </div>
      </div>
   </div>


        <div class="col-12 px-0">
           
              <div class="col-lg-8 offset-lg-2 py-1 col-md-10 offset-md-1 px-1 ">

      <div class="row">

    
    <!--Name textfield starts -->
           <div class="col-lg-8  py-1 my-0 px-2">

             <div style="font-size:14px;"  class="mb-1">1.Name your pet</div>
              <v-text-field
                 style="font-size:13px;"
                
            label="Pet name"
            counter="60"
            persistent-hint
          
             prepend-inner-icon="las la-paw"
            
             color="#3C87CD">
             </v-text-field>

             </div>
        
    <!--Name textfield ends -->

    
    <!--   pet picture selection section starts -->

    <div class="col-12 py-1 my-0 mt-n3 px-2 pl-3">
              <div style="font-size:14px;"  class="my-2">2.Upload your pet's profile photo</div>

               <v-sheet
              elevation="0"
              height="100"
              width="120"
              :style="'background-image:url('+ imageUrl + ');border-radius:10px;cursor:pointer;background-size:contain;'"
              class="py-0  px-0 mt-2 sheetbackImg"
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
    
                <div style="font-size:13px;color:grey;" class="mt-3">Or select from defaults</div>

               <div class="d-flex flex-row mt-3" >
                       <div    class="mr-2"
    style="border-radius:10px;height:60px;width:60px;background-color:#c5c5c5;background-image:url(/imgs/profile/pet1.png);background-size: cover;
  background-repeat: no-repeat; border:1px solid #c5c5c5;">
  </div> 

    <div    class="mr-2"
    style="border-radius:10px;height:60px;width:60px;background-color:#c5c5c5;background-image:url(/imgs/imgproj2.jpeg);background-size: cover;
  background-repeat: no-repeat;border:1px solid #c5c5c5;">
  </div> 

     <div    class="mr-2"
    style="border-radius:10px;height:60px;width:60px;background-color:#c5c5c5;background-image:url(/imgs/imgproj1.jpeg);background-size: cover;
  background-repeat: no-repeat; border:1px solid #c5c5c5;">
  </div> 
              </div>

              </div>

   <!-- pet picture selection section ends-->


   <!-- channel selection field for pets starts-->

   
    <div class=" col-lg-12 py-1 my-0 px-2">
            <div style="font-size:14px;"  class="my-2" >3.Select a channel <span style="font-size:12px;color:grey;">(optional)</span></div>

                  
                    <div class="col-lg-8 px-0">
                         <v-select
                 style="font-size:13px;"
              dense
              label="Channel"
            counter="20"
            placeholder="select..."
            persistent-hint
            chips
            
            
             color="#3C87CD">

              <template v-slot:selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :input-value="data.selected"
              color="#3C87CD"
              dense
              class="my-1"
              style="font-size:12px; font-family:BodyFont;"
              outlined
              :disabled="data.disabled"
          
            >
             
              {{ data.item.name }}
            </v-chip>

              </template>
             </v-select>

                    </div>
                
              
             </div>


   <!-- channel selection field for pets ends-->



<!-- pet description field starts-->
  
  <div class="col-lg-8  py-1 my-0 px-2">

             <div style="font-size:14px;" class="mb-3">4.Tell us about your pet</div>
              <v-textarea
                 style="font-size:13px;"
                
            label="Describe your pet"
            counter="100"
            placeholder="My pet is..."  
            outlined
          
             color="#3C87CD">
             </v-textarea>

             </div>

  
   <!-- pet description field ends-->
          <div class="col-12">

          </div>
      
       
      </div>

  </div>

      
           
       </div>
        
    </v-app>
</template>
<script>
export default {
  
}
</script>
<style scoped>

</style>