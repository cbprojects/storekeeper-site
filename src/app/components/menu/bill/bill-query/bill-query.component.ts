import { Component, OnInit } from '@angular/core';
import { BillModel } from 'src/app/model/bill/bill-model';

@Component({
  selector: 'app-bill-query',
  templateUrl: './bill-query.component.html',
  styleUrls: ['./bill-query.component.scss']
})
export class BillQueryComponent implements OnInit {

  title: string = "Facturación";
  list: BillModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
