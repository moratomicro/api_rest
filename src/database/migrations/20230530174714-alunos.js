/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', { id: Sequelize.INTEGER });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
