var SocketServer = function() {
	this.io = require('socket.io')(process.env.SOCKET_PORT);
	console.info("Socket listening on port %s", process.env.SOCKET_PORT);
	
	this.emit = (name, payload) => {
		this.io.sockets.emit(name, payload);
	}
}

module.exports = SocketServer;