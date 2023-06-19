const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Reine Alexandre Morato',
        email: 'moratomicro@yahoo.com.br',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Reine 2',
        email: 'moratomicro2@yahoo.com.br',
        password_hash: await bcryptjs.hash('1234567', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Reine 3',
        email: 'moratomicro3@yahoo.com.br',
        password_hash: await bcryptjs.hash('1234568', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Reine 4',
        email: 'moratomicro4@yahoo.com.br',
        password_hash: await bcryptjs.hash('1234569', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
