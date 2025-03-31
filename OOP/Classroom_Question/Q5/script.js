// wap to perform method overloading to find sum of 2 to 4 arguments.
// ex. sum(10,20), sum(10,20,30), sum(_....4)

class Maths {
    sum(a, b, c, d) {
        if(a == undefined || b==undefined)
        {
            document.writeln("Enter minimum 2 values!");
        }
        else if(c==undefined && d== undefined){
            document.writeln("Sum of "+ a + "and" + b +"is :", a+b);
        }
        else if(d==undefined)
        {
            document.writeln("Sum of "+ a + "," + b + "and"+ c +"is :", a+b+c);
        }
        else
        {
            document.writeln("Sum of "+ a + "," + b + ","+ c +"and"+ d +"is :", a+b+c+d);
        }
    }
}
const p1 = new Maths();
p1.sum(50,50,80,70);