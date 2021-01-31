<template>
  <div style="background:transparent;">
   <div class="col-12 py-1 my-0 ">
    <div class="row">
        <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 py-0 px-1">
              <v-btn icon @click.stop="close">
                      <v-icon>mdi mdi-close</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-0 px-0 text-center">
             <span style="font-size:14px; font-family:MediumFont;">Diary Notes</span>
          </div>
              
              <div class="col-2 py-0 mr-1 px-1 text-right">
                
              </div>
          
        </div>


        <div class="col-12 ">

          <div class="col-12 text-center" v-if="diaryNotes == null">

            <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>

          </div>

          <template v-if="diaryNotes != null">


           <div class="col-12 d-flex flex-column text-center" v-if="diaryNotes.length == 0">

           <div style="font-size:13px; color:gray;"> No notes yet</div>  
      

          </div>

            <div class="row px-2" v-if="diaryNotes.length > 0">
          

            <v-card flat tile class="col-12 py-2 px-1 messageBox" style="border-bottom:1px solid #cccccc;" v-for="(note,index) in diaryNotes" @click.stop="selectDiaryNote(note)"
            :key="index">
              <div class="row py-0 my-0">
                  <div class="col-2 py-0 my-0">
                    
                     
                   <v-icon style="font-size:20px;">lar la-clipboard</v-icon>
                     
                  </div>
                  <div class="col-8 py-0 my-0 text-center">
                       <span  style="font-size:13px; color:#1e4148; font-family:MediumFont;"> {{note.tag_name}}</span>
                  </div>
                  <div class="col-2 py-0 my-0">
                      
                  </div>
                 
              </div>
           </v-card>

            </div>

          </template>


            

        </div>

    </div>
   </div>

  </div>
   
</template>
<script>
export default {
    data(){
        return{
          
         that:this,
         loading:false,
         diaryNotes:null,
       
        }
    },
   mounted(){
     this.$root.componentIsLoading = false;
     this.fetchDiaryNote();
    
   },
  methods:{
    
        selectDiaryNote: function(note){
            
            if( this.$root.channelBottomComp){
                 this.$root.channelBottomComp.contentInWord = note.patterns[0].pattern_content;

           this.$root.channelBottomComp.input = note.patterns[0].pattern_content;

          this.$root.channelBottomComp.sendMessage(false);
            }
          
            this.close();

            

        },
     fetchDiaryNote: function(){
           
           this.loading  = true;

             let storedDiaryNotes = this.$root.getLocalStore('diary_notes_' + this.$root.selectedSpace.space_id  + this.$root.username);

            storedDiaryNotes.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      finalResult = finalResult.diary_notes;

                       this.diaryNotes = finalResult
                   
                   
                  this.loading = false;

              this.checkForNewNotes();

                 }else{
            
           
            axios.get( '/fetch-diary-notes-' + this.$root.selectedSpace.bot_data.bot_id)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('diary_notes_' + this.$root.selectedSpace.space_id  + this.$root.username,response.data);
        
     
                   let finalResult = response.data.diary_notes;

                     this.diaryNotes = finalResult
       
     
         this.loading = false;

            
     }
       
     
     })
     .catch(error => {

        this.loading = false;
    
     }) 

                 }
            })

         
       
        },
        checkForNewNotes:function(){

        axios.get( '/fetch-diary-notes-' + this.$root.selectedSpace.bot_data.bot_id)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('diary_notes_' + this.$root.selectedSpace.space_id  + this.$root.username,response.data);
        
     
                   let finalResult = response.data.diary_notes;

                     this.diaryNotes = finalResult
  
     }
       
     
     })
     .catch(error => {

      
    
     }) 

        },
       
        
    close:function(){
             window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        this.$root.chatComponent.chatInnerSideBar = false;
   }
  }
}
</script>
<style scoped>
.messagesBadges{
    
    color: #ffffff;
    background: #3C87CD;
    font-size: 11px;
    font-family: BodyFont;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
    height:20px;
    width:20px;
    border-radius:50%;
}
.messageBox:hover{
    background:whitesmoke;
    cursor: pointer;
}
</style>