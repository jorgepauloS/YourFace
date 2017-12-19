<<<<<<< HEAD
/* jshint indent: 1 */

export default  (sequelize, DataTypes) => {
	return sequelize.define('Turmas_alunos', {
		id_turmas_alunos: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_turma: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'turmas',
				key: 'id_turma'
			}
		},
		cpf_aluno: {
			type: DataTypes.STRING,
			allowNull: false,
			references: {
				model: 'aluno',
				key: 'cpf'
			}
		}
	}, {
		tableName: 'Turmas_alunos'
	});
};
=======
export default (sequelize, DataType) => {
	return sequelize.define("Turmas_alunos", {
		id_turma:{
			type: DataType.INTEGER,
			primaryKey: true
		},
		cpf_aluno:{
			type: DataType.STRING,
			allowNull: false,
		}
	});
}
>>>>>>> 41dbc599341086fb98c2311c62b0e6e84d3516c8
