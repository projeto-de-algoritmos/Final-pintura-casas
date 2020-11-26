import Graph from "./Graph";

export default function generateGraph() {
  const graph = new Graph();

  const graphSize = Math.floor(Math.random() * 10) + 2;

  for (let index = 1; index <= graphSize; index++) {
    graph.addNode(index);
  }

  const edgeAmount = getEdgeAmount(graphSize);

  let node = 1;
  let neighbor = 2;

  for (let index = 1; index <= edgeAmount; index++) {
    if (neighbor === node) continue;

    graph.addEdge(node, neighbor);

    if (neighbor === graphSize) {
      node++;
      neighbor = node + 1;
    } else neighbor++;
  }

  return graph;
}

function getEdgeAmount(graphSize) {
  return (graphSize * (graphSize - 1)) / 2;
}
