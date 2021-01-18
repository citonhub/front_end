<template>
    
        
       <div 
                  
           :style=" additionalStyle + 'background-image:url('+ image +'); background-color:'+ backgroundColor +';'"> 

             <div class="pt-3 px-2  pl-3" style=" position:absolute; width:100%; height:35%; left:0; bottom:0%; border-radius:0px; border-bottom-left-radius:20px;
          border-bottom-right-radius:20px; background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%);">
                
                 <div class="row">
                  <div class="col-9 py-0 my-0 d-flex flex-column">
                     <div   style="font-family:MediumFont; font-size:13px; color:white; white-space:nowrap; overflow:hidden; text-overflow: ellipsis;" >{{ post.title }}</div>
                      <div   style="font-family:BodyFont; font-size:13px; color:white; white-space:nowrap; overflow:hidden; text-overflow: ellipsis;" >{{ post.description }}</div>
    
                  </div>
                   <div class="col-3 py-0 my-0 text-right">

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
            imageUrl: ''
        }
    },  
    props:['externalUrl','backgroundColor','additionalStyle','externalClass','post'],
    mounted: function () {
        this.setImage();
    },
    methods: {        
        setImage() {
           
            this.imageUrl = this.externalUrl;
            this.image = '';
            
            var highResImage = new Image();
            
           let _this = this;
            highResImage.onload = function(){
                _this.image = _this.imageUrl; 
            
            }
             
            highResImage.src = this.imageUrl;

           
        }
    }
   
}
</script>
<style>


</style>