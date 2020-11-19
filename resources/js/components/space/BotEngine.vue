<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class=" col-lg-6 offset-lg-3 py-0 px-0 my-0" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;  position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        

     
           
            <div  class="col-12 py-1 my-0 d-flex" style="align-items:center; justify-content:center; position:absolute; width:100%; height:90%;" >
                <div>

                    <div style="font-size:14px; color:grey;">Please wait, setting up bot...</div>
                   <v-progress-linear rounded width="200px" height="5px" class="d-block mt-3" indeterminate color="#3E8893"></v-progress-linear>
       
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
        this.$root.showHeader = true;

         this.$root.checkIfUserIsLoggedIn('space');

         this.createUserBot();
     
    },
    methods:{
    createUserBot: function(){
        if(this.$root.checkauthroot == 'noauth') return

          axios.get('/get-user-bot/'+  this.$route.params.botId)
          .then(response => {
             
            
            

            if(response.status == 200){
           
               
            
            
              
                this.$root.selectedSpace = response.data.space;

                this.$root.botSuggestionArray = response.data.suggestions;

                this.$router.push({ path: '/space/'  +  response.data.space.space_id  +  '/channel/content' + '/user' });
               
             
            }
              
            
           
            
          })
          .catch(error => {
              console.log(error)
            
          })
    }
   
    },
   
}
</script>
<style>

</style>