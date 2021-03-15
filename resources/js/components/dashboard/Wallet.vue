<template>
<div>
 
   <v-app class="col-12 px-1 px-md-2 py-0 mt-md-5 " style="overflow-y:auto;overflow-x:hidden; background:transparent; position:absolute; width:100%;height:100%;">
    <router-view></router-view>
   </v-app>

   

</div>
  
</template>

<script>

 export default {
    data () {
      return {
       
      }
    },
    components:{
   
    },
      mounted(){
        if(!this.$root.isLogged){

            this.$root.checkIfUserIsLoggedIn();
         return;
        }
    }
  }
</script>
<style scoped>
 .scroller::-webkit-scrollbar {
  width: 5px;
}

 
.scroller::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
  
  
</style>
