import Graph from "./Graph";

export default function generateGraph() {
  const graph = new Graph();

  const graphSize = Math.floor(Math.random() * 20) + 2;

  for (let index = 1; index <= graphSize; index++) {
    graph.addNode(index);
  }

  for (let node = 1; node <= graphSize; node++) {
    const neighbor = Math.floor(Math.random() * (graphSize - 1)) + 1;
    graph.addEdge(node, neighbor);
  }

  return graph;
}
