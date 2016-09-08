var http = require('http');

var fs = require('fs');

var io = require('socket.io');

var documentRoot = 'D:/websocker/www';

var server = http.createServer(function(req,res){

	// console.log('有人进来了');
	// res.writeHeader(200,{
	// 	'content-type':'text/html;charset="utf-8"'
	// });
	// res.write('这是正文');
	// res.end();
	// console.log(req);

	var url = req.url;
	// console.log(url);

	var file = documentRoot+url;
	// console.log(file);

	fs.readFile(file,function(err,data){

		if(err){
			res.writeHeader(404,{
				'content-type':'text/html;charset="utf-8"'
			});
			res.write('<h1>你大爷！</h1>');
			res.end();
		}else{

			res.writeHeader(200,{
				'content-type':'text/html;charset="utf-8"'
			});
				res.write(data);
				res.end();

					}

	});

}).listen(8888);

// console.log('服务器开启成功');
var socket = io.listen(server);
socket.sockets.on('connection',function(socket){
	// console.log('有人通过socket连接进来了');

	socket.emit('hello','欢迎');

	// socket.on('helloto',function(data){
	// 	console.log(data);
	// });

	socket.broadcast.emit('a','欢迎新人进来');

	socket.on('move',function(data){
		socket.broadcast.emit('move2',data);
	});

});