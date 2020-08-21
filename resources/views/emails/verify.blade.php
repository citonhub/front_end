@component('mail::message')
# Hi! {{$user->name}} 😃

<p style="text-align: center;">
Your Verification Code is
</p>

<p style="text-align: center;">
   <b style="font-size:20px;color:#173136;">{{$user->verification_code}}</b>
</p>


Thanks, and see you on CitonHub 👨‍💻<br>
@endcomponent
