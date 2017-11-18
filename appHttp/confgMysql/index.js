const mysql = require('mysql');


const conexao = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	database: "yourface",
	password : ''
});


module.exports = conexao;