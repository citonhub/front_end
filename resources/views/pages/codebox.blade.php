<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

  

    <title>CitonHub Project</title>

    <link rel="stylesheet" href="{{$home}}/{{$panel}}/Framework/bootstrap.min.css">
    <link rel="stylesheet" href="{{$home}}/{{$panel}}/Framework/mdb.min.css">
<!-- include style file -->
 

@include($panel  . '.Styles.index')


</head>
<body>
        
 <div class=" text-center py-3 col-md-10 col-lg-8 offset-lg-2 offset-md-1"  style="overflow-x:hidden;">
           <div class="row">
             <div class="col-12">
              <h3>CitonHub Project</h3>
             </div>

             <div class="col-md-10 col-lg-8 offset-lg-2 offset-md-1 px-2 py-2">
              <div class="row py-2 px-2" >
                 <div class="col-md-10 col-lg-8 offset-lg-2 offset-md-1 px-2 text-center py-1">
                    <div class="card py-2 px-1 mb-3">
                      <div class="row">
                         <div class="col-12 text-center">
                         </div>
                         <div class="col-12">
                         <img height="300px" width="100%"  src="{{$home}}/{{$panel}}/Images/homeimg1.jpg" alt="building projects"/>
                         </div>
                         <div class="col-12 text-center">
                           <p>Create amazing projects without setting up a server</p>
                         </div>
                      </div>
                      
                    </div>

                    <div class="card py-2 px-1 mb-3">
                      <div class="row">
                         <div class="col-12 text-center">
                            <h5>Attach Images</h5>
                         </div>
                         <div class="col-12">
                         <div style="height:300px; width:100%; background:url({{$home}}/{{$panel}}/Images/image.jpg); background-repeat:no-repeat; background-size:cover;">
                         </div>
                         </div>
                         <div class="col-12 text-center">
                           <p>An image tells a story better than a thousand word</p>
                         </div>
                      </div>
                      
                    </div>


                    <div class="card py-2 px-1 mb-3">
                      <div class="row">
                         <div class="col-12 text-center">
                            <h5>Link up videos</h5>
                         </div>
                         <div class="col-12">
                      
                         <video width="100%" height="240" controls  preload="none">
                        <source src="{{$home}}/{{$panel}}/Videos/video.mp4" >
                          
                        Your browser does not support the video tag.
                        </video>
                         </div>
                         <div class="col-12 text-center">
                           <p>Attach awesome videos to spice up your project</p>
                         </div>
                      </div>
                      
                    </div>


                    <div class="card py-2 px-1 mb-3">
                      <div class="row">
                         <div class="col-12 text-center">
                            <h5>Create multiple pages</h5>
                         </div>
                         <div class="col-12">
                      
                         <img height="300px" width="100%"  src="{{$home}}/{{$panel}}/Images/build.jpg" alt="multiple pages"/>
                         </div>
                         <div class="col-12 text-center">
                           <p>You can set up multiple pages :- <a href="/page-loader/{{$panel}}/new-page">Check out this new page</a></p>
                         </div>
                      </div>
                      
                    </div>


                    <div class="card py-2 mb-3">
                      <div class="row " >
                         <div class="col-12 ">
                            <h5>A simple database</h5>
                         </div>
                        
                      <div class="col-12 text-left py-2" >
                      <form style="background:whitesmoke;" class="px-3 py-2">
           <div class="form-group">
           <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
           <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
         <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
         </div>
          <div class="form-check ">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
         <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
           <div class="col-12 text-center">
           <button type="submit" class="btn btn-sm btn-rounded btn-success">Submit</button>
           </div>
          
          </form>
                      </div>
                       
                        
                         <div class="col-12 text-center">
                           <p>Have that project you need a database for? you can easily get feedbacks from your users</p>
                         </div>
                      </div>
                      
                    </div>

                    <div class="card py-2 px-1 mb-3">
                      <div class="row">
                         <div class="col-12 text-center">
                            <h5>Team mode</h5>
                         </div>
                         <div class="col-12">
                      
                         <img height="300px" width="100%"  src="{{$home}}/{{$panel}}/Images/team.jpg" alt="Teams"/>
                         </div>
                         <div class="col-12 text-center">
                           <p>Collaborate with  your developer friends (frontend and backend) and build projects together</p>
                         </div>
                      </div>
                      
                    </div>


                    <div class="card py-2 px-1 mb-3">
                      <div class="row">
                         
                      
                         <div class="col-12 text-center">
                           <p>Now upload those projects sitting on your local-host to get comments and reviews</p>
                         </div>

                         <div class="col-12 text-center">
                         <a type="submit" class="btn btn-sm btn-round btn-success" href="/space#/how-to" >Get Started</a>
                         </div>
                      </div>
                      
                    </div>
                    
                 </div>
              </div>
             </div>

            
             
           </div>
        </div>
   
<script src="{{$home}}/{{$panel}}/Framework/jquery.js"></script>
<script src="{{$home}}/{{$panel}}/Framework/bootstrap.min.js"></script>

<!-- include script file -->

@include($panel  . '.Scripts.index')


</body>
</html>