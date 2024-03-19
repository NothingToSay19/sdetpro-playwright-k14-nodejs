import PermanentEmployee from "./PermanentEmployee";
import ContractEmployee from "./ContractEmployee";
import EmployeeSalaryController from "./EmployeeSalaryController";


const permanentEmployeeA = new PermanentEmployee("Huy", 1);
const permanentEmployeeB = new PermanentEmployee("Dep", 2);
const permanentEmployeeC = new PermanentEmployee("Trai", 3);
const contractEmployeeA = new ContractEmployee("Nhat", 1);
const contractEmployeeB = new ContractEmployee("Qua", 2);
const contractEmployeeC = new ContractEmployee("Dat", 3);

//const contractEmployee = new ContractEmployee("David", 1);

EmployeeSalaryController.calculateTotalSalary([permanentEmployeeA, permanentEmployeeB, permanentEmployeeC, contractEmployeeA, contractEmployeeB, contractEmployeeC]);