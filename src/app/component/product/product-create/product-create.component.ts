import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  private productForm: FormGroup;

  constructor(private _productService: ProductsService, private _form: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.productForm = this._form.group({
      ProductName: new FormControl,
      ProductPrice: new FormControl,
      ProductDescription: new FormControl,
      ProductImagePath: new FormControl
    });
  }

  onSubmit() {
    this._productService.createProduct(this.productForm.value).subscribe(data => {
      this.router.navigate(['/products']);
    });
  }
}
