// Create a Vehicle class with properties brand and year.
// Create a Car class that extends Vehicle and adds a fuelType property.
// Create a Bike class that extends Vehicle and adds a hasGear property.
// Add another class ElectricCar that extends Car and adds a batteryCapacity property.
// Implement a getDetails() method in Vehicle and override it in different subclasses.

class Vehicle{

    #brand;
    #year;
    constructor(brand,year){
        this.#brand=brand;
        this.#year=year;
    }

    getDetails(){
        document.writeln("Vehicle Brand:"+this.#brand+"<br>");
        document.writeln("Vehicle Year:"+this.#year+"<br>");
    }
}

class Car extends Vehicle{

    #fuelType;
    constructor(brand,year,fuelType){
        super(brand,year);
            this.#fuelType=fuelType;
    }
    getDetails(){   
        super.getDetails();
        document.writeln("FuelType:"+this.#fuelType+"<br>");
    }
}

class Bike extends Vehicle{

    #hasGear;
    constructor(brand,year,hasGear){
       super(brand,year);
        this.#hasGear=hasGear;  
    }

    getDetails(){
        super.getDetails();
        document.writeln("hasGear:"+this.#hasGear+"<br>");
    }
}

class ElectricCar extends Car{

    #batteryCapacity;
    constructor(brand,year,fuelType,batteryCapacity){
      super(brand,year,fuelType);
        this.#batteryCapacity=batteryCapacity;
    }

    getDetails(){
        super.getDetails();
        document.writeln("BatteryCapacity:"+this.#batteryCapacity+"<br>");
    }
}

const myCar= new Car("Toyota",2021,"Petrol");
document.writeln("<h2>Car Info</h2>");
myCar.getDetails();

const mybike = new Bike("honda",2011,"true");
document.writeln("<h2>Bike Info</h2>");
mybike.getDetails();

const myEv = new ElectricCar("Tesla",2011,"Petrol","200kwh");
document.writeln("<h2>Electric Car Info</h2>");
myEv.getDetails();