import { Component, Input, OnInit } from '@angular/core';
import { TextProperties } from 'src/app/config/TextProperties';
import { BillModel } from 'src/app/model/bill/bill-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.scss']
})
export class BillEditComponent implements OnInit {
  // Data
  @Input() bill: BillModel | undefined;

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
