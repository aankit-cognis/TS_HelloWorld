// abstract class Department {
//   protected employees: string[] = [];
//   constructor(
//     public departmentName: string,
//     private address: string = "Delhi"
//   ) {}

//   describe(this: Department) {
//     console.log("The department name is " + this.departmentName);
//     console.log("The department Address is " + this.address);
//   }

//   abstract addEmployee(emp: string): void;

//   printEmployeeInformation() {
//     console.log("Total No of Employees - ", this.employees.length);
//     console.log("Employyes - ", ...this.employees);
//   }
// }

// //IT Department , Accounts Department.
// class ITDepartment extends Department {
//   reports: string[] = [];

//   constructor(location: string, reports: string[] = []) {
//     super("IT Department", location);
//     this.reports = reports;
//   }
//   addEmployee(emp: string): void {
//     this.employees.push(emp);
//   }
//   printReports() {
//     console.log("Reports - ", ...this.reports);
//   }
// }

// class AccountsDepartment extends Department {
//   constructor() {
//     super("ACC DEP", "MP");
//   }
//   addEmployee(emp: string): void {
//     this.employees.push("ACC-" + emp);
//   }
// }

// // let dep = new Department();

// let acc = new AccountsDepartment();
// acc.addEmployee("Swagat");
// acc.printEmployeeInformation();

// let it = new ITDepartment("Bhubaneswar", [
//   "Monthly Reports",
//   "Standard Report",
// ]);
// it.addEmployee("Swagat");
// it.printEmployeeInformation();
