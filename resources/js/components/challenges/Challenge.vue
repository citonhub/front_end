<template>
    <div class="px-1">
         <v-card @click="startChallenge(source)" class="col-12 py-0 px-md-0 px-0 pr-1 pr-md-2 d-flex mb-3 flex-row " style="border-radius:7px;" >
                 
                 <div     class=" d-md-block d-none mr-2"> 

                   <div :style="imageStyle(100,source)">
                    </div> 

                 </div>

                  <div     class="mr-1 d-block d-md-none"> 

                   <div :style="imageStyle(65,source)">
                    </div> 

                 </div>
        
        <div class="text-left d-flex flex-column py-md-3 py-2" style="overflow-x:hidden; width:100%;">
          <!-- large screen -->
          <div style="font-size:14px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1 d-md-block d-none">{{source.title}}</div>
          <div style="font-size:12px;font-family:BodyFont; white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1  d-md-block d-none">{{source.summary}}</div>
          <!-- ends -->
          <!-- smaller screen -->
               <div style="font-size:13px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1  d-md-none d-block">{{source.title}}</div>
          <div style="font-size:11px;font-family:BodyFont; white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" class="pb-1  d-md-none d-block">{{source.summary}}</div>
          <!-- ends -->
          <div class="d-flex flex-row pr-2" style="align-items:center;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">
             <div style="font-size:12px;font-family:BodyFont;">{{appName(source)}} </div> <v-icon class="mx-1" style="font-size:12px;">mdi-record</v-icon> 
             <div style="font-size:12px;font-family:BodyFont;">{{checkDuelStatus(source)}}</div> <v-icon class="mx-1" style="font-size:12px;">mdi-record</v-icon> 
             <div style="font-size:12px;font-family:BodyFont;" class="d-md-block d-none">{{source.duel_participants.length}} Participants </div>
             <div style="font-size:12px;font-family:BodyFont;" class="d-md-none d-block"> <v-icon style="font-size:17px;">las la-user-friends</v-icon> {{source.duel_participants.length}} </div>
        
          </div>

        </div>
               
              <div>

         </div>

              </v-card>
    </div>
</template>
<script>
export default {
      data () {
      return {
       challenges:[],
       pending:true,
       selected:{},
       languageIcon:[
               {
                  name:'Web app NodeJs',
                  icon:'lab la-node-js',
                  border_color:'#263238',
                  background:'#ffffff',
                  id: 'NodeJs',
               
               },
               {
                  name:'Web app PHP',
                  icon:'lab la-php',
                   border_color:'#263238',
                  background:'#ffffff',
                   id:'PHP'
               
               },
               {
                  name:'JavaScript',
                  icon:'lab la-js-square',
                   border_color:'#263238',
                  background:'#ffffff',
                  id:26
               
               },
               {
                  name:'PHP',
                  icon:'lab la-php',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 35,
               
               },
               {
                  name:'Python 3.81',
                  icon:'lab la-python',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 39,
               
               },
               {
                  name:'Python for ML(3.7.7)',
                  icon:'lab la-python',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 100,
               
               },
               {
                  name:'C',
                  icon:'mdi mdi-language-c',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 4,
               
               },
               {
                  name:'C++',
                  icon:'mdi mdi-language-cpp',
                   border_color:'#263238',
                  background:'#ffffff',
                  id:11,
               
               },
               {
                  name:'Java',
                  icon:'lab la-java',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 25,
               
               },
               {
                  name:'C#',
                  icon:'mdi mdi-language-csharp',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 13,
               
               },
               {
                  name:'Erlang',
                  icon:'lab la-erlang',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 18,
               
               },
               {
                  name:'Kotlin',
                  icon:'mdi mdi-language-kotlin',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 27,
               
               },
               {
                  name:'Fortran',
                  icon:'mdi mdi-language-fortran',
                   border_color:'#263238',
                  background:'#ffffff',
                  id:21,
               
               },
               {
                  name:'Perl',
                  icon:'las la-code',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 34,
               
               },
               {
                  name:'R',
                  icon:'mdi mdi-language-r',
                   border_color:'#263238',
                  background:'#ffffff',
                   id:40,
               
               },
               {
                  name:'Ruby',
                  icon:'mdi mdi-language-ruby',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 41,
               
               },
               {
                  name:'Go',
                  icon:'mdi mdi-language-go',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 22,
               
               },
               {
                  name:'Hashkell',
                  icon:'mdi mdi-language-haskell',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 24,
               
               },
               {
                  name:'Lua',
                  icon:'mdi mdi-language-lua',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 28,
               
               },
               {
                  name:'Pascal',
                  icon:'las la-code',
                   border_color:'#263238',
                  background:'#ffffff',
                   id:33,
               
               },
               {
                  name:'TypeScript',
                  icon:'mdi mdi-language-typescript',
                   border_color:'#263238',
                  background:'#ffffff',
                   id: 46,
               
               },
               {
                  name:'Rust',
                  icon:'las la-code',
                   border_color:'#263238',
                  background:'#ffffff',
                   id:42,
               
               },
               {
                  name:'Swift',
                  icon:'lab la-swift',
                   border_color:'#263238',
                  background:'#ffffff',
                  id:45,
               
               },
                {
                  name:'Scala',
                  icon:'las la-code',
                   border_color:'#263238',
                  background:'#ffffff',
                  id: 43,
               
               },

            ],
        
      }
     },
    props:['source'],
    methods:{
    appName:function(challenge){

        
         
         let ThisApp = this.languageIcon.filter((app)=>{
           return challenge.duel_language_array == app.id.toString();
         })
         

          if(ThisApp.length > 0){

            return ThisApp[0].name;

          }else{
            return 'Web';
          }

      },
      imageStyle: function(width,data){

         if(data.background_color == null){
        let styleString = "height:100%;width:" + width +"px;background-size:cover;border-top-left-radius:7px;border-bottom-left-radius:7px; background-repeat: no-repeat; ";
         if(data.image_name == null || data.image_name == '0'){
              styleString += 'background-color:whitesmoke; background-image:url(imgs/background1.jpg);';
         }else{
            if(data.image_name == 'default_1'){

               styleString += 'background-color:whitesmoke; background-image:url(/imgs/background3.jpg);';

            }

            if(data.image_name == 'default_2'){

               styleString += 'background-color:whitesmoke; background-image:url(/imgs/background1.jpg);';

            }

              if(data.image_name == 'default_3'){

               styleString += 'background-color:whitesmoke; background-image:url(/imgs/imgproj2.jpeg);';

            }
          
         }
         
         return styleString;
       }else{
        let styleString = "height:100%;width:" + width +"px;background-size:cover;border-top-left-radius:7px;border-bottom-left-radius:7px; background-repeat: no-repeat; ";
         let imgLink = data.image_name + '.' + data.image_extension;
        
        styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/challenges/thumbnails/'  + imgLink  +  ');';
         
          return styleString;

      }
      },
      startChallenge(challenge){

      
      this.$router.push({path:'/board/challenges/panel/' + challenge.duel_id +  '/description'})
       
     
      },

    
      checkDuelStatus:function(challenge){
      
      if(challenge.started == 0){
         return 'Pending'
      }
             
          let now  = moment();
           let terminalDateToMoment = moment(challenge.duel_terminal_time);
        
          let differenceInSeconds = terminalDateToMoment.diff(now,'seconds');

        
            
          if(differenceInSeconds <= 0){
             return 'Ended';
          }else{

         return 'Ends ' + terminalDateToMoment.fromNow();
           
            
          }
          
       },
    }
}
</script>
<style scoped>

</style>