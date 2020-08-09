<template>
    <div>
        <div class="row"  v-for="(notification, index) in Notifications" :key="index" >

               <!-- new duel -->
               <v-card tile flat class="col-12 py-1 px-0 my-0" :color="notification.status == 'unread' ? '#dbedf0' : '#ffffff'" style="border-bottom:1px solid #5fb0b9;"   @click="handleNotify(notification)" 
                   v-if="notification.type == 'new_duel'"  
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  >
                 <div>
                  <div :style="imageStyle(34,notification.duel_owner)" 
                  class="d-inline-block" >

                  </div>

               </div>
               
            
                <div class="d-inline-block ml-2 mt-1">
                  <span  class="d-block titleText"><b>{{notification.duel_owner.username}} created a duel</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>
                   
                    <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">Title: {{notification.dataArray[0].title}} </div>
                         <div style="font-size:12px; color:#595959;" class="col-12 py-0">Max_Participants: {{notification.dataArray[0].max_participant}} </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>


              <!-- duel_like -->
               <v-card tile flat class="col-12 py-1 px-0 my-0" :color="notification.status == 'unread' ? '#dbedf0' : '#ffffff'" style="border-bottom:1px solid #5fb0b9;"   @click="handleNotify(notification)" 
                   v-if="notification.type == 'duel_like'"  
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  v-if="notification.dataArray.length == 1">
                 <div>
                  <div :style="imageStyle(34,notification.dataArray[0])" 
                  class="d-inline-block" >

                  </div>

               </div>
               
            
                <div class="d-inline-block ml-2 mt-1">
                  <span  class="d-block titleText"><b>{{notification.dataArray[0].username}} liked your duel</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>

                   <div class="col-12 py-0  px-0"  v-else>
                     
                           
                           <div class="col-12 py-0 px-2">
                                <div v-for="(user,index) in notification.dataArray" :key="index" class="d-inline-block mx-1">
                  <div :style="imageStyle(25,user)" 
                   >

                    </div>

                     </div>
                           </div>
                      
                
               
            
                <div class="ml-2 mt-1 col-12 px-2 py-0">
                  <span  class="d-block titleText"><b>{{notification.dataArray[0].username}}  and {{ notification.dataArray.length - 1 }} others liked your duel</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>
                   
                    <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">Title: {{notification.duel_data.title}} </div>
                         <div style="font-size:12px; color:#595959;" class="col-12 py-0">Current_Participants: {{notification.duel_data.current_participant}} </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>


               <!-- duel comment -->
               <v-card tile flat class="col-12 py-1 px-0 my-0" :color="notification.status == 'unread' ? '#dbedf0' : '#ffffff'" style="border-bottom:1px solid #5fb0b9;"   @click="handleNotify(notification)" 
                   v-if="notification.type == 'duel_comment'"  
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  v-if="notification.dataArray.length == 1">
                 <div>
                  <div :style="imageStyle(34,notification.dataArray[0])" 
                  class="d-inline-block" >

                  </div>

               </div>
               
            
                <div class="d-inline-block ml-2 mt-1">
                  <span  class="d-block titleText"><b>{{notification.dataArray[0].username}} commented on your duel</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>

                   <div class="col-12 py-0  px-0"  v-else>
                     
                           
                           <div class="col-12 py-0 px-2">
                                <div v-for="(user,index) in notification.dataArray" :key="index" class="d-inline-block mx-1">
                  <div :style="imageStyle(25,user)" 
                   >

                    </div>

                     </div>
                           </div>
                      
                
               
            
                <div class="ml-2 mt-1 col-12 px-2 py-0">
                  <span  class="d-block titleText"><b>{{notification.dataArray[0].username}}  and {{ notification.dataArray.length - 1 }} others commented on your duel</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>
                   
                    <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">Title: {{notification.duel_data.title}} </div>
                         <div style="font-size:12px; color:#595959;" class="col-12 py-0">Current_Participants: {{notification.duel_data.current_participant}} </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>



              <!-- duel join -->
               <v-card tile flat class="col-12 py-1 px-0 my-0" :color="notification.status == 'unread' ? '#dbedf0' : '#ffffff'" style="border-bottom:1px solid #5fb0b9;"   @click="handleNotify(notification)" 
                   v-if="notification.type == 'duel_join'"  
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  v-if="notification.dataArray.length == 1">
                 <div>
                  <div :style="imageStyle(34,notification.dataArray[0])" 
                  class="d-inline-block" >

                  </div>

               </div>
               
            
                <div class="d-inline-block ml-2 mt-1">
                  <span  class="d-block titleText"><b>{{notification.dataArray[0].username}} joined your duel</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>

                   <div class="col-12 py-0  px-0"  v-else>
                     
                           
                           <div class="col-12 py-0 px-2">
                                <div v-for="(user,index) in notification.dataArray" :key="index" class="d-inline-block mx-1">
                  <div :style="imageStyle(25,user)" 
                   >

                    </div>

                     </div>
                           </div>
                      
                
               
            
                <div class="ml-2 mt-1 col-12 px-2 py-0">
                  <span  class="d-block titleText"><b>{{notification.dataArray[0].username}}  and {{ notification.dataArray.length - 1 }} others joined your duel</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>
                   
                    <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">Title: {{notification.duel_data.title}} </div>
                         <div style="font-size:12px; color:#595959;" class="col-12 py-0">Current_Participants: {{notification.duel_data.current_participant}} </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>
              
 



              <!-- project comment -->

         <v-card tile flat class="col-12 py-1 px-0 my-0" :color="notification.status == 'unread' ? '#dbedf0' : '#ffffff'" style="border-bottom:1px solid #5fb0b9;"  @click="handleNotify(notification)" 
                    v-if="notification.type == 'new_project_comment'"   >
                <div class="row py-0 my-0 px-2">

                 <div class="col-12 py-0 d-flex "  v-if="notification.dataArray.length == 1">
                 <div>
                  <div :style="imageStyle(34,notification.dataArray[0])" 
                  class="d-inline-block" >

                  </div>

               </div>
                <div class="d-inline-block ml-2 mt-1">
                  <span  class="d-block titleText"><b>{{notification.dataArray[0].username}} commented on your project:{{ notification.project_data.title }} </b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>

                   <div class="col-12 py-0  px-0"  v-else>
                     
                           
                           <div class="col-12 py-0 px-2">
                                <div v-for="(user,index) in notification.dataArray" :key="index" class="d-inline-block mx-1">
                  <div :style="imageStyle(25,user)" 
                   >

                    </div>

                     </div>
                           </div>
                      
                
               
            
                <div class="ml-2 mt-1 col-12 px-2 py-0">
                  <span  class="d-block titleText"><b>{{notification.dataArray[0].username}}  and {{ notification.dataArray.length - 1 }} others commented on your project:{{ notification.project_data.title }}</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>

                </div>
             </v-card>


   <!-- project created -->

         <v-card tile flat class="col-12 py-1 px-0 my-0" :color="notification.status == 'unread' ? '#dbedf0' : '#ffffff'" style="border-bottom:1px solid #5fb0b9;"  @click="handleNotify(notification)" 
                    v-if="notification.type == 'new_project'"   >
                <div class="row py-0 my-0 px-2">

                 <div class="col-12 py-0 d-flex "  v-if="notification.dataArray.length == 1">
                 <div>
                  <div :style="imageStyle(34,notification.dataArray[0])" 
                  class="d-inline-block" >

                  </div>

               </div>
                <div class="d-inline-block ml-2 mt-1">
                  <span  class="d-block titleText"><b>{{notification.dataArray[0].username}} created a new project:{{ notification.project_data.title }} </b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>

                   <div class="col-12 py-0  px-0"  v-else>
                     
                           
                           <div class="col-12 py-0 px-2">
                                <div v-for="(user,index) in notification.dataArray" :key="index" class="d-inline-block mx-1">
                  <div :style="imageStyle(25,user)" 
                   >

                    </div>

                     </div>
                           </div>
                      
                
               
            
                <div class="ml-2 mt-1 col-12 px-2 py-0">
                  <span  class="d-block titleText"><b>{{notification.dataArray[0].username}}  and {{ notification.dataArray.length - 1 }} others created a new project:{{ notification.project_data.title }}</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>

                </div>
             </v-card>



                  <!-- new connections -->

         <v-card tile flat class="col-12 py-1 px-0 my-0" :color="notification.status == 'unread' ? '#dbedf0' : '#ffffff'" style="border-bottom:1px solid #5fb0b9;"  @click="handleNotify(notification)" 
                    v-if="notification.type == 'new_connection'"   >
                <div class="row py-0 my-0 px-2">

                 <div class="col-12 py-0 d-flex "  v-if="notification.dataArray.length == 1">
                 <div>
                  <div :style="imageStyle(34,notification.dataArray[0])" 
                  class="d-inline-block" >

                  </div>

               </div>
                <div class="d-inline-block ml-2 mt-1">
                  <span  class="d-block titleText"><b>{{notification.dataArray[0].username}} connected to you </b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>

                 <div class="col-12 py-0  px-0"  v-else>
                     
                           
                           <div class="col-12 py-0 px-2">
                                <div v-for="(user,index) in notification.dataArray" :key="index" class="d-inline-block mx-1">
                  <div :style="imageStyle(25,user)" 
                   >

                    </div>

                     </div>
                           </div>
                      
                
               
            
                <div class="ml-2 mt-1 col-12 px-2 py-0">
                  <span  class="d-block titleText"><b>{{notification.dataArray[0].username}}  and {{ notification.dataArray.length - 1 }} others connected to you:{{ notification.project_data.title }}</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>


                </div>
             </v-card>
 

           <!-- new message -->
              <v-card tile flat class="col-12 py-1 px-0 my-0" :color="notification.status == 'unread' ? '#dbedf0' : '#ffffff'" style="border-bottom:1px solid #5fb0b9;"  @click="handleNotify(notification)" 
                     v-if="notification.type == 'new_message'"  >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  >
                <div>
                  <div :style="imageStyle(34,notification.space)" 
                  class="d-inline-block" >

                  </div>

               </div>
            
                <div class="d-inline-block ml-2 mt-1">
                 <span  class="d-block titleText"><b>You have {{ notification.dataArray.length }} new messages from {{notification.space.name}}</b></span>
                     <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>
                   
                </div>
             </v-card>

            </div>
    </div>
