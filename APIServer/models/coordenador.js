import bcrypt from 'bcrypt';

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