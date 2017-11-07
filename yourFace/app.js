const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const usuarios = require('./user');
const connection = require('./banco');

const app = express();
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());


const jwt_passwd = 'merda';

let user = {erico:'toorrico1910'};


app.post("/token",(req, res) =>{
	let sql = 'SELECT id FROM user_tb WHERE login="'+req.body.login+'" AND Password="'+req.body.Password+'";';
	connection.query(sql, (error, results, fields)=> {
		if(error) 
			return res.status(401).json(error);
		else{
			let token = {token: jwt.sign({id:results[0]}, jwt_passwd,{expiresIn:'80 seconds'})}
			res.status(200).send(token);
		}
	});
});

app.use('/usuarios', usuarios);

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});