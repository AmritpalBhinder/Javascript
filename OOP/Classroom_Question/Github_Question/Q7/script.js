// Create a Student class with a property percentage.
// Use a getter grade that returns the grade based on the percentage.
// Use a setter grade that updates percentage based on the grade entered (A, B, C, etc.).

class Student {

    #percentage;

    percentage(percentage) {
        this.#percentage = percentage;
    }

    displayGrade() {

        if (this.#percentage > 100 || this.#percentage <= 0) {
            document.writeln("Enter valid percentage !");
        }
        else if (this.#percentage >= 90 && this.#percentage <= 100) {
            document.writeln("You are scored A grade !");
        }
        else if (this.#percentage >= 80 && this.#percentage <= 90) {
            document.writeln("You are scored B grade !");
        }
        else if (this.#percentage >= 70 && this.#percentage <= 80) {
            document.writeln("You are scored C grade !");
        }
        else if (this.#percentage >= 35 && this.#percentage <= 70) {
            document.writeln("You are scored D grade !");
        }
        else {
            document.writeln("Sorry you're failed !");
        }
    }
}

const grade = new Student();
let percent = prompt("Enter your percentage:");
percent = parseInt(percent);

grade.percentage(percent);
grade.displayGrade();