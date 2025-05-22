const keyboard = document.querySelectorAll("#keyboard > div")
const display = document.getElementById("display")
let total = "";

keyboard.forEach((e)=>{
    e.addEventListener("click",()=>{
       const c_value = e.innerText;
       
       display.innerText = c_value;
        if(c_value=="C")
        {
            display.innerText = "";
            total = "";
        }
        else if(c_value =="=")
        {
            display.innerText = eval(total); 
        }
        else
        {
            total+=c_value;
            display.innerText = total;
        }
    });
});