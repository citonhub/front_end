<template>
     <v-app style="background:transparent; font-family:BodyText;">

        <div class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-0 px-0 my-0 scrollerStyle" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-4 py-0 my-0 text-left px-1" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-close</v-icon></v-btn>
         </div>
         <div class="col-4 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">{{ $t('profile.edit_profile') }}</span>
         </div>
         <div class="col-4 py-1 my-0 text-right px-1"  style="border-bottom:2px solid #4495a2; " >
             <v-btn rounded x-small :loading="loading" @click="saveChanges" :disabled="editFeild" color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;">{{$t('general.save')}}</v-btn>
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0" >
         <v-form class="row my-2 py-2 px-2 ">


              <div class="col-12 py-2 my-0 px-2">
                 <div>
                     <span style="font-size:12px;color:#666666;">{{ $t('profile.profile_images') }}</span>
                 </div>
             
              <v-row>
             <v-col class="col-12 d-flex" style="align-items:center; justify-content:center;" >
                   <v-sheet
              elevation="0"
              height="104"
              width="104"
              :style="'background-image:url('+ this.$root.croppedImage + ');border-radius:50%;cursor:pointer;background-size:contain;'"
              class="py-0 px-0 sheetbackImg mx-auto"
              color="whitesmoke">

               <input type="file" id="settingsimage" ref="settingsimage" 
                @change="crophandler" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept="image/x-png,image/jpeg,image/jpg"/>
               <v-sheet
               
              
               elevation="0"
               height="100%"
               width="100%"
               style="border-radius:50%;"
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
                :placeholder="$t('general.Name') + '...'"
            :label="$t('general.Name')"
             dense
             :rules="nameRule"
             v-model="fullName"
             counter="20"
             color="#4495a2"
            
             ></v-text-field>

             </div>

           

              <div class="col-12 py-2 my-0 px-2">
                  <v-combobox
        
          :items="Categories"
           :label="$t('profile.interests')"
          style="font-size:11px;"
          multiple
          hide-selected
          :rules="Required"
          v-model="Interests"
          :placeholder="$t('general.select') + '...'"
          color="#4495a2"
          small-chips
        ></v-combobox>
             </div>

              <div class="col-12 py-2 my-0 px-2">
                  <v-textarea
                style="font-size:11px;"
                 
             :label="$t('profile.about')"
             dense
            
            :placeholder="$t('profile.about') + '...'"
             :rules="aboutRule"
             v-model="contentInWord"
             counter="300"
             color="#4495a2"
            
             ></v-textarea>
             </div> 




          
        

             <div class="col-12 py-2 my-0 px-2 text-center">
                 
             </div>

             <div class="my-5 py-5" style="margin-top:120px !important;">

             </div>

         
              
          </v-form>
        </div>
         </div>
        </div>
          <v-fade-transition>
              <div  style="position:absolute; width:100%; height:auto: align-items:center;justify-content:center;bottom:15%; z-index:123453566;"  class="d-flex">
             <v-alert
      v-model="Alert"
      dismissible
      close-icon="mdi-delete"
      color="#3E8893"
       width="auto"
       style="font-size:13px;background:#dbedf0;"
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



