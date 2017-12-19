export default {
  database: 'YourFace',
  username: 'root',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'Teste_YourFace.sqlite',
    define: {
      underscored: true,
    },
  },
  jwtSecret: 'Libr##',
  jwtSession: { session: false },
}