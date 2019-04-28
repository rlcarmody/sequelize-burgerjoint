const express = require('express');
const ingredient = require('../models/ingredient');

const router = express.Router();

router.get('/api/ingredients', (req, res) => {
  ingredient.view(data => {
    res.json(data);
  })
})

router.post('/api/ingredients', (req, res) => {
  ingredient.create(req.body.name, data => {
    res.json(data.insertId);
  })
})

module.exports = router;