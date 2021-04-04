<template>
    <div>
        <!-- large and medium screen top bar -->
    
     <div class="col-12 d-none d-md-block py-0 px-2" style="position:absolute; top:0; left:0; font-family:BodyFont;">

         <div  class="row">
            <div class="col-lg-5 col-md-1 pb-0  text-left px-lg-4">
                 <v-btn icon @click="that.$root.showSideBar = true" class="mt-2  "><v-icon style="font-size:25px;color:black;" >las la-bars</v-icon></v-btn>
            </div>
             <div class="col-lg-7 pb-0 col-md-10 offset-md-1 offset-lg-0">
                <div class="row">
                  <div class="col-lg-6 col-md-5 pb-1 text-center">
                 
                      <v-text-field
                style="font-size:13px;"
                
                 placeholder="Search for People"
              filled
              dense
            
              v-model="profileName"
              @input="fetchSearchResult"
           
            append-icon="las la-search"
            rounded
             ></v-text-field>

               <!-- profile search -->

                  <template v-if="profileName != '' ">

                 <v-card style="position:absolute; top:58%;  border-radius:0px;  width:100%; max-height:400px;z-index:99999999999999; left:0px; height:auto; overflow-y:auto;"  class="d-flex flex-column px-1 py-2">

                   <v-card  @click="goToProfile(user)" tile flat class="px-1 py-2 d-flex flex-row" style="border-bottom:1px solid #c5c5c5;align-items:center;"   v-for="user in fetchedUser"  :key="user.user_temp_id">
                   
                   <div style="white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">
                        <span style="font-size:13px;font-family:MediumFont;" class="mr-1">{{user.name}} <span style="font-family:BodyFont;">@{{ user.username }}</span> </span> 
                   </div>

                   </v-card>

                 </v-card>
                  </template>

               <!-- ends -->
           
  

             
                  </div>

                <div class="col-lg-2 pb-1 col-md-2 text-right">
                       <template v-if="this.$root.authProfile.name" >

                      <v-btn icon @click="goToNotification"> 
                   <v-badge
               :content="this.$root.authProfile.unread" 
                   v-if="this.$root.authProfile.unread > 0"
                color="green">
                <v-icon style="font-size:25px;color:#263238;" >las la-bell</v-icon>
                   </v-badge>

                    <v-icon style="font-size:25px;color:#263238;" v-else >las la-bell</v-icon>
                </v-btn>

                  </template>
                </div>
                  <div class="col-lg-4 pb-1 col-md-5 py-1 d-flex" style="justify-content:center; align-items:center;"> 
                     
                         <div class="mb-5"  style="cursor:pointer;">
                                <v-card  elevation-2 class=" d-flex   py-1 px-2" style="border-radius:30px; justify-content:center; align-items:center;"> 
                         
                                 <template v-if="this.$root.authProfile.name">

                                    <div  class="d-inline-block mr-2" :style="imageStyleUser(30,this.$root.authProfile)"  ></div>
                              
                              
                              <span style="font-family:MediumFont; font-size:13px;color:black; " class="pr-1" >{{this.$root.authProfile.name}}</span>
                             
                                 </template>
                           
                               
                        
                     </v-card>

                          </div>
                    
                  </div>
                </div>
            </div>
        
       

         </div>

     </div>

     <!-- top bar smaller screen -->

       <div class="col-12  d-md-none d-block py-2 " style="position:absolute; top:0; left:0; font-family:BodyFont; z-index:99999999999999;">

         <div class="row px-2">
             <v-card  style="border-radius:7px;" class="col-12 py-2 px-1">
                   <div class="row">
                   <div class="col-2 py-0  text-center">
                 <v-btn icon @click="that.$root.showSideBar = true"><v-icon style="font-size:25px;color:#263238;" >las la-bars</v-icon></v-btn>
            </div>
             <div class="col-6 d-flex py-0 px-1" style="justify-content:center;align-items:center;">
       
             <input @keydown="searchTable=true" @input="fetchSearchResult" style="width:100%;heigth:100%;font-size:12px;"  placeholder="Search for people" class="py-2 px-2" type="search" :value="profileName" >       
         
            </div>
             <div class="col-2 text-center py-0">
                 <template v-if="this.$root.authProfile.name" >

                      <v-btn icon @click="goToNotification"> 
                   <v-badge
                  dot
                   v-if="this.$root.authProfile.unread > 0"
                color="green">
                <v-icon style="font-size:23px;color:#263238;" >las la-bell</v-icon>
                   </v-badge>

                    <v-icon style="font-size:23px;color:#263238;" v-else >las la-bell</v-icon>
                </v-btn>

                  </template>
            </div>
             <div class="col-2 d-flex px-1 py-0" style="justify-content:center; align-items:center;">
                 
                  <template v-if="this.$root.authProfile.name">
                 <div :style="imageStyleUser(32,this.$root.authProfile)"></div>
                </template>

            </div>
                   </div>


                   <template v-if="profileName != '' ">
                       <v-card style="position:absolute; border-radius:0px; top:110%; width:100%; max-height:400px;z-index:99999999999999; left:0px; height:auto; overflow-y:auto;"  class="d-flex flex-column px-1 py-2">

                   <v-card  @click="goToProfile(user)" tile flat class="px-1 py-2 d-flex flex-row" style="border-bottom:1px solid #c5c5c5;align-items:center;"   v-for="user in fetchedUser"  :key="user.user_temp_id">
                   
                   <div style="white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">
                        <span style="font-size:13px;font-family:MediumFont;" class="mr-1">{{user.name}} <span style="font-family:BodyFont;">@{{ user.username }}</span> </span> 
                   </div>

                   </v-card>

                 </v-card>
                   </template>
                 
             </v-card>
         </div>

     </div>

              


    </div>
