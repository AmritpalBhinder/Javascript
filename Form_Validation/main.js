$("#btn").on("click",function(){
    const emailValidator = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    const email = $("#email").val();
    const password = $("#password").val();
    const conPassword = $("#con-password").val();

    let isValid = true;

    console.log(email,password,conPassword);

    if(email=="")
    {
        $("#err").text("Please enter an email address");
        isValid =false;
    }
    else if(password== "" || conPassword== "" || passwordValidator.test(password))
    {
        isValid = false;
        $("#err2").text("Please enter valid password");
    }
    else if(password!=conPassword){
        isValid=false;
        $("#err3").text("Password doesn't match");
    }
    else if(isValid)
    {
        $("#status").text("Signup Successfully!");
        $(".list").append("<p>" + email + "</p>");
    }
    else
    {
        $("#status").test("Sigup Failed!");
    }
});