
describe('Rota Alunos', ()=>{
 
  const Profe = app.datasource.models.Professor;
  const defaultAluno = {
        cpf: '1',
        name: 'Erico Andre',
        email:'ericoandre@gmail.com',
        password:'123456',
  };

  beforeEach(done => {
    Profe
    .destroy({ where: {} })
    .then(() => Profe.create(defaultAluno))
    .then(() => {done();});
  });
  describe('Route GET /professores', () => {
    it('Retorna uma lista de Professor', done => {

    	const alunosList = Joi.array().items(Joi.object().keys({
        cpf:Joi.string(),
        name:Joi.string(),
        email:Joi.string(),
        password:Joi.string(),
        ativo:Joi.string(), 
        created_at:Joi.date().iso(),
        updated_at:Joi.date().iso(),
    	}));


      request
      	.get('/professores')
      	.end((err, res)=>{
      		joiAssert(res.body, alunosList);
      		done(err);
      	});
    });
  });



  describe('Rota /professores/{cpf}',()=>{
    it('Retorna um professores', done => {

    	const professor = Joi.object().keys({
        cpf:Joi.string(),
        name:Joi.string(),
        email:Joi.string(),
        password:Joi.string(),
        ativo:Joi.string(), 
        created_at:Joi.date().iso(),
        updated_at:Joi.date().iso(),
    	});

      request
      	.get('/professores/1')
      	.end((err, res)=>{
      		joiAssert(res.body, professor);
      		done(err);
      	});
    });
  });

describe('Route POST /professores', () => {
	it('Cria um lista de professores', done => {
		const newProf = {
			cpf: '2',
			name: 'Andre',
			email:'andre@gmail.com',
			password:'123456'
		};

		const prof = Joi.object().keys({
			cpf:Joi.string(),
			name:Joi.string(),
			email:Joi.string(),
			ativo:Joi.string(),
      password:Joi.string(), 
			created_at:Joi.date().iso(),
			updated_at:Joi.date().iso()
		});

		request
			.post('/professores')
			.send(newProf)
			.end((err, res)=>{
				joiAssert(res.body, prof);
				done(err);
		});
	});
});

  describe('Route PUT /professores/{cpf}', () => {
    it('Atualiza um professores', done => {
      
      const updateProf = {
        cpf: '1',
        name: 'Erico Andre',
        email:'ericoandre@gmail.com',
        password:'123456',
      };


      const updateCount = Joi.array().items(1);

      request
		.put('/professores/1')
		.send(updateProf)
		.end((err, res)=>{
			joiAssert(res.body, updateCount);
			done(err);
		});
	});
});


  describe('Route delete /professores/{cpf}', () => {
    it('delete um professores', done => {
      
      request
      .delete('/professores/1')
      .end((err, res)=>{
        expect(res.statusCode).to.be.eql(204);
        done(err);
      });
    });
  });


});