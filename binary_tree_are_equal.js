// Given two binary trees, check if they are identical in structure

function areEqual(root1, root2) {
  if (!root1 && !root2) {
    return true;
  }

  if (root1 && root2) {
    return (root1.data === root2.data && areEqual(root1.left, root2.left) && areEqual(root1.right, root2.right));
  }

  return false;
}