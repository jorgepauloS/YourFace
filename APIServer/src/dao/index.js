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
conexao.findOne = (tabela, codigo, callback) =>{
	let data = {};
	codigo = codigo;
	if (codigo) {
		conexao.query('SELECT * FROM '+tabela+' WHERE `cpf`=?', [codigo], function (err, result, fields) {
			if (err)
				return callback(err);
			else{
				return callback(result[0]);
			}
		});
	}
}
conexao.findAtivo = (tabela, callback) =>{
  let data;
  conexao.query("SELECT * FROM " + tabela + ' WHERE `ativo`=?', [true], function (err, result, fields) {
    let data;
    if (err)
      return callback(err);
    else {
      return callback(result);
    }
  });
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


conexao.update = (tabela, data, callback) => {

  const { cpf, name, email, curso, dataNascimento, password} = data;

  conexao.findOne(tabela, cpf, (res)=>{
    if(res){

      let sql = "UPDATE "+tabela+" SET `name`=?, email=? ";
      let parametros = [name, email]

      if(password){
        sql +=",`password`=?,";
        parametros.push(password);
      }if(curso && dataNascimento){
        sql +="`curso`=?, `dataNascimento`=?,";
        parametros.push(curso);
        parametros.push(dataNascimento);
      }
      sql = sql.substring(0,(sql.length - 1));
      sql += " WHERE cpf=?";
      parametros.push(cpf);

      conexao.query(sql, parametros, (err, result) => {
        if (err){
          console.log(err);
          return callback({ msg: "Erro", error: true });
        }else {
          return callback({ msg: "Cadastro Atualizado!", error: false });
        }
      });
      
    }

  });
}

conexao.create = (tabela, data, callback) => {
  const { cpf, name, email, curso, dataNascimento, password} = data;

  let sql = "INSERT INTO `"+tabela+"` (`cpf`, `name`, `email` "
  let parametros = [cpf, name, email];

  if(password){
    sql +=",`password`,";
    parametros.push(password);
  }if(curso && dataNascimento){
    sql +="`curso`, `dataNascimento`,";
    parametros.push(curso);
    parametros.push(dataNascimento);
  }
  sql = sql.substring(0,(sql.length - 1));
  sql +=") VALUES (";
  for (let i = parametros.length; i > 0; i--) {
    sql +="?,";
  }
  sql = sql.substring(0,(sql.length - 1));
  sql +=")";

  conexao.query(sql, parametros, (err, result) => {
    if (err)
      return callback({ msg: "erro", error: true });
    else {
      return callback({ msg: "Cadastro de realizado!", error: false });
    }
  });
}


conexao.delete = (tabela, codigo, callback) =>{
  if (codigo) {
    conexao.findOne(tabela, codigo, (res)=>{
      if(res){
        conexao.query("UPDATE "+tabela+" SET `ativo`='false' WHERE  `cpf`=?", [codigo], function (err, result, fields) {
          if (err){
          console.log(err);
          return callback({ msg: "Erro", error: true });
        }else{
            return callback({ msg: "1 Usuario Desativado: ", error: false });
          }
        });
      }else{
        return callback({ msg: "Usuario nao Encontrado!", error: true });
      }
    });
  }
}

export default conexao;