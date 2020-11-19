function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {min = arr[i]}
    }
    return min;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {max = arr[i]}
    }
    return max;
}

function findMedian(arr) {
    arr.sort(function(a, b) {return a - b;});
    let first = arr[Math.round(arr.length / 2)];
    let second = arr[Math.round(arr.length / 2) - 1];
    return (first + second) / 2;
}

function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];
      
    for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }

//create random number array with length <= 1000
const ARRAY_LENGTH = 1000
let arr = Array.from(Array(ARRAY_LENGTH)).map(x=>Math.floor(Math.random()*100))
console.log(...arr)

//functions to find min, max elements and median of the array
let max = findMax(arr);
let min = findMin(arr);
let median = findMedian(arr);

console.log(min + " : minimum number in array");
console.log(max + " : maximum number in array");
console.log(median + " : median in array");

//quicksort implementation
quickSort(arr);
console.log(...arr)

//find the number of all tags in document
let collection = document.getElementsByTagName("*");

var tagNames = [];
for (let i = 1; i < collection.length; i++) {
    tagNames.push(collection[i].tagName);
}

let uniuqeSet = new Set(tagNames);
tagNames = [...uniuqeSet];

for (let i = 1; i < tagNames.length; i++) {
    console.log(tagNames[i].toLowerCase() + " - " + document.getElementsByTagName(tagNames[i]).length);
}



