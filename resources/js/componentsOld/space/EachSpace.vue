<template>
           <div>
              <v-card tile flat class="col-12 py-1 px-0 my-0" @click="showSpace(source)" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" >
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                          <v-img  :background-color="source.background_color" :src="source.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ source.image_name +'.' + source.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-7" style="align-items:center;">
                         <span class="titleText">{{source.name}}</span>
                    </div>
                    <div class="py-0 my-0 d-flex col-2" style="align-items:center;">
                          <span class="messagesBadges" v-if="source.unread != 0"><span style="padding:2px;">{{ source.unread }}</span></span>
                    </div>
                </div>
             </v-card>
            </div>
            
</template>
<script>
export default {
     props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default () {
          return {}
        }
      },
     
    },
 methods:{
        
         showSpace:function(space){

             if(this.$root.TrackLastSubSpace.length != 0 && space.space_id == this.$root.TrackLastSubSpace[0]){
                 
                  this.$router.push({ path: '/space/'  +  this.$root.TrackLastSubSpace[1]  +  '/channel/content' + '/user' });

                     return;

             }else{

               

                this.$root.selectedSpace = space;

                this.$router.push({ path: '/space/'  +  space.space_id  +  '/channel/content' + '/user' });

             }
         

        
          
         
       }, 
    }
}
</script>
<style>

</style>