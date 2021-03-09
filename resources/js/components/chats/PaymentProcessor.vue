<template>
    <div class="col-lg-6 col-md-6 d-flex flex-column px-md-2 px-1" >


     <template v-if="loadingContent">

          <div class="text-center mt-5">


                 <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>

           </div>

     </template>

     <template v-else>


         <div class="text-center mb-2 mt-md-4 mt-0 d-flex" style="align-items:center; justify-content:center;">

                  <div   :style="imageStyleSpace(140,spaceData,'channel')"  >
               </div>

         </div>

         <div class="py-2 mt-1">
              <h6>{{spaceData.name}}</h6>
              <template v-if="spaceData.description">
             <span style="font-size:13px;font-family:BodyFont;" v-html="spaceData.description"></span>
              </template>

              
            
         </div>



       <div class="py-2 ">
              <template v-if="spaceData.payment_option == 'support'">

                   <h6 style="font-siz:14px;">Support Us</h6>

              </template>

              <template v-if="spaceData.payment_option == 'subscription'">

                   <h6 style="font-siz:14px;">Subscribe and Join Us</h6>

              </template>

               <template v-if="spaceData.payment_option == 'one_time'">

                   <h6 style="font-siz:14px;">Join Us</h6>

              </template>
               
        </div>


        <template v-if="spaceData.payment_option == 'support'">

             <div style="font-size:13px;font-family:MediumFont;" class="mb-2">Your name</div>
              <v-text-field
                style="font-size:13px;"
                 placeholder="name"
              
             dense
             :rules="requiredRule"
              v-model="supporter_name"
             type="tel"
             outlined
             color="#3C87CD"
            
             ></v-text-field>


        </template>

        
      
           <div style="font-size:13px;font-family:MediumFont;" class="mb-2">Amount</div>
          <div class="d-flex flex-row">
         
  
              <template v-if="spaceData.payment_option == 'support'">

                       <select  style="font-size:13px !important; font-family:BodyFont; background:transparent; width:25%;height:40px;" v-model="currency"  class="browser-default custom-select mb-4">
                 <option v-for="(option,index)  in CurrencyOptions" :value="option.code" :key="index">{{ option.code}}</option>
          </select>

              </template>

              <template v-else>

              <select  disabled style="font-size:13px !important; font-family:BodyFont; background:transparent; width:25%;height:40px;" v-model="currency"  class="browser-default custom-select mb-4">
                 <option v-for="(option,index)  in CurrencyOptions" :value="option.code" :key="index">{{ option.code}}</option>
          </select>

              </template>
           
          

               <v-text-field
                style="font-size:13px; width:75%;"
                 placeholder="amount"
                  v-model="amount"
             dense
             :readonly="spaceData.payment_option != 'support'"
               :rules="AmountRule"
             type="tel"
             outlined
             color="#3C87CD"
            
             ></v-text-field>

          </div>

           <template v-if="spaceData.payment_option == 'subscription'">

                 <div style="font-size:13px;font-family:MediumFont;" class="mb-2">Interval</div>

                 <span style="font-size:13px;font-family:BodyFont;color:gray;">{{ interval }}</span>

           </template>

          
             


     <template v-if="spaceData.payment_option == 'support'">

           <div class="py-2" style="font-size:13px;color:grey;font-family:MediumFont;">Select support type;</div>
       

        <div class=" d-flex flex-row flex-wrap ">

    

     <div class="  col-6  px-1 my-0 py-2 " >
                     <v-card   :color="support_type == 'once' ? '#3C87CD' :''" @click="support_type = 'once'" class="px-1 py-1 " :style="support_type == 'once' ? 'height:100px; border:1px solid #3C87CD; border-radius:7px;color:white;' : 'height:100px; border:1px solid #c5c5c5; border-radius:7px;'">
                        <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                       <img src="/imgs/support.png" height="40" >
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">One-time</span>
                                      </div>
                                   </div>
                        </div>

                         
                     </v-card>
                 </div>

                  <div class="  col-6  px-1 my-0 py-2 " >
                     <v-card :color="support_type == 'recurrent' ? '#3C87CD' :''" @click="HandleSupport('recurrent')" class="px-1 py-1 appBox" :style="support_type == 'recurrent' ? 'height:100px; border:1px solid #3C87CD; border-radius:7px;color:white;' : 'height:100px; border:1px solid #c5c5c5; border-radius:7px;'">
                        <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                       <img src="/imgs/subscribe.png" height="40" >
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">Monthly</span>
                                      </div>
                                   </div>
                        </div>

                         
                     </v-card>
                 </div>

        </div>
 

     </template>

       


   <div class="col-12 text-center py-2 mt-3">

                  <v-btn :loading="loadingBtn" :disabled="amount == '' || supporter_name == ''"  @click="makePayment" small color="#3C87CD" style="color:white;text-transform:none;font-family:MediumFont;font-size:11px;" class="mx-2 d-inline-block" >
                      <template  v-if="spaceData.payment_option == 'support'">
                          <span>Support</span>
                      </template>
                       <template  v-if="spaceData.payment_option == 'subscription'">
                          <span>Subscribe</span>
                      </template>
                       <template  v-if="spaceData.payment_option == 'one_time'">
                          <span>Join</span>
                      </template>
                   </v-btn>

            </div>


     </template>
          
    


    </div>
</template>


<script>

import Flutterwave from 'vue-flutterwave'

Vue.use(Flutterwave, { publicKey: 'FLWPUBK-ea9a4693d8c3caabf78dafe50beccf96-X' })

