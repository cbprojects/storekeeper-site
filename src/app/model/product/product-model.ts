
export interface ProductModel {
    _id: any;
    code: string;
    name: string;
    description: string;
    stock_min: number;
    stock_max: number;
    type: string;
    sale_price: number;
    price: number;
    image: string;

    // Auditoria
    create_user: string;
    update_user: string;
    create_date: any;
    update_date: any;
    _class: string;
}