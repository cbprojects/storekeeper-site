import { ContactProviderModel } from "./contact-provider-model";

export interface ProviderModel {
    _id: any;
    code: string;
    info: ContactProviderModel;
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