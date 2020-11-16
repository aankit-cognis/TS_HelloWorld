class Department {
  private employees: string[] = [];
  constructor(
    private readonly departmentName: string,
    public address?: string
  ) {}
  describe(this: Department) {
    console.log("The department name is " + this.departmentName);
  }
  addEmployee(emp: string) {
    this.employees.push(emp);
  }
  printEmployeeInformation() {
    console.log("Total No of Employees - ", this.employees.length);
    console.log("Employyes - ", ...this.employees);
  }
}

class ITDepartment extends Department {
  constructor(address: string, private reports: string[] = []) {
    super("IT Department", address);
  }
  addReports(report: string) {
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
