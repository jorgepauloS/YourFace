import dao from '../dao';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + './src'));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.route('/').get((req, res)=>{
	var auth = req.get("Authorization");
	res.sendFile(__dirname+'/index.html');
});




/* GET */
app.route('/alunos').get((req, res)=>{
	dao.findAll('tb_aluno', (result) => {
		res.status(200).send(JSON.stringify(result));
	});
});
/* GET */
app.route('/alunos/:id').get((req, res)=>{
	let codigo = req.params.id;
	dao.findOne('tb_aluno', codigo, (result)=>{
		res.status(200).send(JSON.stringify(result));
	});
});

/* POST  */
app.route('/alunos/create').post((req, res)=>{
	const data = req.body;
	dao.create('tb_aluno', data,(result)=>{
		res.status(200).send(JSON.stringify(result));
	});
});
/* DELETE */
app.route('/alunos/:id/delete').delete((req, res)=>{
	let codigo = req.params.id;
	dao.delete('tb_aluno', codigo, (result)=>{
		res.status(200).send(JSON.stringify(result));
	});
});
/* PUT  */
app.route('/alunos/update').put((req, res)=>{
	const data = req.body;
	dao.update('tb_aluno', data,(result)=>{
		res.status(200).send(JSON.stringify(result));
	});
});






/* GET */
// coordenador
app.route('/coordenador').get((req, res)=>{
	dao.findAll('tb_coord', (result) => {
		res.status(200).send(JSON.stringify(result));
	});
});
/* GET */
app.route('/coordenador/:id').get((req, res)=>{
	let codigo = req.params.id;
	dao.findOne('tb_coord', codigo, (result)=>{
		res.status(200).send(JSON.stringify(result));
	});
});
/* POST  */
app.route('/coordenador/create').post((req, res)=>{
	const data = req.body;
	dao.create('tb_coord', data,(result)=>{
		res.status(200).send(JSON.stringify(result));
	});
});
/* DELETE */
app.route('/coordenador/:id/delete').delete((req, res)=>{
	let codigo = req.params.id;
	dao.delete('tb_coord', codigo, (result)=>{
		res.status(200).send(JSON.stringify(result));
	});
});
/* PUT  */
app.route('/coordenador/update').put((req, res)=>{
	const data = req.body;
	dao.update('tb_coord', data,(result)=>{
		res.status(200).send(JSON.stringify(result));
	});
});





/* GET */
// professor
app.route('/professor').get((req, res)=>{
	dao.findAll('tb_prof', (result) => {
		res.status(200).send(JSON.stringify(result));
	});
});
/* GET */
app.route('/professor/:id').get((req, res)=>{
	let codigo = req.params.id;
	dao.findOne('tb_prof', codigo, (result)=>{
		res.status(200).send(JSON.stringify(result));
	});
});
/* POST  */
app.route('/professor/create').post((req, res)=>{
	const data = req.body;
	dao.create('tb_prof', data,(result)=>{
		res.status(200).send(JSON.stringify(result));
	});
});
/* DELETE */
app.route('/professor/:id/delete').delete((req, res)=>{
	let codigo = req.params.id;
	dao.delete('tb_prof', codigo, (result)=>{
		res.status(200).send(JSON.stringify(result));
	});
});
/* PUT  */
app.route('/professor/update').put((req, res)=>{
	const data = req.body;
	dao.update('tb_prof', data,(result)=>{
		res.status(200).send(JSON.stringify(result));
	});
});



/* POST Login */
app.route('/login').post((req, res)=>{
	const data = req.body;
	dao.login('tb_coord', data,(result)=>{
		res.send(JSON.stringify(result));
	});
});

export default app;