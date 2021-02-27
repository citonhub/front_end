<template>
<div >
 
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

  <div class="col-lg-10 offset-lg-1 py-0 pb-2 px-1 px-md-2">

       

            <!-- spacer -->
         
           <div class="col-12 my-5 mt-md-0 d-md-none d-block"> 

           </div>
          <!-- ends -->

          <div >
                
        <vue-horizontal
      ref="horizontal"
      class="horizontal py-2 "
          >
         
         <div v-for="(paymentCard,index) in paymentCards" :key="index" class="item">

           <v-card height="200"  @click="goToCardView" style="background-repeat: no-repeat;
          border-radius:10px;background: url(/imgs/card_bg.jpg);background-size:cover;">

          <div style="position:absolute;width:100%;top:0%; left:0%; height:25%; align-items:center;" class="d-flex flex-row">

            <img height="50" src="/imgs/credit-card-chip.png" class="pl-2 pt-2" >

           

         

          </div>


           <div style="position:absolute;width:100%;top:25%; left:0%; height:50%; align-items:center;" class="d-flex flex-row">

           <div style="width:50%;" class="d-flex px-2 flex-column text-left">
                  <div style="font-size:12px;color:white;font-family:BodyFont;">Name</div>

                   <div style="font-size:14px;color:white;font-family:HeaderFont;">{{paymentCard.name}}</div>
           </div>

           <div style="width:50%;" class="d-flex px-2 flex-column text-right">
                 <div style="font-size:12px;color:white;font-family:BodyFont;">Number</div>

                   <div style="font-size:14px;color:white;font-family:HeaderFont;">**** **** {{paymentCard.card_no.substr(paymentCard.card_no.length - 4)}}</div>
           </div>



          </div>


           <div style="position:absolute;width:100%;top:75%; left:0%; height:25%; align-items:center;" class="d-flex flex-row">

           <div  class="d-flex px-2 pb-2 flex-column text-left">
             <div style="font-size:12px;color:white;font-family:BodyFont;">Balance</div>

             <div style="font-size:22px;color:white;font-family:HeaderFont;"><span v-html="currencyToCharacter(paymentCard.currency)"></span> {{formatMoney(paymentCard.balance)}}</div>

                  
              
                   
           </div>

              <img height="40" src="/imgs/logo.png" class="pr-2 pb-2 ml-auto" >

           


          </div>

        </v-card>

         </div>
       
        </vue-horizontal>
              
           

              
           
          </div>

          <!-- wallet history -->

         
          <div class="col-12 px-0 px-md-1 pt-md-5 pt-3">

              <div class="d-flex flex-row" style="align-items:center;">

                 <h6>Wallet history</h6>

              
              </div>

            

             <div class="col-12 px-0 d-flex py-0 flex-column">

               <div class="col-12 d-flex flex-row py-1 mb-2" style="align-items:center; background:#EAEEF3;">
                     <v-btn icon small class="bg-success mr-2"><v-icon color="#ffffff" style="font-size:19px;">las la-check</v-icon></v-btn>

                     <div class="normalText">
                         <span class="normalText">Received </span><span class="boldText">&#8358;3000</span> donation from <span class="boldText">Joy Adejumo</span> to <span class="boldText">DSC Landmark</span>
                         | Aug 12, 2021
                     </div>

                     <div class="ml-auto pl-2">
                          <span class="boldText text-success">Donation</span>
                     </div>
               </div>
                

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
                         <span class="normalText">Received </span><span class="boldText">&#8358;2000</span> subscription from <span class="boldText">David Shola</span> to <span class="boldText">DSC Landmark</span>
                         | Aug 12, 2021
                     </div>

                     <div class="ml-auto pl-2">
                          <span class="boldText text-success">Subscription</span>
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
                         <span class="normalText">Received </span><span class="boldText">&#8358;3000</span> donation from <span class="boldText">David King</span> to <span class="boldText">DSC Landmark</span>
                         | Aug 12, 2021
                     </div>

                     <div class="ml-auto pl-2">
                          <span class="boldText text-success">Donation</span>
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

