<template>
    <div class="top">

 <div class=" mt-4 col-12 d-md-none d-block" style="background:#F5F5FB;">

    </div>

      <div class="feed-header col-md-8 offset-md-2 mt-4  " style="color:#3C87CD;">
<h1 class="text-center" style="font-size:2.5rem;"> We would love to hear from you!</h1>
<p class="text-center mt-4" style="color:black;">Please help us with feedback to improve citonhub.</p>

<div class="message form-group col-lg-8 offset-lg-2 col-sm-8 offset-sm-2 col-10 offset-1">
   
   <v-textarea
     v-model="feedback"
    clearable
    clear-icon="las la-times-circle"
    filled
      label="Your message"
      auto-grow
    
    ></v-textarea>
</div>
      </div>
    </div>
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