<template> 
<div>


     <div class="col-12 px-1 py-1  fixed-top d-flex flex-row" style="position:sticky; align-items:center; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">

              <div >
                  <v-btn icon @click="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
              </div>

           
          
         

            <div class=" text-center" style=" white-space: nowrap; width:100%;  overflow:hidden; text-overflow:ellipsis; "  >
             <span style="font-size:14px; font-family:MediumFont;">Version Control</span>
          </div>

              
              <div class="  ml-auto mr-2">
                  <v-btn icon >
                      <v-icon>las la-trash-alt</v-icon>
                    </v-btn>
              </div>
          
 
     </div>



  <v-card class="col-12 scroller" style="height:93%; position:absolute; top:7%;overflow-y:scroll;" > 

      
      <template v-if="loadingContent">

        <div style="position:absolute; height:100%; width:100%; left:0px; justify-content:center;align-items:center;" class="d-flex flex-row">
                 
                    <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>
        </div>

      </template>




      <template v-else>
<div>

 <template v-if="newGitRepo" >

     <div class="mb-1 mt-5 col-12 ml-3">
         <p >Create a github repository for your project
           <br>
            to access version control features.</p>

          <div class=" mb-4">
                          <v-btn @click=" newGitRepo=false" small color="#3C87CD" style="color:white;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Create Repo</v-btn>
                     </div>
     </div>


      </template>


       <template v-else>
<div>

       <div class="col-12 px-2 px-md-2 mt-1 d-flex justify-content-between">

            
               <h6 style="text-decoration:underline;">Adenikym/{{this.$root.projectData.project.title}}</h6>

               <v-icon @click="listBranch=true" class="ml-4" >las la-code-branch</v-icon>
            
           </div>


           <div class=" ml-2  " >
               <span> up to date with main</span>

           </div>


           <div>
<div class="col-12 py-1 my-0 px-2 d-flex mt-3 form-group"  >
                
                <div  class="col-9 d-flex" style="border:1px solid grey;height:50px;">

                    <span class=" py-0 mt-1">Current Branch:</span>
              <input
                style="font-size:13px;height:30px;border:none;"
             
                  v-model="currentBranch"
           
             class=" col-3 form-control"
           
             />

             </div>
 <v-fab-transition>
                <v-btn
                  v-show="!hidden"
                  color="#3C87CD"
                  @click="branch=true"
                  fab
                  dark
                  small
                  absolute
                right
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-fab-transition>

             </div>


             <div class="col-12 px-2 px-md-2 mt-1">

                 <v-card class="px-2 py-1" style="background: rgba(125, 179, 229, 0.4); cursor:pointer;color:white;">You have not made any changes</v-card>


                 <div>

                 </div>

             </div>


             <!-- commit history -->

             <div class="col-12 px-2 px-md-2 py-1">
                  <h6 >Commit History</h6>

                 <div class="action px-2 py-2 mt-3" style="border:2px solid rgba(125, 179, 229, 0.4);border-radius:5px;font-family:BodyFont;" v-for="(commit,index) in commits" :key="index">

<span class="mt-4" style="font-size:20px;">{{commit}}</span>

                   <div class="mt-2" style="font-family:MediumFont;" >
                       <span>Adenikym</span> . <span>20-8-21</span>
                   </div>

                   <span style="color:#3C87CD;" >revert changes</span>
                 </div>

             </div>

           </div>
</div>

      </template>

      <!--branch name popup-->

      <v-card v-if="branch" class="col-8 d-flex flex-column align-items-center py-1 px-2" style="position:absolute;background:white;top:25%;left:15%;">
          <v-text-field
     placeholder="Branch Name"
    v-model="newBranch"
      hide-details="auto"
    ></v-text-field>

    <div class=" text-center col-12 py-1 mt-4 my-0 px-2">
                 <v-btn @click="addBranch"  medium rounded  color="#3C87CD" style="font-size:12px; font-family:MediumFont;font-weight:bolder; color:white;">
            Add Branch
               </v-btn>
             </div>
      </v-card>


      <!--branch list-->

<v-card v-if="listBranch" class="col-4 d-flex flex-column  py-1 px-1"  style="position:absolute;background:white;top:5%;right:5%">
<div class="d-flex mt-2" @click="changeBranch(branch)" v-for="(branch,index) in branches" :key="index" style="border-bottom:1px solid rgba(125, 179, 229, 0.4); border-radius:0; ">

               <v-icon color="#3c87cd" class="ml-4" >las la-code-branch</v-icon>

<span class="ml-2">{{branch}}</span>
</div>

</v-card>


