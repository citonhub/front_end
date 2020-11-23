<template>
     <div class="py-0 px-1 my-0" >
       <v-card>

          <div class="col-12 py-1 my-0 " >
                      <div class="row my-0 px-2">
                         <div class="col-4 py-0" style="border-bottom:1px solid #c4c4c4;">
                           <span style="font-size:12px; font-weight:bolder; text-transform:uppercase;">Bot contents</span>
                         </div>

                         <div class="col-8 py-0 my-0" style="border-bottom:1px solid #c4c4c4;" >
                              <v-text-field
                   v-model="search"
                   color="#3E8893"
                    prepend-icon="mdi-magnify"
                    placeholder="search"
                      style="font-size:12px; color:#c5c5c5;"
                    dense
                   hide-details
                  ></v-text-field>
                         </div>        

                         
                      </div>  
        </div>
        <div class="px-2 py-2">

         

         <v-data-table
    style="background:#dbedf0;" 
      :headers="headers"
     
      :items="this.$root.fullData"
     :items-per-page="10"
     dense

      :search="search"
    >
      <template v-slot:item.patterns="{ item }">
          
        
          <v-chip
      class="ma-1"
      style="color:#c9e4e8;"
      @click:close="deletePattern(pattern)"
      close
      v-for="(pattern,index) in item.patterns" :key="index"
      color="#3E8893"
      
    >
      
     {{pattern.pattern_content}}
    </v-chip>

     <v-btn icon color="#3E8893" @click.stop="addContent(item,'pattern')" small>  <v-icon>mdi-plus mdi-18px</v-icon></v-btn>

          </template> 


          <template v-slot:item.responses="{ item }">
      
             <v-chip
      class="ma-1"
      @click="fetchResponseContent(response)"
      outlined
      close
       @click:close="deleteResponse(response)"
      v-for="(response,index) in item.responses" :key="index"
      color="#3E8893"
      
    >
      
     {{response.response_slug}}
    </v-chip>

       <v-btn icon color="#3E8893" @click.stop="addContent(item,'response')" small>  <v-icon>mdi-plus mdi-18px</v-icon></v-btn>

          </template> 
    </v-data-table>
       

        </div>
       </v-card>
        



 
 

       <div class="col-12 py-2  my-3">

  </div>
    

    </div>

</template>


<script>

export default {
    name:'Home',

    data () {
      return {
        search: '',
        filterValue:'',
        startdate:0,
        Data:[],
        enddate:0,
        headersUntracked:[
         {
            text: 'Id',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Patterns', value: 'Patterns',  align: 'center' },
        
        ],
        headers: [
          
          { text: 'Topics', value: 'tag_name' ,  align: 'center',width: '230px' },
          { text: 'Contents', value: 'responses',  align: 'start'},
          { text: 'Keywords', value: 'patterns',  align: 'start' },
          
        ],
        intentsUntracked:[
         
        ],
         intents: [
          
        ],
      }
    },
    mounted(){
      this.fetchFullData();
    },
    methods:{
       fetchResponseContent:function(responseData){

          this.$root.contentGenratorComponent.newContentLoading = true;

          let scroller = document.querySelector("#mainScroller");
                   scroller.scrollTop = 0;


              let tagData = this.$root.fullData.filter((data)=>{
                return  data.tag_unique_id == responseData.tag_unique_id;
              })
                    this.$root.contentGenratorComponent.editMode = true;
                   this.$root.contentGenratorComponent.selectedTagData = tagData[0];
                   this.$root.contentGenratorComponent.tagactionType = 'response';

                   this.$root.contentGenratorComponent.selectedResponse = responseData.response_slug;
          
          this.$root.contentGenratorComponent.tagName = tagData[0].tag_name;
          axios.get('/get-intent-response-' + responseData.response_slug)
          .then(response => {
             
            
            

            if(response.status == 200){

             
               this.$root.contentGenratorComponent.responseContents = response.data.messages;

                 this.$root.contentGenratorComponent.newContentLoading = false;

                  this.$root.contentGenratorComponent.contentData = responseData;
              this.$root.contentGenratorComponent.showtypeList =true;
             
            }
              
            
           
            
          })
          .catch(error => {
              console.log(error)
               this.$root.contentGenratorComponent.newContentLoading = false;

            
          })

        },
     addContent(data,type){
    this.$root.contentGenratorComponent.addTagData(data,type)

    if(type == 'response'){
                    
                   this.addResponse(data)

                 
                  }
     },
     addResponse:function(data){
       
       this.$root.contentGenratorComponent.newContentLoading = true;
          
       axios.post('/create-intent-response',{
                tag_unique_id: data.tag_unique_id,
                title: "New content type",
                 bot_id: this.$route.params.botId
                  })
          .then(response => {
             
 
            if(response.status == 201){

              this.$root.contentGenratorComponent.newContentLoading =false;
              
                this.$root.fullData.map((datanew)=>{
                  if(data.tag_unique_id == datanew.tag_unique_id){

                   
                   data.responses.unshift(response.data)
              

                  }
                })

                this.$root.contentGenratorComponent.contentData = response.data;
                 this.$root.contentGenratorComponent.showtypeList =true;
             

             
               
             
            }
              
            
           
            
          })
          .catch(error => {
              console.log(error)
             this.$root.contentGenratorComponent.newContentLoading  = false;
          })
     

    },
    deletePattern:function(pattern){

        axios.post('/delete-intent-pattern-'+pattern.id)
           .then(response=>{

               if(response.status == 200){
                
            let thisTag = this.$root.fullData.filter((data)=>{
                  return data.tag_unique_id == pattern.tag_unique_id
                })

            let remainingpatterns =  thisTag[0].patterns.filter((patterneach)=>{
                return patterneach.id != pattern.id;
            })
               
               thisTag[0].patterns = remainingpatterns;

                }
            
           });
    },
    deleteResponse:function(responseData){

        axios.post('/delete-intent-response/'+responseData.response_slug)
           .then(response=>{

               if(response.status == 200){
                
            let thisTag = this.$root.fullData.filter((data)=>{
                  return data.tag_unique_id == responseData.tag_unique_id
                })

            let remainingresponse =  thisTag[0].responses.filter((responseeach)=>{
                return responseeach.response_slug != responseData.response_slug;
            })
               
               thisTag[0].responses = remainingresponse;

                }
            
           });
    },
    fetchFullData:function(){
     
         axios.get('/get-full-intent-data/'+  this.$route.params.botId)
          .then(response => {
             
            
            

            if(response.status == 200){
           
               
            
            
               this.$root.fullData = response.data[0];

               this.$root.selectedBot = response.data[1];

               
             
            }
              
            
           
            
          })
          .catch(error => {
              console.log(error)
            
          })
        

   


      },
    },
    
  }
</script>


<style scoped>
.white-text-btn{
        color:white !important;
       
    }

    table tr{
        color: #4d4d4d;
        
    }
table tr:hover{
   background: #cde4fe !important;
   color: #4d4d4d !important;
   cursor: pointer;
  
}

table tr:nth-child(even){
   background: #cde4fe;
   color: #4d4d4d;
   
}
</style>