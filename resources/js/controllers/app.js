const app = new Vue({  
    el: '#home',
    data:{
      
    },
    mounted: function () {

     
      
    },
    computed: {
    
    },
    created(){
   
      let loggedInUser = localStorage.getItem('user_new');

      if(loggedInUser){

        window.location ='/dashboard';
      }
    
    
    },
   
  methods:{
   
    }
});