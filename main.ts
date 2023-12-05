import express from 'express';
import routes from './src';
import cors, { CorsOptions } from 'cors';
const app = express();
import session from 'express-session';
import passport from './src/modules/auth/Passport-config';

const corsOptions : CorsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(session({ secret: 'secretpass', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cors(corsOptions))
app.use(routes);

app.get('/' , (req, res) => {
  res.send({ hello: 'world' });
});

app.listen(process.env.API_PORT, () => {
  console.log(`Server is running on port ${process.env.API_PORT}`);
});
