<template>
    <div>
        <!-- large and medium screen top bar -->
    
   

     <!-- top bar smaller screen -->

       <div class="col-12 d-block d-md-none py-2 " style="position:absolute; top:0; left:0; font-family:BodyFont; z-index:99999999999;background:#ffffff;">

         <div class="row px-2">
             <v-card  style="border-radius:7px;" class="col-12 py-2 px-1">
                   <div class="row">
                   <div class="col-2 py-0  text-center">
                 <v-btn icon @click="that.$root.showSideBar = true"><v-icon style="font-size:25px;color:#263238;" >las la-bars</v-icon></v-btn>
            </div>
             <div class="col-6 d-flex py-0 px-1" style="justify-content:center;align-items:center;">

             <input style="width:100%;heigth:100%;font-size:12px;"  placeholder="Search" class="py-2 px-2" type="search" >       
         
            </div>
             <div class="col-2 text-center py-0">
                <v-btn icon ><v-icon style="font-size:25px;color:#263238;" >las la-bell</v-icon></v-btn>
            </div>
             <div class="col-2 d-flex px-1 py-0" style="justify-content:center; align-items:center;">
                 <div style="border-radius:50%;height:32px;width:32px;background-color:#c5c5c5; background-image:url(/imgs/img3.jpg); background-size:100%;border:1px solid transparent;"></div>
            </div>
                   </div>
             </v-card>
         </div>

     </div>

     <!-- ends -->
    </div>
</template>
<script>
export default {
     data () {
      return {
       showSideBar:false,
       searchType:'',
       that:this
      }
    },
    mounted(){
      this.$root.TopBarComponent = this;
    }
}
</script>
<style scoped>

</style>