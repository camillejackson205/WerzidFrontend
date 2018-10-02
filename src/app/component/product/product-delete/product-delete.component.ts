import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';
import { Product } from '../../../models/Product';
@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;
  constructor(private productService: ProductsService, private _activatedRoute: ActivatedRoute, private _router: Router) { 
    this._activatedRoute.paramMap.subscribe(routeData => {
      this.productService.getProduct(routeData.get('id')).subscribe((singleProduct: Product) => {
        this.product = singleProduct;
      });
    });
  }

  ngOnInit() {
  }

  onDelete(){
    this.productService.deleteProduct(this.product.ProductID).subscribe(() => {
      this._router.navigate(['./products']);
    });
  }


}
