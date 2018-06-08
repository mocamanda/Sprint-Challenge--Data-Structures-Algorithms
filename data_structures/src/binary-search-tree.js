class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEach(cb) {
    /* Your code here */
  // RECURSIVE APPROACH
    cb(this.value);
  // Traverses the tree in depth first manner from top to bottom
  // Applies the given callback to each tree node in the process
  // Recursion applies left at each level of the tree until it reaches the base case
    if (this.left) {
      this.left.depthFirstForEach(cb);
    }
  // Recursion applies right at each level of the tree until it reaches the base case
    if (this.right) {
      this.right.depthFirstForEach(cb);
    }
  }

  // ITERATIVE APPROACH
  depthFirstForEach(cb) {
    const stack = [];
    stack.push(this);
    
    while (stack.length) {
      const currentNode = stack.pop();
      // if we want to achieve left-to-right depth-first order
      // the right node needs to be pushed to the stack first
      if (currentNode.right) {
        stack.push(currentNode.right);
      }

      if (currentNode.left) {
        stack.push(currentNode.left);
      }

      cb(currentNode.value);
    }
  }

  breadthFirstForEach(cb) {
    /* Your code here */
  // Create queue array with root node
    let queue = [this];

  // Increment along queue, pushing child nodes, if there are any
  for (let i = 0; i < queue.length; i++) {
    let node = queue[i];
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
  // Invoke callback on the current node's value
      cb (node.value);
    }
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;