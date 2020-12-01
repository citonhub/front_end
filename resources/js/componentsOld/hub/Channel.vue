<template>

<v-card  class="col-12 py-1 px-1 my-0"  color="#ffffff"   @click.stop="gotoChannel"
                     >
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                          <v-img :background-color="channelData.background_color" :src="channelData.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ channelData.image_name +'.' + channelData.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                    <div class="py-0 my-0 d-flex col-9" style="align-items:center; ">
                         <span class="d-block text-center titleText">{{channelData.name}}</span>  
                    </div>
                     <div class="py-0 my-0 text-left col-9 offset-3 " >
                       
                         <span class="d-block" style="font-size:11px;" v-html="channelData.description"></span>
                       
                        
                    </div>
                   
                </div>
             </v-card>
    
</template>
<script>
export default {
    props:['channelData'],
    methods:{
         gotoChannel:function(){
               window.location = '/#/space/' + this.channelData.space_id + '/channel/content/user';
         }
    }
}
</script>
<style scoped>

.titleText{
    font-size:13px; 
    font-family:HeaderText; 
    color:#173236;
}

.avatarImg{
  border-radius:50%;
  border: 3px solid #3E8893;
}

</style>