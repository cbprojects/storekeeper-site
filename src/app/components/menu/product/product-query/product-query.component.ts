import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { ProductModel } from 'src/app/model/product/product-model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-query',
  templateUrl: './product-query.component.html',
  styleUrls: ['./product-query.component.scss'],
  providers: [MessageService]
})
export class ProductQueryComponent implements OnInit {

  title: string = "Inventario";
  list: ProductModel[] = [];
  showPnlEdit: boolean = false;
  filter: ProductModel | undefined;
  selectedProduct: ProductModel | undefined;

  // Common
  msg: any;

  constructor(private textProperties: TextProperties, private rest: RestService, private util: Util, private omi: ObjectModelInitializer, private messageService: MessageService) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
    this.filter = this.omi.initializerProductModel();
    this.find();
  }

  toCreate() {
    this.messageService.clear();
    this.selectedProduct = this.omi.initializerProductModel();
    this.showPnlEdit = true;
  }

  find() {
    try {
      this.rest.getREST(environment.urlProducts).subscribe({
        next: (res: any) => {
          console.log(res);
          this.list = res.result;
        },
        error: (e) => this.util.showErrorMessage(e, this.msg.lbl_summary_warning, environment.severity[2])
      });
    } catch (error) {
      console.log(error);
      this.util.showErrorMessage(error, this.msg.lbl_summary_danger, environment.severity[3])
    }
  }

  save(event: any) {
    this.messageService.add(event);
    this.find();
    this.showPnlEdit = false;
  }
}