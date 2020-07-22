<template>
  <div>
    <div class=" codebox">
         <div class="imageBox col-12 px-0 py-0">
       <image-loader :externalUrl="urlInfo.image" :backgroundColor="'#ffffff'" v-if="urlInfo.response == 200" style="border:1px solid transparent;border-radius:10px;"></image-loader>
       <div style="background-color:#c5c5c5; align-items:center; justify-content:center; height:100%; width:100%;   border:1px solid #c5c5c5;
        border-radius: 10px;"  class="d-flex" v-else >
           <span style="font-family:HeaderText; font-size:14px;">Error fetching webpage</span>
       </div>

         </div>
    <div style="height:70px;" class="col-12 py-0">
        <div class="row py-2 my-0 text-left" style="cursor:pointer;"  @click="goToLink">
           <div class="col-12 px-2 py-0" > 
            <div style="font-size:13px; color:#333333;font-family:HeaderText; font-weight:bolder;" >{{ shortenContent(urlInfo.title,38)}}</div>
        
           </div>
           <div class="col-12 px-2 py-0" v-if="urlInfo.description != '' && urlInfo.response == 200">
                <div style="font-size:12px; color:gray;">{{ shortenContent(urlInfo.description,80)}}</div>
           </div>

           <div class="col-12 px-2 py-0" v-if="urlInfo.description == '' && urlInfo.response == 200">
                <div style="font-size:12px; color:gray;" > {{ shortenContent(urlInfo.keywords,70)}}</div>
           </div>
            
        </div>
    </div>
    </div>
  </div>
   
</template>
<script>



export default {
    props:['urlInfo'],
     components: {
    
    },
     computed: {
   
   },
   mounted(){
    
   },
    data(){
        return{
            
    }
},
methods:{
    goToLink:function(){
         window.location = this.urlInfo.link; 
    },
     shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
}
}
</script>
<style lang="scss" scoped>
     
     .imageBox{
      height: 160px;
       border-top-left-radius: 12px;
       border-top-right-radius: 12px;
        border:1px solid transparent;

     }

   

    .codebox{
       height: auto;
      border:1px solid #5dafbb;
        border-radius: 10px;
        width: 100%;
        
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
.codebox::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.codebox {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
    

   
</style>