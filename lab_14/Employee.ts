import {EmployeeSalary} from "./EmployeeSalary";

export default class Employee {

    protected employeeName: string;
    protected employeeLevel: number;
    protected contractEmployeeSalary: number = 0;
    protected permanentEmployeeSalary: number = 0;

    constructor(employeeName: string, employeeLevel: number) {
        this.employeeName = employeeName;
        this.employeeLevel = employeeLevel;
    }

    getContractEmployeeSalary(){
        return this.contractEmployeeSalary;
    }

    getPermanentEmployeeSalary(){
        return this.permanentEmployeeSalary;
    }

    getEmployeeName(): string{
        return this.employeeName;
    }

}