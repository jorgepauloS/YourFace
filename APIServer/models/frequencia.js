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