
<input type="hidden" value="{{ Config::get('app.locale') }}" id="appLocale">
 
<script>
    window._locale = "{{ app()->getLocale() }}";
</script> 

<script>

 // Check that service workers are supported
 if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('service-worker.js');
        });
      }


</script>