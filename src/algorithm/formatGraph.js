export default function formatGraph(graph) {
    const edges = []
    Object.keys(graph.edges).forEach(node => {
        graph.edges[node].forEach(edge => {
            edges.push({ from: node, to: edge})
        })
    })
    const formatedGraph = {
        nodes: graph.nodes.map(node => { return { id: node } }),
        edges: edges
    }
    return formatedGraph;
}