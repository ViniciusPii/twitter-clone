const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('Olaáááá')
});

app.listen(3000, () => {
  console.log('Server started on port 3000')
});