const express = require('express');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.send('Servidor Express funcionando 🚀');
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
