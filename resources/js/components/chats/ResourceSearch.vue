<template>
    <div style="background:transparent;">
   <div class="col-12 py-1 my-0 ">
    <div class="row">
        <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; align-items:center;">
            <div class=" mr-1 py-0">
              <v-btn icon @click.stop="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class=" py-0 text-center" style="width:100%;">
               <input style="width:100%;heigth:100%;font-size:13px;background:whitesmoke;border-radius:13px;font-family:BodyFont;"  
                       placeholder="Search Youtube" class="py-2 px-3" type="search" > 
            </div>
              
              <div class=" py-0 ml-1 text-right">
                  <v-btn icon @click.stop="goBack">
                      <v-icon>las la-search</v-icon>
                    </v-btn>
              </div>
          
        </div>



         <!-- edit space form -->
      <div style="background:transparent;font-family:BodyFont; " class="col-12 py-1 my-0" >
       
    
        </div>

       <!-- ends -->

       
        
     

    </div>
   </div>

  </div>
</template>
<script>
export default {
     data(){
        return{
         that: this
        }
    },
    mounted(){
    this.$root.componentIsLoading = false;
    },
    methods:{
        goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

             this.$root.chatComponent.innerSideBarContent = '';
            
            this.$root.chatComponent.innerSideBarContent = '';
       
        },
      
    }
}
</script>
<style scoped>

</style>