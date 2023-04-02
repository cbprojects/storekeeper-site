import { ContactoModel } from "../client/contacto-model";

export interface RequestContactoEMailDTOModel {
    desde: any;
    destinatarios: ContactoModel[];
    asunto: any;
}