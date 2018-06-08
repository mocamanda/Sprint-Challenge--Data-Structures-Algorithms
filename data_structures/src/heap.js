const heapsort = (arr) => {
  /* Your code here */

// Create a new heap
  const heap = new Heap();

// Loop through the array and use the .insert method to put each element in the heap
  arr.forEach(item => heap.insert(item));

// Array to hold the data once it is sorted
  const sortedArr = [];

// While the heap's size is greater than 0 use .delete => which returns the highest
// number in the heap and reorder the heap to maintain its integrity
  while (heap.getSize()) {
// Take the value returned .delete and put it at the beginning of the sorted array
    sortedArr.unshift(heap.delete());
  }
// Return the sorted array
  return sortedArr;
};

// //  SEAN SOLUTION  //
// const heapsort = (arr) => {
//   const heap = new Heap();
//   const sorted = Array(arr.length);

//   for (let i = 0; i < arr.length; i++) {
//     heap.insert(arr[i]);
//   }

//   for (let i = arr.length - 1; i > -1; i--) {
//     sorted[i] = heap.delete();
//   }

//   return sorted;
// };

class Heap {
  constructor() {
    this.storage = [];
  }

  insert(val) {
    const index = this.storage.push(val) - 1;
    this.bubbleUp(index);
  }

  delete() {
    if (!this.storage.length) return null;
    if (this.storage.length === 1) {
      return this.storage.pop();
    }

    const max = this.storage[0];
    this.storage[0] = this.storage.pop();
    this.siftDown(0);
    return max;
  }

  getMax() {
    return this.storage[0];
  }

  getSize() {
    return this.storage.length;
  }

  bubbleUp(index) {
    const parent = Math.floor((index - 1) / 2);
    if (this.storage[parent] < this.storage[index]) {
      [this.storage[parent], this.storage[index]] = [this.storage[index], this.storage[parent]];
      this.bubbleUp(parent);
    }
  }

  siftDown(index) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let maxChild;
    
    if (this.storage[leftChildIndex] && this.storage[rightChildIndex]) {
      maxChild = this.storage[leftChildIndex] > this.storage[rightChildIndex] ? leftChildIndex : rightChildIndex;
    } else if (this.storage[leftChildIndex]) {
      maxChild = leftChildIndex;
    } else if (this.storage[rightChildIndex]) {
      maxChild = rightChildIndex;
    } 

    if (this.storage[index] < this.storage[maxChild]) {
      [this.storage[maxChild], this.storage[index]] = [this.storage[index], this.storage[maxChild]];
      this.siftDown(maxChild);
    }
  }
}

module.exports = {
  Heap,
  heapsort,
};
