// 1
// for (let i = 0; i < 6; i++) {
//     console.log(i);
// }

// 2

// function number(i) {
//     console.log(i);
//     number(i + 1);
// }

// number(1)

// 3


function number(i) {

    if (i > 5) {
        return
    }
    console.log(i);
    number(i + 1);
}

number(1)