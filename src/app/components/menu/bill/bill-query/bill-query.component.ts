import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Enumerados } from 'src/app/config/Enumerados';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { BillModel } from 'src/app/model/bill/bill-model';
import { EnumItemModel } from 'src/app/model/shared/enum-item-model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bill-query',
  templateUrl: './bill-query.component.html',
  styleUrls: ['./bill-query.component.scss'],
  providers: [MessageService]
})
export class BillQueryComponent implements OnInit {
  // Data
  title: string = "Facturación";
  list: BillModel[] = [];
  showPnlEdit: boolean = false;
  filter: BillModel | undefined;
  selectedBill: any | undefined;
  selectedPhase: string | undefined;
  billTypes: any = [];
  paymentMethods: any = [];
  billStatuses: any = [];

  // Common
  msg: any;

  constructor(private textProperties: TextProperties, private rest: RestService, private enums: Enumerados, private util: Util, private omi: ObjectModelInitializer, private messageService: MessageService) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
    this.inicializar();
  }

  inicializar() {
    this.selectedPhase = environment.phaseCreate;
    localStorage.setItem("phase", environment.phaseCreate);
    this.billTypes = this.enums.getEnumerados().tipoFactura.valores;
    this.paymentMethods = this.enums.getEnumerados().metodoPago.valores;
    this.billStatuses = this.enums.getEnumerados().estadoFactura.valores;
    this.filter = this.omi.initializerBillModel();
    this.find();
  }

  toCreate() {
    this.messageService.clear();
    this.selectedBill = this.omi.initializerBillModel();
    this.selectedPhase = environment.phaseCreate;
    localStorage.setItem("phase", environment.phaseCreate);
    this.showPnlEdit = true;
  }

  toEdit(bill: BillModel) {
    this.selectedBill = bill;
    this.selectedBill.bill_type = this.billTypes.find((el: EnumItemModel) => el.value === bill.bill_type);
    this.selectedBill.payment_method = this.paymentMethods.find((el: EnumItemModel) => el.value === bill.payment_method);
    this.selectedBill.status = this.billStatuses.find((el: EnumItemModel) => el.value === bill.status);
    let clientDocument = bill.client.document_number;
    this.findClientByDocumentNumber(clientDocument);
  }

  findClientByDocumentNumber(clientDocument: string) {
    this.messageService.clear();
    try {
      this.rest.getREST(`${environment.urlClients}documents/${clientDocument}`).subscribe({
        next: (res: any) => {
          console.log(res);
          this.selectedBill.client = { label: res.name, value: res };

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

  find() {
    try {
      this.rest.getREST(environment.urlBills).subscribe({
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
      this.rest.deleteREST(environment.urlBills, id).subscribe({
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

  getSeverity(status: string) {
    let severity = "primary";
    switch (status) {
      case "ANULADA":
        severity = "info";
        break;
      case "CANCELADA":
        severity = "danger";
        break;
      case "ERROR":
        severity = "danger";
        break;
      case "PAGADA":
        severity = "success";
        break;
      case "PENDIENTE":
        severity = "warning";
        break;
      case "VENCIDA":
        severity = "info";
        break;

      default:
        break;
    }

    return severity;
  }

}