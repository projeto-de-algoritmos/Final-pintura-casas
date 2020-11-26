export default function colorGraph(graph) {
  graph.nodes.forEach((node) => {
    const edges = graph.edges[node];
    const colorNeighbours = edges.map((edge) => graph.colors[edge]);
    const coloredNeighbours = colorNeighbours.filter((color) => color >= 0);
    const sortedColors = coloredNeighbours.sort((a, b) => a - b);
    const lowestColor = sortedColors.reduce(
      (current, next) => (current === next ? (current += 1) : current),
      0
    );
    graph.colors[node] = lowestColor;
  });
  return graph;
}
