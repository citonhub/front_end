<template>

         <div class="col-12 my-0 px-0 py-0">
              <div class="row py-0 my-0">
              
        <router-link  :to="'/trends/connect'" class="col-3 py-0 my-0 text-center">
            <v-chip
      class="ma-1 ml-0 px-2 d-inline-block"
         
      small
      label
     
     :style="$router.currentRoute.path.indexOf('connect') >= 0 ? 'color:#ffffff;background:#3E8893; font-size:11px;' : 'color:#204346;background:#ffffff; font-size:11px;' "
      >
      Connect
      </v-chip>  
        </router-link>
         

 <router-link :to="'/trends/channels'" class="col-3 py-0 my-0 text-center">
     <v-chip
      class="ma-1 ml-0 px-2 d-inline-block"
        
      small
      label
      :style="$router.currentRoute.path.indexOf('channels') >= 0  ? 'color:#ffffff;background:#3E8893; font-size:11px;' : 'color:#204346;background:#ffffff; font-size:11px;' "
      >
      Channels
      </v-chip>  
 </router-link>
      

      <router-link  :to="'/trends/duels'" class="col-3 py-0 my-0 text-center">
        <v-chip
      class="ma-1 ml-0 px-2  d-inline-block"
      
      small
      label
     :style="$router.currentRoute.path.indexOf('duels') >= 0 ? 'color:#ffffff;background:#3E8893;font-size:11px;' : 'color:#204346;background:#ffffff;font-size:11px;' "
      >
      Duels
      </v-chip>
 </router-link>
     

    
<router-link  :to="'/trends/projects'" class="col-3 py-0 my-0 text-center">
       <v-chip
      class="ma-1 ml-0 px-2 d-inline-block"
    
      small
      label
      :style="$router.currentRoute.path.indexOf('projects') >= 0  ? 'color:#ffffff;background:#3E8893;font-size:11px;' : 'color:#204346;background:#ffffff;font-size:11px;' "
      >
      Projects
      </v-chip>  
 </router-link>
      
              </div>
           </div>
 
</template>
<script>
export default {
    
}
</script>
<style>

</style>