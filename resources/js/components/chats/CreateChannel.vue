<template>
  <div style="background:transparent;overflow-y:hidden;">
   <div class="col-12 py-1 my-0 ">
    <div class="row">
        
        <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 py-0">
              <v-btn icon >
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-0">
             <span style="font-size:14px; font-family:MediumFont;">Create a channel</span>
          </div>
              
              <div class="col-2 py-0 mr-1 text-right">
                 
              </div>
          
        </div>



          <!-- create channel form -->

      <div class="col-12 py-1 my-0" style="font-family:BodyFont;">
         <v-form class="row my-2 py-2 px-2 "  ref="form" v-model="formstate">
              

            
                   <v-app class="col-12 py-2 my-0 px-2" style="height:70px;">
              <v-text-field
                style="font-size:13px;"
                 placeholder="channel name"
            :label="$t('general.Name')"
             dense
             outlined
             :rules="Rule"
             v-model="name"
              counter="80"
             color="#3C87CD"
            
             ></v-text-field>

             </v-app>

             <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn @click.prevent="createSpace" type="submit" rounded small color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family: MediumFont;" :loading="loading">{{ $t('general.create') }}</v-btn>
             </div>

             <div class="my-5 py-3">

             </div>

         
              
          </v-form>
        </div>

      <!-- ends -->

       
        
     

    </div>
   </div>

  </div>
   
</template>
<script>



export default {
    data(){
        return{
          requiredRule: [
         v => !!v || 'This feild is required',
        ],
        type:'',
        Alert:false,
        alertMsg:'',
        spaceType:[
         'Channel'
        ],
        selectedType:'Channel',
        loading:false,
        name:'',
        formstate:false,
        Rule:[
             v => !!v || 'Name is required',
           v => v.length < 80 || 'Name must be less than 50 characters',
             v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character'
         ],
         limit:'10000',
          limitRule:[
             v => !!v || 'Limit is required',
             v => !isNaN(parseFloat(v)) && v >= 2 && v <= 500 || 'Members Limit has to be between 2 and 5000'
        ],
        }
    },
     components: {
  
  },
    mounted(){
      
    },
    methods:{
       goBack() {
         
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
          showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
     setTimeout(function(){
        _this.Alert = false;
     },duration);

    },
        createSpace:function(){
       
      
     if( this.$refs.form.validate()){
        
         let orgId = null;
         
          if(this.$root.orgIdRoot != 'user'){

              orgId = this.$root.orgIdRoot;
          }
          this.loading = true;
         axios.post('/create-space',{
                name: this.name,
                limit: this.limit,
                type: this.selectedType,
                org_id: orgId
                  })
          .then(response => {
             
            
            
             if (response.status == 200) {
               
              this.$router.push({ path: '/panel/main/' + this.$root.orgIdRoot });
            
            }
              
            
           
            
          })
          .catch(error => {
              this.showAlert(5000,'Failed- ' + error);
              this.loading = false;
          })
      }

    }
  
  },
}
</script>
<style scoped>

</style>