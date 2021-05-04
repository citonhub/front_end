<template> 
    

    <div @click.stop="preventDefault">
    <v-card class="col-lg-4 offset-lg-4   py-2 d-flex flex-column col-md-8 offset-md-2 application application--light" style="align-items:center; justify-content:center; " data-app="true" >
  
     <v-btn small icon color="#ffffff" @click="saveDataToRoot" style="position:absolute;background:#3C87CD;top:2%; right:2%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>


   <template v-if="that.$root.payment_option == 'membership'">
      

     <div class="col-12 text-left py-0 px-md-2 px-1">
         <h5 class="text-left">Membership</h5>

           <span style="font-size:13px;  font-family:BodyFont;" > Your audience or members will have to pay before they access your channel and the contents in it. <span style="font-family:MediumFont;">Subscription</span> means they will pay a certain amount of money
             recurrently. <span style="font-family:MediumFont;">One-time fee</span> means they will pay once to access your channel and it's contents forever.</span><br><br> 

           <span style="font-size:13px;  font-family:BodyFont;" >Select membership type</span>

           <div class="col-12 d-flex flex-row">
             
                  <div class="  col-6  px-1 my-0 py-2 " >
                     <v-card  @click="selectPaymentOption('subscription')" :color="that.$root.payment_option == 'subscription' ? '#3C87CD' : ''"  class="px-1 py-1 appBox" :style="that.$root.payment_option == 'subscription' ? 'height:100px; border:1px solid #3C87CD; border-radius:7px;color:white;' : 'height:100px; border:1px solid #c5c5c5; border-radius:7px;'">
                        <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                      <i style="font-size:30px;" :class="'las la-credit-card'"></i>
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">Subscription</span>
                                      </div>
                                   </div>
                        </div>

                        
                     </v-card>
                 </div>

                  <div class="  col-6  px-1 my-0 py-2 " >
                     <v-card @click="selectPaymentOption('one_time')" :color="that.$root.payment_option == 'one_time' ? '#3C87CD' : ''"  class="px-1 py-1 appBox" :style="that.$root.payment_option == 'one_time' ? 'height:100px; border:1px solid #3C87CD; border-radius:7px;color:white;' : 'height:100px; border:1px solid #c5c5c5; border-radius:7px;'">
                        <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                      <i style="font-size:30px;" :class="'las la-money-bill-wave'"></i>
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">One-time fee</span>
                                      </div>
                                   </div>
                        </div>

                        
                     </v-card>
                 </div>

           </div>
       <div>

       </div>
     </div>
      
   </template>
   <template v-else>

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
 

   </template>
   
    

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
        },
          selectPaymentOption:function(type){
        

            this.$root.baseChannelName = this.name;

            this.$root.payment_option = type;

           this.$root.showPaymentOptionBoard = true;
      },
      
     }
}
</script>
<style scoped>

</style>