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
    // depth-first search
    dfs(startVertex, callback) {
        let list = this.vertices; // adjacency list
        let stack = [startVertex]; // stack of vertices for enumeration
        let visited = { [startVertex]: 1 }; // visited vertices
        function handleVertex(vertex) {
            // call callback for visited vertex
            callback(vertex);
            // obtaining adjancency list
            let reversedNeighboursList = [...list[vertex]].reverse();
            reversedNeighboursList.forEach((neighbour) => {
                if (!visited[neighbour]) {
                    // marking vertex as visited
                    visited[neighbour] = 1;
                    // adding to stack
                    stack.push(neighbour);
                }
            });
        }
        // enumerating vertices from stack, while it's not empty
        while (stack.length) {
            let activeVertex = stack.pop();
            if (activeVertex)
                handleVertex(activeVertex);
        }
        // checking if there isolated vertices
        stack = Object.keys(this.vertices);
        while (stack.length) {
            let activeVertex = stack.pop();
            if (activeVertex && !visited[activeVertex]) {
                visited[activeVertex] = 1;
                handleVertex(activeVertex);
            }
        }
    }
    // breadth-first search
    bfs(startVertex, callback) {
        let list = this.vertices; // adjancency list
        let queue = [startVertex]; // queue of vertices for enumerating
        let visited = { [startVertex]: 1 }; // visited vertices
        function handleVertex(vertex) {
            // calling callback for visited vertex
            callback(vertex);
            // obtaining adjencency list
            let neighbourList = list[vertex];
            neighbourList.forEach((neighbour) => {
                if (!visited[neighbour]) {
                    visited[neighbour] = 1;
                    queue.push(neighbour);
                }
            });
        }
        // enumerating vertices from queue, while it's not empty
        while (queue.length) {
            let activeVertex = queue.shift();
            if (activeVertex)
                handleVertex(activeVertex);
        }
        // checking if there isolated vertices
        queue = Object.keys(this.vertices);
        // repeating cycle for not visited vertices
        while (queue.length) {
            let activeVertex = queue.shift();
            if (activeVertex && !visited[activeVertex]) {
                visited[activeVertex] = 1;
                handleVertex(activeVertex);
            }
        }
    }
    // shortest way algorithm
    findShortestWay(startVertex, finishVertex) {
        let list = this.vertices;
        let queue = [startVertex];
        let visited = { [startVertex]: 1 };
        function bfs2(startVertex) {
            // shortest distance from starting vertex
            let distance = { [startVertex]: 0 };
            // previous vertex in graph
            let previous = { [startVertex]: "" };
            function handleVertex(vertex) {
                let neighbourList = list[vertex];
                neighbourList.forEach((neighbour) => {
                    if (!visited[neighbour]) {
                        visited[neighbour] = 1;
                        queue.push(neighbour);
                        // saving previous vertex
                        previous[neighbour] = vertex;
                        // saving distance
                        distance[neighbour] = distance[vertex] + 1;
                    }
                });
            }
            // enumerating vertices from queue, while it's not empty
            while (queue.length) {
                let activeVertex = queue.shift();
                if (activeVertex)
                    handleVertex(activeVertex);
            }
            return { distance, previous };
        }
        let result = bfs2(startVertex);
        if (!(finishVertex in result.previous)) {
            console.error(`Way from ${startVertex} to ${finishVertex} does not exist`);
        }
        let path = [];
        let currentVertex = finishVertex;
        while (currentVertex !== startVertex) {
            path.unshift(currentVertex);
            currentVertex = result.previous[currentVertex];
        }
        path.unshift(startVertex);
        return path;
    }
}
const graph = new Graph();
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
console.log("depth-first search");
graph.dfs("A", (v) => console.log(v));
console.log("-----------");
console.log("bradth-first search");
graph.bfs("A", (v) => console.log(v));
let graph2 = new Graph();
graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addVertex("D");
graph2.addVertex("E");
graph2.addVertex("F");
graph2.addVertex("G");
graph2.addVertex("H");
graph2.addEdge("A", "B");
graph2.addEdge("B", "F");
graph2.addEdge("F", "G");
graph2.addEdge("A", "C");
graph2.addEdge("C", "D");
graph2.addEdge("D", "F");
graph2.addEdge("C", "E");
graph2.addEdge("E", "F");
console.log("shortest way search");
console.log(graph2.findShortestWay("A", "G"));
console.log(graph2.findShortestWay("A", "Z"));
