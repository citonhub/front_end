@extends('layouts.freshpage')
@section('title')

    <title>CitonHub:CodeBox</title>

 @endsection
 @section('meta') 
  <meta name="description" content="CitonHub Codebox,Learn, write and run codes online,The online programming school, Health-care programmers,Medical students that write codes, Medical programmer" />
  <meta name="keywords" content="CitonHub Codebox,Online programming school,Learn, write and run codes online,Learn computer programming, programming school, Medical doctors that can program, CitonHub courses, become a web developer" />
  <meta name="MobileOptimized" content="width" />
  <meta name="HandheldFriendly" content="true" />
  <meta name="og:image" content="https://citonhub.com/imgs/citon.jpg"/>
 @endsection
 

 @section('content')

 <div 
    style="position:fixed;top:0%; width:100%; height:100% !important; left:0%; right:0%; z-index:1000000; background: white; overflow-x:hidden;"
              >
         
          <div style="width:100%; height:100%; overflow-y:hidden;  overflow-x:hidden;" class="text-center">
            <div class="card my-0 mx-0  text-center py-2 " style="width:100%; height:7%;  border-radius:0px; background:#3E8893;" >
               
                <div class="row my-0 py-0 px-2"> 
                <div class="col-lg-2 col-md-2 col-3 py-0 my-0 text-left">
                <div style="text-align:left;" class=" d-md-inline-block d-none " >
            <a href="/" class="pl-2"><img src="{{asset('imgs/citon.jpg')}}" height="40" width="40" style="border-radius:50%;"/></a>
        </div>

        <div style="text-align:center;" class=" d-md-none d-inline-block d-md-none " >
            <a href="/"><img src="{{asset('imgs/citon.jpg')}}" height="30" width="30" style="border-radius:50%;"/></a>
        </div>
                 </div>
                  <div class="col-9 py-0 my-0  text-center">
                   <h5><a href="/" style="font-size:13px;color:white;">CitonHub-: CodeBox</a></h5>
                 </div>
                
                </div>
            </div>
           <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
   srcdoc="{{$resultpage->content}}" 
    style="border: 0; width:100%; height:87%; background:white; " class=" my-0"></iframe>
     <div class="card my-0 mx-0  col-12 py-1 " style="width:100%; height:6%; border-top-left-radius:0px; border-top-right-radius:0px; background:#3E8893;" >
                <div class="row my-0 py-0"> 
                  <div class="col-12 py-0 my-0 text-center">
                  <i style="font-size:12px;color:white;">Designed by CitonHub</i>
                 </div>
                 <div class="col-6 py-0 my-0 text-right">
                    
                 </div>
                </div>
                 

            </div>
            </div>
        </div>
 @endsection

 @section('scripts')


     
 @endsection
