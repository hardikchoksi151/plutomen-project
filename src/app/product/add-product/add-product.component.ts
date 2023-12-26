import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ProductProviderService } from 'src/app/services/product-provider.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  public productForm!: FormGroup;

  constructor(
    private readonly _productService: ProductProviderService,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [''],
      size: [''],
      colors: this.fb.array([]),
    });
  }

  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

  get size() {
    return this.productForm.get('size');
  }

  get colors() {
    return this.productForm.get('colors') as FormArray;
  }

  addColor() {
    this.colors.push(this.fb.control(''));
  }

  onSubmit() {
    console.log(this.productForm.value);

    this._productService.addProduct(this.productForm.value);

    this.router.navigate(['/products'])
  }
}
