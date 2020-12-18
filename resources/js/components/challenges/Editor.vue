<template>
    <div>
          <v-md-editor v-model="text" height="400px" mode="edit" :placeholder="placeholder" 
        left-toolbar="h bold italic strikethrough quote ul ol  hr image link code"  right-toolbar="preview"></v-md-editor>
    </div>
</template>
<script>

import Vue from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';

VueMarkdownEditor.use(vuepressTheme);

Vue.use(VueMarkdownEditor);

import enUS from '@kangc/v-md-editor/lib/lang/en-US';

VueMarkdownEditor.lang.use('en-US', enUS);

export default {
     props:['placeholder'],
      data () {
        return{
            text:''
        }
      }
}
</script>
<style scoped>

</style>