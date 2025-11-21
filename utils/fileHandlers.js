const fs = require('fs').promises;
const path = require('path');

// Lee users.json
const getUsers = async () => {
  const filePath = path.join(__dirname, '..', 'data', 'users.json');
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
};

// Lee cards.json
const getCards = async () => {
  const filePath = path.join(__dirname, '..', 'data', 'cards.json');
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
};

module.exports = { getUsers, getCards };
