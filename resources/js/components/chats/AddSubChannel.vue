<template>
    <v-app style="background:transparent;">
   <div class="col-12 py-1 my-0 ">
    <div class="row">
        <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 py-0">
              <v-btn icon @click.stop="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-0">
             <span style="font-size:14px; font-family:MediumFont;">Add a sub-channel</span>
          </div>
              
              <div class="col-2 py-0 mr-1 text-right">
                 
              </div>
          
        </div>



         <!-- edit space form -->
      <div class="col-12 py-1 my-0" >
         <v-form class="row my-2 py-2 px-2 " style="font-family:BodyFont;">


              
                   <div class="col-12 py-2 my-0 px-2">
              <v-text-field
                style="font-size:13px;"
                 :placeholder="'e.g fun'"
            :label="$t('general.Name')"
            :rules="Rule"
            counter="80"
             dense
              v-model="spaceName"
             color="#3C87CD"
            
             ></v-text-field>

             </div>


               <div class="col-12 py-2 my-0 px-2">
                  <v-select
         
          :items="subSpaceType"
          label="Type"
          style="font-size:13px;"
          hide-selected
           :rules="requiredRule"
          persistent-hint
          hint="Public is for everyone and private for those you invite"
           v-model="subType"
          :placeholder="$t('general.select') + '...'"
          color="#3C87CD"
          small-chips
        >
        
          <template v-slot:selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :input-value="data.selected"
              color="#3C87CD"
              dense
              class="my-1"
              style="font-size:12px; font-family:BodyFont;"
              outlined
              :disabled="data.disabled"
          
            >
             
              {{ data.item }}
            </v-chip>

              </template>
              
              </v-select>
             </div>


             

             <div class="col-12 py-2 my-0 mt-3 px-2">
                   <v-textarea
                style="font-size:13px;"
                 
            :label="$t('general.description')"
             dense
            
            :placeholder="'what is this sub-channel for?'"
             :rules="DescriptionRule"
             v-model="contentInWord"
             counter="300"
             color="#3C87CD"
            
             ></v-textarea>
             </div> 




             
        

             <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn rounded small :loading="loading" color="#3C87CD" style="font-size:11px; font-weight:bolder; color:white;font-family: MediumFont;text-transform:none;" >Add</v-btn>
             </div>

            
              
          </v-form>
        </div>

       <!-- ends -->

       
        
     

    </div>
   </div>

  </v-app>
</template>
<script>
export default {
     data(){
        return{
           imagepath:'',
        Alert:false,
        loading:false,
        alertMsg:'',
          wordLimit:200,
            requiredRule: [
         v => !!v || 'This feild is required',
        ],
        subType:'',
        subSpaceType:[
            'Public','Private'
        ],
          spaceName:this.$root.selectedSpace.name,
           Rule:[
             v => !!v || 'Name is required',
           v => v.length < 80 || 'Name must be less than 80 characters'
         ],
         DescriptionRule:[
              v => !!v || 'Description is required',
           v => v.length < 300 || 'Description must be less than 300 characters'
         ],
         wordCount:0,
         mycontent:'',
         editFeild:false,
         progressvalue:0,
         contentInWord:'',
          
        }
    },
    methods:{
        goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

             this.$root.chatComponent.innerSideBarContent = '';
             setTimeout(() => {

            this.$root.chatComponent.innerSideBarContent = 'sub_channels';
                
             },500);
        }
    }
}
</script>
<style scoped>

</style>