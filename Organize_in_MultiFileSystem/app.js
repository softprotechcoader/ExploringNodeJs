const http = require('http');

const routs = require('./rout');


// const server = http.createServer(routs);  //this will create a server and pass the requestHandler function to it 

// if exporting the function from rout.js is object then we need to use routs.handler
const message = routs.message;  //this will import the message from rout.js
console.log(message);  //this will print the message from rout.js
const server = http.createServer(routs.handler);  //this will create a server and pass the requestHandler function to it 

server.listen(3000)