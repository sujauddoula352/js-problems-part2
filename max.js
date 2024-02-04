const sohel=85;
const hira=95;
if (sohel > hira){
    console.log('sohel will eat the strawberry');
}
else {
    console.sohel('hira will eat the strawberry');
}


//inside  a function
function getMax(num1,num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max=getMax(85,65);
console.log('max of the two number:',max)