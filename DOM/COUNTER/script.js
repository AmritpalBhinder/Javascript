const h1 = document.getElementById("title");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
let count = 0;

btn1.addEventListener("click",()=>{
    count ++;
    h1.innerHTML = count; 
});

btn2.addEventListener("click",()=>{
    if(count>0)
    {
        count--;
        h1.innerHTML = count;    
    }
});

btn3.addEventListener("click",()=>{
    if(count==0)
    {
        document.writeln("you can't multiply by 0.")
    }
    else
    {
        count *=2;
        h1.innerHTML = count;
    } 
});

btn4.addEventListener("click",()=>{
    
    count /=2;
    h1.innerHTML = count; 
});