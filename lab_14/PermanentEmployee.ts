import Employee from "./Employee";
import {EmployeeSalary} from "./EmployeeSalary";

export default class PermanentEmployee extends Employee {

    constructor(employeeName: string, employeeLevel: number) {
        super(employeeName, employeeLevel);
        this.permanentEmployeeSalary = EmployeeSalary.PermanentEmployeeSalary;
    }

    getPermanentEmployeeSalary(): number {
        switch (this.employeeLevel) {
            case 1:
                this.permanentEmployeeSalary = EmployeeSalary.PermanentEmployeeSalary;
                break;
            case 2:
                this.permanentEmployeeSalary = EmployeeSalary.PermanentEmployeeSalary * 2;
                break;
            case 3:
                this.permanentEmployeeSalary = EmployeeSalary.PermanentEmployeeSalary * 3;
                break;
            default:
                console.log("Your employee level must in range from [1-3]!");
        }
        return this.permanentEmployeeSalary;
    }

    getEmployeeName(): string {
        return super.getEmployeeName();
    }
}