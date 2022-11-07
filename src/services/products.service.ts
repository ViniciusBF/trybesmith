import { IProduct, IProductID } from '../interfaces';
import { ProductsModel } from '../models';

export default class ProductsService {
  public products = new ProductsModel();

  public create = (productData: IProduct): Promise<IProductID> => (
    this.products.create(productData)
  );

  public getAll = async (): Promise<IProductID[]> => {
    const products = await this.products.getAll();
    return products;
  };
}
