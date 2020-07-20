<template>
     <div  style="background:transparent; font-family:BodyText;">

       <div class=" col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:fixed;  background:rgba(38, 82, 89,0.4); height:100%; overflow-y:auto; overflow-x:hidden; z-index:200;" 
         @click="closeShare">
         <div class="row my-0 py-0 px-2">


       

       <div class="py-1 my-0" style=" background-color:white;position:absolute;bottom:0%; height:55%; width:100%; left:0; overflow-y:auto; overflow-x:hidden; ">
           
          
           <div class="col-12 py-1" >
        <div class="row" >
           
         
                
                <div class="col-12 px-2 py-0">
                       <v-card tile flat class="col-12 py-2 px-0 my-1" color="#edf6f7" style="border:1px solid #5fb0b9;" @click.stop="shareToWhatsapp">
                <div class="row py-0 my-0 px-0">
                    
                    <div class="col-2 d-flex py-0 my-0" style="align-items:center; justify-content:center;">
                        <v-icon color="#35747e" class="mx-1">mdi-whatsapp</v-icon> 
                    </div>
                     <div class="py-0 my-0 d-flex col-8" style="align-items:center; justify-content:center;">
                        <span class="titleTextNew">Share to WhatsApp</span>
                    </div>
                     <div class="col-2 d-flex" style="align-items:center; justify-content:center;">
                       
                    </div>
                    
                    
                </div>
             </v-card>

              <v-card tile flat class="col-12 py-2 px-0 my-1" color="#edf6f7" style="border:1px solid #5fb0b9;" @click.stop="shareToTwitter">
                <div class="row py-0 my-0 px-0">
                    
                    <div class="col-2 d-flex py-0 my-0" style="align-items:center; justify-content:center;">
                        <v-icon color="#35747e" class="mx-1">mdi-twitter</v-icon> 
                    </div>
                     <div class="py-0 my-0 d-flex col-8" style="align-items:center; justify-content:center;">
                        <span class="titleTextNew">Share to Twitter</span>
                    </div>
                     <div class="col-2 d-flex" style="align-items:center; justify-content:center;">
                       
                    </div>
                    
                    
                </div>
             </v-card>

              <v-card tile flat class="col-12 py-2 px-0 my-1" color="#edf6f7" style="border:1px solid #5fb0b9;" @click.stop="shareToFacebook">
                <div class="row py-0 my-0 px-0">
                    
                    <div class="col-2 d-flex py-0 my-0" style="align-items:center; justify-content:center;">
                        <v-icon color="#35747e" class="mx-1">mdi-facebook</v-icon> 
                    </div>
                     <div class="py-0 my-0 d-flex col-8" style="align-items:center; justify-content:center;">
                        <span class="titleTextNew">Share to Facebook</span>
                    </div>
                     <div class="col-2 d-flex" style="align-items:center; justify-content:center;">
                       
                    </div>
                    
                    
                </div>
             </v-card>

              <v-card tile flat class="col-12 py-2 px-0 my-1" color="#edf6f7" style="border:1px solid #5fb0b9;" @click.stop="copyLink" >
                <div class="row py-0 my-0 px-0">
                    
                    <div class="col-2 d-flex py-0 my-0" style="align-items:center; justify-content:center;">
                        <v-icon color="#35747e" class="mx-1">mdi-link</v-icon> 
                    </div>
                     <div class="py-0 my-0 d-flex col-8" style="align-items:center; justify-content:center;">
                        <span class="titleTextNew">Copy Link</span>
                    </div>
                     <div class="col-2 d-flex" style="align-items:center; justify-content:center;">
                       
                    </div>
                    
                    
                </div>
             </v-card>
              <input type="hidden" id="spacelink" :value="this.$root.shareLink">

                </div>
                 
        

         
            
        </div>
     </div>
     
     <v-fade-transition>
              <div  style="position:absolute; width:100%; height:auto: align-items:center;justify-content:center;bottom:40%; z-index:99923453566;"  class="d-flex">
             <v-alert
      v-model="Alert"
      dismissible
      close-icon="mdi-delete"
      color="#3E8893"
      dense
       
       style="font-size:13px;background:#dbedf0;"
       height="auto"
      
     
      elevation="2"
     
     
    >
      {{alertMsg}}
    </v-alert>
        </div>
        </v-fade-transition>
       
       </div>
     </div>
      </div>

      
     </div>
</template>
<script>


export default {
    data(){
        return{
           Alert:false,
        alertMsg:'',
       
        }
    },
    components: {
   
  },
   mounted(){
     
    },
    methods:{
     showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

    },
      closeShare:function(){
          this.$root.showShare = false;
         
      },
      shareToWhatsapp:function(){
        let link = 'whatsapp://send?text=' + this.$root.shareText + ',' + this.$root.shareLink;
         window.location =  link;
      },
      shareToTwitter: function(){
         let link = 'https://twitter.com/intent/tweet?text=' + this.$root.shareText + ',&url=' + this.$root.shareLink;
         window.location =  link;
      },
      shareToFacebook:function(){
          let link = 'https://www.facebook.com/sharer/sharer.php?u=' + this.$root.shareLink;
         window.location =  link;
      },
     
       copyLink () {
          let spacelink = document.querySelector('#spacelink')
          spacelink.setAttribute('type', 'text')  
          spacelink.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
              if(msg == 'successful'){
                this.showAlert(5000,'Link Copied!')
              }else{
                 this.showAlert(5000,'Unable to Copy Link')
              }
          } catch (err) {
           
          }

          /* unselect the range */
          spacelink.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        },


     
     
    },
   
}
</script>
<style>
.titleTextNew{
    font-size:13px; 
    font-family:HeaderText; 
    color:#35747e;
}
</style>