import httpStatus from 'http-status';

const defaultResponse = (data, statusCode = httpStatus.OK) => ({
	data,
	statusCode,
});

const errorResponse = (message, statusCode = httpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);


class CoordenadorController{
	constructor(Coordenador){
		this.Coordenador = Coordenador;
	}
	getAll(){
<<<<<<< HEAD

		/*	response.data.forEach(function (item) {
		//console.log(item);
		console.log(item.password);
		})
		*/


		return this.Coordenador.findAll({where: {"ativo":true}})
=======
		return this.Coordenador.findAll({})
>>>>>>> 41dbc599341086fb98c2311c62b0e6e84d3516c8
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}
	getById(params){
		return this.Coordenador.findOne({where: params})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data){
		return this.Coordenador.create(data)
		.then(result=> defaultResponse(result, httpStatus.CREATED))
		.catch(error => errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));
	}
	update(data, params){
<<<<<<< HEAD
		console.log(data)
=======
>>>>>>> 41dbc599341086fb98c2311c62b0e6e84d3516c8
		return this.Coordenador.update(data,{where:params})
		.then(result=> defaultResponse(result))
		.catch(error => errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params){
<<<<<<< HEAD


		return this.Coordenador.update({"ativo":false} ,{where:params})
		.then(result=> defaultResponse(result))
		.catch(error => errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));


		/*
		return this.Coordenador.destroy({where: params})
		.then(result => defaultResponse(result, httpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));	

		*/
=======
		return this.Coordenador.destroy({where: params})
		.then(result => defaultResponse(result, httpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));	
>>>>>>> 41dbc599341086fb98c2311c62b0e6e84d3516c8
	}
}

export default CoordenadorController;