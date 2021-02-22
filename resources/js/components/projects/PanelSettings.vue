<template>
<v-app style="background:transparent; font-family:BodyFont;padding-top:20px;">
 
   <div class="col-12 mt-5 mt-md-1 ml-lg-4">
    <h6>Panel Settings</h6>
   </div>

    <div class="col-md-8 col-lg-4 offset-lg-4 offset-md-2 text-center py-1">
    	
    		<v-form class="row my-2 py-2 px-2">
    			<div class="col-12 py-2 my-0 px-2">
    				<v-text-field style="font-size:13px;"
                     v-model="title" :rules="Rule"  prepend-inner-icon="las la-laptop-code" dense placeholder="title..."  outlined color="#3C87CD" label="Project Title"></v-text-field>
    			</div>

                <div class="col-12 py-2 my-0 px-2">

                    <v-select
                 style="font-size:13px;"
              dense
              label="Contributors"
            counter="20"
            v-model="contributors"
            placeholder="select..."
              :rules="requiredRule"
              outlined
            persistent-hint
            
             hint="Add people you are following"
            chips
            :loading="loadingConnection"
            :items="Connections"
           item-text="username"
          item-value="username"
             multiple
             @focus="showConnection = true"
             color="#3C87CD">



              <template v-slot:selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :input-value="data.selected"
              color="#3C87CD"
              dense
              class="my-1"
              
              style="font-size:12px; font-family:BodyFont;"
              outlined
              :disabled="data.disabled"
          
            >
             
              {{ data.item.username }}
            </v-chip>

              </template>
             </v-select>
             
    				
    			</div>
    			
    			<div class="col-12 py-1 my-0 px-2 text-center">
    				<v-btn  type="submit" small color="#3C87CD" :loading="loading" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;" @click.prevent="saveSettings">save</v-btn>
             </div>
    		</v-form>
    	
    </div>

     <!-- connections -->

        <div  v-if="showConnection" @click="showConnection = false" class="col-12 d-lg-none py-0 px-0 d-flex" style="align-items:center; left:0; justify-content:center; background: rgba(27, 27, 30, 0.1); position:fixed; height:100%; top:0%;z-index:999999999999;" >
                                  
                                 <v-card
                                  style="width:260px;max-height:400px;overflow-x:auto;" class="py-2" >

                                   <div class="col-12 px-0 py-1 d-flex flex-column">

                                           <v-card tile flat class="px-2 py-2 d-flex flex-row" @click.stop="toggleData(connected.username)" style="align-items:center;" v-for="(connected,index) in Connections" 
                                            :key="index">
                                               
                                               <template v-if="checkIfSelected(connected.username)">

                                                     <v-icon class="mr-1" color="#3C87CD">las la-check-square</v-icon>

                                               </template>

                                               <template v-else>
                                                    <v-icon class="mr-1">las la-minus-square</v-icon>
                                               </template>
                                           

                                            <span style="font-family:BodyFont;font-size:13px;color:grey;">{{connected.username}}</span>

                                         </v-card>
                                         

                                      </div>

                                 </v-card>
                            </div>


     <!-- ends -->

</v-app>
</template>



<script>
export default {
    data(){
        return{
             title:'',
             contributors:[],
             app:'',
             Connections:[],
             loadingConnection:'',
              Rule:[
              v => !!v || 'Title is required',
              v => v.length < 80 || 'Title must be less than 80 characters',
              v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character'
             ],
              requiredRule: [
              v => !!v || 'This feild is required',
            ],
             loading:false,
             showConnection:false
            
        }
    },
    mounted:function(){
          if(!this.$root.isLogged){

            this.$root.checkIfUserIsLoggedIn();
         return;
        }
         this.fetchConnected();
         this.title = this.$root.projectData.project.title;
    },
    methods:{
        toggleData:function(username){

            let selectedArray = this.contributors.filter((contributor)=>{

                return contributor == username;

            });

            if(selectedArray.length > 0){

                 let remainingContributor =  this.contributors.filter((contributor)=>{
                     return  contributor != username;
                 })

                 this.contributors = remainingContributor;

                 return;

            }else{
               
                 this.contributors.push(username);
            }

              

        },
        checkIfSelected:function(username){

            let selectedArray = this.contributors.filter((contributor)=>{

                return contributor == username;

            });

            if(selectedArray.length > 0){

                 return true;

            }else{
                return false;
            }

        },
        saveSettings: function(){
           this.loading = true;
               axios.post(  '/save-panel-settings',{
                 'contributors': this.contributors,
                 'project_slug': this.$route.params.project_slug,
                 'title': this.title
               })
      .then(response => {
      
      if (response.status == 200) {
        
        this.$root.projectPanelComponent.showAlert('Saved','Your changes have been saved','success');

        
         this.loading = false;
        this.$router.push({path: '/board/projects/panel/' + this.$root.projectData.project.project_slug })
     }
       
     
     })
     .catch(error => {
          this.$root.projectPanelComponent.showAlert('Oops!','Something went wrong','error');
       this.loading = false;
      
     }) 

         },
         fetchConnected: function(){

      this.loadingConnection = true;
          
           axios.get( '/fetch-connected' )
      .then(response => {
      
      if (response.status == 200) {
        
       this.Connections = response.data.data;

        // get existing contributors

        let contributors = []
        
        this.$root.ProjectMembers.forEach((member)=>{

             this.Connections.forEach((connected)=>{

                  if(connected.user_temp_id == member.user_id){

                       contributors.push(connected.username)

                  }

             })

        });

         this.contributors = contributors;

       
        this.loadingConnection = false;
     }
       
     
     })
     .catch(error => {
       this.loadingConnection = false;
     }) 

        },
    }
}
</script>