import { ContactoModel } from "../client/client-model";

export interface RequestContactoEMailDTOModel {
    desde: any;
    destinatarios: ContactoModel[];
    asunto: any;
}