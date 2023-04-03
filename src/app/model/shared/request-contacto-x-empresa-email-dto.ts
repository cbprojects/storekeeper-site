import { ContactoModel } from "../client/client-model";
import { EmpresaModel } from "../company/company-model";

export interface RequestContactoXEmpresaEMailDTOModel {
    desde: any;
    empresa: EmpresaModel;
    destinatarios: ContactoModel[];
    asunto: any;
    template: any;
}