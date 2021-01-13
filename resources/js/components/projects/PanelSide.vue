<template>
    <div class="row">

             <div class="col-12 pt-md-4 pt-0 px-0  fixed-top application application--light" style="position:sticky;background:white; top:0%;" data-app="true" >
                <div class="row">
                  <div class="col-6 d-flex py-0 " style="align-items:center;">
                     <template  >
                    <v-btn @click.stop="closePanel()"
                    v-if="this.$router.currentRoute.path.indexOf('editor') >= 0 || this.$router.currentRoute.path.indexOf('panel-loader') >= 0" class="d-inline-block d-lg-none" icon><v-icon style="font-size:20px;">las la-times</v-icon> </v-btn>
                     </template>
                     
                     <v-btn @click="openGuide" class="ml-1" x-small color="#3C87CD"> <span style="font-family:HeaderFont;font-size:11px; text-transform:capitalize; color:white;" >Guide</span> </v-btn>
                  </div>

                  <div class="col-6 d-flex flex-row-reverse  py-0" style="align-items:center;">
                       
                      <v-btn class="mr-2" id="activator" @click="ShowMore" x-small color="#3C87CD"> <span style="font-family:HeaderFont;font-size:11px; text-transform:capitalize; color:white;" >more</span>
                         
                           <!-- more option -->

                   <v-menu
      absolute
      :activator="'#activator'"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->

                       </v-btn>
                       
                       
                  </div>

                </div>
              </div>

               <template>
               
                

                  <template v-if="that.$root.projectData.project.is_web">

                        <div class="col-12 py-0">
               <h6 style="font-size:15px; color:gray;">Front End</h6>
              </div>

               <div  class="col-12 py-1 " style="cursor:pointer;" @click.stop="toggleViews ? toggleViews = false : toggleViews = true">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0">
                    <i class="las la-folder" style="font-size:24px;"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:13px;font-family:MediumFont;">Views</span>
                  </div>
                  <div class="col-2 d-flex  py-0 my-0" style="align-items:center;justify-content:center;">
                       <v-btn icon small @click.stop="addNewFile('front_end')"><v-icon style="font-size:20px;">las la-plus-circle</v-icon> </v-btn>
                  </div>
               </div>
              </div>
              
              <template v-if="toggleViews">

                <v-card tile flat @click.stop="showEditor(file,'front-end')" :color="that.$root.selectedFileId == file.id ? '#f2f2f2' : ''" class="col-12 py-1 codeFile" v-for="(file,index) in this.views" :key="index + 'views'">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left d-flex py-0 my-0" style="align-items:center;">
                    <i class="lab la-html5"  v-if="file.language_type == 'HTML'" style="font-size:20px; color:#e34f26;"></i>
                     <i class="mdi mdi-vuejs"  v-if="file.language_type == 'VUE'" style="font-size:20px; color:#41B883;"></i>
                      <i class="mdi-code-not-equal-variant"  v-if="file.language_type == 'MD'" style="font-size:20px; color:#333333;"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:12px;">{{file.file_name}}.{{languageExtensions(file.language_type)}}</span>
                  </div>
                  <div class="col-2  py-0 my-0">

                  </div>
               </div>
              </v-card>

                
              </template>
              

               <div  class="col-12 py-1 "  style="cursor:pointer;" @click.stop="toggleStyles ? toggleStyles = false : toggleStyles = true">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0">
                    <i class="las la-folder" style="font-size:24px;"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:13px;font-family:MediumFont;">Styles</span>
                  </div>
                   <div class="col-2 d-flex  py-0 my-0" style="align-items:center;justify-content:center;">
                       <v-btn icon small  @click.stop="addNewFile('front_end')"><v-icon style="font-size:20px;">las la-plus-circle</v-icon> </v-btn>
                  </div>
               </div>
              </div>

              <template v-if="toggleStyles">

                 <v-card tile flat @click.stop="showEditor(file,'front-end')"  class="col-12 py-1 codeFile" :color="that.$root.selectedFileId == file.id ? '#f2f2f2' : ''" v-for="(file,index) in this.styles" :key="index + 'style'">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0 d-flex" style="align-items:center;">
                    <i class="lab la-css3" style="font-size:20px; color:#0066ff;"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:12px;">{{file.file_name}}.{{languageExtensions(file.language_type)}}</span>
                  </div>
                  <div class="col-2  py-0 my-0">

                  </div>
               </div>
              </v-card>

              </template>
              

               <div  class="col-12 py-1 " style="cursor:pointer;" @click.stop="toggleScripts ? toggleScripts = false : toggleScripts = true">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0">
                    <i class="las la-folder" style="font-size:24px;"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:13px;font-family:MediumFont;">Scripts</span>
                  </div>
                   <div class="col-2 d-flex  py-0 my-0" style="align-items:center;justify-content:center;">
                       <v-btn icon small  @click.stop="addNewFile('front_end')"><v-icon style="font-size:20px;">las la-plus-circle</v-icon> </v-btn>
                  </div>
               </div>
              </div>
              
              <template v-if="toggleScripts">

                 <v-card tile flat @click.stop="showEditor(file,'front-end')" :color="that.$root.selectedFileId == file.id ? '#f2f2f2' : ''"  class="col-12 py-1 codeFile"   v-for="(file,index) in this.scripts" :key="index + 'script'">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0">
                    <i class="lab la-js-square" style="font-size:20px; color:#bca510 ;" v-if="file.language_type == 'JAVASCRIPT'"></i>
                     <i class="lab la-js-square" style="font-size:20px; color:#0066ff ;" v-if="file.language_type == 'TYPESCRIPT'"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:12px;">{{file.file_name}}.{{languageExtensions(file.language_type)}}</span>
                  </div>
                  <div class="col-2  py-0 my-0">

                  </div>
               </div>
              </v-card>


              </template>
              
              <div  class="col-12 py-1 " style="cursor:pointer;" @click.stop="toggleFrameworks ? toggleFrameworks = false : toggleFrameworks = true">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0">
                    <i class="las la-folder" style="font-size:24px;"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:13px;font-family:MediumFont;">Framework</span>
                  </div>
                   <div class="col-2 d-flex  py-0 my-0" style="align-items:center;justify-content:center;">
                       <v-btn icon small @click.stop="uploadResources('Framework')"><v-icon style="font-size:20px;">las la-plus-circle</v-icon> </v-btn>
                  </div>
               </div>
              </div>

               <template v-if="toggleFrameworks">

                 <div v-for="(file,index) in that.$root.projectData.project_files.resources" :key="'framework' + index">

                  <v-card tile flat  class="col-12 py-1 codeFile"  v-if="file.type == 'Framework'">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0 d-flex" style="align-items:center;">
                    <i class="las la-file-code" style="font-size:20px; color:#3C87CD;"></i>
                  </div>
                  <div class="col-9 d-flex py-0 my-0" style="align-items:center;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">
                   <span style="font-size:12px;">{{file.file_full_name}}</span>
                  </div>
                  <div class="col-1  py-0 my-0">

                  </div>
               </div>
              </v-card>

               </div>
                 
               </template>
               
               
              

               <div  class="col-12 py-1 " style="cursor:pointer;" @click.stop="toggleImages ? toggleImages = false : toggleImages = true">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0">
                    <i class="las la-folder" style="font-size:24px;"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:13px;font-family:MediumFont;">Images</span>
                  </div>
                   <div class="col-2 d-flex  py-0 my-0" style="align-items:center;justify-content:center;">
                       <v-btn icon small @click.stop="uploadResources('Images')"><v-icon style="font-size:20px;">las la-plus-circle</v-icon> </v-btn>
                  </div>
               </div>
              </div>

               <template v-if="toggleImages">

                   <div v-for="(file,index) in that.$root.projectData.project_files.resources" :key="'image' + index">

                  <v-card tile flat  class="col-12 py-1 codeFile" v-if="file.type == 'Images'">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0 d-flex" style="align-items:center;">
                    <i class="las la-file-image" style="font-size:20px; color:#3C87CD;"></i>
                  </div>
                  <div class="col-9 d-flex py-0 my-0" style="align-items:center;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">
                   <span style="font-size:12px;">{{file.file_full_name}}</span>
                  </div>
                  <div class="col-1  py-0 my-0">

                  </div>
               </div>
              </v-card>

               </div>

               </template>
              
           
               <div  class="col-12 py-1 " style="cursor:pointer;" @click.stop="toggleAudios ? toggleAudios = false : toggleAudios = true">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0">
                    <i class="las la-folder" style="font-size:24px;"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:13px;font-family:MediumFont;">Audios</span>
                  </div>
                   <div class="col-2 d-flex  py-0 my-0" style="align-items:center;justify-content:center;">
                       <v-btn icon small @click.stop="uploadResources('Audios')"><v-icon style="font-size:20px;">las la-plus-circle</v-icon> </v-btn>
                  </div>
               </div>
              </div>
               
               <template v-if="toggleAudios">

                  <div v-for="(file,index) in that.$root.projectData.project_files.resources" :key="'audio' + index">

                  <v-card tile flat  class="col-12 py-1 codeFile" v-if="file.type == 'Audios'">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0 d-flex" style="align-items:center;">
                     <i class="las la-file-audio" style="font-size:20px; color:#3C87CD;"></i>
                  </div>
                  <div class="col-9 d-flex py-0 my-0" style="align-items:center;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">
                   <span style="font-size:12px;">{{file.file_full_name}}</span>
                  </div>
                  <div class="col-1  py-0 my-0">

                  </div>
               </div>
              </v-card>

               </div>

               </template>
              

            
               <div  class="col-12 py-1 " style="cursor:pointer;" @click.stop="toggleVideos ? toggleVideos = false : toggleVideos = true">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0">
                    <i class="las la-folder" style="font-size:24px;"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:13px;font-family:MediumFont;">Videos</span>
                  </div>
                   <div class="col-2 d-flex  py-0 my-0" style="align-items:center;justify-content:center;">
                       <v-btn icon small @click.stop="uploadResources('Videos')"><v-icon style="font-size:20px;">las la-plus-circle</v-icon> </v-btn>
                  </div>
               </div>
              </div>
                   
                   <template v-if="toggleVideos">

                          <div v-for="(file,index) in that.$root.projectData.project_files.resources" :key="'video' + index">

                  <v-card tile flat  class="col-12 py-1 codeFile" v-if="file.type == 'Videos'">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0 d-flex" style="align-items:center;">
                       <i class="las la-file-video" style="font-size:20px; color:#3C87CD;"></i>
                  </div>
                  <div class="col-9 d-flex py-0 my-0" style="align-items:center;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">
                   <span style="font-size:12px;">{{file.file_full_name}}</span>
                  </div>
                  <div class="col-1  py-0 my-0">

                  </div>
               </div>
              </v-card>

               </div>

             
                   </template>

             

               <div  class="col-12 py-1 " style="cursor:pointer;" @click.stop="toggleFiles ? toggleFiles = false : toggleFiles = true">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0">
                    <i class="las la-folder" style="font-size:24px;"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:13px;font-family:MediumFont;">Files</span>
                  </div>
                   <div class="col-2 d-flex  py-0 my-0" style="align-items:center;justify-content:center;">
                       <v-btn icon small @click.stop="uploadResources('Files')"><v-icon style="font-size:20px;">las la-plus-circle</v-icon> </v-btn>
                  </div>
               </div>
              </div>

              <template v-if="toggleFiles">

                <div v-for="(file,index) in that.$root.projectData.project_files.resources" :key="'files' + index">

                  <v-card tile flat  class="col-12 py-1 codeFile" v-if="file.type == 'Files'">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0 d-flex" style="align-items:center;">
                        <i class="las la-file" style="font-size:20px; color:#3C87CD;"></i>
                  </div>
                  <div class="col-9 d-flex py-0 my-0" style="align-items:center;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">
                   <span style="font-size:12px;">{{file.file_full_name}}</span>
                  </div>
                  <div class="col-1  py-0 my-0">

                  </div>
               </div>
              </v-card>

               </div>

              </template>

               


              <div class="col-12 py-0 mt-2">
               <h6 style="font-size:15px; color:gray;">Back End</h6>
              </div>

               <div  class="col-12 py-1 " style="cursor:pointer;" @click.stop="toggleControllers ? toggleControllers = false : toggleControllers = true">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0">
                    <i class="las la-folder" style="font-size:24px;"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:13px;font-family:MediumFont;">Controllers</span>
                  </div>
                  <div class="col-2 d-flex  py-0 my-0" style="align-items:center;justify-content:center;">
                       <v-btn icon small  @click.stop="addNewFile('back_end')"><v-icon style="font-size:20px;">las la-plus-circle</v-icon> </v-btn>
                  </div>
               </div>
              </div>
              
              <template v-if="toggleControllers">

                  <v-card tile flat  class="col-12 py-1 codeFile" @click.stop="showEditor(file,'back-end')"  v-for="(file,index) in controllers"
                :key="index + 'controller'"
               >
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0 d-flex" style="align-items:center;">
                    <i :class="getProjectLanguage(that.$root.projectData.project_panel)" :style="'font-size:20px; color:' + getProjectLanguageColor(that.$root.projectData.project_panel) + ';'"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:12px;">{{file.file_name}}.{{languageExtensions(file.language_type)}}</span>
                  </div>
                  <div class="col-2  py-0 my-0">

                  </div>
               </div>
              </v-card>

              

              </template>
             

               <div  class="col-12 py-1 " style="cursor:pointer;" @click.stop="toggleRoutes ? toggleRoutes = false : toggleRoutes = true">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0">
                    <i class="las la-sitemap" style="font-size:24px;"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:13px;font-family:MediumFont;">Web routes</span>
                  </div>
                   <div class="col-2 d-flex  py-0 my-0" style="align-items:center;justify-content:center;">
                       <v-btn icon small @click.stop="addRoute()"><v-icon style="font-size:20px;">las la-plus-circle</v-icon> </v-btn>
                  </div>
               </div>
              </div>


            <template v-if="toggleRoutes">

               <v-card tile flat  class="col-12 py-1 codeFile"  v-for="(route,index) in that.$root.projectData.project_files.routes"
                :key="index + 'route'"
               >
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0 d-flex" style="align-items:center;">
                    <i class="las la-sitemap" style="font-size:20px;"></i>
                  </div>
                  <div class="col-6 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:12px;">{{ route.path }}</span>
                  </div>
                  <div class="col-4  py-0 my-0 text-right">
                       <span style="font-size:12px;">{{ route.route_type }}</span>
                  </div>
               </div>
              </v-card>


            </template>
             
               <div  class="col-12 py-1 " style="cursor:pointer;" @click.stop="toggleDatabases ? toggleDatabases = false : toggleDatabases = true">
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0">
                    <i class="las la-database" style="font-size:24px;"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:13px;font-family:MediumFont;">Database</span>
                  </div>
                   <div class="col-2 d-flex  py-0 my-0" style="align-items:center;justify-content:center;">
                       <v-btn icon small @click.stop="createDb()"><v-icon style="font-size:20px;">las la-plus-circle</v-icon> </v-btn>
                  </div>
               </div>
              </div>
               
               <template v-if="toggleDatabases">

                   <v-card tile flat  class="col-12 py-1 codeFile"  v-for="(table,index) in that.$root.projectData.project_files.dbtables"
                :key="index + 'database'"
               >
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0 d-flex" style="align-items:center;">
                    <i class="las la-database" style="font-size:20px;"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:12px;">{{table.name}}.tb</span>
                  </div>
                  <div class="col-2  py-0 my-0">

                  </div>
               </div>
              </v-card>

               </template>

              

                  </template>
                 


                 

                  <template v-else> 
                 <div class="col-12 py-0">
               <h6 style="font-size:15px; color:gray;">Code files</h6>
              </div>

               <div  class="col-12 py-1 "  style="cursor:pointer;" @click.stop="toggleCodeFiles ? toggleCodeFiles = false : toggleCodeFiles = true" >
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0">
                    <i class="las la-folder" style="font-size:24px;"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:13px;font-family:MediumFont;">Files</span>
                  </div>
                  <div class="col-2 d-flex  py-0 my-0" style="align-items:center;justify-content:center;">
                       <v-btn icon small @click.stop="addNewFile('code_files')"><v-icon style="font-size:20px;">las la-plus-circle</v-icon> </v-btn>
                  </div>
               </div>
              </div>

              <template v-if="toggleCodeFiles">

                 <v-card tile  flat :color="that.$root.selectedFileId == file.id ? '#f2f2f2' : ''"  class="col-12 py-1 codeFile"  @click.stop="showEditor(file,'code_file')" v-for="(file,index) in that.$root.projectData.project_files.code_files"
                :key="index"
               >
               <div class="row py-0 my-0">
                  <div class="col-2 text-left py-0 my-0 d-flex" style="align-items:center;">
                    <i :class="getProjectLanguage(that.$root.projectData.project_panel)" :style="'font-size:20px; color:' + getProjectLanguageColor(that.$root.projectData.project_panel) + ';'"></i>
                  </div>
                  <div class="col-8 d-flex py-0 my-0" style="align-items:center;">
                   <span style="font-size:12px;">{{file.file_name}}.{{languageExtensions(file.language_type)}}</span>
                  </div>
                  <div class="col-2  py-0 my-0">

                  </div>
               </div>
              </v-card>

              </template>

              


                  </template>

                

               </template>

              

             
           </div>
