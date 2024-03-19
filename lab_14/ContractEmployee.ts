import Employee from "./Employee";
import {EmployeeSalary} from "./EmployeeSalary";

export default class ContractEmployee extends Employee {

    constructor(employeeName: string, employeeLevel: number) {
        super(employeeName, employeeLevel);
        this.contractEmployeeSalary = EmployeeSalary.ContractEmployeeSalary;
    }

    getContractEmployeeSalary(): number {
        switch (this.employeeLevel) {
            case 1:
                this.contractEmployeeSalary = EmployeeSalary.ContractEmployeeSalary;
                break;
            case 2:
                this.contractEmployeeSalary = EmployeeSalary.ContractEmployeeSalary * 2;
                break;
            case 3:
                this.contractEmployeeSalary = EmployeeSalary.ContractEmployeeSalary * 3;
                break;
            default:
                console.log("Your employee level must in range from [1-3]!");
        }
        return this.contractEmployeeSalary;
    }

    getEmployeeName(): string {
        return super.getEmployeeName();
    }
}