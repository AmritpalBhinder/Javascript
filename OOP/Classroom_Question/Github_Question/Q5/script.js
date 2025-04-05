// Create a Restaurant class with properties: name, cuisineType, and rating.
// Instantiate 3 restaurant objects with different values.

class Restaurant{

    constructor(name,cuisineType,rating){
        this.name = name;
        this.cuisineType = cuisineType;
        this.rating = rating;
    }

    display()
    {
        document.writeln("Name:" + this.name + "<br>");
        document.writeln("cuisineType:" + this.cuisineType +"<br>");
        document.writeln("rating:" + this.rating +"<br>");
    }
}

const r1 = new Restaurant("McDonald's","fastfood",5+"stars");
const r2 = new Restaurant("KFC","fastfood",4+"stars");
const r3 = new Restaurant("Starbucks","cafe",3.5+"stars");

document.writeln("<h2> Restaurant 1</h2>")
r1.display();
document.writeln("<h2> Restaurant 2</h2>")
r2.display();
document.writeln("<h2> Restaurant 3</h2>")
r3.display();