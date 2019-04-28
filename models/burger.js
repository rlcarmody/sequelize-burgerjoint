const orm = require('../config/orm');

const burger = {
  view: function (cbfunc) {
    orm.selectAll('burgers', cbfunc);
  },
  create: function (burgerName, cbfunc) {
    const newBurger = { burger_name: burgerName };
    orm.insertOne('burgers', newBurger, cbfunc);
  },
  setIngredients: function (id, ingredientArray, cbfunc) {
    const dbArray = ingredientArray.map(item => [id, item]);
    orm.insertMultiple('burger_ingredients', ['burgerID','ingredientID'], dbArray, cbfunc)
  },
  devour: function (id, cbfunc) {
    orm.updateOne('burgers', { devoured: 1 }, { id: id }, cbfunc);
  },
  ingredients: function (id, cbfunc) {
    const filters = [
      { "burger_ingredients.burgerID": id },
      'burger_ingredients.ingredientId',
      'ingredients.id'
    ]
    orm.viewJoined('ingredients', 'burger_ingredients', filters, cbfunc)
  }
}

module.exports = burger;