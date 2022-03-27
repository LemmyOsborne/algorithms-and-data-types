export class Graph {
    vertices;
    constructor() {
        this.vertices = {}; //adjacency list
    }
    addVertex(value) {
        if (!this.vertices[value]) {
            this.vertices[value] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        if (!(vertex1 in this.vertices) || !(vertex2 in this.vertices)) {
            throw new Error("Graph doesn't have this vertices");
        }
        if (!this.vertices[vertex1].includes(vertex2)) {
            this.vertices[vertex1].push(vertex2);
        }
        if (!this.vertices[vertex2].includes(vertex1)) {
            this.vertices[vertex2].push(vertex1);
        }
    }
}
export const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addVertex("H");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("A", "F");
graph.addEdge("F", "G");
