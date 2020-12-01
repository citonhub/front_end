<template>
     <v-app style="background:transparent; font-family:BodyText;">
      
      <div class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-0 px-0 my-0" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left px-1" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goToProject"><v-icon>mdi-close</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Add New Project</span>
         </div>
         <div class="col-2 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0" >
         <v-form class="row my-2 py-2 px-2 ">


              <div class="col-12 py-2 my-0 px-2">
                 <div>
                     <span style="font-size:12px;color:#666666;">Project Image</span>
                 </div>
             
              <v-row>
             <v-col class="col-12 d-flex" style="align-items:center; justify-content:center;" >
                   <v-sheet
              
              elevation="0"
              
              height="104"
              width="104"
              :style="'background-image:url('+ this.$root.croppedImage + ');border-radius:5px;cursor:pointer;background-size:contain;'"
              class="py-0 px-0 sheetbackImg mx-auto"
              color="whitesmoke">

               <input type="file" id="settingsimage" ref="settingsimage" 
                @change="crophandler" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept="image/x-png,image/jpeg,image/jpg"/>
               <v-sheet
               
              
               elevation="0"
               height="100%"
               width="100%"
               style="border-radius:5px;"
               class="py-auto px-auto d-flex"
               color="rgba(15, 33, 36, 0.3)">
                  
                 <v-icon class="mx-auto white-text">mdi-camera-plus</v-icon>
                
               </v-sheet>
              </v-sheet>

             </v-col>
             </v-row>
             </div> 
              
                   <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:11px;"
                 placeholder="name..."
            label="Project Name"
             dense
             color="#4495a2"
            
             ></v-text-field>

             </div>

             <div class="col-12 py-2 my-0 px-2">
                 <div>
                     <span style="font-size:12px;color:#666666;">Project Description</span>
                 </div>
             
              <v-row>
             <v-col cols=12 >
              <editor-content class="editor-style" :editor="editor" />
             </v-col>
             </v-row>
             </div> 




           <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:11px;"
                 placeholder="link..."
            label="Project URL"
             dense
            
             color="#4495a2"
            
             ></v-text-field>

             </div>

             
        

             <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn rounded small color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;">Add</v-btn>
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

import { Editor, EditorContent, EditorMenuBar  } from 'tiptap';

export default {
    data(){
        return{
           imagepath:'',
          editor: new Editor({
        content: '',
        extensions:[
        
          
       
           
        ],
        
      }),
        }
    },
     components: {
    EditorContent,
    EditorMenuBar,
  },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = true;
    },
    methods:{
       goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        crophandler:function(event){
           // Reference to the DOM input element
			var input = event.target;
			// Ensure that you have a file before attempting to read it
			if (input.files && input.files[0]) {
				// create a new FileReader to read this image and convert to base64 format
				var reader = new FileReader();
				// Define a callback function to run, when FileReader finishes its job
				reader.onload = (e) => {
					// Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
					// Read image as base64 and set to imageData
                    this.$root.imagepath = e.target.result;
                    this.imagepath = e.target.result;
                  
                    
				};
				// Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
                
            this.$router.push({ path: '/crop-image' });
        }
        
        },
        goToProject: function(){
            this.$router.push({ path: '/profile/projects' });
        }
  },
}
</script>
<style>
.editor-style> * {
    border-bottom:1px solid #4495a2;
    height: auto;
    line-height: 15px;
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