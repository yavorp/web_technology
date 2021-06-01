import express, { Router } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import UserService from '../services/user-service';
import jwt from 'jsonwebtoken';

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
  const user = await UserService.findByEmail(email);
  try {
    if (!user) {
      throw new Error('Wrong username or password');
    }
    const pass = await bcrypt.compare(password, user.password!);
    if(!pass) {
      throw new Error('Wrong username or password');
    }
    const token = jwt.sign({
      name: user.name,
    }, 'secreet', {
      expiresIn: '10h'
    });
    res.setHeader('Authorization', token)
    // (req.session as any).something = 'authenticated';
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
