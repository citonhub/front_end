<template>
    <div>
       
      
        <div style="position:fixed;height:88%;left:0;top:10%;z-index:99999999999999;overflow-y:auto;background:#F5F5FB;" class="col-lg-10 offset-lg-2 py-0 px-0">
      
         <!-- large screens -->
             <div class="col-lg-10 offset-lg-1  mb-0 col-md-10 offset-md-1 px-0 d-md-block d-none py-0 pb-3 px-0 "
              style="position:absolute; left:0%; top:0%; height:100%;  background:#ffffff;border:1px solid #c5c5c5; border-radius:6px;overflow-y:hidden;overflow-x:hidden;">
      
        <!-- top bar -->
                <div class="col-12 px-1 py-1 pt-0 d-flex flex-row " style="z-index:99999999999999999;position:sticky;background:white; top:0%; border-bottom:1px solid #c5c5c5;align-items:center;">
            <div class="px-1 col-3 py-0">
              <v-btn icon @click="goBack">
                      <v-icon>mdi mdi-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-6 py-0 text-center">
             <span style="font-size:14px; font-family:MediumFont;"> {{this.$root.selectedDiary.name}}</span>
          </div>
              
              <div class="col-3 py-0 px-1 text-right">
                
                    <template v-if="this.$router.currentRoute.path.indexOf('edit-note') >= 0">
                          <v-btn small rounded :loading="loadingSaveNote" color="#3C87CD" @click="saveNote" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
                       <template >
                          <span style="color:white;text-transform:none;">Save</span> 
                       </template>
                      
                        </v-btn>

                         
                       </template>
                       <template v-else>
                         

                        <template v-if="this.$root.selectedDiary.updated">

                            <v-btn @click="editDiary"  small outlined rounded color="#3C87CD" style="font-size:12px; font-weight:bolder;font-family:MediumFont;">
                     
                          <span style="text-transform:none;">Edit</span> 
                      
                        </v-btn>

                             <v-btn @click="viewDiary"  small outlined rounded color="#3C87CD" style="font-size:12px; font-weight:bolder;font-family:MediumFont;">
                     
                          <span style="text-transform:none;">View</span> 
                      
                        </v-btn>

                          </template>

                          <template v-else>

                            <v-btn :loading="loadingUpdate" @click="updateDiary()" small rounded color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
                     
                          <span style="color:white;text-transform:none;">Update</span> 
                      
                        </v-btn>

                          </template>

                         
                       </template>
              </div>
          
            </div>

          <!-- ends -->
            
       <!-- content session -->
            
            <router-view></router-view>

            <!-- ends -->

           

            </div>

             <!-- ends -->

           
         

        </div>

          <!-- smaller screens -->

                 <div class="col-12 py-0 mb-0  px-0 d-md-none d-block py-0 px-0 "
              style="position:fixed; left:0%; top:0%; height:100%; z-index:999999999999999999; background:#ffffff;overflow-y:hidden;overflow-x:hidden;">
                         <!-- top bar -->
                <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row " style="position:sticky;background:white; top:-1%; border-bottom:1px solid #c5c5c5;align-items:center;">
            <div class="px-1 col-3 py-0">
              <v-btn icon @click="goBack">
                      <v-icon>mdi mdi-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-6 py-0 text-center">
             <span style="font-size:13px; font-family:MediumFont;"> {{this.$root.selectedDiary.name}}</span>
          </div>
              
              <div class="col-3 py-0 px-1 text-right">
               
                       <template v-if="this.$router.currentRoute.path.indexOf('edit-note') >= 0">
                          <v-btn small :loading="loadingSaveNote" rounded color="#3C87CD" @click="saveNote" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
                       <template >
                          <span style="color:white;text-transform:none;">Save</span> 
                       </template>
                      
                        </v-btn>

                         
                       </template>
                       <template v-else>

                          <template v-if="this.$root.selectedDiary.updated">

                             <v-btn @click="viewDiary" small outlined rounded color="#3C87CD" style="font-size:12px; font-weight:bolder;font-family:MediumFont;">
                     
                          <span style="text-transform:none;">View</span> 
                      
                        </v-btn>

                          </template>

                          <template v-else>

                            <v-btn small :loading="loadingUpdate"  rounded color="#3C87CD" @click="updateDiary()" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
                     
                          <span style="color:white;text-transform:none;">Update</span> 
                      
                        </v-btn>

                          </template>

                        

                         
                       </template>
                  

                  
              </div>
          
            </div>
           <!-- ends -->

                <!-- content session -->
            
            <router-view></router-view>

            <!-- ends -->

       
                 </div>

             <!-- ends -->
    
       
    </div>
