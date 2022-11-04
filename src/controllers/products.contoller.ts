import { Request, Response } from 'express';

import ProductsService from '../services/products.service';

export default class ProductsController {
  public productsService = new ProductsService();

  create = async (req: Request, res: Response) => {
    const product = req.body;

    const newProduct = await this.productsService.create(product);
    res.status(201).json(newProduct);
  };
}