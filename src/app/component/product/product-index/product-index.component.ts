import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/Product';
import { MatTableDataSource } from '../../../../../node_modules/@angular/material';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})

export class ProductIndexComponent implements OnInit {

  foods: Food[] = [
    {value: 'Pink-0', viewValue: 'Pink'},
    {value: 'Blue-1', viewValue: 'Blue'},
    {value: 'Red-2', viewValue: 'Red'}
  ];
       Quantity: Food[] = [
        {value: '0-0', viewValue: '0'},
        {value: '1-1', viewValue: '1'},
        {value: '2-2', viewValue: '2'}
      ];

  constructor(private _productService: ProductsService) { }
  ngOnInit() {

    this._productService.getProducts().subscribe((products: Product[]) => {      
      this.dataSource = new MatTableDataSource<Product>(products);
    });
  }
  columnNames = ['details', 'Name', 'Price', 'Description', 'buttons'];
  dataSource: MatTableDataSource<Product>
}
