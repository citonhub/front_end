<template>
     <div  style="background:transparent; font-family:BodyText;">

       <div class=" col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:fixed;  background:rgba(38, 82, 89,0.4); height:100%; overflow-y:auto; overflow-x:hidden; z-index:9999999999999200;" 
        @click="closeNotify" >
         <div class="row my-0 py-0 px-2">


       

       <div class="py-1 my-0" style=" background-color:white;position:absolute;bottom:0%; height:auto; width:100%; left:0; overflow-y:auto; overflow-x:hidden;
       padding-bottom:80px !important; " @click.stop="preventClose = true">
           
          
           <div class="col-12 py-4 " >
        <div class="row " >
           
         
                
                <div class="col-12 px-2 py-0 text-center">
                     
              <span style="font-size:13px;">
                 Lets us Notify you whenever have new messages on your space
              </span>

                </div>

               
                <div class="col-12 py-1 text-center">
                   <v-btn small rounded color="#3E8893" @click.stop="askPermission" style="font-size:12px; text-transform:capitalize; color:white;">Yes,Notify Me</v-btn>
                </div>
                
             
                 
        

         
            
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
         this.$root.shownotificationboard = false;
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