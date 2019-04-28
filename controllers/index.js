module.exports = app => {
  const burgerRoutes = require('./burgers_controller');
  const ingredientRoutes = require('./ingredients_controller');
  app.use(burgerRoutes);
  app.use(ingredientRoutes);
}
