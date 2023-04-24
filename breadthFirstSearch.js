// In this implementation, we use a queue to keep track of the nodes to be visited.
//  We start by enqueueing the startNode onto the queue.
// For each dequeued node, we mark it as visited and check if it is the goalNode.
// If it is the goalNode, we terminate the search and return the path to it. 
// Otherwise, we enqueue all unvisited neighbors of the node onto the queue, 
// and update the cameFrom map to keep track of the path to each node.
// If we exhaust all nodes reachable from startNode without finding the goalNode, 
// we return null to indicate that there is no path from startNode to goalNode. 
// The constructPath function is a separate helper function that constructs the path to the goalNode using the cameFrom map.
function breadthFirstSearch(startNode, goalNode) {
    let visited = new Set();
    let queue = [startNode];
    let cameFrom = new Map();
    cameFrom.set(startNode, null);

    while (queue.length > 0) {
        let currentNode = queue.shift();
        visited.add(currentNode);

        if (currentNode === goalNode) {
            return constructPath(cameFrom, currentNode);
        }

        for (let neighbor of currentNode.neighbors) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor);
                cameFrom.set(neighbor, currentNode);
            }
        }
    }

    return null;
}

