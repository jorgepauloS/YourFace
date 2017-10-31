//npm install lowdb --salve
//npm install express --save

const express = require('express')
const bodyParser = require('body-parser')
const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

//Cria o Servidor
const app = express();
app.use(bodyParser.json());

// Cria o banco de dados e inicia o servidor
const adapter = new FileAsync('db.json')

low(adapter).then(db => {
	app.get('/',(req, res)=>{
		res.sendFile( __dirname + '/index.html');
	})
    app.get('/user/:login', (req, res) => {
    	const post = db.get('user').find({ login: parseInt( req.params.login )}).value()
    	res.send(post)
    })
    app.get('/user/', (req, res) => {
    	const post = db.get('user').value()
    	res.send(post)
    })
    app.post('/validarLoguin', (req, res) => {
    	let login = req.body.login;
    	let passwd = req.body.passwd;

    	const post = db.get('user').find({login:login,passwd:passwd}).value()
    	
    	if (post) {
    		res.send({status:200, login: post.login, passwd:post.passwd})
    	}else{
    		res.send({status:403})
    	}
    })
    app.get('/admin', (req, res) => {

    	res.sendFile( __dirname + '/admin.html');
    })


    return db.defaults({ user: [] }).write()
}).then(() => {
	app.listen(80, () => console.log('listening on port 3000'))
})