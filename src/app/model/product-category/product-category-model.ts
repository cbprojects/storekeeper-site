
export interface ProductCategoryModel {
    _id: any;
    code: string;
    name: string;
    description: string;
    color: string;
    image: string;

    // Auditoria
    create_user: string;
    update_user: string;
    create_date: any;
    update_date: any;
    _class: string;
}