import { IProducts, IProductsID } from '../interfaces';
import ProductsModel from '../models';

export default class ProductService {
  public products = new ProductsModel();

  public create = (productData: IProducts): Promise<IProductsID> => (
    this.products.create(productData)
  );

  public getAll = async (): Promise<IProductsID[]> => {
    const products = await this.products.getAll();
    return products;
  };
}