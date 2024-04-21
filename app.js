const http = require("http");
const PORT = 3000;

http.createServer(function (req, res) {
	res.write('Digital Ocean Created NodeJS Server');
	res.end();
}).listen(PORT);

console.log(`Server Started on Port ${PORT}`);
