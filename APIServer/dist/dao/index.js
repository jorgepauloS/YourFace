'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var conexao = _mysql2.default.createConnection({
	host: 'localhost',
	user: 'root',
	database: "yourface",
	password: ''
});
conexao.findAll = function (tabela, callback) {
	var data = void 0;
	conexao.query("SELECT * FROM " + tabela, function (err, result, fields) {
		var data = void 0;
		if (err) return callback(err);else {
			return callback(result);
		}
	});
};
conexao.findOne = function (tabela, campo, codigo, callback) {
	var data = {};
	codigo = parseInt(codigo);
	if (codigo) {
		conexao.query('SELECT * FROM ' + tabela + ' WHERE ' + campo + ' = ?', [codigo], function (err, result, fields) {
			if (err) return callback(err);else {
				return callback(result[0]);
			}
		});
	}
};
conexao.login = function (tabela, data, callback) {
	var cpf = data.cpf,
	    password = data.password;

	var sql = "SELECT * FROM " + tabela + " WHERE cpf=? and password=?";
	conexao.query(sql, [cpf, password], function (err, result) {
		if (err) return callback({ msg: "erro" });else {
			if (result[0]) {

				return callback({ msg: "Logado", token: cpf });
			} else {
				return callback({ msg: "erro" });
			}
		}
	});
};

conexao.create = function (tabela, data, callback) {
	var cpf = data.cpf,
	    name = data.name,
	    email = data.email,
	    password = data.password;

	var sql = "INSERT INTO " + tabela + " (cpf, name, email, password) VALUES (?,?,?,?)";
	conexao.query(sql, [cpf, name, email, password], function (err, result) {
		if (err) return callback({ msg: "erro", error: true });else {
			return callback({ msg: "Cadastro Realizado", error: false });
		}
	});
};
conexao.createAluno = function (tabela, data, callback) {
	var cpf = data.cpf,
	    name = data.name,
	    email = data.email;

	var sql = "INSERT INTO " + tabela + " (cpf, name, email) VALUES (?,?,?)";
	conexao.query(sql, [cpf, name, email], function (err, result) {
		if (err) return callback({ msg: "erro", error: true });else {
			return callback({ msg: "Cadastro Realizado", error: false });
		}
	});
};
exports.default = conexao;