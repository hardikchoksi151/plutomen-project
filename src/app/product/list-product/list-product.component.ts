import { Component, OnInit } from '@angular/core';
import { ProductProviderService } from 'src/app/services/product-provider.service';
import { IProduct } from 'src/app/services/product.interface';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  products?: IProduct[];

  constructor(private readonly _productService: ProductProviderService) {}

  ngOnInit(): void {
    this.products = this._productService.getAllProducts();
  }

  removeProduct(sku: any) {
    this.products = this._productService.removeProductById(sku).data;
  }
}
