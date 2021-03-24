<template>
    
    <div @click.stop="preventDefault">
    <v-card class="col-lg-4 offset-lg-4   py-1 pb-2 d-flex flex-column col-md-8 offset-md-2 application application--light"  data-app="true" >

         
     <div class="d-flex flex-row px-1 py-2" style="border-bottom:1px solid #c5c5c5; border-radius:0px; align-items:center;">

             <div style="font-family:HeaderFont;font-size:16px;">Referrals</div>

                <v-btn small icon color="#ffffff" @click="closeModal" style="background:#3C87CD;" 
           class="ml-auto "><v-icon>mdi-close mdi-18px</v-icon></v-btn>

        </div>

      <template v-if="loading">

        <div  class="col-12 mt-4 text-center">

           <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

            </div>

      </template>

      <template v-else>

       

      <div class="col-12 d-flex  flex-column" style="align-items:center;justify-content:center;">

          <div style="color:grey;font-size:14px;font-family:MediumFont;">Your Referrals</div>

         <div class="py-2" style="font-size:19px;font-family:HeaderFont;">{{totalReferral}}</div>

      </div>

       <div class="col-12 d-flex pb-1 flex-column" style="align-items:center;justify-content:center;">

              <div style="color:grey;font-size:14px;font-family:MediumFont;">Amount Earned</div>

            <div class="py-2" style="font-size:19px;font-family:HeaderFont;"><span v-html="currencyToCharacter(that.$root.selectedPaymentCard.currency)"></span>{{formatMoney(totalEarned)}}</div>

      </div>



     <div class="d-flex flex-row py-0 px-1 col-12" style="align-items:center;">

       <div style="width:100%;">
         <div style="font-size:13px;font-family:MediumFont;" class="mb-1 ">Referral link:</div>
              <v-text-field
                style="font-size:13px;"
                 placeholder="city"
               v-model="referralLink"
             dense  
             readonly
             outlined
             color="#3C87CD"
            
             ></v-text-field>
       </div>

       <v-btn icon @click="copyMessage"><v-icon>las la-copy</v-icon></v-btn>

     </div>

     <div style="font-size:13px;font-family:BodyFont;">
         Invite your friends to mentor on CitonHub and get 5% commission of their first 10 earnings.
        </div>

        <div class="col-12 px-0">
          <v-btn @click="shareToWhatsapp" block color="#4FCE5D" style="text-transform:none;color:white;font-family:MediumFont;">Share to Whatsapp</v-btn>
        </div>

         <div class="col-12 px-0">
          <v-btn @click="shareToTwitter" block color="#00acee" style="text-transform:none;color:white;font-family:MediumFont;">Share to Twitter</v-btn>
        </div>
  

      </template>

  
   
   
    

    </v-card>
   
    </div>
</template>
<script>
export default {
     data(){
      
        return{
         
         currentpage:1,
         lastpage:1,
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
        referralData:[],
        totalReferral:0,
        totalEarned:0,
        loading:false,
        loadingUser:false,
        referralLink:'https://link.citonhub.com/referral/'+ this.$root.username
          
        }
    },
    mounted(){
   this.fetchReferralInfo();
    },
    methods:{
        closeModal: function(){
       this.$root.showWalletinfo = false;
        this.$root.infoType = false;
        },
            formatMoney: function(number) {

   return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
},
  copyMessage () {


            const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};



      copyToClipboard('https://link.citonhub.com/referral/'+ this.$root.username);

        this.$root.cardViewComponent.showAlert('Copied!','Copied to clipboard','success');

         
        },
        handleInput:function(pageNum){

           this.loadingUser = true;
        
           axios.get( '/referral-info' + '?page=' + pageNum)
      .then(response => {
      
      if (response.status == 200) {

        this.referralData = response.data.referrals.data;

          this.currentpage = response.data.referrals.current_page;

          this.lastPage = response.data.referrals.last_page;

           this.loadingUser = false;

     }
       
     
     })
     .catch(error => {

         this.loadingUser = false;
    
     }) 

        },
        fetchReferralInfo:function(){

          this.loading  = true;

             let storedReferral = this.$root.getLocalStore('user_referral_info'  + this.$root.username);

            storedReferral.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      this.referralData = finalResult.referrals.data;
                      this.currentpage = finalResult.referrals.data.current_page;
                      this.lastpage = finalResult.referrals.data.last_page;
                      this.totalReferral = finalResult.total_referrals;
                      this.totalEarned = finalResult.amount_earned;
                    
                     this.loading  = false;
       
                this.checkForReferral();

                 }else{
            
           
            axios.get( '/referral-info')
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_referral_info' + this.$root.username,response.data);
        
               let finalResult = response.data;
                     
                      this.referralData = finalResult.referrals.data;
                      this.currentpage = finalResult.referrals.data.current_page;
                      this.lastpage = finalResult.referrals.data.last_page;
                      this.totalReferral = finalResult.total_referrals;
                      this.totalEarned = finalResult.amount_earned;
                    

              this.loading  = false;      
 
       
     }
       
     
     })
     .catch(error => {

          this.$root.cardViewComponent.showAlert('Oops!','Something went wrong','error');

        this.loading = false;
    
     }) 

                 }
            })


      },
      checkForReferral:function(){
         
           axios.get( '/referral-info')
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_referral_info' + this.$root.username,response.data);
        
               let finalResult = response.data;
                     
                      this.referralData = finalResult.referrals.data;
                      this.currentpage = finalResult.referrals.data.current_page;
                      this.lastpage = finalResult.referrals.data.last_page;
                      this.totalReferral = finalResult.total_referrals;
                      this.totalEarned = finalResult.amount_earned;
                    

            
       
     }
       
     
     })
     .catch(error => {

          this.$root.cardViewComponent.showAlert('Oops!','Something went wrong','error');

        this.loading = false;
    
     }) 

      },
     shareToWhatsapp:function(){

              this.$root.shareText = 'Teach, grow your community and earn on CitonHub';
              this.$root.shareLink = 'https://link.citonhub.com/referral/'+ this.$root.username;

        let link = 'whatsapp://send?text='+ this.$root.shareText + ', ' + this.$root.shareLink;

         window.open(link, '_blank');

       
      },
      shareToTwitter: function(){

           this.$root.shareText = 'Teach, grow your community and earn on CitonHub';
              this.$root.shareLink = 'https://link.citonhub.com/referral/'+ this.$root.username;

         let link = 'https://twitter.com/intent/tweet?' + 'url=' + this.$root.shareLink + '&text=' + this.$root.shareText;

        window.open(link, '_blank');   
       },
     
     imageStyle:function(dimension,data,type){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         if(type == 'channel'){
              styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
         }else{
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
         }
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         let imgLink = data.image_name + '.' + data.image_extension;
          if(type == 'channel' || type == 'bot'){
              styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/thumbnails/'  + imgLink  +  ');';
         }else{
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/thumbnails/'  + imgLink  +  ');';
         }
         
          return styleString;
      }

      

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
.scroller::-webkit-scrollbar {
  width: 5px;
}


.scroller::-webkit-scrollbar-thumb {
  background-color: #3C87CD;
  outline: 1px solid #3C87CD;
}
</style>