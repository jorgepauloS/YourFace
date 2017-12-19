import bcrypt from 'bcrypt';

<<<<<<< HEAD
export default  (sequelize, DataTypes) => {
	return sequelize.define('Coordenador', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		ativo: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '1',
		},
		cpf: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		}
	}, {
		tableName: 'Coordenador',
		hooks: {
			beforeCreate: user => {
				user.set('password', bcrypt.hashSync(user.password, bcrypt.genSaltSync()));
			},
		},
	});
};
=======
export default (sequelize, DataType) => {
  const Users = sequelize.define('Coordenador', {
    cpf: {
      type: DataType.STRING,
      primaryKey: true,
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    ativo: {
      type:  DataType.ENUM('true','false'),
      defaultValue: 'true'
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

  },
    {
      hooks: {
        beforeCreate: user => {
          const salt = bcrypt.genSaltSync();
          user.set('password', bcrypt.hashSync(user.password, salt));
        },
      },
      classMethods: {
        isPassword: (encodedPassword, password) => {
        	console.log("teste")
        	bcrypt.compareSync(password, encodedPassword)
        },
      },
    });
  return Users;
};
>>>>>>> 41dbc599341086fb98c2311c62b0e6e84d3516c8
