import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function hellWorld(request: Request , response: Response) {
  const user = createUser({
    email: 'email@2email.com',
    password: '123',
    techs: [
      'Js',
      'nodejs',
      { title: 'JavaScript', experience: 150 },
    ],
  });

  console.log(user.email);
  
  return response.json({ message: 'Hello World!' });
}