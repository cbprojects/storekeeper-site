import { Component, OnInit } from '@angular/core';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { ProductModel } from 'src/app/model/product/product-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // Data
  title: String = "Inventario";
  subtitle: String = "Panel de administración de los productos y servicios ofrecidos";
  selectedProduct: ProductModel | undefined;
  showPnlEdit: boolean = false;

  // Common
  msg: any;

  constructor(private textProperties: TextProperties, private omi: ObjectModelInitializer) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
  }

  toCreate() {
    this.selectedProduct = this.omi.initializerProductModel();
    this.showPnlEdit = true;
  }
}
