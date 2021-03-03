<template>
    
    <div @click.stop="preventDefault">
    <v-card class="col-lg-4 offset-lg-4   py-2 d-flex flex-column col-md-8 offset-md-2 application application--light"  data-app="true" >
      
        <div class="d-flex flex-row px-1 py-2" style="border-bottom:1px solid #c5c5c5; border-radius:0px; align-items:center;">

             <div style="font-family:HeaderFont;font-size:16px;">Add Payout Account</div>

                <v-btn small icon color="#ffffff" @click="closeModal" style="background:#3C87CD;" 
           class="ml-auto "><v-icon>mdi-close mdi-18px</v-icon></v-btn>

        </div>


        <v-form ref="payout" v-model="formstate" class="mt-2">

       

        <template v-if="that.$root.selectedPaymentCard.currency == 'XAF' || that.$root.selectedPaymentCard.currency == 'GBP' ||
              that.$root.selectedPaymentCard.currency == 'EUR' || that.$root.selectedPaymentCard.currency == 'USD' || that.$root.selectedPaymentCard.currency == 'AUD'
              || that.$root.selectedPaymentCard.currency == 'XOF'">

               <div style="font-size:13px;font-family:MediumFont;" class="mb-1">Country</div>
              
               <select @change="getBanks()" style="font-size:13px !important; font-family:BodyFont; background:transparent;" v-model="acc_country_code"  class="browser-default custom-select mb-4">
                 <option :value="0">select...</option>
                 <option v-for="(option,index)  in countryData" :value="option.iso" :key="index">{{ option.name}}</option>
            </select>
               
               
            
        </template>


          

             <div style="font-size:13px;font-family:MediumFont;" class="mb-1">Bank name</div>

            <template v-if="that.$root.selectedPaymentCard.currency == 'GBP' ||
              that.$root.selectedPaymentCard.currency == 'EUR' || that.$root.selectedPaymentCard.currency == 'USD' ||  that.$root.selectedPaymentCard.currency == 'AUD'">

             <v-text-field
                style="font-size:13px;"
                 placeholder="bank name"
               v-model="bank_name"
             dense
             
             :rules="requiredRule"
              
             outlined
             color="#3C87CD"
            
             ></v-text-field>

            </template>
            <template v-else>

                  <select @change="getBankBranches()" style="font-size:13px !important; font-family:BodyFont; background:transparent;" v-model="acc_bank_code"  class="browser-default custom-select mb-4">
                 <option :value="0">select...</option>
                 <option v-for="(option,index)  in bankData" :value="option.code" :key="index">{{ option.name}}</option>
            </select>

            </template>
              

                
              <template v-if="that.$root.selectedPaymentCard.currency == 'GHS' || that.$root.selectedPaymentCard.currency == 'UGX' || that.$root.selectedPaymentCard.currency == 'TZS'">

                     <div style="font-size:13px;font-family:MediumFont;" class="mb-1">Bank branch name</div>

                  <select  style="font-size:13px !important; font-family:BodyFont; background:transparent;" v-model="acc_bank_branch_code"  class="browser-default custom-select mb-4">
                 <option :value="0">select...</option>
                 <option v-for="(option,index)  in bankBranchData" :value="option.branch_code" :key="index">{{ option.branch_name}} -  {{ option.branch_code }} </option>
            </select>

              </template>

           


              <div style="font-size:13px;font-family:MediumFont;" class="mb-1 ">Account Number</div>
              <v-text-field
                style="font-size:13px;"
                 placeholder="account number"
               v-model="acc_number"
             dense
             
             :rules="requiredRule"
             type="tel"
             outlined
             color="#3C87CD"
            
             ></v-text-field>

               <template v-if="that.$root.selectedPaymentCard.currency == 'GBP' ||
              that.$root.selectedPaymentCard.currency == 'EUR' || that.$root.selectedPaymentCard.currency == 'USD' ||  that.$root.selectedPaymentCard.currency == 'AUD'">

                       <div style="font-size:13px;font-family:MediumFont;" class="mb-1 ">Account Name</div>
              <v-text-field
                style="font-size:13px;"
                 placeholder="account name"
               v-model="acc_name"
             dense
             
             :rules="requiredRule"
             
             outlined
             color="#3C87CD"
            
             ></v-text-field>

         
      
          <template v-if="that.$root.selectedPaymentCard.currency != 'USD'">


              <div style="font-size:13px;font-family:MediumFont;" class="mb-1 ">City</div>
              <v-text-field
                style="font-size:13px;"
                 placeholder="city"
               v-model="acc_city"
             dense
             
             :rules="requiredRule"
             
             outlined
             color="#3C87CD"
            
             ></v-text-field>

          </template>
              


              <div style="font-size:13px;font-family:MediumFont;" class="mb-1 ">Your Address</div>
              <v-text-field
                style="font-size:13px;"
                 placeholder="address"
               v-model="acc_address"
             dense
             
             :rules="requiredRule"
             
             outlined
             color="#3C87CD"
            
             ></v-text-field>
          

          <template v-if="that.$root.selectedPaymentCard.currency != 'USD'">


              <div style="font-size:13px;font-family:MediumFont;" class="mb-1 ">Portal code</div>
              <v-text-field
                style="font-size:13px;"
                 placeholder="portal code"
               v-model="acc_portal_code"
             dense
             
             :rules="requiredRule"
              
             outlined
             color="#3C87CD"
            
             ></v-text-field>
             


          </template>
              
              <div style="font-size:13px;font-family:MediumFont;" class="mb-1 ">Swift code</div>
              <v-text-field
                style="font-size:13px;"
                 placeholder="swift code"
               v-model="swift_code"
             dense
             
             :rules="requiredRule"
             
             outlined
             color="#3C87CD"
            
             ></v-text-field>

            <div style="font-size:13px;font-family:MediumFont;" class="mb-1 ">Bank Routing Number/Sort Code</div>
              <v-text-field
                style="font-size:13px;"
                 placeholder="Bank Routing Number/Sort Code"
               v-model="bank_routing"
             dense
             
             :rules="requiredRule"
             
             outlined
             color="#3C87CD"
            
             ></v-text-field>



               </template>


           
        </v-form>
  

      <div class="col-12 text-center pb-2">
        <v-btn small @click="savePayoutAccount" :loading="loadingsave" color="#3C87CD" style="color:white;font-family:BodyFont;font-size:11px;" class="mx-2 " >Add</v-btn>
      </div>
  
  

    </v-card>

    <div class="col-12  py-3 my-2">

    </div>
   
    </div>
