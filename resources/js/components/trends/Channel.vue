<template>
     <v-app style="background:transparent; font-family:BodyText;">
        <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" style="background:#a5d2d9;">
          <trend-top></trend-top> 
      </div>
      <div class="col-12 my-1 px-2 text-center py-0">
           <v-text-field
              style="font-size:13px;"
             placeholder="Find channels" 
             dense
             color="#2d646c"
             ></v-text-field>
       </div>
      </div>

      
        
        <div class="col-12 py-0 my-0">
          
          <div class="row my-0 py-0 px-2">
          
           <v-card tile flat class="col-12 py-1 px-0 my-0"  color="#ffffff" style="border-bottom:1px solid #5fb0b9;" v-for="(space,index) in allChannels"
                      :key="index">
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                          <v-img  :background-color="space.background_color" :src="space.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ space.image_name +'.' + space.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-5" style="align-items:center;">
                       <div>
                      <span class="titleText d-block">{{space.name}}</span>
                         <span class=" d-block" style="font-size:11px;">{{ space.members }} Members</span>
                       </div>
                        
                    </div>
                    <div class="py-0 my-0 d-flex col-4" style="align-items:center; justify-content:center;">
                          <span class="mybadgenew">
                               @{{ space.username }}
                          </span>
                    </div>
                </div>
             </v-card>

             <div class="col-12 py-5 my-5">

                

             </div>

          </div>
           
        </div>
        
              
  


      
         </div>
        </div>
     </v-app>
</template>
<script>



export default {
    data(){
        return{
         
         allChannels:null,
         
        }
    },
     components: {
   
  },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;

       this.fetchChannel();
       
       
    },
    methods:{
     
      fetchChannel: function(){
          
           axios.get('/fetch-trend-channels' )
      .then(response => {
      
      if (response.status == 200) {
        
       this.allChannels = response.data;

      
       
      }
       
     
     })
     .catch(error => {
    
     }) 

        },
       goBack() {

          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
       
    
      
  },
}
</script>
<style>
.titleText{
    font-size:13px; 
    font-family:HeaderText; 
    color:#173236;
}
.avatarImg{
  border-radius:50%;
  border: 3px solid #3E8893;
}
.messagesBadges{
    
    color: #ffffff;
    background: #3e868e;
    font-size: 11px;
    font-family: HeaderText;
    font-weight: bolder;
    border:2px solid #3e868e;
    border-radius:50%;
}
 .coin{
  font-size: 10px;
  font-weight: bolder;
  font-family:HeaderText;
  color: white;
}
.mybadgenew{
     font-size:10px;
     color:#2d646c;
     font-family:HeaderText; 
     border:1px solid #2d646c; 
     border-radius:10px; 
     padding: 2px 4px;
     background:#ffffff;
     font-weight: bolder;
 } 
</style>