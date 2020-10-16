<template>
<div  class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-0 px-0 my-0" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;position:absolute;z-index:20; background:white; height:100%;">
     <profile-top></profile-top>
<v-app class="scrollerStyle"  style="background:white; font-family:BodyText;position:absolute;left:0; width:100%; height:80%; overflow-y:auto; overflow-x:hidden; padding-top:40px;padding-bottom:120px;">
       <div class="col-12 py-0 px-0 my-0">
           <div class="row py-0 my-0 px-2 ">
         <div class="col-12 py-2 my-0 text-left " >
            
              <span class="paragraph" v-html="this.$root.profileDetails.about" v-if="this.$root.profileDetails != null">
             
              </span>
         </div>
          
       </div>
      
      
       </div>   
       

</v-app>    
</div>

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
       this.$root.showHeader = true;
    },
    methods:{
       goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        
  
  },
}
</script>
<style>

  .paragraph{
       font-size: 13px;
   
    color:rgb(38, 82, 89);
}

</style>