<template>
    <div class="col-lg-12" style="overflow-y: scroll;height:100%;width:100%;">
        <h1 class=" px-lg-1 py-lg-1 mt-4 mb-4 col-lg-8 col-12" style="color:#3C87CD; font-size:3rem;">Project Creation Guide</h1>
       
        <nav class="col-lg-8" style=""><ul  class="d-flex col-lg-10" style="list-style:none;">
            <li class="ml-4">Basics</li>
          <a href="#node"> <li class="ml-4">Node</li></a> 
         <a href="#php">   <li class="ml-4">PHP</li></a>
           
            </ul></nav>
        <div class="intro col-lg-6">
<h2 class=" text-left px-1 py-1 " style="font-size:1.8rem;font-weight:500;">Introduction</h2>
<p>Welcome to the project panel. Here you can use all the tools available to bring your project idea to life.
As soon as you start you can access a live button which you can use to view your project at any point.
</p>
        </div>

        <div class="basics col-lg-6 px-1 py-1">
            <h2 class=" text-left px-1 py-1 mt-4 mb-4 " style="font-size:1.8rem;font-weight:500;">Project Basics</h2>
            <div class="files  col-lg-6 px-1 py-1 mb-4 col-lg-10">
<h3 class="text-left px-1 py-1" style="font-size:1.2rem;">Adding Files</h3>
<p>
    There are many ways to add files to your project. On the project panels there are different file types such as views and styles.
    Cick on the plus button beside the file type you want. Choose your desired options and click save. You will now find the file under the category you selected on the panel.
</p>
            </div>

            <div class="assets col-lg-10 px-1 py-1 mb-4">
                <h3 class="text-left px-1 py-1"  style="font-size:1.2rem;">Using Assets</h3>
   <p>
       To add assets to your project you have to upload them. Choose the category that suits the assets you want to upload and click on the add button right beside it.
       Click on the upload box to open up your device files.You can then browse through to pick the asset you want and click on the upload button to upload it.
</p>
            </div>
        </div>

        <div class="node col-lg-12" id="node">
            <h2 class=" text-left px-1 py-1 mb-4 " style="font-size:1.8rem;font-weight:500;">Building a static site with Nodejs</h2>
            <p class="here col-lg-6" >Here are answers to some questions you might have on hosting Front-end applications.</p>

            <div class="steps col-lg-8">
               
                <div class="step col-lg-10">
                    <h4>Step 1 </h4>
                      <p>Create or upload basic files: HTML, CSS and JS</p>  
                      <ul class="col-lg-12">
                          <li class="mb-2">Click on the + icon next to the file type you want in the project panel to add a new file.</li>
                            <img src="/imgs/guide/file.png" alt="" class="col-lg-10"  style="width:390px;height:180px;">
                          <li class="mb-2">Alternatively, you can click on the + icon next to the files section to  upload already created files on your laptop</li>
                          <img src="/imgs/guide/upload.png" alt="">
                         
                      </ul>
                     
                    
                </div>
           
