Add your answers to the questions below.

1. What is the runtime complexity of your `depthFirstForEach` method?
    O(n) because we are travering the entire tree. As new nodes get added to the tree,
    the number of additional times we need to call `depthFirstForEach` increases linearly.

2. What is the space complexity of your `depthFirstForEach` function?
    O(n) regardless of whether we implemented our solution iteratively or recursively.

3. What is the runtime complexity of your `breadthFirstForEach` method?
    O(n) by the same logic as `depthFirstForEach`.

4. What is the space complexity of your `breadthFirstForEach` method?
    O(n) because every node gets added to a queue data structure. In the worst-case,
    we might have a bunch of nodes in the queue.

5. What is the runtime complexity of your `heapsort` function?
    O(2nlogn) because we have two loops, each invoking O(log n) functions. So O(n log n).

6. What is the space complexity of the `heapsort` function? Recall that your implementation should return a new array with the sorted data. What would be the space complexity if your function instead altered the input array?
    O(n) space.
    O(1) if we only altered the input.