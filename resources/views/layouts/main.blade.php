<!doctype html>
<html lang="{{ app()->getLocale() }}" >
    <head>
    @yield('title')

        @include('shared.meta')
        @yield('meta')
        <link rel="manifest" href="manifest.json?v=0.12" />
        @include('shared.css')
          @yield('css')
    </head>
    <body class="body" >
    
    @include('shared.header')
     
     @yield('content')

   
     @include('shared.scripts')


    
     @yield('scripts')
      
  
 
    </body>
</html>
