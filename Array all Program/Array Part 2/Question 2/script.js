let arr= prompt("Enter any name to check count frequency: ")
let count;

for(let i=0; i<arr.length; i++)
{
    count=0;

    for(let j=0; j<=arr.length; j++)
    {
        if(arr[i]==arr[j])
        {
            count++;
        }
    }
    document.write(arr[i] + " = " + count + "<br>")
}