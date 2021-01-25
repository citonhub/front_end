<template>
   
        <v-card class="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-6 offset-sm-3 d-md-block d-sm-block d-none" >

<h1 class="text-center" > Select Your Interests</h1>
<p class="text-center">Pick one or more.</p>
<div v-for="(interest,index) in Interests" :key="index" class="interest col-lg-12 d-flex mb-2" style="background-color:rgba( 125,179,229,0.1); font-size:1.6rem;font-weight:bold;
">
   <div class="form-check">
  <input class="form-check-input mt-2" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
   {{interest}}
  </label>
</div>
    

  
</div>

<div class="buttons mt-2 col-4 offset-8 d-flex">
  <p style="font-size:1.2rem;font-weight:bold;">Skip</p>  <v-btn    class="ml-2 px-2" style="color:white;background-color: #3C87CD;border-radius:10px;height:30px;">Done</v-btn>
</div>


        </v-card>
   
</template>

<script>
  export default {
    data () {
      return {
       Interests: ['Javascript', 'PHP', 'Python', 'React', 'CSS', 'HTML', 'Flutter', 'Golang', 'Java', 'C++', 'Dart'],
      }
    },
  }
</script>