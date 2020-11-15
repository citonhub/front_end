

 <div class=" d-none d-md-none d-lg-block mx-2 px-2 py-2"  v-if="!itIsHomePage"
 style=" height:auto; position:fixed; width:15%;top:10%; left:8.30%; background:whitesmoke;" >
         
 <div style="position:absolute;top:30%; left:90%; z-index:2;" class="d-none d-lg-block" v-if="showDashboardInfo">
                    <info-dialog :buttonText="buttonText" :content="dashboardContent" :type="'infoleft'" :next="'hubinfo'"></info-dialog>
                      </div>


                      <div style="position:absolute;top:55%; left:90%; z-index:2;" class="d-none d-lg-block" v-if="showHubInfo">
                    <info-dialog :buttonText="buttonText" :content="hubContent" :type="'infoleft'" :next="'profileInfo'"></info-dialog>
                      </div>

              
               <div style="position:absolute;top:78%; left:90%; z-index:2;" class="d-none d-lg-block" v-if="showProfileInfo">
               <info-dialog :buttonText="buttonText" :content="profileContent" :type="'infoleft'" :next="'final'"></info-dialog>
                </div>

                     


       <a :class=" tabLabel == 'space' ? 'd-block col-12 px-2 py-2 mb-2 activeTab card ' : 'd-block col-12 px-2 py-2 mb-2 notActiveTab card'"  href="/"  @click="loader"
        style="border:1px solid transparent; border-radius:30px;"> 
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
          v-if="false"
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


       


         <a :class=" tabLabel == 'panel' ? 'd-block col-12 px-2 py-2 mb-2 activeTab card' : 'd-block col-12 px-2 py-2 mb-2 notActiveTab card'"  href="/dashboard" @click="loader"
         style="border:1px solid transparent; border-radius:30px;"> 
        
          <div class="row py-0 my-0">
            <div class="col-4 d-flex py-0" style="align-items:center; justify-content:center;">
              @if($tablabel == 'panel')
              <img src="{{ asset('imgs/panel_active.png') }}" class="iconstyle"/>
              @else
              <img src="{{ asset('imgs/panel.png') }}" class="iconstyle"/>
              @endif
            </div>
            <div class="col-4 d-flex py-0 "  style="align-items:center; justify-content:center;">
            <div class="text-center">
            @if($tablabel == 'panel')
             <span class="iconname" style="color:#36848C;">
             @{{ $t('general.panel') }}
             </span>
             @else
             <span class="iconname">

             @{{ $t('general.panel') }}
             </span>
             @endif
            </div>
            </div>
            <div class="col-4 d-flex py-0 "  style="align-items:center; justify-content:center;">
            </div>


          </div>
         </a>




        
         <a :class=" tabLabel == 'home' ? 'd-block col-12 px-2 py-2 mb-2 activeTab card' : 'd-block col-12 px-2 py-2 mb-2 notActiveTab card'" href="/hub" @click="loader"
         style="border:1px solid transparent; border-radius:30px;"> 
          <div class="row py-0 my-0">
            <div class="col-4 d-flex py-0" style="align-items:center; justify-content:center;">
              @if($tablabel == 'hub')
              <img src="{{ asset('imgs/hub_icon_active.png') }}" class="iconstyle"/>
              @else
              <img src="{{ asset('imgs/hub_icon1.png') }}" class="iconstyle"/>
              @endif
            </div>
            <div class="col-4 d-flex py-0 "  style="align-items:center; justify-content:center;">
            <div class="text-center">
            @if($tablabel == 'hub')
             <span class="iconname" style="color:#36848C;">
               @{{ $t('general.hub') }}
             </span>
             @else
             <span class="iconname">
             @{{ $t('general.hub') }}
             </span>
             @endif
            </div>
            </div>
            <div class="col-4 d-flex py-0 "  style="align-items:center; justify-content:center;">
            </div>


          </div>
         </a>

        
  

      


         <a :class=" tabLabel == 'profile' ? 'd-block col-12 px-2 py-2 mb-2 activeTab card' : 'd-block col-12 px-2 py-2 mb-2 notActiveTab card '"  href="/profile" @click="loader" 
         style="border:1px solid transparent; border-radius:30px;"> 
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
         
    <div style="position:absolute;bottom:110%; left:16%; z-index:2;"  v-if="showDashboardInfo">
                    <info-dialog :buttonText="buttonText" :content="dashboardContent" :type="'infobottom'" :next="'hubinfo'"></info-dialog>
                      </div>

                      <div style="position:absolute;bottom:110%; left:40%; z-index:2;"  v-if="showHubInfo">
                    <info-dialog :buttonText="buttonText" :content="hubContent" :type="'infobottom'" :next="'profileInfo'"></info-dialog>
                      </div>
                      <div style="position:absolute;bottom:110%; left:65%; z-index:2;"  v-if="showProfileInfo">
               <info-dialog :buttonText="buttonText" :content="profileContent" :type="'infobottom'" :next="'final'"></info-dialog>
                </div>

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
          v-if="false"
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
            <a href="/dashboard">
            @if($tablabel == 'panel')
            <img src="{{ asset('imgs/panel_active.png') }}" class="iconstylemd"/><br>
            <span class="iconnamemd py-1" style="color:#36848C;">
            @{{ $t('general.panel') }} 
             </span>
            @else
            <img src="{{ asset('imgs/panel.png') }}" class="iconstylemd"/><br>
            <span class="iconnamemd py-1">
            @{{ $t('general.panel') }} 
             </span>
            @endif
            </a>
            </div>

            
            <div class="text-center iconcontainer" > 
            <a href="/hub">
            @if($tablabel == 'hub')
            <img src="{{ asset('imgs/hub_icon_active.png') }}" class="iconstylemd"/><br>
            <span class="iconnamemd py-1" style="color:#36848C;">
            @{{ $t('general.hub') }}
             </span>
            @else
            <img src="{{ asset('imgs/hub_icon1.png') }}" class="iconstylemd"/><br>
            <span class="iconnamemd py-1">
            @{{ $t('general.hub') }}
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

    <div style="position:absolute;bottom:110%; left:30%; z-index:2;"  v-if="showDashboardInfo">
                    <info-dialog :buttonText="buttonText" :content="dashboardContent" :type="'infobottomstart'" :next="'hubinfo'"></info-dialog>
                      </div>

                      <div style="position:absolute;bottom:110%; left:19%; z-index:2;"  v-if="showHubInfo">
                    <info-dialog :buttonText="buttonText" :content="hubContent" :type="'infobottom'" :next="'profileInfo'"></info-dialog>
                      </div>

                      <div style="position:absolute;bottom:110%; left:43%; z-index:2;"  v-if="showProfileInfo">
               <info-dialog :buttonText="buttonText" :content="profileContent" :type="'infobottom'" :next="'final'"></info-dialog>
                </div>

         
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
            v-if="false"
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
            <a href="/dashboard" @click="loader">
            @if($tablabel == 'panel')
            <img src="{{ asset('imgs/panel_active.png') }}" class="iconstylesm"/>
            <div class="iconnamesm " style="color:#36848C;">
            @{{ $t('general.panel') }} 
             </div>
            @else
            <img src="{{ asset('imgs/panel.png') }}" class="iconstylesm"/>
            <div class="iconnamesm ">
            @{{ $t('general.panel') }} 
             </div>
            @endif
            </a>
            </div>



            <div class="text-center iconcontainer" > 
            <a href="/hub" @click="loader">
            @if($tablabel == 'hub')
            <img src="{{ asset('imgs/hub_icon_active.png') }}" class="iconstylesm"/>
            <div class="iconnamesm " style="color:#36848C;">
            @{{ $t('general.hub') }}
             </div>
            @else
            <img src="{{ asset('imgs/hub_icon1.png') }}" class="iconstylesm"/>
            <div class="iconnamesm ">
            @{{ $t('general.hub') }}
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
