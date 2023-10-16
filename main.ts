import express from 'express';
import routes from './src';
import { auth } from 'express-openid-connect';
import auth0 from './src/config/auth0';

const app = express();
const port = 3000;
app.use(express.json());
app.use(routes)
app.use(auth(auth0))

app.get('/', (req, res) => {
  res.send({hello: 'world'});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});