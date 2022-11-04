import { Request, Response } from 'express';

import { ProductsService } from '../services';

export default class ProductsController {
  public productsService = new ProductsService();

  create = async (req: Request, res: Response) => {
    const product = req.body;

    const newProduct = await this.productsService.create(product);
    res.status(201).json(newProduct);
  };

  getAll = async (_req: Request, res: Response) => {
    const products = await this.productsService.getAll();

    res.status(200).json(products);
  };
}