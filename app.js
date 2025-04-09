const http = require('http');
const fs = require('fs');
const { on } = require('events');
const { buffer } = require('stream/consumers');

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
    console.log(req.headers, req.url , req.method);
  /*   process.exit();   //To exit this Event Loop  this quits the server and program suts down*/
  const url = req.url;
  if(url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action = "/message" method = "POST" ><input type = "text" name="message"><button type="submit">send</button></form></body>');
    res.write('</html>');
    return res.end();
}

const method = req.method;
const body = [];
  if(url === '/message' && method === 'POST'){
    // fs.writeFileSync('message.txt','Dummy');
    req.on('data',(chunk)=>{
      console.log('chunk');
      body.push(chunk);

    });
    req.on('end',()=>{
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt',message);
    })
    // res.statusCode = 302;                    //# set status code
    // res.setHeader('Location','/');
    return res.end();
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Welcome to NodeJs</title>');
  res.write('<body><h1>Response form Server: Lets Explore NodeJs and Learn something New </h1></body>');
  res.write('</html>');
  res.end();  //after this nothing should be written as this will get send to client.

});

server.listen(3000)