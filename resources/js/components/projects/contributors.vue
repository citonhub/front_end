<template>
  <div>
      <div>

           <div class="col-12 px-2 px-md-2  " >
          <h5 class="mt-4 ml-3">Contributors list</h5>
</div>
        

 <div  v-for="(user,index) in users" :key="index" class="col-12 py-2 d-flex flex-row" style="align-items:center; border-bottom:1px solid #c5c5c5;">
                                  <div class="col-3 mr-2 py-0">
                               <div    >
                                   
                                </div> 
                                  </div>
                                
                              <div class="col-7 py-0">
                            <span style="font-size:13px;">{{user}}</span>
                                    </div>

                                    <div class="col-2 text-right py-0">
                                          <v-icon v-if="incall">las la-microphone</v-icon>
                                    <!-- <v-icon v-else>las la-microphone-slash</v-icon> -->

                                         
                                    </div>
                              </div>





      </div>
 

  </div>
</template>

<script>
export default {
data(){

return{
users:[
    'Yusuf','Maryam'
],
incall:true
}


}
}
</script>

<style>

</style>