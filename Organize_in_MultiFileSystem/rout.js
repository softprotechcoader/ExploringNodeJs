const fs = require('fs');

// function requestHandler(req, res) {}  //this is a old style function that will handle the request and response
const handler = requestHandler = (req, res) => {      // this is es6 style function that will handle the request and response
    const url = req.url;
    const method = req.method;


    if(url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action = "/message" method = "POST" ><input type = "text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    
   
    const body = [];
      if(url === '/message' && method === 'POST'){
        // fs.writeFileSync('message.txt','Dummy');
        req.on('data',(chunk)=>{
          console.log('chunk');
          body.push(chunk);
    
        });
        req.on('end',()=>{                   //Event Listener
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          // fs.writeFileSync('message.txt',message , error => {    //here we are using error first callback its a convention and another event listener
          fs.writeFile('message.txt',message , error => {    //here we are using error first callback its a convention and another event listener
                  /* 
                    writeFileSync blocks the event loop and it will not allow any other code to run
                    writeFile is non blocking and it will not block the event loop and it will allow other code to run
                    and it will run the callback function when the file is written
                  */
            res.statusCode = 302;                   
            res.setHeader('Location','/');
            return res.end();
          });
        });
        // res.statusCode = 302;                    //# set status code
        // res.setHeader('Location','/');
        // return res.end();
      }
      res.setHeader('Content-Type','text/html');
      res.write('<html>');
      res.write('<head><title>Welcome to NodeJs</title>');
      res.write('<body><h1>Response form Server: Lets Explore NodeJs and Learn something New </h1></body>');
      res.write('</html>');
      res.end();  //after this nothing should be written as this will get send to client.
    
    
      }

// module.exports = requestHandler;  //this will export the function to be used in app.js  

// module.exports={
//     handler : requestHandler,  //this will export the function to be used in app.js
//     message: 'Hello from NodeJs'  //this will export the message to be used in app.js
// }

module.exports.handler = requestHandler;  //this will export the function to be used in app.js
// // module.exports = requestHandler;  //this will export the function to be used in app.js
