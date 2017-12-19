
describe('Rota Alunos', ()=>{
 
  const Aluno = app.datasource.models.Aluno;
  const defaultAluno = {
    cpf : '1',
    name : 'Erico',
    email :'erico@gmail.com',
    curso :'BSI',
    dataNascimento:'10/01/1980'
  };

  beforeEach(done => {
    Aluno
    .destroy({ where: {} })
    .then(() => Aluno.create(defaultAluno))
    .then(() => {done();});
  });
  describe('Route GET /alunos', () => {
    it('Retorna uma lista de alunos', done => {

    	const alunosList = Joi.array().items(Joi.object().keys({
    		cpf :Joi.string(),
    		name :Joi.string(),
    		email :Joi.string(),
    		curso :Joi.string(),
    		ativo :Joi.string(), 
    		dataNascimento:Joi.date().iso(),
    		created_at:Joi.date().iso(),
    		updated_at:Joi.date().iso()
    	}));


      request
      	.get('/alunos')
      	.end((err, res)=>{
      		joiAssert(res.body, alunosList);
      		done(err);
      	});
    });
  });


  describe('Rota /alunos/{id}',()=>{
    it('Retorna um aluno', done => {

    	const aluno = Joi.object().keys({
        cpf :Joi.string(),
        name :Joi.string(),
        email :Joi.string(),
        curso :Joi.string(),
        ativo :Joi.string(), 
        dataNascimento:Joi.date().iso(),
        created_at:Joi.date().iso(),
        updated_at:Joi.date().iso()
    	});

      request
      	.get('/alunos/1')
      	.end((err, res)=>{
      		joiAssert(res.body, aluno);
      		done(err);
      	});
    });
  });


describe('Route POST /alunos', () => {
	it('Cria um lista de alunos', done => {
		const newAluno = {
			cpf : '2',
			name : 'Andre',
			email :'andre@gmail.com',
			curso :'BSI',
			dataNascimento:'10/01/1980'
		};

		const aluno = Joi.object().keys({
      cpf :Joi.string(),
      name :Joi.string(),
      email :Joi.string(),
      curso :Joi.string(),
      ativo :Joi.string(), 
      dataNascimento:Joi.date().iso(),
      created_at:Joi.date().iso(),
      updated_at:Joi.date().iso()
		});
		request
			.post('/alunos')
			.send(newAluno)
			.end((err, res)=>{
				joiAssert(res.body, aluno);
				done(err);
		});
	});
});



  describe('Route PUT /alunos/{cpf}', () => {
    it('Atualiza um alunos', done => {
      
      const updateAluno = {
        cpf: '1',
        name: 'Erico Andre',
        email:'ericoandre@gmail.com',
        curso:'BSI',
        dataNascimento:'10/01/1980'
      };


      const updateCount = Joi.array().items(1);

      request
		.put('/alunos/1')
		.send(updateAluno)
		.end((err, res)=>{
			joiAssert(res.body, updateCount);
			done(err);
		});
	});
});


  describe('Route delete /alunos/{cpf}', () => {
    it('delete um alunos', done => {
      
      request
      .delete('/alunos/1')
      .end((err, res)=>{
        console.log(res.body)
        expect(res.statusCode).to.be.eql(204);
        done(err);
      });
    });
  });


});