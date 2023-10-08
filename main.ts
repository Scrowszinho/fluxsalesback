import express from 'express';
import routes from './src';

const app = express();
const port = 3000;
app.use(express.json());
app.use(routes)

app.get('/', (req, res) => {
  res.send({hello: 'world'});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});