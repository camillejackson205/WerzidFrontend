import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  editProductForm: FormGroup;

  constructor(private _form: FormBuilder,
    private _productService: ProductsService,
    private _ar: ActivatedRoute,
    private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._productService.getProduct(p.get('id')).subscribe((singleProduct: Product) => {
        this.product = singleProduct;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editProductForm = this._form.group({
      ProductID: new FormControl(this.product.ProductID),
      ProductName: new FormControl(this.product.ProductName),
      ProductPrice: new FormControl(this.product.ProductPrice),
      ProductDescription: new FormControl(this.product.ProductDescription),
      ProductImagePath: new FormControl(this.product.ProductImagePath)
    });
  }

  onSubmit() {
    this._productService.updateProduct(this.editProductForm.value).subscribe(d => {
      this._router.navigate(['/products']);
    });
  }
}