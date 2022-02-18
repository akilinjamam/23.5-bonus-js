
// factorial using for loop

// let factorial = 1;

// for (let i = 5; i >= 1; --i) {
//     factorial = factorial * i
// }

// console.log(factorial);

// factorial using function

function factorial(i) {

    if (i == 1) {
        return 1  //it will stop the looping.  
    }

    return factorial(--i) * i

}

console.log(factorial(6));