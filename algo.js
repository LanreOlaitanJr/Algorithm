// Iteration $ Looping
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
numbers.forEach((num) => {
    sum += num
});
// console.log(sum);

// For Loop
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}

        //    Searching Algorithm
// Linear Search
const users = [
    {id:1, name: "Olaitan"}, 
    {id:2, name: "Lanre"}, 
    {id:3, name: "DML"},
    {id:4, name: "Yanju"}
]

const searchByName = (name) => {
    return users.find(user => user.name === name)
}
// console.log(searchByName("DML"));

// Binary Search
const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if(arr[mid] === target){
            return mid
        }
        else if(arr[mid] < target){
            left = mid + 1
        }
        else{right = mid - 1}
    }
    return - 1
}

const sortedArr = [2, 3, 4, 5, 6, 7, 8, 9, 12, 33, 66, 77, 88, 96, 99]
const target = 4
// console.log(binarySearch(sortedArr, target));

// Bubble Sort
const products = [
    {name: "Beans", price: 1000},
    {name: "Bread", price: 500},
    {name: "Water", price: 600}
]

const sortedProducts = products.sort((a, b) => a.price - b.price)
// console.log(sortedProducts);

// Merge Sort
const mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  };
  
  
  const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left, right);
  };
  
  const unsortedArray = [34, 7, 23, 32, 5, 62];
  console.log(mergeSort(unsortedArray));
  