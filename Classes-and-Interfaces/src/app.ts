abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return {name: name};
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.id = '2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

const employee1 = Department.createEmployee('Viktor');
console.log(employee1, Department.fiscalYear);

const itDepartment = new ITDepartment('d1', ['Viktor']);

itDepartment.addEmployee('Viktor');
itDepartment.addEmployee('Vita');

// itDepartment.employees[2] = 'Ann';

itDepartment.describe();
itDepartment.printEmployeeInformation();

// const accountingDeptCopy = {name: 'Teaching', describe: itDepartment.describe};

// accountingDeptCopy.describe();

console.log(itDepartment);

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please enter a valid value');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if(AccountingDepartment.instance) {
      return AccountingDepartment.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Viktor') return;

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accountingDept = new AccountingDepartment('d2', []);
const accountingDept = AccountingDepartment.getInstance();
const accountingDept2 = AccountingDepartment.getInstance();
console.log(accountingDept, accountingDept2);

accountingDept.mostRecentReport = 'Annual Report';
accountingDept.addReport('Report 1');
console.log(accountingDept.mostRecentReport);

accountingDept.addEmployee('Viktor');
accountingDept.addEmployee('Oleh');

// accountingDept.printReports();
// accountingDept.printEmployeeInformation();
accountingDept.describe();
