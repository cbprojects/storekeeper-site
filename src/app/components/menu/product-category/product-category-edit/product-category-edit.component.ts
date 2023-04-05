import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { ProductCategoryModel } from 'src/app/model/product-category/product-category-model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

declare var $: any;

@Component({
  selector: 'app-product-category-edit',
  templateUrl: './product-category-edit.component.html',
  styleUrls: ['./product-category-edit.component.scss'],
  providers: [MessageService]
})
export class ProductCategoryEditComponent implements OnInit {
  // Data
  @Input() productCategory: ProductCategoryModel | undefined;
  @Output() saveEvent = new EventEmitter<any>();

  // Common
  msg: any;
  phase: string = environment.phaseCreate;
  phaseCreate: string = environment.phaseCreate;
  phaseEdit: string = environment.phaseEdit;

  constructor(private textProperties: TextProperties, private util: Util, private rest: RestService, private omi: ObjectModelInitializer, private messageService: MessageService) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
  }

  inicializar() {
    this.messageService.clear();
    let phaseSge = localStorage.getItem("phase") ? localStorage.getItem("phase") : this.phaseCreate;
    if (phaseSge) {
      this.phase = phaseSge;
    }
  }

  save() {
    try {
      this.rest.postREST(environment.urlProductCategories, this.productCategory).subscribe({
        next: (res: any) => {
          console.log(res);
          const id = res ? res._id : 0;
          const detail = `${this.msg.lbl_detail_el_registro}${id}${this.msg.lbl_detail_fue}${(this.phase === this.phaseCreate ? this.msg.lbl_detail_creado : this.msg.lbl_detail_actualizado)}${this.msg.lbl_detail_satisfactoriamente}`;

          this.productCategory = this.omi.initializerProductCategoryModel();
          this.saveEvent.emit(this.util.showMessage(this.msg.lbl_summary_success, detail, environment.severity[1]));
        },
        error: (e) => this.messageService.add(this.util.showErrorMessage(e, this.msg.lbl_summary_warning, environment.severity[2]))
      });
    } catch (error) {
      console.log(error);
      this.messageService.add(this.util.showErrorMessage(error, this.msg.lbl_summary_danger, environment.severity[3]))
    }
  }

}