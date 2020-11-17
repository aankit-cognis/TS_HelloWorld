import { Department } from "./department.js";

export class ITDepartment extends Department {
  reports: string[] = [];

  constructor(location: string, reports: string[] = []) {
    super("IT Department", location);
    this.reports = reports;
  }
  addEmployee(emp: string): void {
    this.employees.push(emp);
  }
  printReports() {
    console.log("Reports - ", ...this.reports);
  }
}
