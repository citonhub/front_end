<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="  col-lg-6 offset-lg-3 py-0 px-0 my-0 scrollerStyle" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
             <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Organizations</span>
         </div>
         <div class="col-2 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; " >
             <v-btn icon color="#4495a2" @click="gotToCreateOrg" ><v-icon>mdi-plus-circle-outline</v-icon></v-btn>
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0 " >
            <div class="row my-2 py-2 px-2 " v-if="organizations !=  null">
          

             <div class="col-md-6 " v-for="(org,index) in organizations" :key="index">
             <v-card color="#ffffff"  @click="goToOrg(org)">
               <div class="col-12 py-2 my-0">

                  <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                       <v-img  :background-color="org.background_color" :src="org.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ org.image_name +'.' + org.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-9" style="align-items:center;">
                       <div>
                      <span class="titleTextNew d-block">{{org.name}}</span>
                         <span class=" d-block" style="font-size:12px; color:gray;" v-html="shortenContent(org.description,50)" ></span>
                       </div>
                        
                    </div>

                     <div class="py-1 my-0 d-flex col-4" style="align-items:center; " @click.stop="showOrgMembers(org)">
                         <span style="font-size:12px;color:#595959;" ><v-icon color="#3E8893">mdi-account-multiple mdi-18px</v-icon> {{org.members.length}}</span>   
                    </div>

                     <div class="py-1 my-0  col-8 text-right" >
                          <v-btn rounded x-small color="#3E8893" style="font-size:11px;color:white;text-transform:capitalize;" @click.stop="showShareOptions(org)" >invite</v-btn>
                    </div>
                   
                </div>

               </div>
               
             </v-card>
             </div>


             <div v-if="organizations.length == 0" style="height:100%; width:100%; position:absolute; justify-content:center; align-items:center;" class="d-flex">
          
          <div class="text-center">
             <span style="font-size:13px; color:gray;" class="d-block py-3">Not organization found</span>

             <v-btn rounded small @click="gotToCreateOrg" color="#3E8893" style="font-size:11px;color:white;text-transform:capitalize;" >Create</v-btn>
          </div>
         
           
       </div>
              
          </div>



           <div class="row my-2 py-2 px-2 " v-else>

             <div class="col-lg-6 ">
            <v-skeleton-loader height="70px"  type="image"></v-skeleton-loader>
           </div>
              
              <div class="col-lg-6 ">
            <v-skeleton-loader height="70px"  type="image"></v-skeleton-loader>
           </div>

            </div>
        </div>
         </div>
       </div>

        <div  v-if="showmembers" @click="showmembers = false"  style="position:fixed;  height:100%; background:rgba(38, 82, 89,0.5); overflow-y:hidden; overflow-x:hidden; left:0%; top:0%; align-items:center; justify-content:center; z-index:99999;" class="  col-lg-6 offset-lg-3 py-2 my-0 px-0 d-flex ">
           <div   style="position:absolute; height:auto; width:90%; top:20%; left:5%; overflow-y:hidden; overflow-x:hidden; " class="mx-auto pb-2">

            <div @click.stop="showmembers = true" >

              <v-card style="border-radius:10px; "
       height="auto"
       
       class="py-2 px-1 col-8 offset-2 col-md-6 offset-md-3 mb-2 text-center ">
           <span style="font-size:13px;font-family:headerText;">Members</span>
             </v-card>

             <v-card style="border-radius:10px; overflow-y:auto;overflow-x:hidden;"
       height="300px"
      
       class="py-1 col-12 col-lg-8 offset-lg-2 scrollerStyle " >

         <div class="row px-1 py-0 my-0">
              <v-card tile flat class="col-12 py-2 px-2"     style="border-bottom:1px solid #5fb0b9;" v-for="(member,index) in orgMembers" :key="index">
               <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-2" style="align-items:center;justify-content:center; ">
                        <div class="py-0">
                          
                  <div :style="imageStyle(35,null)"
                  class="d-inline-block" >

                  </div>
             
                 
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-8" style="align-items:center;" >
                         <span class="titleTextNew">{{member.user.name}}</span>
                    </div>

                    <div class=" my-1 text-right col-2" >
                      <v-menu bottom left
                transition="slide-y-transition" dense
               
               z-index="9899999696" tile>
                  <template v-slot:activator="{ on, attrs }">
            
              <v-btn small icon  v-bind="attrs" v-if="checkIfisOwner()"
                v-on="on" color="#3E8893"><v-icon>mdi-dots-horizontal</v-icon></v-btn>

                <v-btn small icon  v-bind="attrs" v-else
               ></v-btn>
            </template>

             <v-card tile flat class="py-1 text-center px-4" style="width:auto;  background:white; width:180px;" >
              
          
              
               <span style="font-size:12px;"> Make an Admin</span>


           </v-card>

            <v-card tile flat class="py-1 text-center px-4" style="width:auto;  background:white; width:180px;" >
              
          
              
               <span style="font-size:12px;"> Mute</span>


           </v-card>

            <v-card tile flat class="py-1 text-center px-4" style="width:auto;  background:white; width:180px;" >
              
          
              
               <span style="font-size:12px;"> Block</span>


           </v-card>

            <v-card tile flat class="py-1 pb-2 text-center px-4" style="width:auto;  background:white;  width:180px;" >
              
          
              
               <span style="font-size:12px;"> Remove</span>


           </v-card>
                      </v-menu>
                         
                    </div>

                    
                    <div class="py-0 my-0 " style="align-items:center; position:absolute; top:5%; right:2%;" v-if="member.is_admin">
                         <span style="font-size:10px; color:#4d4d4d;">Admin </span>
                    </div>

                   
                </div>
              </v-card>
              
         </div>

             </v-card>


            </div>
            
           </div>
         </div>

      
     </v-app>
</template>
<script>


export default {
    data(){
        return{
          organizations:null,
          showmembers:false,
          orgMembers:[],
        }
    },
    components: {
   
  },
   mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       this.fetchOrganizations();
        this.$root.isBotLink = false;
    },
    methods:{
      goToOrg:function(org){
        
        this.$router.push({ path: '/panel/main/' + org.org_id });
      },
      showOrgMembers:function(org){
         this.showmembers = true;

         this.orgMembers = org.members;

      },
      checkIfisOwner: function(){

           let userMemberData = this.orgMembers.filter((members)=>{
   
             return members.user_id == this.$root.user_temp_id;
           });

           if(userMemberData.length != 0){

             return userMemberData[0].is_admin;

           }else{
              return false
           }
         
       },
      fetchOrganizations:function(){
         axios.get('get-user-organizations')
          .then(response => {
             
            
            

            if(response.status == 200){

            
               this.organizations = response.data;

               
             
            }
              
            
           
            
          })
          .catch(error => {
              console.log(error)
            
          })
      },
      showShareOptions:function(organization){

           this.$root.shareText  = 'Join ' + organization.name + ' on CitonHub.';
         this.$root.shareLink = 'https://www.citonhub.com/link/org/'+ organization.organization_id + '/' + this.$root.username;

         this.$root.showShare = true;

        

        },
       shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
      gotToCreateOrg:function(){


         this.$router.push({ path: '/panel/organization/create' });

      },
       imageStyle:function(dimension,user){
      

      if(user == null){
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
          
         this.$router.push({ path: '/panel/main/' + this.$root.orgIdRoot });
        },
   
   
    },
   
}
</script>
<style>
 .titleTextNew{
    font-size:13px; 
    font-family:HeaderText; 
    color:#35747e;
}

.avatarImg{
  border-radius:50%;
  border: 3px solid #3E8893;
}
</style>