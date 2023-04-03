import { ContactoModel } from "../client/client-model";
import { EmpresaModel } from "../company/company-model";

export interface ReporteFacturaDTOModel {
    numeroFactura: any;
    empresaTB: EmpresaModel;
    contactoTB: ContactoModel;
}