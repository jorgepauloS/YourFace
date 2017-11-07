const express = require('express'); 
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('./banco');

const app = express();
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());

const tabela = 'user_tb';

router.get('/', (req, res)=>{
	connection.query('SELECT * FROM '+tabela, (error, results, fields) => {
		if(error) 
			res.status(401).json(error);
		else
			res.send({usuarios:results});
	});
});

router.get('/:id', (req, res) => {
	let filter = ' WHERE id=' + parseInt(req.params.id);
	connection.query('SELECT * FROM '+tabela+filter, (error, results, fields)=> {
		if(error) 
			res.status(401).json(error);
		else
			res.json(results);
	});
});

router.post('/', (req, res) =>{
	let name = req.body.name;
	let login = req.body.login;
	let Password = req.body.Password;
	let tipo = req.body.tipo;

	let sql = 'INSERT INTO '+tabela+' (name, login, Password, tipo) VALUES ("'+name+'","'+login+'","'+Password+'","'+tipo+'")';
	connection.query(sql, (error, result) => {
		if(error) 
			res.status(401).json(error);
		else
			res.send({msg:"1 record inserted"});
	});
});

module.exports = router;