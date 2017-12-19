
describe('Rota Coordenador', ()=>{
 
  const Coordenador = app.datasource.models.Coordenador;
  const defaultCoord = {
    cpf: '1',
    name: 'Erico',
    email:'erico@gmail.com',
    password:'123456'
  };

  beforeEach(done => {
    Coordenador
    .destroy({ where: {} })
    .then(() => Coordenador.create(defaultCoord))
    .then(() => {done();});
  });


  describe('Route GET /coordenador', () => {
    it('Retorna uma lista de Coordenador', done => {

    	const coordList = Joi.array().items(Joi.object().keys({
    		cpf:Joi.string(),
    		name:Joi.string(),
    		email:Joi.string(),
        password:Joi.string(),
    		ativo:Joi.string(), 
    		created_at:Joi.date().iso(),
    		updated_at:Joi.date().iso(),
    	}));


      request
      	.get('/coordenador')
      	.end((err, res)=>{
      		joiAssert(res.body, coordList);
      		done(err);
      	});
    });
  });



  describe('Rota /coordenador/{cpf}',()=>{
    it('Retorna um Coordenador', done => {

    	const aluno = Joi.object().keys({
    		cpf:Joi.string(),
    		name:Joi.string(),
    		email:Joi.string(),
    		password:Joi.string(),
    		ativo:Joi.string(), 
    		created_at:Joi.date().iso(),
    		updated_at:Joi.date().iso(),
    	});

      request
      	.get('/coordenador/1')
      	.end((err, res)=>{
      		joiAssert(res.body, aluno);
      		done(err);
      	});
    });
  });

describe('Route POST /coordenador', () => {
	it('Cria um lista de Coordenador', done => {
		const newCoordenador = {
			cpf: '2',
			name: 'Andre',
			email:'andre@gmail.com',
			password:'123456',
		};

		const coor = Joi.object().keys({
			cpf:Joi.string(),
			name:Joi.string(),
			email:Joi.string(),
      password:Joi.string(),
			ativo:Joi.string(), 
			created_at:Joi.date().iso(),
			updated_at:Joi.date().iso(),
		});
		request
			.post('/coordenador')
			.send(newCoordenador)
			.end((err, res)=>{
				joiAssert(res.body, coor);
				done(err);
		});
	});
});

  describe('Route PUT /coordenador/{cpf}', () => {
    it('Atualiza um Coordenador', done => {
      
      const updateCoordenador = {
        cpf: '1',
        name: 'Erico Andre',
        email:'ericoandre@gmail.com',
        password:'123456',
      };


      const updateCount = Joi.array().items(1);

      request
		.put('/coordenador/1')
		.send(updateCoordenador)
		.end((err, res)=>{
			joiAssert(res.body, updateCount);
			done(err);
		});
	});
});

/*
  describe('Route delete /coordenador/{cpf}', () => {
    it('delete um Coordenador', done => {
      
      request
      .delete('/coordenador/1')
      .end((err, res)=>{
        console.log(res.body)
        expect(res.statusCode).to.be.eql(204);
        done(err);
      });
    });
  });
  */
});