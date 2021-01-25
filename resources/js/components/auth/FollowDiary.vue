<template>
    <div class="col-lg-12 d-sm-none">

        <h1 style="font-size:2rem; " class="mb-2 py-1">Diaries relevant to your interests</h1>
        <div v-for="(diary,index) in diaries" :key="index" class="follow col-12 d-flex mb-2 "  style="background-color:rgba( 125,179,229,0.1); font-size:1.6rem;font-weight:bold;">
            <div class="diary " >
                 <div class="name">{{diary}}</div>
                 <p class="describe">Lorem ipsum dolor</p>
             </div>

             <v-btn class="mt-1" style="color:white;background-color: #3C87CD;border-radius:10px;height:30px;">Follow</v-btn>
        </div>

        <div class="buttons mt-2 col-5 offset-7 d-flex">
  <p style="font-size:1.2rem;font-weight:bold;">Skip</p>  <v-btn @click="openChatList()"   class="ml-2 px-2" style="color:white;background-color: #3C87CD;border-radius:10px;height:30px;">Done</v-btn>
</div>
    </div>
</template>

<script>
export default {
    data(){

        return{ 
            diaries:[
                'Intro to PHP', 'Advanced CSS'
            ]
            }
       
    },
    methods:{
        openChatList(){
            this.$router.push({
path:'/channels'
            })
        }
    }
}
</script>