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
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        else {
            this._instance = new Department("Accounts", "Kolkata");
            return this._instance;
        }
    }
}
Department.fiscalYear = 2018;
let dep = Department.getInstance();
dep.addEmployee("John");
dep.addEmployee("Smith");
dep.addEmployee("Mike");
let dep2 = Department.getInstance();
dep2.addEmployee("Emmp21");
console.log(dep2);
console.log(dep);
