import { ProductCategoryModel } from "../product-category/product-category-model";
import { ProviderProductModel } from "./provider-product-model";

export interface ProductModel {
    _id: any;
    code: string;
    name: string;
    description: string;
    category: ProductCategoryModel;
    provider: ProviderProductModel;
    stock: number;
    stock_min: number;
    stock_max: number;
    unit: string;
    type: string;
    sale_price: number;
    price: number;
    image: string;

    // Auditoria
    create_user: string;
    update_user: string;
    create_date: any;
    update_date: any;
    _class: any;
}