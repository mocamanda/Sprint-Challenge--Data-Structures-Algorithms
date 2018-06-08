Analysis of Algorithms
Exercise I. Give an analysis of the running time with respect to the input size n of each of the following program fragments below:

a)
  a = 0;
  while (a < n * n * n)
    a = a + n * n;

O(n)

b)
  // input array is of length n
  i = array.length - 1;
  while (array[i] > x && i >= 0)
    i = i/2;

O(log(n))

c)
  sum = 0;
  for (i = 0; i < Math.sqrt(n) / 2; i++)
    for ( j = i; j < 8 + i; j++)
    for (k = j; k < 8 + j; k++)
      sum++;

O(sqrt(n))

d)
  sum = 0;
  for (i = 1; i < n; i *= 2)
    for (j = 0; j < n; j++)
      sum++;

O(n(log(n)))

e)
  sum = 0;
  for (i = 0; i < n; i++)
    for (j = i + 1; j < n; j++)
      for (k = j + 1; k < n; k++)
        for (l = k + 1; l < 10 + k; l++)
          sum++;

O(n^3)

f)
  bunnyEars = function (bunnies) { // here bunnies === n
    if (bunnies === 0) return 0;
    return 2 + bunnyEars(bunnies-1);
  }

O(n)

g)
  search = function (array, arraySize, target) { // here arraySize === n
    if (arraySize > 0) {
      if (array[arraySize-1] === target) return true;
      else return search(array, arraySize-1, target);
    }
    return false;
  }

O(n)

Exercise II.
a) Given an array a of n numbers, design a linear running time algorithm to find the maximum value of a[j] - a[i], where j >= i.

function maxDifference(arr) {
  let minVal = arr[0];
  let maxDiff = 0;

  for (let i = 0; i < arr.length; i++) {
    minVal = Math.min(minVal, arr[i]);
    maxDiff = Math.max(maxDiff, arr[i] - minVal);
  }
  
  return maxDiff;
}

b) Suppose that you have an n-story building and plenty of eggs. Suppose also that an egg is broken if it is thrown off floor f or higher, and unbroken otherwise. Devise a strategy to determine the value of f such that the number of dropped eggs is minimized.

Go to the middle floor (n/2) and drop an egg. If it breaks halve the floors again(go to floor n/4). If it doesnt break go up half the remaining floors (floor (n - n/2)/2) and repeat until you find f.

Exercise III. Below is the the pseudo-code for the Quicksort algorithm:

function quicksort(array)
  if length(array) <= 1
    return array
  select and remove a pivot element pivot from array
  create empty lists less and greater
  for each x in array
    if x <= pivot then append x to less
    else append x to greater
  return concatenate(quicksort(less), list(pivot), quicksort(greater))

a)  Suppose we implement quicksort so that the pivot is always chosen to be the rst element of the array.
    What is the running time of this algorithm on an input array that is already sorted? Why?

O(n)
The time complexity should be the same since the function will still iterate through the whole array.

b)  Suppose we implement quicksort so that the pivot is always magically chosen to be the median       element of the array. What is the running time of this algorithm? Why?

O(n(log(n)))

Because all of the subproblems would be balanced so the problem would be successively divided by 2
