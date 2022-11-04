import { Router } from 'express';
import ProductsController from '../controllers';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post('/', productsController.create);
productsRouter.get('/', productsController.getAll);

export default productsRouter;