
<input type="hidden" value="{{ Config::get('app.locale') }}" id="appLocale">


 




<script>

 // Check that service workers are supported
 if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('service-worker.js');
        });
      }

document.addEventListener('touchstart', touchstartHandler, {passive: false});
document.addEventListener('touchmove', touchmoveHandler, {passive: false});

</script>