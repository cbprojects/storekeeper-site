import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Enumerados } from 'src/app/config/Enumerados';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { AssignmentModel } from 'src/app/model/assignment/assignment-model';
import { ClientModel } from 'src/app/model/client/client-model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-assignment-edit',
  templateUrl: './assignment-edit.component.html',
  styleUrls: ['./assignment-edit.component.scss'],
  providers: [MessageService]
})
export class AssignmentEditComponent implements OnInit {
  // Data
  @Input() assignment: AssignmentModel | undefined;
  @Input() phase: string | undefined;
  @Output() saveEvent = new EventEmitter<any>();
  documentTypes: any = [];
  clients: ClientModel[] = [];

  // Common
  msg: any;
  phaseCreate: string = environment.phaseCreate;

  constructor(private textProperties: TextProperties, private enums: Enumerados, public util: Util, private rest: RestService, private omi: ObjectModelInitializer, private messageService: MessageService) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
    this.inicializar();
  }

  inicializar() {
    this.findClients();
    this.documentTypes = this.enums.getEnumerados().tipoDocumento.valores;
  }

  save() {
    try {
      this.rest.postREST(environment.urlAssignments, this.assignment).subscribe({
        next: (res: any) => {
          console.log(res);
          const id = res ? res._id : 0;
          const detail = `${this.msg.lbl_detail_el_registro}${id}${this.msg.lbl_detail_fue}${(this.phase === environment.phaseCreate ? this.msg.lbl_detail_creado : this.msg.lbl_detail_actualizado)}${this.msg.lbl_detail_satisfactoriamente}`;

          this.assignment = this.omi.initializerAssignmentModel();
          this.saveEvent.emit(this.util.showMessage(this.msg.lbl_summary_success, detail, environment.severity[1]));
        },
        error: (e) => this.messageService.add(this.util.showErrorMessage(e, this.msg.lbl_summary_warning, environment.severity[2]))
      });
    } catch (error) {
      console.log(error);
      this.messageService.add(this.util.showErrorMessage(error, this.msg.lbl_summary_danger, environment.severity[3]))
    }
  }

  findClients() {
    try {
      this.rest.getREST(environment.urlClients).subscribe({
        next: (res: any) => {
          console.log(res);
          this.clients = res.result;
        },
        error: (e) => this.util.showErrorMessage(e, this.msg.lbl_summary_warning, environment.severity[2])
      });
    } catch (error) {
      console.log(error);
      this.util.showErrorMessage(error, this.msg.lbl_summary_danger, environment.severity[3])
    }
  }

}