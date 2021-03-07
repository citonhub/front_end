<template>
  <div style="overflow-x:hidden;">

      <div class="col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top" style="position:sticky; background:#F5F5FB; z-index:999999999999; border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0 d-flex flex-row" style="align-items:center;">
          <v-btn @click="goBack()" icon class="mr-1"><v-icon>las la-arrow-left</v-icon></v-btn> <h5>DSC Landmark</h5>
        </div>
         <div class="col-6  py-0 my-0 text-right">
          
        </div>
      </div>
   </div>
   

     <div class=" px-1 col-12 pb-0 d-md-none d-block fixed-top" style="position:sticky; background:#F5F5FB;border-bottom:1px solid #c5c5c5;">
     <div class="row">
        <div class="col-11 py-0 my-0" style="align-items:center;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">
            <v-btn  @click="goBack()"   icon><v-icon>las la-arrow-left</v-icon></v-btn>  <h6 class="d-inline-block" ><h6>DSC Landmark</h6></h6>
        </div>
        
      </div>
   </div>


       <div class="col-lg-10 offset-lg-1 py-0 application application--light px-0" data-app="true">
      <div class="row">
        <div class="col-12 d-flex flex-row " style="border-bottom:1px solid #c5c5c5;">
           <div class="col-2 col-lg-1 col-md-2 d-flex" style="align-items:center;justify-content:center;">
                <v-icon style="font-size:20px;color:#263238;"  >las la-money-check</v-icon>
           </div>
           <div class="d-flex flex-column col-10 col-lg-11 " >
               <div style="font-size:14px;font-family:MediumFont;">
                    Payout Accounts
               </div>
               <div class="mt-1" style="font-size:13px;font-family:BodyFont;">
                     <v-alert
      border="left"
      v-for="(payout,index) in this.$root.payoutAccounts"
      :key="index"
      class="mb-1"
      color="#3C87CD"
      dark
      style="font-size:13px;font-family:BodyFont;"
      dense
    >
     <b style="font-family:MediumFont;"> Bank:</b> {{payout.bank_name}}, <b style="font-family:MediumFont;"> Account Number:</b> {{payout.account_number}}
    </v-alert>

        

    <v-btn :loading="that.$root.selectedPaymentCard.length == 0" @click="addPayoutAccount" x-small class="mt-2" color="#3C87CD" style="font-size:11px;font-family:MediumFont;color:white;text-transform:none;">Add <v-icon style="font-size:16px;">las la-plus</v-icon></v-btn>
    
               </div>

           </div>
        </div>

        <div class="col-12 d-flex flex-row " style="border-bottom:1px solid #c5c5c5;">
           <div class="col-2 col-lg-1 col-md-2 d-flex" style="align-items:center;justify-content:center;">
                <v-icon style="font-size:20px;color:#263238;"  >las la-sync</v-icon>
           </div>
           <div class="d-flex flex-column col-10 col-lg-11 " >
               <div style="font-size:14px;font-family:MediumFont;">
                   Recurring bills
               </div>
               <div class="mt-1" style="font-size:13px;font-family:BodyFont;">

                    <v-alert
      border="left"
      class="mb-1"
      color="success"
         v-for="(bill,index) in this.$root.planSubscriptions"
         :key="index"
      dark
      dismissible
      style="font-size:13px;font-family:BodyFont;"
      dense
    >
     <b style="font-family:MediumFont;"><span v-html="currencyToCharacter(bill.currency)"></span> {{formatMoney(bill.amount)}}</b> <span style="text-transform:capitalize;">{{ bill.type }}</span> for {{bill.name}}
    </v-alert>
    
                   
               </div>

           </div>
        </div>


         <div class="col-12 d-flex flex-row " style="border-bottom:1px solid #c5c5c5;">
           <div class="col-2 col-lg-1 col-md-2 d-flex" style="align-items:center;justify-content:center;">
                <v-icon style="font-size:20px;color:#263238;"  >las la-cog</v-icon>
           </div>
           <div class="d-flex flex-column col-10 col-lg-11 " >
               <div style="font-size:14px;font-family:MediumFont;">
                  Others
               </div>
               <div style="font-size:13px;font-family:BodyFont;" class="mt-2">
                        <div style="font-size:13px;font-family:BodyFont;" class="mb-2">Default Currency</div>
                        <div class="col-lg-5 col-md-6  px-0 py-0 d-flex flex-row" style="align-items:center;">
                         <select disabled="disabled" style="font-size:13px !important; font-family:BodyFont; background:transparent;" v-model="currency"  class="browser-default custom-select">
                    <option v-for="(option,index)  in CurrencyOptions" :value="option.code" :key="index">{{ option.name}}</option>
                       </select>

                        <v-btn v-if="false" small :loading="loadingCurrency" :disabled="that.$root.selectedPaymentCard.length == 0" @click="changeCardCurrency" color="#3C87CD" style="color:white;text-transform:normal;font-family:BodyFont;font-size:11px;" class="mx-2 " >save</v-btn>

                        </div>
                
               </div>

           </div>
        </div>

       
        
      </div>
   </div>
      <!-- <div class="progress-bars col-lg-10 offset-1">
      <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" style="width: 33%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" style="width: 34%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>

