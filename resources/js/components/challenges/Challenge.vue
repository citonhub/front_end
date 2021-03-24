<template>

        <div class="col-lg-4 col-md-6 px-2 mb-2 pt-1 pt-md-2" 
          >
        
          <v-card class="py-0 px-0 d-flex flex-column"  :ripple="false"  style="border-radius:6px;" @click="startChallenge(source)">
            
            <div  :style="imageStyle(120,source)">

           <div class="py-2 px-2 text-right" style=" position:absolute; height:100%; left:0%; width:100%; 
          background: rgba(0, 0, 0, 0.4);  border:1px solid transparent; border-top-left-radius:6px;  border-top-right-radius:6px;">
             <div style="position:absolute; top:0%;width:100%; height:auto;" class="py-1 px-2">
        
          <template v-if="checkDuelStatus(source) == 'Pending'">

               <v-chip 
              
              color="#ffc107"
              dense
              class="mx-2"
              style="font-size:12px; color:white; font-family:BodyFont;"
              x-small
            >
             
            {{checkDuelStatus(source)}}
            </v-chip>
          </template>

            <template v-if="checkDuelStatus(source) == 'Ended'">

               <v-chip 
              
              color="#17a2b8"
              dense
              class="mx-2"
              style="font-size:12px; color:white; font-family:BodyFont;"
              x-small
            >
             
            {{checkDuelStatus(source)}}
            </v-chip>


          </template>

           <template v-if="checkDuelStatus(source) != 'Ended' && checkDuelStatus(source) != 'Pending'">

               <v-chip 
              
              color="#28a745"
              dense
              class="mx-2"
              style="font-size:12px; color:white; font-family:BodyFont;"
              x-small
            >
             
            {{checkDuelStatus(source)}}
            </v-chip>


          </template>
               
             </div>

                 <div style="position:absolute; bottom:0%;width:100%; height:auto;" class="py-1 px-2">
                     <span class="mx-1" v-for="(lang,index) in appName(source)" :key="'lang' + index">
                         <i :class="lang.icon" style="font-size:25px; color:white;"></i>
                     </span>
                 </div>
           
         </div>
         </div>
         <div class="px-2 pb-2" style="margin-top:115px;">

             <div class=" py-0 my-0 text-left mt-2">

                 
                    <div style="font-size:13px;font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" >{{source.title}}</div>
                
            </div>

             <div class=" py-0 my-0 px-0 text-left" style="height:50px;text-overflow: ellipsis; overflow-y:hidden;">

                  <div style="font-size:13px;font-family:BodyFont; color:grey; " >{{source.summary}}</div>
                 
                
            </div>

              <div class=" py-0 my-0 text-center mt-1 mb-1">

                  <v-chip 
               outlined
              color="#3C87CD"
              dense
              class="mx-2"
              style="font-size:12px; font-family:BodyFont;"
              small
            >
             
           {{source.duel_participants.length}} participants
            </v-chip>

               
            
              

            </div>

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

         
          let languageArray = challenge.duel_language_array.split(',');
           
            let finalLanguages = [];

             if(languageArray.length <= 3){
                  finalLanguages = languageArray;
             }else{
                finalLanguages = languageArray.slice(0,3);
             }
         
          let languageIconArray = [];

           finalLanguages.forEach((language)=>{

        let ThisApp = this.languageIcon.filter((app)=>{
           return language == app.id.toString();
         });

           languageIconArray.push(ThisApp[0]);
              
           });
          
        
       return  languageIconArray ;

      },
      imageStyle: function(height,data){

         if(data.background_color == null){
        let styleString = "width:100%;height:" + height +"px;position:absolute; left:0%; top:0%;border-top-left-radius:6px;  border-top-right-radius:6px;  border:1px solid transparent;background-repeat: no-repeat; background-size:cover; ";
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
        let styleString = "width:100%;height:" + height +"px;position:absolute; left:0%; top:0%; border:1px solid transparent; border-top-left-radius:6px;  border-top-right-radius:6px;background-repeat: no-repeat; background-size:cover; ";
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