<template>
     
      <div class="row" style="font-family:BodyFont;background:transparent;" @click.stop="preventClose()">

    <!-- contents  -->
         <div class="col-12 px-md-4 px-3 py-2 pt-0 mt-1 text-left" style="height:auto !important; font-family:BodyFont; background:transparent !important;" >
           
           <div class="row">

               <div class="col-12 py-2 my-0 px-2">
                 <div>
                     <span style="font-size:13px;">Profile Image</span>
                 </div>
             
              <v-row>
             <v-col class="col-12 d-flex" style="align-items:center; justify-content:center;" >
                   <v-sheet
              elevation="0"
              height="120"
              width="120"
              :style="'background-image:url('+ this.$root.croppedImage + ');border-radius:50%;cursor:pointer;background-size:contain;'"
              class="py-0 px-0 sheetbackImg mx-auto"
              color="whitesmoke">
            
               <input type="file" id="settingsimage" ref="settingsimage" 
                 @change="crophandler" 
               style="opacity:0;width:120px; height:120px; overflow:hidden; position:absolute; z-index:10;"
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
                <span  style="font-size:14px;font-family:MediumFont;" class="mb-1">Name</span>  
    				<v-text-field style="font-size:13px;" 
            
             outlined color="#3C87CD"
               :placeholder="$t('general.Name') + '...'"

             dense
             counter="80"
             :rules="nameRule"
             v-model="fullName"
              >
             </v-text-field>
    			</div>

          <div class="col-12 py-2 my-0 px-2">
            <span  style="font-size:14px;font-family:MediumFont;" class="mb-1">Bio</span>  
    				<v-textarea style="font-size:13px;"
             dense 
            placeholder="your bio" 
             :rules="aboutRule"
             counter="250"
             v-model="contentInWord"
              outlined color="#3C87CD"
            ></v-textarea>
    			</div>
           
       
        

        
            <!-- add project button -->
             <div class=" text-center col-12 py-1 mt-4 my-0 px-2">
                 <v-btn @click="saveChanges" :loading="loading"  medium rounded  color="#3C87CD" style="font-size:12px; font-family:MediumFont;font-weight:bolder; color:white;">
               Save
               </v-btn>
             </div>

             <!-- ends -->



             <!-- ends -->

           </div>


           
          
        </div>


     <!-- ends -->


    </div>
    
</template>
<script>
export default {

  data(){
return{
  fullName:'',
  contentInWord:'',
   nameRule:[
             v => !!v || 'Oh!, you miss this.',
           v => v.length <= 80 || 'Name must be less than 80 characters'
            ],
         UsernameRule:[
           v => !!v || 'Oh!, you miss this.',
           v => v.length < 16 || 'Username must be less than 16 characters'
        ],
        aboutRule:[
          v => !!v || 'Oh!, you miss this.',
           v => v.length < 250 || 'About must be less than 250 characters'
        ],
      imagepath:'',
       loading:false,
       progressvalue:0,
       imageExist:false,
}

  },
   mounted(){
      this.$root.showMobileHub = false;
      this.setValues();
    },

  methods:{
    preventClose:function(){

    },
     setValues: function(){
     
       this.fullName = this.$root.authProfile.name;
     this.contentInWord = this.$root.authProfile.about;

       if(this.$root.authProfile.image_name){
        
              this.$root.croppedImage = '/imgs/profile/'+ this.$root.authProfile.image_name + '.' + this.$root.authProfile.image_extension;
         
         
       }
     
    },
  editProfile(){
    axios.post('/update-profile',{
      full_name:this.newName,
      about:this.newBio
    })
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
   goBack() {
         
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
       crophandler:function(event){

          this.imageExist = true;
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
         

        if(this.imageExist){

           if(!this.$root.imageExist){
             var data1 = this.handleBlob(this.$root.croppedImage);
                    formData.append('image',data1[0]);
                       formData.append('image_ext',data1[1]);
           }

        }
                      
              

             

        formData.append('full_name',this.fullName);
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

                // update profile data
                this.$root.profilePageComponent.userData.name = response.data.user.name;
                this.$root.profilePageComponent.userData.about = response.data.user.about;

                 this.$root.profilePageComponent.profileData.image_name = response.data.profile.image_name;
                  this.$root.profilePageComponent.profileData.image_extension = response.data.profile.image_extension;
                   this.$root.profilePageComponent.profileData.background_color = response.data.profile.background_color;

                  // update base user data

                   this.$root.authProfile.name = response.data.user.name;
                   this.$root.authProfile.about = response.data.user.about;
                   this.$root.authProfile.image_name = response.data.profile.image_name;
                   this.$root.authProfile.image_extension =  response.data.profile.image_extension;
                   this.$root.authProfile.background_color =  response.data.profile.background_color;

 

                
                 this.goBack();

              }else{
              
            }
            
            
          })
          .catch(error => {
            this.$root.profilePageComponent.showAlert('Oops!','Unable to save your changes','error');
              this.loading = false;
          })
        
       
  },
  }
 
}
</script>