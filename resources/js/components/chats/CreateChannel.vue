<template>

   <div class="col-12 py-1 my-0 ">
    <div class="row">
        
        <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 py-0 px-1">
              <v-btn icon @click="close">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-0 text-center">
             <span style="font-size:14px; font-family:MediumFont;">Create a channel</span>
          </div>
              
              <div class="col-2 py-0 mr-1 text-right">
                 
              </div>
          
        </div>



          <!-- create channel form -->

      <div class="col-12 py-1 my-0" style="font-family:BodyFont;overflow-y:auto;">
         <v-form class="row  mt-0 py-2 px-2 "  ref="form" v-model="formstate">
              

            
                   <div class="col-lg-12 col-md-6 offset-md-3 offset-lg-0 py-2 my-0 px-1" style="width:100%;">
                       <div style="font-size:14px;" class="mb-2">Name</div>
              <v-text-field
                style="font-size:13px;"
                 placeholder="Dev community"
            
             dense
             outlined
             :rules="Rule"
             v-model="name"
              counter="80"
             color="#3C87CD"
            
             ></v-text-field>

             <!--  description field starts-->
  


             <div style="font-size:14px;" class="my-2 mt-1">Description</div>
              <v-textarea
                 style="font-size:13px;"
               
            placeholder="We are here for your growth. We have over ten years in teaching and mentoring people like you to become software developers."
            counter="400"
            outlined
            v-model="description"
             color="#3C87CD">
             </v-textarea>

  
   <!--  description field ends-->

             </div>

             <div class="col-lg-12 col-md-6 offset-md-3 offset-lg-0 py-2 pt-0 my-0 px-1  mt-n3">

               <div style="font-size:14px;">Select how you will like to earn. <a href="https://blog.citonhub.com/how-developers-make-money-on-citonhub" target="_blank">Read more...</a><br>
               <span style="color:grey;font-size:13px;">We only earn when you earn.</span>
               </div>
              

               <div class="col-12 px-1 py-1 d-flex flex-row">

                   <div class="col-2">

                  </div>

                  <div class="  col-4  px-1 my-0 py-2 " >
                     <v-card  @click="selectPaymentOption('support')" :color="that.$root.payment_option == 'support' ? '#3C87CD' : ''"  class="px-1 py-1 appBox" :style="that.$root.payment_option == 'support' ? 'height:100px; border:1px solid #3C87CD; border-radius:7px;color:white;' : 'height:100px; border:1px solid #c5c5c5; border-radius:7px;'">
                        <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                      <i :style="that.$root.payment_option == 'support' ? 'font-size:30px;color:white;' : 'font-size:30px;'" :class="'las la-hands-helping'"></i>
                                      <div>
                                         <span  :style="that.$root.payment_option == 'support' ? 'font-size:13px; font-family:BodyFont;color:white;' : 'font-size:13px; font-family:BodyFont;'" >Donation</span>
                                      </div>
                                   </div>
                        </div>

                          
                     </v-card>
                 </div>

                  <div class="  col-4  px-1 my-0 py-2 " >
                     <v-card  @click="selectPaymentOption('membership')" :color="that.$root.payment_option == 'subscription' || that.$root.payment_option == 'one_time' ? '#3C87CD' : ''"  class="px-1 py-1 appBox" :style="that.$root.payment_option == 'subscription' || that.$root.payment_option == 'one_time' ? 'height:100px; border:1px solid #3C87CD; border-radius:7px;color:white;' : 'height:100px; border:1px solid #c5c5c5; border-radius:7px;'">
                        <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                      <i :style="that.$root.payment_option == 'subscription' || that.$root.payment_option == 'one_time' ? 'font-size:30px;color:white;' : 'font-size:30px;'" :class="'las la-user-friends'"></i>
                                      <div>
                                         <span :style="that.$root.payment_option == 'subscription' || that.$root.payment_option == 'one_time' ? 'font-size:13px; font-family:BodyFont;color:white;' : 'font-size:13px; font-family:BodyFont;'">Membership</span>
                                      </div>
                                   </div>
                        </div>

                        
                     </v-card>
                 </div>

                  <div class="col-2">

                  </div>

                
               </div>

             </div>

             <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn @click.prevent="createSpace" :disabled="name == '' || description == ''" type="submit" rounded small color="#3C87CD" style="font-size:12px;text-transform:none; color:white;font-family: MediumFont;" :loading="loading">Create</v-btn>
             </div>

             <div class="my-5 py-5">

             </div>

         
              
          </v-form>
        </div>

      <!-- ends -->

       
        
     

    </div>
   </div>


   
