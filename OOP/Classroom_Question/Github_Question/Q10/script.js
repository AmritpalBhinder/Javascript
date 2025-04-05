// Implement a VehicleFactory class with a createVehicle(type, brand, year) method.
// Based on the type, return either a Car or Bike instance.

class VehicleFactory{

    constructor(type,brand,year){
        this.type = type;
        this.brand = brand;
        this.year = year;
    }

    createVehicle(){

        if(this.type === "car" || this.type ==="Car")
            {
                document.writeln("<h4>CAR </h4>"  + "  brand :   " + this.brand + "<br>  year :   "+ this.year + " <br> ");
                
            }
            else if(this.type === "bike"  || this.type === " Bike")
            {
                document.writeln("<h4>BIKE </h4>"  + "  brand :   " + this.brand + " <br> year :   "+ this.year + " <br> ");
            }
    }
}

const car = new VehicleFactory("car", "Kia", 2021 ) 
const bike = new VehicleFactory("bike", "Shine", 2018)

car.createVehicle();
bike.createVehicle();