// class Department {
//   static fiscalYear: number = 2018;
//   private employees: string[] = [];
//   constructor(
//     public departmentName: string,
//     private address: string = "Delhi"
//   ) {}
//   describe(this: Department) {
//     console.log("The department name is " + this.departmentName);
//     console.log("The department Address is " + this.address);
//     console.log("Fiscal Year -", Department.fiscalYear);
//   }
//   addEmployee(emp: string) {
//     this.employees.push(emp);
//   }
//   printEmployeeInformation() {
//     console.log("Total No of Employees - ", this.employees.length);
//     console.log("Employyes - ", ...this.employees);
//   }
//   static updateFiscalYear() {
//     this.fiscalYear++;
//   }
// }
// //console.log(Math.PI);
// console.log(Department.fiscalYear);
// Department.updateFiscalYear();
// Department.updateFiscalYear();
// Department.updateFiscalYear();
// Department.updateFiscalYear();
// console.log(Department.fiscalYear);
// // let dep1 = new Department("IT", "Kolkata");
// // dep1.describe();
// // let dep2 = new Department("Accounts", "Bihar");
// // dep2.describe();
// // Department.fiscalYear = 2020;
// // dep1.describe();
// // dep2.describe();
