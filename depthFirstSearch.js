// We use a stack to keep track of the nodes to be visited. We start by pushing the startNode onto the stack,
// and then repeatedly pop nodes from the stack until it is empty.
// For each popped node, we mark it as visited and check if it is the goalNode. 
// If it is the goalNode, we terminate the search and return true. 
// Otherwise, we push all unvisited neighbors of the node onto the stack.
// If we exhaust all nodes reachable from startNode without finding the goalNode, 
//we return false to indicate that the goalNode is not reachable from startNode.
function depthFirstSearch(startNode, goalNode) {
    let stack = [startNode];
    let visited = new Set();

    while (stack.length > 0) {
        let currentNode = stack.pop();
        if (currentNode === goalNode) {
            return true;
        }
        visited.add(currentNode);
        for (let neighbor of currentNode.neighbors) {
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
            }
        }
    }
    return false;
}

// Another implementation using recursion.
// Starting from the startNode. We keep track of the nodes that have been visited in a visited set to avoid visiting the same node multiple times.
// We recursively explore each neighbor of the current node,
// marking them as visited as we go. If we encounter the goalNode, we terminate the search and return true. 
// If we exhaust all the neighbors without finding the goalNode, we backtrack to the previous node and continue the search. 
// If we have searched all reachable nodes from startNode without finding the goalNode, 
// we return false to indicate that the goalNode is not reachable from startNode.
function depthFirstSearchUsingRecursion(startNode, goalNode) {
    let visited = new Set();

    function dfs(node) {
        visited.add(node);
        if (node === goalNode) {
            return true;
        }
        for (let neighbor of node.neighbors) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor)) {
                    return true;
                }
            }
        }
        return false;
    }

    return dfs(startNode);
}
