import Employee from "./Employee";

let totalEmployeeSalary: number = 0;
let employeeNameArray: any = [];
const salaryArray: any = [];
let highestSalary: number = 0;
let lowestSalary: number = 0;
let highestIndex = 0;
let lowestIndex = 0;
let highestSalaryEmployeeName: string;
let lowestSalaryEmployeeName: string;
const sortingSalary: any = salaryArray;
const sortingName: any = employeeNameArray;

export default class EmployeeSalaryController {
    static calculateTotalSalary(employeeList: Employee []) {
        employeeList.forEach(employee => {
            this.calTotalEmployeeSalary(employee);
            this.getListOfSalary(employee);
            this.getListOfEmployeeName(employee);
        });
        this.getTheHighestSalary(salaryArray);
        this.getTheLowestSalary(salaryArray);
        this.getTheHighestEmployeeSalary(employeeNameArray);
        this.getTheLowestEmployeeSalary(employeeNameArray);
        this.sortingEmployeeSalary();
        this.sortingEmployeeName();
        this.logResult();
        // highestSalary = Math.max(...salaryArray);
        // console.log(highestSalary);
        //
        // lowestSalary = Math.min(...salaryArray);
        // console.log(lowestSalary);
    }

    static calTotalEmployeeSalary(employee: Employee): number {
        return totalEmployeeSalary += (employee.getPermanentEmployeeSalary() + employee.getContractEmployeeSalary())
    }

    static getListOfSalary(employee: Employee): any {
        salaryArray.push(employee.getPermanentEmployeeSalary(), employee.getContractEmployeeSalary());
        for (let i = 0; i < salaryArray.length; i++) {
            const index = salaryArray.indexOf(0);
            if(index > -1) {
                salaryArray.splice(index, 1);
            }
        }
        return salaryArray;
    }

    static getListOfEmployeeName(employee: Employee): any {
        return employeeNameArray.push(employee.getEmployeeName());
    }

    static getTheHighestSalary(salaryArray: any): number {
        //Finding the highest salary employee
        for (let i = 0; i < salaryArray.length; i++) {
            if(salaryArray[i] >= highestSalary){
                highestSalary = salaryArray[i];
                highestIndex = i;
            }
        }
        return highestSalary;
    }

    static getTheLowestSalary(salaryArray: any): number {
        //Finding the lowest salary employee
        for (let i = 0; i < salaryArray.length; i++) {
            for(let j = 0; i < salaryArray.length; i++){
                if(salaryArray[i] <= salaryArray[j]){
                    lowestSalary = salaryArray[i];
                    lowestIndex = i;
                }
            }
        }
        return lowestSalary;
    }

    static getTheHighestEmployeeSalary(employeeNameArray: any): string {
        for(let i = 0; i < employeeNameArray.length; i++) {
            if (i === highestIndex) {
                highestSalaryEmployeeName = employeeNameArray[i];
            }
        }
        return highestSalaryEmployeeName;
    }

    static getTheLowestEmployeeSalary(employeeNameArray: any): string {
        for(let i = 0; i < employeeNameArray.length; i++) {
            if (i === lowestIndex) {
                lowestSalaryEmployeeName = employeeNameArray[i];
            }
        }
        return lowestSalaryEmployeeName;
    }

    static sortingEmployeeSalary(){
        return sortingSalary.sort((n1: number, n2: number) => n1 - n2 );
    }

    static sortingEmployeeName(){
        return sortingName.sort();
    }

    static logResult(): void {
        console.log(`Total employee salary is: ${totalEmployeeSalary}`);
        console.log(`The highest employee salary is: ${highestSalary}`);
        console.log(`The lowest employee salary is: ${lowestSalary}`);
        console.log(`Employee "${highestSalaryEmployeeName}" with the highest salary is ${highestSalary}`);
        console.log(`Employee "${lowestSalaryEmployeeName}" with the lowest salary is ${lowestSalary}`);
        console.log(`Employee salary after sorted: ${sortingSalary}`)
        console.log(`Employee name after sorted: ${sortingName}`)
    }
}