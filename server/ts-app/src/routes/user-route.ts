import express, { Router } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';

export const userRoute = Router();
const SALT_ROUNDS = 10;
userRoute.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const saltRounds = SALT_ROUNDS;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const uploadedUser = await User.query().insert({
    name, email, password: hashedPassword
  });

  res.json(uploadedUser);

});

userRoute.post('/login', async(req, res) => {
  const { email, password} = req.body;
  const user = await User.query().findOne({email});
  try {
    if (!user) {
      throw new Error('Wrong username or password');
    }
    console.log('asdf');
    const pass = await bcrypt.compare(password, user.password!);
    if(!pass) {
      throw new Error('Wrong username or password');
    }
    // ugly as fuck
    (req.session as any).something = 'authenticated';
    req.session.regenerate
    res.json({
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    if(error.message === 'Wrong username or password') {
      res.sendStatus(401);
    } else {
      res.sendStatus(500);
    }
  }
  
});
