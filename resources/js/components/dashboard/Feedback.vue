<template>
    <div class="top">
      <div class="feed-header col-lg-12 " style="margin-top:100px; color:#3C87CD;">
<h1 class="text-center" style="font-size:2.5rem;"> We would love to hear from you!</h1>
<p class="text-center mt-4" style="color:black;">Please help us with feedback to improve citonhub.</p>

<div class="message form-group col-lg-4 offset-lg-4">
   
    <textarea name="" id="" cols="30" rows="10" placeholder="Citonhub is..." class="form-control" v-model="feedback"></textarea>
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