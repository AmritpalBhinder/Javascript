// create a class named student with private attributes roll_no,name,age,std and percentage, initialize
// all attributes by parameterized constructor(private attributes need to declare in global scope in class)
// and print all details for 3 students.

class Student{
    #roll_no;
    #name;
    #age;
    #std;
    #percentage;

    Student_Info(roll_no,name,age,std,percentage)
    {
        this.#roll_no=roll_no;
        this.#name=name;
        this.#age=age;
        this.#std=std;
        this.#percentage=percentage;
    }

    display(){
        document.writeln("Roll No:"+this.#roll_no+"<br>");
        document.writeln("Name:"+this.#name+"<br>");
        document.writeln("Age:"+this.#age+"<br>");
        document.writeln("Standard:"+this.#std+"<br>");
        document.writeln("Percentage:"+this.#percentage+"<br>");
    }
}

const p1 = new Student();
const p2 = new Student();
const p3 = new Student();

document.writeln("<h2>First-Student</h2>")
p1.Student_Info("22","Hritik","10","5th std","54.22%")
p1.display();

document.writeln("<h2>Second-Student</h2>")
p2.Student_Info("17","Kunal","13","8th std","64.92%")
p2.display();

document.writeln("<h2>Third-Student</h2>")
p3.Student_Info("5","Nidhi","14","9th std","88.92%")
p3.display();