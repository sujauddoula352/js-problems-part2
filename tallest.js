// const height=[65,70,65,66,75,72,92];
// function getMax(numbers){
//     let max = numbers[0];
//     for(const num of numbers){
//       if (num > max ){
//         max = num;
//       }  
//     }
//     return max;
// }
// const max = getMax(height);
// console.log(max)


/**homeWork min */
const height2=[65,95,35,62,94,28,64,32,22,80,21,20.5];
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if( min > num){
            min = num;
        }
    }
    return min;
}
const min = getMin(height2);
console.log(min)