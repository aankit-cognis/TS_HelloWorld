class Department {
  static fiscalYear: number = 2018;
  private employees: string[] = [];

  private static _instance: Department;

  private constructor(
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

  static getInstance() {
    if (this._instance) {
      return this._instance;
    } else {
      this._instance = new Department("Accounts", "Kolkata");
      return this._instance;
    }
  }
}

let dep = Department.getInstance();
dep.addEmployee("John");
dep.addEmployee("Smith");
dep.addEmployee("Mike");

let dep2 = Department.getInstance();
dep2.addEmployee("Emmp21");
console.log(dep2);
console.log(dep);
