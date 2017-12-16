describe('Rota professores', ()=>{
 
  const professores = app.datasource.models.Professor;
  const defaultProfessores = {
    cpf: '1',
    name: 'Erico',
    email:'erico@gmail.com',
    password:'123'
  };

  beforeEach(done => {
    professores
    .destroy({ where: {} })
    .then(() => professores.create(defaultProfessores))
    .then(() => {done();});
  });
  describe('Route GET /professores', () => {
    it('Retorna uma lista de professores', done => {
      request.get('/professores').end((err, res)=>{
        expect(res.body[0].cpf).to.be.eql(defaultProfessores.cpf);
        expect(res.body[0].name).to.be.eql(defaultProfessores.name);
        done(err);
      });
    });
  });



  describe('Rota /professores/{id}',()=>{
    it('Retorna um professores', done => {
      request.get('/professores/1').end((err, res)=>{
        expect(res.body.cpf).to.be.eql(defaultProfessores.cpf);
        expect(res.body.name).to.be.eql(defaultProfessores.name);
        done(err);
      });
    });
  });

  describe('Route POST /professores', () => {
    it('Cria um professores', done => {
      
      const newProfessores = {
        cpf: '2',
        name: 'Andre',
        email:'andre@gmail.com',
        password:'123'
      };
      request
      .post('/professores')
      .send(newProfessores)
      .end((err, res)=>{
        expect(res.body.cpf).to.be.eql(newProfessores.cpf);
        expect(res.body.name).to.be.eql(newProfessores.name);
        done(err);
      });
    });
  });
  describe('Route PUT /professores/{id}', () => {
    it('Atualiza um professores', done => {
      
      const updateProfessores = {
        cpf: '1',
        name: 'Erico Andre',
        email:'ericoandre@gmail.com',
        password:'123'
      };
      request
      .put('/professores/1')
      .send(updateProfessores)
      .end((err, res)=>{
        expect(res.body).to.be.eql([1]);
        done(err);
      });
    });
  });
  describe('Route delete /professores/{id}', () => {
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