</template>
<script>



export default {
    data(){
        return{
          requiredRule: [
         v => !!v || 'This feild is required',
        ],
        type:'',
        Alert:false,
        that:this,
        alertMsg:'',
        spaceType:[
         'Channel'
        ],
        selectedType:'Channel',
        payment_option: '',
        description:'',
        loading:false,
        name:'',
        formstate:false,
        Rule:[
             v => !!v || 'Oh! you missed this.',
           v => v.length < 80 || 'Name must be less than 50 characters',
             v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character'
         ],
         limit:'10000',
          limitRule:[
             v => !!v || 'Limit is required',
             v => !isNaN(parseFloat(v)) && v >= 2 && v <= 500 || 'Members Limit has to be between 2 and 5000'
        ],
        }
    },
     components: {
  
  },
    mounted(){
        this.$root.componentIsLoading = false;
        this.$root.createChannelComponent = this;
    },
    methods:{

      selectPaymentOption:function(type){
           this.payment_option = type;

            this.$root.baseChannelName = this.name;

            this.$root.payment_option = type;

           this.$root.showPaymentOptionBoard = true;
      },
      
        close:function(){

             window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        this.$root.chatComponent.chatbarContent = 'chat_list'
        },  
          showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

    },
        createSpace:function(){
       
      
     if( this.$refs.form.validate()){

        let finalName = '';
           
            if(this.payment_option == 'subscription'){

              finalName = 'Subscription for ' + this.name

            
            }

             if(this.payment_option == 'support'){

              finalName = 'Support for ' + this.name

            
            }

            if(this.payment_option == ''){

             finalName = 'Support for ' + this.name;
              this.payment_option = 'support'
                  
          this.$root.payment_name = this.name;
          this.$root.payment_card_name = this.name;
          this.$root.payment_amount = '';
          this.$root.payment_interval = 'monthly';
          this.$root.payment_currency = 'USD';
          this.$root.baseChannelName = this.name;
            this.$root.payment_option = 'support'

            }
       
          this.loading = true;
         axios.post('/create-space',{
                channel_name: this.name,
                limit: this.limit,
                type: this.selectedType,
                payment_option: this.$root.payment_option,
                name: finalName,
                currency: this.$root.payment_currency,
                amount: this.$root.payment_amount,
                card_name: this.$root.payment_card_name,
                interval: this.$root.payment_interval,
                description: this.description
                  })
          .then(response => {
             
            
            
             if (response.status == 200) {


                  let storedChat = this.$root.getLocalStore('user_chat_list_new_'+ this.$root.username);

                   storedChat.then((result)=>{

                       if(result != null ){

                    let finalResult = JSON.parse(result);
                      
                         finalResult.channels.unshift(response.data.space);

                          this.$root.LocalStore('user_chat_list_new_' + this.$root.username,finalResult,false,'new_channel',response.data.space);

                 

                  

                    

                 }

                   } )
               
            
            
            }   
            
          })
          .catch(error => {
              this.$root.chatComponent.showAlert('Oops','Something went wrong,please try again','error');
              this.loading = false;
          })
      }

    }
  
  },
}
</script>
<style scoped>

</style>