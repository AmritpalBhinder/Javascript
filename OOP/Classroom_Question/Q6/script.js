// wap to perform method overriding to display student details.
// school(name,year) -> student(name,std,school,year)
// display() <- override this method

class School{

    #name;
    #year;

    Info(name,year){

        this.#name=name;
        this.#year=year;
    }

    display()
    {
        document.writeln("Name of school:" + this.#name + "<br>");
        document.writeln("Year:" + this.#year + "<br>");
    }
}

class Student extends School{

    #student_name;
    #std;

    Student_Info(student_name,std){
        this.#student_name=student_name;
        this.#std=std;
    }

    display()
    {
        super.display();
        document.writeln("Name of student:" +this.#student_name+"<br>");
        document.writeln("Standard :" +this.#std+"<br>");
    }
}                                               

const p1 = new Student();
p1.Info("Genius",1999);
p1.Student_Info("Johnson",11+"std");
p1.display();