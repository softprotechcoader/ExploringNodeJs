const http = require('http');
const fs = require('fs');
const { on } = require('events');
const { buffer } = require('stream/consumers');
const { error } = require('console');

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
console.log('Welecome to NodeJs');
const server = http.createServer((req, res) => { // returns server, stored in const variable server
    console.log('Welecome to NodeJs');
    console.log(req);
    console.log(req.headers, req.url, req.method);

    const url = req.url;
    const method = req.method;
    const body = [];

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        req.on('data', (chunk) => {
            console.log('Received chunk:', chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log('Parsed message:', message);

            fs.writeFile('message.txt', message, (error) => {
                if (error) {
                    console.error('Error writing file:', error);
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/plain');
                    res.write('Internal Server Error');
                    return res.end();
                }

                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });

        req.on('error', (error) => {
            console.error('Request error:', error);
            res.statusCode = 400;
            res.setHeader('Content-Type', 'text/plain');
            res.write('Bad Request');
            return res.end();
        });

        return; // Ensure no further code is executed for this route
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Welcome to NodeJs</title></head>');
    res.write('<body><h1>Response from Server: Let\'s Explore NodeJs and Learn something New</h1></body>');
    res.write('</html>');
    res.end(); // Ensure response is ended
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});