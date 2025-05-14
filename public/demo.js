let firstName = ["Madhu"];
let secondName = ["Chandrika"];

console.log(firstName.concat(secondName));
console.log([...firstName,...secondName]);


//spread operator
function variableArgument(...num){
    let sum = 0;
    for(let n of num){
        sum+=n
    }
    return sum;
}

// let arr = [2,5,1,7,5,8,7,9];
console.log(variableArgument(2,5,1,7,5,8,7,9));
console.log(variableArgument(2,5,1,7,5,8,7,9,7,0,15,82));
console.log(variableArgument(2,5,1,7,5,8,7,9,69,4,64,8));
console.log(variableArgument(2,5,1,7,5,8,7,9,5,3,29,10,73));
