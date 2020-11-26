export default class Graph {
  constructor() {
    this.edges = {};
    this.colors = {};
    this.nodes = [];
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
    this.colors[node] = -1;
  }

  addEdge(node1, node2) {
    if (node1 !== node2) {
      this.edges[node1].push(node2);
      this.edges[node2].push(node1);
    }
  }
}
