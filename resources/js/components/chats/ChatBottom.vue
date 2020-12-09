<template>
    <div class="row px-3 py-0">
           <div class="col-12 py-1 my-0 d-flex px-2 flex-row" style="align-items:center; justify-content:center;">
               <v-btn icon class="mx-1"><v-icon>las la-grin</v-icon> </v-btn>
                <v-btn icon class="mx-1"> <v-icon>las la-paperclip</v-icon> </v-btn>
                  <textarea ref="textBottom"  style="font-size:13px;"  :placeholder="$t('general.type_here')"  @keydown="handelkeyAct"  ></textarea>
                  <v-btn icon class="mx-1"><v-icon>las la-microphone</v-icon> </v-btn>
           </div>
            
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>


textarea {
    font-size:13px; 
    background:whitesmoke;
    width:100%; 
    height: 50px;
    max-height: 75px;
    padding: 6px 6px;
    resize:none; 
    overflow-x: hidden;
     overflow-y: auto;
    border:1px solid #e6e6e6; 
    border-radius:2px;
}
</style>