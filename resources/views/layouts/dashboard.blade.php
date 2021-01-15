<!doctype html>
<html lang="{{ app()->getLocale() }}" style="overflow-y:hidden;">
    <head>
    @yield('title')

        @include('shared.meta')
        @yield('meta')
        <link rel="manifest" href="manifest.json?v=0.11" />
        @include('shared.css')
          @yield('css')
    </head>
    <body class="body" style="overflow-y:hidden;">
    
    
     
     @yield('content')

    
     @include('shared.scripts')


    
     @yield('scripts')
      
  
 
    </body>
</html>
