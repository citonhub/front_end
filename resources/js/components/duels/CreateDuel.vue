<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-4 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-4 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;" v-if="!this.$root.isEditDuel">Create Duel</span>
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;" v-else>Edit Duel</span>
         </div>
         <div class="col-4 py-1 my-0  text-right px-2"  style="border-bottom:2px solid #4495a2;" >
          
             <v-btn v-if="this.$root.isEditDuel && this.$root.editDuelArray.started == 1"  rounded x-small disabled color="#3E8893"
              style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext; text-transform:capitalize;">started</v-btn>

               <v-btn v-if="this.$root.isEditDuel && this.$root.editDuelArray.started == 0" :loading="loadingStart" @click="startDuel" rounded x-small color="#3E8893"
              style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext; text-transform:capitalize;">start</v-btn>

         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0 " >
         <v-form class="row my-2 py-2 px-2 " ref="creatduel" v-model="formstate">
              
                   <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:12px;"
                 placeholder="This is displayed to the public"
            label="Title"
            v-model="title"
            counter="50"
             dense
           
             :rules="titleRule"
             color="#4495a2"
             ></v-text-field>

             </div>
             
               <div class="col-12 py-2 my-0 px-2">
                  <v-select
          v-model="programmingLanguage"
          :items="languages"
          label="Application type"
          style="font-size:13px;"
          
          :disabled="this.$root.editDuelArray.started == 1"
          :rules="requiredRule"
          hide-selected
          placeholder="select..."
          color="#4495a2"
          small-chips
        ></v-select>
             </div>


          


             
          <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:12px;"
                v-model="max_participant"
                 placeholder="participants"
            label="Number of participants"
            :rules="max_participantRule"
           
            type="tel"
             dense
             color="#4495a2"
             ></v-text-field>
          </div>

             <div class="col-12 py-2 my-0 px-2">
                <v-combobox
      v-model="Judges"
      style="font-size:12px;"
      :items="JudgesItems"
      :search-input.sync="searchUsername"
      item-text="username"
          item-value="username"
      hide-selected
      multiple
      :loading="loadingConnection"
       color="#4495a2"
       :rules="requiredRule"
      hint="Friends can be Jugdes"
      label="Judges"
      placeholder="select default Judges"
     
      persistent-hint
      small-chips
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title style="font-size:9px;">
              No results matching "<strong>{{ searchUsername }}</strong>". Press <kbd>enter</kbd> to create a new one
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-combobox>
             </div>


             <div class="col-12 py-2 my-0 px-2">
                 <div>
                     <span style="font-size:12px;color:#666666;">Rules</span>
                 </div>
                
    <v-row>
        <v-col cols=12 >
            <editor-content class="editor-box" :editor="editorRules" :onUpdate="countCharacterRules()" />
        </v-col>
    </v-row>
             </div>

             <div class="col-12 py-2 my-0 px-2">
                

         <v-text-field
                style="font-size:12px;"
                v-model="durationValue"
                 placeholder="set duel duration..."
            label="Duration in hours"
            :rules="durationRule"
            :disabled="this.$root.editDuelArray.started == 1"
            type="tel"
             dense
             color="#4495a2"
             ></v-text-field>

             </div>

            

             <div class="col-12 py-2 my-0 px-2 text-center" v-if="!this.$root.isEditDuel">
                  <v-btn  :loading="loading" @click="createDuel" rounded small color="#3E8893" style="font-size:12px; font-weight:bolder; color:white;">Create</v-btn>
             </div>


              <div class="col-12 py-2 my-0 px-2 text-center" v-else>
                <div class="row py-0 my-0">

                  <div class="col-6 py-0 my-0 text-center">
   <v-btn :loading="loading" @click="createDuel"   rounded small color="#3E8893" style="font-size:12px; font-weight:bolder; color:white;">Save</v-btn>
                  </div>

                   <div class="col-6 py-0 my-0 text-center">
   <v-btn :loading="loadingDelete" @click="deleteDuel"   rounded small color="#3E8893" style="font-size:12px; font-weight:bolder; color:white;">Delete</v-btn>
                  </div>

                </div>
                  
             </div>

             <div class="my-5 py-3 "   style="padding-top:120px !important;">

             </div>

         
              
          </v-form>
        </div>
         </div>
       </div>
       
         <v-fade-transition>
              <div  style="position:absolute; width:100%; height:auto: align-items:center;justify-content:center;bottom:16%; z-index:123453566;"  class="d-flex">
             <v-alert
      v-model="Alert"
      dismissible
      close-icon="mdi-delete"
      color="#3E8893"
       width="auto"
       style="font-size:13px;"
       height="auto"
      border="left"
     
      elevation="2"
      colored-border
     
    >
      {{alertMsg}}
    </v-alert>
        </div>
        </v-fade-transition>
       
        

     </v-app>
