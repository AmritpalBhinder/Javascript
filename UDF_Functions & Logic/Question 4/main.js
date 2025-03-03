function armstrong(n)
{
    let num=n;
    let count=0;
    let result=0;

    while(num>0)
    {
        num = Math.floor(num / 10)
        count++;
    }
    
    num=n;

    for(let i=1;i<=count;i++)
    {
        let last_digit = num % 10;
        let mult = 1;

        for(let j=1;j<=count;j++)
        {
            mult = mult * last_digit;
        }

        result = result + mult;
        num  = Math.floor(num / 10);
    }

    if(result==n)
    {
        document.write(n+ " is a Armstrong Number !");
    }
    else
    {
        document.write(n+ " is not a Armstrong Number !")
    }

}

let ans = prompt("Enter a number: ");
n= parseInt(ans);

armstrong(n)