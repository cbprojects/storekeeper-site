import { Component, Input, OnInit } from '@angular/core';
import { TextProperties } from 'src/app/config/TextProperties';
import { ProductModel } from 'src/app/model/product/product-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  // Data
  @Input() product: ProductModel | undefined;

  // Common
  msg: any;
  phase: string = environment.phaseCreate;
  phaseCreate: string = environment.phaseCreate;
  phaseEdit: string = environment.phaseEdit;

  constructor(private textProperties: TextProperties) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
  }

  inicializar() {
    let phaseSge = localStorage.getItem("phase") ? localStorage.getItem("phase") : this.phaseCreate;
    if (phaseSge) {
      this.phase = phaseSge;
    }
  }
}
