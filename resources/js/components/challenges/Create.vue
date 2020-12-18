<template>
<v-app style="background:transparent;font-family:BodyFont;" class="px-0" >
 
    <div class="col-lg-10 offset-lg-1 py-1 col-md-10 offset-md-1 px-2 d-md-block d-none fixed-top" style="position:sticky;z-index:9999999999;background:#F5F5FB;border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5> <v-btn icon><v-icon>las la-arrow-left</v-icon></v-btn> Create a challenge</h5>
        </div>

         <div class="col-6 py-0 my-0 text-right">
             <v-btn  small rounded  color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;">
             Create
           </v-btn>
        </div>
         
      </div>
   </div>

   <div class=" px-0 col-12 py-1 d-md-none d-block fixed-top" style="position:sticky; background:#F5F5FB;border-bottom:1px solid #c5c5c5;">
     <div class="row">
        <div class="col-8 py-0 my-0">
           <h6 style="font-size:17px;"><v-btn  icon><v-icon>las la-arrow-left</v-icon></v-btn>Create a challenge</h6>
        </div>
         <div class="col-4 py-0 my-0 text-right">
          <v-btn small rounded  color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;">
             Create
           </v-btn>
        </div>
      </div>
   </div>


   <div class="col-lg-8 offset-lg-2 py-1 col-md-10 offset-md-1 px-2 ">

      <div class="row">


           <div class="col-lg-8  py-1 my-0 px-2">
              <v-text-field
                 style="font-size:13px;"
                
            label="Title"
            counter="60"
            persistent-hint
            v-model="title"
             
             
             prepend-inner-icon="las la-trophy"
            :rules="titleRule"
             color="#3C87CD">
             </v-text-field>

             </div>

               <div class=" col-lg-12 py-1 my-0 px-2">

                    <div class="col-lg-8 px-0">

                          <v-textarea
                 style="font-size:14px;"
                 filled
                 height="80px"
                 counter="100"
                label="Summary"
                 placeholder="What is this challenge about?"
                >

                </v-textarea>

                    </div>
                
              
             </div>

             <div class="col-12 py-1 my-0 mt-n3 px-2 pl-3">
             <span style="font-size:14px;">Cover Image</span>
             <span style="font-size:12px; color:grey;" class="mx-1">(give this challenge an identity)</span><br>

               <v-sheet
              elevation="0"
              height="100"
              width="120"
              :style="'background-image:url('+ imageUrl + ');border-radius:10px;cursor:pointer;background-size:contain;'"
              class="py-0  px-0 mt-2 sheetbackImg"
              color="whitesmoke">

               <input type="file" id="settingsimage" ref="settingsimage" 
                @change="crophandler" style="opacity:0;width:100%; height:10px; overflow:hidden; position:absolute; z-index:10;"
                 accept="image/x-png,image/jpeg,image/jpg"/>
               <v-sheet
               
              
               elevation="0"
               height="100%"
               width="100%"
               style="border-radius:10px;background:#c5c5c5;"
               class="py-auto px-auto d-flex"
               >
                  
                 <v-icon class="mx-auto white-text">mdi-camera-plus</v-icon>
                
               </v-sheet>
              </v-sheet>
    
                <div style="font-size:13px;color:grey;" class="mt-3">Or select from defaults</div>

               <div class="d-flex flex-row mt-3" >
                       <div    class="mr-2"
    style="border-radius:10px;height:60px;width:60px;background-color:#c5c5c5;background-image:url(/imgs/imgproj3.jpeg);background-size: cover;
  background-repeat: no-repeat; border:1px solid #c5c5c5;">
  </div> 

    <div    class="mr-2"
    style="border-radius:10px;height:60px;width:60px;background-color:#c5c5c5;background-image:url(/imgs/imgproj2.jpeg);background-size: cover;
  background-repeat: no-repeat;border:1px solid #c5c5c5;">
  </div> 

     <div    class="mr-2"
    style="border-radius:10px;height:60px;width:60px;background-color:#c5c5c5;background-image:url(/imgs/imgproj1.jpeg);background-size: cover;
  background-repeat: no-repeat; border:1px solid #c5c5c5;">
  </div> 
              </div>

              </div>

            
        <div class="col-lg-12 py-1 my-2 px-2 text-left">

                <span style="font-size:14px; font-family:BodyFont;">Description</span>
             
             </div>

             <div class="col-lg-12 py-1 my-2 px-2 text-left">

              <v-press-editor :placeholder="'Describe this challenge, its aim and objective'"></v-press-editor>
             
             </div>
             

            <div class="col-lg-12 py-1 my-2 mb-0 px-2 text-left">

                <span style="font-size:14px; font-family:BodyFont;">Who will Judge?</span>
             
             </div>

             <div class="col-lg-12 py-0 my-0 px-2 text-left">

               <v-chip
        outlined
       class="d-inline-block mr-1"
       style="font-size:13px;"
        color="#3C87CD"
    >Everyone</v-chip>

     <v-chip
        
       class="d-inline-block mr-1"
       style="font-size:13px;color:white;"
        color="#3C87CD"
    >Custom Judge</v-chip>
             
             </div>

              <div class=" col-lg-12 py-1 my-0 px-2">

                    <div class="col-lg-8 px-0">

                         <v-combobox
                 style="font-size:13px;"
              dense
              label="Add Judges"
            counter="20"
            
            hint="Type their username to add"
            persistent-hint
            chips
            multiple
            
             color="#3C87CD">

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
             
              {{ data.item.name }}
            </v-chip>

              </template>
             </v-combobox>

                    </div>
                
              
             </div>
       
        <div class="col-lg-12 py-1 my-2 mb-0 px-2 text-left">

                <span style="font-size:14px; font-family:BodyFont;">Set Duration</span>
             
             </div>

           <div class="col-12 py-2 my-0 px-2">
                
               <div class="row py-0 my-0">
                  

                <div class="col-6 text-center py-0 my-0">

                  <v-text-field
                style="font-size:13px;"
                v-model="durationValueDay"
                :placeholder="$t('duels.days') + '...'"
            :label="$t('duels.days')"
            :rules="durationRule"
            
            type="tel"
             dense
             color="#3C87CD"
             ></v-text-field>

                </div>


                 <div class="col-6 text-center py-0 my-0">

                  <v-text-field
                style="font-size:13px;"
                v-model="durationValueHr"
                :placeholder="$t('duels.hours') + '...'"
            :label="$t('duels.hours')"
            :rules="durationRule2"
           
            type="tel"
             dense
             color="#3C87CD"
             ></v-text-field>

                </div>

               </div>
         

             </div>

          <div class="col-12">

          </div>
      
       
      </div>

  </div>

</v-app>
  
</template>
<script>


 const VPressEditor = () => import(
    /* webpackChunkName: "VPressEditor?v=0.12" */ './Editor.vue'
  );



export default {
    data() {
      return {
         text: '',
         selectJudgeType:0,
         switch2:true,
         switch1:false,
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
             v => !isNaN(parseFloat(v)) && v >= 0 && v <= 1000 || 'Days has to be between 0 and 1000 hours'
        ],
        durationRule2:[
            v => !!v || 'duration is required',
             v => !isNaN(parseFloat(v)) && v >= 0 && v <= 23.9 || 'Duration has to be between 0 and 23.9 hours'
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
        durationValueDay:0,
        durationValueHr:2,
        input:''
      };
    },
    components:{
      VPressEditor
    }
  };
</script>
<style scoped>

</style>