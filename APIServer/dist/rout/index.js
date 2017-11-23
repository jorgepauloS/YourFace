'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _dao = require('../dao');

var _dao2 = _interopRequireDefault(_dao);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use(_express2.default.static(__dirname + './src'));

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.route('/').get(function (req, res) {
	var auth = req.get("Authorization");
	res.sendFile(__dirname + '/index.html');
});

/* GET */
app.route('/alunos').get(function (req, res) {
	_dao2.default.findAll('tb_aluno', function (result) {
		res.status(200).send(JSON.stringify(result));
	});
});
/* GET */
app.route('/alunos/:id').get(function (req, res) {
	var codigo = req.params.id;
	_dao2.default.findOne('tb_aluno', 'cpf', codigo, function (result) {
		res.status(200).send(JSON.stringify(result));
	});
});
/* POST  */
app.route('/alunos/create').post(function (req, res) {
	var data = req.body;
	_dao2.default.createAluno('tb_aluno', data, function (result) {
		res.status(200).send(JSON.stringify(result));
	});
});

/* GET */
// coordenador
app.route('/coordenador').get(function (req, res) {
	_dao2.default.findAll('tb_coord', function (result) {
		res.status(200).send(JSON.stringify(result));
	});
});
/* GET */
app.route('/coordenador/:id').get(function (req, res) {
	var codigo = req.params.id;
	_dao2.default.findOne('tb_coord', 'cpf', codigo, function (result) {
		res.status(200).send(JSON.stringify(result));
	});
});
/* POST  */
app.route('/coordenador/create').post(function (req, res) {
	var data = req.body;
	_dao2.default.create('tb_coord', data, function (result) {
		res.status(200).send(JSON.stringify(result));
	});
});

/* GET */
// professor
app.route('/professor').get(function (req, res) {
	_dao2.default.findAll('tb_prof', function (result) {
		res.status(200).send(JSON.stringify(result));
	});
});

/* GET */
app.route('/professor/:id').get(function (req, res) {
	var codigo = req.params.id;
	_dao2.default.findOne('tb_prof', 'cpf', codigo, function (result) {
		res.status(200).send(JSON.stringify(result));
	});
});
/* POST  */
app.route('/professor/create').post(function (req, res) {
	var data = req.body;
	_dao2.default.create('tb_prof', data, function (result) {
		res.status(200).send(JSON.stringify(result));
	});
});

/* POST Login */
app.route('/login').post(function (req, res) {
	var data = req.body;

	console.log(data);
	_dao2.default.login('tb_coord', data, function (result) {
		res.send(JSON.stringify(result));
	});
});

exports.default = app;