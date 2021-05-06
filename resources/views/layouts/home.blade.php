<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
    @yield('title')

        @include('shared.meta')
        @yield('meta')
        <link rel="manifest" href="manifest.json?v=0.18" />
        @include('shared.css')
          @yield('css')
    </head>
    <body class="body" style="overflow-y:auto;">
    
    
     
     @yield('content')

    
     @include('shared.scripts')


    
     @yield('scripts')
      
  
 
    </body>
</html>
