
describe('Rota coordenador', ()=>{
 
  const coordenador = app.datasource.models.Coordenador;
  const defaultCoordenador = {
    cpf: '1',
    name: 'Erico',
    email:'erico@gmail.com',
    password:'123'
  };

  beforeEach(done => {
    coordenador
    .destroy({ where: {} })
    .then(() => coordenador.create(defaultCoordenador))
    .then(() => {done();});
  });
  describe('Route GET /coordenador', () => {
    it('Retorna uma lista de coordenador', done => {
      request.get('/coordenador').end((err, res)=>{
        expect(res.body[0].cpf).to.be.eql(defaultCoordenador.cpf);
        expect(res.body[0].name).to.be.eql(defaultCoordenador.name);
        done(err);
      });
    });
  });



  describe('Rota /coordenador/{id}',()=>{
    it('Retorna um coordenador', done => {
      request.get('/coordenador/1').end((err, res)=>{
        expect(res.body.cpf).to.be.eql(defaultCoordenador.cpf);
        expect(res.body.name).to.be.eql(defaultCoordenador.name);
        done(err);
      });
    });
  });

  describe('Route POST /professores', () => {
    it('Cria um professores', done => {
      
      const newCoordenador = {
        cpf: '2',
        name: 'Andre',
        email:'andre@gmail.com',
        password:'123'
      };
      request
      .post('/coordenador')
      .send(newCoordenador)
      .end((err, res)=>{
        expect(res.body.cpf).to.be.eql(newCoordenador.cpf);
        expect(res.body.name).to.be.eql(newCoordenador.name);
        done(err);
      });
    });
  });
  describe('Route PUT /coordenador/{id}', () => {
    it('Atualiza um coordenador', done => {
      
      const updateProfessores = {
        cpf: '1',
        name: 'Erico Andre',
        email:'ericoandre@gmail.com',
        password:'123'
      };
      request
      .put('/coordenador/1')
      .send(updateProfessores)
      .end((err, res)=>{
        expect(res.body).to.be.eql([1]);
        done(err);
      });
    });
  });
  describe('Route delete /coordenador/{id}', () => {
    it('delete um coordenador', done => {
      
      request
      .delete('/coordenador/1')
      .end((err, res)=>{
        expect(res.statusCode).to.be.eql(204);
        done(err);
      });
    });
  });



});