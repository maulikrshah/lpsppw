// include http module in the file

var http = require('http');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'maulik.r.shah29@gmail.com',
		pass: 'mandm2915'
	      }
});

var mailOptions = {
	from: 'maulik.r.shah29@gmail.com',
	to: 'lpsminimart@verizon.net',
	subject: 'Sending test email from server',
	text: 'Testing 3.21.838'
};

transporter.sendMail(mailOptions, function(error, info){
	if(error){
	console.log(error);
	} else {
	console.log('Email sent: ' + info.response);
	}
});

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
 
// create a server listening on 8080
http.createServer(function (req, res) {
    // write the response and send it to the client
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write('Node.js says hello!');
    res.end();
}).listen(8080, ip);