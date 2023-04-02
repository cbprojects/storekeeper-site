import { ContactoModel } from "../client/contacto-model";
import { EmpresaModel } from "../company/empresa-model";

export interface ReporteFacturaDTOModel {
    numeroFactura: any;
    empresaTB: EmpresaModel;
    contactoTB: ContactoModel;
}