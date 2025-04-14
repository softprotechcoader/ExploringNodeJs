const http = require('http'); // import http module
const express = require('express'); // import express module

const app = express(); // create an instance of express

// app.use(); // use middleware to parse incoming requests 
app.use((req, res, next)=>{
console.log('Middleware 1');
next(); // call the next middleware in the stack
});

app.use((req, res, next)=>{
console.log('Middleware 2');    
// next(); // call the next middleware in the stack
});

const server = http.createServer(app); // create a server using express app

server.listen(3000); // listen on port 3000
console.log('Server is running on port 3000'); // log to console    