</template>
<script>
export default {
     data(){
      
        return{
         
         formstate:false,
          that:this,
           currencyData:[
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
         requiredRule: [
         v => !!v || 'Oh! you missed this.',
        ],
        bankData:[],
        bankBranchData:[],
        countryData:[],
        acc_number:'',
        acc_name:'',
        acc_email:'',
        swift_code:'',
        bank_routing:'',
        routing_number:'',
        acc_address:'',
        acc_city:'',
        acc_bank_code:0,
        acc_portal_code:'',
        bank_name:'',
        loadingBankData: false,
        acc_bank_branch_code:0,
        acc_country_code:0,
        xaf_countries:[
            {
             'name': 'Cameroon',
             'iso':'CM'
            },
             {
             'name': 'Chad',
             'iso':'TD'
            },
             {
             'name': 'Gabon',
             'iso':'GA'
            },
            {
             'name':'The Rebulic of Congo',
             'iso':'CG'
            },
        ],
          xof_countries:[
            {
             'name': 'Benin',
             'iso':'BJ'
            },
             {
             'name': 'cote d\'ivoire',
             'iso':'CI'
            }
        ],
        loadingsave:false,


          
        }
    },
    mounted(){
         this.handleFetchedData();
    },
    methods:{
        savePayoutAccount:function(){


            if(this.$refs.payout.validate()){
        

          if(this.bank_name == ''){

            let selectedBank = this.bankData.filter((bank)=>{
              return bank.code == this.acc_bank_code;
          })

          let bankId = 0;

          if(selectedBank.length > 0){

             this.bank_name = selectedBank[0].name
  
          }else{
              
          }
               
              }

         this.loadingsave = true;
          axios.post('/save-payout-account',{
        
            account_number: this.acc_number,
            account_bank: this.acc_bank_code,
            routing_number:this.bank_routing,
            swift_code:this.swift_code,
            bank_name: this.bank_name,
            account_name:this.acc_name,
            account_country: this.acc_country_code,
            portal_code:this.portal_code,
            account_address:this.acc_address,
            account_city:this.acc_city,
            bank_branch_code:this.acc_bank_branch_code
              })
      .then(response => {
        
       if (response.status == 201) {

             
             

               this.loadingsave = false;
 
       this.$root.manageWalletComponent.showAlert('Saved!','Your changes has been saved','success');

        this.$root.showPayoutAccount = false;
      
        }


      })
      .catch(error => {

           this.loadingsave = false;
          this.$root.manageWalletComponent.showAlert('Oops!','Something went wrong,please try again','error');
      })

            }

            


        },
   fetchCountriesData: function(){

       axios.get('/fetch_countries')
      .then(response => {
      
      if (response.status == 200) {

       this.countryData = response.data.countries;
        
     }
       
     
     })
     .catch(error => {

      
    
     }) 
     },
     getBanks:function(){
       
          if(this.$root.selectedPaymentCard.currency == 'XOF' || this.$root.selectedPaymentCard.currency == 'XAF'){
           this.acc_bank_code = 0;
   
     let selectedCountry = this.countryData.filter((country)=>{
              return country.iso == this.acc_country_code;
          })

         

        if(selectedCountry.length > 0){
       this.fetchCountryBanks(selectedCountry[0].iso)
          

        }
          }

   

     },

     getBankBranches:_.debounce(function () {

         if(this.$root.selectedPaymentCard.currency == 'GHS' || this.$root.selectedPaymentCard.currency == 'UGX' || this.$root.selectedPaymentCard.currency == 'TZS'){




       this.acc_bank_branch_code = 0;
        
          let selectedBank = this.bankData.filter((bank)=>{
              return bank.code == this.acc_bank_code;
          })

          let bankId = 0;

          if(selectedBank.length > 0){

             bankId = selectedBank[0].id
  
          }else{
              return
          }

          axios.get('/fetch_country_banks_branches/' + bankId)
      .then(response => {
      
      if (response.status == 200) {

       this.bankBranchData = response.data.country_bank_branches;

       
     }
       
     
     })
     .catch(error => {

      
    
     }) 
         }

      

      }, 500),
  
      handleFetchedData: function(){

          if(this.$root.selectedPaymentCard.currency == 'GBP' ||
              this.$root.selectedPaymentCard.currency == 'EUR' || this.$root.selectedPaymentCard.currency == 'USD' ||  this.$root.selectedPaymentCard.currency == 'AUD'){
           this.fetchCountriesData();
          }

          if( this.$root.selectedPaymentCard.currency == 'XOF' ){

              this.countryData = this.xof_countries;

          }

           if( this.$root.selectedPaymentCard.currency == 'XAF' ){

              this.countryData = this.xaf_countries;

          }
         
         let thisCardData = this.currencyData.filter((eachCurrency)=>{
         return eachCurrency.code == this.$root.selectedPaymentCard.currency;
         });

           if(thisCardData.length > 0){

                if(thisCardData[0].iso){

                   

                       let cardIso = thisCardData[0].iso;

                    if(cardIso != 'multiple'){

                        this.fetchCountryBanks(cardIso);

                    }

                }

            

           }
          

      },

     fetchCountryBanks: function(iso){

         this.loadingBankData = true;

       axios.get('/fetch_country_banks/' + iso)
      .then(response => {
      
      if (response.status == 200) {

       this.bankData = response.data.country_banks;

       this.loadingBankData = false;
        
     }
       
     
     })
     .catch(error => {

      
    
     }) 
     },
        handleDateFormat: function(date){
         var realTimeHour = moment(date).add(1,'hours');
       return moment(realTimeHour).format("MMM D, YYYY");
    },
    handleTime:function(date){
            var realTimeHour = moment(date).add(1,'hours');
       return moment(realTimeHour).format("h:mm a");
    },
        closeModal: function(){
       this.$root.showPayoutAccount = false;
      
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