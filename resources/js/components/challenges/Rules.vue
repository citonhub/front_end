<template>
    <div>
        <div class="col-lg-10 offset-lg-1 px-md-2 px-1">
              
          
              <vue-markdown  class="para">{{that.$root.selectedChallenge.rules}}</vue-markdown>
             
        </div>
    </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'

export default {
    data(){
        return{
             that:this
        }
    },
    components: {
    VueMarkdown
  }

   
}
</script>
<style scoped>
.para {
   color:#333333;
   font-size:14px;
}
</style>