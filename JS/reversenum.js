var n,i;
var sum=0;
var rem;
function reversenum(n){
while(n>0){
    rem=n%10;
//console.log(rem)
sum=(sum*10)+rem;  // 
n=parseInt(n/10);

}
    console.log(sum);
}

reversenum(123);