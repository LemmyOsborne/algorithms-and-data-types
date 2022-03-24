const binarySearch = (array: number[], target: number) => {
  let low = 0;
  let high: number = array.length - 1;

  while (low <= high) {
    let middle = Math.ceil((high + low) / 2);
    let guess = array[middle];

    if (guess === target) return middle;

    if (guess > target) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return null;
};

const arr = [1, 4, 5, 6, 7, 8, 9, 10, 100, 200, 444];

console.log(binarySearch(arr, 4));
