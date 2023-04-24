
const { Graph } = require('./graph');
// Using the above implemented graph class
var g = new Graph(6);
var vertices = [ '0', '1', '2', '3', '4' ];
 
// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
 
// adding edges
g.addEdge('0', '1');
g.addEdge('0', '2');
g.addEdge('0', '3');
g.addEdge('2', '4');
 
// prints all vertex and
// its adjacency list
// 0 -> 1 2 3 
// 1 -> 0
// 2 -> 0 4
// 3 -> 0
// 4 -> 2
g.printGraph();