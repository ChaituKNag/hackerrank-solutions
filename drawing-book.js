/**
 * http://hr.gs/fadcab
 * Pages go like this: [ |1] [2|3] [4|5] [6| ]
 */

/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {

    const isEven = n % 2 === 0;
    if (p === 1 || p === n || (!isEven && p === n - 1)) return 0;

    const numberOfPages = Math.ceil(n / 2);
    const turnsFromFront = Math.floor(p / 2);
    const turnsFromBack = isEven ? Math.ceil((n - p) / 2) : Math.floor((n - p) / 2);
    return turnsFromFront < turnsFromBack ? turnsFromFront : turnsFromBack;
}

console.log(
    pageCount(6, 5)
);