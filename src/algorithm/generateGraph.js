import Graph from './Graph';

export default function generateGraph() {
    const graph = new Graph();

    graph.addNode(1)
    graph.addNode(2)
    graph.addNode(3)
    graph.addNode(4)
    graph.addNode(5)

    graph.addEdge(1, 2)
    graph.addEdge(2, 3)
    graph.addEdge(2, 4)
    graph.addEdge(2, 5)
    graph.addEdge(3, 4)

    return graph;
}