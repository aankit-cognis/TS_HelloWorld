class Department {
    constructor(departmentName, address) {
        this.departmentName = departmentName;
        this.address = address;
        this.employees = [];
    }
    describe() {
        console.log("The department name is " + this.departmentName);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printEmployeeInformation() {
        console.log("Total No of Employees - ", this.employees.length);
        console.log("Employyes - ", ...this.employees);
    }
}
class ITDepartment extends Department {
    constructor(address, reports = []) {
        super("IT Department", address);
        this.reports = reports;
    }
    addReports(report) {
        this.reports.push(report);
    }
}
let itDepartment = new ITDepartment("Kolkata");
itDepartment.describe();
itDepartment.addEmployee("Rahul");
itDepartment.addEmployee("Rohit");
//itDepartment.reports.push("Custom Report");
itDepartment.addReports("Custom Report");
itDepartment.addReports("Monthly Report");
itDepartment.printEmployeeInformation();
console.log("IT DEPARTMENT-", itDepartment);