export default {
    data(){
        return{
           imagepath:'',
            Alert:false,
        loading:false,
        Interests:'',
        userName:'',
        fullName:'',
         Required:[
        v => !!v || 'field is required'
        ],
        nameRule:[
             v => !!v || 'Name is required',
           v => v.length <= 20 || 'Name must be less than 20 characters'
            ],
         UsernameRule:[
           v => !!v || 'Username is required',
           v => v.length < 16 || 'Username must be less than 16 characters'
        ],
        aboutRule:[
          v => !!v || 'About is required',
           v => v.length < 300 || 'About must be less than 300 characters'
        ],
        alertMsg:'',
          wordLimit:400,
           Categories:[
            'Android Development',
            'Web Development',
            'UI/UX',
            'Flutter',
            'React Js',
            'Javascript',
            'Java',
            'Python',
            'VueJs',
            "Node Js",
            "Deno",
            "IOS Development",
            "Artificial Intelligence",
            "Robotics",
            "Data Science",
            "Machine Learning"
           ],
          wordCount:0,
         mycontent:'',
         editFeild:false,
         progressvalue:0,
        
         contentInWord:'',
         
        }
    },
     components: {
   
  },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       this.setValues();
       this.$root.checkIfUserIsLoggedIn('profile');
    },
    methods:{
    setValues: function(){
     this.userName = this.$root.profileDetails.username;

      if(this.$root.profileDetails.Interests != false){
      this.Interests =   this.$root.profileDetails.Interests.split(",");
      }
      
         
      
        
       this.fullName = this.$root.profileDetails.name;
     this.contentInWord = this.$root.profileDetails.about;

       if(this.$root.profileDetails.image_name){
          if(this.$root.imageExist){
              this.$root.croppedImage = '/imgs/profile/'+ this.$root.profileDetails.image_name + '.' + this.$root.profileDetails.image_extension;
          }
         
       }
     
    },
           b64toBlob: function(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
},
  showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

    },
 handleBlob: function(imageString){
  // Split the base64 string in data and contentType
var block = imageString.split(";");
// Get the content type of the image
var contentType = block[0].split(":")[1];// In this case "image/gif"

 var imgType = contentType.slice(6);
 
// get the real base64 content of the file
var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."

// Convert it to a blob to upload
var blob = this.b64toBlob(realData, contentType);

  return [blob,imgType];
 },

      fetchUserDetails: function(){
         if(this.$root.profileDetails == null){

            axios.get('/fetch-profile-'+ this.$route.params.username)
      .then(response => {
      
      if (response.status == 200) {
           
           let userProfile = response.data[1];
           let user = response.data[0];
          let userDetails = {
          'username':user.username,
          'name': user.name,
          'coin': userProfile.coins,
          'image_name': userProfile.image_name,
          'image_extension': userProfile.image_extension,
           'connected': userProfile.connected,
          'about': userProfile.about,
          'Interests': userProfile.interestsArray,
          'connections': userProfile.connections,
          };
            

          
        this.$root.profileDetails = userDetails;
        
       
        
        
     }
       
     
     })
     .catch(error => {
    
     }) 

         }
      },

      reloadProfile: function(){
         
            axios.get( '/fetch-profile-'+ this.$root.username)
      .then(response => {
      
      if (response.status == 200) {
           
           let userProfile = response.data[1];
           let user = response.data[0];
          let userDetails = {
          'username':user.username,
          'name': user.name,
          'coin': userProfile.coins,
          'image_name': userProfile.image_name,
          'image_extension': userProfile.image_extension,
           'connected': userProfile.connected,
          'about': userProfile.about,
          'Interests': userProfile.interestsArray,
          'connections': userProfile.connections,
          };
            

          
        this.$root.profileDetails = userDetails;
        
       
        
        
     }
       
     
     })
     .catch(error => {
    
     }) 

      },  
       goBack() {
          this.fetchUserDetails();
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
          saveChanges: function(){
           this.loading = true;
          
          let formData = new FormData();
         

        if(this.$root.croppedImage != ''){

           if(!this.$root.imageExist){
             var data1 = this.handleBlob(this.$root.croppedImage);
                    formData.append('image',data1[0]);
                       formData.append('image_ext',data1[1]);
           }

       
                      
              

             

        formData.append('full_name',this.fullName);
        formData.append('username',this.userName);
         formData.append('interest',this.Interests);
         formData.append('about',this.contentInWord);

       

       axios.post( '/update-profile',formData,
         {
             headers:{
              'Content-Type':'multipart/form-data'
             },
             onUploadProgress: function(progressEvent){
             this.progressvalue = parseInt(Math.round(
               (progressEvent.loaded / progressEvent.total) * 100
             ))
           }.bind(this)
           })
          .then(response => {
            
           if (response.status == 200) {
                this.loading = false;
                this.reloadProfile();
                 this.goBack();
            }else{
              
            }
            
            
          })
          .catch(error => {
            this.showAlert(5000,'Failed- ' + error);
              this.loading = false;
          })
        }
       
  },
  },
}
</script>
<style>
.editor-boxSpace> * {
    border-bottom:1px solid #4495a2;
    height: auto;
    line-height: 20px !important;
    padding: 5px 2px;
    font-size: 12px;
    color: #262626;
}

.editor p.is-editor-empty:first-child::before {
  content: attr(data-empty-text);
  float: left;
  color: #aaa;
  pointer-events: none;
  height: 0;
  font-style: italic;
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