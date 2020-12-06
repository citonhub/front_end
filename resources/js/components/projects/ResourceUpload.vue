<template>
<v-app style="background:transparent; font-family:BodyFont;padding-top:20px;">
 
   <div class="col-12 mt-5 mt-md-1 ml-lg-4">
    <h6>Upload Image</h6>
   </div>

    <div class="col-md-8 col-lg-4 offset-lg-4 offset-md-2 text-center py-1">
    	
    		<div class="row my-2 py-2 px-2" >
    			<div class="col-12 py-2 my-0 px-2" >
    				 <div class="col-12 py-2 my-0 px-2 d-flex pointer" style=" align-items: center;justify-content: center;border:2px dashed #262626; border-radius:8px; height:200px;">
               <div class="pointer">
                <input type="file"  v-if="UploadType == 'Framework'"
                      @change="fileHandler"
                 style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept=".css,.json,.jsonp,.js,.ts,.html,.xml"/>


                 <input type="file"  v-if="UploadType == 'Images'"
                 @change="fileHandler"
                 style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                  accept="image/x-png,image/jpeg,image/jpg"/>

                 <input type="file"  v-if="UploadType == 'Audios'"
                 @change="fileHandler"
                 style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                accept="audio/*"/>

                 <input type="file"  v-if="UploadType == 'Videos'"
                 @change="fileHandler"
                 style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                  accept="video/mp4,video/x-m4v,video/*"/>

                 <input type="file"  v-if="UploadType == 'Files'"
                 @change="fileHandler"
                 style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
              text/plain, application/pdf"/>

                

                  <span style="color:#262626; font-size:12px;">{{ $t('general.upload') }} Image</span>  
               </div>
                   
             </div>

    			</div>
    			
    		</div>
    	
    </div>

</v-app>
  
</template>

<script>
  export default {
    data: () => ({
      UploadType: 'Images'
    }),
    methods:{
        fileHandler: function(){

        }
    }
  }
</script>
<style >
 
  .pointer{
    cursor: pointer;
  }

  .pointer:hover{
    background: white;
  }
</style>
