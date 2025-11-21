const express = require('express');
const { getCards } = require('../utils/fileHandlers');

const router = express.Router();

// GET /cards → todas las tarjetas
router.get('/', async (req, res) => {
  try {
    const cards = await getCards();
    res.json(cards);
  } catch {
    res.status(500).json({ message: 'Error al leer el archivo de tarjetas' });
  }
});

module.exports = router;
