<template>
<div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute;z-index:20; background:white; height:100%;">
     <profile-top></profile-top>
<v-app style="background:white; font-family:BodyText;position:absolute;left:0; width:100%; height:80%; overflow-y:auto; overflow-x:hidden; padding-top:40px;padding-bottom:120px;">
     
      <div>
         <div class="col-12 py-0 my-2" v-for="(team,index) in Teams" :key="index">
            
            <v-card class="py-1 pb-0 px-2" >
                    <div class="col-12 py-0  my-0 ">
                         <div class="row py-1 my-0">
                           <div class="col-2  d-flex py-0 my-0 px-1" style="align-items:center; justify-content:center;">
                            
                              <div class="py-1">
                            <div   :style="imageStyle(38,team)"  
                          class="d-inline-block" >

                        </div>
                             </div>   
                            
                           </div>

                           <div class="col-6 d-flex py-0 my-0 px-1" style="align-items:center; ">
                               <span class="titleText">{{team.spaceName}}</span>
                           </div>

                            <div class="col-4 d-flex py-0 my-0 px-1 text-center" style="align-items:center; justify-content:center;">
                                <span class="projects d-block ">Projects</span>
                               <span class="messagesBadges mx-1"> <span class="px-1 py-1">{{team.projects}}</span></span>
                           </div>

                         </div>
                      
                    </div> 
                     
                   
            </v-card>
         </div>

         
     </div>  
      
      
       

</v-app>    
</div>

</template>
<script>
export default {
     data(){
        return{
         
         Teams:[]
          
        }
    },
     components: {
   
  },
    mounted(){
      
      this.fecthTeams();
    },
    methods:{
       goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
         fecthTeams:function(){
       
        axios.get('/fetch-teams-' + this.$route.params.username )
      .then(response => {
      
      if (response.status == 200) {
        
       this.Teams = response.data;
       
     }
       
     
     })
     .catch(error => {
    
     }) 
      },
      imageStyle:function(dimension,team){
      

      if(team.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         styleString += 'background-color:#ffffff; background-image:url(imgs/team.svg);';
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;";
         let imgLink = team.image_name + '.' + team.image_extension;
          styleString += 'background-color:'+ team.background_color + '; background-image:url(imgs/space/'  + imgLink  +  ');';
          return styleString;
      }

      

  },
        
  
  },
}
</script>
<style>

  .titleText{
    font-size:12px; 
    font-family:HeaderText; 
    color:#173236;
}
.circleImg{
     border-radius:50%;
}
.projects{
     color: #173236;
     font-size:12px;
}
.number{
      font-size: 11px;
     color:#737373;
}
.messagesBadges{
    
    color: #ffffff;
    background: #3e868e;
    font-size: 11px;
    border:2px solid #3e868e;
    border-radius:50%;
}
</style>