import { Injectable } from '@angular/core';
import {
  IProduct,
  seedData,
  kMockResponse,
  successMsg,
} from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductProviderService {
  private products: IProduct[] = [...seedData];
  private id = seedData.length;

  constructor() {}

  getAllProducts(): IProduct[] {
    return this.products;
  }

  removeProductById(sku: number) {
    this.products = this.products.filter((p) => !(p.sku == sku));
    return kMockResponse(200, this.products, successMsg);
  }

  addProduct(product: IProduct) {
    product.sku = ++this.id;
    this.products.push(product);

    return kMockResponse(200, product, successMsg);
  }

  filterByColor(color: string): void {}
}
