import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (request, response) => {
  const user = await User.create({
    name: 'João Carlos Alvim',
    email: 'jc14joaocarlos@gmail.com',
    password_hash: '12345',
  });

  return response.json(user);
});

export default routes;
