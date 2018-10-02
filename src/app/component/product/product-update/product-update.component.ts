import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Form } from '@angular/forms';

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

  createForm(){
    this.editProductForm = this._form.group({
      Name: new FormControl(this.product.Name),
      Price: new FormControl(this.product.Price),
      Description: new FormControl(this.product.Description)
    });
  }

  onSubmit(form) {
    const updateProduct: Product = {
      ProductID: form.value.ProductID,
      Name: form.value.Name,
      Price: form.value.Price,
      Description: form.value.Description
    };
    this._productService.updateProduct(updateProduct).subscribe(d => {
      this._router.navigate(['/Product']);
    });
  }

}
