const quickSort = (arr: Array<number>): Array<number> => {
  const len = arr.length;
  if (len < 2) return arr;
  let rand = Math.floor(1 + Math.random() * (len - 1));
  let pivot = arr[rand];
  const left = [];
  const right = [];
  arr.splice(arr.indexOf(pivot), 1);
  arr = [pivot].concat(arr);

  for (let i = 1; i < len; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
};

console.log(quickSort([1, 2, 34534, 12312, 544, 2]));
