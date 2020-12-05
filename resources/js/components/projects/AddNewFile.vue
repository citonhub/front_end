<template>
<div>
 
   <div class="col-12 ">
    <h5>Add New Code File</h5>
    <v-card class="col-5 mt-5">
    	<v-card-text>
    		<v-form class="row my-2 py-2 px-2">
    			<div class="col-12 py-2 my-0 px-2">
    				<v-text-field style="font-size:13px;" placeholder="Name..." prepend-inner-icon="las la-file" outlined color="#3C87CD" label="File Name"></v-text-field>
    			</div>
    			<div class="col-12 py-2 my-0 px-2">
    				<v-select :items="items" label="Language" outlined style="font-size:13px;" prepend-inner-icon="las la-file" color="#3C87CD"></v-select>
    			</div>
    			<div class="col-12 py-1 my-0 px-2 text-center">
    				<v-btn :loading="loading" type="submit" medium color="#3AC3A9" style="font-size:13px; font-weight:bolder; color:white;font-family:BodyFont;">Add</v-btn>
             </div>
    		</v-form>
    	</v-card-text>
    </v-card>
   </div>

</div>
  
</template>

<script>
  export default {
    data: () => ({
      items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python']
    }),
  }
</script>
<style >
 
  
</style>
