// wap to craete a class for animal with attribute like name,type,gender and age, make these all
// attribute private to secure direct access of the users, perform input and output for 3 defferent
// animals.

class Animal{

    #name;
    #type;
    #gender;
    #age;

    Animal_info(name,type,gender,age)
    {
        this.#name=name;
        this.#type=type;
        this.#gender=gender;
        this.#age=age;
    }

    display()
    {
        document.writeln("Name:"+ this.#name + "<br>")
        document.writeln("Type:"+ this.#type + "<br>")
        document.writeln("Gender:"+ this.#gender + "<br>")
        document.writeln("Age:"+ this.#age + "<br>")
    }
}

const a1= new Animal();
const a2= new Animal();
const a3= new Animal();

a1.Animal_info("Amur","Tiger","Male","9")
document.writeln("<h2>First-Animal</h2>")
a1.display()

a2.Animal_info("Molly","Cat","Female","15")
document.writeln("<h2>Second-Animal</h2>")
a2.display()

a3.Animal_info("Stag","Deer","Male","5")
document.writeln("<h2>Third-Animal</h2>")
a3.display()
