import { Router } from 'express';
import UserService from '../services/UserService.js';
export default Router()
  .post('/signup', async (req, res, next) => {
    UserService.create(req.body)
      .then(user => {
        res.cookie('session', UserService.authToken(user), {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 
        });
        res.send(user);
      })
      .catch(next);
  })
  .post('/login', async (req, res, next) => {
    UserService.authorize(req.body)
      .then(user => res.send(user))
      .catch(next);
  });
  

