import { Department } from "./department.js";
export class ITDepartment extends Department {
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
