const spokes = [
    [
        [0, 0], [1, 1], [2, 2]
    ],
    [
        [0, 2], [1, 1], [2, 0]
    ],
    [
        [0, 1], [1, 1], [2, 1]
    ],
    [
        [1, 0], [1, 1], [1, 2]
    ],
];

const checkSpokeSum = (matrix, spoke) => {
    return spoke.reduce((sum, sp) => sum + matrix[sp[0]][sp[1]], 0);
}

const checkItemValue = (matrix, item) => matrix[item[0], item[1]];