<div class="step">
                    <h4>Step 2 </h4>
                     <p>Upload assets and files and  incorporate in your project</p>  
                      <ul class="col-lg-12">
                          <li class="mb-2">Click on the + icon next to the type of asset you want. click on the upload box to searchthrough your device. select the asset and click the upload button.</li>
                          
                          <li class="mb-2">To link the asset you place one the urls below wherever you want it to be. </li>
                         <h5>For videos:</h5>
                        <p style="background-color:#3C87CD;color:white;height:25px;" class="col-lg-5 col-8 py-0">$home/$panel/Videos/FILENAME</p> 
    <h5>For Audios:</h5>
                        <p style="background-color:#3C87CD;color:white;height:25px;" class="col-lg-5 col-8 py-0">$home/$panel/Audios/FILENAME</p> 
                        <h5>For Images:</h5>
                        <p style="background-color:#3C87CD;color:white;height:25px;" class="col-lg-5 col-8 py-0">$home/$panel/Images/FILENAME</p> 
                         <p>
                              Note: FILENAME is the name file. Change it to what you named yours.
                          </p>
                      </ul>
                </div>

                 <div class="step col-lg-10">
                    <h4>Step 3 </h4>
                      <p>Link files and view project</p>  
                      <ul class="col-lg-12">
                          <li class="mb-2">To link a file to an existing html file in your project you have to insert one of the following urls</li>
                           <h5>For HTML:</h5>
                        <p style="background-color:#3C87CD;color:white;height:25px;" class="col-lg-7 col-10 py-0">@include($panel . '.FILENAME')</p> 
    <h5>For JS:</h5>
                        <p style="background-color:#3C87CD;color:white;height:25px;" class="col-lg-7 col-10 py-0">@include($panel.'.Scripts.FILENAME')</p> 
                        <h5>For CSS:</h5>
                        <p style="background-color:#3C87CD;color:white;height:25px;" class="col-lg-7 col-10 py-0">@include($panel.'.Styles.FILENAME')</p> 
                          <p>
                              Note: FILENAME is the name file. Change it to what you named yours.
                          </p>
                          
                          
                          <li class="mb-2">To view your project go into your index view file and 
                              click on the play button underneath your editor. You will be directed to a
                               page with the live view of your project. You can easily share the
                                link so your friends can view your project. </li>
                      
                         
                      </ul>
                     
                    
                </div>
           

            </div>
        </div>

          <div class="php col-lg-12" id="php">
            <h2 class=" text-left px-1 py-1 mb-4 " style="font-size:1.8rem;font-weight:500;">Building a static site with PHP backend</h2>
            <p class="here col-lg-6" >Here are answers to some questions you might have on hosting Front-end applications.</p>

            <div class="steps col-lg-8">
               
                <div class="step col-lg-10">
                    <h4>Step 1 </h4>
                      <p>Create or upload basic files: HTML, CSS and JS</p>  
                      <ul class="col-lg-12">
                          <li class="mb-2">Click on the + icon next to the file type you want in the project panel to add a new file.</li>
                            <img src="/imgs/guide/file.png" alt="" class="col-lg-10"  style="width:390px;height:180px;">
                          <li class="mb-2">Alternatively, you can click on the + icon next to the files section to  upload already created files on your laptop</li>
                          <img src="/imgs/guide/upload.png" alt="">
                         
                      </ul>
                     
                    
                </div>
           
<div class="step">
                    <h4>Step 2 </h4>
                     <p>Upload assets and incorporate in your project</p>  
                      <ul class="col-lg-12">
                          <li class="mb-2">Click on the + icon next to the type of asset you want. click on the upload box to searchthrough your device. select the asset and click the upload button.</li>
                            
                          <li class="mb-2">To link the asset you place one the urls below wherever you want it to be. </li>
                        <div class="links" v-for="link in php" :key="link.id">
                         <h5>For {{link.type}}</h5>
                        <p style="background-color:#3C87CD;color:white;height:25px;" class="col-lg-7 py-0">{{link.link}}</p> 
    <p>
                              Note: FILENAME is the name file. Change it to what you named yours.
                          </p>
                         </div>
                      </ul>
                </div>

                 <div class="step col-lg-10">
                    <h4>Step 3 </h4>
                      <p>Link files and view project</p>  
                      <ul class="col-lg-12">
                          <li class="mb-2">To link a file to an existing html file in your project you have to insert one of the following urls</li>
                           <h5>For HTML:</h5>
                        <p style="background-color:#3C87CD;color:white;height:25px;" class="col-lg-7 col-11 py-0">@include($panel . '.FILENAME')</p> 
    <h5>For JS:</h5>
                        <p style="background-color:#3C87CD;color:white;height:25px;" class="col-lg-7 col-11 py-0">@include($panel.'.Scripts.FILENAME')</p> 
                        <h5>For CSS:</h5>
                        <p style="background-color:#3C87CD;color:white;height:25px;" class="col-lg-7 col-11 py-0">@include($panel.'.Styles.FILENAME')</p> 
                          <p>
                              Note: FILENAME is the name file. Change it to what you named yours.
                          </p>
                          
                          
                          <li class="mb-2">To view your project go into your index view file and 
                              click on the play button underneath your editor. You will be directed to a
                               page with the live view of your project. You can easily share the
                                link so your friends can view your project. </li>
                      
                         
                      </ul>
                     
                    
                </div>
           

            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            php:[
                {id:1,type:'Audios', link:'{{$home}}/{{$panel}}/Audios/FILENAME'},
                  {id:2,type:'Videos', link:'{{$home}}/{{$panel}}/Videos/FILENAME'},
                    {id:3,type:'Images', link:'{{$home}}/{{$panel}}/Images/FILENAME'}
            ]
        }
    }
}
</script>