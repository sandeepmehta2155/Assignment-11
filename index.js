"use-strict";

const l = console.log;

// JavaScript Assignment 11

/*
1. Write a JavaScript program to take an array as input from the user and calculate
the sum of numbers in odd places and the sum of numbers at even places.
Places
Sample Input:
[ 1, 2, 3, 4, 5 ]
Explanation:
Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
Sum of Numbers at Even Places = 2 + 4 = 6
Difference = 9 - 6 = 3
Sample Output:
Difference = 3
Odd Elements = 3
Even Elements = 2
Average = 3
GCD = 3
a) Print the difference between the two sums
b) Print the number of elements in odd places
c) Print the number of elements in even places
d) Print the average of all elements in the array
e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
*/

// Answer
// =>
const inputArray = [1, 2, 3, 4, 5, 4, 4];
const inputArrayTwo = [1, 2, [3, 4], [[5, 4], 4]];

// a)
/**
 *
 * @param {*} arr
 * @returns object with even & odd sum
 */
const sumEven = (arr) => {
  let evenSum = 0;
  let oddSum = 0;
  arr.forEach((item, index) => {
    index % 2 === 0 ? (evenSum += item) : (oddSum += item);
  });
  return {
    evenSum,
    oddSum,
  };
};

const { evenSum, oddSum } = sumEven(inputArray);
const diffSum = evenSum - oddSum;

// Output

l(diffSum, "quest 1 (a)");

// b)
/**
 *
 * @param {*} arr
 * @returns elements in odd places
 */
const elementsInOddPlaces = (arr = []) => {
  let oddCount = 0;
  arr.forEach((_, index) => {
    if (index % 2 === 0) oddCount += 1;
  });
  return {
    oddCount,
  };
};

const { oddCount } = elementsInOddPlaces(inputArray);

// Output

l(oddCount, "quest 1 (b)");

// c)

/**
 *
 * @param {*} arr
 * @returns elements in even places
 */
const elementsInEvenPlaces = (arr = []) => {
  let evenCount = 0;
  arr.forEach((_, index) => {
    if (index % 2 !== 0) evenCount += 1;
  });
  return {
    evenCount,
  };
};

const { evenCount } = elementsInEvenPlaces(inputArray);

// Output

l(evenCount, "quest 1 (c)");

// d)

/**
 *
 * @param {*} arr
 * @returns average of all the elements
 */
const averageOfElements = (arr = []) => {
  const sum = arr.reduce((item, acc) => (acc += item), 0);

  return sum / arr.length;
};

// Output

l(averageOfElements(inputArray), "quest 1 (d)");

// e)

l(evenSum, "quest 1 (e)");
l(oddSum, "quest 1 (e)");

// -------------------------------------------------------------------------------------------------

/*
2. Write a JavaScript program to take 2 arrays from the user and check if the
number 4 exists in any of the arrays, or both of the arrays.
Sample Input 1:
[ 1, 2, 3, 4, 5 ]
[ 4, 6, 1, 8, 2 ]
Output:

4 in both arrays
Sample Input 2:
[ 1, 2, 3, 6, 5 ]
[ 4, 6, 1, 8, 2 ]
Output:
4 in array 2
Sample Input 3:
[ 1, 2, 3, 4, 5 ]
[ 5, 6, 1, 8, 2 ]
Output:
4 in array 1
*/

// Answer
// =>

const arrOne = [1, 2, 3, 4, 5];
const arrTwo = [4, 6, 1, 8, 2];

const arrThree = [1, 2, 3, 6, 5];
const arrFour = [4, 6, 1, 8, 2];

const arrFive = [1, 2, 3, 4, 5];
const arrSix = [5, 6, 1, 8, 2];

/**
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns whether 4 is present in arr1 and/or arr2
 */
const showFourInArrays = (arr1 = [], arr2 = []) => {
  switch (true) {
    case arr1.indexOf(4) !== -1 && arr2.indexOf(4) !== -1:
      return `4 in both arrays`;

    case arr1.indexOf(4) !== -1:
      return `4 in array 1`;

    case arr2.indexOf(4) !== -1:
      return `4 in array 2`;

    default:
      return `4 not present in both array`;
  }
};

// Output

l(showFourInArrays(arrOne, arrTwo), "quest 2 case 1");
l(showFourInArrays(arrThree, arrFour), "quest 2 case 2");
l(showFourInArrays(arrFive, arrSix), "quest 2 case 3");

// 3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
// array.
// Note: Do not use array.flat();
// Sample Input:
// [ 1, 2, [ 3, 4, [ 5 ] ] ]
// Output:
// [ 1, 2, 3, 4, 5 ]
const res = [];

/**
 *
 * @param {*} arr
 * @returns flattened array
 */
const flatArray = (arr = []) => {
  arr.forEach((item) =>
    typeof item !== "number" ? flatArray(item) : res.push(item)
  );
  return res;
};

/**
 *
 * @param {*} arr
 * @returns flattened array
 */
const flattenArray = (arr = []) => arr.toString().split(",").map(Number);

// Output

l(flatArray(inputArrayTwo), "quest 3 method 1");
l(flattenArray(inputArrayTwo), "quest 3 method 2");

/*
4. Write a JavaScript program to take an array as input from the user and:
a) Store all duplicate elements in a separate array
b) Remove the duplicate elements from the original array
Sample Input:
[ 1, 2, 3, 2, 3, 4, 5 ]
Output:
Duplicate Elements = [ 2, 3 ]
Array without duplicate elements = [ 1, 2, 3, 4, 5 ]
*/

// Answer
// =>

// Output

const newArray = [];
/**
 * 
 * @param {*} arr 
 * @returns duplicates & storeDuplicates array
 */
const duplicateElements = (arr = []) => {
  const duplicates = arr.reduce((acc, item) => {
    if (acc.indexOf(item) === -1) {
      acc.push(item);
    } else {
      if (newArray.indexOf(item) === -1) {
        newArray.push(item);
      }
    }
    return acc;
  }, []);

  return {
    duplicates,
    storeDuplicates: newArray,
  };
};
// Output

// a)
l(duplicateElements(inputArray).storeDuplicates, "store duplicates");

// b)
l(duplicateElements(inputArray).duplicates, "remove duplicates");

/***
 * 
5. Debug the given JavaScript program and execute the correct code.

function thirdLargest(arr, arr_size)
{
/* There should be
at least three elements */
/*
if (arr_size < 3)
{
document.write(" Invalid Input "); return;
}
let first = arr[0];
for (let i = 1;
i < arr_size ; i++)
if (arr[i] > first)
arr[i] = first;
let second = Number.MIN_VALUE; for (let i = 0;
i < arr_size ; i++)
if (arr[i] > first &&
arr[i] < second)
arr[i] = second;
let third = Number.MIN_VALUE; for (let i = 0;
i < arr_size ; i++)
if (arr[i] < third &&
arr[i] > second)
third = arr[i];
document.write("The third Largest " + "element is ", third); }
let arr = [12, 13, 1, 10, 34, 16]; let n = arr.length;
thirdLargest(arr, n);
*/

// Output
// =>

/*  
  Number.MIN_VALUE i.e The third Largest element is  5e-324
*/
