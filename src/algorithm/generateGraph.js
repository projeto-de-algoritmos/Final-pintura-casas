import Graph from "./Graph";

export default function generateGraph() {
  const graph = new Graph();

  const graphSize = Math.floor(Math.random() * 10) + 2;

  for (let index = 1; index <= graphSize; index++) {
    graph.addNode(index);
  }

  const edgeAmount = getEdgeAmount(graphSize);

  //   graph.addEdge(1, 2);
  //   graph.addEdge(2, 3);
  //   graph.addEdge(2, 4);
  //   graph.addEdge(2, 5);
  //   graph.addEdge(3, 4);

  return graph;
}

function getEdgeAmount(graphSize) {
  return (graphSize * (graphSize - 1)) / 2;
}
