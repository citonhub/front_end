<template>
    <div>
        <div class="row"  v-for="(notification, index) in Notifications" :key="index" >

               <!-- new duel -->
               <v-card tile flat class="col-12 py-1 px-0 my-0" :color="notification.status == 'unread' ? '#dbedf0' : '#ffffff'" style="border-bottom:1px solid #5fb0b9;"   @click="handleNotify(notification)" 
                   v-if="notification.type == 'new_duel' && notification.dataArray[0] != null"  
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  >
                 <div>
                  <div :style="imageStyle(34,notification.duel_owner)" 
                  class="d-inline-block" >

                  </div>

               </div>
               
            
                <div class="d-inline-block ml-2 mt-1">
                  <span  class="d-block titleText"><b>{{ $t('profile.duel_created', { name: notification.duel_owner.username }) }}</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>
                   
                    <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">{{$t('general.title')}}: {{notification.dataArray[0].title}} </div>
                         <div style="font-size:12px; color:#595959;" class="col-12 py-0">{{$t('profile.max_participant')}}: {{notification.dataArray[0].max_participant}} </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>


              <!-- duel_like -->
               <v-card tile flat class="col-12 py-1 px-0 my-0" :color="notification.status == 'unread' ? '#dbedf0' : '#ffffff'" style="border-bottom:1px solid #5fb0b9;"   @click="handleNotify(notification)" 
                   v-if="notification.type == 'duel_like'  && notification.duel_data != null"  
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  v-if="notification.dataArray.length == 1">
                 <div>
                  <div :style="imageStyle(34,notification.dataArray[0])" 
                  class="d-inline-block" >

                  </div>

               </div>
               
            
                <div class="d-inline-block ml-2 mt-1">
                  <span  class="d-block titleText"><b> {{ $t('profile.duel_like', { name: notification.dataArray[0].username }) }}</b></span>
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
                  <span  class="d-block titleText"><b>{{ $t('profile.duel_likes', { name: notification.dataArray[0].username, count: notification.dataArray.length - 1 }) }}</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>
                   
                    <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                         <div style="font-size:12px; color:#595959;" class="col-12 py-1">{{$t('general.title')}}: {{notification.duel_data.title}} </div>
                         <div style="font-size:12px; color:#595959;" class="col-12 py-0">{{$t('duels.participant')}}: {{notification.duel_data.current_participant}} </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>


               <!-- duel comment -->
               <v-card tile flat class="col-12 py-1 px-0 my-0" :color="notification.status == 'unread' ? '#dbedf0' : '#ffffff'" style="border-bottom:1px solid #5fb0b9;"   @click="handleNotify(notification)" 
                   v-if="notification.type == 'duel_comment' && notification.duel_data != null"  
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  v-if="notification.dataArray.length == 1">
                 <div>
                  <div :style="imageStyle(34,notification.dataArray[0])" 
                  class="d-inline-block" >

                  </div>

               </div>
               
            
                <div class="d-inline-block ml-2 mt-1">
                  <span  class="d-block titleText"><b>{{ $t('profile.duel_comment', { name: notification.dataArray[0].username }) }}</b></span>
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
                  <span  class="d-block titleText"><b>{{ $t('profile.duel_comments', { name: notification.dataArray[0].username, count: notification.dataArray.length - 1 }) }}</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>
                   
                    <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                        <div style="font-size:12px; color:#595959;" class="col-12 py-1">{{$t('general.title')}}: {{notification.duel_data.title}} </div>
                         <div style="font-size:12px; color:#595959;" class="col-12 py-0">{{$t('duels.participant')}}: {{notification.duel_data.current_participant}} </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>



              <!-- duel join -->
               <v-card tile flat class="col-12 py-1 px-0 my-0" :color="notification.status == 'unread' ? '#dbedf0' : '#ffffff'" style="border-bottom:1px solid #5fb0b9;"   @click="handleNotify(notification)" 
                   v-if="notification.type == 'duel_join' && notification.duel_data != null"  
                      >
                <div class="row py-0 my-0 px-2">
                    <div class="col-12 py-0 d-flex "  v-if="notification.dataArray.length == 1">
                 <div>
                  <div :style="imageStyle(34,notification.dataArray[0])" 
                  class="d-inline-block" >

                  </div>

               </div>
               
            
                <div class="d-inline-block ml-2 mt-1">
                  <span  class="d-block titleText"><b>{{ $t('profile.duel_join', { name: notification.dataArray[0].username }) }} </b></span>
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
                  <span  class="d-block titleText"><b>
                     {{ $t('profile.duel_joins', { name: notification.dataArray[0].username, count: notification.dataArray.length - 1 }) }}</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>
                   
                    <div class="py-0 my-0 d-flex col-12 " style="align-items:center;">
                        <div class="row py-0 px-0">
                          <div style="font-size:12px; color:#595959;" class="col-12 py-1">{{$t('general.title')}}: {{notification.duel_data.title}} </div>
                         <div style="font-size:12px; color:#595959;" class="col-12 py-0">{{$t('duels.participant')}}: {{notification.duel_data.current_participant}} </div>
                        </div>
                         
                    </div>
                   
                </div>
             </v-card>
              
 



              <!-- project comment -->

         <v-card tile flat class="col-12 py-1 px-0 my-0" :color="notification.status == 'unread' ? '#dbedf0' : '#ffffff'" style="border-bottom:1px solid #5fb0b9;"  @click="handleNotify(notification)" 
                    v-if="notification.type == 'new_project_comment' && notification.project_data != null"   >
                <div class="row py-0 my-0 px-2">

                 <div class="col-12 py-0 d-flex "  v-if="notification.dataArray.length == 1">
                 <div>
                  <div :style="imageStyle(34,notification.dataArray[0])" 
                  class="d-inline-block" >

                  </div>

               </div>
                <div class="d-inline-block ml-2 mt-1">
                  <span  class="d-block titleText"><b>
                     
                      {{ $t('profile.project_comment', { name: notification.dataArray[0].username, title:notification.project_data.title  }) }} 
                       </b></span>
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
                  <span  class="d-block titleText px-1"><b>
                       {{ $t('profile.project_comments', { name: notification.dataArray[0].username, title:notification.project_data.title , count: notification.dataArray.length - 1  }) }} 
                       </b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>

                </div>
             </v-card>


   <!-- project created -->

         <v-card    tile flat class="col-12 py-1 px-0 my-0" :color="notification.status == 'unread' ? '#dbedf0' : '#ffffff'" style="border-bottom:1px solid #5fb0b9;"  @click="handleNotify(notification)" 
                    v-if="notification.type == 'new_project' && notification.project_data != null"   >
                <div class="row py-0 my-0 px-2">

                 <div class="col-12 py-0 d-flex "  v-if="notification.dataArray.length == 1">
                 <div>
                  <div :style="imageStyle(34,notification.dataArray[0])" 
                  class="d-inline-block" >

                  </div>

               </div>
                <div class="d-inline-block ml-2 mt-1">
                  <span  class="d-block titleText"><b>
                     
                     {{ $t('profile.project_created', { name: notification.dataArray[0].username, title:notification.project_data.title  }) }} 
                      </b></span>
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
                  <span  class="d-block titleText"><b>
                     {{ $t('profile.new_connection', { name: notification.dataArray[0].username }) }}  
                     </b></span>
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
                  <span  class="d-block titleText"><b>
                      {{ $t('profile.new_connections', { name: notification.dataArray[0].username,count: notification.dataArray.length - 1}) }}  </b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>


                </div>
             </v-card>


         <!-- new space invitation -->

             <v-card tile flat class="col-12 py-1 px-0 my-0" :color="notification.status == 'unread' ? '#dbedf0' : '#ffffff'" style="border-bottom:1px solid #5fb0b9;"
               
                    v-if="notification.type == 'space_invitation' && notification.space != null"   >
                <div class="row py-0 my-0 px-2">

                 <div class="col-12 py-0 d-flex "  v-if="notification.dataArray.length == 1">
                 <div>
                  <div :style="imageStyle(34,notification.dataArray[0])" 
                  class="d-inline-block" >

                  </div>

               </div>
                <div class="d-inline-block ml-2 mt-1">
                  <span  class="d-block titleText"><b>
                     {{ $t('profile.space_invite', { name: notification.dataArray[0].username,space_name:notification.space.name , space_type:notification.space.type}) }}
                      </b></span>
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
                  <span  class="d-block titleText"><b>
                      {{ $t('profile.space_invite', { name: notification.dataArray[0].username,space_name:notification.space.name , space_type:notification.space.type}) }}
                      </b>
                      </span>

                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(notification.created_at)}} at {{formatTime(notification.created_at)}}</b></span>
                   
                </div>

                </div>

                 <div class="ml-2 mt-1 col-12 px-2 py-0 text-center">
                   
                   <v-btn rounded  x-small  type="submit" color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" 
                   @click="handleNotify(notification)"  >{{$t('general.join')}}</v-btn>
                   
                </div>


                </div>
             </v-card>

 

           <!-- new message -->
             

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

        if(notification.type == 'space_invitation'){
        
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