export default {
     data(){
      return{
        loadingBtn:false,
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
        AmountRule:[
             v => !!v || 'Oh! you missed this.',
               v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character',
                v => !isNaN(parseFloat(v)) && v >= 5 && v <= 1000000 || 'Amount must be a number between 5 to 1000000'
         ],
        amount:'',
        currency:'NGN',
        interval:'monthly',
        supporter_name:'',
        support_type:'once',
         requiredRule:[
             v => !!v || 'Oh! you missed this.'
         ],
         loadingContent:true,
         spaceData:[],
      }
     },
     mounted(){

          setTimeout(() => {
               this.fetchSpaceInfo();
          }, 1000);
      
     },
     methods:{
         HandleSupport: function(){
                 this.$root.checkIfUserIsLoggedIn();
         
           this.support_type = 'recurrent'
         },
    makePayment:function() {


         let userEmail = '';

         let userName = '';
 
       if(this.$root.isLogged){

          userEmail = this.$root.authProfile.email;

          userName = this.$root.authProfile.name;
             

       }else{
           userName = this.supporter_name;
       }

       let payment_desc = '';

       if(this.spaceData.payment_option == 'support'){

            payment_desc = 'Support ' + this.spaceData.name;

       }

        if(this.spaceData.payment_option == 'subscription'){

            payment_desc = 'Subscription fee for' + this.spaceData.name;

       }

        if(this.spaceData.payment_option == 'one_time'){

            payment_desc = 'Payment to join ' + this.spaceData.name;

       }

        let paymentplan = null;

         if(this.spaceData.payment_option == 'subscription'){

              paymentplan = this.spaceData.payment_data.plan_id;

         }

         if(this.spaceData.payment_option == 'support'){

             if(this.support_type == 'recurrent'){

                paymentplan = this.spaceData.payment_data.plan_id;

             }

         }

        let SpaceImage = 'https://www.citonhub.com/images/icons/logo_android-chrome-192x192.png';

        if(this.spaceData.image_name){

            SpaceImage = 'http://citonhubnew.com/imgs/space/thumbnails/' +  this.spaceData.image_name + '.' + this.spaceData.image_extension;

        }

      this.$launchFlutterwave({
        tx_ref: Date.now(),
        amount: this.amount,
        currency: this.currency,
        payment_options: "card,mobilemoney,ussd",
        payment_plan: paymentplan,
        meta: {
        card_no: this.spaceData.payment_data.card_no,
        type: this.spaceData.payment_option,
         paymentplan: paymentplan,
         destination_currency: this.currency,
         origin_currency: this.spaceData.payment_data.currency,
         customer_id: this.$root.user_temp_id
      },
        customer: {
          email: userEmail,
          name: userName
        },
        callback: (data) => {

           if(data.status == 'successful'){
             
              this.loadingBtn = true;
                axios.post('/save-transaction',{
            data: data,
            type: this.spaceData.payment_option,
            card_no:  this.spaceData.payment_data.card_no,
            narration: payment_desc,
            paymentplan: paymentplan,
            destination_currency: this.currency,
            origin_currency: this.spaceData.payment_data.currency

              })
      .then(response => {
        
       if (response.status == 200) {

           

           
          
           this.$root.chatComponent.openChat(this.$route.params.spaceId,true);

            return;
             
    
        
        }else{
          console.log(response.status);
        }
        
        
      })
      .catch(error => {
        console.log(error);
      })


            }else{

                this.$root.chatComponent.showAlert('Oops!','Unable to process your payment, please try again','error');

            }
          
       


        },
        customizations: {
          title: this.spaceData.name,
          description: payment_desc,
          logo: SpaceImage
        }
      })
    },
    

       

          fetchSpaceInfo: function(){
                 this.loadingContent = true;
           axios.get('/fetch-space-info-'+ this.$route.params.spaceId)
   .then(response => {

   if (response.status == 200) {

        this.spaceData = response.data.space;

          if(this.spaceData.type != 'Channel' && this.spaceData.type != 'Team' && this.spaceData.type != 'SubSpace'){

            this.$root.chatComponent.openChat(this.$route.params.spaceId,true);

            return;

          }

          if(this.spaceData.is_member){


           if(!this.$root.showProcessorFromChat){

               this.$root.chatComponent.openChat(this.$route.params.spaceId,true);

            return;
             
           }else{

            
           }

           
          }else{

            if(this.spaceData.payment_option == 'support' && this.$root.isLogged){
   
           
              if(!this.$root.fromSupportDirectlink){

                 this.$root.chatComponent.openChat(this.$route.params.spaceId,false);

            return;

              }

            


            }else{
             

               
            }
          }


         



           

           
   



           if(this.spaceData.payment_option == 'subscription' ){

                this.currency = this.spaceData.payment_data.currency;
                 this.interval = this.spaceData.payment_data.interval;

                 this.amount = this.spaceData.payment_data.amount;

                 this.supporter_name = 'supporter';

           }

             if(this.spaceData.payment_option == 'one_time' ){

                this.currency = this.spaceData.payment_data.currency;
                
                 this.amount = this.spaceData.payment_data.amount;

                   this.supporter_name = 'supporter';

           }

           if(this.$root.isLogged){

                this.supporter_name = this.$root.authProfile.name;

           }
      
      
           this.loadingContent = false;
  }


  })
  .catch(error => {

      this.$root.chatComponent.showAlert('Oops!','Something went wrong, please try again','error');

      this.loadingContent = false;

  })


          },

          imageStyleSpace:function(dimension,data,type){


      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;";
         if(type == 'channel'){
              styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
         }else{
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
         }

         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;";
         let imgLink = data.image_name + '.' + data.image_extension;
          if(type == 'channel' || type== 'bot'){
              styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/'  + imgLink  +  ');';
         }else{
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         }

          return styleString;
      }



  },
     }
}
</script>
<style scoped>

</style>