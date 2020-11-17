class Department {
  static fiscalYear: number = 2018;
  private employees: string[] = [];
  constructor(
    public departmentName: string,
    private address: string = "Delhi"
  ) {}

  describe(this: Department) {
    console.log("The department name is " + this.departmentName);
    console.log("The department Address is " + this.address);
    console.log("Fiscal Year -", Department.fiscalYear);
  }

  addEmployee(emp: string) {
    this.employees.push(emp);
  }

  printEmployeeInformation() {
    console.log("Total No of Employees - ", this.employees.length);
    console.log("Employyes - ", ...this.employees);
  }
}
