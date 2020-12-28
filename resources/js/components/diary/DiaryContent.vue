<template>
    <div>
        <div class="col-12 px-2 px-md-2 scroller" style="position:absolute;height:92%;top:6%;left:0%;overflow-y:auto;overflow-x:hidden;">

              <!-- pet profile view -->

               <div class="col-12 px-0 px-md-2 d-flex" style="align-items:center; justify-content:center;">

                <div class="d-flex flex-column"  style="align-items:center; justify-content:center;">

                    <div    
              style="border-radius:50%;height:150px;width:150px;background-color:#c5c5c5;background-image:url(/imgs/imgproj3.jpeg);background-size: cover;
              background-repeat: no-repeat; border:5px solid #3C87CD;">
                </div> 

                <div class="d-flex flex-row mt-2" style="align-items:center;justify-content:center;">

                 
                   <div class="px-2 d-flex flex-column mx-2" style="align-items:center;justify-content:center;">
                    <div>
                      <v-icon style="font-size:26px;">mdi-battery-charging-medium</v-icon>
                    </div>
                    <div>
                    <span style="font-size:12px;font-family:BodyFont;">  340 HP </span>
                    </div>
                  </div>

                   <div class="px-2 d-flex flex-column mx-2" style="align-items:center;justify-content:center;">
                    <div>
                      <v-icon style="font-size:26px;">las la-user-friends</v-icon>
                    </div>
                    <div>
                    <span style="font-size:12px;font-family:BodyFont;">  2331 </span>
                    </div>
                  </div>


                   <div class="px-2 d-flex flex-column mx-2" style="align-items:center;justify-content:center;">
                    <div>
                      <v-icon style="font-size:26px;">lar la-heart</v-icon>
                    </div>
                    <div>
                    <span style="font-size:12px;font-family:BodyFont;">  3.3 K </span>
                    </div>
                  </div>

                </div>
       

                </div>

            </div>

            <!-- ends -->

            <div class="col-md-8 px-3 px-md-2 offset-md-2 col-lg-6 offset-lg-3 py-0 text-center">

              <p style="color:#333333;font-size:13px; font-family:BodyFont;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non architecto repellendus similique? Architecto excepturi accusamus voluptatem unde voluptas, officia</p>

            </div>

            <div class="py-2 pb-0 px-0 px-md-2  col-12 d-flex flex-row" style="align-items:center;">
             
             <div  class="ml-1 ml-md-3 d-flex flex-row" style="width:100%;align-items:center;">
                <h5 class="pt-1">Notes</h5> 
              <v-btn icon class="mx-1"><v-icon style="font-size:25px;">las la-plus</v-icon></v-btn>
             </div>
             

              <div class="d-flex flex-row-reverse">
                 <v-btn icon><v-icon style="font-size:25px;">las la-search</v-icon></v-btn>
              </div>

            </div>

          
               <draggable
        class="col-12  px-md-3  px-0 py-0 d-flex flex-row flex-wrap"
        tag="div"
        v-model="list"
        handle=".handle"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      >
       
          <div
            class="col-md-6 col-lg-4 px-1"
            v-for="element in list"
            :key="element.order"
          >
            <v-card class="px-2 py-2">

              <div class="d-flex flex-row">

                <div class="d-flex flex-row" style="width:100%;align-items:center;">
                   <v-icon style="font-size:25px;" color="#3C87CD" class="mr-2 handle">lar la-gem</v-icon>
                   <div style="font-size:13px; font-family:MediumFont;white-space: nowrap; overflow:hidden; text-overflow: ellipsis;" > {{ element.name }}</div>
                </div>

              <div class="d-flex flex-row-reverse" style="align-items:center;">

              
                  <v-btn icon><v-icon style="font-size:23px;">las la-ellipsis-v</v-icon></v-btn>

                    <div class="d-flex flex-row" style="align-items:center;justify-content:center;">
                        <v-icon style="font-size:20px;">las la-eye</v-icon>

                   <div class="px-1" style="font-size:12px;font-family:BodyFont;">234</div> 

                </div>
            
                 
                     
                </div>

              </div>

             
                     
            </v-card>
          
          </div>
    
      </draggable>

            </div>
    </div>
</template>
<script>

import draggable from 'vuedraggable'

const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs",
  "React actions",
  "Working Fine",
  "Hello search",
  "Just jokes",
  "My articles",
  "Preparation"
];

export default {
     data () {
      return {
       list: message.map((name, index) => {
        return { name, order: index + 1 };
      }),
      drag: false
      }
    },
    components: {
    draggable
  },
   computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
    mounted(){
      this.$root.showMobileHub = false;
    },
    methods:{
       
        
    } 
}
</script>
<style scoped>
.handle{
  cursor: move; 
   
}
.ghost {
  opacity: 0.5;
  background: whitesmoke;
  border:1px solid whitesmoke;
  border-radius: 7px;
}

  .scroller::-webkit-scrollbar {
  width: 6px;
}


.scroller::-webkit-scrollbar-thumb {
  background-color:  #3C87CD;
  outline: 1px solid  #3C87CD;
}
</style>