<template>
<div class="py-1">
    <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
           
           
           
            <div class=" mr-1 col-2 px-1 py-0">
              <v-btn icon @click.stop="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>

            
          
             <div class="col-8 py-0 text-center" style="white-space: nowrap; overflow:hidden; text-overflow:ellipsis; ">
             <span style="font-size:14px; font-family:MediumFont;">{{that.$root.selectedResource.name}}</span>
            </div>
              
            


        </div>

      <div class="col-12 px-2 px-md-2">
     
         <span style="font-size:13px;font-family:BodyFont; " v-html="that.$root.selectedResource.info"  v-if="that.$root.selectedResource.user_id != that.$root.user_temp_id">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam praesentium sequi, suscipit officia numquam aut, voluptatibus culpa cumque ducimus ab quasi necessitatibus nulla omnis assumenda, ratione enim! Odit, quod?
         </span>

         <div  v-else style="width:100%; height:95px;">
        <v-textarea
                style="font-size:13px;font-family:BodyFont; "
                 
             dense
               @input="saveResourceInfo"
            :placeholder="'What is this ' +  that.$root.selectedResource.type + ' about? Markdown is supported.'"
              filled
              height="100"
              :loading="loadingInfo"
             v-model="input"
             counter="700"
             color="#3C87CD"
            
             ></v-textarea>
         </div>

        

           

      </div>

    
        <div style="background:transparent;font-family:BodyFont; " class="col-12 py-1 my-0 px-1 px-md-2 " >

      
 
           <resource :contents="resources" :show_add_icon="false"></resource>
        </div>

       <!-- ends -->

       
        
     
</div>    
</template>
<script>
const { htmlToText } = require('html-to-text');

  const Resource = () => import(
   /* webpackChunkName: "Resource" */ './Resource.vue'
  );
export default {
    data(){
    return{
        resources:[],
        that:this,
        contentInWord:'',
        title:'',
        loadingInfo:false,
        input:'',
    }
   
},
   computed:{
       compiledMarkdown: function() {
           
             var renderer = new marked.Renderer();
            renderer.link = function(href, title, text) {
          var link = marked.Renderer.prototype.link.call(this, href, title, text);
          return link.replace("<a","<a target='_blank' ");
          };
        marked.setOptions({
          renderer: renderer    
          });

           return  marked(this.input, { sanitize: true });
           
          }
   },
    components:{
      Resource
    },
    mounted(){
      this.fetchResourceContent();
      this.$root.showAddButton = true;
      this.setType();
      this.input =   htmlToText( this.$root.selectedResource.info, { });

       
    },
    methods:{
      saveResourceInfo:_.debounce(function () {

          this.contentInWord = this.compiledMarkdown;

           this.loadingInfo = true;
  
         axios.post('/save-resource-info',{
           resource_id: this.$root.selectedResource.resource_id,
           info:this.contentInWord
         })

        .then(
          response=>{
            if(response.status == 200){
             
               this.loadingInfo = false;
            }
          }
        )
     .catch(error => {

          this.$root.chatComponent.showAlert('Oops!','Unable to save your changes','error','bottomRight',10000)
           this.loadingInfo = false;
    
     }) 

      }, 500),
               goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

             this.$root.chatComponent.innerSideBarContent = '';
            
            this.$root.chatComponent.innerSideBarContent = '';
       
        },
      fetchResourceContent:function(){
            axios.get( '/fetch-resource-content/' + this.$root.selectedResource.resource_id   )
      .then(response => {
      
      if (response.status == 200) {
    
      console.log(response.data.contents);

        this.resources = response.data.contents;

     
       
     }
       
     
     })
     .catch(error => {

      
    
     }) 
      },
      setType:function(){
if(this.$root.resourceContentType=='resources'){
this.title='My Articles'
}else if(this.$root.resourceContentType=='videos'){
this.title='My Videos'
}
      },
      goToSearch: function(){
 this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/resource_search' });
      }
    }
}
</script>
<style scoped>

</style>