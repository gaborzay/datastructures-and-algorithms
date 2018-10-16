/**
 * Route Between Nodes:
 * Give a directed graph, design an algorithm to find out whether there is a
 * route between two nodes.
 * */

const Graph = require('./Graph/Graph');
const adjacencyList = [
  [5, 4, 1],
  [3],
  [1],
  [4, 2],
  [],
  [],
];

test('can find a path between 2 nodes where one exists', () => {
  const graph = new Graph();
  graph.populateGraphFromAdjacencyList(adjacencyList);
  const graphSearch = graph.search(graph.nodes[0], graph.nodes[3]);
  expect(graphSearch).toBe(true);
});


test('cannot find a path between 2 nodes where one does not exist', () => {
  const graph = new Graph();
  graph.populateGraphFromAdjacencyList(adjacencyList);
  const graphSearch = graph.search(graph.nodes[1], graph.nodes[0]);
  expect(graphSearch).toBe(false);
});