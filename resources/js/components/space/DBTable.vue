<template>
    <v-app style="font-family:BodyText;background:transparent; ">

        <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


         <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-4 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-4 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">{{this.$root.SelectedTable.name}}.tb</span>
         </div>
         <div class="col-4 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0" style=" height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">
             <div class="col-12 py-1 my-0 mt-1 " >
                      <div class="row my-0 px-0">
                        <div class="col-2 py-0 my-0 px-0" style="border-bottom:1px solid #c4c4c4;" >
                          
                              
                         </div>
                         <div class="col-8 py-0 my-0 px-0" style="border-bottom:1px solid #c4c4c4;" >
                          
                              <v-text-field
                   v-model="search"
                    prepend-icon="mdi-magnify"
                      color="#3E8893"
                    placeholder="search"
                      style="font-size:12px;"
                    dense
                   hide-details
                  ></v-text-field>
                         </div>
                         <div class="col-2 py-0 my-0 px-0 text-right" style="border-bottom:1px solid #c4c4c4;" >
                          
                              
                         </div> 
                        
                      </div> 
                      
        </div>
    <v-data-table
    style="background:#edf6f7;" 
      :headers="dbFields"
      :items="dbContent"
     show-expand
      :single-expand="singleExpand"
    :expanded.sync="expanded"
      :search="search"
    >

    
     

      
       <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length" class="row py-1 my-0">
        <div class="col-6 py-0 my-0 text-left">
         <v-btn icon><v-icon color="#3E8893" :id="item.id">mdi-playlist-edit </v-icon></v-btn>
        </div>
        <div class="col-6 py-0 my-0 text-right">
            <v-btn icon><v-icon color="#3E8893">mdi-playlist-remove </v-icon></v-btn>
        </div>
      </td>
    </template>
        
        
        
    </v-data-table>
         </div>

         <div class="col-12 py-5 my-5" style="padding-top:100px !important;">

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
     search: '',
      expanded: [],
        singleExpand: false,
        dbFields:[],
        dbContent: []
   }
 },
    mounted(){
       this.$root.showTabs=true;
        this.$root.showHeader = false;
        this.fetchTableEntries();
        this.fetchProject();
      },
 methods:{
  
    goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
          checkIfOwner:function(){

        if(this.$root.projectSpace.type == 'Personal'){
         
         var member = this.$root.ProjectMembers.filter((member)=>{
             return member.user_id == this.$root.user_temp_id && member.project_slug == this.$route.params.projectSlug;
         });


          if(member.length == 0){

             if(this.$root.projectData.user_id == this.$root.user_temp_id ){

                  return true;

             }else{

                 return false;
             }
            
            
         }else{
           return true;
         }
          

        }else{
         
         var member = this.$root.ProjectMembers.filter((member)=>{
             return member.user_id == this.$root.user_temp_id;
         });

           if(member.length == 0){
            
            return false;
         }else{
           return true;
         }

        }
         
        
      },
      
      fetchTableEntries: function(){
         axios.get('/fetch-table-entries/' + this.$root.SelectedTable.id)
      .then(response => {
      
      if (response.status == 200) {
        
        
        this.dbContent = response.data[0];
        this.dbFields = response.data[1];
        
        

     }
       
     
     })
     .catch(error => {
    
     }) 
      },
     fetchProject: function(){
        
         axios.get('/fetch-project-' + this.$route.params.projectSlug)
      .then(response => {
      
      if (response.status == 200) {
        
        
       this.$root.projectData = response.data[0];
      
         
        

     }
       
     
     })
     .catch(error => {
    
     }) 

        },
   
 }   
}
</script>
<style>
 table tr{
        color: #4d4d4d;
        
    }
table tr:hover{
   background: #edf6f7 !important;
   color: #4d4d4d !important;
   cursor: pointer;
  
}

table tr:nth-child(even){
   background: #edf6f7;
   color: #4d4d4d;
   
}
</style>