<template>
    <div class="top" style="background:transparent;font-family:BodyFont;">

    <!-- spacer -->
         
           <div class="col-12 mt-5"> 

           </div>
     <!-- ends -->

      <div class="feed-header col-md-8 offset-md-2 mt-4  " style="color:#3C87CD;">
<h1 class="text-center" style="font-size:17px;"> We would love to hear from you!</h1>
<p class="text-center mt-4" style="color:grey;font-size:14px;font-family:BodyFont;">Please help us with feedback to improve citonhub.</p>

<div class=" form-group col-lg-8 offset-lg-2 col-sm-8 offset-sm-2 ">
   
   <v-textarea
     v-model="feedback"
    clearable
    clear-icon="las la-times-circle"
    filled
    color="#3C87CD"
    style="font-size:13px;"
      label="Your message"
      auto-grow
    
    ></v-textarea>
</div>

 <div class="col-12 pt-0 mt-n2 text-center">

        <v-btn @click="sendFeedback()" small :loading="loading" :disabled="feedback == ''" color="#3C87CD" style="color:white;text-transform:normal;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" >Send</v-btn>

 </div>
      </div>
    </div>
</template>



<script>
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

export default {
  data(){
    return{
      feedback:'',
      loading:false,
    }
  },
  methods:{
    sendFeedback:function(){
      this.loading = true;
        axios.post( '/send-feedback',{
          message: this.feedback
        })
      .then(response => {
      
      if (response.status == 200) {

       
        
         this.showAlert('Thanks!','You message has been sent','success');

         this.loading = false;

         this.feedback = '';
       
     }
       
     
     })
     .catch(error => {

         this.showAlert('Oops!','Something went wrong, please try again','error');

        this.loading = false;
       
    
     }) 
    },
    showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
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

       if(type == 'success'){
         iziToast.success(
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

       if(type == 'warning'){

          iziToast.warning(
        { 
       title: title,
        timeout:2000,
       message: message,
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
        timeout:2000,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       

    },
  }
}
</script>