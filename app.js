const http = require('http');


/* function rqListioner(req , res){

}

// http.createServer(rqListioner);  
// we can also do this anonimus function

http.createServer(function(req , res){});    // Event driven Archetecture

// using next gen java script syntex using arrow function */
/* http.createServer((req, res )=>{
    console.log('Welecome to NodeJs');
    console.log(req);
}); */

// MultiLine comment using shortcut shift + Alt + A

const server = http.createServer((req, res )=>{       //returns server thats why storing in const variable server
    console.log('Welecome to NodeJs');
    console.log(req);
  /*   process.exit();   //To exit this Event Loop  this quits the server and program suts down*/
});

server.listen(3000)