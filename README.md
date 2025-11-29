# web_project_around_express

Proyecto del Sprint 16-17 de TripleTen.  
Backend inicial de la aplicación “Alrededor de los EE. UU.” desarrollado con **Node.js, Express y MongoDB/Mongoose**.

Este servidor expone una API RESTful para gestionar **usuarios** y **tarjetas**, con validación de datos mediante Mongoose, controladores modularizados, manejo correcto de errores HTTP y un middleware temporal de autorización que simula un usuario autenticado.

## Caracteristicas

### Usuarios
- Crear usuario (`POST /users`)
- Obtener todos los usuarios (`GET /users`)
- Obtener usuario por ID (`GET /users/:userId`)
- Actualizar perfil del usuario actual (`PATCH /users/me`)
- Actualizar avatar del usuario actual (`PATCH /users/me/avatar`)

### Tarjetas (Cards)
- Crear tarjeta (`POST /cards`)
- Obtener todas las tarjetas (`GET /cards`)
- Eliminar tarjeta por ID (`DELETE /cards/:cardId`)
- Dar like a una tarjeta (`PUT /cards/:cardId/likes`)
- Quitar like a una tarjeta (`DELETE /cards/:cardId/likes`)

## 📂 Tecnologías
- Node.js  
- Express  
- MongoDB
- Git & GitHub  

## ▶️ Ejecución
```bash
npm install
npm run start     # iniciar servidor
npm run dev       # modo desarrollo con nodemon
