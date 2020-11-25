import Node from './Node';

export default class Graph {
    constructor(undirected = false) {
        this.undirected = undirected;
        this.nodes = [];
    }

    addNode(value) {
        this.nodes.push(new Node(value));
    }
    removeNode(value) {
        this.nodes = this.nodes.filter(node => node.id !== value);
        this.nodes.forEach(node => {
            node.edges = node.edges.filter(edge => edge.id !== value);
        })
    }
    getNode(value) {
        return this.nodes.find(node => node.id === value);
    }

    addEdge(value1, value2) {
        const node1 = this.getNode(value1);
        const node2 = this.getNode(value2);

        node.edges.push(node2);

        if (this.undirected) {
            node2.edges.push(node1);
        }
        return;
    }
}