<template>
  <div>
    <div class=" codebox col-12 py-0 px-0" >
      <div class="row">
            <div class=" col-4  py-0" style="height:70px; ">
       <image-loader :externalUrl="urlInfo.image" :backgroundColor="'#c5c5c5'" v-if="urlInfo.response == 200" style="width:100%; border-top-left-radius: 12px; border-bottom-left-radius: 12px; border:1px solid transparent;"></image-loader>
       <div style="background-color:#c5c5c5; align-items:center; justify-content:center; height:100%; width:100%;   border:1px solid #c5c5c5;
        border-radius: 10px;"  class="d-flex" v-else >
           <span style="font-family:HeaderText; font-size:14px;">Error fetching webpage</span>
       </div>

         </div>
    <div style="height:70px;" class="col-8 py-0">
        <div class="row py-2 my-0 text-left" style="cursor:pointer;"  @click.stop="goToLink">
           <div class="col-12 px-2 py-0 d-md-block d-none"  > 
            <div style="font-size:13px; color:#333333;font-family:HeaderText; font-weight:bolder;" >{{ shortenContent(urlInfo.title,38)}}</div>
        
           </div>

           <div class="col-12 px-2 py-0 d-md-none d-block"  > 
            <div style="font-size:13px; color:#333333;font-family:HeaderText; font-weight:bolder;" >{{ shortenContent(urlInfo.title,30)}}</div>
        
           </div>
           
           <div class="col-12 px-2 py-0  d-md-block d-none" v-if="urlInfo.description != '' && urlInfo.response == 200">
                <div style="font-size:12px; color:gray;">{{ shortenContent(urlInfo.description,80)}}</div>
           </div>

            <div class="col-12 px-2 py-0 d-md-none d-block" v-if="urlInfo.description != '' && urlInfo.response == 200">
                <div style="font-size:11px; color:gray;">{{ shortenContent(urlInfo.description,50)}}</div>
           </div>

           <div class="col-12 px-2 py-0 d-md-block d-none" v-if="urlInfo.description == '' && urlInfo.response == 200">
                <div style="font-size:12px; color:gray;" > {{ shortenContent(urlInfo.keywords,70)}}</div>
           </div>

           <div class="col-12 px-2 py-0  d-md-none d-block" v-if="urlInfo.description == '' && urlInfo.response == 200">
                <div style="font-size:11px; color:gray;" > {{ shortenContent(urlInfo.keywords,50)}}</div>
           </div>
            
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
      window.open(this.urlInfo.link, '_blank');
       
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