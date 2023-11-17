import express from 'express';
import routes from './src';
import keycloak, { keycloackSession } from './src/config/keycloak';
import session from 'express-session';

const app = express();
const port = 3000;
app.use(express.json());
app.use(session({
  secret: '1234567890',
  resave: false,
  saveUninitialized: true,
  store: keycloackSession,
  cookie: {
    maxAge: 1000 * 60 * 3600
  },
}));
app.use(keycloak.middleware({
  logout: '/logout',
  admin: '/'
}));
app.use(routes);

app.get('/', keycloak.protect("fluxsales:teste") , (req, res) => {
  res.send({ hello: 'world' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
