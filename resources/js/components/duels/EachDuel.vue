<template>
           <div class="col-12 col-lg-8 offset-lg-2 px-2 py-2">
               <v-card elevation-22 class="py-2 px-2"  @click="showboard(source)">
                <div class="row">
                   <div class="py-0 col-12 text-center d-md-block d-none">
                        <div style="background-color:#b9dcdf; border-radius:4px; border:1px solid transparent;">
                           <span style="font-size:12px;color:#0f2024;">{{shortenContent(source.title,40)}}</span>
                        </div>
                   </div>
                    <div class="py-0 col-12 text-center d-block d-md-none" >
                        <div style="background-color:#b9dcdf; border-radius:4px; border:1px solid transparent;">
                           <span style="font-size:12px;color:#0f2024;">{{shortenContent(source.title,35)}}</span>
                        </div>
                        
                   </div>

                   <div class="py-1 col-4">
                        <span style="font-size:12px;color:#595959;">{{ $t('duels.participant') }}: {{source.current_participant}}</span>
                   </div>

                   <div class="col-4 py-1 text-center">

                            <span class="statusnew" v-if="checkDuelStatus(source) == 'Active'">{{$t('duels.active')}} </span>
                       <span class="statusnew" v-if="checkDuelStatus(source) == 'Pending'">{{$t('duels.pending')}} </span>
                        <span class="statusnew" v-if="checkDuelStatus(source) == 'Ended'">{{$t('duels.ended')}} </span>
                        <span class="statusnew" v-if="checkDuelStatus(source) == 'Voting'">{{$t('duels.voting')}} </span>
                     </div>
                   
                    <div class="col-4 py-1 text-right">
                       <v-icon color="#0066ff"  v-if="languageExtensions(source.duel_language_array) == 'php'">mdi-language-php </v-icon>

                       <v-icon color="#306998"  v-if="languageExtensions(source.duel_language_array) == 'py'">mdi-language-python </v-icon>

                        <v-icon color="#e6b800"  v-if="languageExtensions(source.duel_language_array) == 'js'">mdi-language-javascript </v-icon>
                      
                       <v-icon color="#3E8893"  v-if="languageExtensions(source.duel_language_array) == 'c'">mdi-language-c </v-icon>

                     <v-icon color="#3E8893"  v-if="languageExtensions(source.duel_language_array) == 'cpp'">mdi-language-cpp </v-icon>

                       <v-icon color="#3E8893"  v-if="languageExtensions(source.duel_language_array) == 'cs'">mdi-language-csharp </v-icon>
                    
                      <v-icon color="#3E8893"  v-if="languageExtensions(source.duel_language_array) == 'for'">mdi-language-fortran </v-icon>

                    <v-icon color="#29BEB0"  v-if="languageExtensions(source.duel_language_array) == 'go'">mdi-language-go </v-icon>

                    <v-icon color="#3E8893"  v-if="languageExtensions(source.duel_language_array) == 'kt'">mdi-code-not-equal-variant </v-icon>

                      <v-icon color="#5f574f"  v-if="languageExtensions(source.duel_language_array) == 'lua'">mdi-language-lua </v-icon>
                    
                      <v-icon color="#276DC2"  v-if="languageExtensions(source.duel_language_array) == 'r'">mdi-language-r </v-icon>
                    
                      <v-icon color="#A91401"  v-if="languageExtensions(source.duel_language_array) == 'rb'">mdi-language-ruby </v-icon>

                    <v-icon color="#A91401"  v-if="languageExtensions(source.duel_language_array) == 'swift'">mdi-language-swift </v-icon>

                  <v-icon color="#007acc"  v-if="languageExtensions(source.duel_language_array) == 'ts'">mdi-language-typescript </v-icon>

                   <v-icon color="#f89820"  v-if="languageExtensions(source.duel_language_array) == 'java'">mdi-language-java </v-icon>

                    <v-icon color="#3E8893"  v-if="languageExtensions(source.duel_language_array) == 'hs'">mdi-language-haskell </v-icon>

                     <v-icon color="#3E8893"  v-if="languageExtensions(source.duel_language_array) == 'sql'">mdi-code-not-equal-variant </v-icon>

                      <v-icon color="#3E8893"  v-if="languageExtensions(source.duel_language_array) == 'erl'">mdi-code-not-equal-variant </v-icon>

                       <v-icon color="#3E8893"  v-if="languageExtensions(source.duel_language_array) == 'scala'">mdi-code-not-equal-variant </v-icon>

                      <v-icon color="#3E8893"  v-if="languageExtensions(source.duel_language_array) == 'rs'">mdi-code-not-equal-variant </v-icon>

                        <v-icon color="#3E8893"  v-if="languageExtensions(source.duel_language_array) == 'pas'">mdi-code-not-equal-variant </v-icon>

                        <v-icon color="#3E8893"  v-if="languageExtensions(source.duel_language_array) == 'pl'">mdi-code-not-equal-variant </v-icon>

                         <v-icon color="#f06529"  v-if="languageExtensions(source.duel_language_array) == 'html'">mdi-language-html5 </v-icon>
                     </div>

                </div>
               </v-card>
            </div>
            
