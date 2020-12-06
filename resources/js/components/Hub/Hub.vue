<template>
    <div class="col-12" style="position:fixed;height:100%;background:#F5F5FB;">
       <top-bar></top-bar>
    </div>
</template>
<script>
 const TopBar = () => import(
    /* webpackChunkName: "top-bar?v=0.19" */ './TopBar.vue'
  );
export default {
     data () {
      return {
        
      }
    },
    components: {
        TopBar
    }
}
</script>
<style scoped>

</style>