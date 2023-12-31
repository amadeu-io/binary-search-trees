// array generation & sorting utilities module

// creates an array of n random numbers between 0 and 100
function getRandomArray(n) {
  var randomArray = [];
  for (let i = 0; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomNumber);
  }

  return randomArray;
}

// sorts an array of numbers using recursive merge sort
function mergeSort(arr) {
  // base case
  if (arr.length <= 1) {
    return arr;
  }

  // find the middle point to divide the array into two halves
  let mid = Math.floor(arr.length / 2);

  // call mergeSort for first half
  let left = mergeSort(arr.slice(0, mid));

  // call mergeSort for second half
  let right = mergeSort(arr.slice(mid));

  // merge the two halves sorted
  return merge(left, right);
}

// helper function for mergeSort: merges two sorted arrays (left and right)
// into a single sorted array
function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // add remaining element in left or right arrays after concatenating in order
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

module.exports = { mergeSort, getRandomArray };