</template>
<script>
export default {
    props:['Notifications'],
    methods:{
    handleNotify: function(notification){
       
       if(notification.type == 'new_duel'){

         window.location = '/duels#/' + 'duel/' + notification.dataArray[0].duel_id +'/board' + '/user';
        
      

       }

        if(notification.type == 'post_like'){

        window.location = '/#/' + 'post/' + this.$root.username + '/' + notification.basePost.post_id + '/user';
        
     
       }


        if(notification.type == 'post_pulled'){
        
       window.location = '/#/' + 'post/' + this.$root.username + '/' + notification.basePost.post_id + '/user';

       }

        if(notification.type == 'post_comment'){
        
       window.location = '/#/' + 'post/' + this.$root.username + '/' + notification.basePost.post_id + '/user';

       }

        if(notification.type == 'post_comment_like'){
        
       window.location = '/#/' + 'post/comment/' + this.$root.username + '/' + notification.basePost.post_id + '/user';

       }

        if(notification.type == 'post_replied'){
        
       window.location = '/#/' + 'post/comment/' + this.$root.username + '/' + notification.basePost.post_id + '/user';

       }

        if(notification.type == 'post_reply_like'){
        
       window.location = '/#/' + 'post/comment/' + this.$root.username + '/' + notification.basePost.post_id + '/user';

       }


        if(notification.type == 'post_comment_pulled'){
        
       window.location = '/#/' + 'post/comment/' + this.$root.username + '/' + notification.basePost.post_id + '/user';

       }


        if(notification.type == 'post_reply_pulled'){
        
      window.location = '/#/' + 'post/comment/' + this.$root.username + '/' + notification.basePost.post_id + '/user';

       }


        if(notification.type == 'new_project_comment'){
        
        window.location = '/space#/' + notification.project_data.project_slug + '/page-loader/user';

       }

        if(notification.type == 'new_connection'){
        
        this.$router.push({ path: '/profile/connections/' + this.$root.username });

       }

         if(notification.type == 'new_message'){
        
        window.location = '/space#/space/' + notification.space.space_id + '/channel/content/user';

       }

       if(notification.type == 'duel_like'){

         window.location = '/duels#/' + 'duel/' + notification.duel_data.duel_id +'/board' + '/user';

       }
        if(notification.type == 'duel_comment'){

         window.location = '/duels#/' + 'duel/' + notification.duel_data.duel_id +'/board' + '/user';

       }

        if(notification.type == 'duel_join'){

         window.location = '/duels#/' + 'duel/' + notification.duel_data.duel_id +'/board' + '/user';

       }

    },
           formatDate:function(date){
       let Dateformat = moment(date);

        return  Dateformat.format('MMM D,YYYY')
    },
    formatTime:function(date){
       let Dateformat = moment(date);

        return  Dateformat.format('H:mm a');
    },
       imageStyle:function(dimension,data){
            let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;";

            if(data.background_color == null){
               styleString += 'background-color:white; background-image:url(imgs/usernew.png);';
            }else{
               let imgLink = data.image_name + '.' + data.image_extension;
                styleString += 'background-color:'+ data.background_color + '; background-image:url(imgs/profile/'  + imgLink  +  ');';
            }

            return styleString;

        },
    }
}
</script>
<style>


</style>