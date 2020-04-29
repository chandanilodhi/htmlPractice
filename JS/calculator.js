var a;
var b;
var operation;

function calculator(a,b,operation) {
if (operation=='+'){
    return a+b;
}
else if (operation=='-'){
    return a-b;
}
else if(operation=='/'){
    return a/b;
}
else if(operation=='*'){
    return a*b;
}
else{
    return "Invalid operation";
}
}
console.log(calculator(2,3,'+'));
