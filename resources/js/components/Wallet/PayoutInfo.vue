<template>
    
    <div @click.stop="preventDefault">
    <v-card class="col-lg-4 offset-lg-4 pb-2  py-1 d-flex flex-column col-md-8 offset-md-2 application application--light"  data-app="true" >


   <template v-if="that.$root.selectedPaymentCard.payable_amount > 0">

       <div class="d-flex flex-row px-0 py-1" style="border-bottom:1px solid #c5c5c5; border-radius:0px; align-items:center;">

             <div style="font-family:HeaderFont;font-size:16px;">Payout to your bank</div>

                <v-btn small icon color="#ffffff" @click="closeModal" style="background:#3C87CD;" 
           class="ml-auto "><v-icon>mdi-close mdi-18px</v-icon></v-btn>

        </div>
    
        <div style="font-size:13px;font-family:BodyFont;" class="mt-3 mb-2">
          <span style="font-family:MediumFont;font-size:16px;"><span v-html="currencyToCharacter(that.$root.selectedPaymentCard.currency)"></span>{{formatMoney(that.$root.selectedPaymentCard.payable_amount - (
             that.$root.selectedPaymentCard.payout_fee ))  }}</span>, Would be paid into your payout account.
        </div>

         <div style="font-family:MediumFont;font-size:16px;" class="text-left"><span style="font-size:14px;">Payout fee:</span> <span v-html="currencyToCharacter(that.$root.selectedPaymentCard.currency)"></span>{{formatMoney(that.$root.selectedPaymentCard.payout_fee)}}</div>
        <p style="font-size:13px;font-family:BodyFont;">
          Payout fee is the charge of moving your funds from your wallet on CitonHub to your bank.
        </p>


    
      <div class="text-left mb-1 mt-1" style="font-size:13px;font-family:BodyFont;" >Select payout account </div>

        <select v-if="that.$root.payoutAccounts.length > 0"  style="font-size:13px !important; font-family:BodyFont; background:transparent;" v-model="payout_account"  class="browser-default custom-select mb-4">
                 <option :value="0">select...</option>
                 <option v-for="(option,index)  in that.$root.payoutAccounts" :value="option.id" :key="index">{{ option.bank_name}} -  {{ option.account_number }} </option>
            </select>

           <div v-else class=" px-3 py-3 text-center" style="font-size:13px;color:gray;font-family:BodyFont;">
                      No payout account found.
                       <v-btn @click="addPayoutAccount" x-small  color="#3C87CD" style="font-size:11px;font-family:MediumFont;color:white;text-transform:none;">Add <v-icon style="font-size:16px;">las la-plus</v-icon></v-btn>
                    
                    </div>

       
         <div class="col-12 text-center pb-2 pt-1">
        <v-btn small @click="PayoutToAccount" :loading="loadingpayout" :disabled="payout_account == 0" color="#3C87CD" style="color:white;font-family:BodyFont;font-size:11px;" class="mx-2 " >Payout</v-btn>
      </div>

   </template>

   <template v-else>

       <div class="d-flex flex-row px-0 py-1" style="border-bottom:1px solid #c5c5c5; border-radius:0px; align-items:center;">

             <div style="font-family:HeaderFont;font-size:16px;">Payout to your bank</div>

                <v-btn small icon color="#ffffff" @click="closeModal" style="background:#3C87CD;" 
           class="ml-auto "><v-icon>mdi-close mdi-18px</v-icon></v-btn>

        </div>

        <div class="px-1">


      <h6 class="text-left">Payable amount: <span v-html="currencyToCharacter(that.$root.selectedPaymentCard.currency)"></span>{{formatMoney(that.$root.selectedPaymentCard.payable_amount)}}</h6>
        <p style="font-size:13px;font-family:BodyFont;">
             This is the total amount of money available for payout to your bank. It is updated every <strong style="font-family:MediumFont;">five working days</strong>. This is the maximum time it takes Flutterwave(our payment provider) to process the monies you received from your channel.
        </p>

        </div>


   </template>
          
 
   
    

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
        loadingpayout:false,
        payout_account:0
          
        }
    },
    methods:{
        closeModal: function(){
       this.$root.showWalletinfo = false;
        this.$root.infoType = false;
        },
        addPayoutAccount:function(){

           this.$root.infoType = false

         this.$root.showWalletinfo = false;
    this.$router.push({ path: '/board/wallet/manage/' + this.$root.selectedPaymentCard.card_no });
        },
        PayoutToAccount:function(){

            this.loadingpayout = true;
          axios.post('/make-payout',{
            
             card_no: this.$root.selectedPaymentCard.card_no,
             payout_account: this.payout_account
           
              })
      .then(response => {
        
       if (response.status == 200) {

             
             

               this.loadingpayout = false;
 
       this.$root.cardViewComponent.showAlert('Initiated!','Your payout has been initiated','success');

        this.$root.selectedPaymentCard.payout_status = 'pending';

       this.closeModal();

      
        }


      })
      .catch(error => {

           this.loadingpayout = false;
          this.$root.cardViewComponent.showAlert('Oops!','Something went wrong,please try again','error');
      })
           
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