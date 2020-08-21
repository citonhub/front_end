<template>
     <div  style="background:transparent; font-family:BodyText;">

       <div class=" col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:fixed;  background:rgba(38, 82, 89,0.5); height:100%; overflow-y:auto; overflow-x:hidden; z-index:999999900;" 
         @click="closeButton">
         <div class="row my-0 py-0 px-2">


       

       <div class="py-1 px-auto pt-5 my-0 d-flex" style=" background:rgba(38, 82, 89,0.5);position:absolute;bottom:0%; height:100%; width:100%; left:0; overflow-y:auto; overflow-x:hidden; 
        ">
           
          
           <div class="col-12 py-5" >
        <div class="row py-0" >

        

             <div class="col-lg-8 offset-lg-2 text-center px-3">
          <span style="font-size:13px; color:white; font-family:HeaderText;">{{content}}</span>
            </div>

            <div class="col-12 text-center">
            <v-btn color="#3E8893" small rounded @click="closeButton"><span style="font-size:12px;color:white; text-transform:capitalize;">{{btnLabel}}</span></v-btn>
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
    props:['content','btnLabel'],
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
      closeButton:function(){
        
          this.$root.showBoard = false;
           
         
            axios.post('/save-page-tracking',{
                 page_id: this.$root.selectedPage[0].id
                  })
          .then(response => {
            
           if (response.status == 200) { 
                
              
            }else{
            
            }
            
            
          })
          .catch(error => {
          
          })
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