</template>
<script>
  import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

export default {
   data () {
      return {
      that:this,
      loadingUpdate:false,
      loadingSaveNote:false
      }
    },
   mounted(){
      this.$root.diaryBoardComponent = this;
   },
   methods:{
     goBack:function(){
        if(this.$root.AddModalIsUp){

      this.$root.AddModalIsUp = false;
           return;


        }
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
     },
     editDiary:function(){
      this.$router.push({ path:'/board/diary/create-diary/edit'})
     },
     viewDiary:function(){
      
      if(this.$root.sideBarComponent){

        this.$root.sideBarComponent.selectedTab = 'channels';

      }
        this.$root.autoOpenDiary = true;
        this.$root.tempDiaryId = this.$route.params.diary_id;
         this.$router.push({ path: '/channels' });

     },
     updateDiary:function(){
        this.loadingUpdate = true;

        axios.get('/update-dairy-'+ this.$route.params.diary_id)
          .then(response => {
             
  
            if(response.status == 200){
         this.loadingUpdate = false;
            this.$root.selectedDiary.updated = true;
           this.showAlert('Updated!','Your changes have been updated','success');

            console.log(response.data)
            }
  
          })
          .catch(error => {

             this.loadingUpdate = false;
              this.showAlert('Oops!','Unable to update, please try again','error');
            
          })
     },
     saveNote:function(){

        this.loadingSaveNote = true;

         let pagesArray = [];

          this.$root.noteContent.pages.forEach((page)=>{
               
               let NewData = {
                 name : page.name,
                 slug: page.slug
               };

              pagesArray.push(NewData);

          });

        

         axios.post( '/update-note-data',{
                note: this.$root.noteContent.note,
                keywords: this.$root.noteContent.keywords,
                pages: pagesArray,
                bot_id: this.$route.params.diary_id
              
                  })
          .then(response => {

             if (response.status == 200) {

             
              this.showAlert('Saved!','Please update diary to effect changes','success');

               this.loadingSaveNote = false;

               
            }

          })
          .catch(error => {
             this.showAlert('Oops!','Unable to update, please try again','error');
              this.loadingSaveNote = false;
          })

    },
     showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
        { 
       title: title,
       timeout: 2000,
       message: message,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'success'){
         iziToast.success(
        { 
       title: title,
       message: message,
        timeout: 2000,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'warning'){

          iziToast.warning(
        { 
       title: title,
       message: message,
        timeout: 2000,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'error'){
         iziToast.error(
        { 
       title: title,
       message: message,
        timeout: 2000,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'question'){

         iziToast.question({
    timeout: null,
    close: false,
    overlay: true,
    displayMode: 'once',
    id: 'question',
    zindex: 999,
     title: title,
       message: message,
    position: 'center',
    buttons: [
        ['<button><b>YES</b></button>', (instance, toast) => {

            axios.post( '/delete-intent-tag-' + this.$root.intentToDelete)
      .then(response => {
      
      if (response.status == 200) {

         let remainingNotes = this.$root.selectedDiary.notes.filter((note)=>{
          return note.note.tag_unique_id != this.$root.intentToDelete;
          })

         
         
         this.$root.selectedDiary.notes = remainingNotes;

          this.$root.LocalStore('user_diary_data_' +  this.$route.params.diary_id + this.$root.username,this.$root.selectedDiary);

           this.$root.intentToDelete = '';

            this.$root.diaryBoardComponent.showAlert('Deleted!','Note was deleted','success');

      }
       
     
      })
      .catch(error => {

      this.$root.diaryBoardComponent.showAlert('Oops!','Unable to delete note','error');
       
    
     }) 
 
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
 
        }, true],
        ['<button>NO</button>', function (instance, toast) {
 
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
 
        }],
    ]
});

       }
     


    },
   }
}
</script>
<style scoped>

</style>