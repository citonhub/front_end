<template>
  <div class="col-lg-12">

      <div class="progress-bars col-lg-10 offset-1">
      <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" style="width: 33%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" style="width: 34%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>

<div class="rounded-circle circle-1 shadow-sm" style="width:25px;height:25px;"></div>
<div class="rounded-circle circle-2 shadow-sm" style="width:25px;height:25px;"></div>
<div class="rounded-circle circle-3 shadow-sm" style="width:25px;height:25px;"></div>

<div class="steps d-flex col-lg-10 offset-1 px-0">
<div class="payment col-lg-4">
    <h2 class="col-lg-12 text-center" style="font-size:1.3rem;">Setup Payment Account</h2>
<div class="col-12 py-0 my-0 px-2">
              <v-text-field
                 style="font-size:12px;"
                 placeholder="DSC Nowhere"
            label="Your Name"
            counter="80"
            
            
            outlined
           
            
             color="#3C87CD"
             ></v-text-field>

             </div>
</div>

<div class="default col-lg-4">
    <h2 class="col-lg-12 text-center" style="font-size:1.3rem;">Setup Recurring Payments</h2>

</div>
<div class="recurr col-lg-4">
    <h2 class="col-lg-12 text-center" style="font-size:1.3rem;">Setup Default Currency</h2>
    <div class="col-lg-10 offset-1">
<v-select
          
          label="Naira(NGN)"
          outlined
          height="30px"
        ></v-select>
    </div>

</div>
</div>



  </div>
</template>

<script>
export default {

}
</script>

<style>
.circle-1{
    position:absolute;
    left:35%;
    top:21px;
    background: #3C87CD;
}

.circle-2{
    position:absolute;
    left:61%;
    top:21px;
      background: #3C87CD;
}

.circle-3{
    position:absolute;
    left:88%;
    top:21px;
      background: #3C87CD;
}

.steps > *{
    background: white;
}
</style>