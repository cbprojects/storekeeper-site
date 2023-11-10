import { ProviderProductModel } from "../product/provider-product-model";

export interface ConceptModel {
    code: string;
    concept: string;
    description: string;
    measurement_unit: string;
    product_type: string;
    provider: ProviderProductModel;
    quantity: number;
    amount: number;
    total_amount: number;
}