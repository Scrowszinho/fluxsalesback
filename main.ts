import express from 'express';
import routes from './src';
const app = express();
app.use(express.json());

app.use(routes);

app.get('/' , (req, res) => {
  res.send({ hello: 'world' });
});

app.listen(process.env.API_PORT, () => {
  console.log(`Server is running on port ${process.env.API_PORT}`);
});
