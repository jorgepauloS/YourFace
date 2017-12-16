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
