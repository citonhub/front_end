<template>
    <div>
        <div class="col-12 px-2 px-md-2 scroller" style="position:absolute;height:92%;top:6%;left:0%;overflow-y:auto;overflow-x:hidden;">


             <!-- fab for smaller screen -->

    <v-btn  @click="editDiary" fab color="#3C87CD"  class="d-md-none d-inline-block" style="z-index:99999999;  position:fixed;  bottom:3%; right:3%; ">

        <v-icon style="font-size:24px; color:white;">mdi mdi-square-edit-outline</v-icon>
        

     </v-btn>

<!-- ends -->

          <template v-if="loading">

             <div class="col-12 mt-2 text-center">

               <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

             </div>


          </template>

          <template v-else> 

             <!-- pet profile view -->

               <div class="col-12 px-0 px-md-2 d-flex" style="align-items:center; justify-content:center;">

                <div class="d-flex flex-column"  style="align-items:center; justify-content:center;">

                    <div  :style="imageStyle(150,this.$root.selectedDiary)">
                     
                </div> 

              
       

                </div>

            </div>

            <!-- ends -->

              <div class="col-12 py-1 px-2 mt-2 d-flex flex-row" style="align-items:center; border-top:1px solid #c5c5c5;border-bottom:1px solid #c5c5c5;">

        <div class="d-flex flex-row">

          <div>
              <span style="font-size:13px;color:black;font-family:MediumFont;"> {{this.$root.selectedDiary.users}}</span> 
                 <span style="font-size:13px;font-family:BodyFont;" class="mx-1">Followers</span>
          </div>

           <div class="ml-1">
              <span style="font-size:13px;color:black;font-family:MediumFont;">{{calculateView()}}</span> 
                 <span style="font-size:13px;font-family:BodyFont;" class="mx-1">Views</span>
          </div>

        </div>

         <div class="d-flex flex-row ml-auto">

          <v-btn icon @click="shareDiary()" ><v-icon style="font-size:26px;cursor:pointer;" >mdi-share-variant</v-icon></v-btn>

        </div>

      </div>

            <div class="col-md-8 px-1 px-md-2 offset-md-2 mt-3 col-lg-6 offset-lg-3 py-0 d-md-none ">

              <p style="color:#333333;font-size:13px; font-family:BodyFont;">{{ this.$root.selectedDiary.description }}</p>

            </div>

             <div class="col-md-8 px-2 px-md-2 offset-md-2 mt-3 col-lg-6 offset-lg-3 py-0 d-md-block text-center d-none ">

              <p style="color:#333333;font-size:13px; font-family:BodyFont;">{{ this.$root.selectedDiary.description }}</p>

            </div>

            <div class="py-2 pb-0 px-0 px-md-2  col-12 d-flex flex-row" style="align-items:center;">
             
             <div  class="ml-1 ml-md-3 d-flex flex-row" style="width:100%;align-items:center;">
                <h5 class="pt-1">Notes</h5> 
              <v-btn icon class="mx-1" @click="addNote" :loading="loadingAddNote"><v-icon style="font-size:25px;">las la-plus</v-icon></v-btn>
             </div>
             

              <div class="d-flex flex-row-reverse">
                 <v-btn icon><v-icon style="font-size:25px;">las la-search</v-icon></v-btn>
              </div>

            </div>
  
    <template v-if="that.$root.selectedDiary.notes">

       <template v-if="that.$root.selectedDiary.notes.length == 0">

                 <div class="text-center px-3 mt-3" style="font-size:13px;color:gray;font-family:BodyFont;">
                     You have not added any note yet.
                    </div>

            </template>

              <template v-else>

                     <draggable
        class="col-12  px-md-3  px-0 py-0 d-flex flex-row flex-wrap"
        tag="div"
        v-model="that.$root.selectedDiary.notes"
        handle=".handle"
        v-bind="dragOptions"
        @start="drag = true"
        @end="handleOnDrop"
      >
       
          <div
            class="col-md-6 col-lg-4 px-1"
            v-for="element in that.$root.selectedDiary.notes"
            :key="element.id"
          >

           <div  @click="showNote(element)" style="cursor:pointer;" >

              <v-card class="px-2 py-2" style="align-items:center">

              <div class="d-flex flex-row">

                <div class="d-flex flex-row" style="width:80%;align-items:center;">
                   <v-icon style="font-size:25px;" color="#3C87CD" class="mr-2 handle">lar la-clipboard</v-icon>
                   <div style="font-size:13px; font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" > {{ element.note.tag_name }} 
                      <span  style="font-size:11px; font-family:BodyFont;color:gray;" class=" mx-1">
                        
                         {{checkDatereal(element.note.created_at)}}
                     
                     </span>
                   </div>
                    

                     
                   
                </div>

               

              <div class="d-flex flex-row-reverse" style="align-items:center;">

              
                  <v-btn @click.stop="deleteNote(element.note)" icon><v-icon  color="#c5c5c5" style="font-size:20px;">mdi mdi-close</v-icon></v-btn>

                    <div class="d-flex flex-row" style="align-items:center;justify-content:center;">

                        <v-icon style="font-size:20px;color:grey;">las la-eye</v-icon>

                   <div class="px-1" style="font-size:12px;font-family:BodyFont;">{{element.note.views}}</div> 

                </div>
            
                 
                     
                </div>

              </div>

              

             
                     
            </v-card>

           </div>
           
          
          </div>
    
      </draggable>

      <div class="py-5 my-3">

      </div>

              </template>

    </template>

           
          


          </template>

             
            </div>
    </div>
