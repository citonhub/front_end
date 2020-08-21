@component('mail::message')
# Hi! {{$user->name}}

Your Verification Code is


{{$user->verification_code}}</b>



Thanks,<br>
{{ config('app.name') }}
@endcomponent
