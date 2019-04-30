module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burgers', {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  Burger.associate = function (models) {
    Burger.belongsToMany(models.Ingredients, {
      through: 'Burger_Ingredients',
      foreignKey: 'burgerID'
    })
  }
  return Burger;
}