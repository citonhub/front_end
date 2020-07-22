<template>
       <div style="position:absolute; height:92%; width:100%; overflow-y:auto;left:0;top:8%;"> 


         <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left px-1" style="border-bottom:2px solid #3E8893;">
           <v-btn icon color="#3E8893" @click="goBack"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 mt-1 d-flex" style="border-bottom:2px solid #3E8893; align-items:center;justify-content:center;">
            <span  style="font-size:12px; color:#3E8893; font-weight:bolder;font-family:HeaderText;">Members</span>
            <span class="messagesBadges mx-1">
                             <span class=" ">{{Members.length}}</span>
                          </span>
         
          
         </div>
         <div class="col-2 py-0 my-0 text-right px-1"  style="border-bottom:2px solid #3E8893;">
          
         </div>
         </div>
         </div>

         <div class="col-12 py-0 my-0">
         <div class="row my-0 py-0 px-2">

              <v-card tile flat class="col-12 py-2 px-2" color="#edf6f7"  @click="memberHandler"  style="border-bottom:1px solid #5fb0b9;" v-for="(member, index) in Members" :key="index">
               <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-2" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                          
                  <div :style="imageStyle(35,member)"
                  class="d-inline-block" >

                  </div>
             
                 
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-10" style="align-items:center;" v-if="checkIfUser(member.id)">
                         <span class="titleText">You</span>
                    </div>

                    <div class="py-0 my-0 d-flex col-10" style="align-items:center;" v-else>
                         <span class="titleText">{{ shortenContent(member.name,30)}} </span><span class="newbadge mx-2"> @{{member.username}}</span>
                    </div>

                   
                </div>
              </v-card>
             


            </div>
         </div>
         

       </div>
</template>
<script>
export default {
     data(){
        return{
        
          Members:[],
        }
    },
     components: {
   
  },
    mounted(){
      this.fetchMessages();
      this.fetchMembers();
    },
    methods:{
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

      

  },
       goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        memberHandler: function(){

        },
         checkIfUser:function(userId){
            if(userId == this.$root.user_temp_id){
                return true;
            }else{
              return false;
            }
            
         },
          fetchMessages: function(){
          
           axios.get('/fetch-space-messages-' + this.$route.params.spaceId )
      .then(response => {
      
      if (response.status == 200) {
        
     
       this.$root.selectedSpace = response.data[1]
       
     }
       
     
     })
     .catch(error => {
    
     }) 

        },
      shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
         fetchMembers: function(){
          
           axios.get('/fetch-space-members-' + this.$route.params.spaceId )
      .then(response => {
      
      if (response.status == 200) {
        
     
       this.Members = response.data.data;
       
     }
       
     
     })
     .catch(error => {
    
     }) 

        },
  
  },
}
</script>
<style>
.documentIcon{
    background: #dbedf0;
    border:1px solid #dbedf0;
    border-radius:50%;
}
.documentTitle{
  font-size: 12px;
  color: #3E8893;
}

.documentSize{
  font-size: 10px;
  color: #a6a6a6;
}

.newbadge{
     font-size:11px;
      color:rgb(38, 82, 89);
     font-family:HeaderText; 
     border:1px solid #3E8893; 
     border-radius:9px; 
     padding: 2px 4px;
     background:#edf6f7;
     font-weight: bolder;
 } 
 .messagesBadges{
    
    color: #3e868e;
    background: #ffffff;
    font-size: 11px;
    padding: 4px 8px;
    border:2px solid #3e868e;
    border-radius:50%;
}
</style>