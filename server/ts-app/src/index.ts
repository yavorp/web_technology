import express from 'express';
import cors from 'cors';
import { userRoute } from './routes/user-route';
import {config} from '../knexfile';
import Knex  from 'knex';
import { Model } from 'objection';

import Session from 'express-session';

const knex = Knex(config.development);
const KnexSessionStore = require('connect-session-knex')(Session);

const store = new KnexSessionStore({
  knex,
  tablename: 'sessions',
});

Model.knex(knex);
const app = express();

app.use(express.json());

app.use(cors({
  origin: '*'
}));
app.use(Session({
  secret: 'secreet',
  saveUninitialized: false,
  resave: false,
  cookie: {
    // Temporary cookie that will be deleted afeter 100000 ms
    maxAge: 100000,
  },
  store
}));
app.get('/', (req, res) => {
  res.json({
    name: 'Asdf'
  });
});

app.post('/', (req, res) => {
  const a: { a: number } = req.body;
  a.a = a.a + 1;
  // console.log(a);
  res.json(a);
})

app.use('/user', userRoute);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

