<template>
  <div class="col-12 py-1 my-0 ">

       <div class="row">
        <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky;background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 py-0">
              <v-btn icon  @click.stop="close">
                      <v-icon>mdi mdi-close</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-0">
             <span style="font-size:14px; font-family:MediumFont;">Channel Info</span>
          </div>
              
              <div class="col-2 py-0 mr-1 text-right" >
                  <v-btn icon @click.stop="EditChannel">
                      <v-icon>las la-edit</v-icon>
                    </v-btn>
              </div>
          
        </div>

        <div class="col-12 d-flex" style="align-items:center; justify-content:center;">
              <div   :style="imageStyleSpace(150,that.$root.selectedSpace,'channel')"  >
               </div> 
        </div>

        <div class="col-12 text-center py-0">
           <span style="font-size:14px; font-family:MediumFont;">{{that.$root.selectedSpace.name}}</span>
        </div>

        <div class="col-12 text-left py-1">
           <span style="font-size:14px;font-family:MediumFont;">Description</span><br>
           <span style="font-size:12px;" v-html="that.$root.selectedSpace.description"></span>
        </div>
           
        <div class="col-12 py-0">
           <span style="font-size:14px; font-family:MediumFont;">Invite</span>
        </div>
         <div class="col-12 d-flex flex-row py-1 " >

              <div style="height:30px;width:30px; align-items:center; 
              justify-content:center; border:1px solid transparent; cursor:pointer; 
              border-radius:50%;background:#3C87CD;"  @click="copyLink" class="d-flex mr-2 py-auto px-auto" >
              <v-icon style="font-size:20px;" color="#ffffff">las la-link</v-icon>
              </div>

              <div style="height:30px;width:30px; align-items:center; 
              justify-content:center; border:1px solid transparent; cursor:pointer;
              border-radius:50%;background:#00acee;" @click="shareToTwitter" class="d-flex mr-2" >
              <v-icon style="font-size:20px;" color="#ffffff">las la-twitter</v-icon>
              </div>

               <div style="height:30px;width:30px; align-items:center; 
              justify-content:center; border:1px solid transparent; cursor:pointer;
              border-radius:50%;background:#4FCE5D;" @click="shareToWhatsapp" class="d-flex mr-2" >
              <v-icon style="font-size:20px;" color="#ffffff">las la-whatsapp</v-icon>
              </div>

             
             <input type="hidden" id="spacelink" :value="'https://www.citonhub.com/link/space/' + this.$root.selectedSpace.space_id">
         </div>

          <div class="col-12 py-2 d-flex flex-row mt-2" style="border-top:1px solid #c5c5c5; border-bottom:1px solid #c5c5c5;">
           <div class="col-7 py-0 px-0">
                 <span style="font-size:14px; font-family:MediumFont;">Members</span>
           </div>
           <div class="col-5 text-right py-0 px-0">
                 <span style="font-size:13px;">{{that.$root.selectedSpaceMembers.length}}</span>
           </div>
        </div>

        <div class="col-12 py-2 d-flex flex-row" style="align-items:center; border-bottom:1px solid #c5c5c5;" v-for="(member,index) in that.$root.selectedSpaceMembers"
          :key="index">
              <div    class="mr-2"
     :style="imageStyle(40,member,'user')">
  </div> 
   <div>
        <span style="font-size:13px;">{{member.name}} @{{member.username}}</span>
   </div>
        </div>
        

     

    </div>

  </div>
   
</template>
<script>



export default {
      data(){
        return{
          
         that:this,
     
       
        }
    },
    methods:{
         close:function(){
             window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        this.$root.chatComponent.chatInnerSideBar = false;
   },  
   EditChannel:function(){
        this.$root.chatComponent.innerSideBarContent = '';
             setTimeout(() => {

            this.$root.chatComponent.innerSideBarContent = 'channel_edit';
                
             },500);
           this.$router.push({ path: '/channels/space_id/channel_edit' });

   },
    imageStyleSpace:function(dimension,data,type){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;";
         if(type == 'channel'){
              styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
         }else{
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
         }
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;";
         let imgLink = data.image_name + '.' + data.image_extension;
          if(type == 'channel' || type== 'bot'){
              styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/'  + imgLink  +  ');';
         }else{
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         }
         
          return styleString;
      }

      

  },
    imageStyle:function(dimension,data,type){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         if(type == 'channel'){
              styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
         }else{
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
         }
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         let imgLink = data.image_name + '.' + data.image_extension;
          if(type == 'channel' || type== 'bot'){
              styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/'  + imgLink  +  ');';
         }else{
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         }
         
          return styleString;
      }

      

  },
  copyLink () {
        
          let spacelink = document.querySelector('#spacelink')
          spacelink.setAttribute('type', 'text')  
          spacelink.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
              if(msg == 'successful'){
                this.$root.chatComponent.showAlert('','Link copied','success');
              }else{
                 this.$root.chatComponent.showAlert('','Unable link copied','error');
              }
          } catch (err) {
           
          }

          /* unselect the range */
          spacelink.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        },
    
   shareToWhatsapp:function(){
          let shareText = 'Join ' + this.$root.selectedSpace.name +  ' ' +  this.$root.selectedSpace.type  +' on Citonhub';
       let shareLink =   'https://www.citonhub.com/link/space/'+ this.$root.selectedSpace.space_id;

        let link = 'whatsapp://send?text=' + shareText  + ' ' + shareLink + '.';

         var win = window.open(link, '_blank');
          win.focus();
        
      },
      shareToTwitter: function(){
             let shareText = 'Join ' + this.$root.selectedSpace.name +  ' ' +  this.$root.selectedSpace.type  +' on Citonhub';
       let shareLink =   'https://www.citonhub.com/link/space/'+ this.$root.selectedSpace.space_id;

         let link = 'https://twitter.com/intent/tweet?text=' +  shareText  + '&url=' + shareLink ;
        
         var win = window.open(link, '_blank');
          win.focus();
        
      },
    }
}
</script>
<style scoped>

</style>