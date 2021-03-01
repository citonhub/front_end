<template>
    
    <div @click.stop="preventDefault">
    <v-card class="col-lg-4 offset-lg-4   py-2 d-flex flex-column col-md-8 offset-md-2 application application--light"  data-app="true" >
      
         
     <v-btn small icon color="#ffffff" @click="closeModal" style="position:absolute;background:#3C87CD;top:3%; right:2%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>

     <h5  class="py-1 mb-2">Transaction</h5>
  
     <div class="d-flex flex-row py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;">
 
         <div>
             <span style="font-size:14px;color:grey;">Amount</span>
         </div>

          <div class="ml-auto">
             <span style="font-size:14px;font-family:MediumFont;"> <span v-html="currencyToCharacter(that.$root.selectedTransaction.currency)"></span>{{formatMoney(that.$root.selectedTransaction.amount)}}</span>
         </div>

     </div>

       <div class="d-flex flex-row py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;">

         <div>
             <span style="font-size:14px;color:grey;">Type</span>
         </div>

          <div class="ml-auto">
              <template v-if="that.$root.selectedTransaction.type == 'payout'">
                       <span class=" text-danger"  style=" font-size:14px; text-transform:capitalize;font-family:MediumFont;">{{that.$root.selectedTransaction.type}}</span>
                   </template>

                    <template v-if="that.$root.selectedTransaction.type == 'withdrawal'">
                         <span class=" text-primary"  style=" font-size:14px; text-transform:capitalize;font-family:MediumFont;">{{that.$root.selectedTransaction.type}}</span>
                   </template>
                    
                     <template v-if="that.$root.selectedTransaction.type != 'payout' && that.$root.selectedTransaction.type != 'withdrawal'">
                    <span class=" text-success"  style="font-size:14px; text-transform:capitalize;font-family:MediumFont;">{{that.$root.selectedTransaction.type}}</span>
                   </template>
         </div>

     </div>

      <div class="d-flex flex-row py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;">

         <div>
             <span style="font-size:14px;color:grey;">From</span>
         </div>

          <div class="ml-auto">
             <span style="font-size:14px;font-family:MediumFont;">{{this.$root.selectedTransaction.customer_name}}</span>
         </div>

     </div>

      <div class="d-flex flex-row py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;">

         <div>
             <span style="font-size:14px;color:grey;">To</span>
         </div>

          <div class="ml-auto">
             <span style="font-size:14px;font-family:MediumFont;">{{this.$root.selectedTransaction.card_name}}</span>
         </div>

     </div>

      <div class="d-flex flex-row py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;">

         <div>
             <span style="font-size:14px;color:grey;">Fee</span>
         </div>

          <div class="ml-auto">
             <span style="font-size:14px;font-family:MediumFont;"> <span v-html="currencyToCharacter(that.$root.selectedTransaction.currency)"></span>{{formatMoney(that.$root.selectedTransaction.fee)}}</span>
         </div>

     </div>
    
     <div class="d-flex flex-row py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;">

         <div>
             <span style="font-size:14px;color:grey;">Reference</span>
         </div>

          <div class="ml-auto">
             <span style="font-size:14px;font-family:MediumFont;">{{this.$root.selectedTransaction.tx_ref}}</span>
         </div>

     </div>

      <div class="d-flex flex-row py-2" style="border-radius:0px;">

         <div>
             <span style="font-size:14px;color:grey;">Made on</span>
         </div>

          <div class="ml-auto">
             <span style="font-size:14px;font-family:MediumFont;">{{handleDateFormat(that.$root.selectedTransaction.created_at)}} at {{handleTime(that.$root.selectedTransaction.created_at)}}</span>
         </div>

     </div>
    

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
             symbol:'R'
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
        handleDateFormat: function(date){
         var realTimeHour = moment(date).add(1,'hours');
       return moment(realTimeHour).format("MMM D, YYYY");
    },
    handleTime:function(date){
            var realTimeHour = moment(date).add(1,'hours');
       return moment(realTimeHour).format("h:mm a");
    },
        closeModal: function(){
       this.$root.showWalletinfo = false;
        this.$root.infoType = false;
        },
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
     preventDefault:function(){

       },
    }
}
</script>
<style scoped>

</style>