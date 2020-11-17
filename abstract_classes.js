class Department {
    constructor(departmentName, address = "Delhi") {
        this.departmentName = departmentName;
        this.address = address;
        this.employees = [];
    }
    describe() {
        console.log("The department name is " + this.departmentName);
        console.log("The department Address is " + this.address);
    }
    printEmployeeInformation() {
        console.log("Total No of Employees - ", this.employees.length);
        console.log("Employyes - ", ...this.employees);
    }
}
//IT Department , Accounts Department.
class ITDepartment extends Department {
    constructor(location, reports = []) {
        super("IT Department", location);
        this.reports = [];
        this.reports = reports;
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printReports() {
        console.log("Reports - ", ...this.reports);
    }
}
class AccountsDepartment extends Department {
    constructor() {
        super("ACC DEP", "MP");
    }
    addEmployee(emp) {
        this.employees.push("ACC-" + emp);
    }
}
// let dep = new Department();
let acc = new AccountsDepartment();
acc.addEmployee("Swagat");
acc.printEmployeeInformation();
let it = new ITDepartment("Bhubaneswar", [
    "Monthly Reports",
    "Standard Report",
]);
it.addEmployee("Swagat");
it.printEmployeeInformation();
