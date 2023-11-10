import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Enumerados } from 'src/app/config/Enumerados';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { AssignmentModel } from 'src/app/model/assignment/assignment-model';
import { EmployeeModel } from 'src/app/model/employee/employee-model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-assignment-query',
  templateUrl: './assignment-query.component.html',
  styleUrls: ['./assignment-query.component.scss'],
  providers: [MessageService]
})
export class AssignmentQueryComponent implements OnInit {
  // Data
  title: string = "Empleados para asignación";
  list: EmployeeModel[] = [];
  showPnlEdit: boolean = false;
  filter: AssignmentModel | undefined;
  selectedAssignment: AssignmentModel | undefined;
  selectedPhase: string | undefined;
  documentTypes: any = [];

  // Common
  msg: any;

  constructor(private textProperties: TextProperties, private enums: Enumerados, private rest: RestService, public util: Util, private omi: ObjectModelInitializer, private messageService: MessageService) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
    this.inicializar();
  }

  inicializar() {
    this.selectedPhase = environment.phaseCreate;
    localStorage.setItem("phase", environment.phaseCreate);
    this.documentTypes = this.enums.getEnumerados().tipoDocumento.valores;
    this.filter = this.omi.initializerAssignmentModel();
    this.findEmployees();
  }

  toEdit(employee: EmployeeModel) {
    this.messageService.clear();
    try {
      this.rest.getREST(`${environment.urlAssignments}employees/${employee._id}`).subscribe({
        next: (res: any) => {
          console.log(res);
          if (res != null) {
            this.selectedAssignment = res;
          } else {
            this.selectedAssignment = this.omi.initializerAssignmentModel();
            this.selectedAssignment.employee = employee;
          }
          this.selectedPhase = environment.phaseEdit;
          localStorage.setItem("phase", environment.phaseEdit);
          this.showPnlEdit = true;
        },
        error: (e) => this.util.showErrorMessage(e, this.msg.lbl_summary_warning, environment.severity[2])
      });
    } catch (error) {
      console.log(error);
      this.util.showErrorMessage(error, this.msg.lbl_summary_danger, environment.severity[3])
    }
  }

  findEmployees() {
    try {
      this.rest.getREST(environment.urlEmployees).subscribe({
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
    this.findEmployees();
    this.showPnlEdit = false;
  }

}