// implement a binary search tree

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    // if the root is null, i.e., no tree exists yet, simply add node to root
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      // create helper function to search tree
      const searchTree = function(node) {
        if (data < node.data) {
          // if left child is null, node belongs there
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            // if there is already a child in place, call searchTree on that child
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          // if right child is null, node belongs there
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            // if there is already a child in place, call searchTree on that child
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }

      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    // keep looking to left child as min element will be left-most element of a BST
    while (current.left !== null) {
      current = current.left;
    }
    
    return current.data;
  }

  findMax() {
    let current = this.root;
    // keep looking to right child as max element will be right-most element of a BST
    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }

  find(data) {
    // this method returns the entire node if the data exists in the tree
    let current = this.root;

    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }

    return current;
  }
}
