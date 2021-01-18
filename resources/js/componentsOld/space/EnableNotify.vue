<template>
     <div  style="background:transparent; font-family:BodyText;">

       <div class="   col-lg-6 offset-lg-3 py-0 px-0 my-0" style=" border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6; position:fixed;  background:rgba(38, 82, 89,0.4); height:100%; overflow-y:auto; overflow-x:hidden; z-index:9999999999999200;" 
        @click="closeNotify" >
         <div class="row my-0 py-0 px-2">


       

       <div class="py-1 my-0" style=" background-color:white;position:absolute;bottom:0%; height:auto; width:100%; left:0; overflow-y:auto; overflow-x:hidden;
       padding-bottom:80px !important; " @click="preventCloseCtl()">
           
          
           <div class="col-12 py-4 " >
        <div class="row " >
           
         
                
                <div class="col-12 px-2 py-0 text-center">
                     
              <span style="font-size:13px;">
                 Lets us Notify you whenever have new messages
              </span>

                </div>
   

   <!-- control button -->
               
                <div class="col-12 py-1 mt-2 text-center">
                  <div class="row py-0 my-0">
                     <div class="col-6 text-center">

                       <v-btn small rounded color="#3E8893" @click.stop="askPermission" style="font-size:12px; text-transform:capitalize; color:white;">Notify Me</v-btn>

                     </div>

                      <div class="col-6 text-center">
                   <v-btn small rounded  @click.stop="closeNotify" style="font-size:12px; text-transform:capitalize; color:grey;">Cancel</v-btn>
                     </div>
                  </div>
                   
                </div>
                
             
         <!-- ends -->
        

         
            
        </div>
     </div>
     
  
       
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
        preventClose:true
       
        }
    },
    components: {
   
  },
   mounted(){
     
    },
    methods:{
     closeNotify: function(){
       this.$root.closenotifyRoot = true;
         this.$root.shownotificationboard = false;
     },
     preventCloseCtl:function(){
          this.$root.shownotificationboard = true;
     },
     askPermission: function(){
         this.$root.askPermission();
         this.$root.shownotificationboard = false;
     }
      
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