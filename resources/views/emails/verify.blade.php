@component('mail::message')
<h1 style="text-align: center;">
 Hi! {{$user->name}} 😃
</h1>


<p style="text-align: center;">
Your Verification Code is
</p>

<p style="text-align: center;">
   <b style="font-size:20px;color:#173136;">{{$user->verification_code}}</b>
</p>

<p style="text-align: center;">
Thanks, and see you on CitonHub 👨‍💻
</p>

@endcomponent
