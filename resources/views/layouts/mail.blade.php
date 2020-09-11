<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
    @yield('title')

        @include('shared.meta')
        @yield('meta')
       
          @yield('css')
    </head>
    <body class="body">
  
   
     
     @yield('content')

    

     

    
     @yield('scripts')
      
  
 
    </body>
</html>
