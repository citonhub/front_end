// All components used for the duel feature imported here

Vue.component('duels',require('./duels/Hub.vue').default);
Vue.component('content-generator',require('./duels/ContentGenerator.vue').default);
Vue.component('bot-contents',require('./duels/BotContents.vue').default);
Vue.component('each-duel',require('./duels/EachDuel.vue').default);
Vue.component('duel-comments',require('./duels/DuelComments.vue').default);
Vue.component('share',require('./space/Share.vue').default);
Vue.component('code-view',require('./space/CodeView.vue').default);
Vue.component('image-cropper',require('./profile/ImageCropper.vue').default);
Vue.component('image-editor',require('./duels/ImageEditor.vue').default);
Vue.component('file-upload',require('./auth/FileUpload.vue').default);
Vue.component('video-player',require('./space/VideoPlayer.vue').default);
Vue.component('info-dialog',require('./space/InfoDialog.vue').default);