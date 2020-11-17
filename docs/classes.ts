// abstract class Department {
//   static fiscalYear: number = 2020;
//   protected employees: string[] = [];

//   constructor(
//     public readonly departmentName: string,
//     public departmentAddress: string = "Delhi"
//   ) {}

//   static printFiscalYear() {
//     console.log("The fiscal year is ", this.fiscalYear);
//   }
//   abstract describe();

//   addEmployee(name: string) {
//     //Validation Logic goes
//     this.employees.push(name);
//   }

//   printEmployeeInformation() {
//     console.log("Total No of Employees - ", this.employees.length);
//     console.log(...this.employees);
//   }
// }
// class ITDepartment extends Department {
//   describe() {
//     console.log("Inside Describe of IT Department");
//   }
//   constructor(address: string, private reports: string[] = []) {
//     super("IT Department", address);
//   }
//   addReports(report: string) {
//     this.reports.push(report);
//   }
// }
// class AccountingDepartment extends Department {
//   private static _instance: AccountingDepartment;

//   describe() {
//     console.log("Inside Department Class Name - ", this.departmentName);
//     console.log("Inside Department Class Address - ", this.departmentAddress);
//   }
//   private constructor(location: string) {
//     super("Accounting Department", location);
//   }

//   static getInstance() {
//     if (this._instance) {
//       return this._instance;
//     } else {
//       this._instance = new AccountingDepartment("Kolkata");
//       return this._instance;
//     }
//   }
// }

// let dep = AccountingDepartment.getInstance();
// dep.describe();
// dep.addEmployee("MAX");
// dep.printEmployeeInformation();
// let dep2 = AccountingDepartment.getInstance();
// dep2.describe();
// dep2.printEmployeeInformation();
