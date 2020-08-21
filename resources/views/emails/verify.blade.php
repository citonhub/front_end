@component('mail::message')
<div style="text-align: center;">
# Hi! {{$user->name}} 😃
</div>


<div style="text-align: center;">
Your Verification Code is
</div>

<p style="text-align: center;">
   <b style="font-size:20px;color:#173136;">{{$user->verification_code}}</b>
</p>

<p style="text-align: center;">
Thanks, and see you on CitonHub 👨‍💻
</p>

@endcomponent
