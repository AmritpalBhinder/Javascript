const place1 = document.getElementById("place1");
const place2 = document.getElementById("place2");
const btn1 = document.getElementById("btn1");
const h1 = document.getElementById("title");
let sum = 0;

btn1.addEventListener("click",()=>{
    
    let a = parseInt(place1.value)
    let b = parseInt(place2.value)
    sum = a + b;
    sum++;

    h1.innerHTML = "Sum of " + a + " & " + b + " is:- " + sum;
})