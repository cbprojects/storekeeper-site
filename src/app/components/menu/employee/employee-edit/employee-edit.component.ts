import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Enumerados } from 'src/app/config/Enumerados';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { EmployeeModel } from 'src/app/model/employee/employee-model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss'],
  providers: [MessageService]
})
export class EmployeeEditComponent implements OnInit {
  // Data
  @Input() employee: EmployeeModel | undefined;
  @Input() phase: string | undefined;
  @Output() saveEvent = new EventEmitter<any>();
  documentTypes: any = [];

  // Common
  msg: any;
  phaseCreate: string = environment.phaseCreate;
  maxDate: any = environment.actualDate;

  constructor(private textProperties: TextProperties, private enums: Enumerados, private util: Util, private rest: RestService, private omi: ObjectModelInitializer, private messageService: MessageService) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
    this.inicializar();
  }

  inicializar() {
    this.documentTypes = this.enums.getEnumerados().tipoDocumento.valores;
  }

  save() {
    try {
      if (this.employee) {
        let documentType: any = this.employee.document_type;
        this.employee.document_type = documentType.value;
      }
      this.rest.postREST(environment.urlEmployees, this.employee).subscribe({
        next: (res: any) => {
          console.log(res);
          const id = res ? res._id : 0;
          const detail = `${this.msg.lbl_detail_el_registro}${id}${this.msg.lbl_detail_fue}${(this.phase === environment.phaseCreate ? this.msg.lbl_detail_creado : this.msg.lbl_detail_actualizado)}${this.msg.lbl_detail_satisfactoriamente}`;

          this.employee = this.omi.initializerEmployeeModel();
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