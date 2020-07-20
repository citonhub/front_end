<template>
     <div  style="background:transparent; font-family:BodyText;">

       <div class=" col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:fixed;  background:rgba(38, 82, 89,0.6); height:100%; overflow-y:auto; overflow-x:hidden; z-index:200;" 
         @click="closeShelve">
         <div class="row my-0 py-0 px-2">


       

       <div class="py-1 my-0" style=" background-color:white;position:absolute;bottom:0%; height:50%; width:100%; left:0; overflow-y:auto; overflow-x:hidden; ">
           
          
           <div class="col-12 py-1" >
        <div class="row" >
           
         
                <div class="col-12 py-1 text-center mb-1" style=" border-bottom:1px solid #cccccc;">
                    <div class="row py-0 my-0">
                          <div  class="py-0 my-0 d-flex col-3 px-1" style="align-items:center; ">
                            <v-btn icon color="#3E8893" @click.stop="addShelve"><v-icon>mdi-plus-circle-outline mdi-18px</v-icon></v-btn>
                          </div>
                          <div  class="py-0 my-0 d-flex col-6 px-0" style="align-items:center; justify-content:center;">
                               <span style="font-size:13px; color:#1e4248;">Pull post to your library</span>
                          </div>
                          <div  class="py-0 my-0 col-3 text-right px-1" >
                               <v-btn icon color="#3E8893" @click.stop="showLibrary"><v-icon>mdi-inbox-full-outline</v-icon></v-btn>
                          </div>
                          
                    </div>
                  
                </div>
                <div class="col-12 px-2 py-0" v-if="this.$root.userShelves != null">
                   <div v-if="this.$root.userShelves.length != 0">
                         <v-card tile flat class="col-12 py-2 px-0 my-1" @click.stop="addPostToShelve(shelve)" color="#edf6f7" style="border:1px solid #5fb0b9;" v-for="(shelve,index) in this.$root.userShelves" :key="index">
                <div class="row py-0 my-0 px-0">
                
                     <div class="py-0 my-0 d-flex col-12" style="align-items:center; justify-content:center;">
                         <span class="titleText">{{shelve.name}}</span>
                    </div>
                    
                </div>
             </v-card>
                   </div>
                      
                   <div v-else class="text-center col-12 py-1 my-0">
               <span style="color:gray; font-size:12px;" class="d-block">No Shelve found</span>

                <v-btn small @click="addShelve" rounded color="#3E8893" style="color:white; font-size:12px; text-transform:capitalize;" class="my-2">Add a shelve</v-btn>
              </div>
              

                </div>

                         <div class="col-12 py-0 my-0"  v-else>

         <div class="row py-0 my-0 px-1">
            
     <div class="col-12 py-2 my-1 ">
       <v-skeleton-loader
      class="mx-auto "
        height="20px"
      type="image"
    ></v-skeleton-loader>
     </div>

       <div class="col-12 py-2 my-1 ">
       <v-skeleton-loader
      class="mx-auto "
        height="20px"
      type="image"
    ></v-skeleton-loader>
     </div>

       <div class="col-12 py-2 my-1 ">
       <v-skeleton-loader
      class="mx-auto "
        height="20px"
      type="image"
    ></v-skeleton-loader>
     </div>


       
       

         
      </div>
                
                 
        

         
            
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
    data(){
        return{
          
       
        }
    },
    components: {
   
  },
   mounted(){
     
    },
    methods:{
      working:function(){

      },
      closeShelve:function(){
          this.$root.showShelves = false;
          this.$root.scrollHome = 'auto';
      },
      addShelve: function(){
           this.$router.push({ path: '/add-shelve' });
      },
      showLibrary: function(){
        this.$router.push({ path: '/library' });
      },
      addPostToShelve: function(shelve){
           this.$root.showShelves = false;
            this.$root.scrollHome = 'auto';
         axios.post('/add-post-to-selve',{
                shelve_id: shelve.shelve_id,
                post_id: this.$root.pullingPostId
                  })
          .then(response => {
             
            
            
             if (response.status == 200) {
             
               this.$root.showAlert(5000,'Post added to ' + shelve.name);

               
             this.updatePulls(this.$root.postArrayType);
            
            }
              
            
           
            
          })
          .catch(error => {
              this.$root.showAlert(5000,'Failed- ' + error);
              
          })
      },
      updatePulls: function(postArray){

         postArray.map((post)=> {
            if(post.PostId == this.$root.pullingPostId){
                post.post_pulled = true;
              post.pulls = post.pulls + 1;
            }
            });
 
      }
    },
   
}
</script>
<style>
.titleText{
    font-size:13px; 
    font-family:HeaderText; 
    color:#173236;
}
</style>