</template>
<script>
export default {
     props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default () {
          return {}
        }
      },
     
    },
 methods:{
    languageExtensions: function(language){

        if(Array.isArray(language)){

            language = language[0]

        }


     if(language == ''){
             return 'html';
         }

           if(language == 'HTML'){
             return 'html';
         }
          if(language == 'Web app with NodeJs'){
             return 'html';
         }
          if(language == 'Web app with PHP'){
             return 'html';
         }
         if(language == 'CSS'){
          return 'html';
         }
          if(language == 'PYTHON(3.8.1)'){
           return 'py';
         }

         if(language == 'PYTHON For ML(3.7.7)'){
           return 'py';
         }

         if(language == 'PYTHON(2.7.17)'){
           return 'py';
         }
          if(language == 'PHP'){
            return 'php';
         }
          if(language == 'JAVASCRIPT(Node)'){
           return 'js';
         }
          if(language == 'JAVASCRIPT'){
           return 'js';
         }
          if(language == 'SQL'){
            return 'sql';
         }
          if(language == 'C'){
            return 'c';
         }
          if(language == 'C++'){
           return 'cpp';
         }
          if(language == 'JAVA'){
            return 'java';
         }
          if(language == 'C#'){
           return 'cs';
         }
          if(language == 'ERLANG'){
            return 'erl';
         }
          if(language == 'KOTLIN'){
         return 'kt';
         }
          if(language == 'FOTRAN'){
          return 'for';
         }
          if(language == 'PERL'){
           return 'pl';
         }
          if(language == 'R'){
            return 'r';
         }
         if(language == 'GO'){
            return 'go';
         }
         if(language == 'HASKELL'){
           return 'hs';
         }
          if(language == 'RUBY'){
            return 'rb';
         }
         if(language == 'LUA'){
           
             return 'lua';

         }
         if(language == 'PASCAL'){

             return 'pas';
         }
         if(language == 'RUST'){

             return 'rs';
         }
         if(language == 'SCALA'){
           
              return 'scala';

         }
         if(language == 'SWIFT'){

               return 'swift';

         }
         if(language  == 'TYPESCRIPT'){

             return 'ts';

         }

      },
          showboard: function(duel){
           
          this.$router.push({ path: '/duel/' + duel.duel_id +'/board' + '/user' });
       },
       shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
       
      checkDuelStatus:function(duel){
      
      if(duel.started == 0){
         return 'Pending'
      }
             
          let now  = moment();
           let terminalDateToMoment = moment(duel.duel_terminal_time);
           let votingDateToMoment = moment(duel.duel_voting_time);
          
          let differenceInSeconds = votingDateToMoment.diff(now,'seconds');

          let differenceInSecondsForVoting = votingDateToMoment.diff(now,'seconds');
            
          if(differenceInSeconds <= 0){
             return 'Ended';
          }else{
             if(differenceInSecondsForVoting <= 3600){
                  return 'Voting'
             }
            return 'Active'
          }
          
       },
      
    }
}
</script>
<style>

</style>