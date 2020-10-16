<link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
<link rel="stylesheet" href="{{ asset('css/mdb.min.css') }}">
<style>
    @font-face {font-family:BodyText;
                   src:url( {{asset('fonts/vendor/Roboto-Regular.ttf')}} );}

                   @font-face {font-family:HeaderText;
                   src:url( {{asset('fonts/vendor/Roboto-Bold.ttf')}} );}

                   @font-face {font-family:OtherText;
                   src:url( {{asset('fonts/vendor/Roboto-Medium.ttf')}} );}
        

        .activeTab{
         background:white;
          border-bottom:1px solid #c5c5c5; 
          background:#edf6f7;
         
        }
        .notActiveTab{
         background:white; 
         border-bottom:1px solid #c5c5c5;
        
         
        }


 .scrollerStyle::-webkit-scrollbar {
  width: 5px;
}
 
.scrollerStyle::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(111, 181, 195, 0.8);
  border:1px solid transparent;
  border-radius:6px;
}
 
.scrollerStyle::-webkit-scrollbar-thumb {
  background-color: #6fb8c3;
  outline: 1px solid #6fb8c3;
  border:1px solid transparent;
   border-radius:6px;
}

        .addBorder{
           border:1px solid #c5c5c5;
        }

        .notActiveTab:hover{
         background:white; 
         border-bottom:1px solid #c5c5c5;
         background:#edf6f7;
         
        }
     
        body::-webkit-scrollbar {
  width: 6px;
}
 
body::-webkit-scrollbar-track {
   box-shadow: inset 0 0 6px rgba(111, 181, 195, 0.9);
  border:1px solid transparent;
  border-radius:6px;
}
 
body::-webkit-scrollbar-thumb {
   background-color: #4ba6b4;
  outline: 1px solid #4ba6b4;
  border:1px solid transparent;
   border-radius:6px;
}
      
      body{
       font-family: BodyText;
       overflow-x:hidden;
       overflow-y:hidden;
      }
      h1,h2,h3,h4,h5,h6 {
         font-family: HeaderText;
      }
      .withlove {
         font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 13px;
        color:#153402;
/* identical to box height */

      }

      .hoversidebar:hover {
    background: #008080 !important;
    border: 1px solid #008080 ;
    border-radius: 7px; 
   }

      .withlovemd {
         font-style: normal;
        font-weight: bold;
        font-size: 12px;
        color:#153402;
        line-height: 5px;
/* identical to box height */

        text-align: center;
         letter-spacing: 0.1em;

        color: #A6A6A6;
      }

      .withlovesm {
         font-style: normal;
        font-weight: bold;
        color:#153402;
        font-size: 10px;
        line-height: 3px;
/* identical to box height */

        text-align: center;
         letter-spacing: 0.1em;

        color: #A6A6A6;
      }
   .iconstyle{
     height:25px;
     width: 25px;
   }
   .iconname{
      font-weight:bold;
      color:#A6A6A6;
      font-size:14px;
   }

   .iconcontainer{
      width:25% !important;
   }
   .headerTextlg{
      font-weight:bolder;
      font-size:19px;
   }
   .headerTextmd{
      font-weight:bolder;
      font-size:16px;
   }
   .headerTextsm{
      font-weight:bolder;
      font-size:14px;
   }
   .headerText{
      font-weight:bolder;
      font-size:17px;
   }
   .paragraphText{
      color:#03282E;
      font-weight:bold;
      font-size:17px;
      text-align: center;
   }
   .paragraphTextmd{
      color:#03282E;
      font-weight:bold;
      font-size:13px;
      text-align: center;
   }
   .paragraphTextsm{
      color:#03282E;
      font-weight:bold;
      font-size:12px;
      text-align: center;
   }
   .storytext{
      color:#A6A6A6;
      font-weight:bold;
      font-size:13px;
   }
   .storytextmd{
      color:#A6A6A6;
      font-weight:bold;
      font-size:11px;
   }

   .iconstylemd{
      height:23px;
     width: 23px;
   }
   .iconstylesm{
      height:19px;
     width: 19px;
   }
   .iconnamemd{
      font-weight:bold;
      color:#A6A6A6;
      font-size:14px;
   }

   .iconnamesm{
      font-weight:bold;
      color:#A6A6A6;
      font-size:9px;
      padding:3px 0px;
   }


   @keyframes page-load {
        from {
            background-color: #78E6F6;
        }
        to {
            background-color: #5dafbb;
        }
    }
    .page-loading::before {
        content:" ";
        display:block;
        position:fixed;
        z-index:10000;
        height:2px;
        width:100%;
        top:0;
        left:0;
        background-color:#78E6F6;
        animation: page-load infinite ease-out 2s;
        box-shadow:0 2px 2px rgba(144,238,144 ,1 );
    }




    .slider{
     
    
      height:2px;
      overflow-x: hidden;
    }

     .line{
     position:absolute;
     opacity: 0.4;
     background:#78E6F6;
     width:150%;
     height:2px;
   }

   .subline{
     position:absolute;
     background:#5dafbb;
     height:3px; 
   }
    .inc{
      animation: increase 2s infinite;
    }
    .dec{
      animation: decrease 2s 0.5s infinite;
    }



    @keyframes increase {
       from { left: -5%; width: 5%; }
       to { left: 130%; width: 100%;}
    }
    @keyframes decrease {
       from { left: -80%; width: 80%; }
       to { left: 110%; width: 10%;}
    }



 .largslider{
   position:fixed; 
   height:100%;
    width:100%; 
    top:0%;
     background:white;
      z-index:100000;
      justify-content: center;
      align-content: center;
       display: inline-flex !important;
 }

 .sliderfull{
   -webkit-animation: beat .60s infinite alternate;
	-moz-animation: beat .60s infinite alternate;
	-ms-animation: beat .60s infinite alternate;
	-o-animation: beat .60s infinite alternate;
	animation: beat .60s infinite alternate;

	-webkit-transform-origin: center;
	-moz-transform-origin: center;
	-o-transform-origin: center;
	-ms-transform-origin: center;
	transform-origin: center;
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


 @keyframes "beat" {
 to {
    -webkit-transform: scale(1.2);
   	-moz-transform: scale(1.2);
   	-o-transform: scale(1.2);
   	-ms-transform: scale(1.2);
   	transform: scale(1.2);
 }

}

@-moz-keyframes beat {
 to {
   -moz-transform: scale(1.2);
   transform: scale(1.2);
 }

}

@-webkit-keyframes "beat" {
 to {
   -webkit-transform: scale(1.2);
   transform: scale(1.2);
 }

}

@-ms-keyframes "beat" {
 to {
   -ms-transform: scale(1.2);
   transform: scale(1.2);
 }

}

@-o-keyframes "beat" {
 to {
   -o-transform: scale(1.2);
   transform: scale(1.2);
 }

} */

</style>

