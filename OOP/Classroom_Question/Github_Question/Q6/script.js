// Create a Movie class with properties: title and ratings (array).
// Add a static property totalRatingsCount.
// Implement a method addRating(rating) that updates both instance ratings and the static count.

class Movie{
    
    static total_rating = 0;

    constructor(title){
        this.title= title;
        this.rating_movies =[];
    }

    addRating(rating){
        this.rating_movies.push(rating);
        Movie.total_rating++;
    }

    display(){

        document.writeln("Total Rating on movies = " + Movie.total_rating);
    }
}

const movie1 = new Movie("Watcher");
const movie2 = new Movie("Back in Action"); 

movie1.addRating(5);
movie1.addRating(3);
movie2.addRating(5);
movie2.addRating(4);

movie1.display();