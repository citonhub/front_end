<template>
     <v-app style="background:transparent; font-family:BodyText;">
        <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; ">
       <div class="row py-1 my-0 px-1" style="background:#a5d2d9;">
          <trend-top></trend-top> 
      </div>
      <div class="col-12 my-1 px-2 text-center py-0">
           <v-text-field
              style="font-size:13px;"
             placeholder="Find connections" 
             dense
             color="#4495a2"
             ></v-text-field>
       </div>
      </div>

       

      
        
        <div class="col-12 py-0 my-0">
          
          <div class="row my-0 py-0 px-2">

               <v-card tile flat class="col-12 py-2 px-2" style="border-bottom:1px solid #5fb0b9;" v-for="(user, index) in connections" :key="index">
               <div class="row py-0 my-0 px-0">
                
                    <div class="py-0 my-0 d-flex col-9" style="align-items:center;" >
                         <div :style="imageStyle(35,user)" @click="viewUser(user)"
                  class="d-inline-block mr-2" >

                  </div>
                        <div @click="viewUser(user)">
                       <span class=" d-block" style="font-size:13px; color:#26535a;">{{ shortenContent(user.name,30)}} </span>
                         <span class=" d-block" style="font-size:11px; color:#595959;"> @{{user.username}}</span>
                        </div>
                        
                    </div>

                    <div class="py-0 my-0 text-center col-3" >
                     <v-btn x-small color="#3E8893" rounded><span style="font-size:10px; color:white;text-transform:capitalize;">connect</span></v-btn>
                    </div>
                <div class="col-12 py-0 " v-if="user.about != null && user.about != '<p></p>'">
                    <span style="font-size:12px; color:#737373;" v-html="shortenContent(user.about,110)">
                      
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
         connections:[]
         
        }
    },
     components: {
   
  },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       this.fetchConnection();
       
       
    },
    methods:{
     
       goBack() {

          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
         shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
         fetchConnection: function(){
          
           axios.get('/fetch-trend-connections' )
      .then(response => {
      
      if (response.status == 200) {
        
       this.connections = response.data;
       
     }
       
     
     })
     .catch(error => {
    
     }) 

        },
        viewUser: function(user){
        this.$root.pageloader = true;
        window.location = '/view-profile#/profile/activities/'+ user.username;
    },
         imageStyle:function(dimension,user){
      

      if(user.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         styleString += 'background-color:#ffffff; background-image:url(imgs/usernew.png);';
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;";
         let imgLink = user.image_name + '.' + user.image_extension;
          styleString += 'background-color:'+ user.background_color + '; background-image:url(imgs/profile/'  + imgLink  +  ');';
          return styleString;
      }
       
         }
      
  },
}
</script>
<style>

</style>