<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="   col-lg-6 offset-lg-3 py-0 px-0 my-0" style=" border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;  position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">{{ $t('space.create_project') }}</span>
         </div>
         <div class="col-2 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0" style=" height:100%;width:100%; overflow-y:auto; overflow-x:hidden; ">
         <v-form class="row my-2 py-2 px-2 "  ref="form" v-model="formstate">
              

            <div class="col-12 col-lg-8 offset-lg-2 py-2 my-0 px-2">
              <v-text-field
                style="font-size:12px;"
                 :placeholder="$t('space.project_title') + '...'"
            :label="$t('general.title')"
             dense
             :rules="Rule"
             v-model="name"
              counter="80"
             color="#4495a2"
            
             ></v-text-field>

             </div>


              <div class="col-12 col-lg-8 offset-lg-2 py-2 my-0 px-2">
                  <v-select
         
          :items="ownerList"
          :label="$t('space.owner')"
          style="font-size:12px;"
          hide-selected
          :loading="ownerList.length == 0"
           :rules="requiredRule"
           item-text="name"
           item-value="space_id"
           v-model="owner"
          :placeholder="$t('space.select_owner') + '...'"
          color="#4495a2"
          small-chips
        ></v-select>
             </div>

             <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn @click.prevent="createProject" type="submit" rounded small color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" :loading="loading">{{ $t('general.create') }}</v-btn>
             </div>

             <div class="my-5 py-3">

             </div>

         
              
          </v-form>
        </div>
         </div>
       </div>

         <v-fade-transition>
              <div  style="position:absolute; width:100%; height:auto: align-items:center;justify-content:center;bottom:16%; z-index:123453566;"  class="d-flex">
             <v-alert
      v-model="Alert"
      dismissible
      close-icon="mdi-delete"
      color="#3E8893"
       width="auto"
       style="font-size:13px;"
       height="auto"
      border="left"
     
      elevation="2"
      colored-border
     
    >
      {{alertMsg}}
    </v-alert>
        </div>
        </v-fade-transition>
       
        
     </v-app>
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
        owner:'',
        ownerList:[],
        alertMsg:'',
        permission:'Public',
        permissionType:[
          'Private','Public'
        ],
        loading:false,
        name:'',
        formstate:false,
        Rule:[
             v => !!v || 'Name is required',
           v => v.length < 80 || 'Name must be less than 80 characters',
            v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character'
         ],
         limit:'',
          limitRule:[
             v => !!v || 'Limit is required',
             v => !isNaN(parseFloat(v)) && v >= 2 && v <= 500 || 'Members Limit has to be between 2 and 500'
        ],
        }
    },
     components: {
  
  },
    mounted(){
      this.$root.showTabs=true;
        this.$root.showHeader = false;
        this.fetchOwnerList();
        if(this.$root.projectData.length != 0){
              
              this.$root.localChannel = [];
              window.Echo.leave('panel.' + this.$root.projectData.project_slug);

          }
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
        createProject:function(){
       
      
     if( this.$refs.form.validate()){
          this.loading = true;
         axios.post('/create-project',{
                title: this.name,
                owner: this.owner,
                type: this.permission
                  })
          .then(response => {
             
            
            
             if (response.status == 201) {

              
               this.$root.ChatList[3].data.unshift(response.data);

                this.$root.LocalStore('ChatListNew' + this.$root.username,this.$root.ChatList);
                 
               this.$root.fromChatList = true;
           this.$router.push({ path: '/' + response.data.project_slug +'/panel' });

 
            
            }

            if(response.status == 200){
               
                if(response.data == 'NotEnoughCoin'){
              
                this.$root.showBoard = true;
               this.$root.boardContent = "Hey " + this.$root.username + ",\n\
              you have exhausted your coins. But no worries, invite your friends to your teams and channels or share your projects to get more coins .";
              this.$root.boardBtnLabel = 'Got It';

              this.loading = false;

               }
            }
              
               
           
               
          })
          .catch(error => {
              this.showAlert(5000,'Failed- ' + error);
              this.loading = false;
          })
      }

    },
    fetchOwnerList: function(){
           axios.get('/fetch-owner-list')
      .then(response => {
      
      if (response.status == 200) {
        
        this.ownerList = response.data;

     }
       
     
     })
     .catch(error => {
    
     }) 
       }
  
  },
}
</script>
<style>
.editor-style> * {
    border-bottom:1px solid #4495a2;
    height: auto;
    line-height: 4px;
    padding: 5px 2px;
    font-size: 12px;
    color: #262626;
}

.is-active{
    border-color: #dbedf0;
    border-style: solid;
    border-width: 1px;
}
 /* *:focus {
    outline: none;
}  */
</style>