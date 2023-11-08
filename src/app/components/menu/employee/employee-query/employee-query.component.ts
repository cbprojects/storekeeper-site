import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Enumerados } from 'src/app/config/Enumerados';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { EmployeeModel } from 'src/app/model/employee/employee-model';
import { EnumItemModel } from 'src/app/model/shared/enum-item-model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-query',
  templateUrl: './employee-query.component.html',
  styleUrls: ['./employee-query.component.scss'],
  providers: [MessageService]
})
export class EmployeeQueryComponent implements OnInit {
  // Data
  title: string = "Employeees";
  list: EmployeeModel[] = [];
  showPnlEdit: boolean = false;
  filter: EmployeeModel | undefined;
  selectedEmployee: EmployeeModel | undefined;
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
    this.filter = this.omi.initializerEmployeeModel();
    this.find();
  }

  toCreate() {
    this.messageService.clear();
    this.selectedEmployee = this.omi.initializerEmployeeModel();
    this.selectedPhase = environment.phaseCreate;
    localStorage.setItem("phase", environment.phaseCreate);
    this.showPnlEdit = true;
  }

  toEdit(employee: EmployeeModel) {
    this.messageService.clear();
    this.selectedEmployee = employee;
    this.selectedEmployee.document_type = this.documentTypes.find((el: EnumItemModel) => el.value === employee.document_type);
    this.selectedEmployee.hire_date = new Date(this.selectedEmployee.hire_date);
    this.selectedPhase = environment.phaseEdit;
    localStorage.setItem("phase", environment.phaseEdit);
    this.showPnlEdit = true;
  }

  find() {
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
    this.find();
    this.showPnlEdit = false;
  }

  deleteRow(id: string) {
    this.messageService.clear();
    try {
      this.rest.deleteREST(environment.urlEmployees, id).subscribe({
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