var n;
var rem=0;
function Isprime(n){
    let isPrime=true;
for(i=2; i<n; i++){
if(n%i==0){
    isPrime=false;
}
}
if(isPrime==true){
    return 'Prime';
}else{
    return 'Not-prime';
}
}
console.log(Isprime(31));