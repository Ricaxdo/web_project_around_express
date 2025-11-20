const express = require('express');
const users = require('./data/users.json');
const cards = require('./data/cards.json');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

/* GET /users - Devuelve lista JSON de los usuarios */
app.get('/users', (req, res) => {
  res.send(users);
});

/* GET /cards - Devuelve lista JSON de las tarjetas */
app.get('/cards', (req, res) => {
  res.send(cards);
});

/* GET /users/:id - Devuelve un usuario por ID */
app.get('/users/:id', (req, res) => {
  const { id } = req.params;

  const user = users.find((item) => item._id === id);

  if (!user) {
    res.status(404).json({ message: 'ID de usuario no encontrado' });
    return;
  }

  res.send(user);
});

/* Manejar rutas no existentes (incluye '/') */
app.use((req, res) => {
  res.status(404).json({ message: 'Recurso solicitado no encontrado' });
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
