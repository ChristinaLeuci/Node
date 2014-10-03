var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200);
  response.write("This callback is running!!");
  setTimeout(function(){//represents long running process
    response.write("Timeout is done");
    response.end();
  }, 5000); //5000ms = 5 seconds
}).listen(8080);
