<<<<<<< HEAD
/* jshint indent: 1 */

export default  (sequelize, DataTypes) => {
	return sequelize.define('Turmas', {
		id_turma: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name_turma: {
			type: DataTypes.STRING,
			allowNull: false
		},
		cpf_prof: {
			type: DataTypes.STRING,
			allowNull: false,
			references: {
				model: 'professor',
				key: 'cpf'
			}
		}
	}, {
		tableName: 'Turmas'
	});
};
=======
export default (sequelize, DataType) => {
	return sequelize.define("Turmas", {
		id_turma:{
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name_turma:{
			type: DataType.STRING,
			allowNull: false,
		},
		cpf_prof:{
			type: DataType.STRING,
			allowNull: false,
		}
	});







}
>>>>>>> 41dbc599341086fb98c2311c62b0e6e84d3516c8
