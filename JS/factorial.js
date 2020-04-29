var number;
var fact=1;
function factorial(number){
for(var i=1; i<=number; i++){
fact= (fact*i);
}
return fact;
}
console.log(factorial(5));
