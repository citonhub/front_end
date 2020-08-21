@component('mail::message')
# Hi! {{$user->name}}

Your Verification Code is


{{$user->verification_code}}



Thanks,<br>
{{ config('app.name') }}
@endcomponent
