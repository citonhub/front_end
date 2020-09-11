<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0 scrollerStyle" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-1 my-0 fixed-top" style="position:sticky; background:#3E8893;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-12 py-0 my-0 text-center px-3"  style="" >
          <span style="font-size:13px; font-weight:bolder;">
             

              <b style="color:#ffffff; font-family:HeaderText; font-weight:bolder;"> CitonHub is more engaging when you join atleast 5 channels 😃</b> 
          </span>
         </div>
      </div>
     </div>


      <div class="col-12 py-0 my-0">
          
          <div class="row my-0 py-0 px-2" v-if="allChannels != null">
          
           <v-card tile flat class="col-12 py-1 px-0 my-0"  color="#ffffff" style="border-bottom:1px solid #5fb0b9;" v-for="(space,index) in allChannels"
                      :key="index">
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                          <v-img  :background-color="space.background_color" :src="space.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ space.image_name +'.' + space.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-6" style="align-items:center;">
                       <div>
                      <span class="titleText d-block">{{space.name}}</span>
                       <span class=" d-block" style="font-size:11px;" v-html="space.description"></span>
                       
                       </div>
                        
                    </div>

                    <div class="py-0 my-0 text-center col-3" style="align-items:center;">

                     <v-switch  v-model="space.selected" @change="checkSelectedChannels" color="#3E8893"></v-switch>
                        
                    </div>

                    
                   
                </div>
             </v-card>

             <div v-if="allChannels.length == 0" class="text-center col-12">
           <span style="color:gray; font-size:12px;">No Channel found</span>
                </div>  
             <div class="col-12 py-5 my-5">

                

             </div>

          </div>

           <div class="row my-0 py-0 px-0" v-else>

               <div class="col-12 py-0 my-0 px-1">
   
           <div class="row py-0 my-0 px-1">
            
          <div class="col-12 py-1 my-0">
           <v-skeleton-loader
          class=" "
           
          type="list-item-avatar"
          ></v-skeleton-loader>
          </div>

          

         </div>


            </div>
  
          <div class="col-12 py-0 my-0 px-1">
   
           <div class="row py-0 my-0 px-1">
            
          <div class="col-12 py-1 my-0">
           <v-skeleton-loader
          class=" "
           
          type="list-item-avatar"
          ></v-skeleton-loader>
          </div>

          

         </div>


            </div>
  
       <div class="col-12 py-0 my-0 px-1">
   
           <div class="row py-0 my-0 px-1">
            
          <div class="col-12 py-1 my-0">
           <v-skeleton-loader
          class=" "
           
          type="list-item-avatar"
          ></v-skeleton-loader>
          </div>

          

         </div>


            </div>
  

           </div>
           
        </div>


     <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0 fixed-bottom" style="background:#ffffff;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-12 py-0 my-0 text-center px-3"  style="" >
          <span style="font-size:13px; font-weight:bolder;">
             

             <v-btn block color="#3E8893"  :loading="loadingContinue" :disabled="continueDisabled" @click="continueToChatList" style="text-transform:capitalize;color:#ffffff; font-weight:bolder;">continue</v-btn>
          </span> 
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
           allChannels:null,
           loadingContinue:false,
           continueDisabled: false
        }
    },
     components: {
      
  },
    mounted(){
      this.$root.showTabs=false;
       this.$root.showHeader = false;
       this.fetchSuggestions();
      
    },
    methods:{
       goBack() {
         
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
         sortArray: function(arrayValue){
      arrayValue.sort(function(a, b){ 
      
        return new Date(b.members) - new Date(a.members); 
    }); 

      let arrayCount = new Array(5);

       for (let index = 0; index < arrayCount.length; index++) {
         
          this.allChannels[index].selected = true;
         
         
       }

    },
    checkSelectedChannels:function(){
     
       let selectedChannels = this.allChannels.filter((channel)=>{
           return channel.selected == true;
       });

        if(selectedChannels.length >= 5){
         
         this.continueDisabled = false
        }else{
           this.continueDisabled = true
        }
    },
    fetchSuggestions:function(){
          this.loading = true;
           axios.get('/fetch-suggested-channels/' )
      .then(response => {
      
      if (response.status == 200) {

        
        
       this.allChannels = response.data;

       this.sortArray(this.allChannels);

      
       
        
      this.loading = false;
       
      }
       
     
     })
     .catch(error => {
    
     }) 
    },

    continueToChatList:function(){

       let selectedChannels = this.allChannels.filter((channel)=>{
           return channel.selected == true;
       });

        this.loadingContinue = true;
           axios.post('/save-selected-channels',{
              selectedChannels: selectedChannels
           })
      .then(response => {
      
      if (response.status == 200) {

        
      this.loadingContinue = false;

       this.$router.push({ path: '/space/chat-list' });
       
      }
       
     
     })
     .catch(error => {
    
     }) 
      


    }
         
  
  },
}
</script>
<style>
.editor-style> * {
    border-bottom:1px solid #4495a2;
    height: auto;
    line-height: 4px;
    padding: 5px 2px;
    font-size: 12px;
    color: #262626;
}

.is-active{
    border-color: #dbedf0;
    border-style: solid;
    border-width: 1px;
}
 /* *:focus {
    outline: none;
}  */
</style>