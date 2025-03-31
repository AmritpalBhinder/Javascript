// wap to create a class for employee with attributes like id ,name,salary and role, set all attributes
// and get for atleast 3 objects/employee.

class employee {
    
    person(name,id,salary,role){
        document.writeln("Name:"+ name+"<br>");
        document.writeln("Id:"+ id+"<br>");
        document.writeln("Salary:"+ salary+"<br>");
        document.writeln("Role:"+ role+"<br>");
    }
}

const emp1 = new employee();
const emp2 = new employee();
const emp3 = new employee();

document.writeln("<h2>First-Employee:</h2>")
emp1.person("Mahesh","1","₹50000","Manager")

document.writeln("<h2>Second-Employee:</h2>")
emp2.person("Suman","5","₹39000","Advertiser")

document.writeln("<h2>Third-Employee:</h2>")
emp3.person("Rohan","8","₹40000","Marketer")