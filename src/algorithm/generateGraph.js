import Graph from "./Graph";

export default function generateGraph() {
  const graph = new Graph();

  const graphSize = Math.floor(Math.random() * 10) + 1;

  for (let index = 1; index <= graphSize; index++) {
    graph.addNode(index);
  }

 

  return graph;
}
