const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Está vivo!!!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
