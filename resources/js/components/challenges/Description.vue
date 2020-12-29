<template>
    <div>
        <div class="col-lg-10 offset-lg-1 px-md-2 px-1">
              <h5>Riiid AIEd Challenge 2020</h5>
             

        <p>
            {{currentChallenge.description}}
        </p>
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