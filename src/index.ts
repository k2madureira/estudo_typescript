import express from 'express';
import { hellWorld } from './routes';

const app = express();

app.get('/', hellWorld);

app.listen(3333);