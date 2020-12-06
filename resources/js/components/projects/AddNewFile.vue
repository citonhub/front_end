<template>
<v-app style="background:transparent; font-family:BodyFont;padding-top:20px;">
 
   <div class="col-12 mt-5 mt-md-1 ml-lg-4">
    <h6>Add Code File</h6>
   </div>

    <div class="col-md-8 col-lg-4 offset-lg-4 offset-md-2 text-center py-1">
    	
    		<v-form class="row my-2 py-2 px-2">
    			<div class="col-12 py-2 my-0 px-2">
    				<v-text-field style="font-size:13px;" dense placeholder="name..."  outlined color="#3C87CD" label="File Name"></v-text-field>
    			</div>
    			<div class="col-12 py-2 my-0 px-2">
    				<v-select :items="items" label="Language" placeholder="select..." dense outlined style="font-size:13px;"  color="#3C87CD"></v-select>
    			</div>
    			<div class="col-12 py-1 my-0 px-2 text-center">
    				<v-btn  type="submit" small color="#3AC3A9" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;">Add</v-btn>
             </div>
    		</v-form>
    	
    </div>

</v-app>
  
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
