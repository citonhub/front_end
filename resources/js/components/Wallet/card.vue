<template>
<div>
 
    <div class="col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top" style="position:sticky; background:#F5F5FB; z-index:999999999999; border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5>Wallet</h5>
        </div>
         <div class="col-6  py-0 my-0 text-right">
          
        </div>
      </div>
   </div>


    <!--notifications list view -->

  <div class="col-lg-10 offset-lg-1 py-0 pb-2 px-2 ">

        <div class="row ">

            <!-- spacer -->
         
           <div class="col-12 mt-5 mt-md-0 d-md-none d-block"> 

           </div>
          <!-- ends -->

          <div class="col-12 px-0 d-flex flex-row">
                

                <div class="col-lg-4 py-1 col-md-6 ">

                   <v-card height="230" width="100%" style="background-repeat: no-repeat;
          border-radius:10px;background: url(/imgs/card_bg_2.jpg);background-size:cover;">

          <div style="position:absolute;width:100%;top:0%; left:0%; height:25%; align-items:center;" class="d-flex flex-row">

            <img height="50" src="/imgs/credit-card-chip.png" class="pl-2 pt-2" >

           

         

          </div>


           <div style="position:absolute;width:100%;top:25%; left:0%; height:50%; align-items:center;" class="d-flex flex-row">

           <div style="width:50%;" class="d-flex px-2 flex-column text-left">
                  <div style="font-size:12px;color:white;font-family:BodyFont;">Name</div>

                   <div style="font-size:14px;color:white;font-family:HeaderFont;">Akinola Raymond</div>
           </div>

           <div style="width:50%;" class="d-flex px-2 flex-column text-right">
                 <div style="font-size:12px;color:white;font-family:BodyFont;">Number</div>

                   <div style="font-size:14px;color:white;font-family:HeaderFont;">**** **** 4567</div>
           </div>



          </div>


           <div style="position:absolute;width:100%;top:75%; left:0%; height:25%; align-items:center;" class="d-flex flex-row">

           <div  class="d-flex px-2 pb-2 flex-column text-left">
             <div style="font-size:12px;color:white;font-family:BodyFont;">Balance</div>

             <div style="font-size:26px;color:white;font-family:HeaderFont;">&#8358; 456,078.00</div>

                  
              
                   
           </div>

              <img height="50" src="/imgs/logo.png" class="pr-2 pb-2 ml-auto" >

           


          </div>

        </v-card>


                </div>
           

               <div class="col-lg-4 py-1 col-md-6 ">

                   <v-card height="230" width="100%" style="background-repeat: no-repeat;
          border-radius:10px;background: url(/imgs/card_bg_2.jpg);background-size:cover;">

          <div style="position:absolute;width:100%;top:0%; left:0%; height:25%; align-items:center;" class="d-flex flex-row">

            <img height="50" src="/imgs/credit-card-chip.png" class="pl-2 pt-2" >

            

          </div>


           <div style="position:absolute;width:100%;top:25%; left:0%; height:50%; align-items:center;" class="d-flex flex-row">

           <div style="width:50%;" class="d-flex px-2 flex-column text-left">
                  <div style="font-size:12px;color:white;font-family:BodyFont;">Name</div>

                   <div style="font-size:14px;color:white;font-family:HeaderFont;">DSC Havard</div>
           </div>

           <div style="width:50%;" class="d-flex px-2 flex-column text-right">
                 <div style="font-size:12px;color:white;font-family:BodyFont;">Number</div>

                   <div style="font-size:14px;color:white;font-family:HeaderFont;">**** **** 4567</div>
           </div>



          </div>


           <div style="position:absolute;width:100%;top:75%; left:0%; height:25%; align-items:center;" class="d-flex flex-row">

           <div  class="d-flex px-2 pb-2 flex-column text-left">
             <div style="font-size:12px;color:white;font-family:BodyFont;">Balance</div>

             <div style="font-size:26px;color:white;font-family:HeaderFont;">$ 6,078.00</div>

                  
              
                   
           </div>

           <img height="50" src="/imgs/logo.png" class="pr-2 pb-2 ml-auto" >

         

         


          </div>

        </v-card>


                </div>
           
          </div>

        
          <!-- spacer -->

          <div class="col-12 py-5 my-5">

          </div>

          <!-- ends -->

      </div>

  </div>

 <!-- ends -->

</div>
  
</template>

<script>
 export default {
    data () {
      return {
       
         loading:false,
      }
     
    },
     mounted(){
     this.$root.showTopBar = true;
     
 
  
    },

     methods:{
     
        
      
      },
     
  }
</script>
<style scoped>


  
</style>
