import { ContactProviderModel } from "./contact-provider-model";

export interface ProviderModel {
    _id: any;
    name: string;
    info: ContactProviderModel;
    document_number: string;
    document_type: string;
    image: string;

    // Auditoria
    create_user: string;
    update_user: string;
    create_date: any;
    update_date: any;
    _class: any;
}