</template>
<script>

import draggable from 'vuedraggable'



export default {
     data () {
      return {
      that:this,
      drag: false,
      loading:false,
      loadingAddNote:false
      }
    },
    components: {
    draggable
  },
   computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
    mounted(){
      this.$root.showMobileHub = false;

      this.getdiaryData();

    },
    methods:{
       editDiary:function(){
      this.$router.push({ path:'/board/diary/create-diary/edit'})
     },
       checkDatereal: function(date){

            var realTimeHour = moment(date).add(1,'hours');

           
                return moment(realTimeHour).format('MMM D,YYYY');
          
      },
      deleteNote:function(note){

           this.$root.intentToDelete = note.tag_unique_id;
           this.$root.diaryBoardComponent.showAlert('Hey','Are you sure about this?','question');

      },
      calculateView:function(){

         let views = 0;
            
            if( this.$root.selectedDiary.notes){

              this.$root.selectedDiary.notes.forEach((notes)=>{
            views += notes.note.views
         })

            }
         

        return views;

      },
      shareDiary:function(){

          this.$root.shareLink =  'https://www.citonhub.com/link/diary/'+ this.$route.params.diary_id;

          this.$root.shareText = 'Check out my diary on Citonhub';
          
          this.$root.infoText = 'Share your diary with others';

          this.$root.alertComponent =   this.$root.diaryBoardComponent;

          this.$root.showInvitation = true;

      },
      addNote:function(){
      
       this.loadingAddNote = true;
           axios.get( '/add-new-note/' + this.$route.params.diary_id)
      .then(response => {
      
      if (response.status == 200) {

         this.$root.noteContent = response.data;

          this.$root.selectedDiary.notes.push(response.data)
        
         this.loadingAddNote = false;

          this.saveNoteOrder(false);

            this.$root.selectedDiary.updated = false;

           this.$router.push({path:'/board/diary/board/' + this.$route.params.diary_id + '/edit-note/' + this.$root.noteContent.note.tag_unique_id});
       
     }
       
     
     })
     .catch(error => {

     this.$root.diaryBoardComponent.showAlert('Oops!','Unable to add note,please try again','error');
        this.loadingAddNote = false;
    
     }) 

      

     },
     handleOnDrop:function(){
         this.drag = false;
         this.saveNoteOrder();
     },
     saveNoteOrder: function(showAlert = true){
       
       let NoteArray = [];

        this.$root.selectedDiary.notes.forEach((note)=>{

         NoteArray.push(note.note.tag_unique_id)
   
        });

      axios.post( '/save-note-order',{
        bot_id: this.$route.params.diary_id,
        notes: NoteArray
      })
      .then(response => {
      
      if (response.status == 200) {

         if(showAlert){

               this.$root.diaryBoardComponent.showAlert('Saved!','Your changes have been saved','success');

         }

       

             this.$root.LocalStore('user_diary_data_' +  this.$route.params.diary_id + this.$root.username,this.$root.selectedDiary);

             

     
       
     }
       
     
     })
     .catch(error => {

     this.$root.diaryBoardComponent.showAlert('Oops!','Unable to save changes,please try again','error');
       
    
     }) 

        
        
         
     },
     showNote:function(note){

          this.$root.noteContent = note;

          this.$router.push({path:'/board/diary/board/' + this.$route.params.diary_id + '/edit-note/' + this.$root.noteContent.note.tag_unique_id});


     },
      imageStyle: function(size,data){

         if(data.background_color == null){
        let styleString = "height:" + size + "px;width:" + size +"px;background-size:cover;border-radius:7px;background-repeat: no-repeat; border:5px solid #3C87CD;";
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
         let styleString = "height:" + size + "px;width:" + size +"px;background-size:cover;border-radius:7px;background-repeat: no-repeat;border:5px solid #3C87CD; ";
         let imgLink = data.image_name + '.' + data.image_extension;
        
        styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/'  + imgLink  +  ');';
         
          return styleString;

      }
      },

      getdiaryData:function(){
       
        this.loading  = true;

             let storedProjectData = this.$root.getLocalStore('user_diary_data_' +  this.$route.params.diary_id + this.$root.username);

            storedProjectData.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      this.$root.selectedDiary = finalResult;

                      
                    
                   
 
                  this.loading = false;
                
                 

               this.updateNotes();

                 }else{
            
           
            axios.get( 'get-diary-data/' + this.$route.params.diary_id)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_diary_data_' +  this.$route.params.diary_id + this.$root.username,response.data.diary_data);
        
     
         this.$root.selectedDiary = response.data.diary_data;

           
     
         this.loading = false;
       
     }
       
     
     })
     .catch(error => {

        this.loading = false;
    
     }) 

                 }
            })

      },

      updateNotes: function(){

            axios.get( 'get-diary-data/' + this.$route.params.diary_id)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('user_diary_data_' +  this.$route.params.diary_id + this.$root.username,response.data.diary_data);
        
     
         this.$root.selectedDiary = response.data.diary_data;

           
     
         this.loading = false;
       
     }
       
     
     })
     .catch(error => {

        this.loading = false;
    
     }) 

      }
       
        
    } 
}
</script>
<style scoped>
.handle{
  cursor: move; 
   
}
.ghost {
  opacity: 0.5;
  background: whitesmoke;
  border:1px solid whitesmoke;
  border-radius: 7px;
}

  .scroller::-webkit-scrollbar {
  width: 5px;
}


.scroller::-webkit-scrollbar-thumb {
  background-color:  #3C87CD;
  outline: 1px solid  #3C87CD;
}
</style>