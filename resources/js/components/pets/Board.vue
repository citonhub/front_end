<template>
    <div>
       
       <!-- large screens -->
        <div style="position:fixed;height:100%;left:0;top:0;z-index:9999999999999999;overflow-y:auto;" class="col-lg-10 offset-lg-2 py-0 px-0">

             <div class="col-lg-10 offset-lg-1 py-1 mb-0 col-md-10 offset-md-1 px-0 d-md-block d-none py-0 px-0"
              style="position:absolute; left:0%; top:10%; height:85%;  background:#ffffff;border:1px solid #c5c5c5; border-radius:6px;">
     
                <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky;background:white; top:0%; border-bottom:1px solid #c5c5c5;align-items:center;">
            <div class="px-1 col-3 py-0">
              <v-btn icon >
                      <v-icon>mdi mdi-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-6 py-0 text-center">
             <span style="font-size:14px; font-family:MediumFont;">V18</span>
          </div>
              
              <div class="col-3 py-0 px-1 text-right">
                  <v-btn small rounded color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
                       <span style="color:white;text-transform:capitalize;">Train</span> 
                  </v-btn>
              </div>
          
            </div>

            <div class="col-12 d-flex" style="align-items:center; justify-content:center;">

                

            </div>

              
           </div>

        </div>
     <!-- ends -->
       
    </div>
</template>
<script>
export default {
     data () {
      return {
        selectedTab:''
      }
    },
    mounted(){
      this.setPage();
    },
    methods:{
       
        
    } 
}
</script>
<style scoped>


  .scroller::-webkit-scrollbar {
  width: 6px;
}


.scroller::-webkit-scrollbar-thumb {
  background-color: #3C87CD;
  outline: 1px solid #3C87CD;
}
</style>