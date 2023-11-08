export interface EmployeeModel {
    _id: any;
    name: string;
    document_number: string;
    document_type: string;
    image: string;
    hire_date: any;

    // Auditoria
    create_user: string;
    update_user: string;
    create_date: any;
    update_date: any;
    _class: any;
}