@component('mail::message')


<p style="">
Hey there 😃, {{$user->name}} is inviting you to join {{ $space->name }} {{ $space->type }} on CitonHub.
</p>

<p style="text-align: center;">
 
@component('mail::button', ['url' => $url, 'color' => 'primary'])
Join {{ $space->type }}
@endcomponent

</p>

   <h2 style="color:#173136;">What is CitonHub?</h2>


<p style="">
  CitonHub is a messaging platform for developer communities. Here, developers can chat and share codes
  in a way to help each other grow.
</p>

@endcomponent
