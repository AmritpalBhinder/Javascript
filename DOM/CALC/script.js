const place1 = document.getElementById("place1");
const place2 = document.getElementById("place2");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const h1 = document.getElementById("title");

btn1.addEventListener("click",()=>{
    
    let a = parseInt(place1.value)
    let b = parseInt(place2.value)
    let sum;
    sum = a + b;

    h1.innerHTML = "Sum of " + a + " & " + b + " is: " + sum;
});

btn2.addEventListener("click",()=>{
    
    let a = parseInt(place1.value)
    let b = parseInt(place2.value)
    let sub;
    sub = a - b;

    h1.innerHTML = "Subtraction of " + a + " & " + b + " is: " + sub;
});

btn3.addEventListener("click",()=>{
    
    let a = parseInt(place1.value)
    let b = parseInt(place2.value)
    let mult;
    mult = a * b;

    h1.innerHTML = "Multiply of " + a + " & " + b + " is: " + mult;
});

btn4.addEventListener("click",()=>{
    
    let a = parseInt(place1.value)
    let b = parseInt(place2.value)
    let div;
    div = a / b;

    h1.innerHTML = "Division of " + a + " & " + b + " is: " + div;
});

btn5.addEventListener("click",()=>{
    
    let a = parseInt(place1.value)
    let b = parseInt(place2.value)
    let mod;
    mod = a % b;

    h1.innerHTML = "Module of " + a + " & " + b + " is: " + mod;
});
