function check_prime(num)
{
    let count = 0;

    if(num<=1)
    {
        document.write( num +" is not a prime number ! ")
        return;
    }
    for(let i=0; i<=num; i++)
    {
        if(num % i==0)
        {
            count++;
        }
    }

    if(count==2)
    {
        document.write(num + " is a prime number !");
    }
    else
    {
        document.write(num + " is not a prime number !");
    }
}

let num= prompt("Enter any number: ")
num = parseInt(num);


check_prime(num)
