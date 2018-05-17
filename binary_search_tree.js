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

    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }

      return searchTree(node);
    }
  }
}

BinarySearchTree.prototype.add = function(data) {
  const node = this.root;
  // check if root node exists, if not, set passed in node to root node
  if (node === null) {
    this.root = new Node(data);
    return;
  } else {
    // if root node exists, we have to find where in the tree to place the new node
    function searchTree(node) {
      // search left side
      if (data < node.data) {
        if (!node.left) {
          node.left = new Node(data);
          return;
        } else {
          searchTree(node.left);
        }
      }
    }

  }

}