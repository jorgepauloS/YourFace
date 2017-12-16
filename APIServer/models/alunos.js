export default (sequelize, DataType) => {
	return sequelize.define("Aluno", {
		cpf:{
			type: DataType.STRING,
			primaryKey: true,
		},
		name:{
			type: DataType.STRING,
			allowNull: false,
		},
		curso:{
			type: DataType.STRING,
			allowNull: false,
		},
		email: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			}
		},
		ativo: {
			type:  DataType.ENUM('true','false'),
			defaultValue: 'true'
		},
		dataNascimento: {
			type: DataType.DATE,
			allowNull: false,
		}
	});
}
