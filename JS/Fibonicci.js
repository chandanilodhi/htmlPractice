//Fibonacci series
var sum=0;
var a=0;
var b=1;
console.log(a);
console.log(b);

for(var i=2; i<10; i++){
    sum=a+b;
    console.log(sum);
    a=b;
    b=sum;
}
