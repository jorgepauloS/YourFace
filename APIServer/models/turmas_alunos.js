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
