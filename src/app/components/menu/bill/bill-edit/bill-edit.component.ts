import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Enumerados } from 'src/app/config/Enumerados';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { BillModel } from 'src/app/model/bill/bill-model';
import { ProductModel } from 'src/app/model/product/product-model';
import { EnumItemModel } from 'src/app/model/shared/enum-item-model';
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
  @Input() bill: BillModel | undefined;
  @Input() phase: string | undefined;
  @Output() saveEvent = new EventEmitter<any>();
  title: string = "Facturación - Detalles";
  paymentMethods: EnumItemModel[] = [];
  paymentOptions: any[] = [];
  selectedPayment: any;
  billTypes: EnumItemModel[] = [];
  billStatuses: EnumItemModel[] = [];
  companies: EnumItemModel[] = [];
  providers: EnumItemModel[] = [];
  clients: EnumItemModel[] = [];
  products: ProductModel[] = [];
  targetProducts: ProductModel[] = [];
  showBilling: boolean = false;
  billTotal: number = 0;

  // Common
  msg: any;
  phaseCreate: string = environment.phaseCreate;

  constructor(private textProperties: TextProperties, public util: Util, private enums: Enumerados, private rest: RestService, private omi: ObjectModelInitializer, private messageService: MessageService) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
    this.inicializar();
  }

  inicializar() {
    this.billTotal = 0;
    this.showBilling = false;
    this.targetProducts = [];
    this.paymentMethods = this.enums.getEnumerados().metodoPago.valores;
    this.billTypes = this.enums.getEnumerados().tipoFactura.valores;
    this.billStatuses = this.enums.getEnumerados().estadoFactura.valores;
    this.paymentOptions = [];
    this.paymentOptions.push({ icon: 'pi pi-money-bill', name: "Efectivo", value: "EFECTIVO" });
    this.paymentOptions.push({ icon: 'pi pi-credit-card', name: "Débito", value: "TARJETA_DEBITO" });
    this.paymentOptions.push({ icon: 'pi pi-credit-card', name: "Crédito", value: "TARJETA_CREDITO" });
    this.findCompanies();
    this.findProviders();
    this.findClients();
    this.findProducts();
  }

  save() {
    try {
      this.calculateBill();
      if (this.bill) {
        this.bill.bill_date = new Date();
        this.bill.payment_method = this.selectedPayment.value;
        let status: any = this.bill.status;
        this.bill.status = status.value;
        let billProvider: any = this.bill.provider;
        this.bill.provider = this.omi.initializerProviderBillModelByParams(billProvider.value.name, billProvider.value.document_number, billProvider.value.document_type);
        let billClient: any = this.bill.client;
        this.bill.client = this.omi.initializerClientBillModelByParams(billClient.value.name, billClient.value.document_number, billClient.value.document_type);
        this.bill.company = this.omi.initializerCompanyBillModel();
        let type: any = this.bill.bill_type;
        this.bill.bill_type = type.value;
      }
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

  findCompanies() {
    try {
      this.rest.getREST(environment.urlCompanies).subscribe({
        next: (res: any) => {
          console.log(res);
          this.companies = [];
          let enumEmpty = { value: "-1", label: this.msg.lbl_enum_generico_valor_vacio };
          this.companies.push(enumEmpty);
          res.result.forEach((company: { business_name: any; }) => {
            let enumcompany = { value: company, label: company.business_name };
            this.companies.push(enumcompany);
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

  findClients() {
    try {
      this.rest.getREST(environment.urlClients).subscribe({
        next: (res: any) => {
          console.log(res);
          this.clients = [];
          let enumEmpty = { value: "-1", label: this.msg.lbl_enum_generico_valor_vacio };
          this.clients.push(enumEmpty);
          res.result.forEach((client: { name: any; }) => {
            let enumClient = { value: client, label: client.name };
            this.clients.push(enumClient);
          });
        },
        error: (e) => this.util.showErrorMessage(e, this.msg.lbl_summary_warning, environment.severity[2])
      });
    } catch (error) {
      console.log(error);
      this.util.showErrorMessage(error, this.msg.lbl_summary_danger, environment.severity[3])
    }
  }

  findProducts() {
    try {
      this.rest.getREST(environment.urlProducts).subscribe({
        next: (res: any) => {
          console.log(res);
          this.products = res.result;
        },
        error: (e) => this.util.showErrorMessage(e, this.msg.lbl_summary_warning, environment.severity[2])
      });
    } catch (error) {
      console.log(error);
      this.util.showErrorMessage(error, this.msg.lbl_summary_danger, environment.severity[3])
    }
  }

  seeBill() {
    this.showBilling = true;
    if (this.bill) {
      this.bill.concepts = [];
      let i = 1;
      this.targetProducts.forEach(product => {
        let concept = this.omi.initializerConceptBillModelByProduct(product, i);
        this.bill?.concepts.push(concept);
        i++;
      });
    }
    this.calculateBill();
  }

  calculateBill() {
    if (this.bill) {
      this.billTotal = 0;
      this.bill.concepts.forEach(concept => {
        concept.total_amount = concept.amount * concept.quantity;
        this.billTotal = this.billTotal + concept.total_amount;
      });
    }
  }

  print() {

  }

}