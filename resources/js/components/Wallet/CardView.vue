<template>
<div style="overflow-x:hidden;" >
 
    <div class="col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top" style="position:sticky; background:#F5F5FB; z-index:999999999999; border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0 d-flex flex-row" style="align-items:center;">
          <v-btn icon class="mr-1"><v-icon>las la-arrow-left</v-icon></v-btn> <h5>DSC Landmark</h5>
        </div>
         <div class="col-6  py-0 my-0 text-right">
          
        </div>
      </div>
   </div>

     <div class=" px-1 col-12 py-2 d-md-none d-block fixed-top" style="position:sticky; background:#F5F5FB;border-bottom:1px solid #c5c5c5;">
     <div class="row">
        <div class="col-8 py-0 my-0">
            <v-btn   icon><v-icon>las la-arrow-left</v-icon></v-btn>  <h6 class="d-inline-block" >DSC Landmark</h6>
        </div>
         <div class="col-4 py-0 my-0 text-right">
          <v-btn  small  color="primary" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;text-transform:none;">
             Manage
           </v-btn>
        </div>
      </div>
   </div>


    <!--card  view -->

  <div class="col-lg-10 offset-lg-1 py-0 pb-2 px-1 px-md-2" style="overflow-x:hidden;">

       

           

          <div class="col-12 d-flex px-md-2 px-0 flex-row">

              <div class="col-md-4 d-md-flex d-none" style="align-items:center;justify-content:center;">
             
               <v-card min-width="180" class="bg-primary">

                   <div  class="d-flex px-2 pb-2 flex-column text-left">
                       <div class="d-flex flex-row">
                   
                      <div style="font-size:12px;color:white;font-family:BodyFont;">Fees</div>

                      <v-btn x-small icon class="ml-auto"><v-icon style="font-size:16px;color:white;">las la-exclamation-circle</v-icon></v-btn>


                       </div>
           

             <div style="font-size:18px;color:white;font-family:HeaderFont;">$ 120.00</div>

                  
              
                   
           </div>
                   
               </v-card>
              </div>
               <div class="col-lg-4  d-flex flex-column px-1  py-md-2 py-0" style="align-items:center;justify-content:center;"> 

                   <v-card height="200" width="100%" max-width="370px" style="background-repeat: no-repeat;
          border-radius:10px;background: url(/imgs/card_bg_3.jpg);background-size:cover;">

          <div style="position:absolute;width:100%;top:0%; left:0%; height:25%; align-items:center;" class="d-flex flex-row">

            <img height="50" src="/imgs/credit-card-chip.png" class="pl-2 pt-2" >

           

         

          </div>


           <div style="position:absolute;width:100%;top:25%; left:0%; height:50%; align-items:center;" class="d-flex flex-row">

           <div style="width:50%;" class="d-flex px-2 flex-column text-left">
                  <div style="font-size:12px;color:white;font-family:BodyFont;">Name</div>

                   <div style="font-size:14px;color:white;font-family:HeaderFont;">DSC Landmark</div>
           </div>

           <div style="width:50%;" class="d-flex px-2 flex-column text-right">
                 <div style="font-size:12px;color:white;font-family:BodyFont;">Number</div>

                   <div style="font-size:14px;color:white;font-family:HeaderFont;">**** **** 4567</div>
           </div>



          </div>


           <div style="position:absolute;width:100%;top:75%; left:0%; height:25%; align-items:center;" class="d-flex flex-row">

           <div  class="d-flex px-2 pb-2 flex-column text-left">
             <div style="font-size:12px;color:white;font-family:BodyFont;">Balance</div>

             <div style="font-size:22px;color:white;font-family:HeaderFont;">$ 1,078.00</div>

                  
              
                   
           </div>

              <img height="40" src="/imgs/logo.png" class="pr-2 pb-2 ml-auto d-md-block d-none" >

               <div  class="d-md-none d-flex pr-2 pb-2 flex-column text-right ml-auto">
             <div style="font-size:12px;color:white;font-family:BodyFont;">Fees <v-icon style="font-size:16px;color:white;">las la-exclamation-circle</v-icon></div>

             <div style="font-size:18px;color:white;font-family:HeaderFont;">$ 120.00</div>

                  
              
                   
           </div>

           


          </div>

        </v-card>

         <div class="col-12 pb-md-2 pb-1 px-0 d-flex flex-row">


               <div class="col-6 py-0 px-0 text-center">

              <v-btn class="bg-primary" style="width:90%;" small><span style="font-size:13px;font-family:MediumFont;color:white;text-transform:none;">Fund</span></v-btn>

             </div>

             <div class="col-6 py-0 px-0 text-center">

                 <v-btn color="#3C87CD" outlined style="width:90%;" small><span style="font-size:13px;font-family:MediumFont;text-transform:none;" >Withdraw</span></v-btn>

             </div>

             

                       

                    

                   </div>

              </div>
               <div class="col-md-4 flex-column px-0 d-none  d-md-flex" style="align-items:center;justify-content:center;">



                   <v-btn class="bg-primary" ><span style="font-size:13px;font-family:MediumFont;color:white;text-transform:none;">Manage</span></v-btn>

                  

              </div>
                
     
              
           

              
           
          </div>

          <!-- Transactions -->

         
          <div class="col-12 px-0 px-md-1 pt-md-5 pt-0">

             <h6>Transactions</h6>

             <div class="col-12 px-0 d-flex py-0 flex-column">

             
                

                <div class="col-12 d-flex flex-row py-1 mb-2" style="align-items:center; background:#EAEEF3;">
                     <v-btn icon small class="bg-success mr-2"><v-icon color="#ffffff" style="font-size:19px;">las la-check</v-icon></v-btn>

                     <div class="normalText">
                         <span class="normalText">Received </span><span class="boldText">&#8358;3000</span> donation from <span class="boldText">David King</span> to <span class="boldText">DSC Landmark</span>
                         | Aug 12, 2021
                     </div>

                     <div class="ml-auto pl-2">
                          <span class="boldText text-success">Donation</span>
                     </div>
               </div>

              
                <div class="col-12 d-flex flex-row py-1 mb-2" style="align-items:center; background:#EAEEF3;">
                     <v-btn icon small class="bg-success mr-2"><v-icon color="#ffffff" style="font-size:19px;">las la-check</v-icon></v-btn>

                     <div class="normalText">
                         <span class="normalText">Received </span><span class="boldText">&#8358;4000</span> payment from <span class="boldText">Ngozi</span> to <span class="boldText">DSC Landmark</span>
                         | Aug 12, 2021
                     </div>

                     <div class="ml-auto pl-2">
                          <span class="boldText text-success">Payment</span>
                     </div>
               </div>

                 <div class="col-12 d-flex flex-row py-1 mb-2" style="align-items:center; background:#EAEEF3;">
                     <v-btn icon small class="bg-danger mr-2"><v-icon color="#ffffff" style="font-size:19px;">las la-minus</v-icon></v-btn>

                     <div class="normalText">
                         <span class="normalText">Paid out </span><span class="boldText">&#8358;4000</span> from <span class="boldText">DSC Landmark</span> to <span class="boldText">Pelumi</span>
                         | Aug 12, 2021
                     </div>

                     <div class="ml-auto pl-2">
                          <span class="boldText text-danger">Payout</span>
                     </div>
               </div>

                 
                <div class="col-12 d-flex flex-row py-1 mb-2" style="align-items:center; background:#EAEEF3;">
                     <v-btn icon small class="bg-success mr-2"><v-icon color="#ffffff" style="font-size:19px;">las la-check</v-icon></v-btn>

                     <div class="normalText">
                         <span class="normalText">Received </span><span class="boldText">&#8358;4000</span> payment from <span class="boldText">Ngozi</span> to <span class="boldText">DSC Landmark</span>
                         | Aug 12, 2021
                     </div>

                     <div class="ml-auto pl-2">
                          <span class="boldText text-success">Payment</span>
                     </div>
               </div>

                <div class="col-12 d-flex flex-row py-1 mb-2" style="align-items:center; background:#EAEEF3;">
                     <v-btn icon small class="bg-success mr-2"><v-icon color="#ffffff" style="font-size:19px;">las la-check</v-icon></v-btn>

                     <div class="normalText">
                         <span class="normalText">Received </span><span class="boldText">&#8358;4000</span> payment from <span class="boldText">Ngozi</span> to <span class="boldText">DSC Landmark</span>
                         | Aug 12, 2021
                     </div>

                     <div class="ml-auto pl-2">
                          <span class="boldText text-success">Payment</span>
                     </div>
               </div>


                <div class="col-12 d-flex flex-row py-1 mb-2" style="align-items:center; background:#EAEEF3;">
                     <v-btn icon small class="bg-primary mr-2"><v-icon color="#ffffff" style="font-size:19px;">las la-minus</v-icon></v-btn>

                     <div class="normalText">
                         <span class="normalText">Withdrawn </span><span class="boldText">&#8358;10,000</span> from <span class="boldText">DSC Landmark</span>
                         | Aug 12, 2021
                     </div>

                     <div class="ml-auto pl-2">
                          <span class="boldText text-primary">Withdrawal</span>
                     </div>
               </div>

                  <div class="col-12 d-flex flex-row py-1 mb-2" style="align-items:center; background:#EAEEF3;">
                     <v-btn icon small class="bg-success mr-2"><v-icon color="#ffffff" style="font-size:19px;">las la-check</v-icon></v-btn>

                     <div class="normalText">
                         <span class="normalText">Received </span><span class="boldText">&#8358;4000</span> payment from <span class="boldText">Ngozi</span> to <span class="boldText">DSC Landmark</span>
                         | Aug 12, 2021
                     </div>

                     <div class="ml-auto pl-2">
                          <span class="boldText text-success">Payment</span>
                     </div>
               </div>



            

               <div class="text-center col-12 application application--light" data-app="true">
          <v-pagination
      v-model="page"
      :length="4"
      circle
           ></v-pagination>
            </div>


             </div>

          </div>
          

          <!-- ends -->

        
          <!-- spacer -->

          <div class="col-12 py-5 my-5">

          </div>

          <!-- ends -->

  

  </div>

 <!-- ends -->

</div>
  
</template>

<script>


 export default {
    data () {
      return {
         page:1,
         loading:false,
        items:[
          {
            name:'hellp'
          },
           {
            name:'hellp'
          },
           {
            name:'hellp'
          },
           {
            name:'hellp'
          },
           {
            name:'hellp'
          }
        ]
       
      }
     
    },
     components: {

  },
     mounted(){
     this.$root.showTopBar = false;
     
 
  
    },

     methods:{
     
        
      
      },
     
  }
</script>

<style scoped>
.normalText{
  font-family: BodyFont;
  font-size: 13px;

}
.boldText{
  font-family: MediumFont;
  font-size: 13px;
}
</style>
