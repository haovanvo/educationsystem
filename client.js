var express = require('express');

var PORT = process.env.PORT || 8000;
app = express();

app.listen(PORT);
console.log('HTTPS Server listening on %s', PORT);

app.use('/main.js',express.static(__dirname + '/main.js'));
app.use('/jquery.js',express.static(__dirname + '/jquery.js'));
app.use('/peer.js',express.static(__dirname + '/peer.js'));
app.use('/socket.io.js',express.static(__dirname + '/socket.io.js'));

// routes
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});