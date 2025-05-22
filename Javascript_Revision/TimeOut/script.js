const btn = document.querySelector("button");

let time = 60;

btn.addEventListener("click", () => {
    let id = setInterval(()=>{
         time--;
        if (time <= 0) {
        document.querySelector("h1").innerText = "TimeOut"
        clearInterval(id)
    }
    else {
        document.querySelector("h1").innerText = time;
    }
}, 1000)
});