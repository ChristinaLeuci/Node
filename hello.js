var http = require('http'); //requires the module
//http is a core module of node

http.createServer(function(request, response){
  //callback function accepts a request and a response
  response.writeHead(200); //status code in header
  response.write("Hello World!!"); //response body
  response.end(); //closes connection
}).listen(8080); //listens for connections on this port
console.log('Listening on port 8080');

//event loop
//checks if request comes in then run callback
