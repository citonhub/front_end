<template>
   
        <div style="background-color:white;position:absolute;height:100%;left:0;" class="col-lg-6 offset-lg-3  col-md-6 offset-md-3 offset-sm-3  col-sm-6   scroller py-0" >


<div class="py-2 d-flex flex-column text-center " style="position:absolute;
background-color:white;top:0;justify-content:center;align-items:center;width:90%;">
  <h1 class="text-center"  style="font-size:1.1rem;" > Select Your Interests</h1>
<p >Pick one or more.</p></div>
<div style="overflow-y:auto;overflow-x:hidden;position:absolute;height:80%;top:10%;width:100%;padding-bottom:20px;left:0;" class="scroller">

<div v-for="(interest,index) in Interests" :key="index" class="interest col-lg-12 d-flex mb-2" style="background-color:rgba( 125,179,229,0.1); font-size:1.1rem;font-weight:bold;height:40px;
">
   <div  class="form-check">
  <input @change="addInterest(interest)" class="form-check-input mt-2" type="checkbox" value="" id="defaultCheck1">
  <label style="font-size:1.1rem" class="form-check-label" for="defaultCheck1">
   {{interest}}
  </label>
</div>
    
</div>
  
</div>

<div style="position:absolute;background-color:white;bottom:0%;right:0%;" class="buttons mt-2 col-lg-12 offset-8 d-flex ">
  <p class="offset-lg-9" style="font-size:1.2rem;font-weight:bold;">Skip</p>  <v-btn    class="ml-2 px-2" @click="saveInterests()" style="color:white;background-color: #3C87CD;border-radius:10px;height:30px;">Done</v-btn>
</div>


        </div>
   
</template>

<script>
  export default {
    data () {
      return {
       Interests: ['Javascript', 'PHP', 'Python', 'React', 'CSS', 'HTML', 'Flutter', 'Golang', 'Java', 'C++', 'Dart'],
       picked:[],
       finalPicks:[]
      }
    },

    methods:{
    addInterest(interest){
      let check= this.picked.includes(interest)
console.log(check)
      if(check == false){
this.picked.push(interest)

      }else{
this.finalPicks= this.picked.filter(pick => pick !== interest)
this.picked=this.finalPicks
      }
console.log(this.picked)
console.log(interest)

    },

    saveInterests(){
      axios.post('/save-user-interest',{
Interests:this.picked
      }).then(
        response =>{
if(response.status==200){
  console.log(response.data.suggested_diaries)
this.$root.suggestedDiaries=response.data.suggested_diaries
this.$root.loadInterestModal=false

}else{
  console.log('smth went wrong')
}
        }
      )
    }
    }
  }
</script>


<style scoped >
  .scroller::-webkit-scrollbar {
  width: 5px;
}

 
.scroller::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
</style>