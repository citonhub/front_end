<template>
    
        
       <div class="grid-box-picturebox" 
           id="blend-in"            
           :style="'background-image:url('+ image +'); background-color:'+ backgroundColor +';'"> 
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
    props: {        
        externalUrl: {   },
        backgroundColor:{}
    },    
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
.grid-box-picturebox{ 
  width:100%;
  height: 100%; 
  position: relative;       
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat; 
}
#blend-in {
  animation: fadein 0.15s;
  -moz-animation: fadein 0.15s; /* Firefox */
  -webkit-animation: fadein 0.15s; /* Safari and Chrome */
  -o-animation: fadein 0.15s; /* Opera */
}

</style>