import ProfessorController from '../../../controllers/professores';

describe('Controler Professor', ()=>{
	describe('Get todos Professor getAll()',()=>{
		it('Retorna uma lista de Professor',()=>{
			const Professor = {
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
			td.when(Professor.findAll({})).thenResolve(expecteResponse);
			const professorController = new ProfessorController(Professor);
			return professorController.getAll()
			.then(response => expect(response.data).to.be.eql(expecteResponse));
		});
	});





	describe('Get todos Professor getById()',()=>{
		it('Retorna uma Professor',()=>{
			const Professor = {
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
			td.when(Professor.findOne({where: {cpf:'1'}})).thenResolve(expecteResponse);
			const professorController = new ProfessorController(Professor);
			return professorController.getById({cpf:'1'})
			.then(response => expect(response.data).to.be.eql(expecteResponse));
		});
	});




	describe('Criar um Professor create()',()=>{
		it('Criar um Professor',()=>{
			const Professor = {
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
			td.when(Professor.create(requestBody)).thenResolve(expecteResponse);
			
			const professorController = new ProfessorController(Professor);
			return professorController.create(requestBody)
			.then(response => {
				expect(response.statusCode).to.be.eql(201);
				expect(response.data).to.be.eql(expecteResponse);
			});
		});
	});



	describe('Atualiza um Professor update()',()=>{
		it('Atualiza um Professor',()=>{
			const Professor = {
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
			td.when(Professor.update(requestBody,{where:{cpf:'1'}})).thenResolve(expecteResponse);
			
			const professorController = new ProfessorController(Professor);
			return professorController.update(requestBody, {cpf:'1'})
			.then(response => expect(response.data).to.be.eql(expecteResponse));
		});
	});



	describe('Delete um Professor delete()',()=>{
		it('Delete um Professor',()=>{
			
			const Professor = {
				destroy: td.function()
			};

			td.when(Professor.destroy({where: {cpf:'1'}})).thenResolve({});
			const professorController = new ProfessorController(Professor);
			return professorController.delete({cpf:'1'})
			.then(response => expect(response.statusCode).to.be.eql(204));
		});
	});








});