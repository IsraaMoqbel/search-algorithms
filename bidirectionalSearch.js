//  we start the search from both the start node and the goal node,
// and continue expanding nodes until we find a common node that has been visited by both searches.
// If we find such a node, then a path exists from the start node to the goal node, and we can return true.
// Otherwise, if we exhaust both searches without finding a common node, 
// then no path exists between the start node and the goal node, and we can return false
function bidirectionalSearch(startNode, goalNode) {
    let queue1 = [startNode];
    let queue2 = [goalNode];
    let visited1 = new Set();
    let visited2 = new Set();

    visited1.add(startNode);
    visited2.add(goalNode);

    while (queue1.length > 0 && queue2.length > 0) {
        let currentNode1 = queue1.shift();
        let currentNode2 = queue2.shift();

        if (visited2.has(currentNode1) || visited1.has(currentNode2)) {
            return true;
        }

        for (let neighbor of currentNode1.neighbors) {
            if (!visited1.has(neighbor)) {
                visited1.add(neighbor);
                queue1.push(neighbor);
            }
        }

        for (let neighbor of currentNode2.neighbors) {
            if (!visited2.has(neighbor)) {
                visited2.add(neighbor);
                queue2.push(neighbor);
            }
        }
    }
    return false;
}
