const express = require('express');
const fs = require('fs').promises; // Usamos fs con promesas para poder usar async/await
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Función async que lee el archivo users.json
const getUsers = async () => {
  const filePath = path.join(__dirname, 'data', 'users.json');
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data); // Convierte el JSON (string) a objeto/array JS
};

// Función async que lee cards.json
const getCards = async () => {
  const filePath = path.join(__dirname, 'data', 'cards.json');
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
};

// GET /users → devuelve todos los usuarios
app.get('/users', async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
  }
});

// GET /cards → devuelve todas las tarjetas
app.get('/cards', async (req, res) => {
  try {
    const cards = await getCards();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: 'Error al leer el archivo de tarjetas' });
  }
});

// GET /users/:id → busca un usuario por su ID
app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const users = await getUsers();

    const user = users.find((item) => item._id === id);

    if (!user) {
      res.status(404).json({ message: 'ID de usuario no encontrado' });
      return;
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
  }
});

// Middleware para rutas no definidas → devuelve 404 siempre
app.use((req, res) => {
  res.status(404).json({ message: 'Recurso solicitado no encontrado' });
});

// Inicia el servidor y escucha en el puerto 3000
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
