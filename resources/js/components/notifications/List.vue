<template>
<div>
 
    <div class="col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top" style="position:sticky; background:#F5F5FB; z-index:999999999999; border-bottom:1px solid #c5c5c5;">
      <div class="row">
        <div class="col-6 py-0 my-0">
          <h5>Notifications</h5>
        </div>
         <div class="col-6  py-0 my-0 text-right">
          
        </div>
      </div>
   </div>


    <!--notifications list view -->

  <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 py-0 pb-2 px-2 ">

        <div class="row ">

            <!-- spacer -->
         
           <div class="col-12 mt-5 mt-md-0 d-md-none d-block"> 

           </div>
     <!-- ends -->


        <template v-if="loading">


       <div  class="col-12 mt-4 text-center">

           <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

      </div>

        </template>

        <template v-else>

           <template v-if="notifications.length  == 0">

                <div  class="col-12 mt-md-4  mt-1 px-md-2 px-1">

          <div class="mb-3 px-3" style="font-size:14px;color:black;font-family:BodyFont;">
                   <p><b style="font-family:MediumFont;text-transform:capitalize;">{{ this.$root.authProfile.name }}</b>, welcome to CitonHub! </p>

                   <p>Here is a brief description on each tab:</p>
    
                  <p>
<b style="font-family:MediumFont;">1.) Channel:</b> Create your channel and add a payment plan to earn from teaching people how to code. Voice chat, share your screen, and live code in your channel.
</p>

<p>
   <b style="font-family:MediumFont;">2.) Challenges:</b> Organize challenges in multiple languages to help others.
</p>

<p>
<b style="font-family:MediumFont;">3.) Showcase:</b> Share your project with the community and get reviews. 
</p>

<p>
<b style="font-family:MediumFont;">4.) Diaries:</b> Document your teaching in diaries.
</p>

<p>
<b style="font-family:MediumFont;">5.) Wallet:</b> Your earnings drop here. Pay out to your bank account from your wallet.
</p>

                    </div>

             </div>

           </template>

           <template v-else>

               <div v-for="(notification,index) in notifications" @click="goToNotification(notification)"  :key="index" class="col-12 d-flex flex-row px-0" style="align-items:center;cursor:pointer;border-bottom:1px solid #c5c5c5;">
                <div class="mx-2" >

                   <template v-if="notification.type == 'new_connection' || notification.type == 'space_invitation'" >

                      <div :style="imageStyle(40,notification.dataArray[0],'50%','profile')">

                    </div>

                   </template>

                   <template v-else >

                     

                         <template  v-if="notification.type == 'diary_changes'">

                             <div :style="imageStyle(40,notification.diary,'50%','space')">
  
                             </div>

                         </template>

                         <template v-else>

                            <div :style="imageStyle(40,notification.post_data,'8px','posts')">
  
                             </div>

                         </template>
                        
                     

                     

                   </template>
                   
                </div>
                <div class="pr-2">

                   <template v-if="notification.type == 'post_like'">
                          <template v-if="notification.dataArray.length == 1">

                             <span style="font-family:MediumFont;font-size:13px;">{{notification.dataArray[0].username}}</span> 

                          </template>
                          <template v-else>
                             <span style="font-family:MediumFont;font-size:13px;">{{notification.dataArray[0].username}} and {{notification.dataArray.length - 1}} others</span> 
                          </template>
                     

                      <span style="font-family:BodyFont;font-size:13px;"> liked your project,</span> 

                      <span  style="font-family:MediumFont;font-size:13px;">{{notification.post_data.title}}</span>

                   </template>

                    <template v-if="notification.type == 'post_comment'">
                          <template v-if="notification.dataArray.length == 1">

                             <span style="font-family:MediumFont;font-size:13px;">{{notification.dataArray[0].username}}</span> 

                          </template>
                          <template v-else>
                             <span style="font-family:MediumFont;font-size:13px;">{{notification.dataArray[0].username}} and {{notification.dataArray.length - 1}} others</span> 
                          </template>
                     

                      <span style="font-family:BodyFont;font-size:13px;"> commented on your project,</span> 

                      <span  style="font-family:MediumFont;font-size:13px;">{{notification.post_data.title}}</span>

                   </template>

                    <template v-if="notification.type == 'post_pinned'">
                          <template v-if="notification.dataArray.length == 1">

                             <span style="font-family:MediumFont;font-size:13px;">{{notification.dataArray[0].username}}</span> 

                          </template>
                          <template v-else>
                             <span style="font-family:MediumFont;font-size:13px;">{{notification.dataArray[0].username}} and {{notification.dataArray.length - 1}} others</span> 
                          </template>
                     

                      <span style="font-family:BodyFont;font-size:13px;"> pinned your project,</span> 

                      <span  style="font-family:MediumFont;font-size:13px;">{{notification.post_data.title}}</span>

                   </template>

                    <template v-if="notification.type == 'diary_changes'">
                         
                          <template>
                             <span style="font-family:MediumFont;font-size:13px;">You have {{notification.dataArray.length}} new 
                                <span v-if="notification.dataArray.length > 1">updates</span>
                                <span v-else>update</span>
                                
                                </span> 
                          </template>
                     

                      <span style="font-family:BodyFont;font-size:13px;"> from a diary - </span> 

                      <span  style="font-family:MediumFont;font-size:13px;">{{notification.diary.name}}</span>

                   </template>

                   <template v-if="notification.type == 'new_connection'">
                          <template v-if="notification.dataArray.length == 1">

                             <span style="font-family:MediumFont;font-size:13px;">{{notification.dataArray[0].username}}</span> 

                                <span style="font-family:BodyFont;font-size:13px;"> is now following you</span> 

                          </template>
                          <template v-else>
                             <span style="font-family:MediumFont;font-size:13px;">{{notification.dataArray[0].username}} and {{notification.dataArray.length - 1}} others</span> 
                              <span style="font-family:BodyFont;font-size:13px;"> are now following you</span> 
                          </template>
                  

                   </template>

                    <template v-if="notification.type == 'space_invitation'">
                          <span style="font-family:MediumFont;font-size:13px;">{{notification.dataArray[0].username}}</span> <span style="font-family:BodyFont;font-size:13px;"> is inviting you to join </span><span  style="font-family:MediumFont;font-size:13px;">Js Interns</span>
                     <v-btn x-small color="#3C87CD" style="color:white;text-transform:normal;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Accept</v-btn>
                      <v-btn x-small color="#3C87CD" outlined style="text-transform:normal;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Decline</v-btn>

                   </template>
                   


                     <span class="mx-1" style="font-family:BodyFont;font-size:12px; color:grey;">{{checkDatereal(notification.created_at)}}</span>
                </div>
             </div>

           </template>
         

        </template>
             
             
           

           

          <!-- spacer -->

          <div class="col-12 py-5 my-5">
          </div>

          <!-- ends -->

           

         
          

      
        
      </div>

  </div>

 <!-- ends -->

