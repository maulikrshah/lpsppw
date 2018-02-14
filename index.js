// include http module in the file
var http = require('http');

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
 
// create a server listening on 8087
http.createServer(function (req, res) {
    // write the response and send it to the client
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write('Node.js says hello!');
    res.end();
}).listen(8080, ip);