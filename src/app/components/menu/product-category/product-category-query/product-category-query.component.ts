import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { ProductCategoryModel } from 'src/app/model/product-category/product-category-model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-category-query',
  templateUrl: './product-category-query.component.html',
  styleUrls: ['./product-category-query.component.scss'],
  providers: [MessageService]
})
export class ProductCategoryQueryComponent implements OnInit {
  // Data
  title: string = "Categorías";
  list: ProductCategoryModel[] = [];
  showPnlEdit: boolean = false;
  filter: ProductCategoryModel | undefined;
  selectedProductCategory: ProductCategoryModel | undefined;
  selectedPhase: string | undefined;

  // Common
  msg: any;

  constructor(private textProperties: TextProperties, private rest: RestService, private util: Util, private omi: ObjectModelInitializer, private messageService: MessageService) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
    this.inicializar();
  }

  inicializar() {
    this.selectedPhase = environment.phaseCreate;
    localStorage.setItem("phase", environment.phaseCreate);
    this.filter = this.omi.initializerProductCategoryModel();
    this.find();
  }

  toCreate() {
    this.messageService.clear();
    this.selectedProductCategory = this.omi.initializerProductCategoryModel();
    this.selectedPhase = environment.phaseCreate;
    localStorage.setItem("phase", environment.phaseCreate);
    this.showPnlEdit = true;
  }

  toEdit(productCategory: ProductCategoryModel) {
    this.messageService.clear();
    this.selectedProductCategory = productCategory;
    this.selectedPhase = environment.phaseEdit;
    localStorage.setItem("phase", environment.phaseEdit);
    this.showPnlEdit = true;
  }

  find() {
    try {
      this.rest.getREST(environment.urlProductCategories).subscribe({
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

  deleteRow(id: string) {
    this.messageService.clear();
    try {
      this.rest.deleteREST(environment.urlProductCategories, id).subscribe({
        next: (res: any) => {
          console.log(res);
          this.find();
          this.util.showMessage(this.msg.lbl_summary_success, this.msg.lbl_detail_el_registro_eliminado, environment.severity[1]);
        },
        error: (e) => this.util.showErrorMessage(e, this.msg.lbl_summary_warning, environment.severity[2])
      });
    } catch (error) {
      console.log(error);
      this.util.showErrorMessage(error, this.msg.lbl_summary_danger, environment.severity[3])
    }
  }

}
