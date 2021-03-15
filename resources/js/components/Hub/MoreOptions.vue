<template>
     <v-card class="py-0 px-0" style="width:auto;">

                                      <div class="col-12 px-0 py-1 d-flex flex-column">

                                        
                                          <v-card tile flat class="px-2 py-2 d-flex flex-row" @click="share" style="align-items:center;">

                                            <v-icon class="mr-1">mdi mdi-share-variant</v-icon>

                                            <span style="font-family:BodyFont;font-size:13px;color:grey;">Share</span>

                                         </v-card>
                

                                          <v-card tile flat class="px-2 py-2 d-flex flex-row" :loading="loadingDelete" v-if="post.user.tempId == this.$root.user_temp_id" style="align-items:center;" @click.stop="deletePost()">

                                            <v-icon class="mr-1">las la-trash</v-icon>

                                            <span style="font-family:BodyFont;font-size:13px;color:grey;">Delete</span>

                                         </v-card>


                                      </div>

                                      

                                   </v-card>
</template>
<script>
export default {
    props:['post','alertComponent','fromProfile'],
    data () {
      return {
      loadingDelete:false
      }
    },
    methods:{
    
      share:function(){
          
          this.$root.shareLink =  'https://link.citonhub.com/post/'+ this.post.post_id;

          this.$root.shareText = 'Check out this project on Citonhub';
          
          this.$root.infoText = 'Share your project with others';

          this.$root.alertComponent =  this.alertComponent;

         

          this.$root.showInvitation = true;
     },

     deletePost:function(){

         if( this.loadingDelete) return

           this.loadingDelete = true;

          axios.post( '/delete-hub-post',{
                id: this.post.id
                  })
             .then(response => {
             
            
            
             if (response.status == 200) {

               let remainingPost = [];

              if(this.fromProfile){

             remainingPost =  this.alertComponent.userProjects.filter((eachPost)=>{
                   return eachPost.id != this.post.id
                 });

                 this.alertComponent.userProjects = remainingPost;

              }else{

                remainingPost = this.$root.posts.filter((eachPost)=>{
                   return eachPost.id != this.post.id
                 });

               this.$root.posts = remainingPost;

                let remainingPostSearch = this.$root.postsSearch.filter((eachPost)=>{
                   return eachPost.id != this.post.id
                 });

                 this.$root.postsSearch = remainingPostSearch;

              }
    
            }
              
            
           
            
          })
          .catch(error => {
               this.loadingDelete = false;
                console.log(error)
            this.alertComponent.showAlert('Oops!','Something went wrong','error');
              
          })

        },
   
    },
   
    
}
</script>
<style scoped>

</style>