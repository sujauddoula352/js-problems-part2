const x = 50;
const y = 80;
const z = 75;
if (x > y && x > y){
    console.log('the is a grates number x:')
}
else if( y > x && y > z){
    console.log('the is a grates number y:')
}
else{
    console.log('the is a grates number z:')
}

//inside  a function
function maxOfThree(num1,num2,num3){
    if (num1 > num2 && num1 > num3){
        console.log('the is a grates number num1:',num1)
    }
    else if( num2 > num3 && num2 > num1){
        console.log('the is a grates number num2:',num2)
    }
    else{
        console.log('the is a grates number num3:',num3)
    }


}
maxOfThree(100,90,70)