

 <div class=" d-none d-md-none d-lg-block mx-2 px-2 py-2" 
 style="border-radius:7px; height:auto; position:fixed; width:15%;top:10%; left:16.60%; background:white;border:1px solid #b7dbe1;" >
         
       


       <a :class=" tabLabel == 'space' ? 'd-block col-12 px-2 py-2 my-0 activeTab' : 'd-block col-12 px-2 py-2 my-0 notActiveTab'"  href="/"  @click="loader"> 
          <div class="row py-0 my-0">
            <div class="col-4 d-flex py-0" style="align-items:center; justify-content:center;">
              @if($tablabel == 'space')
              <img src="{{ asset('imgs/space_active.png') }}" class="iconstyle"/>
              @else
              <img src="{{ asset('imgs/space.png') }}" class="iconstyle"/>
              @endif
            </div>
            <div class="col-4 d-flex py-0 "  style="align-items:center; justify-content:center;">
            <div class="text-center">
            @if($tablabel == 'space')
             <span class="iconname" style="color:#36848C;">
             @{{ $t('general.space') }}
             </span>
             @else
             <v-badge
          color="#36848C"
          v-if="notificationCountSpace != 0"
          :content="notificationCountSpace"
        >
        <span class="iconname">
        @{{ $t('general.space') }}
             </span>
        </v-badge>

        <span class="iconname" v-else>
        @{{ $t('general.space') }}
             </span>
             @endif
            </div>
            </div>
            <div class="col-4 d-flex py-0 "  style="align-items:center; justify-content:center;">
            </div>


          </div>
         </a>



         <a :class=" tabLabel == 'duels' ? 'd-block col-12 px-2 py-2 my-0 activeTab' : 'd-block col-12 px-2 py-2 my-0 notActiveTab'"  href="/duels" @click="loader"> 
          <div class="row py-0 my-0">
            <div class="col-4 d-flex py-0" style="align-items:center; justify-content:center;">
              @if($tablabel == 'duels')
              <img src="{{ asset('imgs/duels_active.png') }}" class="iconstyle"/>
              @else
              <img src="{{ asset('imgs/duels.png') }}" class="iconstyle"/>
              @endif
            </div>
            <div class="col-4 d-flex py-0 "  style="align-items:center; justify-content:center;">
            <div class="text-center">
            @if($tablabel == 'duels')
             <span class="iconname" style="color:#36848C;">
             @{{ $t('general.duels') }}
             </span>
             @else
             <span class="iconname">

             @{{ $t('general.duels') }}
             </span>
             @endif
            </div>
            </div>
            <div class="col-4 d-flex py-0 "  style="align-items:center; justify-content:center;">
            </div>


          </div>
         </a>




        

         <a :class=" tabLabel == 'home' ? 'd-block col-12 px-2 py-2 my-0 activeTab' : 'd-block col-12 px-2 py-2 my-0 notActiveTab'" href="/trends" @click="loader"> 
          <div class="row py-0 my-0">
            <div class="col-4 d-flex py-0" style="align-items:center; justify-content:center;">
              @if($tablabel == 'trends')
              <img src="{{ asset('imgs/trend_active.png') }}" class="iconstyle"/>
              @else
              <img src="{{ asset('imgs/trend.png') }}" class="iconstyle"/>
              @endif
            </div>
            <div class="col-4 d-flex py-0 "  style="align-items:center; justify-content:center;">
            <div class="text-center">
            @if($tablabel == 'trends')
             <span class="iconname" style="color:#36848C;">
               @{{ $t('general.trends') }}
             </span>
             @else
             <span class="iconname">
             @{{ $t('general.trends') }}
             </span>
             @endif
            </div>
            </div>
            <div class="col-4 d-flex py-0 "  style="align-items:center; justify-content:center;">
            </div>


          </div>
         </a>
  

      


         <a :class=" tabLabel == 'profile' ? 'd-block col-12 px-2 py-2 my-0 activeTab' : 'd-block col-12 px-2 py-2 my-0 notActiveTab'"  href="/profile" @click="loader" > 
          <div class="row py-0 my-0">
            <div class="col-4 d-flex py-0" style="align-items:center; justify-content:center;">
              @if($tablabel == 'profile')
              <img src="{{ asset('imgs/profile_active.png') }}" class="iconstyle"/>
              @else
              <img src="{{ asset('imgs/profile.png') }}" class="iconstyle"/>
              @endif
            </div>
            <div class="col-4 d-flex py-0 "  style="align-items:center; justify-content:center;">
            <div class="text-center">
            @if($tablabel == 'profile')
             <span class="iconname" style="color:#36848C;">
             @{{ $t('general.profile') }}
             </span>
             @else
             <v-badge
          color="#36848C"
          v-if="notificationCount != 0"
          :content="notificationCount"
        >
        <span class="iconname">
        @{{ $t('general.profile') }}
             </span>
        </v-badge>

        <span class="iconname" v-else>
        @{{ $t('general.profile') }}
             </span>
             
             @endif
            </div>
            </div>
            <div class="col-4 d-flex py-0 "  style="align-items:center; justify-content:center;">
            </div>


          </div>
         </a>
         
         
</div>



