import express from 'express';
import bodyParser from 'body-parser';
import datasource from './config/datasource';
<<<<<<< HEAD
import Config from './config/config';
import loginRoutes from './routes/login';
import authorization from './auth';
import alunoRoutes from './routes/alunos';
import professorRoutes from './routes/professores';
import coordenadorRoutes from './routes/coordenador';
=======

import Config from './config/config';
import TConfig from './config/Teste-config';

import loginRoutes from './routes/login';

import authorization from './auth';

import alunoRoutes from './routes/alunos';
import professorRoutes from './routes/professores';
import coordenadorRoutes from './routes/coordenador';

>>>>>>> 41dbc599341086fb98c2311c62b0e6e84d3516c8
import frequenciaRoutes from './routes/frequencia';

const app = express();

app.use(bodyParser.json());


app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'authorization, Origin, X-Requested-With, Content-Type, Accept');

    if (req.method === "OPTIONS") 
        res.send(200);
    else 
        next();
});


app.config = Config;

app.datasource = datasource(app);
app.set('port', 3000);
const auth = authorization(app);

app.use(bodyParser.json());
app.use(auth.initialize());

app.auth = auth;

alunoRoutes(app);
professorRoutes(app);
coordenadorRoutes(app);
frequenciaRoutes(app);

loginRoutes(app);

export default app;