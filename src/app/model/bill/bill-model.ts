import { ClientBillModel } from "./client-bill-model";
import { CompanyBillModel } from "./company-bill-model";
import { ConceptModel } from "./concept-model";
import { ProviderBillModel } from "./provider-bill-model";
import { TaxModel } from "./tax-model";

export interface BillModel {
    _id: any;
    bill_id: number;
    status: string;
    description: string;
    city: string;
    address: string;
    concepts: ConceptModel[];
    taxes: TaxModel[];
    bill_type: string;
    payment_method: string;
    bill_date: any;
    expiry_date: any;
    company: CompanyBillModel;
    provider: ProviderBillModel;
    client: ClientBillModel;

    // Auditoria
    create_user: string;
    update_user: string;
    create_date: any;
    update_date: any;
    _class: any;
}