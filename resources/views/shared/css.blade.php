<link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
<link rel="stylesheet" href="{{ asset('css/mdb.min.css') }}">
<style>
    @font-face {font-family:BodyFont;
                   src:url( {{asset('fonts/Rubik-Regular.ttf')}} );}

    @font-face {font-family:HeaderFont;
                   src:url( {{asset('fonts/Rubik-Bold.ttf')}} );}

    @font-face {font-family:MediumFont;
                   src:url( {{asset('fonts/Rubik-Medium.ttf')}} );}

    h1,h2,h3,h4,h5,h6 {
       font-family:HeaderFont;
    }
    .linkStyle{
       font-size:15px;
       font-family:BodyFont;
       color:black;
    }  

    .homeButton{
       border:1px solid #3C87CD;
       background:#3C87CD;
       border-radius:6px;
       color:white;
       font-family:BodyFont;
    }

    .homeButton:hover{
       border:1px solid #3C87CD;
       background:#3C87CD;
       border-radius:6px;
       color:white;
       font-family:BodyFont;
    }
    .homeButtonOutline{
        
      border:2px solid #3C87CD;
       background:#ffffff;
       border-radius:6px;
       color:#3C87CD;
       font-family:BodyFont;
    }

    .homeButtonOutline:hover{
        
        border:2px solid #3C87CD;
         background:#ffffff;
         border-radius:6px;
         color:#3C87CD;
         font-family:BodyFont;
      }

    .paragraphTextStyle{
      font-size:14px;
       font-family:BodyFont;
       color:black;
    }

    @keyframes loader-animation {
  0% {
    left: -100%;
  }
  49% {
    left: 100%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}
.loader {
  height: 3px;
  width: 100%;
}
.loader .bar {
  width: 100%;
  position: fixed;
  top:0;
  z-index:9999999999999999;
  height: 3px;
  background-color: dodgerblue;
  animation-name: loader-animation;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.sliderfullBtn{
   -webkit-animation: beatBtn .50s infinite alternate;
	-moz-animation: beatBtn .50s infinite alternate;
	-ms-animation: beatBtn .50s infinite alternate;
	-o-animation: beatBtn .50s infinite alternate;
	animation: beatBtn .50s infinite alternate;

	-webkit-transform-origin: center;
	-moz-transform-origin: center;
	-o-transform-origin: center;
	-ms-transform-origin: center;
	transform-origin: center;
 }


 @keyframes "beatBtn" {
 to {
    -webkit-transform: scale(1.1);
   	-moz-transform: scale(1.1);
   	-o-transform: scale(1.1);
   	-ms-transform: scale(1.1);
   	transform: scale(1.1);
 }

}

@-moz-keyframes beatBtn {
 to {
   -moz-transform: scale(1.1);
   transform: scale(1.1);
 }

}

@-webkit-keyframes "beatBtn" {
 to {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);
 }

}

@-ms-keyframes "beatBtn" {
 to {
   -ms-transform: scale(1.1);
   transform: scale(1.1);
 }

}

@-o-keyframes "beatBtn" {
 to {
   -o-transform: scale(1.1);
   transform: scale(1.1);
 }

} */   
</style>