</div>
  
</template>

<script>
 export default {
    data () {
      return {
         notifications:[],
         loading:false,
      }
     
    },
     mounted(){
     this.$root.showTopBar = true;
     
     this.getNotification();
  
    },

     methods:{
       checkDatereal: function(date){

            var realTimeHour = moment(date).add(1,'hours');

            var aWeekAgo = moment().subtract(7,'days');

            var anHourAgo = moment().subtract(1,'hours');

            if (moment(realTimeHour) >= aWeekAgo) {

               if(moment(realTimeHour) >= anHourAgo){

                    return moment(realTimeHour).fromNow();
                  
               } 

              return moment(realTimeHour).format("h:mm a");
             
            }else{
                return moment(realTimeHour).calendar();
            }
      },
      goToNotification:function(notification){

        if(notification.type == 'new_connection'){

             this.$router.push({ path:'/profile/' + notification.dataArray[0].username})

        }

        if(notification.type == 'diary_changes'){

             this.$root.autoOpenChat = true;

                       this.$root.autoOpenChatId = notification.diary_space.space_id;

                     this.$router.push({ path: '/channels' });

            

        }

        if(notification.type == 'post_like' || notification.type == 'post_pinned' || notification.type == 'post_comment'){

             this.$root.autoOpenPost = true;

                this.$root.autoOpenPostId = notification.post_data.post_id;


             this.$router.push({ path:'/hub/'})

        }

      },
      markAsRead:function(){
             axios.post( '/mark-as-read')
      .then(response => {
      
      if (response.status == 200){
          

         
         
      }
       
     
     })
     .catch(error => {
    
     }) 
       },
      
        getNotification: function(){

            this.loading = true;

         axios.get( '/user-notification')
      .then(response => {
      
      if (response.status == 200) {

       
        
           this.notifications = response.data.notifications;
           this.$root.authProfile.unread = 0;

             this.markAsRead();
        

         this.loading = false;
       
     }
       
     
     })
     .catch(error => {

        this.loading = false;
       
    
     }) 
             

        },
          imageStyle: function(size,data,radius,type){

         if(data.background_color == null){
        let styleString = "height:" + size + "px;width:" + size +"px;background-size:cover;border-radius:" + radius + ";background-repeat: no-repeat; ";
         if(data.image_name == null || data.image_name == '0'){
              styleString += 'background-color:whitesmoke; background-image:url(imgs/background1.jpg);';
         }else{
            if(data.image_name == 'default_1'){

               styleString += 'background-color:whitesmoke; background-image:url(/imgs/background3.jpg);';

            }

            if(data.image_name == 'default_2'){

               styleString += 'background-color:whitesmoke; background-image:url(/imgs/background1.jpg);';

            }

              if(data.image_name == 'default_3'){

               styleString += 'background-color:whitesmoke; background-image:url(/imgs/imgproj2.jpeg);';

            }
          
         }
         
         return styleString;
       }else{
        let styleString = "height:" + size + "px;width:" + size +"px;background-size:cover;border-radius:" + radius + ";background-repeat: no-repeat; ";
         let imgLink = data.image_name + '.' + data.image_extension;
        
        styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/' + type + '/'  + imgLink  +  ');';
         
          return styleString;

      }
      },
        
      
      },
     
  }
</script>
<style scoped>


  
</style>
