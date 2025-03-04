let arr=[56 , 96 , 1 , 2 , 45 , 66 , 9 , 89]

for(let i=0; i<arr.length ; i++)
{
    for(let j=i+1; j<arr.length; j++)
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