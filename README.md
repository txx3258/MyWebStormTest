# MyWebStormTest
Test the git by webstorm

var Schema = require('mongoose').Schema;
var mySchema = Schema(
	{ Number: Number },
	{ Picture: String },
	{Position: String},
	{ Height: String },
	{ Weight: Number },
	{ Birthday: String },
	{ Years: Number }
);
// db is global
module.exports = db.model('react_grid', mySchema);


'use strict';

var PeerServer = require('peer').PeerServer;
var express = require('express');
var Topics = require('./public/src/Topics.js');
var app = express();
var model=require('./DataModel.js');

var uri = 'mongodb://112.74.115.213/mongoose-shared-connection';
global.db = mongoose.createConnection(uri);

var port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));

app.get('/fetchData', function(req,res,next){
	model.find(function (err, docs) {
		if (err) return next(err);
		res.send(docs);
	})
});

var expressServer = app.listen(port);
var io = require('socket.io').listen(expressServer);

console.log('Listening on port', port);

var peerServer = new PeerServer({ port: 9000, path: '/chat' });

peerServer.on('connection', function (id) {
  io.emit(Topics.USER_CONNECTED, id);
  console.log('User connected with #', id);
});

peerServer.on('disconnect', function (id) {
  io.emit(Topics.USER_DISCONNECTED, id);
  console.log('With #', id, 'user disconnected.');
});
