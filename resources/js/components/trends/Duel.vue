<template>
     <v-app style="background:transparent; font-family:BodyText;">
        <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0 scrollerStyle" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

         <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" style="background:#a5d2d9;">
          <trend-top></trend-top> 
      </div>
      <div class="col-12 my-1 mb-0 px-1 text-center py-0">
           <v-text-field
              style="font-size:13px;"
             placeholder="Find duels" 
             dense
              @keydown="queryChannel"
             v-model="query"
             :loading="loading"
             color="#4495a2"
             ></v-text-field>
       </div>
      </div>

      
        
        <div class="col-12 py-0 my-0">
          
          <div class="row my-0 py-0" v-if="allDuels != null">

             <div class="col-12 px-4 py-2" v-for="(duel,index) in allDuels" :key="index">
               <v-card elevation-22 class="py-1 px-1"  @click="showDuel(duel)">
                <div class="row px-1">
                   <div class="py-0 col-12 text-left d-md-block d-none"  >
                        <div style="background-color:; border-radius:4px; border:1px solid transparent;">
                           <span style="font-size:13px;color:#26535a;">{{shortenContent(duel.title,40)}}</span>
                        </div>
                   </div>
                    <div class="py-0 col-12 text-left d-block d-md-none"  >
                        <div style="background-color:; border-radius:4px; border:1px solid transparent;">
                           <span style="font-size:13px;color:#26535a;">{{shortenContent(duel.title,35)}}</span>
                        </div>
                        
                   </div>

                   <div class="py-1 col-6">
                        <span style="font-size:12px;color:#595959;">Participants: {{duel.current_participant}}</span>
                   </div>
                   
                    <div class="py-1 col-6 text-right">
                        <span style="font-size:12px;text-transform:capitalize;" class="mybadgenew">{{duel.duel_id}}</span>
                   </div>

                </div>
               </v-card>
            </div>
        

         <div v-if="allDuels.length == 0" class="text-center col-12">
           <span style="color:gray; font-size:12px;">No Duel found</span>
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
          allDuels: null,
          query:'',
         loading:false
        }
    },
     components: {
   
  },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       this.fetchDuels();
       
       
    },
    methods:{
      queryChannel:function(){
     
       setTimeout(()=>{
         
         this.fetchDuels();
       },500);
    },
      showDuel:function(duel){
         this.$root.pageloader = true;
        window.location = '/duels#/duel/' + duel.duel_id + '/board' + '/user';
      },
     
       goBack() {

          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
       fetchDuels: function(){
              this.loading = true;
           axios.get('/fetch-trend-duels/'  + this.query )
      .then(response => {
      
      if (response.status == 200) {
        
       this.allDuels = response.data;

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
       
    
      
  },
}
</script>
<style>
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