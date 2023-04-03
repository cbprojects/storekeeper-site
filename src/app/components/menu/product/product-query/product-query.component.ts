import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/product/product-model';

@Component({
  selector: 'app-product-query',
  templateUrl: './product-query.component.html',
  styleUrls: ['./product-query.component.scss']
})
export class ProductQueryComponent implements OnInit {

  title: string = "Inventario";
  list: ProductModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