<div class="rounded-circle circle-1 shadow-sm" style="width:25px;height:25px;"></div>
<div class="rounded-circle circle-2 shadow-sm" style="width:25px;height:25px;"></div>
<div class="rounded-circle circle-3 shadow-sm" style="width:25px;height:25px;"></div>

<div class="steps d-flex col-lg-10 offset-1 px-0">
<div class="payment col-lg-4">
    <h2 class="col-lg-12 text-center" style="font-size:1.3rem;">Setup Payment Account</h2>
<div class="col-12 py-0 my-0 px-2">
              <v-text-field
                 style="font-size:12px;"
                 placeholder="DSC Nowhere"
            label="Your Name"
            counter="80"
            
            
            outlined
           
            
             color="#3C87CD"
             ></v-text-field>

             </div>
</div>

<div class="default col-lg-4">
    <h2 class="col-lg-12 text-center" style="font-size:1.3rem;">Setup Recurring Payments</h2>

</div>
<div class="recurr col-lg-4">
    <h2 class="col-lg-12 text-center" style="font-size:1.3rem;">Setup Default Currency</h2>
    <div class="col-lg-10 offset-1">
<v-select
          
          label="Naira(NGN)"
          outlined
          height="30px"
        ></v-select>
    </div>

</div> -->




  </div>
</template>

<script>

import VueHorizontal from "vue-horizontal"
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

export default {
    data(){
    return{
         CurrencyOptions:[
         {
            name:'Nigerian Naira (NGN)',
            code:'NGN',
            symbol:'&#8358;',
            iso:'NG'
          },
           {
            name:'Australian Dollar (AUD)',
            code:'AUD',
            symbol:'A$'
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
            name:'South African Rand (ZAR)',
            code:'ZAR',
             symbol:'R',
             iso:'ZA'
          },
           {
            name:'British Pound Sterling (GBP)',
            code:'GBP',
            symbol:'&#163;'
          },
           {
            name:'Ghanainan Cedi (GHS)',
            code:'GHS',
            symbol:'&#8373;',
            iso:'GH'
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
            symbol:'KSh',
            iso:'KE'
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
            symbol:'&#8355;',
            iso:'RW'
          },
            {
            name:'Sierra Leonean Leone (SLL)',
            code:'SLL',
            symbol:'Le',
            iso:'SL'
          },
            {
            name:'Sao Tome and Principe Dobra (STD)',
            code:'STD',
            symbol:'STD'
          },
            {
            name:'Tanzanian Shilling (TZS)',
            code:'TZS',
            symbol:'TSh',
            iso:'TZ'
          },
            {
            name:'Ugandan Shilling (UGX)',
            code:'UGX',
            symbol:'Ush',
            iso:'UG'
          },
            {
            name:'CSA Franc BEAC (XAF)',
            code:'XAF',
            symbol:'&#8355;',
            iso:'multiple'
          },
            {
            name:'CSA Franc BCEAO (XOF)',
            code:'XOF',
            symbol:'&#8355;',
            iso:'multiple'
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
        currency:'',
        that:this,
        loadingCurrency:false,
    }
    },
   mounted(){
        this.currency = this.$root.selectedPaymentCard.currency;
     this.$root.showTopBar = false;
     
      this.checkForPaymentCard();
      this.$root.manageWalletComponent = this;
  
    },
    methods:{
       formatMoney: function(number) {

   return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
},
      currencyToCharacter: function(currency){

          if(currency == null){
                return '&#8358;'
          }

        let thisCurrency = this.currencyData.filter((eachCurrency)=>{
          return currency == eachCurrency.code;
        });
         
          if(thisCurrency[0]){
          return thisCurrency[0].symbol;
          }
      

      },
    
        changeCardCurrency: function(){
     

         this.loadingCurrency = true;
                axios.post('/update-card-currency',{
        
            card_no:  this.$root.selectedPaymentCard.card_no,
            destination_currency:this.$root.selectedPaymentCard.currency,
            origin_currency:  this.currency,

              })
      .then(response => {
        
       if (response.status == 200) {

             this.$root.selectedPaymentCard.currency = this.currency;

               this.loadingCurrency = false;
 
       this.showAlert('Saved!','Your changes has been saved','success');
      
        }


      })
      .catch(error => {

           this.loadingCurrency = false;
          this.showAlert('Oops!','Something went wrong,please try again','error');
      })


        },
         addPayoutAccount: function(){

             this.$root.showPayoutAccount = true;

         },
         checkForPaymentCard:function(){

              if(this.$root.selectedPaymentCard.length == 0){


  
           axios.get('/payment-cards/' + this.$route.params.card_no)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_payment_card_'  +  this.$route.params.card_no + this.$root.username,response.data);
        
     
         this.$root.selectedPaymentCard = response.data.payment_card;

          this.$root.payoutAccounts = response.data.payout_account;

          this.$root.planSubscriptions = response.data.subscriptions;

         this.currency = this.$root.selectedPaymentCard.currency;
        
   
       
     }
       
     
     })
     .catch(error => {

       
    
     }) 



              }

      },
        goBack:function(){
             window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

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
    }
}
</script>

<style>
.circle-1{
    position:absolute;
    left:35%;
    top:21px;
    background: #3C87CD;
}

.circle-2{
    position:absolute;
    left:61%;
    top:21px;
      background: #3C87CD;
}

.circle-3{
    position:absolute;
    left:88%;
    top:21px;
      background: #3C87CD;
}

.steps > *{
    background: white;
}
</style>