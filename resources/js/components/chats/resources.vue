<template>
  <div class="py-1 px-0">

       <div class="d-flex flex-row flex-wrap col-12 py-1 px-1 px-md-2">
    

       <v-card flat class="d-flex flex-row px-1  mb-2 col-12 " v-for="(resource,index) in resources" :key="index" style="background: rgba(125, 179, 229, 0.4);">
              <div class="mr-2 ">
                 <v-icon color="#000000" class="ml-2">las la-folder</v-icon>
              </div>

              <div>
              <span  style="font-family:BodyFont;color:black;font-size:13px;">{{resource}}</span>
              </div>

              <div class="ml-auto px-2">
               <span class="d-flex flex-row"
                style="font-family:BodyFont;align-items:center; justify-content:center; color:black;font-size:13px; background:white; height:26px; width:26px; border:1px solid #ffffff;border-radius:50%;">12</span>
              </div>

        </v-card>     

       </div>

  

  </div>
</template>

<script>
export default {
data(){
    return{
         resources:[
        'Java Routes',
        'Props in Java',
        'Data Binding JS' ,
        'Components VueJs',

    ]
    }
   
}
}
</script>

<style>

</style>