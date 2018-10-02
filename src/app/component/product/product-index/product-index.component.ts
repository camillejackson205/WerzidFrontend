import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/Product';
import { MatTableDataSource } from '../../../../../node_modules/@angular/material';

export interface Products {
  value: string;
  viewValue: string;
}

export interface Numbers {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})

export class ProductIndexComponent implements OnInit {

  products: Products[] = [
    { value: 'Pink-0', viewValue: 'Pink' },
    { value: 'Blue-1', viewValue: 'Blue' },
    { value: 'Red-2', viewValue: 'Red' }
  ];
  numbers: Numbers[] = [
    { value: '1-0', viewValue: '1' },
    { value: '2-1', viewValue: '2' },
    { value: '3-2', viewValue: '3' },
    { value: '4-3', viewValue: '4' },
    { value: '5-4', viewValue: '5' },
    { value: '6-5', viewValue: '6' }
  ];

  constructor(private _productService: ProductsService) { }
  ngOnInit() {

    this._productService.getProducts().subscribe((products: Product[]) => {
      this.dataSource = new MatTableDataSource<Product>(products);
    });
  }
  columnNames = ['Image', 'Name', 'Price', 'Description', 'buttons'];
  dataSource: MatTableDataSource<Product>
}
