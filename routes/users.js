const express = require('express');
const { getUsers } = require('../utils/fileHandlers');

const router = express.Router();

// GET /users → todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch {
    res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
  }
});

// GET /users/:id → usuario por id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const users = await getUsers();

    const user = users.find((item) => item._id === id);

    if (!user) {
      res.status(404).json({ message: 'ID de usuario no encontrado' });
      return;
    }

    res.json(user);
  } catch {
    res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
  }
});

module.exports = router;
