@if(Auth::check())
<input type="hidden" value="auth" id="checkauth">

<input type="hidden" value="{{Auth::id()}}" id="checkauthId">
<input type="hidden" value="{{Auth::user()->username}}" id="checkauthUsername">
@else
<input type="hidden" value="noauth" id="checkauth">

<input type="hidden" value="0" id="checkauthId">
<input type="hidden" value="none" id="checkauthUsername">
@endif

<input type="hidden" value="{{ Config::get('app.locale') }}" id="appLocale">

<script>
    window.Laravel = {!! json_encode(['csrfToken' => csrf_token(),
      'user'=> Auth::user()]) !!};
</script>

 




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