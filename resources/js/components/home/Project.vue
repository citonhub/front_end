<template>

     <v-card class="py-1 px-2"  @click.stop="goToProject">
          
              <div class="col-12 py-2 px-0">
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                     <span class="px-1 py-1" style="background-color:#c9e4e8;border:1px solid transparent;border-radius:50%;" ><v-icon color="#1f4247">mdi-plus-network-outline mdi-18px</v-icon></span>
              
                     </div>
                     <div class="col-6 py-0 my-0 text-left px-0" >
                        <span style="font-size:12px;" class="msgText">{{projectData.title}}</span>
                     </div>
                     <div class="col-3 py-0 my-0 d-flex" style="align-items:center;justify-content:center;">
                          <v-icon color="#3E8893">mdi-star</v-icon> <span class="mx-1 pt-1" style="color:gray; font-size:11px;">{{projectData.stars}}</span>
                     </div>
                  </div>
              </div>
            
          
           </v-card>
    
</template>
<script>
export default {
    props:['projectData'],
    methods:{
         goToProject:function(){

          window.location = '/#/' + this.projectData.project_slug + '/panel';

         }
    }
}
</script>
<style scoped>

.titleText{
    font-size:13px; 
    font-family:HeaderText; 
    color:#173236;
}



</style>