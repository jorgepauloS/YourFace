var router = require('./router');
var con = require('./confgMysql');
var url = require('url');

var app = router(3000);

app.interceptor(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  next();
});

//loguin
//POST 
//http://localhost:3000/loguin post {"login":"erico", "passwd": "12345"}
app.post('/loguin', function (req, res) { 
  var usuario = req.body;
  const login = JSON.parse(usuario).login;
  const passwd = JSON.parse(usuario).passwd;
  if (login && passwd) {
    con.query('SELECT * FROM usuario WHERE login = ? and passwd = ?', [login, passwd], (err, result) => {
      if (err){
        console.log(JSON.stringify(err));
        res.end();
      }else{
        if (result.length>0) {
          res.write(JSON.stringify(result.login+'|'+result.passwd));
          res.end();
        }else{
          res.write(JSON.stringify({erro:"Loguin ou Senha Invalida!"}));
          res.end();
        }
      }
    });
  }else{
    res.write(JSON.stringify({erro:"Dados Incompletos!"}));
    res.end();
  }
});
app.options('/loguin', function (req, res) {
  res.end();
});



//Alunos 
//GET
//http://localhost:3000/alunos
//http://localhost:3000/alunos?id=15
api.get('/alunos', function (req, res) {
  var codigo = url.parse(req.url, true).query.id;
  if (codigo) {
    con.query('SELECT * FROM tb_aluno WHERE id_aluno = ?', [codigo], function (err, result, fields) {
      if (err){  
        console.log(JSON.stringify(err));
        res.end();
      }else{
        res.write(JSON.stringify(result));
        res.end();
      }
    });
  }else{
    con.query("SELECT * FROM tb_aluno", function (err, result, fields) {
      if (err){
        console.log(JSON.stringify(err));
        res.end();
      }else{
        res.write(JSON.stringify(result));
        res.end();
      }
    });
  }
});
//POST 
//http://localhost:3000/alunos post {"name":"Nome do aluno" "login":"erico", "passwd": "12345"}
app.post('/alunos', function (req, res) { 
  var usuario = req.body;
  const name = JSON.parse(usuario).nome;
  const login = JSON.parse(usuario).login;
  const passwd = JSON.parse(usuario).passwd;

  if (name && login && passwd) {

    var sql = "INSERT INTO tb_aluno (name, login, passwd) VALUES (?,?,?)";
    con.query(sql, [name, login, passwd], (err, result) => {
      if (err){
        console.log(JSON.stringify(err));
        res.end();
      }else{
        res.write(JSON.stringify({msg:"1 record inserted"}));
        res.end();
      }
    });
  }else{
    res.write(JSON.stringify({erro:"Dados Incompletos!"}));
    res.end();
  }
});

app.options('/alunos', function (req, res) {
  res.end();
});



//Professor 
//GET
//http://localhost:3000/professor
//http://localhost:3000/professor?id=15
api.get('/professor', function (req, res) {
  var codigo = url.parse(req.url, true).query.id;
  if (codigo) {
    con.query('SELECT * FROM tb_prof WHERE id_prof = ?', [codigo], function (err, result, fields) {
      if (err){  
        console.log(JSON.stringify(err));
        res.end();
      }else{
        res.write(JSON.stringify(result));
        res.end();
      }
    });
  }else{
    con.query("SELECT * FROM tb_prof", function (err, result, fields) {
      if (err){
        console.log(JSON.stringify(err));
        res.end();
      }else{
        res.write(JSON.stringify(result));
        res.end();
      }
    });
  }
});

//POST 
//http://localhost:3000/alunos post {"name":"Nome do aluno" "login":"erico", "passwd": "12345"}
app.post('/professor', function (req, res) { 
  var usuario = req.body;
  const name = JSON.parse(usuario).nome;
  const login = JSON.parse(usuario).login;
  const passwd = JSON.parse(usuario).passwd;

  if (name && login && passwd) {

    var sql = "INSERT INTO tb_prof (name, login, passwd) VALUES (?,?,?)";
    con.query(sql, [name, login, passwd], (err, result) => {
      if (err){
        console.log(JSON.stringify(err));
        res.end();
      }else{
        res.write(JSON.stringify({msg:"1 record inserted"}));
        res.end();
      }
    });
  }else{
    res.write(JSON.stringify({erro:"Dados Incompletos!"}));
    res.end();
  }
});

app.options('/professor', function (req, res) {
  res.end();
});




//Coordenador 
//GET
//http://localhost:3000/coordenador
//http://localhost:3000/coordenador?id=15
api.get('/coordenador', function (req, res) {
  var codigo = url.parse(req.url, true).query.id;
  if (codigo) {
    con.query('SELECT * FROM tb_coord WHERE id_coord = ?', [codigo], function (err, result, fields) {
      if (err){  
        console.log(JSON.stringify(err));
        res.end();
      }else{
        res.write(JSON.stringify(result));
        res.end();
      }
    });
  }else{
    con.query("SELECT * FROM tb_coord", function (err, result, fields) {
      if (err){
        console.log(JSON.stringify(err));
        res.end();
      }else{
        res.write(JSON.stringify(result));
        res.end();
      }
    });
  }
});

//POST 
//http://localhost:3000/alunos post {"name":"Nome do aluno" "login":"erico", "passwd": "12345"}
app.post('/coordenador', function (req, res) { 
  var usuario = req.body;
  const name = JSON.parse(usuario).nome;
  const login = JSON.parse(usuario).login;
  const passwd = JSON.parse(usuario).passwd;

  if (name && login && passwd) {

    var sql = "INSERT INTO tb_coord (name, login, passwd) VALUES (?,?,?)";
    con.query(sql, [name, login, passwd], (err, result) => {
      if (err){
        console.log(JSON.stringify(err));
        res.end();
      }else{
        res.write(JSON.stringify({msg:"1 record inserted"}));
        res.end();
      }
    });
  }else{
    res.write(JSON.stringify({erro:"Dados Incompletos!"}));
    res.end();
  }
});

app.options('/coordenador', function (req, res) {
  res.end();
});