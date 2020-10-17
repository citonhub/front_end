<template>
     <v-app style="background:transparent; font-family:BodyText;">

           <div class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-0 px-0 my-0" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-0" >
         <div class="col-4 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-4 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;"> {{$t('general.comment')}}</span>
         </div>
         <div class="col-4 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0" >
         <v-form class="row my-2 py-2 px-2 ">
              


             <div class="col-12 py-2 my-0 px-2">
                 <span style="font-size:12px;color:gray;">{{ labelText }}</span>
                 <v-row>
        <v-col cols=12 >
         
 <textarea :value="input" @input="update"  :placeholder="$t('general.type_comment')"  class="editor-box2" ></textarea>
        </v-col>
        <div class="col-12 py-0 px-2">
         
          <div class="row py-0 my-0">
                <div class="col-8 py-0 my-0">
                 
                </div>
                 <div class="col-4 py-0 my-0  text-right">
                   <span class="counter">{{wordCount}}/{{ wordLimit }}</span>
                </div>
          </div>
          
        </div>
        
  </v-row>
             </div>

        

             <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn rounded small color="#3E8893" @click="saveComment" :loading="loading" :disabled="editFeild" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;">{{$t('general.send')}}</v-btn>
             </div>

             <div class="my-5 py-3">

             </div>

         
              
          </v-form>
        </div>
         </div>
           </div>

          
     </v-app>
</template>
<script>


export default {
    data(){
        return{
         
      selectedParticipant:'',
        participant: [
            'Individuals',
             'Teams'
        ],
        searchUsername:'',
        JudgesItems:[
            'Public'
        ],
        Judges:'',
        programmingLanguage:'',
        wordLimit:200,
     wordCount:0,
     contentInWord:'',
    editFeild:true,
     loading:false,
     labelText: '',
     typingText:'',
     input:''
        }
    },
    components: {
   
     
   
    
  },
   computed: {
          compiledMarkdown: function() {
            return marked(this.input, { sanitize: true });
          }
        },
   mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       this.checkifReply();

        

        this.$root.checkIfUserIsLoggedIn('duels');
       this.fetchDuel();
    },
    methods:{
      checkifReply: function(){
            if(this.$root.is_reply_comment){
               this.labelText = 'replying ' + this.$root.replyCommentUsername;
            }
      },
       urlify:function(text) {
      var urlRegex =  /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
     return text.replace(urlRegex, function(url) {
      return "<a href=\"" + url + "\" target=\"_blank\">"  + url + "</a>";
  })
   // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
     },
        update:function(e){
           this.input = e.target.value;

           this.wordCount =  this.input.length;

         if(this.wordCount > this.wordLimit || this.wordCount == 0){
           this.editFeild = true;

         }else{
            this.editFeild = false;
         }
         
        this.contentInWord = this.urlify(this.compiledMarkdown);

        },
    
        showDuelboard: function(){
       
        if(this.$root.duels.length != 0){
             
            

                  
                  var newcomments = this.$root.selectedDuel.comments + 1;
                   this.$root.selectedDuel.comments = newcomments;
              
        }
            
     this.$router.push({ path: '/duel/' + this.$route.params.duelId +'/board' + '/user' });
   },
   saveComment:function(){
       this.loading = true;
     axios.post('/save-duel-comment',{
      'duel_id':this.$route.params.duelId,
       'content': this.contentInWord,
       'is_reply': this.$root.is_reply_comment,
       'replied_comment_id': this.$root.replyCommentId 
     })
      .then(response => {
      
      if (response.status == 200) {

         this.$root.replyCommentId = 0;
         this.$root.is_reply_comment = false;
 
          this.$root.duelComments.unshift(response.data[0]);
        
          
         this.showDuelboard();
         
      
        
        

     }
       
     
     })
     .catch(error => {
    
     }) 
   },

   fetchDuel: function(){
          if(this.$root.duels.length != 0){
              var thisDuel = this.$root.duels.filter((eachduel)=>{
             return eachduel.duel_id == this.$route.params.duelId;
           })

            this.$root.selectedDuel = thisDuel[0];
             this.countDownDate = new Date(this.$root.selectedDuel.duel_terminal_time).getTime();
          }else{
             axios.get('/fetch-this-duel/' + this.$route.params.duelId)
      .then(response => {
      
      if (response.status == 200) {
        
         
        this.$root.selectedDuel = response.data[0];
          this.countDownDate = new Date(this.$root.selectedDuel.duel_terminal_time).getTime();
        
        

     }
       
     
     })
     .catch(error => {
    
     }) 
          }
      },
  
       goBack() {
         this.$root.is_reply_comment = false;
        this.$router.push({ path: '/duel/' + this.$route.params.duelId +'/board' + '/user'});
        },
    },
   
}
</script>
<style scoped>
textarea  {
    border-bottom:1px solid #4495a2;
    height: 100px;
    width:100%;
    line-height: 20px !important;
    padding: 5px 2px;
    font-size: 12px;
    color: #262626;
}

.counter{
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