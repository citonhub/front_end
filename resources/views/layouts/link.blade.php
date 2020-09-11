<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
    @yield('title')

        @include('shared.meta')
        @yield('meta')
       
        @include('shared.css')
          @yield('css')
    </head>
    <body class="body">
    
    
     
     @yield('content')



    
     @yield('scripts')
      
  
 
    </body>
</html>
