<template>
    <div>
        <div class="col-lg-10 offset-lg-1 px-md-2 px-1">
               

                <div class="d-flex" v-if="this.$root.selectedChallenge.judges == 'everyone'" style="align-items:center; justify-content:center; position:absolute; height:100%;width:100%;left:0%;">

                    <span style="font-size:14px;">Everyone can Judge</span>

               </div>
             
          <template v-else>

               <div class="col-12 py-0 d-flex flex-row pr-0" style="align-items:center;background:#F3F8FC;">
                   <div class="mr-2 d-flex" style="align-items:center;justify-content:center;">
              <div   
    style="border-radius:50%;height:40px;width:40px;background-color:#c5c5c5;background-image:url(/imgs/img3.jpg);background-size: cover;
  background-repeat: no-repeat;">
  </div> 
                   </div>
             
   <div class="py-3 d-flex flex-row" style=" border-bottom:1px solid #c5c5c5;width:100%;align-items:center;">
        <div class="col-8 py-0 px-0 d-flex flex-row" style="align-items:center;">
         <span style="font-size:13px;font-family:BodyFont;" class="mr-1">Abisola James </span><i class="las la-award" style="font-size:20px;color:#560bad;" ></i> 
        </div>

         <div class="col-4 py-0 px-0 d-flex pt-1 pr-2 flex-row-reverse" style="align-items:center;">
              
               
        </div>
       
   </div>
        </div>

         <div class="col-12 py-0 d-flex flex-row pr-0" style="align-items:center;">
                   <div class="mr-2 d-flex" style="align-items:center;justify-content:center;">
              <div   
    style="border-radius:50%;height:40px;width:40px;background-color:#c5c5c5;background-image:url(/imgs/img3.jpg);background-size: cover;
  background-repeat: no-repeat;">
  </div> 
                   </div>
             
   <div class="py-3 d-flex flex-row" style=" border-bottom:1px solid #c5c5c5;width:100%;align-items:center;">
        <div class="col-8 py-0 px-0 d-flex flex-row" style="align-items:center;">
         <span style="font-size:13px;font-family:BodyFont;" class="mr-1">Kolade bola </span><i class="las la-award" style="font-size:20px;color:#560bad;" ></i> 
        </div>

         <div class="col-4 py-0 px-0 d-flex pt-1 pr-2 flex-row-reverse" style="align-items:center;">
             
               
        </div>
       
   </div>
        </div>

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