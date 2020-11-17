class Department {
    constructor(departmentName, address = "Delhi") {
        this.departmentName = departmentName;
        this.address = address;
        this.employees = [];
    }
    describe() {
        console.log("The department name is " + this.departmentName);
        console.log("The department Address is " + this.address);
        console.log("Fiscal Year -", Department.fiscalYear);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printEmployeeInformation() {
        console.log("Total No of Employees - ", this.employees.length);
        console.log("Employyes - ", ...this.employees);
    }
}
Department.fiscalYear = 2018;
