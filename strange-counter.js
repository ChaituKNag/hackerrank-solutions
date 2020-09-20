/*
http://hr.gs/aafdae
*/

// Complete the strangeCounter function below.
function strangeCounter(t) {

    let remaining = t;
    let start = 3, iteration = 1;

    while (remaining > start) {
        remaining = remaining - start;
        iteration++;
        start = start * 2;
    }

    return start - remaining + 1;
}

console.log(strangeCounter(21));