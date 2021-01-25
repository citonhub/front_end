<template>

<div>
    <div class="col-lg-12 d-sm-none">
<h1 class="text-center" > Select Your Interests-sm</h1>
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
    </div>





  

</div>
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