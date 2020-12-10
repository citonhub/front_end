<template>
<v-app style="background:transparent; font-family:BodyFont;padding-top:20px;">
 
   <div class="col-12 mt-5 mt-md-1 ml-lg-4">
    <h6>Panel Settings</h6>
   </div>

    <div class="col-md-8 col-lg-4 offset-lg-4 offset-md-2 text-center py-1">
    	
    		<v-form class="row my-2 py-2 px-2">
    			<div class="col-12 py-2 my-0 px-2">
    				<v-text-field style="font-size:13px;"  prepend-inner-icon="las la-laptop-code" dense placeholder="title..."  outlined color="#3C87CD" label="Project Title"></v-text-field>
    			</div>

                <div class="col-12 py-2 my-0 px-2">
    				<v-text-field style="font-size:13px;"   prepend-inner-icon="las la-users" dense placeholder="contributors..."  outlined color="#3C87CD" label="Contributors"></v-text-field>
    			</div>
    			
    			<div class="col-12 py-1 my-0 px-2 text-center">
    				<v-btn  type="submit" small color="#3C87CD" style="font-size:12px; font-weight:bolder; color:white;font-family:HeaderFont;">save</v-btn>
             </div>
    		</v-form>
    	
    </div>

</v-app>
</template>



<script>
export default {
    data(){
        return{
             title:'',
             contributor:'',
             app:'',
             contributors:['raymond','zubair'],
             languages:["Web app with NodeJs",
                "Web app with PHP",
               "JAVASCRIPT(Node)",
                
                "PYTHON(3.8.1)",
                "PYTHON FOR ML(3.7.7)",
                "SQL",
                "C",
                "C++",
                "JAVA",
                "C#",
                "ERLANG",
                "COBOL",
                "KOTLIN",
                "FOTRAN",
                "PERL",
                "R",
                "RUBY",
                "GO",
                "HASKELL",
                "LUA",
                "PASCAL",
                "RUST",
                "SCALA",
                "SWIFT"]
        }
    }
}
</script>