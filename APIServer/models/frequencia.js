<<<<<<< HEAD
/* jshint indent: 1 */

export default  (sequelize, DataTypes) => {
	return sequelize.define('Frequencia', {
		id_freq: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		data: {
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		cpf_aluno: {
			type: DataTypes.STRING,
			allowNull: false,
			references: {
				model: 'aluno',
				key: 'cpf'
			}
		},
		presenca: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '1'
		}
	}, {
		tableName: 'Frequencia'
	});
};
=======
export default (sequelize, DataType) => {
	return sequelize.define("Frequencia", {
		id_freq:{
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		data:{
			type: DataType.DATE,
			allowNull: false,
		},
		cpf_aluno:{
			type: DataType.STRING,
			allowNull: false,
		},
		presenca:{
			type: DataType.ENUM('true','false'),
			defaultValue: 'true'
		}
	},{
		classMethods:{
			associate:function(models){
				console.log(models);
			}
		}
	});
}
>>>>>>> 41dbc599341086fb98c2311c62b0e6e84d3516c8
