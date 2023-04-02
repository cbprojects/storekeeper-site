import { ContactoModel } from "../client/contacto-model";
import { EmpresaModel } from "../company/empresa-model";

export interface RequestContactoXEmpresaEMailDTOModel {
    desde: any;
    empresa: EmpresaModel;
    destinatarios: ContactoModel[];
    asunto: any;
    template: any;
}