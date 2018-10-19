const io = require('socket.io')();

io.on('connection', client => {
	client.on('subscribeToTimer', interval => {
		console.log('client is subscribing to timer with interval ', interval);
		setInterval(() => {
			client.emit('timer', new Date());
		}, interval);
	});
});

io.listen();
console.log('WebSockets is [ON]');
