<template>
    <v-app style="background:transparent;font-family:BodyFont;padding-top:20px;">
<TopBar></TopBar>

<div class="col-lg-8 offset-lg-2" style="margin-top:100px;height:250px;">

<v-card style="height:100%" class="col-12 d-flex">
<v-btn style="background:#3C87CD;color:white" class="mt-4 col-2 offset-2 py-2 px-2" elevation="2">Add a Link</v-btn>
<v-btn style="background:#3C87CD;color:white" class="mt-4 col-4 offset-2 py-2 px-2" elevation="2">Select From Project</v-btn>
</v-card>

</div>

    </v-app>
</template>

<script>
const TopBar = () => import(
    /* webpackChunkName: "top-bar?v=0.40" */ './TopBar.vue'
  );

  import VueRouter from 'vue-router'

Vue.use(VueRouter)
export default {
    components:{
        TopBar
    }
}
</script>