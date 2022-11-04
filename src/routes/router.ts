import express from 'express';
import productsRouter from './Products.routes';

const routers = express.Router();

routers.use('/products', productsRouter);

export default routers;