let arr= prompt("Enter any palindrome number to check: ")
let reverse_num = "";

for(let i=arr.length-1; i>=0; i--)
{
    reverse_num += arr[i]
}
if(reverse_num==arr)
{
    document.write(arr + " is a palindrome number !");
}
else
{
    document.write(arr + " is not a palindrome number !");
}