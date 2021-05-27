<template>
  <div>

       <div id="terminal-container" style="z-index:9999999999999999999999999;"></div>

  </div>
</template>
<script>
import { TerminalUI } from "./TerminalUI";

export default {
      data(){
        return{
          
           that:this,
           serverAddress:'https://app.citonhub.com:8080',
           terminal:null,
           container:undefined,
         
        }
    },
    mounted(){
       this.start();
    },
    methods:{
     connectToSocket:function(serverAddress){
            return new Promise(res => {
    const socket = io(serverAddress, {transports: ['websocket', 'polling', 'flashsocket']});
    res(socket);
        });
        },
    startTerminal:function(container, socket){
      // Create an xterm.js instance.
     this.terminal = new TerminalUI(socket);

  // Attach created terminal to a DOM element.
   this.terminal.attachTo(container);

  // When terminal attached to DOM, start listening for input, output events.
  // Check TerminalUI startListening() function for details.
    this.terminal.startListening();
    },
   start:function(){
       this.container = document.getElementById("terminal-container");

       // Connect to socket and when it is available, start terminal.
  this.connectToSocket(this.serverAddress).then(socket => {
     this.startTerminal(this.container, socket);
  });
   }
    }
}
</script>
<style scoped>
 #terminal{
     font-family: "DejaVu Sans Mono", "Liberation Mono", monospace;
		font-size: 11px;
		color: rgb(240, 240, 240);
		background: #383734 !important; 
		padding: 3px;
		border: none !important;
 }
</style>