"use strict";
let graph = {
    a: { b: 2, c: 1 },
    b: { f: 7 },
    c: { d: 5, e: 2 },
    d: { f: 2 },
    e: { f: 1 },
    f: { g: 1 },
    g: {},
};
function findNearestVertex(distances, visited) {
    let minDistance = Infinity;
    let nearestVertex = "";
    Object.keys(distances).forEach((vertex) => {
        if (!visited[vertex] && distances[vertex] < minDistance) {
            minDistance = distances[vertex];
            nearestVertex = vertex;
        }
    });
    return nearestVertex;
}
function dijkstra(graph, startVertex) {
    let visited = {};
    let distances = {}; // nearest paths from start vertex
    let previous = {}; // previous vertices
    let vertices = Object.keys(graph); // array of graph's vertices
    // by default all distances unknown (infinite)
    vertices.forEach((vertex) => {
        distances[vertex] = Infinity;
        previous[vertex] = null;
    });
    // distance to start vertex equal to 0
    distances[startVertex] = 0;
    function handleVertex(vertex) {
        // distances to current vertex
        let activeVertexDistance = distances[vertex];
        // adjancency vertices (with distances to them)
        let neighbours = graph[activeVertex];
        // enumerating adjancency list with their distances
        Object.keys(neighbours).forEach((neighbourVertex) => {
            // known distance for this moment
            let currentNeighboursDistance = distances[neighbourVertex];
            // calculated distance
            let newNeighbourDistance = activeVertexDistance + neighbours[neighbourVertex];
            if (newNeighbourDistance < currentNeighboursDistance) {
                distances[neighbourVertex] = newNeighbourDistance;
                previous[neighbourVertex] = vertex;
            }
        });
        // marking vertex as visited
        visited[vertex] = 1;
    }
    // looking for nearest vertex from untouched vertices
    let activeVertex = findNearestVertex(distances, visited);
    while (activeVertex) {
        handleVertex(activeVertex);
        activeVertex = findNearestVertex(distances, visited);
    }
    return { distances, previous };
}
console.log(dijkstra(graph, "a"));
