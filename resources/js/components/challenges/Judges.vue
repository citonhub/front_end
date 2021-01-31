<template>
    <div>
        <div class="col-lg-10 offset-lg-1 px-md-2 px-1">
               

                <div class="d-flex" v-if="this.$root.selectedChallenge.judges == 'everyone'" style="align-items:center; justify-content:center; position:absolute; height:100%;width:100%;left:0%;">

                    <span style="font-size:14px;">Everyone can Judge</span>

               </div>
             
          <template v-else>

              

      

          </template>

           
               

        </div>
    </div>
</template>
<script>
export default {
     data(){
        return{
          judges:''
          
        }
    },
    methods:{
       
    },
}
</script>
<style scoped>

</style>