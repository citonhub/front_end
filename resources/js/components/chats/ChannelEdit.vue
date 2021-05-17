<template>
  <v-app style="background:transparent;">
   <div class="col-12 py-1 my-0 ">
    <div class="row">
        <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 py-0 px-1">
              <v-btn icon @click="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-0">
             <span style="font-size:14px; font-family:MediumFont;">Edit Channel</span>
          </div>
              
              <div class="col-2 py-0 mr-1 text-right">
                 
              </div>
          
        </div>



         <!-- edit space form -->
      <div class="col-12 py-1 my-0" >
         <v-form class="row my-2 py-2 px-2 " style="font-family:BodyFont;">


              <div class="col-12 py-2 my-0 px-2">
                 <div>
                     <span style="font-size:13px;"> Channel profile image</span>
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

               <input type="file" 
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
                style="font-size:13px;"
                 :placeholder="$t('general.Name') + '...'"
            :label="$t('general.Name')"
            :rules="Rule"
            counter="80"
             dense
              v-model="spaceName"
             color="#3C87CD"
            
             ></v-text-field>

             </div>

             

             <div class="col-12 py-2 my-0 px-2">
                   <v-textarea
                style="font-size:13px;"
                 
            :label="$t('general.description')"
             dense
            
            :placeholder="$t('general.description') + '...'"
             :rules="DescriptionRule"
             v-model="contentInWord"
             counter="400"
             color="#3C87CD"
            
             ></v-textarea>
             </div> 




             
        

             <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn rounded small :loading="loading" color="#3C87CD" style="font-size:11px; font-weight:bolder; color:white;font-family: MediumFont;" @click="saveChanges">{{$t('general.save')}}</v-btn>
             </div>

            
              
          </v-form>
        </div>

       <!-- ends -->

       
        
     

    </div>
   </div>

  </v-app>
   
</template>
<script>



export default {
    data(){
        return{
           imagepath:'',
        Alert:false,
        loading:false,
        alertMsg:'',
          wordLimit:200,
          spaceName:this.$root.selectedSpace.name,
           Rule:[
             v => !!v || 'Name is required',
           v => v.length < 80 || 'Name must be less than 80 characters'
         ],
         DescriptionRule:[
              v => !!v || 'Description is required',
           v => v.length < 400 || 'Description must be less than 400 characters'
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

        this.$root.componentIsLoading = false;
     
       if(this.$root.selectedSpace.description == null){
          this.contentInWord = '';
      }else{
     this.contentInWord = this.$root.selectedSpace.description;
        }

      
       
    },
    methods:{
        goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

             this.$root.chatComponent.innerSideBarContent = '';
             
              this.$root.fromChannelEdit = false;

            this.$root.chatComponent.innerSideBarContent = 'channel_info';
                
           
        }, 
    
      focusedText:function(){
      
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
                
                this.$root.fromChannelEdit = true;

             this.$router.push({ path: '/channels/' + this.$root.selectedSpace.space_id +'/crop-image' });
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

    saveChanges: function(){
           this.loading = true;
          
          let formData = new FormData();
         

        if(this.$root.croppedImage != ''){

        var data1 = this.handleBlob(this.$root.croppedImage);
                    formData.append('image',data1[0]);
                       formData.append('image_ext',data1[1]);
                      
              
        }
             

        formData.append('name',this.spaceName);
        formData.append('description',this.contentInWord);
        formData.append('space_id',this.$route.params.spaceId);

       axios.post('/update-space',formData,
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
                this.$root.croppedImage= '';
                   this.$root.chatComponent.fetchSpaceInfo();
                 this.goBack();
            }else{
              
            }
            
            
          })
          .catch(error => {
             this.$root.chatComponent.showAlert('Oops','Something went wrong,please try again','error');
              this.loading = false;
          })
        
       
  },
}
}
</script>
<style scoped>

</style>