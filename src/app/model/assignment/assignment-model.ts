import { ClientModel } from "../client/client-model";
import { EmployeeModel } from "../employee/employee-model";

export interface AssignmentModel {
    _id: any;
    employee: EmployeeModel;
    clients: ClientModel[];

    // Auditoria
    create_user: string;
    update_user: string;
    create_date: any;
    update_date: any;
    _class: any;
}