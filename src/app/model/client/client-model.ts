import { ContactClientModel } from "./contact-client-model";

export interface ClientModel {
    _id: any;
    name: string;
    info: ContactClientModel;
    document_number: string;
    document_type: string;
    image: string;

    // Auditoria
    create_user: string;
    update_user: string;
    create_date: any;
    update_date: any;
    _class: string;
}