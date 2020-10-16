<template>
<div class="fixed-layout">
 

   <div style="width:100%; height:auto; overflow-y:hidden; overflow-x:hidden; ">

      <div v-if="this.$root.showCodeEditor">
            <code-viewer></code-viewer>
      </div>
     
     <share v-if="this.$root.showShare"></share>
      <div v-if="this.$root.fullImageViewer">
            <full-image-viewer></full-image-viewer>
      </div>

       <library-shelves v-if="this.$root.showShelves"></library-shelves>

        <on-boarding  :content="this.$root.boardContent"  v-if="this.$root.showBoard" :btnLabel="this.$root.boardBtnLabel"></on-boarding>
      
      <router-view></router-view>
   
      

    
      
     
   </div>

</div>
  
</template>

<script>
 export default {
    data () {
      return {
        
      }
    },
    mounted(){
    this.fetchUserDetails();
    },
    methods:{
      fetchUserDetails: function(){
         if(this.$root.profileDetails == null){

            let user = this.$route.params.username;

            

           if(user == 'user'){
             user = this.$root.username;

           }

            axios.get('/fetch-profile-'+ user)
      .then(response => {
      
      if (response.status == 200) {
           
           let userProfile = response.data[1];
           let user = response.data[0];

           
           
          let userDetails = {
          'username':user.username,
          'name': user.name,
          'coin': userProfile.coins,
          'image_name': userProfile.image_name,
          'image_extension': userProfile.image_extension,
          'connected': userProfile.connected,
          'about': userProfile.about,
          'Interests': userProfile.interestsArray,
          'connections': userProfile.connections,
          'background_color': userProfile.background_color
          };
            

          
        this.$root.profileDetails = userDetails;
        
       
        
        
     }
       
     
     })
     .catch(error => {
    
     }) 

         }
      }
    }
  }
</script>
<style >
  .fixed-layout{
    position: fixed;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
   
  }
  
</style>
