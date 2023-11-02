import { ContactCompanyModel } from "./contact-company-model";

export interface CompanyModel {
    _id: any;
    business_name: string;
    info: ContactCompanyModel;
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