</template>
<script>
import { Editor, EditorContent, EditorMenuBar  } from 'tiptap';
import {
        Bold, 
        Underline,
        Image,BulletList,ListItem} from 'tiptap-extensions';

export default {
    data(){
        return{
          loadingStart: false,
          editor: new Editor({
        content: '',
        extensions:[
        
            new Bold(),
            new Underline(),
            new Image(),
       
           
        ],
        
      }),
       editorRules: new Editor({
        content: '',
        extensions:[
        
           
            new ListItem(),
            new BulletList()
           
        ],
        
      }),
      selectedParticipant:['Individuals'],
       titleRule:[
             v => !!v || 'Title is required',
           v => v.length <= 50 || 'Name must be less than 50 characters'
            ],
      requiredRule: [
         v => !!v || 'This feild is required',
        ],

        max_participantRule:[
             v => !!v || 'Max Participant is required',
             v => !isNaN(parseFloat(v)) && v >= 2 && v <= 500 || 'Number has to be between 2 and 500'
        ],
        durationRule:[
            v => !!v || 'duration is required',
             v => !isNaN(parseFloat(v)) && v >= 0.5 && v <= 2500 || 'Duration has to be between 0.5 and 2500 hours'
        ],

        participant: [
            'Individuals',
             'Teams'
        ],
        searchUsername:'',
        JudgesItems:[
          
        ],
        Judges:'',
        preMatchTime:'',
        Alert:false,
        alertMsg:'',
       
        programmingLanguage:[],
      
        languages:[
         'Web app with NodeJs', 'Web app with PHP', 'JAVASCRIPT(Node)', 'PHP','PYTHON(3.8.1)','PYTHON For ML(3.7.7)','PYTHON(2.7.17)','SQL','C',
         'C++','JAVA','C#','ERLANG','COBOL','SCALA','KOTLIN','TYPESCRIPT',
         'FOTRAN','SWIFT','PERL','R','RUBY','HASKELL','LUA','GO','PASCAL','RUST'
        ],
        title:'',
        max_participant:'4',
        durationValue:'2',
        description:'',
        formstate: false,
        loading: false,
        rulesValue:'',
        loadingConnection:false,
        loadingDelete:false,
        }
    },
    components: {
    EditorContent,
    EditorMenuBar,
  },
   mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       this.$root.checkIfUserIsLoggedIn();
       this.setEditValues();
       this.fetchConnected();
    },
    methods:{
    setEditValues: function(){
       if(this.$root.editDuelArray.length != 0){
         this.title = this.$root.editDuelArray.title;
         this.max_participant = this.$root.editDuelArray.max_participant;
         this.durationValue = this.$root.editDuelArray.duration;
         this.selectedParticipant = this.$root.editDuelArray.participant_type_array;
         this.editor.setContent(this.$root.editDuelArray.description);
         this.editorRules.setContent(this.$root.editDuelArray.rules);
         this.programmingLanguage = this.$root.editDuelArray.duel_language_array;
         
       }
    },

        showDuels: function(){
      this.$router.push({ path: '/duel/duels' });
   },
    fetchConnected: function(){

      this.loadingConnection = true;
          
           axios.get('/fetch-connected' )
      .then(response => {
      
      if (response.status == 200) {

        let publicUser ={
          username:"Public"
        };
        
       this.JudgesItems = response.data.data;

        this.JudgesItems.unshift(publicUser);

        
        this.loadingConnection = false;
     }
       
     
     })
     .catch(error => {
       this.loadingConnection = false;
     }) 

        },
    showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

    },
     goBack() {
       this.$root.editDuelArray = [];
        if(this.$root.isEditDuel){

           this.$root.reloadDuelBoard = true;


        }else{
         
        }

         this.$root.isEditDuel = false;
          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
    countCharacterDesc:function(value){
           
       
         this.description = this.editor.getHTML();
   
      },
    countCharacterRules: function(value){
      this.rulesValue = this.editor.getHTML();
    },

    startDuel: function(){
        this.loadingStart = true;
      axios.post('/start-duel',{
                
                duelId: this.$root.editDuelArray.duel_id
                
                  })
          .then(response => {
            
           if (response.status == 200) {
                
                this.$root.editDuelArray.started = 1;
                this.showAlert(5000,'Duel Started');
               this.loadingStart = false;
                

            }else{
             
            }
            
            
          })
          .catch(error => {
            this.showAlert(5000,'Failed- ' + error);
              this.loading = false;
          })

    },
    deleteDuel:function(){
        
        this.loadingDelete = true;
       axios.post('/delete-duel',{
                duelId: this.$root.editDuelArray.duel_id
                  })
          .then(response => {
            
           if (response.status == 200) {
                
               
                 
                if(this.$root.duels.length != 0){

                   let remainingDuels = this.$root.duels.filter((duel)=>{
                     return duel.duel_id != this.$root.editDuelArray.duel_id;
                   });

                  this.$root.duels =  remainingDuels;

                }

                 this.loadingDelete = false;

           this.$router.push({ path: '/duel/duels' });

            }
            
            
          })
          .catch(error => {
            this.showAlert(5000,'Failed- ' + error);
              this.loadingDelete = false;
          })
    
    },
   createDuel: function(){
    
    if(this.$refs.creatduel.validate()){
       this.loading = true;
        if(this.$root.editDuelArray.length == 0){
          var duelId = null;
        }else{
          var duelId = this.$root.editDuelArray.duel_id;
        }
      axios.post('/save-duel',{
                title: this.title,
                duel_languages: this.programmingLanguage,
                description: 'empty',
                participant_type: this.selectedParticipant,
                rules: this.rulesValue,
                max_participant: this.max_participant,
                judges: this.Judges,
                duelId: duelId,
                 duration: this.durationValue
                  })
          .then(response => {
            
           if (response.status == 200) {
                
                    if(response.data != 'edit'){
                        if(this.$root.duels != null){
                     this.$root.duels.unshift(response.data[0]);
                        }

                        if(this.$root.UserDuel != null){
                          this.$root.UserDuel.unshift(response.data[0]);
                         }
                       
                        
                      this.$root.thisDuelConnection(response.data[0]);


                this.$root.reloadDuelBoard = true;
           
          this.$router.push({ path: '/duel/' + response.data[0].duel_id +'/board' + '/user' });

           this.showAlert(5000,'Duel created');
                    }else{
                      this.$root.duels = [];
                    }
                
               
                this.loading = false;


          
                 

            }else{
             
            }
            
            
          })
          .catch(error => {
            this.showAlert(5000,'Failed- ' + error);
              this.loading = false;
          })
    }
   },
   loadImage:function(command){
          command({src: "https://66.media.tumblr.com/dcd3d24b79d78a3ee0f9192246e727f1/tumblr_o00xgqMhPM1qak053o1_400.gif"})
      }
    },
    beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
<style>
.editor-box> * {
    border-bottom:1px solid #4495a2;
    height: auto;
    line-height: 20px !important;
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