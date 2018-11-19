/**
 * Minimal Tree
 * Given a sorted (increasing order) array with unique integer elements, write
 * an algorithm to create a binary search tree with minimal height.
 * */

const BinaryTree = require('./BinaryTree/BinaryTree');
const BinaryTreeNode = require('./Node/BinaryTreeNode');

test('creating minimal tree from empty array should return null object', () => {
  const binaryTree = new BinaryTree();
  const uniqueIntegerList = [];
  const root = binaryTree.minimalTree(uniqueIntegerList, 0, uniqueIntegerList.length - 1);
  expect(root).toBeNull();
});

test('creating minimal tree from sorted list should return a TreeNode', () => {
  const binaryTree = new BinaryTree();
  const uniqueIntegerList = [0, 1, 2, 3, 4, 5, 6];
  const root = binaryTree.minimalTree(uniqueIntegerList, 0, uniqueIntegerList.length - 1);
  expect(root).toBeInstanceOf(BinaryTreeNode);
});

test('creating minimal tree from sorted list should return right number of nodes', () => {
  const binaryTree = new BinaryTree();
  const uniqueIntegerList = [0, 1, 2, 3, 4, 5, 6];
  binaryTree.minimalTree(uniqueIntegerList, 0, uniqueIntegerList.length - 1);
  expect(binaryTree.getNumberOfNodes()).toBe(uniqueIntegerList.length);
});