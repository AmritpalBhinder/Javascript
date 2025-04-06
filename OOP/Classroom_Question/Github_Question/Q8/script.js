// Create an Employee class with properties name and position.
// Create a Department class that contains an array of Employee objects.
// Implement a method in Department to return the names of all employees in that department.

class Employee{

    constructor(name,position){
        this.name = name;
        this.position = position;
    }
}

class Department{
    constructor(employeeName){
        this.employeeName = employeeName;
        this.employees = [];
    }

    addEmployee(Employee){
        this.employees.push(this.employee);
    }

    getEmployeeNames(){
        return this.employees.map(emp => emp.name);
    }
}

const emp1 = new Employee("Amritpal","Manager");
const emp2 = new Employee("John","Developer");
const emp3 = new Employee("Mitchell","Labour");

document.writeln("Employees in Sales Department:".SalesDepartment.getEmployeeNames());

const SalesDepartment = new Department("Sales");
SalesDepartment.addEmployee(emp1);
SalesDepartment.addEmployee(emp2);
SalesDepartment.addEmployee(emp3);

// document.writeln("Employees in Sales Department:".SalesDepartment.getEmployeeNames());