<template>
    <div>
         <!-- spacer -->
    <div class=" mt-1  col-12 d-md-none d-block" style="background:#F5F5FB;">

    </div>
  <!-- ends -->

   <div class="col-lg-10 offset-lg-1 py-1 pt-2 px-2 d-md-block d-none fixed-top" style="position:sticky; top:0%; background:#F5F5FB; border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5>Settings</h5>
        </div>
        
      </div>
   </div>

     <!-- spacer -->
         
           <div class="col-12 mt-3 mt-md-0 d-md-none d-block"> 

           </div>
     <!-- ends -->

    <div class="col-lg-8 offset-lg-2 py-0 application application--light" data-app="true">
      <div class="row">
        <div class="col-12 d-flex flex-row " style="border-bottom:1px solid #c5c5c5;">
           <div class="col-2 col-lg-1 col-md-2 d-flex" style="align-items:center;justify-content:center;">
                <v-icon style="font-size:20px;color:#263238;"  >las la-bell</v-icon>
           </div>
           <div class="d-flex flex-column col-10 col-lg-11 " >
               <div style="font-size:14px;font-family:MediumFont;">
                    Notifications
               </div>
               <div style="font-size:13px;font-family:BodyFont;">
                    Do you want to receive notification on your devices 
                     <div class="form-check d-inline-block ml-2">
                 <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                  <label class="form-check-label" for="flexCheckChecked">
  
                </label>
               </div>
               </div>

           </div>
        </div>

        <div class="col-12 d-flex flex-row " style="border-bottom:1px solid #c5c5c5;">
           <div class="col-2 col-lg-1 col-md-2 d-flex" style="align-items:center;justify-content:center;">
                <v-icon style="font-size:20px;color:#263238;"  >las la-tv</v-icon>
           </div>
           <div class="d-flex flex-column col-10 col-lg-11 " >
               <div style="font-size:14px;font-family:MediumFont;">
                    Dark mode
               </div>
               <div style="font-size:13px;font-family:BodyFont;">
                    Coming soon
               </div>

           </div>
        </div>

        <div class="col-12 text-center mt-3">

             <v-btn small :loading="loadingLogout" @click="logout()" color="#3C87CD" style="color:white;text-transform:normal;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" >Logout</v-btn>

        </div>
        
      </div>
   </div>

 
    </div>
</template>
<script>
export default {
      data () {
      return {
        notify:true,
        loadingLogout:false,
      }
    },
    methods:{
        logout:function(){
            this.loadingLogout = true;
             this.$store.dispatch('logout');
        }
    }
}
</script>
<style scoped>

</style>