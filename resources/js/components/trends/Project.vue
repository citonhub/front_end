<template>
     <v-app style="background:transparent; font-family:BodyText;">
        <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white; ">
       <div class="row py-1 my-0 px-1" style="background:#a5d2d9;">
          <trend-top></trend-top> 
      </div>
      <div class="col-12 my-1 px-1 text-center py-0">
           <v-text-field
              style="font-size:13px;"
             placeholder="Find projects" 
             dense
             v-model="query"
              @keydown="queryChannel"
             :loading="loading"
             color="#4495a2"
             ></v-text-field>
       </div>
      </div>

      
        
        <div class="col-12 py-0 my-0">
          
          <div class="row my-0 py-0" v-if="allProject != null">

            <div class="col-12 py-1 my-1 text-right px-3" v-for="(project,index) in allProject" :key="index" >
              <v-card  class="px-2 py-1"  @click="showProject(project)">
            <div class="py-0 my-0 row px-2">
               <div class="col-2 py-1 d-flex" style="align-items:center;justify-content:center;">
                    <span class="documentIcon"><v-icon class="px-1 py-1" color="#3E8893" >mdi-plus-network-outline </v-icon></span>
                </div>
                <div class="col-10 py-1 text-left px-2">
                  
                     <div class="row py-0 my-0">
                         <div class="col-6 py-0 text-left ">
                     <span class="documentTitle" style="color:#2d646c;">{{shortenContent(project.title,35)}}</span>
                    </div>
                <div class="col-6 py-0 text-right">
                       <span class="mybadgenew">@{{project.owner}}</span>
                </div>

                   <div class="col-6 py-1 text-left ">
                    <v-icon color="#3E8893">mdi-star  mdi-18px</v-icon>
                     <span style="font-size:9px; color:#a6a6a6;">{{project.total_stars}}</span>        
                </div>
                <div class="col-6 py-1 text-right">
                     <v-icon color="#3E8893">mdi-comment-text-outline mdi-18px</v-icon>
                     <span style="font-size:9px; color:#a6a6a6;">{{project.comments}}</span>   
                </div>
                     </div>
                </div>
               
              
            </div>
           </v-card>
            </div>

             <div v-if="allProject.length == 0" class="text-center col-12">
           <span style="color:gray; font-size:12px;">No Poject found</span>
                </div>  
             <div class="col-12 py-5 my-5">

             </div>

          </div>

          <div class="row my-0 py-0" v-else>

             <div class="col-12 py-1 my-1">
       <v-skeleton-loader
      class="mx-auto "
        height="60px"
      type="image"
    ></v-skeleton-loader>
     </div>
      <div class="col-12 py-1 my-1">
       <v-skeleton-loader
      class="mx-auto "
        height="60px"
      type="image"
    ></v-skeleton-loader>
     </div>
      <div class="col-12 py-1 my-1">
       <v-skeleton-loader
      class="mx-auto "
        height="60px"
      type="image"
    ></v-skeleton-loader>
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
         
         allProject: null,
           query:'',
         loading:false
        }
    },
     components: {
   
  },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       this.fetchProject();
       
    },
    methods:{
      queryChannel:function(){
     
       setTimeout(()=>{
         
         this.fetchProject();
       },500);
    },
       sortArray: function(arrayValue){
      arrayValue.sort(function(a, b){ 
      
        return new Date(b.total_stars) - new Date(a.total_stars); 
    }); 

    },
     showProject:function(project){
         this.$root.pageloader = true;
        window.location = '/#/' + project.project_slug + '/page-loader/user';
      },
      fetchProject: function(){
           this.loading = true;
      axios.get('/fetch-trend-projects/'  + this.query )
      .then(response => {
      
      if (response.status == 200) {
        
       this.allProject = response.data;

       this.sortArray(this.allProject);

         this.loading = false;
       
      }
       
     
     })
     .catch(error => {
    
     }) 

        },
        shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
       goBack() {

          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
       
    
      
  },
}
</script>
<style>
.documentIcon{
    background: #dbedf0;
    border:1px solid #dbedf0;
    border-radius:50%;
}
.documentTitle{
  font-size: 12px;
  color: #2d646c;
}

.documentSize{
  font-size: 10px;
  color: #a6a6a6;
}
.mybadgenew{
     font-size:10px;
     color:#2d646c;
     font-family:HeaderText; 
     border:1px solid #2d646c; 
     border-radius:10px; 
     padding: 2px 4px;
     background:#ffffff;
     font-weight: bolder;
 } 
</style>