module.exports = (sequelize, Sequelize) => {
    const Writer = sequelize.define("writer", {
      name: {
        type: Sequelize.STRING,
        unique: true
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING
      }
    });
    return Writer;
};