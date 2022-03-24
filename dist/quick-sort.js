"use strict";
const quickSort = (arr) => {
    const len = arr.length;
    if (len < 2)
        return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < len; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
};
console.log(quickSort([1, 2, 34534, 12312, 544, 2]));
