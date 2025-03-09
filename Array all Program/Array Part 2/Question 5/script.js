let arr =[55 , 2 , 85 , 96 , 47 , 1 , 63 , 22]

for(let i=0; i<=arr.length; i++)
{
    for(j=0;j<=arr.length;j++)
    {
        if(arr[i]>arr[j])
        {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }    
    }    
}    
document.write(arr)