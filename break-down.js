// using break in the for-of loop 

// let products = [
//     { name: 'iphone-14', price: 70000 },
//     { name: 'lenovo', price: 30000 },
//     { name: 'samsung', price: 60000 },
//     { name: 'mac book', price: 120000 },
//     { name: 'iphone-X', price: 90000 },
//     { name: 'one plus', price: 27000 },
//     { name: 'apple watch', price: 25000 },
//     { name: 'samsung watch', price: 7000 },




// ];

// for (const product of products) {
//     if (product.price < 27000) {
//         break;
//     }
//     console.log(product)
// }

// console.log('after the loop')


// using continue in the for-of loop.

let products = [
    { name: 'iphone-14', price: 70000 },
    { name: 'lenovo', price: 30000 },
    { name: 'one plus', price: 27000 },
    { name: 'apple watch', price: 25000 },
    { name: 'samsung watch', price: 7000 },
    { name: 'mac book', price: 120000 },
    { name: 'iphone-X', price: 90000 },
    { name: 'samsung', price: 60000 },





];

for (const product of products) {
    if (product.price < 27000) {
        continue;
    }
    console.log(product)
}

console.log('after the loop')

