const express = require('express');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Registrar rutas
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

// Middleware para rutas no definidas → devuelve 404 siempre
app.use((req, res) => {
  res.status(404).json({ message: 'Recurso solicitado no encontrado' });
});

// Inicia el servidor y escucha en el puerto 3000
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
