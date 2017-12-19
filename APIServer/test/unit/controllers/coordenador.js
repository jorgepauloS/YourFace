import CoordenadorController from '../../../controllers/coordenador';

describe('Controler Coordenador', ()=>{
	describe('Get todos Coordenador getAll()',()=>{
		it('Retorna uma lista de Coordenador',()=>{
			
			const Coordenador = {
				findAll: td.function()
			};

			const expecteResponse = [{
				cpf: '1',
				name: 'Erico',
				email:'erico@gmail.com',
				password:'123',
				created_at: '2017-08-06T23:55:36.692Z',
				updated_at:'2017-08-06T23:55:36.692Z'
			}];
			td.when(Coordenador.findAll({})).thenResolve(expecteResponse);
			const coordenadorController = new CoordenadorController(Coordenador);
			return coordenadorController.getAll()
			.then(response => expect(response.data).to.be.eql(expecteResponse));
		});
	});





	describe('Get todos Coordenador getById()',()=>{
		it('Retorna uma Coordenador',()=>{
			const Coordenador = {
				findOne: td.function()
			};
			const expecteResponse = [{
				cpf: '1',
				name: 'Erico',
				email:'erico@gmail.com',
				password:'123',
				created_at: '2017-08-06T23:55:36.692Z',
				updated_at:'2017-08-06T23:55:36.692Z'
			}];
			td.when(Coordenador.findOne({where: {cpf:'1'}})).thenResolve(expecteResponse);
			const alunoController = new CoordenadorController(Coordenador);
			return alunoController.getById({cpf:'1'})
			.then(response => expect(response.data).to.be.eql(expecteResponse));
		});
	});




	describe('Criar um Coordenador create()',()=>{
		it('Criar um Coordenador',()=>{
			const Coordenador = {
				create: td.function()
			};
			const requestBody = {
				name: 'JOao',
				email:'JOao@gmail.com',
				password:'123',
			}


			const expecteResponse = [{
				cpf: '1',
				name: 'Erico',
				email:'erico@gmail.com',
				password:'123',
				created_at: '2017-08-06T23:55:36.692Z',
				updated_at:'2017-08-06T23:55:36.692Z'
			}];
			td.when(Coordenador.create(requestBody)).thenResolve(expecteResponse);
			
			const alunoController = new CoordenadorController(Coordenador);
			return alunoController.create(requestBody)
			.then(response => {
				expect(response.statusCode).to.be.eql(201);
				expect(response.data).to.be.eql(expecteResponse);
			});
		});
	});



	describe('Atualiza um Coordenador update()',()=>{
		it('Atualiza um Coordenador',()=>{
			const Coordenador = {
				update: td.function()
			};
			const requestBody = {
				cpf: '1',
				name: 'JOao',
				email:'JOao@gmail.com',
				password:'123',
			}


			const expecteResponse = [{
				cpf: '1',
				name: 'Erico update',
				email:'erico@gmail.com',
				password:'123',
				created_at: '2017-08-06T23:55:36.692Z',
				updated_at:'2017-08-06T23:55:36.692Z'
			}];
			td.when(Coordenador.update(requestBody,{where:{cpf:'1'}})).thenResolve(expecteResponse);
			
			const alunoController = new CoordenadorController(Coordenador);
			return alunoController.update(requestBody, {cpf:'1'})
			.then(response => expect(response.data).to.be.eql(expecteResponse));
		});
	});



	describe('Delete um Coordenador delete()',()=>{
		it('Delete um Coordenador',()=>{
			
			const Coordenador = {
				destroy: td.function()
			};

			td.when(Coordenador.destroy({where: {cpf:'1'}})).thenResolve({});
			const alunoController = new CoordenadorController(Coordenador);
			return alunoController.delete({cpf:'1'})
			.then(response => expect(response.statusCode).to.be.eql(204));
		});
	});

});