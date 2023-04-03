import { ContactCompanyModel } from "./contact-company-model";

export interface CompanyModel {
    _id: any;
    business_name: string;
    info: ContactCompanyModel;
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