import { Router } from 'express';
import { ProductController } from '../controllers';

const productsRouter = Router();

const productController = new ProductController();

productsRouter.post('/', productController.create);
productsRouter.get('/', productController.getAll);

export default productsRouter;