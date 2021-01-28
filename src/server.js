import express from 'express';

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello naim!');
});

app.listen(PORT, HOST, () => {
  console.log(`App is listening on: ${PORT}`);
});

//docker build -t <name> .
//docker run -d -p 8080:3000  <name>
//docker run -it -p 9000:3000 -v $(pwd):/src <name>
