import  mysql from 'mysql';

const conexao = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	database: "yourface",
	password : ''
});
conexao.findAll = (tabela, callback) =>{
	let data;
	conexao.query("SELECT * FROM "+tabela, function (err, result, fields) {
		let data;
		if (err)
			return callback(err);
		else{
			return callback(result);
		}
	});
}
conexao.findOne = (tabela, campo, codigo, callback) =>{
	let data = {};
	codigo = parseInt(codigo);
	if (codigo) {
		conexao.query('SELECT * FROM '+tabela+' WHERE '+campo+' = ?', [codigo], function (err, result, fields) {
			if (err)
				return callback(err);
			else{
				return callback(result[0]);
			}
		});
	}
}
conexao.login = (tabela, data ,callback) =>{
	const {cpf, password} = data;
	const sql = "SELECT * FROM "+tabela+" WHERE cpf=? and password=?";
	conexao.query(sql, [cpf, password], (err, result) => {
		if (err)
			return callback({msg:"erro"});
		else{
			if (result[0]) {
				
				return callback({msg:"Logado", token: cpf});
			}else{
				return callback({msg:"erro"});
			}
		}
	});
}

conexao.create = (tabela, data, callback) => {
	const {cpf, name, email, password} = data;
	const sql = "INSERT INTO " + tabela +" (cpf, name, email, password) VALUES (?,?,?,?)";
	conexao.query(sql, [cpf, name, email, password], (err, result) => {
		if (err)
			return callback({ msg: "erro", error: true });
		else {
			return callback({ msg: "Cadastro Realizado", error: false });
		}
	});
}
conexao.createAluno = (tabela, data, callback) => {
	const { cpf, name, email } = data;
	const sql = "INSERT INTO " + tabela + " (cpf, name, email) VALUES (?,?,?)";
	conexao.query(sql, [cpf, name, email], (err, result) => {
		if (err)
			return callback({ msg: "erro", error: true });
		else {
			return callback({ msg: "Cadastro Realizado", error: false });
		}
	});
}
export default conexao;