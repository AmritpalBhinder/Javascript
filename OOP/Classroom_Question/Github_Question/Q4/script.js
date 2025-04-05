// Create an abstract Car class with a method startEngine().
// Implement two subclasses PetrolCar and ElectricCar, each defining startEngine() differently.

class Car{

    #name;
    #type;

    constructor(name,type){
        this.#name=name;
        this.#type=type;
    }

    startEngine(){
        if(this.#type=="petrol")
        {
            document.writeln(this.#name + "start with petrol only,"+ "<br>");
        }
        else if(this.#type=="Electric Car")
        {
            document.writeln(this.#name+ "start with battery."+"<br>");
        }
        else
        {
            document.writeln(this.#name+ "unknown type car!");
        }
    }
}

const petrol_car= new Car("Hyundai"+" "+"petrol"+"<br>");
const electric_car= new Car("Tesla"+" " +"Electric Car"+"<br>");

petrol_car.startEngine();
electric_car.startEngine();