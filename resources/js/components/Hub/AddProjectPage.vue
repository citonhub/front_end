<template>
    <v-app style="background:transparent;font-family:BodyFont;padding-top:20px;">
<TopBar></TopBar>

<router-view></router-view>

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