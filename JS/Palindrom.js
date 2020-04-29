//Palindrom number
var n=121;
var x=n;
var sum=0;
var rem=0;
while(n>0){
rem=n%10;
//console.log(rem)
sum=(sum*10)+rem;  // 
n=parseInt(n/10);
//console.log(sum, ',' ,rem,',', n)
}
//console.log(sum==x)
if(sum==x){
console.log('Number is palindrom');
}
else {
    console.log('Number is not palindrom');
}
