<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-4 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="showHome"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-4 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
             <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Library</span>
         </div>
         <div class="col-4 py-0 my-0 px-1 text-right"  style="border-bottom:2px solid #4495a2; " >
             <v-btn icon color="#4495a2"  @click="addShelve"><v-icon>mdi-plus-circle-outline</v-icon></v-btn>
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0 " >
            <div class="row py-0 my-0">
                 <div class="col-lg-3 col-4 text-center py-2 my-0 " v-for="(shelve, index) in userShelves" :key="index">
                 <v-card height="120" class="d-flex" style="align-items:center; justify-content:center; border:2px solid #5dafbb;" color="#dbedf0" @click="showShelf(shelve)">
                      <span class="shelfText px-1">
                          {{shelve.name}}
                      </span>
                 </v-card>
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
          userShelves:this.$root.userShelves
        }
    },
    components: {
   
  },
   mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = true;
        this.$root.checkIfUserIsLoggedIn();
         this.loadShelves();
    },
    methods:{
    loadShelves: function(){
       if(this.$root.userShelves.length > 0){
           return;
       }
          axios.get('/fetch-user-shelves')
      .then(response => {
      
      if (response.status == 200) {
        
        this.userShelves = response.data;
        this.$root.userShelves = response.data;
        
       
        
        
     }
       
     
     })
     .catch(error => {
    
     }) 
    },
  showHome: function(){
      this.$router.push({ path: '/' });
   },
   showShelf: function(shelve){
      this.$root.selectedshelveId = shelve.shelve_id;
      this.$root.selectedshelvename = shelve.name;
    this.$router.push({ path: '/shelve' });
   },
   addShelve: function(){
       this.$router.push({ path: '/add-shelve' });
   }
   
    },
   
}
</script>
<style>
.shelfText{
    font-size: 12px;
    color: #265259;
}
</style>