// // doing sum using for loop. this is decreasing loop.

// sum = 0;

// for (let i = 10; i >= 1; i--) {
//     sum = sum + i;
// }

// console.log(sum);

// same process can be done by function without using any for or while loop.

function sum(i) {
    console.log(i)
    if (i == 1) {
        // return 1   this is stoping condition, if you dont do that it will continue forever.
    }

    return i + sum(--i);
}

console.log(sum(5))