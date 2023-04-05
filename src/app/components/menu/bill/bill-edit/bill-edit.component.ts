import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { BillModel } from 'src/app/model/bill/bill-model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.scss'],
  providers: [MessageService]
})
export class BillEditComponent implements OnInit {
  // Data
  title: string = "Facturación - Detalles";
  @Input() bill: BillModel | undefined;
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
    let phaseSge = localStorage.getItem("phase") ? localStorage.getItem("phase") : this.phaseCreate;
    if (phaseSge) {
      this.phase = phaseSge;
    }
  }

  save() {
    try {
      this.rest.postREST(environment.urlBills, this.bill).subscribe({
        next: (res: any) => {
          console.log(res);
          const id = res ? res._id : 0;
          const detail = `${this.msg.lbl_detail_el_registro}${id}${this.msg.lbl_detail_fue}${(this.phase === this.phaseCreate ? this.msg.lbl_detail_creado : this.msg.lbl_detail_actualizado)}${this.msg.lbl_detail_satisfactoriamente}`;

          this.bill = this.omi.initializerBillModel();
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
