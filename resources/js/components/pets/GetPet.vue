<template>
    <v-app style="foont-family:BodyFont;">
        <div class="col-12">
            <div style="background-color:#3C87CD;color:white;font-size:30px;" class=" col-lg-6 offset-lg-3 text-center">Create Your Pet!</div>

<!--Name textfield starts -->
  <p style="font-size:18px;margin-top:40px;" class=" offset-1 text-left">1.Name your pet.</p>

            <div class="col-lg-8 offset-lg-2 px-2 mt-4 py-1">
              
  <v-text-field
                 style="font-size:13px;"
                
              label="Name Your Pet"
             outlined
            counter="30"
            placeholder="Pet Name"
           
            outline-color="#3C87CD"
             color="#3C87CD">
             </v-text-field>

</div>

<!--Name textfield ends -->


<!-- pet picture selection section starts-->


<div class="pet-pic col-lg-12 offset-lg-1  ">
<p style="font-size:18px;" class="text-left">2.Upload your pet's profile photo</p>

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


             <p class="text-center">Or</p>

<p style="font-size:18px;">Select from default.</p>
<div class="default-images d-lg-flex">
    <img class="col-lg-2" src="/imgs/profile/pet1.png" alt="">

     <img class="col-lg-2" src="/imgs/profile/pet1.png" alt="">
</div>
</div>

<!-- pet picture selection section starts-->

<!-- channel selection field for pets starts-->

 <p style="font-size:18px;" class="offset-1 text-left">3.Select a channel.</p>

<div class="col-lg-8 offset-lg-2 px-2 mt-4 py-1">
               
  <v-select
                 style="font-size:13px;"
                
              label="Channel"
             outlined
            counter="30"
            placeholder="Channel"
           
            outline-color="#3C87CD"
             color="#3C87CD">
             </v-select>


</div>

<!-- channel selection field for pets ends-->


<!-- pet description field starts-->

<p style="font-size:18px;" class="text-left offset-1">
  4.Tell us about your pet
</p>

  <div class="col-lg-8 offset-lg-2 py-2 my-0 px-2">
    				<v-textarea style="font-size:13px;" dense placeholder="My pet is..."  outlined color="#3C87CD" label="Describe your pet"></v-textarea>
    			</div>

          <!-- pet description field ends-->



          <!--create button starts-->
           <div class=" text-center col-lg-6 offset-lg-3 py-1 mt-4 my-0 px-2">
                 <v-btn  medium rounded  color="#3C87CD" style="font-size:12px; font-family:MediumFont;font-weight:bolder; color:white;">
               Create Pet
               </v-btn>
             </div>
      
           
            </div>
        
    </v-app>
</template>