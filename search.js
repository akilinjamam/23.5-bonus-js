
// // finding out any specific property using for loop under function 
// let products = [
//     { name: 'iphone-14', price: 70000 },
//     { name: 'lenovo', price: 30000 },
//     { name: 'apple watch', price: 25000 },
//     { name: 'samsung watch', price: 7000 },
//     { name: 'samsung', price: 60000 },
//     { name: 'one plus', price: 27000 },
//     { name: 'mac book', price: 12000 },
//     { name: 'iphone-X', price: 90000 },
// ];

// function searchProduct(products, searchBox) {
//     for (const product of products) {

//         if (product.name.includes(searchBox)) {
//             console.log(product.name)
//         }

//     }
// }

// searchProduct(products, 'watch');

// finding out any object in array using for loop under function.

let products = [
    { name: 'iphone-14', price: 70000 },
    { name: 'lenovo', price: 30000 },
    { name: 'apple watch', price: 25000 },
    { name: 'samsung watch', price: 7000 },
    { name: 'samsung', price: 60000 },
    { name: 'one plus', price: 27000 },
    { name: 'mac book', price: 12000 },
    { name: 'iphone-X', price: 90000 },
];

function searchProduct(products, searchBox) {

    const result = []

    for (const product of products) {

        if (product.name.includes(searchBox)) {
            result.push(product)
        }

    }
    return result;
}

const matched = searchProduct(products, 'watch');
console.log(matched);