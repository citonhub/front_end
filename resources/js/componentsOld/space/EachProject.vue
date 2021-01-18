<template>
           <div class="col-12 py-1 px-0 my-0">
               <v-card tile flat  @click="showProjectLink(source)" color="#ffffff" style="border-bottom:1px solid #5fb0b9;"
                      >
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                           <span style="height:38px; width:38px; " class=" py-2 px-2">

                              <v-icon color="#35747e" class="">mdi-plus-network-outline</v-icon>
                           </span>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-7" style="align-items:center;">
                         <span class="titleText">{{source.title}}</span>
                    </div>
                    <div class="py-0 my-0 d-flex col-2" style="align-items:center;">
                          
                    </div>
                </div>
                </v-card>
            </div>
            
</template>
<script>
export default {
     props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default () {
          return {}
        }
      },
     
    },
 methods:{
        
       showProjectLink: function(project){
         this.$root.fromChatList = true;
           this.$router.push({ path: '/' + project.project_slug +'/panel' });
       },
    }
}
</script>
<style>

</style>