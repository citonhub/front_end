<template> 
    
   
    <v-card class="col-lg-4  py-3 d-flex flex-column col-md-8 px-1 application application--light" data-app="true" style="align-items:center; justify-content:center;" >

          <div class="d-flex flex-row py-0 col-12 ">
          
           <div class="col-8 py-1 text-left px-1">
      <span style="font-size:17px; font-family:HeaderFont;">Become a mentor</span>
     </div>
       <div class="col-4 py-1 text-right px-0">
       <v-btn @click="that.$root.showPointDetailsInfo = false" x-small text style="font-family:BodyFont;font-size:11px;"  >Close</v-btn>
     </div>

          </div>
        

    <img  src="/imgs/teach_dev_new.svg" height="160" />

    <template v-if="that.$root.authProfile.points < 100">

      <div class="py-3   px-md-3 px-2" style="font-size:13px; font-family:BodyFont;">

        <span>Hey <span style="font-size:13px; font-family:MediumFont; text-transform:capitalize;">{{that.$root.authProfile.name}}</span>, <br> <br>
        To become a mentor , you need to be 
        at least a <span style="font-size:13px; font-family:MediumFont;">Bronze citon</span> On CitonHub. As a mentor, you can <span style="font-size:13px; font-family:MediumFont;">create a channel to mentor and earn</span>.
         You have <span style="font-size:13px; font-family:MediumFont;">{{remainingPoints}} experience points (XP)</span> remaining to become a <span style="font-size:13px; font-family:MediumFont;">{{nextLevel}}.</span></span> Share your works with
        the community to get more experience points. 

   </div>

   <div class="text-center col-12 d-flex flex-row py-0 px-1">

     <div class="col-12 text-center">
         <v-btn small @click="shareProject" color="#3C87CD" style="color:white;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" >Share your work</v-btn>
     </div>

             
   </div>

    </template>

    <template v-else>
      
      <div class="py-3 col-12  px-md-3 px-2" style="font-size:13px; font-family:BodyFont;">

         <template v-if="that.$root.authProfile.is_mentor">



        <span> <span style="font-size:13px; font-family:MediumFont; text-transform:capitalize;">Congratulations! </span> <br><br>You are now a mentor on CitonHub.
        Create a channel to start <span style="font-size:13px; font-family:MediumFont;">mentoring and earn from donation, subscription or paid sessions</span>.</span>

      
    
          


   <div class="text-center col-12 d-flex flex-row py-1 px-1 mt-2">

     <div class="col-12 text-center py-1">
         <v-btn small @click="createChannel" :loading="loadingmakeMentor" color="#3C87CD" style="color:white;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" >Create a channel</v-btn>
     </div>

             
    </div>
    </template>

         <template v-else>


        <span>Hey <span style="font-size:13px; font-family:MediumFont; text-transform:capitalize;">{{that.$root.authProfile.name}}</span>,</span><br> <br>
         <div style="font-size:13px;font-family:MediumFont;" class="mb-2">Which programming languages would you like to help others in?</div>
         
         
           <v-combobox
               
                 style="font-size:13px;"
                 
                
                 color="#3C87CD"
                   :items="languageIcon"
                
                 dense
                 outlined
                  multiple
                 placeholder="select..."
                v-model="languages">

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
             
              {{ data.item }}
            </v-chip>
            </template>

                </v-combobox>


      <div class="text-center col-12 d-flex flex-row py-0 px-1">

     <div class="col-12 text-center py-1">
         <v-btn small @click="makeMentor" :disabled="languages.length == 0" :loading="loadingmakeMentor" color="#3C87CD" style="color:white;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" >Done</v-btn>
     </div>
     

           </div>

   
         </template>
          

   </div>

  

      

         </template>

  
  

   
    

    </v-card>
   
    
    
</template>
<script>
export default {
  props:['alertComponent'],
     data () {
      return {
        that:this,
        nextLevel:'',
        presentLevel:'',
         remainingPoints:0,
         loadingmakeMentor:false,
         languages:[],
          languageIcon:[
               'Javascript',
               'NodeJs',
               'PHP',
               'VueJs',
               'ReactJs',
               'Python',
               'C',
               'C++',
               'Java',
               'C#',
               'Erlang',
               'Kotlin',
               'Fortran',
               'Perl',
               'R',
               'Ruby',
               'Go',
               'Hashkell',
               'Lua',
               'Pascal',
               'Typescript',
               'Rust',
               'Swift',
               'Scala'
            ],
        
      }
    },
    mounted(){
       this.calculateLevel(this.$root.authProfile.points)
    },
     methods:{
        createChannel:function(){
          this.$root.componentIsLoading = true;

            if(this.$router.currentRoute.path.indexOf('channel') >= 0){

            this.$root.showPointDetailsInfo = false
                 this.$router.push({ path: '/channels/create' });
            }else{

                   this.$root.showCreateChannel = true;


            this.$root.showPointDetailsInfo = false

                   this.$router.push({ path: '/channels' });

            }

      


        },
       makeMentor:function(){

          this.loadingmakeMentor = true;

          axios.post('/make-mentor',{
             language:this.languages
           } )
       .then(response => {

       if (response.status == 200) {
 
            this.$root.authProfile.is_mentor = true;

             this.loadingmakeMentor = false;
             if( this.$root.fromMentorPage ){

                this.$root.MentorPageComponent.getMentors();

             }
       }

      })
     .catch(error => {  

        this.alertComponent.showAlert('Oops!','Something went wrong, please try again','error');


        this.loadingmakeMentor = false;
       }) 

     
       },
       shareProject:function(){
          
          this.$root.showPointDetailsInfo = false
       this.$root.componentIsLoading = true;

         this.$root.autoOpenAddPost = true;

          this.$router.push({ path:'/hub'})

    },
      
         calculateLevel(point){
   this.nextLevel = '';

     this.remainingPoints = 0;
   
  if(point >= 50 && point <= 99){

   this.nextLevel='a Bronze citon';
   this.remainingPoints =100-point;
   this.presentLevel = 'a Steel citon';
    this.newLevelImage = '/imgs/steel.svg';

  }
  else if(point >= 100 && point <= 299 ){
   
   this.nextLevel='a Silver citon';

    this.remainingPoints=300-point;

     this.presentLevel = 'a Bronze citon';

       this.newLevelImage = '/imgs/bronze.svg';
 
  }
   else if(point >= 300 && point <= 599 ){ 
  
  this.nextLevel='a Gold citon';

   this.remainingPoints= 600-point;

    this.presentLevel = 'a Silver citon';

      this.newLevelImage = '/imgs/silver.svg';

    }
    else if(point >= 600 && point <= 999 ){ 

   this.nextLevel='a Platinum citon';

     this.remainingPoints=1000-point;

     this.presentLevel = 'a Gold citon';
       this.newLevelImage = '/imgs/gold.svg';

   }
 else if(point >= 1000 && point <= 1499 ){ 
 this.nextLevel='a Diamond citon';

 this.remainingPoints=1500 - point;

   this.presentLevel = 'a Platinum citon';
     this.newLevelImage = '/imgs/platinum.svg';
  
  }
  else if(point >= 1500  && point <= 9999 ){ 
  this.nextLevel='a Diamond citon';

  this.remainingPoints= 10000 - point;

   this.presentLevel = 'a Diamond citon';

     this.newLevelImage = '/imgs/diamond.svg';
 
}

 return [this.nextLevel,this.remainingPoints];

},
     }
}
</script>
<style scoped>

</style>