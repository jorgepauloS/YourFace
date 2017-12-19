import AlunoController from '../../../controllers/alunos';

describe('Controler Alunos', ()=>{
	describe('Get todos Alunos getAll()',()=>{
		it('Retorna uma lista de Alunos',()=>{
			const Alunos = {
				findAll: td.function()
			};
			const expecteResponse = [{
				cpf: '1',
				name: 'Erico',
				email:'erico@gmail.com',
				curso:'BSI',
				dataNascimento:'10/01/1980',
				created_at: '2017-08-06T23:55:36.692Z',
				updated_at:'2017-08-06T23:55:36.692Z'
			}];
			td.when(Alunos.findAll({})).thenResolve(expecteResponse);
			const alunoController = new AlunoController(Alunos);
			return alunoController.getAll()
			.then(response => expect(response.data).to.be.eql(expecteResponse));
		});
	});





	describe('Get todos Alunos getById()',()=>{
		it('Retorna uma Alunos',()=>{
			const Alunos = {
				findOne: td.function()
			};
			const expecteResponse = [{
				cpf: '1',
				name: 'Erico',
				email:'erico@gmail.com',
				curso:'BSI',
				dataNascimento:'10/01/1980',
				created_at: '2017-08-06T23:55:36.692Z',
				updated_at:'2017-08-06T23:55:36.692Z'
			}];
			td.when(Alunos.findOne({where: {cpf:'1'}})).thenResolve(expecteResponse);
			const alunoController = new AlunoController(Alunos);
			return alunoController.getById({cpf:'1'})
			.then(response => expect(response.data).to.be.eql(expecteResponse));
		});
	});




	describe('Criar um Alunos create()',()=>{
		it('Criar um Alunos',()=>{
			const Alunos = {
				create: td.function()
			};
			const requestBody = {
				name: 'JOao',
				email:'JOao@gmail.com',
				curso:'BSI',
				dataNascimento:'10/01/2000',
			}


			const expecteResponse = [{
				cpf: '1',
				name: 'Erico',
				email:'erico@gmail.com',
				curso:'BSI',
				dataNascimento:'10/01/1980',
				created_at: '2017-08-06T23:55:36.692Z',
				updated_at:'2017-08-06T23:55:36.692Z'
			}];
			td.when(Alunos.create(requestBody)).thenResolve(expecteResponse);
			
			const alunoController = new AlunoController(Alunos);
			return alunoController.create(requestBody)
			.then(response => {
				expect(response.statusCode).to.be.eql(201);
				expect(response.data).to.be.eql(expecteResponse);
			});
		});
	});



	describe('Atualiza um Alunos update()',()=>{
		it('Atualiza um Alunos',()=>{
			const Alunos = {
				update: td.function()
			};
			const requestBody = {
				cpf: '1',
				name: 'JOao',
				email:'JOao@gmail.com',
				curso:'BSI',
				dataNascimento:'10/01/2000',
			}


			const expecteResponse = [{
				cpf: '1',
				name: 'Erico update',
				email:'erico@gmail.com',
				curso:'BSI',
				dataNascimento:'10/01/1980',
				created_at: '2017-08-06T23:55:36.692Z',
				updated_at:'2017-08-06T23:55:36.692Z'
			}];
			td.when(Alunos.update(requestBody,{where:{cpf:'1'}})).thenResolve(expecteResponse);
			
			const alunoController = new AlunoController(Alunos);
			return alunoController.update(requestBody, {cpf:'1'})
			.then(response => expect(response.data).to.be.eql(expecteResponse));
		});
	});



	describe('Delete um Alunos delete()',()=>{
		it('Delete um Alunos',()=>{
			
			const Alunos = {
				destroy: td.function()
			};

			td.when(Alunos.destroy({where: {cpf:'1'}})).thenResolve({});
			const alunoController = new AlunoController(Alunos);
			return alunoController.delete({cpf:'1'})
			.then(response => expect(response.statusCode).to.be.eql(204));
		});
	});








});