</div>

      </template>

      <!-- <template v-else>
        

          

      <template v-if="that.$root.showResourceView">

          <template v-if="loadingResources">

                <div class="col-12 mt-4 text-center">

               <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

             </div>         

       </template>
      
      <template v-else>

        <div class="col-12">

             <v-card :ripple="false" flat class="d-flex flex-row px-1  mb-2 col-12 "  style="background: rgba(125, 179, 229, 0.4);cursor:pointer;">
              <div   class="mr-2 ">
                 
                   <v-icon color="#000000" class="ml-2"  v-if="resource.type == 'playlist'" >las la-play-circle</v-icon>
              </div>

              <div  @click="showContent(resource)" style=" white-space: nowrap; overflow:hidden; text-overflow:ellipsis; width:100%;">
              <span  style="font-family:BodyFont;color:black;font-size:13px;">{{resource.name}}</span>
              </div>

        </v-card>    

        </div>


     <div class="col-12 py-3 text-center ">

            <v-btn @click="goToChannel()" medium color="#3C87CD" style="color:white;text-transform:none;font-family:MediumFont;font-size:13px;" class="mx-2 d-inline-block" >
                     Join Channel
                   </v-btn>


        </div>


       
        


      </template>

      </template>


      <template v-if="that.$root.showResourceViewContent">

          <template v-if="loadingResourceContent">

                <div class="col-12 mt-4 text-center">

               <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

             </div>         

       </template>
      
      <template v-else>

          
             <div class="col-12 px-2 px-md-2  ">

            
               <h6 >Description</h6>
            
           <div>
               <span style="font-size:13px;font-family:BodyFont; color:grey;" v-html="selectedResource.info">
          
              </span>
           </div>

             </div>

          <div style="background:transparent;font-family:BodyFont; " class="col-12 py-1 px-2 px-md-2 " >
            
              

      
        <template v-if="selectedResource.type == 'playlist'">
           <h6>Videos</h6>
        </template>

        <template v-else>
          <h6>Links and articles</h6>
        </template>
      

        <template v-if="resourcesContent.length > 0">

           <resource :contents="resourcesContent" :show_add_icon="false" :fromStandalone="true"></resource>
        

          <div class="text-center col-lg-12">
    <v-progress-circular
      indeterminate
      color="#3C87CD"
      v-if="loadingNextPage"
    ></v-progress-circular> 
     
     <div v-observe-visibility="nextPagehandler" ></div> 

  
  </div>
    


        </template>

        <template v-else>

              <template v-if="selectedResource.type == 'playlist'">
            <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-4 text-center">No video in this playlist yet.</div>

          
           </template>

           <template v-else>
                <div style="font-family:BodyFont;font-size:13px; color:grey;" class="mt-4 text-center">No article or resource URL in this resource yet.</div>

          
           </template>

        </template>


           <div class="col-12 py-3 text-center ">

            <v-btn @click="goToChannel()" medium color="#3C87CD" style="color:white;text-transform:none;font-family:MediumFont;font-size:13px;" class="mx-2 d-inline-block" >
                     Join Channel
                   </v-btn>


        </div>

          

         
        </div>



       
        


      </template>

        
        
      </template>




    

  
     <div class="col-12 py-4 my-4">

      </div>
     


        <div v-if="that.$root.showYoutubePlayerTemp" style="  background: rgba(27, 27, 30, 0.32); left:0; position:absolute; height:100%; top:0%;z-index:999999999999;" class="d-flex flex-row col-12 px-0 py-0 text-center">
                                         
               <div style=" height:auto; left:0%; " class=" col-12 px-0 py-0">
                        <youtube-player :screenType="'small'" :playerHeight="220" :videoId="that.$root.playingVideoId"></youtube-player>
                </div>
         </div>




   

      </template> -->


   

      

  </v-card>

  </div>
</template>

<script>
export default {
    data(){
        return{
            loadingContent:false,
            newGitRepo:true,
            currentBranch: ' main',
            commits:[
                'new changes','branch merge','update landing page', 'new feature'
            ],
            branch:false,
            branches:[
                'main','beta'
            ],
            listBranch:false,
            newBranch:''
        }
    },
    mounted(){
        console.log(this.$root.projectData )
    },

    methods:{
        goBack(){
            this.$emit("myEvent")
        },
        addBranch(){
            this.branch=false
            this.branches.push(this.newBranch)

        },
        changeBranch(branch){
            this.currentBranch= branch
        }
    }
}
</script>


<style scoped>
.scroller::-webkit-scrollbar {
  width: 5px;
}

 
.scroller::-webkit-scrollbar-thumb {
  background-color: #3C87CD;
  outline: 1px solid slategrey;
}
</style>