<div class="row fixed-bottom " style="z-index:1000;" v-show="showTabs == true">
   

           
        
   


    <div class="col-12 card  py-2 px-2  d-md-flex flex-row d-lg-none d-none" style="border-radius:0px; height:auto;" >
         
            

    <div class="text-center iconcontainer" > 
            <a href="/">
            @if($tablabel == 'space')
            <img src="{{ asset('imgs/space_active.png') }}" class="iconstylemd"/><br>
            <span class="iconnamemd py-1" style="color:#36848C;">
            @{{ $t('general.space') }}
             </span>
            @else
            <v-badge
          color="#36848C"
          v-if="notificationCountSpace != 0"
          :content="notificationCountSpace"
        >
      
        <img src="{{ asset('imgs/space.png') }}" class="iconstylemd"/>
            
        </v-badge>

         <img src="{{ asset('imgs/space.png') }}" class="iconstylemd" v-else/>
         <br>
            <span class="iconnamemd py-1">
            @{{ $t('general.space') }}
             </span>
            @endif
             
            </a>
            </div>
            
    
           
            <div class="text-center iconcontainer" > 
            <a href="/duels">
            @if($tablabel == 'duels')
            <img src="{{ asset('imgs/duels_active.png') }}" class="iconstylemd"/><br>
            <span class="iconnamemd py-1" style="color:#36848C;">
            @{{ $t('general.duels') }} 
             </span>
            @else
            <img src="{{ asset('imgs/duels.png') }}" class="iconstylemd"/><br>
            <span class="iconnamemd py-1">
            @{{ $t('general.duels') }} 
             </span>
            @endif
            </a>
            </div>

            <div class="text-center iconcontainer" > 
            <a href="/trends">
            @if($tablabel == 'trends')
            <img src="{{ asset('imgs/trend_active.png') }}" class="iconstylemd"/><br>
            <span class="iconnamemd py-1" style="color:#36848C;">
            @{{ $t('general.trends') }}
             </span>
            @else
            <img src="{{ asset('imgs/trend.png') }}" class="iconstylemd"/><br>
            <span class="iconnamemd py-1">
            @{{ $t('general.trends') }}
             </span>
            @endif
             
             </a>
            </div>
           

            
            <div class="text-center iconcontainer"> 
            <a href="/profile">
            @if($tablabel == 'profile')
            <img src="{{ asset('imgs/profile_active.png') }}" class="iconstylemd"/><br>
            <span class="iconnamemd py-1" style="color:#36848C;">
            @{{ $t('general.profile') }}
             </span>
            @else
            <v-badge
          color="#36848C"
          v-if="notificationCount != 0"
          :content="notificationCount"
        >
      
        <img src="{{ asset('imgs/profile.png') }}" class="iconstylemd"/>
            
        </v-badge>

        <img src="{{ asset('imgs/profile.png') }}" class="iconstylemd" v-else/>
        <br>
           
            <span class="iconnamemd py-1">
            @{{ $t('general.profile') }}
             </span>
            @endif
            </a>
            </div>
            
        
    </div>

    <div class="col-12 card  py-1 px-2  d-md-none  flex-row " style="border-radius:0px; height:auto;" >
         
    <div class="text-center iconcontainer" > 
            <a href="/" @click="loader">
            @if($tablabel == 'space')
            <img src="{{ asset('imgs/space_active.png') }}" class="iconstylesm"/>
            <div class="iconnamesm " style="color:#36848C;">
            @{{ $t('general.space') }}
             </div>
            @else
            <v-badge
          color="#36848C"
            v-if="notificationCountSpace != 0"
          :content="notificationCountSpace"
        >
      
        <img src="{{ asset('imgs/space.png') }}" class="iconstylesm"/>
            
        </v-badge>
        <img src="{{ asset('imgs/space.png') }}" class="iconstylesm" v-else/>
        <br>
            <div class="iconnamesm ">
            @{{ $t('general.space') }}
             </div>
            @endif
             
            </a>
            </div>
            
   
            <div class="text-center iconcontainer" > 
            <a href="/duels" @click="loader">
            @if($tablabel == 'duels')
            <img src="{{ asset('imgs/duels_active.png') }}" class="iconstylesm"/>
            <div class="iconnamesm " style="color:#36848C;">
            @{{ $t('general.duels') }} 
             </div>
            @else
            <img src="{{ asset('imgs/duels.png') }}" class="iconstylesm"/>
            <div class="iconnamesm ">
            @{{ $t('general.duels') }} 
             </div>
            @endif
            </a>
            </div>


            <div class="text-center iconcontainer" > 
            <a href="/trends" @click="loader">
            @if($tablabel == 'trends')
            <img src="{{ asset('imgs/trend_active.png') }}" class="iconstylesm"/>
            <div class="iconnamesm " style="color:#36848C;">
            @{{ $t('general.trends') }}
             </div>
            @else
            <img src="{{ asset('imgs/trend.png') }}" class="iconstylesm"/>
            <div class="iconnamesm ">
            @{{ $t('general.trends') }}
             </div>
            @endif
             
             </a>
            </div>

           
           

           

            <div class="text-center iconcontainer"> 
            <a href="/profile" @click="loader">
            @if($tablabel == 'profile')
            <img src="{{ asset('imgs/profile_active.png') }}" class="iconstylesm"/>
            <div class="iconnamesm " style="color:#36848C;">
            @{{ $t('general.profile') }}
             </div>
            @else
            <v-badge
          color="#36848C"
            v-if="notificationCount != 0"
          :content="notificationCount"
        >
      
        <img src="{{ asset('imgs/profile.png') }}" class="iconstylesm"/>
            
        </v-badge>
        <img src="{{ asset('imgs/profile.png') }}" class="iconstylesm" v-else/>
        <br>
            <div class="iconnamesm">
            @{{ $t('general.profile') }}
             </div>
            @endif
            </a>
            </div>
         
     
 </div>
</div>
