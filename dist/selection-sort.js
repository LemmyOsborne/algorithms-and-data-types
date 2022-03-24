"use strict";
const selectionSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let smallest = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        if (smallest !== i) {
            let tmp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = tmp;
        }
    }
    return arr;
};
console.log(selectionSort([42, 12312, 12, 23, 7, 4, 123]));
