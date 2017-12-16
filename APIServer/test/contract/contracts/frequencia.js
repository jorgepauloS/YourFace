
describe('Rota frequencia', ()=>{

  var idFreq;

  const frequencia = app.datasource.models.Frequencia;
 
  const defaultFrequencia = {
    data:'10/01/1980',
    cpf_aluno:'1'
  };

  beforeEach(done => {
    frequencia.destroy({ where: {} })
    .then(() => frequencia.create(defaultFrequencia))
    .then(freq  => {done();});
  });


  describe('Route GET /frequencia', () => {
    it('Retorna uma lista de frequencia', done => {

    	const FrequenciaList = Joi.array().items(Joi.object().keys({
    		id_freq: Joi.number(),
    		data: Joi.date().iso(),
    		cpf_aluno: Joi.string(),
    		presenca: Joi.string(), 
    		created_at: Joi.date().iso(),
    		updated_at: Joi.date().iso()
    	}));

      request
      .get('/frequencia')
      	.end((err, res)=>{
          idFreq = res.body.id_freq;
      		joiAssert(res.body, FrequenciaList);
      		done(err);
      	});
    });
  });


  describe('Rota /frequencia/{id_freq}',()=>{
    it('Retorna um linha de frequencia', done => {

    	const Frequen = Joi.object().keys({
        id_freq: Joi.number(),
        data: Joi.date().iso(),
        cpf_aluno: Joi.string(),
        presenca: Joi.string(), 
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso()
    	});

      console.log(idFreq);

      request
      	.get('/frequencia/1')
      	.end((err, res)=>{
      		joiAssert(res.body, Frequen);
      		done(err);
      	});
    });
  });


describe('Route POST /frequencia', () => {
	it('Cria um lista de frequencia', done => {
		const newAluno = {
      data:'10/01/2017',
      cpf_aluno:'2'
		};

		const aluno = Joi.object().keys({
        id_freq: Joi.number(),
        data: Joi.date().iso(),
        cpf_aluno: Joi.string(),
        presenca: Joi.string(), 
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso()
		});
		request
			.post('/frequencia')
			.send(newAluno)
			.end((err, res)=>{
				joiAssert(res.body, aluno);
				done(err);
		});
	});
});



  describe('Route PUT /frequencia/{id_freq}', () => {
    it('Atualiza um frequencia', done => {
      
      const updateAluno = {
        data:'10/01/2018',
        cpf_aluno:'2'
      };

      const updateCount = Joi.array().items(1);

      request
      .put('/frequencia/1')
      .send(updateAluno)
      .end((err, res)=>{
        joiAssert(res.body, updateCount);
			done(err);
		});
	});
});


  describe('Route delete /frequencia/{id_freq}', () => {
    it('delete um frequencia', done => {
      
      request
      .delete('/frequencia/2')
      .end((err, res)=>{
        console.log(res.body)
        expect(res.statusCode).to.be.eql(204);
        done(err);
      });
    });
  });

});