</template>
<script>
export default {
     data () {
      return {
       showSideBar:false,
       searchType:'',
       that:this,
       profileName:'',
       fetchedUser:'',
       searchTable:false
      }
    },
    mounted(){
      this.$root.TopBarComponent = this;
    },
    methods:{
       goToNotification: function(){

        this.$router.push({ path:'/board/notifications'});

      },
      
      imageStyleUser:function(dimension,data){

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         let imgLink = data.image_name + '.' + data.image_extension;
         
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         
         
          return styleString;
      }

      
     },
     fetchSearchResult(e){
       this.profileName = e.target.value
       this.searchTable=true
       if(this.profileName == '') return
       axios.get(`/profile-search/${this.profileName}`)
       .then(
         response=>{
           if(response.status==200){

this.fetchedUser=response.data.profiles

           }
         }
       )
      },
        getUserLevel: function(points){
let imageUrl = '';
          
  if(points >= 0 && points <= 99){
    imageUrl += '/imgs/steel.svg'

  }
  else if(points >= 100 && points <= 299 ){

   imageUrl +='/imgs/bronze.svg'
  }
   else if(points >= 300 && points <= 599 ){ 
   
imageUrl += '/imgs/silver.svg' 
}
    else if(points >= 600 && points <= 999 ){ 

imageUrl += '/imgs/gold.svg'
   }
 else if(points >= 1000 && points <= 1499 ){ 
   
imageUrl +='/imgs/platinum.svg'
}
  else if(points >= 1500 && points <= 9999 ){ 
      
 imageUrl += '/imgs/diamond.svg'
}

  return imageUrl;

    },
      goToProfile(user){
    
    this.profileName = '';
     this.$root.profilePageComponent.mainUserName=user.username
    this.$root.selectedUsername= user.username
        if(this.$router.currentRoute.path.indexOf('profile') >= 0){

 this.$router.push({ path:'/profile-search/' + user.username})
        }

        else{
           this.$router.push({ path:'/profile/' + user.username})
        }
        this.$root.profilePageComponent.fetchProfileContent()
  this.searchTable=false
        
      },

    
    
    }
}
</script>
<style scoped>

</style> 