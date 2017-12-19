import HttpStatus from 'http-status';
import jwt from 'jwt-simple';
import bcrypt from 'bcrypt';

export default(app)=>{

	const config = app.config;
	const Coordenador = app.datasource.models.Coordenador;
	const Profe = app.datasource.models.Professor;

	app.route('/login/professores')
	.post((req, res)=>{
		if (req.body.cpf && req.body.password) {
			const cpf = req.body.cpf;
			const password = req.body.password;

			Profe.findOne({ where: { cpf } }).then(user => {

				if (bcrypt.compareSync(password, user.password)) {
					const payload = { cpf: user.cpf };
					res.json({
						token: jwt.encode(payload, config.jwtSecret),
					});
				}else{
					res.json({success: false, message: 'Autenticação do Usuário falhou. Senha incorreta!'})
					//res.sendStatus(HttpStatus.UNAUTHORIZED);
				}
			})
			.catch(()=> res.json({success: false, message: 'Autenticação do Usuário falhou. Senha incorreta!'}));
		} else {
			res.json({success: false, message: 'Autenticação do Usuário falhou. Senha incorreta!'});
		}
	});

	app.route('/login/coordenador')
	.post((req, res)=>{
		if (req.body.cpf && req.body.password) {
			const cpf = req.body.cpf;
			const password = req.body.password;

			Coordenador.findOne({ where: { cpf } }).then(user => {

				if (bcrypt.compareSync(password, user.password)) {
					const payload = { cpf: user.cpf };
					
					res.json({
						success: true,
						token: jwt.encode(payload, config.jwtSecret),
					});

				}else{
					res.json({success: false, message: 'Autenticação do Usuário falhou. Senha incorreta!'})
					//res.sendStatus(HttpStatus.UNAUTHORIZED);
				}
			})
			.catch(()=> res.json({success: false, message: 'Autenticação do Usuário falhou. Senha incorreta!'}));
		} else {
			res.json({success: false, message: 'Autenticação do Usuário falhou. Senha incorreta!'});
		}
	});



	app.route('/teste')
	.all(app.auth.authenticate())
	.get((req, res) => {
		console.log(req.headers.authorization);
		console.log("Validou");
		res.send({teste:"Validou"});
	})


}