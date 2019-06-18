var http = require('http');
var visits = 0;

http.createServer( function(request, response) {

   console.log('New Connection');

  switch(request.method){
    case('POST'):
        visits++;
        console.log('POST');
        break;
    case('GET'):
        console.log('GET');   
        response.writeHead(200, { 'Content-Type':'text/plain' } );
        response.write('Hello\n');
        response.write('We have had '+visits+' visits');
        break;
    default:
        break;
  }

  response.end();
}).listen(8080);

console.log('Server Started..');