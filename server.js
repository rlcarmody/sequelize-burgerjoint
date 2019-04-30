const express = require('express');
const PORT = process.env.PORT || 3000;
const db = require('./models');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('./controllers')(app);


db.sequelize.sync({}).then(function () {
  app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT);
  })
})