import VueHorizontal from "vue-horizontal"
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'


 export default {
    data () {
      return {
         page:1,
         loading:false,
       
        paymentCards:[],
        loadingPaymentCard:false,
        currencyData:[
          {
            name:'Nigerian Naira (NGN)',
            code:'NGN',
            symbol:'&#8358;'
          },
          {
            name:'Canadian Dollar (CAD)',
            code:'CAD',
            symbol:'&#36;'

          },
          {
            name:'United State Dollar (USD)',
            code:'USD',
            symbol:'&#36;'
          },
           {
            name:'Congolese Franc (CDF)',
            code:'CDF',
            symbol:'&#8355;'
          },
           {
            name:'Euro (EUR)',
            code:'EUR',
            symbol:'&#128;'
          },
           {
            name:'British Pound Sterling (GBP)',
            code:'GBP',
            symbol:'&#163;'
          },
           {
            name:'Ghanainan Cedi (GHS)',
            code:'GHS',
            symbol:'&#8373;'
          },
           {
            name:'Gambian Dalasi (GMD)',
            code:'GMD',
            symbol:'D'
          },
           {
            name:'Guinean Franc (GNF)',
            code:'GNF',
            symbol:'&#8355;'
          },
           {
            name:'Kenya Shilling (KES)',
            code:'KES',
            symbol:'KSh'
          },
           {
            name:'Liberian Dollar (LRD)',
            code:'LRD',
            symbol:'&#36;'
          },
           {
            name:'Malawian Kwacha (MWK)',
            code:'MWK',
            symbol:'MWK'
          },
           {
            name:'Mozambican Metical (MZN)',
            code:'MZN',
            symbol:'MZN'
          },
           {
            name:'Rwandan Franc (RWF)',
            code:'RWF',
            symbol:'&#8355;'
          },
            {
            name:'Sierra Leonean Leone (SLL)',
            code:'SLL',
            symbol:'Le'
          },
            {
            name:'Sao Tome and Principe Dobra (STD)',
            code:'STD',
            symbol:'STD'
          },
            {
            name:'Tanzanian Shilling (TZS)',
            code:'TZS',
            symbol:'TSh'
          },
            {
            name:'Ugandan Shilling (UGX)',
            code:'UGX',
            symbol:'Ush'
          },
            {
            name:'CSA Franc BEAC (XAF)',
            code:'XAF',
            symbol:'&#8355;'
          },
            {
            name:'CSA Franc BCEAO (XOF)',
            code:'XOF',
            symbol:'&#8355;'
          },
           {
            name:'Zambian Kwacha (pre-2013) (ZMK)',
            code:'ZMK',
            symbol:'ZMK'
          },
           {
            name:'Zambian Kwacha (ZMW)',
            code:'ZMW',
            symbol:'ZMW'
          },
           {
            name:'Zimbabwean Dollar',
            code:'ZWD',
            symbol:'Z$'
          },
          
          
        ],
      }
     
    },
     components: {
    VueHorizontal,
  },
     mounted(){
     this.$root.showTopBar = true;
       this.fetchPaymentCard();
 
  
    },

     methods:{

     formatMoney: function(number, decPlaces, decSep, thouSep) {
decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
decSep = typeof decSep === "undefined" ? "." : decSep;
thouSep = typeof thouSep === "undefined" ? "," : thouSep;
var sign = number < 0 ? "-" : "";
var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
var j = (j = i.length) > 3 ? j % 3 : 0;

return sign +
	(j ? i.substr(0, j) + thouSep : "") +
	i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
	(decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
},
     
      currencyToCharacter: function(currency){

        let thisCurrency = this.currencyData.filter((eachCurrency)=>{
          return currency == eachCurrency.code;
        });

       return thisCurrency[0].symbol;

      },
         goToCardView:function(){
            this.$router.push({ path: '/board/wallet/card-view' });
         },
           fetchPaymentCard:function(){

          this.loadingPaymentCard  = true;

             let storedPaymentCard = this.$root.getLocalStore('user_payment_card_'  + this.$root.username);

            storedPaymentCard.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      this.paymentCards = finalResult.payment_cards;

                       this.paymentCards.sort(function(a, b){return b.balance - a.balance})

                       
                       

                        setTimeout(() => {
             if( this.paymentCards.length > 3){
                this.$refs.horizontal.hasNext = true;
             }
                        
                       }, 1000);
                 
 
                 this.loadingPaymentCard = false;

               this.checkForNewPaymentCard();

                 }else{
            
           
            axios.get( '/payment-cards')
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_payment_card_' + this.$root.username,response.data);
        
     
         this.paymentCards = response.data.payment_cards;

           this.paymentCards.sort(function(a, b){return b.balance - a.balance})
      
     
         this.loadingPaymentCard = false;

          setTimeout(() => {
             if( this.paymentCards.length > 3){
                this.$refs.horizontal.hasNext = true;
             }
                        
                       }, 1000);
                 
       
     }
       
     
     })
     .catch(error => {

          this.showAlert('Oops!','Something went wrong','error');

        this.loadingPaymentCard = false;
    
     }) 

                 }
            })


      },

      checkForNewPaymentCard:function(){

           axios.get( '/payment-cards')
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_payment_card_' + this.$root.username,response.data);
        
     
         this.paymentCards = response.data.payment_cards;

           this.paymentCards.sort(function(a, b){return b.balance - a.balance})
        
       
     }
       
     
     })
     .catch(error => {

      
    
     }) 

      },

         showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
       position: 'bottomRight',
       timeout:2000,
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'success'){
         iziToast.success(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
         timeout:2000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'warning'){

          iziToast.warning(
        { 
       title: title,
       message: message,
         timeout:2000,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'error'){
         iziToast.error(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
       position: 'bottomRight',
         timeout:2000,
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       

    },
      
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
<!-- Responsive Breakpoints -->
<style scoped>
.horizontal {
  --count: 1;
  --gap: 4px;
 
  --margin:20px;
}

@media (min-width: 640px) {
  .horizontal {
    --count: 2;
  }
}

@media (min-width: 768px) {
  .horizontal {
    --count: 2;
    --margin: 0;
  }
}

@media (min-width: 1024px) {
  .horizontal {
    --count: 2;
  }
}

@media (min-width: 1280px) {
  .horizontal {
    --gap: 24px;
    --count: 3;
  }
}
</style>

<style scoped>
@media (max-width: 767.98px) {
  .item {
    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count));
    padding: 0 calc(var(--gap) / 2);
  }

  .item:first-child {
    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count) + var(--margin) - (var(--gap) / 2));
    padding-left: var(--margin);
  }

  .item:last-child {
    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count) + var(--margin) - (var(--gap) / 2));
    padding-right: var(--margin);
  }

  .item:only-child {
    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count) + var(--margin) * 2 - var(--gap));
  }

  .horizontal {
    margin: 0 calc(var(--margin) * -1);
  }

  .horizontal >>> .v-hl-container {
    scroll-padding: 0 calc(var(--margin) - (var(--gap) / 2));
  }

  .horizontal >>> .v-hl-btn {
    display: none;
  }
}

@media (min-width: 768px) {
  .item {
    width: calc((100% - ((var(--count) - 1) * var(--gap))) / var(--count));
    margin-right: var(--gap);
  }
}
</style>