
let signupForm = document.getElementById("signup")
let userName = document.getElementById("name");
let email = document.getElementById("email");
let country = document.getElementById("country");
let phone = document.getElementById("phone");
let password = document.getElementById("password");

const signupDetail = [];
let count = 1;
signupForm.addEventListener('submit',(e)=> {

    e.preventDefault()
    const obj1= {
        id:count++,
        name:userName.value,
        email:email.value,
        country:country.value,
        phone:phone.value,
        password:password.value,
    }

    signupDetail.push(obj1);
    console.log(obj1);
    signupForm.innerHTML = `<h3>SignUp Successful !</h3>`
});


//Signin form  
let signInForm = document.getElementById("signin")
let signInName = document.getElementById("signin-name");
let signInemail = document.getElementById("signin-email");
let signInpassword = document.getElementById("signin-password");

let signInDetail = [];

signInForm.addEventListener('submit',(n)=> {

   n.preventDefault();
    const obj2= {
        id:count++,
        name:signInName.value,
        email:signInemail.value,
        password:signInpassword.value,
    };

    signInDetail.push(obj2);
    console.log(obj2);
    signInForm.innerHTML = `<h3>Sign-in Successful !</h3>`
});

