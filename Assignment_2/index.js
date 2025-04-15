const express = require('express');
const path = require('path'); // import path module
// const router = express.Router();
const mainRouter = require('./router/router'); // import router.js file

// const fs = require('fs'); // import fs module
// const path = require('path'); // import path module

const app = express(); // create express app

app.use(express.static(path.join(__dirname,'public'))); // serve static files from public directory

app.use(mainRouter); // use the router
// const requestBody = [];


// app.use('/',(req, res, next)=>{
//     console.log("Middleware 1");
//     console.log("This is Assignemnt 2");
//     const filePath = path.join(__dirname,'user.html');
//     fs.readFile(filePath,'utf8',(err ,data)=>{
//         if (err) {
//             console.error(err);
//             return;
//         }
//         res.send(data); // send response to the client 

      
//         next(); // call next middleware

//     });
   

//     app.use('/registration',(req, res, next)=>{
//         console.log("Middleware 2");
//         console.log("Registration Successful");
//         res.send('<h1>Registration Successful</h1>');

//     });
    
// });

app.listen(3000);