let num = prompt("Enter the number:- ");
ans = parseInt(num);

factorial(num);

function factorial(num)
{

    for(let i=num-1 ; i>=1;i--)
    {
        num = num * i ;
    }

    document.write("Factorial of " + ans + " is :- " + num);
}
