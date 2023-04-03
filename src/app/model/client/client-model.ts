import { ContactClientModel } from "./contact-client-model";

export interface ClientModel {
    _id: any;
    code: string;
    info: ContactClientModel;
    documentNumber: string;
    documentType: string;
    image: string;

    // Auditoria
    create_user: string;
    update_user: string;
    create_date: any;
    update_date: any;
    _class: string;
}