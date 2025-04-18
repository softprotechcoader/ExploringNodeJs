// const http = require('http'); // import http module

// *** When using app.listen() method, we don't need to use http module to create a server. ***
const express = require('express'); // import express module
const path = require('path'); // import path module
const bodyParser = require('body-parser'); // import body-parser module

const app = express(); // create an instance of express
app.use(bodyParser.urlencoded({extended : false})); // this is registration of middleware to parse incoming requests



// app.use(); // use middleware to parse incoming requests 

//*** Dummy MuddleWare No use Right now  ***

// app.use((req, res, next)=>{
// console.log('Middleware 1');
// next(); // call the next middleware in the stack
// });

app.use('/',(req, res, next)=>{
    console.log("This always runs");
    next(); // call the next middleware in the stack
});

app.use('/add-products',(req, res, next)=>{
console.log('Middleware 1');   
// res.send('Add-Products'); // send response to the client 
res.sendFile(path.join(__dirname,"./views/appProducts.html")); // send add-products.html file

});
/* 
Here we can use app.get or app.post or app.put or app.delete or app.patch and perform the action
*/

/* app.use('/products',(req, res, next)=>{
    console.log (req.body); // log the request body to the console  to use this need to use body-parser middleware
    res.redirect('/'); // redirect to home page
}) */
app.post('/products',(req, res, next)=>{
    console.log (req.body); // log the request body to the console  to use this need to use body-parser middleware
    res.redirect('/'); // redirect to home page
})

app.use('/',(req, res, next)=>{
    console.log('Middleware 2');   
    res.send('Hello Welcome to ExpressJs'); // send response to the client 
    
    });

/*
const server = http.createServer(app); // create a server using express app

server.listen(3000); // listen on port 3000
console.log('Server is running on port 3000'); // log to console    


*/ 
 // *** insted of using http module, we can use express module to create a server ***
app.listen(3000); // listen on port 3000

