<template>
    <div>
        <div class="col-lg-10 offset-lg-1 px-md-2 px-1">
              
          
               <div  class="para" v-html="textValue"></div>
             
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
             that:this,
             textValue:''
           
        }
    },
   
  mounted(){
     
     this.convertToHtml();
  },
  methods:{

      convertToHtml:function(){
           if(this.$root.selectedChallenge.rules){

                  this.textValue =  marked(this.$root.selectedChallenge.rules, { sanitize: true })

           }
       
      }

  }

   
}
</script>
<style scoped>
.para {
   color:#333333;
   font-size:14px;
}
</style>