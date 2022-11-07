import { Router } from 'express';
import { OrderController } from '../controllers';

const productsRouter = Router();

const orderController = new OrderController();

productsRouter.get('/', orderController.getAll);

export default productsRouter;