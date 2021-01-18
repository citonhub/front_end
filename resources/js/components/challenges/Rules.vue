<template>
    <div>
        <div class="col-lg-10 offset-lg-1 px-md-2 px-1">
              
              <p v-html="that.$root.selectedChallenge.rules"></p>
             
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            that:this
        }
    },

  
}
</script>
<style scoped>
p {
   color:#333333;
   font-size:14px;
}
</style>