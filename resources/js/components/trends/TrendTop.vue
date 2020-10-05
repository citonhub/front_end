<template>

         <div class="col-12 my-0 px-0 py-0">
              <div class="row py-0 my-0 px-1">

           <router-link :to="'/trends/channels'" class="col-3 py-0 my-0 text-center" style="cursor:auto;">
     <v-chip
      class="ma-1 ml-0 px-2 d-inline-block"
      small
      label
      :style="$router.currentRoute.path.indexOf('channels') >= 0  ? 'color:#ffffff;background:#3E8893;cursor:pointer; font-size:12px;' : 'color:#204346; cursor:pointer; background:#ffffff; font-size:12px;' "
      >
      {{ $t('space.channels') }}
      </v-chip>  
 </router-link>



      <router-link  :to="'/trends/duels'" class="col-3 py-0 my-0 text-center" style="cursor:auto;">
        <v-chip
      class="ma-1 ml-0 px-2  d-inline-block"
      
      small
      label
     :style="$router.currentRoute.path.indexOf('duels') >= 0 ? 'color:#ffffff;background:#3E8893;font-size:12px;cursor:pointer;' : 'cursor:pointer;color:#204346;background:#ffffff;font-size:12px;' "
      >
      
      {{ $t('duels.duels') }}
      </v-chip>
 </router-link>
     
<router-link  :to="'/trends/projects'" class="col-3 py-0 my-0 text-center" style="cursor:auto;">
       <v-chip
      class="ma-1 ml-0 px-2 d-inline-block"
    
      small
      label
      :style="$router.currentRoute.path.indexOf('projects') >= 0  ? 'color:#ffffff;background:#3E8893;font-size:12px;cursor:pointer;' : 'cursor:pointer;color:#204346;background:#ffffff;font-size:12px;' "
      >
      {{ $t('space.projects') }}
      </v-chip>  
 </router-link>


         
        <router-link  :to="'/trends/connect'" class="col-3 py-0 my-0 text-center" style="cursor:auto;">
            <v-chip
      class="ma-1 ml-0 px-2 d-inline-block"
         
      small
      label
     
     :style="$router.currentRoute.path.indexOf('connect') >= 0 ? 'color:#ffffff;background:#3E8893; font-size:12px;cursor:pointer;' : 'cursor:pointer;color:#204346;background:#ffffff; font-size:12px;' "
      >
      {{ $t('general.connect') }}
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