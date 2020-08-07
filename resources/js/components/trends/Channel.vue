<template>
     <v-app style="background:transparent; font-family:BodyText;">
        <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; ">
       <div class="row py-1 my-0 px-1" style="background:#a5d2d9;">
          <trend-top></trend-top> 
      </div>
      <div class="col-12 my-1 px-2 text-center py-0">
           <v-text-field
              style="font-size:13px;"
             placeholder="Find channels" 
             dense
             color="#4495a2"
             ></v-text-field>
       </div>
      </div>

      
        
        <div class="col-12 py-0 my-0">
          
          <div class="row my-0 py-0">


             <div class="col-12 py-5 my-5">

             </div>

          </div>
           
        </div>
        
              
  


      
         </div>
        </div>
     </v-app>
</template>
<script>



export default {
    data(){
        return{
         
         
        }
    },
     components: {
   
  },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       
       
    },
    methods:{
     
       goBack() {

          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
       
    
      
  },
}
</script>
<style>

</style>