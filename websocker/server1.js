var http = require('http');

var fs = require('fs');

// var io = require('socket.io');

var documentRoot = 'D:/websocker/www';

var server = http.createServer(function(req,res){

	var url = res.url;
	var file = documentRoot+url;
	console.log(file);

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

// var socket = io.listen(server);
// socket.sockets.on('connect',function(socket){

// 	console.log('有人通过socket连接进来了');
// });