import express from 'express';
import productsRouter from './products.routes';
import usersRouter from './users.routes';
import ordersRouter from './orders.routes';

const routers = express.Router();

routers.use('/products', productsRouter);
routers.use('/users', usersRouter);
routers.use('/orders', ordersRouter);

export default routers;