</template>

<script>

  const MoreOptions = () => import(
    /* webpackChunkName: "MoreOptionsPanel" */ './MoreOptions.vue'
  );


export default {
   data () {
      return {
        that:this,
          languageIcon:[
               {
                  name:'Web app NodeJs',
                  icon:'lab la-node-js',
                  id: 'NodeJs',
               
               },
               {
                  name:'Web app PHP',
                  icon:'lab la-php',
                  id:'PHP'
               
               },
               {
                  name:'JavaScript',
                  icon:'lab la-js-square',
                  id:26,
                  color:'#e6b800'
               
               },
               {
                  name:'PHP',
                  icon:'lab la-php',
                  id: 35,
                  color:'#474A8A'
               
               },
               {
                  name:'Python 3.81',
                  icon:'lab la-python',
                  id: 39,
                  color:'#306998'
               
               },
               {
                  name:'Python for ML(3.7.7)',
                  icon:'lab la-python',
                  id: 100,
                  color:'#306998'
               
               },
               {
                  name:'C',
                  icon:'mdi mdi-language-c',
                  id: 4,
                  color:'#333333'
               
               },
               {
                  name:'C++',
                  icon:'mdi mdi-language-cpp',
                  id:11,
                  color:'#333333'
               
               },
               {
                  name:'Java',
                  icon:'lab la-java',
                  id: 25,
                  color:'#5382a1'
               
               },
               {
                  name:'C#',
                  icon:'mdi mdi-language-csharp',
                  id: 13,
                  color:'#333333'
               
               },
               {
                  name:'Erlang',
                  icon:'lab la-erlang',
                  id: 18,
                  color:'#333333'
               
               },
               {
                  name:'Kotlin',
                  icon:'mdi mdi-language-kotlin',
                  id: 27,
                  color:'#333333'
               
               },
               {
                  name:'Fortran',
                  icon:'mdi mdi-language-fortran',
                  id:21,
                  color:'#333333'
               
               },
               {
                  name:'Perl',
                  icon:'las la-code',
                  id: 34,
                  color:'#333333'
               
               },
               {
                  name:'R',
                  icon:'mdi mdi-language-r',
                  id:40,
                  color:'#333333'
               
               },
               {
                  name:'Ruby',
                  icon:'mdi mdi-language-ruby',
                  id: 41,
                  color:'#333333'
               
               },
               {
                  name:'Go',
                  icon:'mdi mdi-language-go',
                  id: 22,
                  color:'#29BEB0'
               
               },
               {
                  name:'Hashkell',
                  icon:'mdi mdi-language-haskell',
                  id: 24,
                  color:'#293745'
               
               },
               {
                  name:'Lua',
                  icon:'mdi mdi-language-lua',
                  id: 28,
                  color:'#333333'
               
               },
               {
                  name:'Pascal',
                  icon:'las la-code',
                  id:33,
                  color:'#333333'
               
               },
               {
                  name:'TypeScript',
                  icon:'mdi mdi-language-typescript',
                  id: 46,
                  color:'#0066ff'
               
               },
               {
                  name:'Rust',
                  icon:'las la-code',
                  id:42,
                  color:'#333333'
               
               },
               {
                  name:'Swift',
                  icon:'lab la-swift',
                  id:45,
                   color:'#333333'

               
               },
                {
                  name:'Scala',
                  icon:'las la-code',
                  id: 43,
                  color:'#333333'
               
               },

            ],
            that:this,
          views:[],
          styles:[],
          scripts:[],
          controllers:[],
          toggleViews:true,
          toggleStyles:true,
          toggleScripts:true,
        toggleFrameworks:true,
         toggleImages:true,
         toggleAudios:true,
         toggleVideos:true,
         toggleFiles:true,
         toggleControllers:true,
         toggleRoutes:true,
          toggleDatabases:true,
        toggleCodeFiles:true
      }
    },
    components:{
       MoreOptions
    },
    mounted:function(){
      this.$root.editorSideComponent = this;
        this.separateCodeFiles();
    },
  methods:{
     ShowMore:function(){
       this.$root.projectPanelComponent.showMoreOptions = true;
     },
    addRoute() {
         this.$root.projectPanelComponent.showSideBar = false
      this.$router.push({ path: '/board/projects/panel/'+ this.$route.params.project_slug + '/web-route'});
    },
     addNewFile(type) {

          this.$root.projectPanelComponent.showSideBar = false

      this.$router.push({ path: '/board/projects/panel/'+ this.$route.params.project_slug + '/add-new-file/' + type});
    },
    createDb() {
         this.$root.projectPanelComponent.showSideBar = false

      this.$router.push({ path: '/board/projects/panel/'+ this.$route.params.project_slug + '/create-db-table'});
    },
     uploadResources(type) {
          this.$root.projectPanelComponent.showSideBar = false

      this.$router.push({ path: '/board/projects/panel/'+ this.$route.params.project_slug + '/resource-upload/' + type });
    },
     showEditor: function(codeBox,catType){

        this.$root.projectPanelComponent.showSideBar = false
   
       this.$root.SelectedCodeBox = codeBox;
       var thiscodebox = this.$root.codeEditorArray.filter((code)=>{
         return code.id == codeBox.id;
       });

       this.$root.codeEditorArray.map((codeFile)=>{
          
          if(codeFile.id == codeBox.id){
           
            codeFile.content = codeBox.content;
            
           }

       });

       if(thiscodebox.length == 0){
           this.$root.codeEditorArray.unshift(codeBox);
       }
       this.$root.selectedFileCatType = catType;
       this.$root.EditorLanguage = codeBox.language_type;
       this.$root.codeEditorContent = codeBox.content;
       this.$root.selectedFileId = codeBox.id;

        if(this.$router.currentRoute.path.indexOf('editor') <= 0){
          this.$router.push({ path: '/board/projects/panel/'+ this.$route.params.project_slug + '/editor'});
        }else{
           this.$root.codeEditorComponent.detectchange(this.$root.EditorLanguage);
           this.$root.codeEditorComponent.code = this.$root.codeEditorContent;
        }
    
  
   },
    separateCodeFiles:function(){

       if(this.$root.projectData.project.is_web){

         this.views = this.$root.projectData.project_files.code_files.filter((file)=>{
           return file.language_type == 'HTML' || file.language_type == 'VUE' || file.language_type == 'MD';
         });

         this.styles = this.$root.projectData.project_files.code_files.filter((file)=>{
           return file.language_type == 'CSS';
         });

         this.scripts = this.$root.projectData.project_files.code_files.filter((file)=>{
           return file.language_type == 'JAVASCRIPT' || file.language_type == 'TYPESCRIPT';
         });

          this.controllers = this.$root.projectData.project_files.code_files.filter((file)=>{
           return file.type == "back_end";
         });

       }

    },
      getProjectLanguage:function(panel){
        let iconData =  this.languageIcon.filter((icon)=>{
            return icon.id == panel.panel_language
          });
          
           if(iconData[0]){
             return iconData[0].icon
           }else{
             return 'lab la-html5'
           }
        
      },
      getProjectLanguageColor:function(panel){
        let iconData =  this.languageIcon.filter((icon)=>{
            return icon.id == panel.panel_language
          });
          
           if(iconData[0]){
             return iconData[0].color
           }else{
             return '#333333'
           }
        
      },
       languageExtensions: function(language){

           if(language == 'HTML'){
             return 'html';
         }
         if(language == 'CSS'){
          return 'css';
         }

          if(language == 'VUE'){
             return 'vue';
         }
         if(language == 'MD'){
          return 'md';
         }

          if(language == 'PYTHON(3.8.1)'){
           return 'py';
         }

          if(language == 'PYTHON 3.81'){
           return 'py';
         }

         if(language == 'PYTHON For ML(3.7.7)'){
           return 'py';
         }

         if(language == 'PYTHON(2.7.17)'){
           return 'py';
         }
          if(language == 'PHP'){
            return 'php';
         }
          if(language == 'JAVASCRIPT(Node)'){
           return 'js';
         }
          if(language == 'JAVASCRIPT'){
           return 'js';
         }

          if(language == 'js'){
           return 'js';
         }
          if(language == 'SQL'){
            return 'sql';
         }
          if(language == 'C'){
            return 'c';
         }
          if(language == 'C++'){
           return 'cpp';
         }
          if(language == 'JAVA'){
            return 'java';
         }
          if(language == 'C#'){
           return 'cs';
         }
          if(language == 'ERLANG'){
            return 'erl';
         }
          if(language == 'KOTLIN'){
         return 'kt';
         }
          if(language == 'FOTRAN'){
          return 'for';
         }
          if(language == 'PERL'){
           return 'pl';
         }
          if(language == 'R'){
            return 'r';
         }
         if(language == 'GO'){
            return 'go';
         }
         if(language == 'HASKELL'){
           return 'hs';
         }
          if(language == 'RUBY'){
            return 'rb';
         }
         if(language == 'LUA'){
           
             return 'lua';

         }
         if(language == 'PASCAL'){

             return 'pas';
         }
         if(language == 'RUST'){

             return 'rs';
         }
         if(language == 'SCALA'){
           
              return 'scala';

         }
         if(language == 'SWIFT'){

               return 'swift';

         }
         if(language  == 'TYPESCRIPT'){

             return 'ts';

         }

      },
       closePanel() {
         if(this.$root.panelFromChallenges){

           this.$root.panelFromChallenges = false;

              this.$router.push({path:'/board/challenges/panel/' + this.$root.selectedChallenge.duel_id +  '/description' })

         }else{

             this.$router.push({ path: '/board/projects/list' });

         }

           this.$root.projectPanelComponent.showSideBar = false
      },
      openGuide(){
         this.$router.push({path: '/board/projects/panel/' + this.$route.params.project_slug + '/guide'})
            this.$root.projectPanelComponent.showSideBar = false
        // this.$router.push({path: '/board/projects/panel/' + project.project_slug})
      }
  },
  
  
}
</script>
<style scoped>
 
 .codeFile:hover{
   cursor: pointer;
   background:#f2f2f2;
 }

 </style>
  