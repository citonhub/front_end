@component('mail::message')
# Hi! {{$user->name}}

Your Verification Code is

<p style="text-align: center;">
   <b style="font-size:20px;color:#173136;">{{$user->verification_code}}</b>
</p>


Thanks,<br>
{{ config('app.name') }}
@endcomponent
