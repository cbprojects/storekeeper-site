import { Component, OnInit } from '@angular/core';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { BillModel } from 'src/app/model/bill/bill-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  // Data
  title: String = "Facturación";
  subtitle: String = "Panel de administración de órdenes de compra y venta";
  selectedBill: BillModel | undefined;
  showPnlEdit: boolean = false;

  // Common
  msg: any;

  constructor(private textProperties: TextProperties, private omi: ObjectModelInitializer) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
  }

  toCreate() {
    this.selectedBill = this.omi.initializerBillModel();
    this.showPnlEdit = true;
  }
}
