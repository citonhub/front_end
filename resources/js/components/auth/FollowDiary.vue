<template>
    <div style="background-color:white;position:absolute;height:100%;left:0;" class="col-lg-6 offset-lg-3  col-md-8 offset-md-2 offset-sm-1  col-sm-10   scroller py-0">

<div style="background-color:white;position:absolute;top:0;justify-content:center;align-items:center;width:90%;" class="py-2 d-flex flex-column text-center" >
        <h1 style="font-size:1.5rem; " class="mb-2 ">Diaries relevant to your interests</h1>

</div>

<div style="overflow-y:auto;overflow-x:hidden;position:absolute;height:80%;top:10%;width:100%;padding-bottom:20px;left:0;" class="scroller">
        <div v-for="(diary,index) in diaries" :key="index" class="follow col-lg-12 d-flex mb-2 "  style="background-color:rgba( 125,179,229,0.1); font-size:1.1rem;font-weight:bold;height:65px;">
            <div  class="diary col-lg-5 py-1 col-7 px-1 " >
                 <div class="name">{{diary.name}}</div>
                 <p class="describe">{{diary.description}}</p>
             </div>

             <v-btn class="mt-1 offset-lg-5 offset-md-5 offset-sm-4 offset-1 " style="color:white;background-color: #3C87CD;border-radius:10px;height:30px;">Follow</v-btn>
        </div>

        </div>

        <div style="position:absolute;background-color:white;bottom:0%;right:0%;" class="buttons mt-2 col-lg-12 offset-8 d-flex ">
  <p style="font-size:1.2rem;font-weight:bold;" class="offset-lg-9 ">Skip</p>  <v-btn @click="openChatList()"   class="ml-2 px-2" style="color:white;background-color: #3C87CD;border-radius:10px;height:30px;">Done</v-btn>
</div>
    </div>
</template>

<script>
export default {
    mounted(){
this.fetchDiaries()
    },
    data(){

        return{ 
            diaries:[]
            }
       
    },
    methods:{
        openChatList(){
            this.$router.push({
path:'/channels'
            })
        },
        fetchDiaries(){
           this.diaries= this.$root.suggestedDiaries
        }
    }
}
</script>