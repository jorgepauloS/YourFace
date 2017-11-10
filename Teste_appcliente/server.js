var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
	res.status(201).sendfile(__dirname + '/public/index.html');
	//res.sendFile( __dirname + "/index.html" );
});


app.get('/user', function (req, res) {
	var auth = req.get("Authorization");
	console.log(auth);
	if (!auth) {
		return res.jsonp(401, {error:'acessoNegado'}) 
	}
	res.jsonp(200, { user: [{nome:'tobi'}] }) 
});

app.post('/user/cadastra', function (req, res) {
	var auth = req.get("Authorization");
	console.log(auth);
	console.log(req.body);
	res.json({ message: 'hooray! welcome to our api!' });   

});


app.listen(3000, () => {
	console.log('Server running at http://127.0.0.1:3000/');
});