let arr= [36 , 45 , 86 , 55 , 25 , 10]
let minimum;
minimum = arr[0];

for(let i=0; i<arr.length; i++)
{
    if(arr[i]<minimum)
    {
        minimum = arr[i]
    }
}    
document.write("The minimum number is :- " + minimum)
document.write("<br>")

let maximum;
maximum = arr[0];

for(let j=0; j<arr.length;j++)
{
    if(arr[j]>maximum)
    {
        maximum =arr[j]
    }
}    
document.write("The maximum number is := " + maximum)