<template>
  <div class="py-1 px-0">
      <div class="navigate  px-0 py-1 mt-3" style="border-bottom:1px solid #3C87CD" >
   
   
  <h6 class="mt-2">Add new Resource</h6>

  <div class="form-group d-flex mt-2">
<input type="text" class="form-control">
<v-btn class="ml-2" color="#3c97cd">Add</v-btn>
  </div>

</div>

<div class="video-list mt-2" v-for="(resource,index) in resources" :key="index">
    <div class="list-item px-0 d-flex py-2" style="background: rgba(125, 179, 229, 0.5);height:40px;border-radius:5px;
">
<v-icon color="#000" class="ml-2">las la-file</v-icon>
<span class="ml-3" style="font-family:BodyFont;color:black;">{{resource}}</span>
    </div>
</div>


  </div>
</template>

<script>
export default {
data(){
    return{
         resources:[
        'Vue Routes',
        'Props',
        'Data Binding',
        'Components',

    ]
    }
   
}
}
</script>

<style>

</style>