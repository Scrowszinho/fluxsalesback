import express from 'express';
import routes from './src';
import keycloak from './src/config/keycloak';

const app = express();
const port = 3000;
app.use(express.json());
app.use(routes);
app.use(keycloak.middleware());

app.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
