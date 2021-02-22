<template> 
    
   
    <v-card class="col-lg-4 offset-lg-4   py-2 d-flex flex-column col-md-8 offset-md-2 application application--light" style="align-items:center; justify-content:center; " data-app="true" >
  
     <v-btn small icon color="#ffffff" @click="that.$root.showPaymentOptionBoard = false" style="position:absolute;background:#3C87CD;top:2%; left:2%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>

   <div class=" text-left">

       <div style="">
           

      <template v-if="that.$root.payment_option == 'support'">
       <h5 class="text-center">Support</h5>
           <v-alert
      dense
      style="background:#3C87CD;"
      type="info"
    >
    <span style="font-size:13px;  font-family:BodyFont;" > Your audience or members can donate any amount of money to support you or for the progress of the community. </span> 
    </v-alert>

      </template>

        <template v-if="that.$root.payment_option == 'subscription'">
        <h5 class="text-center">Subscription</h5>
             <v-alert
      dense
        style="background:#3C87CD;"
      type="info"
    >
    <span style="font-size:13px;  font-family:BodyFont;" >For subscription, recurrent payments are made by your members or audience.</span> 
    </v-alert>


          
      </template>

        <template v-if="that.$root.payment_option == 'one_time'">
    <h5 class="text-center">One-time fee</h5>
             <v-alert
      dense
         style="background:#3C87CD;"
      type="info"
    >
    <span style="font-size:13px;  font-family:BodyFont;" >  This is perfect for activites that require one time payment and gaining lifetime access. An example could be when you are organize a bootcamp for a fee. Members pay once and have access forever. </span> 
    </v-alert>
          
      </template>
           
        
       </div>

    

       <template  v-if="that.$root.payment_option == 'subscription' || that.$root.payment_option == 'one_time'">

             <div style="font-size:13px;font-family:MediumFont;" class="mb-2">Amount</div>
              <v-text-field
                style="font-size:13px;"
                 placeholder="amount"
            
             dense
             outlined
             color="#3C87CD"
            
             ></v-text-field>

       </template>

         <template  v-if="that.$root.payment_option == 'subscription'">

             <div style="font-size:13px;font-family:MediumFont;" class="mb-2">Interval</div>
              

             <select  style="font-size:13px !important; font-family:BodyFont; background:transparent;"  class="browser-default custom-select mb-4">
                 <option v-for="(option,index)  in IntervalOptions" :value="option" :key="index">{{ option}}</option>
                     </select>

       </template>
          

            
         <div class="mb-2" style="font-size:13px; font-family:BodyFont;">All payments to this channel would be managed in the below payment card in your wallet.</div> 

           <v-text-field
                style="font-size:13px;"
                 placeholder="Payment card name"
            
             dense
             outlined
             color="#3C87CD"
            
             ></v-text-field>
   </div>
   

    <div class="col-12 text-center pt-0">

                  <v-btn small color="#3C87CD" style="color:white;text-transform:normal;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" >Done</v-btn>

            </div>
 
    

    </v-card>
   
    
    
</template>
<script>
export default {
     data () {
      return {
        that:this,
        IntervalOptions:[
            "Weekly","Every 2 weeks", "Monthly","Every 2 months","Every 3 months","Yearly"
        ]
      
      }
    },
    mounted(){
      
    },
     methods:{
      
     }
}
</script>
<style scoped>

</style>