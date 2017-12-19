describe('Rota Alunos', ()=>{
 
  const Aluno = app.datasource.models.Aluno;
  const defaultAluno = {
    cpf: '1',
    name: 'Erico',
    email:'erico@gmail.com',
    curso:'BSI',
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
      request.get('/alunos').end((err, res)=>{
        expect(res.body[0].cpf).to.be.eql(defaultAluno.cpf);
        expect(res.body[0].name).to.be.eql(defaultAluno.name);
        done(err);
      });
    });
  });

  describe('Rota /alunos/{id}',()=>{
    it('Retorna um aluno', done => {
      request.get('/alunos/1').end((err, res)=>{
        expect(res.body.cpf).to.be.eql(defaultAluno.cpf);
        expect(res.body.name).to.be.eql(defaultAluno.name);
        done(err);
      });
    });
  });

  describe('Route POST /alunos', () => {
    it('Cria um lista de alunos', done => {
      
      const newAluno = {
        cpf: '2',
        name: 'Andre',
        email:'andre@gmail.com',
        curso:'BSI',
        dataNascimento:'10/01/1980'
      };
      request
      .post('/alunos')
      .send(newAluno)
      .end((err, res)=>{
        expect(res.body.cpf).to.be.eql(newAluno.cpf);
        expect(res.body.name).to.be.eql(newAluno.name);
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
      request
      .put('/alunos/1')
      .send(updateAluno)
      .end((err, res)=>{
        expect(res.body).to.be.eql([1]);
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