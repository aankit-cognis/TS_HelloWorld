export class Department {
    constructor(departmentName, address = "Delhi") {
        this.departmentName = departmentName;
        this.address = address;
        this.employees = [];
    }
    describe() {
        console.log("The department name is " + this.departmentName);
        console.log("The department Address is " + this.address);
    }
}
Department.fiscalYear = 2020;
