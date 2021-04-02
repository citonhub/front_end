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
              @keydown="searchTable=true"
            append-icon="las la-search"
            rounded
             ></v-text-field>

           

            

             
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
       
             <input @keydown="searchTable=true" style="width:100%;heigth:100%;font-size:12px;"  placeholder="Search for people" class="py-2 px-2" type="search" v-model="profileName" >       
         
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
             </v-card>
         </div>

     </div>

     <!-- ends -->

       <!--search display box-->

<div class="box d-lg-block  d-sm-none" v-if="searchTable" style="position:absolute;background:white;height:390px;width:380px;top:66px;left:580px;border-radius:20px 20px 0px 0px;overflow-y:scroll;" >
<div class="mt-1 ml-4">{{profileName}}</div>
  <div @click="goToProfile(user)"   v-for="user in fetchedUser"  :key="user.user_temp_id" class="ml-4 mt-1" >
{{user.username}}
  </div>
  
</div>

<!--medium screens-->

<div class="box d-lg-none d-md-block  d-sm-none" v-if="searchTable" style="position:absolute;background:white;height:340px;width:240px;top:66px;left:150px;border-radius:20px 20px 0px 0px;overflow-y:scroll;" >
<div class="mt-1 ml-4">{{profileName}}</div>
  <div @click="goToProfile(user)"   v-for="user in fetchedUser"  :key="user.user_temp_id" class="ml-4 mt-1" >
{{user.username}}
  </div>
  
</div>



             <!--ends-->

             <!--small screens-->

<div class="box d-lg-none d-md-none  d-sm-block shadow" v-if="searchTable" style="position:absolute;background:white;height:340px;width:340px;top:64px;left:130px;overflow-y:scroll;" >
<div class="mt-1 ml-4">{{profileName}}</div>
  <div @click="goToProfile(user)"   v-for="user in fetchedUser"  :key="user.user_temp_id" class="ml-4 mt-1" >
{{user.username}}
  </div>
  
</div>
             <!--ends-->
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
     fetchSearchResult(){
       axios.get(`/profile-search/${this.profileName}`)
       .then(
         response=>{
           if(response.status==200){
console.log(response.data.profiles[0].username)
this.fetchedUser=response.data.profiles

           }
         }
       )
      },
      goToProfile(user){

   

       if( this.$root.selectedSpace.type == 'Bot' ) return
        this.$root.selectedUsername = user.username;
         this.$router.push({ path:'/profile-view/' + user.username})
      },
    
    }
}
</script>
<style scoped>

</style> 