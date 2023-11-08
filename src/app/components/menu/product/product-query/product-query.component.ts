import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Enumerados } from 'src/app/config/Enumerados';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { ProductModel } from 'src/app/model/product/product-model';
import { EnumItemModel } from 'src/app/model/shared/enum-item-model';
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
  selectedPhase: string | undefined;
  productTypes: any = [];
  unitTypes: any = [];
  categories: any = [];

  // Common
  msg: any;

  constructor(private textProperties: TextProperties, private enums: Enumerados, private rest: RestService, private util: Util, private omi: ObjectModelInitializer, private messageService: MessageService) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
    this.inicializar();
  }

  inicializar() {
    this.selectedPhase = environment.phaseCreate;
    localStorage.setItem("phase", environment.phaseCreate);
    this.productTypes = this.enums.getEnumerados().tipoProducto.valores;
    this.unitTypes = this.enums.getEnumerados().unidad.valores;
    this.categories = this.findCategories();
    this.filter = this.omi.initializerProductModel();
    this.find();
  }

  toCreate() {
    this.messageService.clear();
    this.selectedProduct = this.omi.initializerProductModel();
    this.selectedPhase = environment.phaseCreate;
    localStorage.setItem("phase", environment.phaseCreate);
    this.showPnlEdit = true;
  }

  toEdit(product: ProductModel) {
    this.messageService.clear();
    this.selectedProduct = product;
    this.selectedProduct.type = this.productTypes.find((el: EnumItemModel) => el.value === product.type);
    this.selectedProduct.unit = this.unitTypes.find((el: EnumItemModel) => el.value === product.unit);
    this.selectedProduct.category = this.categories.find((el: EnumItemModel) => el.value._id === product.category._id);
    this.selectedPhase = environment.phaseEdit;
    localStorage.setItem("phase", environment.phaseEdit);
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

  findCategories() {
    try {
      this.rest.getREST(environment.urlProductCategories).subscribe({
        next: (res: any) => {
          console.log(res);
          this.categories = [];
          let enumEmpty = { value: "-1", label: this.msg.lbl_enum_generico_valor_vacio };
          this.categories.push(enumEmpty);
          res.result.forEach((category: { name: any; }) => {
            let enumCategory = { value: category, label: category.name };
            this.categories.push(enumCategory);
          });
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
      this.rest.deleteREST(environment.urlProducts, id).subscribe({
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