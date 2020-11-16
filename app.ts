class Department {
  private employees: string[] = [];

  constructor(private readonly departmentName: string, public age?: number) {}

  describe(this: Department) {
    console.log("The department name is " + this.departmentName);
  }

  addEmployee(emp: string) {
    //this.departmentName = "New Department Name";
    this.employees.push(emp);
  }

  printEmployeeInformation() {
    console.log("Total No of Employees - ", this.employees.length);
    console.log("Employyes - ", ...this.employees);
  }
}
let accounts = new Department("Computer Science", 89);
accounts.describe();
accounts.printEmployeeInformation();
accounts.describe();

//accounts.employees.push("Swagat", "Rahul");
accounts.addEmployee("Swagat");
accounts.addEmployee("Rahul");
accounts.printEmployeeInformation();
