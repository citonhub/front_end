<template>
    <v-app style="color: #1B1B1E;font-family:BodyFont;">

        <div class="col-12 py-0 fixed-top" style="position:sticky;width:100%;height:auto; ">
         <top-bar></top-bar>
        </div>

<div style="margin-top:80px;" class="col-12">
    <div class="row">

       
        <div style=" border: 3px solid #3C87CD; height:220px;" class="profile-pic col-lg-2 col-md-1 offset-md-3 offset-lg-1 rounded-circle">
<div style="background: #3C87CD;height:180px;" class="col-lg-12 col-md-6 mx-1 my-1 rounded-circle">

</div>
        </div>

        <div class="col-lg-3 offset-lg-5 col-md-3 offset-md-3 mt-4">
            <button style="color:white;padding:5px;border-radius:15px; width:50%;" class="shadow btn-primary  px-1 py-1 mt-4">Message</button>
        </div>
    </div>

    <div  class=" col-lg-4 offset-lg-1 mb-2 d-flex"> <p style="font-size:1.7rem;font-weight:700;line-height:1.3rem;">Dray Akinola <br> <span style="color: rgba( 27,27,30,0.7);font-size:1rem;">@dray</span></p><i style="font-size:1.7rem;color:#3c87cd" class="las la-check-circle"></i>   
    
    </div>
    
    <div style="font-weight:500;line-height:1rem" class="col-lg-6 offset-lg-1 col-sm-12">A fullstack developer based in Lagos, Nigeria. <button style="border-radius:15px;height:40px;"  class="edit btn btn-primary ">Edit Profile</button> </div>

    <div class="col-11 offset-lg-1  d-flex">
        <div class=" col-lg-2 col-md-3   d-flex"><i style="font-size:1.3rem" class="las la-medal"></i> <p>Junior</p> </div>
        <div class=" col-lg-2 col-md-3 d-flex"><i style="font-size:1.3rem" class="las la-chart-bar"></i> <p>1500</p> </div>
    </div>

    <div style="background: rgba(125,179,229,0.4);" class="col-lg-10 offset-lg-1 d-flex">
        <p style="line-height:43px; font-weight:700;font-size:1.9rem">Projects</p> <i style="font-size:1.1rem;" class="las la-plus mt-2"></i>
    </div>
<!--project list goes here-->
</div>

    </v-app>
</template>

<script>
const TopBar = () => import(
   /* webpackChunkName: "top-bar?v=0.50" */ './TopBar.vue'
  );
export default {

components:{
TopBar
},

    data(){

        return{
        projects:[
           {id:1, type: 'Ecommerce Website'},
            { id:2, type:'Social media website'}
        ]
        }
    }
}
</script>


<style scoped>
   
</style>