const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

mongoose.connect(process.env.MONGOOSE_CONNECT, {
  useNewUrlParser: true
});

app.get('/', (req, res) => {
  return res.send('Opaaaa')
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});