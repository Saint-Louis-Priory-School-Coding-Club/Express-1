const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('This is a server');
});

app.listen(3000);
