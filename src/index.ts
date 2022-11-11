import express from 'express';

let count = 0;
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/count', (req, res, next) => {
  res.status(200).json(count);
})

app.get('/add', (req, res, next) => {
  count ++;
  res.status(200).json(count);
})

app.get('/sub', (req, res, next) => {
  count --;
  res.status(200).json(count);
})

app.listen(PORT, () => {
  console.log(`counter server listening on port ${PORT}`)
})