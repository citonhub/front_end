<template>
<div>
 
   <div class="col-12 px-1 px-md-2 py-0 mt-md-5 pt-md-4 scroller" style="overflow-y:auto;overflow-x:hidden; position:absolute; width:100%;height:100%;">
    <router-view></router-view>
   </div>

</div>
  
</template>

<script>
 export default {
    data () {
      return {
       
      }
    },
  }
</script>
<style scoped>
 .scroller::-webkit-scrollbar {
  width: 5px;
}

 
.scroller::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
  
  
</style>
