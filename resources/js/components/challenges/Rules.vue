<template>
    <div>
        <div class="col-lg-10 offset-lg-1 px-md-2 px-1">
              <h4>One account per participant</h4>
              <p>{{currentChallenge.rules}}</p>
             
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            currentChallenge:''
        }
    },

    created(){
      
         this.currentChallenge=this.$root.selectedChallenge;
       
       
    }
}
</script>
<style scoped>
p {
   color:#333333;
   font-size:14px;
}
</style>