<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
    @yield('title')

        @include('shared.meta')
        @yield('meta')
        <link rel="manifest" href="manifest.json" />
        @include('shared.css')
          @yield('css')
    </head>
    <body class="body">
  
   
     
     @yield('content')

    

     @include('shared.scripts')


    
     @yield('scripts')
      
  
 
    </body>
</html>
