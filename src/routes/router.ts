import express from 'express';
import productsRouter from './Products.routes';
import usersRouter from './users.routes';

const routers = express.Router();

routers.use('/products', productsRouter);
routers.use('/users', usersRouter);

export default routers;