<template>
<div style="overflow-x:hidden;" >
 
    <div class="col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top" style="position:sticky; background:#F5F5FB; z-index:999999999999; border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0 d-flex flex-row" style="align-items:center;">
          <v-btn @click="goBack()" icon class="mr-1"><v-icon>las la-arrow-left</v-icon></v-btn> <h5>{{ this.$root.selectedPaymentCard.name}}</h5>
        </div>
         <div class="col-6  py-0 my-0 text-right">
          
        </div>
      </div>
   </div>

     <div class=" px-1 col-12 pb-0 d-md-none d-block fixed-top" style="position:sticky; background:#F5F5FB;border-bottom:1px solid #c5c5c5;">
     <div class="row">
        <div class="col-8 py-0 my-0" style="align-items:center;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">
            <v-btn  @click="goBack()"   icon><v-icon>las la-arrow-left</v-icon></v-btn>  <h6 class="d-inline-block" ><h6>{{ this.$root.selectedPaymentCard.name}}</h6></h6>
        </div>
         <div class="col-4 py-0 my-0 text-right">
          <v-btn @click="manageCard()" small  color="primary" style="font-size:12px;  color:white;font-family:MediumFont;text-transform:none;">
             Manage
           </v-btn>
        </div>
      </div>
   </div>


    <!--card  view -->

  <div class="col-lg-10 offset-lg-1 py-0 pb-2 px-1 px-md-2" style="overflow-x:hidden;">

       

           

          <div class="col-12 d-flex px-md-2 px-0 flex-row">

              <div class="col-md-4 d-md-flex d-none" style="align-items:center;justify-content:center;">
             
               <v-card min-width="180" @click.stop="showFee()">

                   <div  class="d-flex px-2 pb-2 flex-column text-left">
                       <div class="d-flex flex-row">
                   
                      <div style="font-size:12px;font-family:BodyFont;">Fees</div>

                      <v-btn x-small icon class="ml-auto"><v-icon style="font-size:19px;">las la-exclamation-circle</v-icon></v-btn>


                       </div>
           

             <div style="font-size:18px;font-family:HeaderFont;"><span v-html="currencyToCharacter(that.$root.selectedPaymentCard.currency)"></span> {{formatMoney(that.$root.selectedPaymentCard.platform_fee + 
             that.$root.selectedPaymentCard.payout_fee + that.$root.selectedPaymentCard.payment_processing_fee)}}</div>

                  
              
                   
           </div>
                   
               </v-card>
              </div>
               <div class="col-lg-4  px-1  py-md-2 py-0 text-center" > 

                   <v-card height="200px" width="100%" max-width="370px" style="background-repeat: height:200px !important; no-repeat;
          border-radius:10px;background: url(/imgs/card_bg_6.jpg);background-size:cover;">

          <div style="position:absolute;width:100%;top:0%; left:0%; height:25%; align-items:center;" class="d-flex flex-row">

            <img height="50" src="/imgs/credit-card-chip.png" class="pl-2 pt-2" >

           

         

          </div>


           <div style="position:absolute;width:100%;top:25%; left:0%; height:50%; align-items:center;" class="d-flex flex-row">

           <div style="width:50%;" class="d-flex px-2 flex-column text-left">
                  <div style="font-size:12px;color:white;font-family:BodyFont;">Name</div>

                   <div style="font-size:14px;color:white;font-family:HeaderFont;">{{that.$root.selectedPaymentCard.name}}</div>
           </div>

           <div style="width:50%;" class="d-flex px-2 flex-column text-right">
                 <div style="font-size:12px;color:white;font-family:BodyFont;">Number</div>

                   <div style="font-size:14px;color:white;font-family:HeaderFont;" v-if="that.$root.selectedPaymentCard.card_no" >**** **** {{that.$root.selectedPaymentCard.card_no.substr(that.$root.selectedPaymentCard.card_no.length - 4)}}</div>
           </div>



          </div>


           <div style="position:absolute;width:100%;top:75%; left:0%; height:25%; align-items:center;" class="d-flex flex-row">

           <div  class="d-flex px-2 pb-2 flex-column text-left">
             <div style="font-size:12px;color:white;font-family:BodyFont;">Balance</div>

             <div style="font-size:22px;color:white;font-family:HeaderFont;"><span v-html="currencyToCharacter(that.$root.selectedPaymentCard.currency)"></span> {{formatMoney(that.$root.selectedPaymentCard.balance)}}</div>

                  
              
                   
           </div>

              <img height="40" src="/imgs/citonhub_grey.png"  class="pr-2 pb-2 ml-auto d-md-block d-none" >

               <div  class="d-md-none d-flex pr-2 pb-2 flex-column text-right ml-auto"  @click.stop="showFee()">
             <div style="font-size:12px;color:white;font-family:BodyFont;">Fees <v-icon style="font-size:16px;color:white;">las la-exclamation-circle</v-icon></div>

             <div style="font-size:18px;color:white;font-family:HeaderFont;"><span v-html="currencyToCharacter(that.$root.selectedPaymentCard.currency)"></span> {{formatMoney(that.$root.selectedPaymentCard.platform_fee + 
             that.$root.selectedPaymentCard.payout_fee + that.$root.selectedPaymentCard.payment_processing_fee)}}</div>

                  
              
                   
           </div>

           


          </div>

        </v-card>

         <div class="col-12 pb-md-2 pb-1 px-0 d-flex flex-row">


              
             <div class="col-12 py-0 px-0 text-center">

                 <v-btn color="#3C87CD" @click="makePayout()" v-if="that.$root.selectedPaymentCard.payout_status != 'pending'" outlined style="width:60%;" small><span style="font-size:13px;font-family:MediumFont;text-transform:none;" >Payout</span></v-btn>
                   <v-btn color="#3C87CD"  disabled v-else outlined style="width:60%;" small><span style="font-size:13px;font-family:MediumFont;text-transform:none;" >Payout pending</span></v-btn>

             </div>

             

                       

                    

                   </div>

              </div>
               <div class="col-md-4 flex-column px-0 d-none  d-md-flex" style="align-items:center;justify-content:center;">



                   <v-btn color="#ffffff" @click="manageCard()" ><span style="font-size:13px;font-family:MediumFont;text-transform:none;">Manage</span></v-btn>

                  

              </div>
                
     
              
           

              
           
          </div>

          <!-- Transactions -->

         
          <div class="col-12 px-0 px-md-1 pt-md-3 pt-0">

             <h6>Transactions</h6>

               <template v-if="loadingTransactions">

                   <div  class="col-12 mt-4 text-center">

           <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

            </div>

                </template>

                   <template v-else>


                  <template v-if="transactions.length == 0">

                      <div class="mt-5 px-3 pt-5 text-center" style="font-size:13px;color:gray;font-family:BodyFont;">
                       No transaction yet.
                    </div>

                  </template>

                  <template v-else>

                       <div class="col-12 px-0 d-flex py-0 flex-column">

             
              

             
            <v-card flat tile @click="showTransaction(transaction)" class="col-12 d-flex flex-row py-1 mb-2" style="align-items:center; background:#EAEEF3;" v-for="(transaction,index) in transactions" :key="index + 'transaction'">

                   <template v-if="transaction.type == 'payout'">
                     <v-btn icon small class="bg-danger mr-2"><v-icon color="#ffffff" style="font-size:19px;">las la-check</v-icon></v-btn>
                   </template>

                    <template v-if="transaction.type == 'withdrawal'">
                     <v-btn icon small class="bg-primary mr-2"><v-icon color="#ffffff" style="font-size:19px;">las la-check</v-icon></v-btn>
                   </template>
                    
                     <template v-if="transaction.type != 'payout' && transaction.type != 'withdrawal'">
                    <v-btn icon small class="bg-success mr-2"><v-icon color="#ffffff" style="font-size:19px;">las la-check</v-icon></v-btn>
                   </template>
                     

                     <div class="normalText">
                       <template v-if="transaction.type == 'support'">
                          <span class="normalText">Received </span><span class="boldText"><span v-html="currencyToCharacter(transaction.currency)"></span> {{formatMoney(transaction.amount)}}</span> support from <span class="boldText">{{transaction.customer_name}}</span> 
                       </template>
                         | {{handleDateFormat(transaction.created_at)}}
                     </div>

                     <div class="ml-auto pl-2">

                         <template v-if="transaction.type == 'payout'">
                       <span class="boldText text-danger"  style="text-transform:capitalize;">{{transaction.type}}</span>
                   </template>

                    <template v-if="transaction.type == 'withdrawal'">
                         <span class="boldText text-primary"  style="text-transform:capitalize;">{{transaction.type}}</span>
                   </template>
                    
                     <template v-if="transaction.type != 'payout' && transaction.type != 'withdrawal'">
                    <span class="boldText text-success"  style="text-transform:capitalize;">{{transaction.type}}</span>
                   </template>
                       
                     </div>
               </v-card>

              
              


            

             



             </div>

                  </template>

                </template>

                  <div v-if="transactions.length != 0" class="text-center py-1 col-lg-10 offset-lg-2 application application--light fixed-bottom" style="background: #F5F5FB" data-app="true">
          <v-pagination
      v-model="currentpage"
      total-visible="5"
      :length="lastPage"
      @input="handleInput"
      circle
      color="#3C87CD"
           ></v-pagination>
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
         that:this,
         loading:false,
         loadingPaymentCard:false,
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
         transactions:[],
         loadingTransactions:false,
          currentpage:1,
        lastPage:0,
      }
     
    },
     components: {

  },
     mounted(){
     this.$root.showTopBar = false;
     
     this.fetchPaymentCard();
  
     this.$root.cardViewComponent = this;
  
    },

     methods:{
          handleInput:function(page){
           this.loadingTransactions = true;

          

           this.fetchTransactions(page);
       },

       manageCard: function(){
   

            this.$router.push({ path: '/board/wallet/manage/' + this.$root.selectedPaymentCard.card_no });
       
       },
       makePayout:function(){
          this.$root.infoType = 'payout'

         this.$root.showWalletinfo = true;
       },
       showFee:function(){
       this.$root.infoType = 'fee'

         this.$root.showWalletinfo = true;
       },
        showTransaction:function(transaction){

         this.$root.selectedTransaction = transaction;

         this.$root.infoType = 'transaction'

         this.$root.showWalletinfo = true;


       },
       goBack:function(){
             window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

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
       handleDateFormat: function(date){
         var realTimeHour = moment(date).add(1,'hours');
       return moment(realTimeHour).format("MMM D, YYYY");
    },
      currencyToCharacter: function(currency){

        let thisCurrency = this.currencyData.filter((eachCurrency)=>{
          return currency == eachCurrency.code;
        });
         
          if(thisCurrency[0]){
          return thisCurrency[0].symbol;
          }
      

      },
          fetchPaymentCard:function(){

          this.loadingPaymentCard  = true;

             let storedPaymentCard = this.$root.getLocalStore('user_payment_card_'  +  this.$route.params.card_no + this.$root.username);

            storedPaymentCard.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      this.$root.selectedPaymentCard = finalResult.payment_card;

          this.$root.payoutAccounts = finalResult.payout_account;

          this.$root.planSubscriptions = finalResult.subscriptions;

                       
                        this.fetchTransactions(1);
                 
 
                 this.loadingPaymentCard = false;

               this.checkForNewPaymentCard();

                 }else{
            
           
            axios.get( '/payment-cards/' + this.$route.params.card_no)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_payment_card_'  +  this.$route.params.card_no + this.$root.username,response.data);
        
     
         this.$root.selectedPaymentCard = response.data.payment_card;

            this.$root.payoutAccounts = response.data.payout_account;

          this.$root.planSubscriptions = response.data.subscriptions;

      
         this.loadingPaymentCard = false;

        
                    this.fetchTransactions(1);
       
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

           axios.get('/payment-cards/' + this.$route.params.card_no)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_payment_card_'  +  this.$route.params.card_no + this.$root.username,response.data);
        
     
         this.$root.selectedPaymentCard = response.data.payment_card;
         
           this.$root.payoutAccounts = response.data.payout_account;

          this.$root.planSubscriptions = response.data.subscriptions;

      
         this.loadingPaymentCard = false;

        
        this.fetchTransactions(1,false);
       
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
      fetchTransactions:function(pageNum,showLoading = true){

         this.loadingTransactions = showLoading;
        
           axios.get( '/fetch-transactions?page=' + pageNum)
      .then(response => {
      
      if (response.status == 200) {

        this.transactions = response.data.transactions.data;

          this.currentpage = response.data.transactions.current_page;

          this.lastPage = response.data.transactions.last_page;

           this.loadingTransactions = false;

     }
       
     
     })
     .catch(error => {

         this.loadingTransactions = false;
    
     }) 
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
