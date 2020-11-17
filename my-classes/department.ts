export class Department {
  static fiscalYear: number = 2020;
  protected employees: string[] = [];

  constructor(
    public readonly departmentName: string,
    public address: string = "Delhi"
  ) {}

  describe() {
    console.log("The department name is " + this.departmentName);
    console.log("The department Address is " + this.address);
  }
}
