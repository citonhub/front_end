<template> 
    

    <div @click.stop="preventDefault">
    <v-card class="col-lg-4 offset-lg-4   py-2 d-flex flex-column col-md-8 offset-md-2 application application--light" style="align-items:center; justify-content:center; " data-app="true" >
  
     <v-btn small icon color="#ffffff" @click="saveDataToRoot" style="position:absolute;background:#3C87CD;top:2%; right:2%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>

   <div class=" text-left">

       <div style="">
           

      <template v-if="that.$root.payment_option == 'support'">
       <h5 >Donation</h5>
           <v-alert
      dense
      style="background:#3C87CD;"
      type="info"
    >
    <span style="font-size:13px;  font-family:BodyFont;" > Your audience or members can donate any amount of money to support you or for the progress of the community. </span> 
    </v-alert>

      </template>

        <template v-if="that.$root.payment_option == 'subscription'">
        <h5 >Subscription</h5>
             <v-alert
      dense
        style="background:#3C87CD;"
      type="info"
    >
    <span style="font-size:13px;  font-family:BodyFont;" >For subscription, recurrent payments are made by your members or audience.</span> 
    </v-alert>


          
      </template>

        <template v-if="that.$root.payment_option == 'one_time'">
    <h5 >One-time fee</h5>
             <v-alert
      dense
         style="background:#3C87CD;"
      type="info"
    >
    <span style="font-size:13px;  font-family:BodyFont;" >  This is perfect for activites that require one time payment and gaining lifetime access. An example could be when you are organize a bootcamp for a fee. Members pay once and have access forever. </span> 
    </v-alert>
          
      </template>
           
        
       </div>


         <div style="font-size:13px;font-family:MediumFont;" class="mb-2">Select currency</div>
                <select  style="font-size:13px !important; font-family:BodyFont; background:transparent;" v-model="currency"  class="browser-default custom-select mb-4">
                 <option v-for="(option,index)  in CurrencyOptions" :value="option.code" :key="index">{{ option.name}}</option>
          </select>

    

       <template  v-if="that.$root.payment_option == 'subscription' || that.$root.payment_option == 'one_time'">


        
             <div style="font-size:13px;font-family:MediumFont;" class="mb-2">Set amount</div>
              <v-text-field
                style="font-size:13px;"
                 placeholder="amount"
               v-model="amount"
             dense
             :rules="AmountRule"
             type="tel"
             outlined
             color="#3C87CD"
            
             ></v-text-field>

       </template>

         <template  v-if="that.$root.payment_option == 'subscription'">

             <div style="font-size:13px;font-family:MediumFont;" class="mb-2">Set interval</div>
              

             <select  style="font-size:13px !important; font-family:BodyFont; background:transparent;" v-model="interval"  class="browser-default custom-select mb-4">
                 <option v-for="(option,index)  in IntervalOptions" :value="option" :key="index">{{ option}}</option>
                     </select>

       </template>
          

            
         <div class="mb-2" style="font-size:13px; font-family:BodyFont;">All payments to your channel would be managed in this payment card.</div> 

           <v-text-field
                style="font-size:13px;"
                 placeholder="Payment card name"
               v-model="card_name"
             dense
             :rules="requiredRule"
             outlined
             color="#3C87CD"
            
             ></v-text-field>
   </div>
   

    <div class="col-12 text-center pt-0">

                  <v-btn small color="#3C87CD" @click.stop="saveDataToRoot" style="color:white;text-transform:normal;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" >Done</v-btn>

            </div>
 
    

    </v-card>
   
    </div>
   
  
    
    
</template>
<script>
export default {
     data () {
      return {
        that:this,
        IntervalOptions:[
            "weekly","monthly", "quarterly","yearly"
        ],
        CurrencyOptions:[
          {
            name:'Nigerian Naira (NGN)',
            code:'NGN'
          },
          {
            name:'Australian Dollar (AUD)',
            code:'AUD'
          },
          {
            name:'United State Dollar (USD)',
            code:'USD'
          },
          
           {
            name:'Euro (EUR)',
            code:'EUR'
          },
           {
            name:'British Pound Sterling (GBP)',
            code:'GBP'
          },
           {
            name:'Ghanainan Cedi (GHS)',
            code:'GHS'
          },
           {
            name:'Kenya Shilling (KES)',
            code:'KES'
          },
             {
            name:'South African Rand (ZAR)',
            code:'ZAR'
          },
           {
            name:'Rwandan Franc (RWF)',
            code:'RWF'
          },
            {
            name:'Sierra Leonean Leone (SLL)',
            code:'SLL'
          },
           
            {
            name:'Tanzanian Shilling (TZS)',
            code:'TZS'
          },
            {
            name:'Ugandan Shilling (UGX)',
            code:'UGX'
          },
            {
            name:'CSA Franc BEAC (XAF)',
            code:'XAF'
          },
            {
            name:'CSA Franc BCEAO (XOF)',
            code:'XOF'
          },

           {
            name:'Zambian Kwacha (ZMW)',
            code:'ZMW'
          },

         
           
          
          
        ],
        card_name:'',
         requiredRule:[
             v => !!v || 'Oh! you missed this.'
         ],
          AmountRule:[
             v => !!v || 'Oh! you missed this.',
               v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character',
                v => !isNaN(parseFloat(v)) && v >= 5 && v <= 1000000 || 'Amount must be a number between 5 to 1000000'
         ],
        amount:'',
        currency:'NGN',
        interval:'monthly',
        name:''
      
      }
    },
    mounted(){
        this.card_name = this.$root.baseChannelName
    },
     methods:{
       preventDefault:function(){

       },
        saveDataToRoot: function(){

            
          this.$root.payment_name = this.name;
          this.$root.payment_card_name = this.card_name;
          this.$root.payment_amount = this.amount;
          this.$root.payment_interval = this.interval;
          this.$root.payment_currency = this.currency;

          this.$root.showPaymentOptionBoard = false;
        }
     }
}
</script>
<style scoped>

</style>