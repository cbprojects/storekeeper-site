import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
  providers: [MessageService]
})
export class ProductEditComponent implements OnInit {
  // Data
  @Input() product: ProductModel | undefined;
  @Input() phase: string | undefined;
  @Output() saveEvent = new EventEmitter<any>();
  providers: EnumItemModel[] = [];
  productTypes: EnumItemModel[] = [];
  unitTypes: EnumItemModel[] = [];
  categories: EnumItemModel[] = [];

  // Common
  msg: any;
  phaseCreate: string = environment.phaseCreate;

  constructor(private textProperties: TextProperties, private enums: Enumerados, private util: Util, private rest: RestService, private omi: ObjectModelInitializer, private messageService: MessageService) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
    this.inicializar();
  }

  inicializar() {
    this.productTypes = this.enums.getEnumerados().tipoProducto.valores;
    this.unitTypes = this.enums.getEnumerados().unidad.valores;
    this.findCategories();
    this.findProviders();
  }

  save() {
    try {
      if (this.product) {
        let productType: any = this.product.type;
        this.product.type = productType.value;
        let unitType: any = this.product.unit;
        this.product.unit = unitType.value;
        let category: any = this.product.category;
        this.product.category = category.value;
        let productProvider: any = this.product.provider;
        this.product.provider = this.omi.initializerProviderProductModelByParams(productProvider.value.name, productProvider.value.document_number, productProvider.value.document_type);
      }
      this.rest.postREST(environment.urlProducts, this.product).subscribe({
        next: (res: any) => {
          console.log(res);
          const id = res ? res._id : 0;
          const detail = `${this.msg.lbl_detail_el_registro}${id}${this.msg.lbl_detail_fue}${(this.phase === this.phaseCreate ? this.msg.lbl_detail_creado : this.msg.lbl_detail_actualizado)}${this.msg.lbl_detail_satisfactoriamente}`;

          this.product = this.omi.initializerProductModel();
          this.saveEvent.emit(this.util.showMessage(this.msg.lbl_summary_success, detail, environment.severity[1]));
        },
        error: (e) => this.messageService.add(this.util.showErrorMessage(e, this.msg.lbl_summary_warning, environment.severity[2]))
      });
    } catch (error) {
      console.log(error);
      this.messageService.add(this.util.showErrorMessage(error, this.msg.lbl_summary_danger, environment.severity[3]))
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

  findProviders() {
    try {
      this.rest.getREST(environment.urlProviders).subscribe({
        next: (res: any) => {
          console.log(res);
          this.providers = [];
          let enumEmpty = { value: "-1", label: this.msg.lbl_enum_generico_valor_vacio };
          this.providers.push(enumEmpty);
          res.result.forEach((provider: { name: any; }) => {
            let enumProvider = { value: provider, label: provider.name };
            this.providers.push(enumProvider);
          });
        },
        error: (e) => this.util.showErrorMessage(e, this.msg.lbl_summary_warning, environment.severity[2])
      });
    } catch (error) {
      console.log(error);
      this.util.showErrorMessage(error, this.msg.lbl_summary_danger, environment.severity[3])
    }
  }

}