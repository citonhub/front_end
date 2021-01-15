<template>
    <v-app class="top" style="background:transparent;font-family:BodyFont;">

    <!-- spacer -->
         
           <div class="col-12 mt-5"> 

           </div>
     <!-- ends -->

      <div class="feed-header col-md-8 offset-md-2 mt-4  " style="color:#3C87CD;">
<h1 class="text-center" style="font-size:17px;"> We would love to hear from you!</h1>
<p class="text-center mt-4" style="color:grey;font-size:14px;font-family:BodyFont;">Please help us with feedback to improve citonhub.</p>

<div class=" form-group col-lg-8 offset-lg-2 col-sm-8 offset-sm-2 ">
   
   <v-textarea
     v-model="feedback"
    clearable
    clear-icon="las la-times-circle"
    filled
    color="#3C87CD"
    style="font-size:13px;"
      label="Your message"
      auto-grow
    
    ></v-textarea>
</div>

 <div class="col-12 pt-0 mt-n2 text-center">

        <v-btn small  color="#3C87CD" style="color:white;text-transform:normal;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" >Send</v-btn>

 </div>
      </div>
    </v-app>
</template>



<script>
export default {
  data(){
    return{
      feedback:''
    }
  }
}
</script>