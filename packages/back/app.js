const express = require('express');
const cors = require('cors');
const app = express();
const port = 2008;

let movies = require('./movies.js');

app.use(cors());

app.get('/movies', (req, res) => res.send(movies));

app.get('/movie/:id', (req, res) => {
  const movie = movies.find(m => m.id === req.params.id);
  res.send(movie);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
