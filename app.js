class Department {
    constructor(departmentName, age) {
        this.departmentName = departmentName;
        this.age = age;
        this.employees = [];
    }
    describe() {
        console.log("The department name is " + this.departmentName);
    }
    addEmployee(emp) {
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
