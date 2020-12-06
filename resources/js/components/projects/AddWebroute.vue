<template>
   <v-app  style="background:transparent; font-family:BodyFont;padding-top:20px;">
       <div class="col-lg-8 offset-lg-2">

<v-form class="col-12">
   

<div class="col-8 py-1 px-2 form-group" style="margin-bottom:35px">

<v-select
          v-model="app"
          :items="routes"
          menu-props="auto"
          label="Route"
          outlined
          hide-details
          prepend-inner-icon="las la-list"
          >
        </v-select>
</div>

<div class="col-8 py-1 mt-4 px-2 " >
              <v-text-field
                 style="font-size:13px;"
                 placeholder="Path"
            label="Path"
            counter="20"
            v-model="path"
            outlined
             prepend-inner-icon="las la-project-diagram"
            :rules="titleRule"
             color="#3C87CD">
             </v-text-field>

             </div>


              <div class="col-8 py-1 px-2 form-group" style="margin-bottom:35px">

<v-select
          v-model="controller"
          :items="files"
          menu-props="auto"
          label="Controller File"
          outlined
          hide-details
          prepend-inner-icon="las la-list"
          >
        </v-select>
</div>

<div class="col-8 py-1 mt-4 px-2 " >
              <v-text-field
                 style="font-size:13px;"
                 placeholder="Method Name"
            label="Method Name"
            counter="20"
            v-model="method"
            outlined
             prepend-inner-icon="las la-project-diagram"
            :rules="titleRule"
             color="#3C87CD">
             </v-text-field>

             </div>

             <div class="col-lg-6 offset-lg-3">
<v-btn small rounded type="submit" color="#3AC3A9" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;">ADD</v-btn>
             </div>


</v-form>

       </div>
   </v-app>
</template>

<script>
export default {
    data(){
        return{
            routes:['POST','GET'],
            path:'',
            controller:'',
            files:[
                'newFile'
            ],
            method:''
        }
    }
}
</script>