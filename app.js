const http = require("http");
const fs = require("fs");
const PORT = 3000;

http.createServer(function (req, res) {
	fs.readFile('index.html', function (err, data) {
		res.writeHeader(200, {'content-type': 'text/html'});
		res.write(html)
		res.end();
	})f
}).listen(PORT);

console.log(`Server Started on Port ${PORT}`);
