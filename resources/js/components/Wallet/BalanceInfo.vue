<template>
    
    <div @click.stop="preventDefault">
    <v-card class="col-lg-4 offset-lg-4  pt-3 py-2 d-flex flex-column col-md-8 offset-md-2 application application--light"  data-app="true" >

      <v-btn small icon color="#ffffff" @click="closeModal" style="position:absolute;background:#3C87CD;top:2%; right:2%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>


     <h6 class="text-left">Total available balance: <span v-html="currencyToCharacter(that.$root.selectedPaymentCard.currency)"></span>{{formatMoney(that.$root.selectedPaymentCard.balance - (that.$root.selectedPaymentCard.platform_fee + that.$root.selectedPaymentCard.payment_processing_fee))}}</h6>
        <p style="font-size:13px;font-family:BodyFont;">
           This is the total available amount you recieved in your channel, excluding payment processing fees and platform fee.
        </p>

      <h6 class="text-left">Payable amount: <span v-html="currencyToCharacter(that.$root.selectedPaymentCard.currency)"></span>{{formatMoney(that.$root.selectedPaymentCard.payable_amount)}}</h6>
        <p style="font-size:13px;font-family:BodyFont;">
              Payable amount is the part of your available balance available for payout. It is updated every <strong style="font-family:MediumFont;">5 working days</strong>. This is the maximum time it takes Flutterwave(our payment provider) to process the monies you received from your channel.
        </p>

   

    </v-card>
   
    </div>
</template>
<script>
export default {
     data(){
      
        return{
         
        
          that:this,
           currencyData:[
          {
            name:'Nigerian Naira (NGN)',
            code:'NGN',
            symbol:'&#8358;'
          },
          {
            name:'Australian Dollar (AUD)',
            code:'AUD',
            symbol:'A$'
          },
           {
            name:'South African Rand (ZAR)',
            code:'ZAR',
             symbol:'R'
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
    methods:{
        closeModal: function(){
       this.$root.showWalletinfo = false;
        this.$root.infoType = false;
        },
            formatMoney: function(number) {

   return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
},
     
      currencyToCharacter: function(currency){

        let thisCurrency = this.currencyData.filter((eachCurrency)=>{
          return currency == eachCurrency.code;
        });

       return thisCurrency[0].symbol;

      },
     preventDefault:function(){

       },
    }
}
</script>
<style scoped>

</style>