<template>
    <div style="background:transparent;">
   <div class="col-12 py-1 my-0 ">
    <div class="row">
        <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 px-1 py-0">
              <v-btn icon @click.stop="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-0 text-center">
             <span style="font-size:14px; font-family:MediumFont;">Add Payment</span>
          </div>
              
              <div class="col-2 py-0 mr-1 text-right">
                 
              </div>
          
        </div>



         <!-- add payment  -->
      <div style="background:transparent;font-family:BodyFont; " class="col-12 py-1 my-0" >

        

               <div class="col-12 px-1 py-1 d-flex flex-row">

                  <div class="  col-4  px-1 my-0 py-2 " >
                     <v-card  @click="selectPaymentOption('support')" :color="payment_option == 'support' ? '#F3F8FC' : ''"  class="px-1 py-1 appBox" :style="'height:100px; border:1px solid #c5c5c5; border-radius:7px;'">
                        <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                      <i style="font-size:30px;" :class="'las la-hands-helping'"></i>
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">Support</span>
                                      </div>
                                   </div>
                        </div>

                          <v-btn x-small icon style="position:absolute; top:3%; right:2%;" ><v-icon style="font-size:18px;">las la-exclamation-circle</v-icon></v-btn>
                     </v-card>
                 </div>

                  <div class="  col-4  px-1 my-0 py-2 " >
                     <v-card  @click="selectPaymentOption('subscription')" :color="payment_option == 'subscription' ? '#F3F8FC' : ''" class="px-1 py-1 appBox" :style="'height:100px; border:1px solid #c5c5c5; border-radius:7px;'">
                        <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                      <i style="font-size:30px;" :class="'las la-credit-card'"></i>
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">Subscription</span>
                                      </div>
                                   </div>
                        </div>

                          <v-btn x-small icon style="position:absolute; top:3%; right:2%;" ><v-icon style="font-size:18px;">las la-exclamation-circle</v-icon></v-btn>
                     </v-card>
                 </div>

                  <div class="  col-4  px-1 my-0 py-2 " >
                     <v-card @click="selectPaymentOption('one_time')" :color="payment_option == 'one_time' ? '#F3F8FC' : ''" class="px-1 py-1 appBox" :style="'height:100px; border:1px solid #c5c5c5; border-radius:7px;'">
                        <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                      <i style="font-size:30px;" :class="'las la-money-bill-wave'"></i>
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">One-time fee</span>
                                      </div>
                                   </div>
                        </div>

                          <v-btn x-small icon style="position:absolute; top:3%; right:2%;" ><v-icon style="font-size:18px;">las la-exclamation-circle</v-icon></v-btn>
                     </v-card>
                 </div>

               </div>
         
        </div>

          <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn @click.prevent="addPayment" type="submit" :disabled="payment_option == ''" small color="#3C87CD" style="font-size:12px;text-transform:none; color:white;font-family: MediumFont;" :loading="loading">Add</v-btn>
             </div>

       <!-- ends -->

       
        
     

    </div>
   </div>

  </div>
</template>
<script>
export default {
     data(){
        return{
          that:this,
          payment_option:'',
          loading:false
          
        }
    },
    mounted(){
    this.$root.componentIsLoading = false;
    },
    methods:{
        goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

          
           
        },
           selectPaymentOption:function(type){
           this.payment_option = type;

            this.$root.baseChannelName = this.$root.selectedSpace.name;

            this.$root.payment_option = type;

           this.$root.showPaymentOptionBoard = true;
      },

       addPayment:function(){

           this.loading = true;

             let finalName = '';
           
            if(this.payment_option == 'subscription'){

              finalName = 'Subscription for ' + this.$root.selectedSpace.name;

            
            }

             if(this.payment_option == 'support'){

              finalName = 'Support for ' + this.$root.selectedSpace.name;

            
            }

              axios.post( '/add-payment-space',{
                space_id: this.$root.selectedSpace.space_id,
                 payment_option: this.payment_option,
                currency: this.$root.payment_currency,
                amount: this.$root.payment_amount,
                name:finalName,
                card_name: this.$root.payment_card_name,
                interval: this.$root.payment_interval
                  })
          .then(response => {
             
            
            
             if (response.status == 200) {

                this.loading = false;  

                   this.$root.chatComponent.fetchSpaceInfo();
              
                this.$root.chatComponent.showAlert('Added!','Payment option has been added','success');
                
          

            }

          })
          .catch(error => {
             this.$root.chatComponent.showAlert('Oops!','An error occured, please try again','error');
              this.loading = false;
          })

       },
       
    }
}
</script>
<style scoped>

</style>