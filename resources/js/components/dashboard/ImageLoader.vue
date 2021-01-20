<template>
    
        
       <div 
                    @click="showProject(post.id, post.post_id)"
           :style=" additionalStyle + 'background-image:url('+ image +'); background-color:'+ backgroundColor +';'"> 

             <div class="pt-3 px-2  pl-3" style=" position:absolute; width:100%; height:35%; left:0; bottom:0%; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px; background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%);">
                
                 <div class="row">
                  <div class="col-8 py-0 my-0 d-flex flex-column">
                     <div   style="font-family:MediumFont; font-size:13px; color:white; white-space:nowrap; overflow:hidden; text-overflow: ellipsis;" >{{ post.title }}</div>
                      <div   style="font-family:BodyFont; font-size:13px; color:white; white-space:nowrap; overflow:hidden; text-overflow: ellipsis;" >{{ post.description }}</div>
    
                  </div>
                   <div class="col-4 py-0 my-0 text-right">

                      <i :class="tag.icon" style="font-size:25px; color:white;" v-for="(tag, i) in JSON.parse(post.tags)" :key="i"></i>

                  </div>
                </div>
                 

          </div>

       </div>
        
</template>
<script>
export default { 
     data(){
        return{      
            image: '',
            imageUrl: '',
             externalUrl: '',
        backgroundColor:'',
        additionalStyle:'',
        externalClass:'',
        }
    },  
    props:['post'],
    mounted: function () {
        this.setImage();
    },
    methods: {        
        setImage() {
              this.imageStyle(200, this.post);

            this.imageUrl = this.externalUrl;
            this.image = '';
            
            var highResImage = new Image();
            
           let _this = this;
            highResImage.onload = function(){
                _this.image = _this.imageUrl; 
            
            }
             
            highResImage.src = this.imageUrl;

           
        },
          imageStyle: function (width, data) {

        if (data.image_extension == null) {
          let styleString = "height: " + width +  "px; width: 94%;  position:absolute; left: 3%; border: 1px solid #c5c5c5;  background-repeat: no-repeat; border-radius: 20px; box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25); background-size: cover;";
          
            this.additionalStyle = styleString;

             this.backgroundColor = 'white';

             let imageUrl = '';

          if (data.image_name == null || data.image_name == '0') {
           
            imageUrl = 'imgs/default_1.jpg';
          } else {
            
            if (data.image_name == 'default_1') {

               imageUrl = 'imgs/background1.jpg';
            
            }

            if (data.image_name == 'default_2') {
               imageUrl = 'imgs/background3.jpg';
            
            }

            if (data.image_name == 'default_3') {
               imageUrl = 'imgs/imgproj2.jpeg';
             
            }
          }

           this.externalUrl = imageUrl;
         
         
        } else {
          let styleString = "height: " + width +  "px; width: 94%; left: 3%;  position:absolute; border: 1px solid #c5c5c5;  background-repeat: no-repeat; border-radius: 20px; box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25); background-size: cover;";
           
             this.additionalStyle = styleString;

         let imgLink = data.image_name + '.' + data.image_extension;

          this.externalUrl = 'imgs/posts/' + imgLink;

           this.backgroundColor =  data.background_color
         
        }
      },
       showProject (id, postId) {

           this.$root.selectedPost = [];

        this.$root.fromProfile = this.fromProfile;
          this.$root.currentPost = postId;
        this.$root.fromProfileUsername = this.username
        this.$router.push({ path: `/hub/post/${postId}` })
      

       
        // this.project = project;
        
      },
    }
   
}
</script>
<style>


</style>