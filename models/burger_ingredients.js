module.exports = function(sequelize, DataTypes) {
  const Burger_Ingredients = sequelize.define('Burger_Ingredients', {
    burgerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Burgers',
        key: 'id'
      }
    },
    ingredientID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Ingredients',
        key: 'id'
      }
    }
  })
  return Burger_Ingredients;
}